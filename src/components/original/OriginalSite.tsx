import type { ReactNode } from 'react';
import Script from 'next/script';

function BrandMark({size}: {size: number}) {
  return <img src="/logo.png" width={size} height={size} alt="" aria-hidden="true" />;
}

export function OriginalSite({children}: {children: ReactNode}) {
  // This wraps every page in the shared nav and footer. Links use plain
  // anchors so each page loads fresh and the browser script runs for it.
  return <>
<div>
  <a className="skip-link" href="#main">Skip to content</a>
  <nav className="nav">
    <div className="wrap nav-inner">
      <a className="brand" href="/" aria-label="Blue Beret home">
        <BrandMark size={44} />
        Blue Beret
      </a>
      <div className="nav-links">
        <a href="/#services">Services</a>
        <a href="/#work">Our work</a>
        <a href="/#how-we-work">How we work</a>
      </div>
      <a className="btn btn-solid" href="/#contact">Talk to us</a>
    </div>
  </nav>
  <main id="main">
    {children}
  </main>
  <footer className="footer">
    <div className="wrap footer-inner">
      <a className="brand" href="/">
        <BrandMark size={30} />
        Blue Beret
      </a>
      <div className="footer-copy">
        <span>Blue Beret Group · Ireland</span>
        <span>Project findings are from our case studies. Demo figures on the O’Sullivan Clarke page are fictional.</span>
      </div>
    </div>
  </footer>
</div>

<Script src="/scripts/main.js" type="module" strategy="afterInteractive" />
</>;
}
