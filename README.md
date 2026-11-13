# SOS Packaging — Shree Om Sai Packaging

**The website for Shree Om Sai Packaging: sustainable industrial steel
packaging for the cable industry.**

[![Live](https://img.shields.io/badge/live-www.sospackaging.com-1a5632?style=flat-square&logo=vercel&logoColor=white)](https://www.sospackaging.com)
[![Astro](https://img.shields.io/badge/Astro-7-BC52BC?style=flat-square&logo=astro&logoColor=white)](https://astro.build)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=flat-square)](LICENSE)

[**Live site →**](https://www.sospackaging.com) · [**Design system →**](DESIGN.md)

---

## About

Shree Om Sai Packaging manufactures **steel cable drums, process drums,
M.S spools and tie rods** — replacing the wooden drums the cable industry
has used for a century. The tagline is *"Save Wood, Go Green"*: a steel drum
is reusable, and when it does reach the end of its life it still has a
recovery value of roughly 30 % by weight through scrapping.

The site is a static Astro build — no server, no database, no CMS. It is
deployed to Vercel and served from a custom domain.

## Company facts on the site

| | |
|---|---|
| Established | November 2008 |
| Monthly capacity | 450–500 MT, roughly 1,500 drums per month |
| Daily capacity | 45–50 drums |
| Units | 4 — three in Alwar, one in Reengus |
| Certification | ISO 9001:2015 (TÜV Rheinland) |

## Pages

| Route | What it covers |
|---|---|
| `/` | Hero, feature cards, product grid, company summary, memberships, clients, contact form |
| `/products` | The full product range, with alternating image and text blocks |
| `/profile` | Company background, capacity stats, certifications, future plans |
| `/clients` | Client list and features |
| `/contact` | Contact details and the quote request form |
| `/gallery` | Event and product photography |
| `/faq` | Frequently asked questions |
| `/cabreel` | The Cabreel product line |
| `/privacy`, `/terms` | Legal pages |
| `/404` | Not found |

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Astro 7 with the React integration |
| UI | React 19 islands, Tailwind CSS 4 (via the Vite plugin) |
| Motion | Framer Motion |
| Fonts | Self-hosted via `@fontsource` — Hanken Grotesk, Inter, JetBrains Mono |
| Icons | Material Symbols Outlined, self-hosted |
| SEO | `@astrojs/sitemap`, canonical URLs and per-page meta |
| Analytics | Vercel Analytics and Vercel Speed Insights |
| Hosting | Vercel |

Astro renders every page to static HTML at build time. React is used only
where it earns its place — the animated counters, the logo carousel and the
scroll-reveal wrappers — so the pages stay fast and indexable.

## Getting started

```bash
git clone https://github.com/Harshit-3114/SOSP.git
cd SOSP
npm install
npm run dev
```

Then open <http://localhost:4321>.

### Environment variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

| Variable | Purpose |
|---|---|
| `PUBLIC_GAS_SCRIPT_ID` | Google Apps Script deployment ID that receives the quote form submissions. Get it from **Deploy → New Deployment → Web app → Deployment ID**. |
| `PUBLIC_WHATSAPP_NUMBER` | The number for the floating WhatsApp button, without the `+` prefix. |

Both are `PUBLIC_` prefixed, so Astro inlines them into the client bundle.
That is safe for these two values and **not** safe for secrets — never put a
private API key in a `PUBLIC_` variable.

### Build

```bash
npm run build     # -> dist/
npm run preview   # serve the production build locally
```

## Project structure

```
SOSP/
├── src/
│   ├── components/      # Header, Footer, HeroCarousel, LogoCarousel,
│   │                    # AnimatedCounter, ScrollReveal, RevealSection
│   ├── layouts/         # Layout.astro — head, meta, header, footer
│   ├── pages/           # One file per route
│   └── styles/          # global.css — the Tailwind entry point
├── public/
│   ├── images/          # Product and event photography
│   ├── fonts/           # Self-hosted Material Symbols
│   ├── brochure.pdf     # Downloadable company brochure
│   └── _headers         # Vercel header rules
├── scripts/
│   ├── convert-webp.mjs      # Batch-converts the image library to WebP
│   └── generate-brochure.mjs # Rebuilds public/brochure.pdf with PDFKit
├── DESIGN.md            # The design system
├── astro.config.mjs
└── package.json
```

## Design system

[`DESIGN.md`](DESIGN.md) holds the full design system: the colour tokens
(deep green `#1a5632` for the brand, gold `#e8b830` for accents), the
type scale, the spacing rules, the component styles and the page layouts.

The palette is not decorative. Green carries the eco proposition — replacing
wood with steel — and gold adds the quality-and-trust register an industrial
B2B buyer expects.

## Scripts

- **`npm run convert-webp`** — walks `public/images/` and generates WebP
  versions alongside the originals, so the site can serve the smaller format
  where it is supported.
- **`npm run generate-brochure`** — regenerates `public/brochure.pdf` from
  the company copy using PDFKit.

## License

MIT — see [LICENSE](LICENSE). Copyright (c) 2026 Harshit Shyamsukha.

Built for [Shree Om Sai Packaging](https://www.sospackaging.com).
