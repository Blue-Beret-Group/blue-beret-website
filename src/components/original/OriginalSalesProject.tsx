import { OriginalCaseStudy, CaseFacts } from './OriginalCaseStudy';

export function OriginalSalesProject() {
  // Absolute revenue figures are left out until the client agrees to publish
  // them, so the chart and table show an index with Monday = 100.
  return (
<OriginalCaseStudy
  eyebrow="Case study · Sales & channel economics"
  title={<>A clearer view of<br />the trading week.</>}
  intro="We analysed 396 days of trading records, from January 2025 to January 2026, to understand demand patterns, staffing priorities and the economics of collection, direct delivery and Just Eat."
  next={{href: '/work/chuan-city', name: 'Chuan City'}}
>
<section className="section" id="case" aria-label="Project summary">
  <div className="wrap">
    <div className="case-tiles">
      <div className="tile reveal"><p>Saturday sales vs Monday</p><strong>~3×</strong></div>
      <div className="tile reveal"><p>Orders via Just Eat</p><strong>~32%</strong></div>
      <div className="tile reveal"><p>Channel shift modelled</p><strong>20%</strong></div>
      <div className="tile reveal"><p>Trading days analysed</p><strong>396</strong></div>
    </div>
    <div className="engagement-layout">
      <CaseFacts facts={[
        {label: 'Sector', value: 'Hospitality / restaurant'},
        {label: 'Data', value: '396 daily records, Jan 2025–Jan 2026'},
        {label: 'Our scope', value: 'Data cleaning, demand analysis, channel modelling, recommendations'}
      ]} />
      <div className="chart-panel reveal">
        <div className="chart-head">
          <h2>Saturday and Monday, compared</h2>
          <span>Average daily net sales, indexed (Monday = 100) · January 2025–January 2026</span>
        </div>
        <div className="chart-wrap" id="chartWrap">
          <svg id="weekChart" viewBox="0 0 720 300" role="img" aria-label="Average daily net sales indexed to Monday = 100: Monday 100; Saturday 297." />
          <div className="tooltip" id="chartTip" />
        </div>
        <details className="chart-table">
          <summary>View as table</summary>
          <table>
            <thead><tr><th>Day</th><th>Avg net sales (Monday = 100)</th><th>Avg orders (Monday = 100)</th></tr></thead>
            <tbody id="chartTableBody" />
          </table>
        </details>
      </div>
    </div>
    <div className="case-insights">
      <div><h2>Staff for the demand you have</h2><p>Saturday averaged almost three times Monday’s sales and order volume. The analysis supported prioritising Friday-to-Sunday staffing, stock preparation and delivery coordination.</p></div>
      <div><h2>Test the channel opportunity</h2><p>Just Eat accounted for around 32% of orders. We modelled moving 20% of those orders to the restaurant’s own channels while keeping the demand, and found a meaningful profit improvement driven mainly by lower platform fees. We recommended a limited pilot to test customer retention and costs before any wider change.</p></div>
    </div>
    <p className="case-note"><em>The opportunity is a modelled profit improvement before food costs over the analysed period, not a realised saving. Ingredient costs were not in the source records, and incentives or extra fulfilment costs would also affect the outcome.</em></p>
  </div>
</section>
</OriginalCaseStudy>
  );
}
