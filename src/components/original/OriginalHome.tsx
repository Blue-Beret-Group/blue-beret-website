import { OriginalAbout } from './OriginalAbout';
import { OriginalServices } from './OriginalServices';
import { OriginalWorkIndex } from './OriginalWorkIndex';
import { OriginalHowWeWork } from './OriginalHowWeWork';
import { OriginalContact } from './OriginalContact';

export function OriginalHome() {
  // The homepage stays short; each project's detail lives on its own page.
  return <>
<header className="hero" id="top">
  <canvas id="heroCanvas" aria-hidden="true" />
  <div className="wrap hero-grid">
    <div className="hero-copy">
      <p className="eyebrow">Independent data consultancy · Ireland</p>
      <h1>Useful answers.<br />Working software.</h1>
      <p>We help small businesses, charities and NGOs turn their data into clear analysis and tools their teams can keep using.</p>
      <div className="hero-ctas">
        <a className="btn btn-solid" href="/#work">Our work</a>
        <a className="btn btn-ghost" href="/#contact">Talk to us</a>
      </div>
    </div>
  </div>
</header>
<OriginalAbout />
<OriginalServices />
<OriginalWorkIndex />
<OriginalHowWeWork />
<OriginalContact />
</>;
}
