export function OriginalWorkIndex() {
  return (
<section className="work-index" id="work" aria-labelledby="work-title">
  <div className="wrap">
    <h2 id="work-title">Three projects. Three different questions.</h2>
    <div className="work-cards">
      <a className="work-card" href="/work/osc-01">
        <span className="project-sector">Accounting automation</span>
        <h3>O’Sullivan Clarke</h3>
        <p>A chartered accountancy reviewed Spar and Eurospar management accounts by hand every quarter. We built a local tool that extracts the figures, flags what matters and drafts the client review. It reconciled to the practice’s accounts across every store tested and is now in use.</p>
        <span className="work-card-link">Read the case study <span aria-hidden="true">→</span></span>
      </a>
      <a className="work-card" href="/work/mr-wu">
        <span className="project-sector">Sales &amp; channel economics</span>
        <h3>Mr Wu</h3>
        <p>A year of daily trading data, turned into clear decisions on staffing and delivery. Weekends drive nearly three times Monday’s demand, and moving some Just Eat orders to owned channels showed a modelled profit upside worth piloting.</p>
        <span className="work-card-link">Read the case study <span aria-hidden="true">→</span></span>
      </a>
      <a className="work-card" href="/work/chuan-city">
        <span className="project-sector">Customer review analysis</span>
        <h3>Chuan City</h3>
        <p>Why were the Google ratings slipping? Dine-in scored 4.3; delivery and takeaway scored 3.1. We traced most one-star reviews to long delivery waits and recommended practical fixes for peak times.</p>
        <span className="work-card-link">Read the case study <span aria-hidden="true">→</span></span>
      </a>
    </div>
  </div>
</section>

  );
}
