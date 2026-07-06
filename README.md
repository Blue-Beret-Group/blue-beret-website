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

## Notes

- Case-study figures for the accounting and takeaway engagements come from real project outputs (anonymised). The Google-review case study currently uses representative placeholder figures.
- Demo dashboard data is fictional.
- Light and dark themes are supported; animations respect `prefers-reduced-motion`.
