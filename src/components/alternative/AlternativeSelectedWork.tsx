export function AlternativeSelectedWork() {
  return (
<section className="shell work" id="work" aria-labelledby="workTitle">
  <h2 className="section-title" id="workTitle">The work speaks.</h2>
  <div className="projects">
    <article className="project" id="accounting">
      <div className="project-art"><p className="art-statement">Same workbook.<br /><em>New workflow.</em></p><div className="pipeline" role="img" aria-label="An Excel workbook becomes a dashboard, review note and analysis file"><div className="sheet"><strong>Quarterly accounts</strong><div className="sheet-lines" aria-hidden="true" /></div><span className="pipeline-arrow" aria-hidden="true">→</span><div className="output-stack"><span>Dashboard</span><span>Review note</span><span>Analysis file</span></div></div></div>
      <div className="project-caption"><div><h3>O’Sullivan Clarke</h3><p>Reporting automation · July–September 2026</p></div></div>
      <details><summary>Inside the project</summary><div className="project-text"><p><strong>The question:</strong> could the practice prepare quarterly management-account reviews without repeating the same manual calculations for every retail client?</p><p>We built a local workflow that finds figures by row labels and reporting dates, calculates the comparisons, applies review rules and produces a dashboard, review note and structured analysis file. The practice keeps its existing workbooks.</p><p>Headline figures reconciled across four client workbooks and three comparison periods. After installation, the practice ran additional unseen accounts. A fifth store exposed new format variations; we fixed them and checked the four validated clients again. The accountant checks the output before sending it.</p><dl className="project-facts"><div><dt>Validated during the build</dt><dd>4 client workbooks</dd></div><div><dt>Compared per workbook</dt><dd>3 reporting periods</dd></div><div><dt>Standard workflow</dt><dd>Runs locally</dd></div></dl></div></details>
    </article>
    <article className="project" id="sales">
      <div className="project-art sales-art" role="img" aria-label="Mr Wu average daily net sales: Monday 1,233.91 euro and Saturday 3,665.89 euro"><p className="sales-top">A different kind of Saturday.</p><div className="sales-chart" aria-hidden="true"><div className="sales-bar"><b>€1,234</b></div><div className="sales-bar"><b>€3,666</b></div></div><div className="sales-labels" aria-hidden="true"><span>Monday</span><span>Saturday</span></div></div>
      <div className="project-caption"><div><h3>Mr Wu</h3><p>Sales analysis &amp; channel economics</p></div></div>
      <details><summary>Inside the project</summary><div className="project-text"><p>We examined 396 daily records covering January 2025–January 2026: 30,291 orders and €878,385.31 in recorded net sales.</p><p>Saturday averaged €3,665.89 in sales, almost three times Monday’s €1,233.91. The analysis informed recommendations for staffing, stock preparation and a limited direct-order incentive pilot.</p><p>Moving 20% of Just Eat orders to owned channels produced a <strong>modelled €7,606.82 improvement before food costs</strong>, assuming all displaced demand was retained. This is an opportunity estimate, not a realised saving. Ingredient costs were absent from the records; incentives and fulfilment costs would also affect the outcome.</p></div></details>
    </article>
    <article className="project" id="reviews">
      <div className="project-art rating-art"><div className="rating-pair"><div><strong>4.3</strong><p>Dine-in<br />average rating / 5</p></div><span className="rating-rule" aria-hidden="true" /><div><strong>3.1</strong><p>Delivery &amp; takeaway<br />average rating / 5</p></div></div><p>One restaurant. Two customer experiences.</p><div className="review-topics"><span>Wait times</span><span>Food quality</span><span>Service</span></div></div>
      <div className="project-caption"><div><h3>Chuan City</h3><p>Customer reviews &amp; reputation analysis</p></div></div>
      <details><summary>Inside the project</summary><div className="project-text"><p>Chuan City wanted to understand declining Google ratings. We collected 361 reviews, retained 250 with full metadata and analysed the 146 containing written text.</p><p>Delivery and takeaway averaged 3.1 stars against 4.3 for dine-in. Delivery wait time appeared negatively in <strong>59% of one-star reviews</strong>; food quality appeared negatively in 48%. These review patterns suggest where to investigate, without establishing causation.</p><p>We recommended peak-time delivery limits, proactive wait updates and clearer driver conduct standards. These were recommendations from the analysis; we do not claim subsequent changes in ratings.</p></div></details>
    </article>
  </div>
</section>

  );
}
