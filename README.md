# rustamsalmanov — landing site

Astro (static) + Tailwind CSS v4. Languages: ES (`/`), CA (`/ca/`), EN (`/en/`).

```bash
npm install
npm run dev      # local development
npm run build    # static output in dist/
```

## Where things are
- `src/config.ts` — NIE, address, phone, email
- `src/i18n/ui.ts` — all page copy (ES/CA/EN)
- `src/i18n/legal.ts` — Aviso legal, Privacy and Cookie policies (ES/CA/EN)
- `src/components/Home.astro` — the page; the commented-out **Projects** section is here
- `scripts/make-og.mjs` — regenerates `public/og.png` (`npm run og`)

The contact section is WhatsApp-only (no form, no third-party form service).

## Manual steps
1. **Push to GitHub** (branch `main`).
2. **Enable Pages**: repo → Settings → Pages → *Build and deployment* → Source: **GitHub Actions**. Each push to `main` then deploys via `.github/workflows/deploy.yml`.
3. **Custom domain**: `rustamsalmanov.es` is configured (`public/CNAME`, `site` in `astro.config.mjs`, base `/`). Canonical URLs, hreflang, sitemap and robots.txt all use it.
4. Add real projects later by uncommenting the Projects section in `Home.astro` and adding a nav link.
