import { OriginalCaseStudy, CaseFacts } from './OriginalCaseStudy';
import { OriginalReviewDemo } from './OriginalReviewDemo';
import { OriginalWorkflow } from './OriginalWorkflow';
import { OriginalPrivacy } from './OriginalPrivacy';

export function OriginalAccountingProject() {
  return (
<OriginalCaseStudy
  eyebrow="Case study · Accounting automation"
  title={<>The workbook stays.<br />The review moves forward.</>}
  intro="For O’Sullivan Clarke, Chartered Accountants in Co. Kildare, we automated quarterly reviews for retail clients without changing how the practice prepares its accounts."
  next={{href: '/work/mr-wu', name: 'Mr Wu'}}
>
<section className="section engagement" id="accounting" aria-label="Project summary">
  <div className="wrap">
    <div className="engagement-layout">
      <CaseFacts facts={[
        {label: 'Sector', value: 'Accounting / convenience retail'},
        {label: 'Project', value: 'OSC-01 quarterly review'},
        {label: 'Timeline', value: 'July–September 2026'},
        {label: 'Our scope', value: <>Workbook extraction, calculations,<br />reporting and desktop launchers</>},
        {label: 'Runs on', value: 'Windows and macOS'}
      ]} />
      <div className="engagement-story">
        <h2>The task</h2>
        <p>Each quarter, the practice reviewed management accounts for Spar and Eurospar stores by hand: comparing periods, calculating margins, checking supporting schedules and writing the client review. The workload grew with every store added to the portfolio.</p>
        <h2>What we built</h2>
        <p>A four-stage system covering extraction, calculation, flagging and reporting. The extractor finds figures by row label and reporting-period header, so an inserted row doesn’t break the review. Per-client settings handle differences in tab names and wording, and clear rules flag margin movements, agency variances, recurring cost spikes and bounced supplier direct debits.</p>
        <p>The practice receives:</p>
        <ul>
          <li>A structured analysis file with the extracted figures, calculations, flags and warnings.</li>
          <li>A browser dashboard and a draft review email in HTML, plain-text and print-ready formats.</li>
          <li>One-click Windows and Mac launchers, with user manuals for handover.</li>
        </ul>
        <h2>How the accountant uses it</h2>
        <p>The accountant selects a workbook, client and reporting period, then runs the review on their own computer. Before sending anything, they check the period, the flagged figures and the draft commentary. The standard review uses rule-based calculations and templates and does not require an AI service.</p>
        <h2>Checked against the accounts</h2>
        <p>Across four client workbooks, the headline figures reconciled to the practice’s reported accounts in all three comparison periods. We tested the generated output as well as the code, including unusual date formats, split franchise fees and agency schedules.</p>
        <h2>In the practice</h2>
        <p>After installation, the practice ran further unseen accounts successfully. A fifth store revealed new workbook variations; we fixed them and confirmed that the four validated clients’ outputs were unchanged.</p>
        <p className="evidence-note"><em>Validation scope: four client workbooks across three comparison periods. This is evidence from the project, not a guarantee for every workbook format.</em></p>
      </div>
    </div>
  </div>
</section>
<OriginalReviewDemo />
<OriginalWorkflow />
<OriginalPrivacy />
</OriginalCaseStudy>
  );
}
