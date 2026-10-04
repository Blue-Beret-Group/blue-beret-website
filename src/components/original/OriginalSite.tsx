import Script from 'next/script';
import { OriginalWorkIndex } from './OriginalWorkIndex';
import { OriginalAccountingProject } from './OriginalAccountingProject';
import { OriginalReviewDemo } from './OriginalReviewDemo';
import { OriginalWorkflow } from './OriginalWorkflow';
import { OriginalPrivacy } from './OriginalPrivacy';
import { OriginalSalesProject } from './OriginalSalesProject';
import { OriginalReviewsProject } from './OriginalReviewsProject';
import { OriginalServices } from './OriginalServices';
import { OriginalContact } from './OriginalContact';

export function OriginalSite() {
  // This assembles the page sections. The browser script starts after React
  // hydration so its controls and chart updates do not conflict with rendering.
  return <>
<div>
  <a className="skip-link" href="#main">Skip to content</a>
  <nav className="nav">
    <div className="wrap nav-inner">
      <a className="brand" href="#top" aria-label="Blue Beret home">
        <svg width={34} height={32} viewBox="0 0 120 104" aria-hidden="true">
          <path d="M58 4 L20 25 L20 66 L58 66 Z" fill="#2f74c4" />
          <path d="M62 4 L100 25 L100 66 L62 66 Z" fill="#2361ad" />
          <rect x={33} y={32} width={9} height={34} fill="var(--logo-cut)" />
          <rect x={46} y={22} width={8} height={44} fill="var(--logo-cut)" />
          <rect x={66} y={22} width={8} height={44} fill="var(--logo-cut)" />
          <rect x={78} y={34} width={9} height={32} fill="var(--logo-cut)" />
          <path d="M12 68 Q60 96 108 68 Q92 100 60 100 Q28 100 12 68 Z" fill="#274b86" />
          <path d="M22 71 Q60 88 98 71 Q82 84 60 84 Q38 84 22 71 Z" fill="#3d6ab0" />
        </svg>
        Blue Beret
      </a>
      <div className="nav-links">
        <a href="#services">Services</a>
        <a href="#privacy">Privacy</a>
        <a href="#work">Our work</a>
      </div>
      <a className="btn btn-solid" href="#contact">Talk to us</a>
    </div>
  </nav>
  <main id="main">
    <header className="hero" id="top">
      <canvas id="heroCanvas" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Independent data consultancy · Ireland</p>
          <h1>Useful answers.<br />Working software.</h1>
          <p>We’re a two-person consultancy in Ireland. We turn business data into clear analysis and tools your team can use.</p>
          <div className="hero-ctas">
            <a className="btn btn-solid" href="#work">Our work</a>
            <a className="btn btn-ghost" href="#services">What we do</a>
          </div>
        </div>
      </div>
    </header>
    <OriginalWorkIndex />
    <OriginalAccountingProject />
    <OriginalReviewDemo />
    <OriginalWorkflow />
    <OriginalPrivacy />
    <OriginalSalesProject />
    <OriginalReviewsProject />
    <OriginalServices />
    <OriginalContact />
  </main>
  <footer className="footer">
    <div className="wrap footer-inner">
      <a className="brand" href="#top">
        <svg width={24} height={22} viewBox="0 0 120 104" aria-hidden="true">
          <path d="M58 4 L20 25 L20 66 L58 66 Z" fill="#2f74c4" />
          <path d="M62 4 L100 25 L100 66 L62 66 Z" fill="#2361ad" />
          <rect x={33} y={32} width={9} height={34} fill="var(--logo-cut)" />
          <rect x={46} y={22} width={8} height={44} fill="var(--logo-cut)" />
          <rect x={66} y={22} width={8} height={44} fill="var(--logo-cut)" />
          <rect x={78} y={34} width={9} height={32} fill="var(--logo-cut)" />
          <path d="M12 68 Q60 96 108 68 Q92 100 60 100 Q28 100 12 68 Z" fill="#274b86" />
          <path d="M22 71 Q60 88 98 71 Q82 84 60 84 Q38 84 22 71 Z" fill="#3d6ab0" />
        </svg>
        Blue Beret
      </a>
      <span>Blue Beret Group · Ireland · Project findings from our case studies; accounting demo figures are fictional.</span>
    </div>
  </footer>
</div>

<Script src="/scripts/main.js" type="module" strategy="afterInteractive" />
</>;
}
