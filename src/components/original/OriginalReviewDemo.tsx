export function OriginalReviewDemo() {
  return (
<section className="section" id="demo" style={{borderTop: '1px solid var(--hairline)'}}>
  <div className="wrap">
    <div className="section-head reveal">
      <h2>Explore the review dashboard</h2>
      <p>This interactive demonstration uses fictional figures. Choose a quarter to see how the review highlights changes in margin, wages and working capital.</p>
    </div>
    <div className="scenarios" role="group" aria-label="Choose a demo scenario">
      <button className="scenario-btn" data-scenario="steady" aria-pressed="true">Steady quarter</button>
      <button className="scenario-btn" data-scenario="pressure" aria-pressed="false">Margin pressure</button>
      <button className="scenario-btn" data-scenario="crunch" aria-pressed="false">Cash crunch</button>
    </div>
    <div className="tiles" id="tiles">
      <div className="tile"><p>Sales</p><strong data-tile="sales">…</strong></div>
      <div className="tile"><p>Gross margin</p><strong data-tile="gm">…</strong></div>
      <div className="tile"><p>Wages / sales</p><strong data-tile="wages">…</strong></div>
      <div className="tile"><p>Final result</p><strong data-tile="final">…</strong></div>
    </div>
    <div className="cards" id="cards" aria-live="polite">
      <article className="card" data-card="gm">
        <p className="status">…</p>
        <h3>Gross profit margin</h3>
        <span className="fig">…</span>
        <p className="desc">…</p>
      </article>
      <article className="card" data-card="wages">
        <p className="status">…</p>
        <h3>Wages as % of sales</h3>
        <span className="fig">…</span>
        <p className="desc">…</p>
      </article>
      <article className="card" data-card="trading">
        <p className="status">…</p>
        <h3>Trading result</h3>
        <span className="fig">…</span>
        <p className="desc">…</p>
      </article>
      <article className="card" data-card="ncp">
        <p className="status">…</p>
        <h3>Net current position</h3>
        <span className="fig">…</span>
        <p className="desc">…</p>
      </article>
      <article className="card" data-card="agency">
        <p className="status">…</p>
        <h3>Agency control</h3>
        <span className="fig">…</span>
        <p className="desc">…</p>
      </article>
    </div>
  </div>
</section>

  );
}
