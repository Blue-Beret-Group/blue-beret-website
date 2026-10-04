export function OriginalReviewsProject() {
  return (
<section className="section review-project" id="case-reviews">
  <div className="wrap">
    <div className="section-head">
      <p className="eyebrow">Chuan City / Customer review analysis</p>
      <h2>One restaurant.<br />Two different experiences.</h2>
      <p>Chuan City wanted to understand its declining Google ratings. We examined review patterns across dine-in, takeaway and delivery to identify where customers’ experiences differed.</p>
    </div>
    <div className="rating-comparison" aria-label="Average ratings by ordering channel">
      <div><strong>4.3<span>/5</span></strong><p>Dine-in</p></div>
      <div><strong>3.1<span>/5</span></strong><p>Delivery &amp; takeaway</p></div>
      <p>A 1.2-star gap between ordering channels.<br /><span>Reviews collected January 2019–February 2026.</span></p>
    </div>
    <div className="review-layout">
      <div className="review-story">
        <h3>Beyond an overall star rating</h3>
        <p>We collected 361 public Google reviews, retained 250 with full metadata and analysed the 146 containing written text. We classified sentiment by operational theme, then used topic modelling to explore complaint clusters.</p>
        <h3>Where the complaints concentrate</h3>
        <p>Delivery wait time appeared negatively in 59% of one-star reviews. Customers described waits of 90 minutes to two and a half hours. Food quality appeared negatively in 48%; the analysis suggested that long delivery waits could contribute, but did not establish causation.</p>
        <h3>Recommendations for the team</h3>
        <p>We recommended testing peak-time delivery limits, proactive updates when waits exceed an hour, and clearer driver conduct standards. These are recommendations from the analysis, not claims of implemented changes or improved ratings.</p>
      </div>
      <div className="chart-panel">
        <div className="chart-head"><h3>What appears in one-star reviews?</h3></div>
        <p className="chart-context">Share with a negative mention of each theme. A review can mention more than one theme.</p>
        <div className="chart-wrap" id="revWrap">
          <svg id="revChart" viewBox="0 0 720 330" role="img" aria-label="Negative mentions in one-star reviews: delivery wait 59 percent, food quality 48 percent, delivery service 41 percent, dine-in service 37 percent, order accuracy 33 percent, value for money 19 percent." />
        </div>
        <details className="chart-table"><summary>View as table</summary><table><thead><tr><th>Theme</th><th>One-star reviews with a negative mention</th></tr></thead><tbody id="revTableBody" /></table></details>
        <p className="case-note">Source: Blue Beret Group case study, April 2026. Percentages describe the analysed reviews, not all customers.</p>
      </div>
    </div>
  </div>
</section>

  );
}
