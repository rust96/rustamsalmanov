# rustamsalmanov — landing site

Astro (static) + Tailwind CSS v4. Languages: ES (`/`), CA (`/ca/`), EN (`/en/`).

```bash
npm install
npm run dev      # local development
npm run build    # static output in dist/
```

## Where things are
- `src/config.ts` — Formspree ID, NIE, address, phone, email
- `src/i18n/ui.ts` — all page copy (ES/CA/EN)
- `src/i18n/legal.ts` — Aviso legal, Privacy and Cookie policies (ES/CA/EN)
- `src/components/Home.astro` — the page; the commented-out **Projects** section is here
- `scripts/make-og.mjs` — regenerates `public/og.png` (`npm run og`)

## Manual steps
1. **Formspree**: create a form at https://formspree.io, copy its ID (the `xxxxxxxx` in `https://formspree.io/f/xxxxxxxx`) and set `FORMSPREE_ID` in `src/config.ts`.
2. **Push to GitHub** (branch `main`).
3. **Enable Pages**: repo → Settings → Pages → *Build and deployment* → Source: **GitHub Actions**. Each push to `main` then deploys via `.github/workflows/deploy.yml`.
4. **Custom domain** (optional but recommended):
   - Settings → Pages → *Custom domain* → enter your domain → Save, then tick *Enforce HTTPS*.
   - At your DNS provider: for an apex domain add `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`; for `www` add a `CNAME` to `<your-github-user>.github.io`.
   - With the Actions deploy, a `CNAME` file is not required, but you may add `public/CNAME` containing just the domain.
   - The workflow reads the site URL and base path from GitHub (`actions/configure-pages`), so canonical URLs, hreflang, sitemap and robots.txt follow the custom domain automatically. Re-run the workflow after setting the domain.
5. If you do **not** use a custom domain and publish as a project site (`user.github.io/repo/`), it works too: base path is picked up automatically.
6. Add real projects later by uncommenting the Projects section in `Home.astro` and adding a nav link.
