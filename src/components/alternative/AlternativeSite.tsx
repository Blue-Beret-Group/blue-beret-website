import Script from 'next/script';
import { AlternativeOpening } from './AlternativeOpening';
import { AlternativeIntroduction } from './AlternativeIntroduction';
import { AlternativeSelectedWork } from './AlternativeSelectedWork';
import { AlternativeServices } from './AlternativeServices';
import { AlternativeTeam } from './AlternativeTeam';
import { AlternativeContact } from './AlternativeContact';

export function AlternativeSite() {
  // This assembles option two and loads its interactions after React hydration.
  return <>
<div>
  <a className="skip" href="#main">Skip to content</a>
  <header className="shell nav">
    <a className="brand" href="#top" aria-label="Blue Beret home"><span className="brand-mark" aria-hidden="true" />Blue Beret</a>
    <div className="nav-right"><a href="#work">Selected work</a><a href="#contact">Get in touch</a><button className="menu-button" id="menuOpen" aria-haspopup="dialog">Menu <span className="menu-lines" aria-hidden="true" /></button></div>
  </header>
  <main id="main">
    <div className="opening" id="top">
      <AlternativeOpening />
    </div>
    <AlternativeIntroduction />
    <AlternativeSelectedWork />
    <AlternativeServices />
    <AlternativeTeam />
    <AlternativeContact />
  </main>
  <footer className="shell"><span>Blue Beret Group · Independent consultancy, Ireland</span><a href="/">View the original website</a><span>© <span id="year">2026</span> Blue Beret Group</span></footer>
  <dialog className="menu-dialog" id="menuDialog" aria-labelledby="menuTitle"><div className="dialog-top"><span id="menuTitle">Explore Blue Beret</span><button className="close" data-close="menuDialog">Close menu</button></div><nav className="menu-links" aria-label="Main menu"><a href="#about">Meet Blue Beret</a><a href="#work">Selected work</a><a href="#services">How we help</a><a href="#contact">Get in touch</a></nav><p className="menu-foot">Data, analysis and automation for the way you work.</p></dialog>
</div>

<Script src="/scripts/alternative.js" type="module" strategy="afterInteractive" />
</>;
}
