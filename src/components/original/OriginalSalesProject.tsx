export function OriginalSalesProject() {
  return (
<section className="section" id="case">
  <div className="wrap">
    <div className="section-head reveal">
      <p className="eyebrow">Mr Wu / Sales analysis</p>
      <h2>A clearer view of<br />the trading week.</h2>
      <p>We analysed 396 daily records for Mr Wu, covering January 2025 to January 2026, to understand demand, staffing priorities and the economics of collection, direct delivery and Just Eat.</p>
    </div>
    <div className="case-tiles">
      <div className="tile reveal"><p>Net sales analysed</p><strong data-countup={878385} data-prefix="€">€878,385</strong></div>
      <div className="tile reveal"><p>Orders</p><strong data-countup={30291}>30,291</strong></div>
      <div className="tile reveal"><p>Strongest month</p><strong data-countup={77826} data-prefix="€">€77,826</strong></div>
      <div className="tile reveal"><p>Modelled opportunity*</p><strong data-countup={7607} data-prefix="+€">+€7,607</strong></div>
    </div>
    <div className="chart-panel reveal">
      <div className="chart-head">
        <h3>Saturday and Monday, compared</h3>
        <span>Average daily net sales · January 2025–January 2026</span>
      </div>
      <div className="chart-wrap" id="chartWrap">
        <svg id="weekChart" viewBox="0 0 720 300" role="img" aria-label="Average daily net sales: Monday 1,233.91 euro; Saturday 3,665.89 euro." />
        <div className="tooltip" id="chartTip" />
      </div>
      <details className="chart-table">
        <summary>View as table</summary>
        <table>
          <thead><tr><th>Day</th><th>Avg net sales</th><th>Avg orders</th></tr></thead>
          <tbody id="chartTableBody" />
        </table>
      </details>
    </div>
    <div className="case-insights">
      <div><h3>Staff for the demand you have</h3><p>Saturday averaged €3,665.89 in sales and 125.51 orders, almost three times Monday’s sales and order volume. The analysis supported prioritising Friday-to-Sunday staffing, stock preparation and delivery coordination.</p></div>
      <div><h3>Test the channel opportunity</h3><p>Just Eat accounted for around 31.6% of orders. We modelled shifting 20% of those orders to owned channels while retaining the displaced demand, then recommended a limited pilot to test retention and costs.</p></div>
    </div>
    <p className="case-note">*The €7,606.82 opportunity is modelled profit improvement before food costs over the analysed period, not a realised saving. It includes €6,610.91 in estimated fee reductions and assumed changes in order value. Ingredient costs were absent from the source records; incentives and extra fulfilment costs would also affect the outcome.</p>
  </div>
</section>

  );
}
