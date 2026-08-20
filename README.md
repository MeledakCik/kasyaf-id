# kasyaf.id — Root Landing

Premium dark landing page for **kasyaf.id**, the hub domain for the Kasyaf Cloud ecosystem. Routes visitors to the two live services:

- **console.kasyaf.id** — Redis & Qdrant Console *(LIVE)*
- **vector.kasyaf.id** — Qdrant Vector Search Manager *(BETA)*

Built to fix Google Search Console indexing — the root domain was previously empty, which was suppressing `site:console.kasyaf.id` results.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- Framer Motion (top progress bar, page transitions, card reveals)
- lucide-react icons

## Project structure

```
app/
├── layout.tsx     # metadata, GSC verification, Organization JSON-LD
├── page.tsx        # hero, hub diagram, service cards, footer
├── globals.css
├── robots.ts        # /robots.txt
└── sitemap.ts        # /sitemap.xml — lists root + both subdomains
components/
├── top-progress-bar.tsx
├── page-transition.tsx
├── hub-diagram.tsx    # animated SVG schematic of the domain topology
└── service-card.tsx
lib/
└── utils.ts          # cn() class merge helper
```

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

`next.config.mjs` is set to `output: "standalone"`, so `npm run build` also produces `.next/standalone` for container deployment.

## Environment / config

No environment variables are required to run this project — it's a static marketing page with no backend calls. The Google Search Console verification token is set directly in `app/layout.tsx` under `metadata.verification.google`.

Before deploying, replace the placeholder assets referenced in `app/layout.tsx`:

- `public/favicon.ico`
- `public/logo.png` (used as the Apple touch icon and JSON-LD logo)
- `public/og-image.png` (Open Graph / Twitter card image, ideally 1200×630)

## Docker

```bash
docker build -t kasyaf-root .
docker run -p 3000:3000 kasyaf-root
```

The Dockerfile uses `node:20-alpine` in a three-stage build (deps → build → runner) and only ships the standalone server output, so the final image stays small.

## Deploying

Works out of the box on Railway, Vercel, Fly.io, or any platform that can either run the Dockerfile or run `npm run build && npm start` directly. Point the domain `kasyaf.id` at the deployment and keep `console.kasyaf.id` / `vector.kasyaf.id` as separate deployments — this app only links out to them, it doesn't proxy or host their content.

## SEO checklist

- [x] `metadataBase`, OpenGraph, Twitter card set in `app/layout.tsx`
- [x] Organization JSON-LD with founder `Cikawan`
- [x] `/robots.txt` allows all crawlers and points at the sitemap
- [x] `/sitemap.xml` lists `kasyaf.id`, `console.kasyaf.id`, `vector.kasyaf.id`
- [ ] Submit `https://kasyaf.id/sitemap.xml` in Google Search Console after deploy
- [ ] Verify ownership via the `verification.google` meta tag (already wired up — just deploy and click "Verify" in GSC)

---

Built by Cikawan.