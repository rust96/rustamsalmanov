import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL and BASE_PATH are injected by the GitHub Actions workflow
// (from actions/configure-pages), so they follow your custom domain
// automatically once it is configured. Local fallbacks below.
const site = process.env.SITE_URL || 'https://rustamsalmanov.com';
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'ca', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-ES', ca: 'ca-ES', en: 'en' },
      },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
