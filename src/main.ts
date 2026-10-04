export {};
(function () {
  "use strict";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const fmtEUR = (v: number) => (v < 0 ? "−€" : "€") + Math.abs(Math.round(v)).toLocaleString("en-IE");
  const fmtEURSigned = (v: number) => (v < 0 ? "−€" : "+€") + Math.abs(Math.round(v)).toLocaleString("en-IE");
  type Status = 'low' | 'medium' | 'high';
  type Scenario = { sales: number; gm: number; wagesPct: number; wagesAmt: number; final: number;
    gmCard: {s: Status; fig: string; desc: string}; tradingCard: {s: Status; v: number; desc: string};
    ncpCard: {s: Status; v: number; desc: string}; agencyCard: {s: Status; fig: string; desc: string} };
  // This finds an element with its expected TypeScript type and reports a
  // missing element immediately instead of failing later with a null error.
  const required = <T extends Element = HTMLElement>(selector: string): T => {
    const node = document.querySelector<T>(selector);
    if (!node) throw new Error(`Missing page element: ${selector}`);
    return node;
  };

  /* ---------- Scenario data (fictional) ---------- */
  const SCENARIOS: Record<'steady' | 'pressure' | 'crunch', Scenario> = {
    steady: {
      sales: 1042300, gm: 27.4, wagesPct: 14.2, wagesAmt: 148010, final: 14980,
      gmCard:      { s: "low",  fig: "27.4%", desc: "Grocery margin is 27.4% against 26.8% in the previous quarter." },
      tradingCard: { s: "low",  v: 21450,  desc: "Profit before directors' salary and non-trade adjustments is €21,450." },
      ncpCard:     { s: "low",  v: 38400,  desc: "Net current assets stand at €38,400; working capital is covering itself." },
      agencyCard:  { s: "low",  fig: "€12.40", desc: "Agency variance for the year is €12.40. Controls are holding." }
    },
    pressure: {
      sales: 992228, gm: 25.3, wagesPct: 16.5, wagesAmt: 163826, final: -39898,
      gmCard:      { s: "medium", fig: "25.3%", desc: "Grocery margin is 25.3% against 23.9% in the previous quarter: recovering, still below plan." },
      tradingCard: { s: "high",   v: -25185, desc: "Loss before directors' salary and non-trade adjustments is −€25,185." },
      ncpCard:     { s: "high",   v: -241039, desc: "Net current liabilities are −€241,039. Creditor pressure is building." },
      agencyCard:  { s: "low",    fig: "€69.81", desc: "Agency variance for the year is €69.81, inside tolerance." }
    },
    crunch: {
      sales: 914600, gm: 24.1, wagesPct: 18.9, wagesAmt: 172860, final: -61240,
      gmCard:      { s: "medium", fig: "24.1%", desc: "Grocery margin has slipped to 24.1%, the third consecutive quarterly decline." },
      tradingCard: { s: "high",   v: -48320, desc: "Loss before directors' salary and non-trade adjustments is −€48,320." },
      ncpCard:     { s: "high",   v: -310270, desc: "Net current liabilities are −€310,270. Immediate cash-flow attention needed." },
      agencyCard:  { s: "high",   fig: "€4,210", desc: "Agency variance of €4,210 breaches control tolerance. Investigate before quarter close." }
    }
  };
  const STATUS_LABEL = { low: "Low concern", medium: "Medium concern", high: "High concern" };

  let current: keyof typeof SCENARIOS = "steady";
  let amber = 15;

  const tiles = {
    sales: required('[data-tile="sales"]'),
    gm: required('[data-tile="gm"]'),
    wages: required('[data-tile="wages"]'),
    final: required('[data-tile="final"]')
  };
  const tileVals = { sales: 0, gm: 0, wages: 0, final: 0 };

  function setTile(key: keyof typeof tiles, target: number, fmt: (value: number) => string) {
    // This eases the number from its old value to the new one. Reduced-motion
    // users see the final value immediately.
    const from = tileVals[key];
    tileVals[key] = target;
    const el = tiles[key];
    el.classList.toggle("neg", key === "final" && target < 0);
    if (reduced || from === 0) { el.textContent = fmt(target); return; }
    const t0 = performance.now(), dur = 420;
    (function frame(t: number) {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmt(from + (target - from) * e);
      if (k < 1) requestAnimationFrame(frame);
    })(t0);
  }

  function setCard(name: string, status: Status, fig: string, desc: string) {
    const card = required('[data-card="' + name + '"]');
    card.classList.remove("low", "medium", "high");
    card.classList.add(status);
    card.querySelector(".status")!.textContent = STATUS_LABEL[status];
    card.querySelector(".fig")!.textContent = fig;
    card.querySelector(".desc")!.textContent = desc;
  }

  function wagesStatus(pct: number): Status {
    if (pct >= amber + 3) return "high";
    if (pct >= amber) return "medium";
    return "low";
  }

  function render() {
    const s = SCENARIOS[current];
    setTile("sales", s.sales, fmtEUR);
    setTile("gm", s.gm, (v) => v.toFixed(1) + "%");
    setTile("wages", s.wagesPct, (v) => v.toFixed(1) + "%");
    setTile("final", s.final, fmtEURSigned);
    setCard("gm", s.gmCard.s, s.gmCard.fig, s.gmCard.desc);
    setCard("wages", wagesStatus(s.wagesPct), s.wagesPct.toFixed(1) + "%",
      "Wages are " + fmtEUR(s.wagesAmt) + ", equal to " + s.wagesPct.toFixed(1) + "% of sales.");
    setCard("trading", s.tradingCard.s, fmtEUR(s.tradingCard.v), s.tradingCard.desc);
    setCard("ncp", s.ncpCard.s, fmtEUR(s.ncpCard.v), s.ncpCard.desc);
    setCard("agency", s.agencyCard.s, s.agencyCard.fig, s.agencyCard.desc);
  }

  document.querySelectorAll<HTMLButtonElement>(".scenario-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const scenario = btn.dataset.scenario;
      if (scenario !== 'steady' && scenario !== 'pressure' && scenario !== 'crunch') return;
      current = scenario;
      document.querySelectorAll(".scenario-btn").forEach((b) =>
        b.setAttribute("aria-pressed", String(b === btn)));
      render();
      if (!reduced) {
        const cc = required('#cards');
        cc.classList.remove("swap");
        void cc.offsetWidth;
        cc.classList.add("swap");
      }
    });
  });

  render();

  /* ---------- Case study bar chart ---------- */
  const DAYS = [{ d: "Monday", sales: 1233.91, orders: 42.43 }, { d: "Saturday", sales: 3665.89, orders: 125.51, wk: true }];
  const svg = required<SVGSVGElement>('#weekChart');
  const NS = "http://www.w3.org/2000/svg";
  const W = 720, H = 300, M = { top: 26, right: 12, bottom: 34, left: 56 };
  const iw = W - M.left - M.right, ih = H - M.top - M.bottom;
  const yMax = 4000;
  const y = (v: number) => M.top + ih - (v / yMax) * ih;
  const band = iw / DAYS.length, barW = band * 0.54;

  function el(tag: string, attrs: Record<string, string | number>, parent: Element = svg) {
    // SVG shapes need their own namespace; createElement would make HTML nodes.
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, String(attrs[k]));
    (parent || svg).appendChild(n);
    return n;
  }

  for (let g = 0; g <= 4; g++) {
    const gy = y(g * 1000);
    el("line", { x1: M.left, x2: W - M.right, y1: gy, y2: gy,
      stroke: g === 0 ? "var(--hairline)" : "var(--grid)", "stroke-width": 1 });
    if (g > 0) {
      const lbl = el("text", { x: M.left - 10, y: gy + 4, "text-anchor": "end",
        "font-family": "var(--font-mono)", "font-size": 11, fill: "var(--muted)" });
      lbl.textContent = "€" + g + "k";
    }
  }

  const tip = required('#chartTip');
  const wrap = required('#chartWrap');

  DAYS.forEach((day, i) => {
    const cx = M.left + band * i + band / 2;
    const x0 = cx - barW / 2, yTop = y(day.sales), h = M.top + ih - yTop, r = 4;
    const grp = el("g", { class: "bar", tabindex: 0, role: "img",
      "aria-label": day.d + ": average net sales " + fmtEUR(day.sales) + ", average orders " + day.orders });
    el("path", {
      class: "bar-rect",
      d: "M" + x0 + " " + (yTop + h) + " L" + x0 + " " + (yTop + r) +
         " Q" + x0 + " " + yTop + " " + (x0 + r) + " " + yTop +
         " L" + (x0 + barW - r) + " " + yTop +
         " Q" + (x0 + barW) + " " + yTop + " " + (x0 + barW) + " " + (yTop + r) +
         " L" + (x0 + barW) + " " + (yTop + h) + " Z",
      fill: day.wk ? "var(--bar-emph)" : "var(--bar-base)"
    }, grp);
    if (day.wk) {
      const v = el("text", { x: cx, y: yTop - 8, "text-anchor": "middle",
        "font-family": "var(--font-mono)", "font-size": 11.5, fill: "var(--ink-2)" }, grp);
      v.textContent = "€" + day.sales.toLocaleString("en-IE");
    }
    const dl = el("text", { x: cx, y: H - 12, "text-anchor": "middle",
      "font-family": "var(--font-mono)", "font-size": 12, fill: "var(--ink-2)" });
    dl.textContent = day.d;

    function showTip() {
      // This scales chart coordinates to screen pixels and keeps the tooltip
      // inside the chart when the screen is narrow.
      tip.innerHTML = "<strong>" + day.d + (day.wk ? " · weekend" : "") + "</strong><br>" +
        "avg net sales " + fmtEUR(day.sales) + "<br>avg orders " + day.orders;
      const wr = wrap.getBoundingClientRect();
      const sx = wr.width / W;
      let left = cx * sx + 14, top = yTop * sx;
      tip.classList.add("show");
      const tw = tip.offsetWidth;
      if (left + tw > wr.width - 8) left = cx * sx - tw - 14;
      tip.style.left = left + "px";
      tip.style.top = Math.max(4, top) + "px";
    }
    function hideTip() { tip.classList.remove("show"); }
    grp.addEventListener("mouseenter", showTip);
    grp.addEventListener("mouseleave", hideTip);
    grp.addEventListener("focus", showTip);
    grp.addEventListener("blur", hideTip);
  });

  const tbody = required('#chartTableBody');
  DAYS.forEach((day) => {
    const tr = document.createElement("tr");
    tr.innerHTML = "<td>" + day.d + "</td><td>" + fmtEUR(day.sales) + "</td><td>" + day.orders + "</td>";
    tbody.appendChild(tr);
  });

  /* Negative mentions: supplied case-study Figure 1, one-star reviews only. */
  const THEMES = [
    {t:"Delivery wait",neg:59}, {t:"Food quality",neg:48},
    {t:"Delivery service",neg:41}, {t:"Dine-in service",neg:37},
    {t:"Order accuracy",neg:33}, {t:"Value for money",neg:19}
  ];
  const rsvg = required<SVGSVGElement>('#revChart');
  function rel(tag: string, attrs: Record<string, string | number>) {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, String(attrs[k]));
    rsvg.appendChild(n); return n;
  }
  THEMES.forEach((th,i) => {
    const y = 18 + i * 46;
    const label = rel("text",{x:0,y:y+17,fill:"var(--ink-2)","font-size":16,"font-family":"var(--font-body)"});
    label.textContent=th.t;
    rel("rect",{x:170,y:y,width:th.neg*6.4,height:26,fill:i===0?"var(--bar-emph)":"var(--bar-base)",class:"bar-rect"});
    const value=rel("text",{x:180+th.neg*6.4,y:y+18,fill:"var(--ink)","font-size":16,"font-family":"var(--font-mono)"});
    value.textContent=th.neg+"%";
    const row=document.createElement("tr");
    row.innerHTML="<td>"+th.t+"</td><td>"+th.neg+"%</td>";
    required('#revTableBody').appendChild(row);
  });
  [0,20,40,60,80].forEach(v=>{
    const label=rel("text",{x:170+v*6.4,y:320,fill:"var(--muted)","font-size":14,"text-anchor":"middle"});
    label.textContent=v+"%";
  });

  /* ---------- Hero sparkline canvas ---------- */
  (function () {
    if (reduced) return;
    const canvas = document.querySelector<HTMLCanvasElement>('#heroCanvas');
    const hero = document.querySelector<HTMLElement>(".hero");
    if (!canvas || !hero) return;
    const context = canvas.getContext("2d");
    if (!context) return;
    const ctx = context;
    let w = 0, h = 0, raf = 0, running = false, col = "#2a78d6", tick = 0;
    function size() {
      // This makes the canvas sharp on high-density displays while keeping
      // drawing coordinates in CSS pixels. The cap limits rendering work.
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = hero!.clientWidth; h = hero!.clientHeight;
      canvas!.width = w * dpr; canvas!.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    function readAccent() {
      col = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#2a78d6";
    }
    readAccent();
    class Line {
      // Keeping only the latest points creates a short moving trace.
      x = 0; y = 0; pts: [number, number][] = []; speed = 0; delay = 0; alpha = 0;
      constructor(delay: number) { this.reset(delay); }
      reset(delay?: number) {
      this.x = -30;
      this.y = h * (0.22 + Math.random() * 0.58);
      this.pts = [];
      this.speed = 1.1 + Math.random() * 0.9;
      this.delay = delay != null ? delay : 60 + Math.random() * 240;
      this.alpha = 0.09 + Math.random() * 0.09;
      }
      step() {
      if (this.delay > 0) { this.delay--; return; }
      this.x += this.speed;
      this.y += (Math.random() - 0.53) * 6.5;
      this.y = Math.max(36, Math.min(h - 28, this.y));
      this.pts.push([this.x, this.y]);
      if (this.pts.length > 90) this.pts.shift();
      if (this.x > w + 50) this.reset();
      }
      draw() {
      if (this.pts.length < 2) return;
      ctx.beginPath();
      ctx.moveTo(this.pts[0][0], this.pts[0][1]);
      for (let i = 1; i < this.pts.length; i++) ctx.lineTo(this.pts[i][0], this.pts[i][1]);
      ctx.strokeStyle = col;
      ctx.globalAlpha = this.alpha;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      const last = this.pts[this.pts.length - 1];
      ctx.globalAlpha = Math.min(1, this.alpha * 2.4);
      ctx.beginPath();
      ctx.arc(last[0], last[1], 2.4, 0, 6.2832);
      ctx.fillStyle = col;
      ctx.fill();
      ctx.globalAlpha = 1;
      }
    }
    const lines = [new Line(0), new Line(30), new Line(60), new Line(90)];
    lines.forEach((line, i) => { line.x = w * (i / 4); });
    function frame() {
      tick++;
      if (tick % 40 === 0) readAccent();
      ctx.clearRect(0, 0, w, h);
      for (const l of lines) { l.step(); l.draw(); }
      raf = requestAnimationFrame(frame);
    }
    const cio = new IntersectionObserver((es) => {
      // This stops drawing when the hero is offscreen to avoid wasted work.
      es.forEach((e) => {
        if (e.isIntersecting && !running) { running = true; frame(); }
        else if (!e.isIntersecting && running) { running = false; cancelAnimationFrame(raf); }
      });
    });
    cio.observe(hero);
  })();

  /* ---------- Count-up stat tiles ---------- */
  function fmtCount(el: HTMLElement, v: number) {
    const dec = +(el.dataset.decimals || 0);
    return (el.dataset.prefix || "") +
      v.toLocaleString("en-IE", { minimumFractionDigits: dec, maximumFractionDigits: dec }) +
      (el.dataset.suffix || "");
  }
  function countUp(el: HTMLElement) {
    const target = parseFloat(el.dataset.countup ?? '0');
    if (reduced) { el.textContent = fmtCount(el, target); return; }
    const t0 = performance.now(), dur = 950;
    (function f(t: number) {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 3);
      el.textContent = fmtCount(el, target * e);
      if (k < 1) requestAnimationFrame(f);
    })(t0);
  }
  if ("IntersectionObserver" in window) {
    const cuIO = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) { countUp(e.target as HTMLElement); cuIO.unobserve(e.target); } });
    }, { threshold: 0.4 });
    document.querySelectorAll("[data-countup]").forEach((n) => cuIO.observe(n));
  }

  /* ---------- Charts grow in on scroll ---------- */
  if (!reduced && "IntersectionObserver" in window) {
    [svg, rsvg].forEach((chart) => {
      chart.classList.add("pre");
      chart.querySelectorAll<SVGElement>(".bar-rect").forEach((r, i) => {
        r.style.transitionDelay = (i * 60) + "ms";
      });
    });
    const gio = new IntersectionObserver((es) => {
      es.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.remove("pre"); gio.unobserve(e.target); }
      });
    }, { threshold: 0.35 });
    gio.observe(svg);
    gio.observe(rsvg);
  }

  /* ---------- Scroll reveal ---------- */
  if (!reduced && "IntersectionObserver" in window) {
    document.querySelectorAll("section, header").forEach((sec) => {
      sec.querySelectorAll<HTMLElement>(".reveal").forEach((n, i) => {
        n.style.transitionDelay = Math.min(i * 80, 320) + "ms";
      });
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
          setTimeout(() => { (e.target as HTMLElement).style.transitionDelay = ""; }, 1100);
        }
      });
    }, { threshold: 0.15 });
    document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
  } else {
    document.querySelectorAll(".reveal").forEach((n) => n.classList.add("in"));
  }
})();
