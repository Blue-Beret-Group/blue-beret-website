import { OriginalCaseStudy, CaseFacts } from './OriginalCaseStudy';

export function OriginalReviewsProject() {
  return (
<OriginalCaseStudy
  eyebrow="Case study · Customer review analysis"
  title={<>One restaurant.<br />Two different experiences.</>}
  intro="Chuan City wanted to understand its declining Google ratings. We examined review patterns across dine-in, takeaway and delivery to find where customers’ experiences differed."
  next={{href: '/work/osc-01', name: 'O’Sullivan Clarke'}}
>
<section className="section review-project" id="case-reviews" aria-label="Project summary">
  <div className="wrap">
    <div className="rating-comparison" aria-label="Average ratings by ordering channel">
      <div><strong>4.3<span>/5</span></strong><p>Dine-in</p></div>
      <div><strong>3.1<span>/5</span></strong><p>Delivery &amp; takeaway</p></div>
      <div><strong>1.2</strong><p>Star gap between ordering channels</p></div>
    </div>
    <div className="engagement-layout">
      <CaseFacts facts={[
        {label: 'Sector', value: 'Hospitality / restaurant, Dublin'},
        {label: 'Data', value: 'Public Google reviews, Jan 2019–Feb 2026'},
        {label: 'Our scope', value: 'Data collection, sentiment and topic analysis, recommendations'}
      ]} />
      <div className="review-story">
        <h2>Beyond an overall star rating</h2>
        <p>We collected 361 public Google reviews, kept the 250 with full details, and analysed the 146 that included written comments. We classified sentiment by operational theme, then used topic modelling to explore clusters of complaints.</p>
        <h2>Where the complaints concentrate</h2>
        <p>Delivery wait time came up negatively in 59% of one-star reviews, with customers describing waits of 90 minutes to two and a half hours. Food quality came up negatively in 48%. The analysis suggested long waits could contribute to food complaints, but did not establish cause and effect.</p>
        <div className="chart-panel">
          <div className="chart-head"><h2>What appears in one-star reviews?</h2></div>
          <p className="chart-context">Share with a negative mention of each theme. A review can mention more than one theme.</p>
          <div className="chart-wrap" id="revWrap">
            <svg id="revChart" viewBox="0 0 720 330" role="img" aria-label="Negative mentions in one-star reviews: delivery wait 59 percent, food quality 48 percent, delivery service 41 percent, dine-in service 37 percent, order accuracy 33 percent, value for money 19 percent." />
          </div>
          <details className="chart-table"><summary>View as table</summary><table><thead><tr><th>Theme</th><th>One-star reviews with a negative mention</th></tr></thead><tbody id="revTableBody" /></table></details>
        </div>
        <h2>Recommendations for the team</h2>
        <p>We recommended testing limits on delivery orders at peak times, proactive updates to customers when waits exceed an hour, and clearer standards for driver conduct. These are recommendations from the analysis, not claims of changes made or ratings improved.</p>
        <p className="case-note"><em>Source: Blue Beret Group case study, April 2026. Percentages describe the analysed reviews, not all customers.</em></p>
      </div>
    </div>
  </div>
</section>
</OriginalCaseStudy>
  );
}
