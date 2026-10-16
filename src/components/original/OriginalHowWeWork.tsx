export function OriginalHowWeWork() {
  return (
<section className="section trust" id="how-we-work" aria-labelledby="how-we-work-title">
  <div className="wrap">
    <div className="section-head">
      <h2 id="how-we-work-title">Your data stays yours</h2>
    </div>
    <ul className="trust-list">
      <li>
        <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <rect x={3} y={4} width={18} height={12} rx={1.5} /><path d="M8 20h8M12 16v4" />
        </svg>
        <h3>Local by default.</h3>
        <p>Where possible, our tools run on your own computer and save results there.</p>
      </li>
      <li>
        <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <rect x={5} y={10} width={14} height={10} rx={1.5} /><path d="M8 10V7a4 4 0 0 1 8 0v3" />
        </svg>
        <h3>Privacy built in.</h3>
        <p>We follow GDPR principles from day one: only the data we need, used only for the agreed purpose.</p>
      </li>
      <li>
        <svg width={28} height={28} viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
          <circle cx={12} cy={8} r={3.5} /><path d="M5 20c1-3.5 3.8-5.5 7-5.5s6 2 7 5.5" />
        </svg>
        <h3>People sign off.</h3>
        <p>Our tools draft and flag. You make the final call before anything is shared.</p>
      </li>
    </ul>
  </div>
</section>
  );
}
