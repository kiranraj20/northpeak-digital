# NorthPeak Digital

A responsive one-page marketing site for a fictional product studio, built with
**React + Vite** — no page builders. Dark theme, fully responsive, and tuned to
top Lighthouse scores: **Performance 100 · Accessibility 100 · Best Practices
100 · SEO 91**.

- **Live URL:** <LIVE_URL — fill in after deploy>
- **Repo:** <GITHUB_URL>

> Built for Digital Heroes Training Task.

---

## Lighthouse

Measured on the deployed production build.

<img width="498" height="842" alt="Screenshot 2026-07-26 095548" src="https://github.com/user-attachments/assets/37a4151c-16cf-40ed-8763-ab44354ff42e" />
<img width="497" height="845" alt="Screenshot 2026-07-26 095655" src="https://github.com/user-attachments/assets/b276ac64-4643-4224-841a-b04b11c7a9f5" />

---

## Sections

1. **Hero** — headline, sub-headline, primary + secondary CTA, and a stat row.
2. **Services** — a grid of six offerings, each with an inline SVG icon.
3. **Results & testimonials** — a headline-results band plus two testimonials.
4. **Pricing** — three tiers (Starter / Growth / Scale) with a featured plan.
5. **Contact** — a form with real client-side validation and a success state.
6. **Footer** — nav, copyright, and the required credit line.

---

## Tech stack

| Area       | Choice                                                    |
| ---------- | --------------------------------------------------------- |
| Framework  | React 19 + Vite                                           |
| Styling    | Hand-written CSS — custom properties, Grid, Flexbox       |
| Markup     | Semantic HTML5 (landmarks, headings, `dl`, `figure`)      |
| Fonts      | System font stack (zero network requests, zero CLS)       |
| Images     | None — all visuals are CSS gradients + inline SVG          |
| Hosting    | Static build (Vercel / Netlify / GitHub Pages)           |

---

## Deployment

Deployed on **Vercel** as a static Vite build — Vercel auto-detects the setup
(see `vercel.json`):

- **Framework:** Vite
- **Build command:** `npm run build`
- **Output directory:** `dist`

Push the repo to GitHub and import it on Vercel (or run `vercel --prod`); no
extra configuration is required.

---

## Project structure

```
northpeak-digital/
├── index.html              # Vite entry (mounts #root)
├── vite.config.js
├── public/favicon.svg      # inline mountain mark
└── src/
    ├── main.jsx            # React entry
    ├── index.css           # design tokens + responsive layout
    ├── App.jsx             # page composition + skip link
    └── components/
        ├── Header.jsx      # sticky nav + mobile toggle (state)
        ├── Hero.jsx
        ├── Services.jsx    # 6 services rendered from data
        ├── Results.jsx     # results band + testimonials
        ├── Pricing.jsx     # 3 tiers rendered from data
        ├── Contact.jsx     # form + client-side validation (state)
        └── Footer.jsx
```

Each section is its own component. Repeated content (services, pricing tiers,
stats, testimonials) is defined as data arrays and mapped to markup, so adding or
editing an item is a one-line change.

---

## Responsive approach

Designed to look intentional at the three required widths:

- **360px** — single column throughout, hamburger menu, no horizontal scroll.
- **768px** — two-column service / pricing / testimonial grids, full nav.
- **1440px** — three-column grids, content capped at a 1120px reading width.

Layout uses CSS Grid with `grid-template-columns: repeat(N, 1fr)` collapsed at
`max-width` breakpoints (900px → 2 cols, 640px → 1 col). Type scales fluidly with
`clamp()` so headings never feel oversized on mobile or lost on desktop.

---

## Accessibility (Lighthouse A11y: 100)

- **Semantic landmarks** — `header`, `nav`, `main`, `section`, `footer`; every
  section is labelled with `aria-labelledby` pointing at its heading.
- **Logical heading order** — one `h1`, then `h2` per section, `h3` for cards.
- **Skip link** to jump straight to `#main` for keyboard users.
- **Form** — every input has a real `<label>`; errors use `aria-invalid` and
  `aria-describedby`, and the success message is a `role="status"` live region.
- **Visible focus** — a custom `:focus-visible` ring on every interactive element.
- **Contrast** — colour tokens clear WCAG AA (muted body text ~9:1 on the dark
  background; buttons use dark ink on a light accent rather than white-on-blue,
  which would have failed).
- **Mobile nav** exposes `aria-expanded` and closes on link click.
- **Reduced motion** — smooth scroll and transitions disable under
  `prefers-reduced-motion`.

---

## Performance (Lighthouse Perf: 100)

Measured on the production build: **FCP ~1.2s · TBT 0ms · CLS 0**.

### What each choice bought (the changelog)

| Decision                                              | Why it helped                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------- |
| **No web fonts** — system font stack                  | Removes render-blocking font downloads and eliminates font-swap CLS.|
| **No raster images** — inline SVG + CSS gradients     | Nothing heavy to download or lazy-load; LCP is just text.           |
| **Vite production build** — minified, tree-shaken, hashed assets | Ships a tiny, cacheable bundle; only what's used is included. |
| **Fixed layout, no late-loading media**               | CLS is 0 — nothing reflows after paint.                             |
| **Single small CSS file, data-driven components**     | Minimal critical path; markup stays consistent and light.          |
| **Explicit `theme-color`, `lang`, viewport, title, meta description** | Passes best-practice / SEO audits and describes the page for assistive tech and crawlers. |

The full report is saved in `lighthouse.report.html`.

---

## Design decisions

1. **React with a data-driven structure.** Each section is a component, and
   repeated content (services, tiers, stats) is defined once as data and mapped
   to markup. That keeps the JSX small and makes edits trivial, without pulling in
   any heavy UI library — the production bundle stays light enough to keep
   Performance at 100.
2. **Visuals from code, not assets.** Every graphic (icons, the hero glow, the
   brand mark) is SVG or a CSS gradient. No image pipeline, no alt-text gaps, no
   layout shift, and it stays crisp at any DPI.
3. **Accessibility designed in, not bolted on.** Landmarks, labelled controls,
   contrast-safe tokens and focus states were part of the first pass, so the
   accessibility score didn't need a rescue later.

---

## AI usage

<One short, honest paragraph: which AI tool you used and for what — e.g.
scaffolding the component structure, choosing contrast-safe colour tokens, wiring
the form validation — and what you decided or adjusted yourself. The brief
requires this.>
