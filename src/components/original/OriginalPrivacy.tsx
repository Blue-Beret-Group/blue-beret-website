export function OriginalPrivacy() {
  return (
<section className="band" id="privacy">
  <div className="wrap band-grid">
    <div className="band-copy reveal">
      <h2>A local workflow, with human review</h2>
      <p>For the accounting project, the standard workflow reads workbooks and writes the analysis, dashboard and email files <strong>on the user’s computer</strong>. The core calculations and email templates run without an AI service.</p>
      <p>An optional AI wording step is separate from the standard review. It sends draft text to an external service, so the practice needs to review that data flow before enabling it. The accountant checks the final wording.</p>
    </div>
    <div className="reveal">
      <div className="band-panel">
        <h3>Keep sensitive source material out of AI prompts</h3>
        <div className="chips">
          <span className="chip blocked">PPSN</span>
          <span className="chip blocked">Tax references</span>
          <span className="chip blocked">VAT numbers</span>
          <span className="chip blocked">IBANs</span>
          <span className="chip blocked">Card numbers</span>
          <span className="chip blocked">Passwords</span>
          <span className="chip blocked">Bank statements</span>
          <span className="chip blocked">Payroll files</span>
          <span className="chip blocked">AML / KYC material</span>
          <span className="chip blocked">SAR / STR material</span>
        </div>
      </div>
      <div className="band-panel">
        <h3>Check before sending</h3>
        <p className="ok-note">Review the client name, reporting period, draft or pending figures and points of interest. <strong>The accountant approves the review before sending it.</strong></p>
      </div>
    </div>
  </div>
</section>

  );
}
