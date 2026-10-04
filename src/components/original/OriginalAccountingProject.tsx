export function OriginalAccountingProject() {
  return (
<section className="section engagement" id="accounting" aria-labelledby="accounting-title">
  <div className="wrap">
    <div className="section-head">
      <h2 id="accounting-title">The workbook stays.<br />The review moves forward.</h2>
      <p>For O’Sullivan Clarke, Chartered Accountants in Co. Kildare, we automated quarterly reviews for retail clients without changing how the practice prepares its accounts.</p>
    </div>
    <div className="engagement-layout">
      <dl className="engagement-meta">
        <div><dt>Sector</dt><dd>Accounting / convenience retail</dd></div>
        <div><dt>Project</dt><dd>OSC-01 quarterly review</dd></div>
        <div><dt>Timeline</dt><dd>July–September 2026</dd></div>
        <div><dt>Our scope</dt><dd>Workbook extraction, calculations,<br />reporting and desktop launchers</dd></div>
        <div><dt>Runs on</dt><dd>Windows and macOS</dd></div>
      </dl>
      <div className="engagement-story">
        <h3>The task</h3>
        <p>Each quarter, the practice reviewed management accounts for Spar and Eurospar stores by hand: comparing periods, calculating margins, checking supporting schedules and writing the client review. The work grew with every store added to the portfolio.</p>
        <h3>What we built</h3>
        <p>We built four stages: extraction, calculation, flagging and reporting. The extractor finds figures by row label and period-date header, so an inserted row does not derail the review. Client configurations accommodate different tab names and wording. Explicit rules flag margin movements, agency variances, recurring cost spikes and bounced supplier direct debits.</p>
        <ul>
          <li>A structured analysis file containing the extracted figures, calculations, flags and warnings.</li>
          <li>A browser dashboard and draft review email in HTML, plain-text and print-ready formats.</li>
          <li>Windows and Mac launchers for choosing a workbook, running the review and opening the results, with user manuals for the handover.</li>
        </ul>
        <h3>How the accountant uses it</h3>
        <p>The accountant selects a workbook, client and reporting period, then runs the review locally. Before sending anything, they check the reporting period, flagged figures and draft commentary. The standard review uses rule-based calculations and templates; it does not require an AI service.</p>
        <h3>Checked against the accounts</h3>
        <p>Across four client workbooks, the headline figures reconciled to the practice’s reported accounts in all three comparison periods. We checked the generated output as well as the tests, including unusual date formats, split franchise fees and agency schedules.</p>
        <h3>In the practice</h3>
        <p>We installed the system with a one-click launcher. The practice then ran additional unseen accounts successfully. A fifth store exposed further workbook variations; we fixed those issues and checked that the four validated clients’ outputs remained unchanged.</p>
        <p className="evidence-note">Validation scope: four client workbooks across three comparison periods. This is evidence from the project, not a guarantee for every workbook format.</p>
      </div>
    </div>
  </div>
</section>

  );
}
