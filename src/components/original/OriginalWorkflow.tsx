export function OriginalWorkflow() {
  return (
<section className="section" id="how" style={{borderTop: '1px solid var(--hairline)'}}>
  <div className="wrap">
    <div className="section-head reveal">
      <h2>From finished workbook to reviewed draft</h2>
      <p>The order matters: extraction and scoring are deterministic and local. Judgement stays with the accountant.</p>
    </div>
    <div className="steps">
      <div className="step reveal"><h3>The workbook stays put</h3><p>The standard workflow reads the completed Excel workbook on the user’s computer and saves the outputs locally.</p></div>
      <div className="step reveal"><h3>Labels and periods matched</h3><p>The extractor finds the row label and reporting-period column, then reads their intersection. Client configuration handles differences in workbook wording.</p></div>
      <div className="step reveal"><h3>Materiality rules applied</h3><p>Margin, wage ratio, and overhead movements are scored against per-client thresholds. Immaterial noise is suppressed; recurring risk patterns are not.</p></div>
      <div className="step reveal"><h3>Draft email and dashboard out</h3><p>The tool writes the dashboard and draft email. The accountant checks the figures and commentary before sharing the review.</p></div>
    </div>
  </div>
</section>

  );
}
