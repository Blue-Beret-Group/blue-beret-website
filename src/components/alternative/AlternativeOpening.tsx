import type { CSSProperties } from 'react';
export function AlternativeOpening() {
  // --i gives each row a distinct position and height as CSS scroll progress
  // turns the spreadsheet illustration into a report chart.
  return (
<section className="hero" aria-labelledby="heroTitle">
  <div className="hero-inner shell">
    <p className="hero-meta">Independent data &amp; AI consultancy</p>
    <h1 id="heroTitle">Data into<br />direction.</h1>
    <div className="report-stage" role="img" aria-label="Illustration: spreadsheet rows become a clear report as you scroll">
      <div className="report-paper" aria-hidden="true">
        <p className="report-heading">The everyday spreadsheet<span>Rows, columns. A question waiting to be answered.</span></p>
        <div className="report-grid" />
        <i className="report-row" style={{'--i': 0} as CSSProperties} /><i className="report-row" style={{'--i': 1} as CSSProperties} /><i className="report-row" style={{'--i': 2} as CSSProperties} /><i className="report-row" style={{'--i': 3} as CSSProperties} />
        <p className="report-result">A clearer picture.<small>Ready for a closer look. Ready for a decision.</small></p>
        <p className="report-note">Blue Beret / Illustrative workflow</p>
      </div>
      <p className="opening-caption" aria-hidden="true">Spreadsheet <span>→</span> Report <span>↓</span> Scroll to transform</p>
    </div>
    <div className="hero-bottom">
      <p>We turn business questions into clear analysis and software your team can use.</p>
    </div>
  </div>
  <button className="motion-toggle" id="motionToggle" aria-pressed="false">Pause background</button>
</section>

  );
}
