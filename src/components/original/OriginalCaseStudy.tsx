import type { ReactNode } from 'react';

export type CaseFact = { label: string; value: ReactNode };

export function OriginalCaseStudy({eyebrow, title, intro, next, children}: {
  eyebrow: string; title: ReactNode; intro: string;
  next: {href: string; name: string}; children: ReactNode;
}) {
  // This gives each case study the same opening, back link and onward link.
  return <>
<header className="case-hero" id="top">
  <div className="wrap">
    <a className="text-link case-back" href="/#work"><span aria-hidden="true">←</span> Back to our work</a>
    <p className="eyebrow">{eyebrow}</p>
    <h1>{title}</h1>
    <p className="case-intro">{intro}</p>
  </div>
</header>
{children}
<nav className="case-next" aria-label="More case studies">
  <div className="wrap">
    <a href={next.href}>
      <span className="project-sector">Next case study <span aria-hidden="true">→</span></span>
      <strong>{next.name}</strong>
    </a>
  </div>
</nav>
</>;
}

export function CaseFacts({facts}: {facts: CaseFact[]}) {
  return (
    <dl className="engagement-meta">
      {facts.map((f) => <div key={f.label}><dt>{f.label}</dt><dd>{f.value}</dd></div>)}
    </dl>
  );
}
