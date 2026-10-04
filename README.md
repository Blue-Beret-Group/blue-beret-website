# Blue Beret — Website

Blue Beret's website, built with HTML, CSS and strict TypeScript using Vite.

- `index.html` — original homepage, with its behaviour in `src/main.ts`.
- `src/alternative.ts` — alternative website's TypeScript behaviour.
- `alt.html` — separate blue-and-white agency concept inspired by UXPERT's
  large typography and motion-led introduction. Open directly or visit
  `/alt.html` on the development or preview server.

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

Run `npm run build` to type-check both scripts and compile both pages into `dist/`.
Run `npm run preview` to check the production build locally.

Import this repository into Vercel. `vercel.json` configures the Vite preset,
`npm run build` command and `dist` output directory. The homepage is `/` and
option two is `/alt.html`. TypeScript is compiled to browser JavaScript;
opening the source HTML directly with `file://` no longer runs its scripts.
Other static hosts should publish the complete `dist/` directory, including assets.

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
