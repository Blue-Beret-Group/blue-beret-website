# Blue Beret — Website

Blue Beret's website, built with Next.js, React, CSS and strict TypeScript.
The original homepage is at `/`; the alternative is at `/alt`.
The old `/alt.html` address redirects to `/alt`.

The alternative uses scroll-triggered text and project reveals, staggered
report graphics, rising sales bars and a scroll-linked hero graphic in supported
browsers. There is no showreel. Motion respects reduced-motion preferences;
content remains readable without JavaScript. The menu is keyboard-accessible.

## Preview locally

Install dependencies and start the development server (Node.js 22.12+):

```
npm ci
npm run dev
```

## Deploy

Run `npm run build` to compile the browser scripts and build/type-check the
Next.js pages. Run `npm start` to check the production build locally.
`vercel.json` selects Next.js and the `npm run build` command.
Generated `.next/` and `public/scripts/` files are excluded from Git.

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
