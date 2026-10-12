import type { ReactNode } from 'react';
import Script from 'next/script';

function BrandMark({width, height}: {width: number; height: number}) {
  return (
    <svg width={width} height={height} viewBox="0 0 120 104" aria-hidden="true">
      <path d="M58 4 L20 25 L20 66 L58 66 Z" fill="#2f74c4" />
      <path d="M62 4 L100 25 L100 66 L62 66 Z" fill="#2361ad" />
      <rect x={33} y={32} width={9} height={34} fill="var(--logo-cut)" />
      <rect x={46} y={22} width={8} height={44} fill="var(--logo-cut)" />
      <rect x={66} y={22} width={8} height={44} fill="var(--logo-cut)" />
      <rect x={78} y={34} width={9} height={32} fill="var(--logo-cut)" />
      <path d="M12 68 Q60 96 108 68 Q92 100 60 100 Q28 100 12 68 Z" fill="#274b86" />
      <path d="M22 71 Q60 88 98 71 Q82 84 60 84 Q38 84 22 71 Z" fill="#3d6ab0" />
    </svg>
  );
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
        <BrandMark width={34} height={32} />
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
        <BrandMark width={24} height={22} />
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
