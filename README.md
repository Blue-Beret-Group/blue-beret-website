# Blue Beret — Website

Single-file landing page for Blue Beret, a data and AI consulting firm.

- `index.html` — the entire site: styles, scripts, fonts, and images are inlined, so it runs anywhere with no build step.

## Preview locally

Open `index.html` in a browser, or serve it:

```
python -m http.server 8000
```

## Deploy

The file deploys as-is to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages).

## Content and design

The site uses a blue-and-white light theme, the original animated hero traces,
and a project index linking to O'Sullivan Clarke, Mr Wu and Chuan City.
Animations respect reduced-motion preferences. The accounting demo remains in
its case study but has no top-navigation link.

Project narratives and figures come from the owner's supplied 11-page PDF,
`BBG - O'Sullivan Clarke .pdf`. Accounting implementation details were also
reviewed against the local OSC-01 source and launcher manuals.

- Accounting validation covers four workbooks and three comparison periods.
- Mr Wu's chart compares the two exact weekday values stated in the summary.
  The channel-shift estimate is modelled, not realised, and excludes food costs.
- Chuan City's complaint chart uses Figure 1 percentages of one-star reviews.
  Multiple themes can appear in one review. Recommendations are not presented
  as implemented changes. Review associations do not establish causation.
- Accounting demonstration data is fictional.
- The contact address `hello@blueberet.example` remains a placeholder at the
  owner's request.
