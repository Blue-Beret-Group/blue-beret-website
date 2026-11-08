export function OriginalServices() {
  return (
<section className="section" id="services" style={{borderTop: '1px solid var(--hairline)'}}>
  <div className="wrap">
    <div className="section-head reveal">
      <h2>Advice, analysis and working tools</h2>
      <p>We work with business owners and small teams who need help with their data, or with a process that takes too much time.</p>
    </div>
    <div className="svcs">
      <article className="svc reveal">
        <p className="svc-kind">Consulting</p>
        <h3>Decide what to build, then build it</h3>
        <p>We review the process, the data and the constraints, then give you a clear scope and honest advice on where automation will actually help. When it will, we build it: dashboards, checks, draft reports and automations around the workbooks and exports you already use, ready to run again next quarter.</p>
      </article>
      <article className="svc reveal">
        <p className="svc-kind">Analysis</p>
        <h3>Answer a business question</h3>
        <p>We analyse sales, costs and customer feedback to support decisions on staffing, stock and sales channels.</p>
      </article>
    </div>
    <p className="svcs-foot">Plus the odd job that doesn&apos;t fit a category: one-off scripts, spreadsheet rescues and quick fixes.</p>
  </div>
</section>

  );
}
