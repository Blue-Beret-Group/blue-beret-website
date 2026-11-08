// Receives the contact form and emails it to Blue Beret through Resend.
// Every field is checked against a fixed list, length limits and character
// rules here on the server; the browser checks are only a convenience.

const MAX_BODY_BYTES = 16_000;
const MIN_FILL_MS = 3_000;
const RATE_WINDOW_MS = 10 * 60_000;
const RATE_MAX = 5;

const TO = process.env.CONTACT_TO_EMAIL || 'blueberetgroup@gmail.com';
const FROM = process.env.CONTACT_FROM_EMAIL || 'Blue Beret website <onboarding@resend.dev>';
const ORG_TYPES = ['Small business', 'Charity or NGO', 'Other'] as const;

type Field = { max: number; required: boolean; multiline: boolean; min?: number };
const FIELDS = {
  name: { max: 100, required: true, multiline: false },
  email: { max: 254, required: true, multiline: false },
  organisation: { max: 150, required: false, multiline: false },
  orgType: { max: 40, required: false, multiline: false },
  message: { max: 3000, required: true, multiline: true, min: 20 },
  tools: { max: 500, required: false, multiline: true }
} satisfies Record<string, Field>;
type Enquiry = Record<keyof typeof FIELDS, string>;

// Best effort only: serverless instances do not share memory, so this slows a
// single noisy sender rather than guaranteeing a global limit.
const recent = new Map<string, number[]>();
function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > RATE_MAX;
}

const json = (status: number, body: object) => Response.json(body, { status });
const escapeHtml = (s: string) => s.replace(/[&<>"']/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

// Control characters are never legitimate in a form field. Single-line fields
// also refuse line breaks, which blocks email header injection.
const BAD_SINGLE = /[\u0000-\u001f\u007f]/;
const BAD_MULTI = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/;
const EMAIL = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$/;

function validate(raw: unknown): { ok: true; data: Enquiry } | { ok: false; error: string } {
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) return { ok: false, error: 'Invalid request.' };
  const input = raw as Record<string, unknown>;
  const data = {} as Enquiry;
  for (const [key, rule] of Object.entries(FIELDS) as [keyof Enquiry, Field][]) {
    const value = input[key] ?? '';
    if (typeof value !== 'string') return { ok: false, error: 'Invalid request.' };
    const v = value.normalize('NFC').trim();
    if (rule.required && !v) return { ok: false, error: 'Please fill in the required fields.' };
    if (v.length > rule.max) return { ok: false, error: 'One of the fields is too long.' };
    if (rule.min && v.length < rule.min) return { ok: false, error: 'Please tell us a little more about the problem.' };
    if ((rule.multiline ? BAD_MULTI : BAD_SINGLE).test(v)) return { ok: false, error: 'One of the fields contains characters we can’t accept.' };
    data[key] = v;
  }
  if (!EMAIL.test(data.email)) return { ok: false, error: 'Please enter a valid email address.' };
  if (data.orgType && !(ORG_TYPES as readonly string[]).includes(data.orgType)) return { ok: false, error: 'Invalid request.' };
  return { ok: true, data };
}

export async function POST(request: Request) {
  // Only accept submissions sent from this site's own pages.
  const origin = request.headers.get('origin');
  const host = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  let sameSite = false;
  try { sameSite = !!origin && !!host && new URL(origin).host === host; } catch { /* malformed Origin */ }
  if (!sameSite) return json(403, { error: 'Forbidden.' });
  if (!(request.headers.get('content-type') ?? '').startsWith('application/json')) return json(415, { error: 'Invalid request.' });

  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0].trim() || 'unknown';
  if (rateLimited(ip)) return json(429, { error: 'Too many messages. Please try again later or email us.' });

  const text = await request.text();
  if (new TextEncoder().encode(text).length > MAX_BODY_BYTES) return json(413, { error: 'Your message is too long.' });
  let body: Record<string, unknown>;
  try { body = JSON.parse(text); } catch { return json(400, { error: 'Invalid request.' }); }
  if (typeof body !== 'object' || body === null) return json(400, { error: 'Invalid request.' });

  // Bots tend to fill the hidden field or submit instantly. Pretend success so
  // they get no signal to adapt to.
  const startedAt = Number(body.startedAt);
  if (body.website || !Number.isFinite(startedAt) || Date.now() - startedAt < MIN_FILL_MS) return json(200, { ok: true });

  const result = validate(body);
  if (!result.ok) return json(400, { error: result.error });
  const d = result.data;

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('Contact form: RESEND_API_KEY is not set.');
    return json(503, { error: 'The form is not available right now. Please email us instead.' });
  }

  const rows: [string, string][] = [
    ['Name', d.name], ['Email', d.email], ['Organisation', d.organisation || '—'],
    ['Organisation type', d.orgType || '—'], ['What they’re trying to do', d.message],
    ['Files and tools', d.tools || '—']
  ];
  const html = '<table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif">' +
    rows.map(([k, v]) => `<tr><th align="left" valign="top">${k}</th><td style="white-space:pre-wrap">${escapeHtml(v)}</td></tr>`).join('') +
    '</table>';
  const plain = rows.map(([k, v]) => `${k}: ${v}`).join('\n\n');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from: FROM, to: [TO], reply_to: d.email, subject: `Website enquiry from ${d.name}`, html, text: plain })
  });
  if (!res.ok) {
    console.error('Contact form: Resend returned', res.status);
    return json(502, { error: 'We couldn’t send your message. Please email us instead.' });
  }
  return json(200, { ok: true });
}
