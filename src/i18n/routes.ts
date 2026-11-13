export const LANGS = ['es', 'ca', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export type PageKey = 'home' | 'legal' | 'privacy' | 'cookies';

export const HTML_LANG: Record<Lang, string> = { es: 'es-ES', ca: 'ca-ES', en: 'en' };
export const LANG_NAME: Record<Lang, string> = { es: 'Español', ca: 'Català', en: 'English' };
export const OG_LOCALE: Record<Lang, string> = { es: 'es_ES', ca: 'ca_ES', en: 'en_GB' };

export const SLUGS: Record<PageKey, Record<Lang, string>> = {
  home: { es: '', ca: '', en: '' },
  legal: { es: 'aviso-legal', ca: 'avis-legal', en: 'legal-notice' },
  privacy: { es: 'politica-de-privacidad', ca: 'politica-de-privacitat', en: 'privacy-policy' },
  cookies: { es: 'politica-de-cookies', ca: 'politica-de-cookies', en: 'cookie-policy' },
};

/** Path relative to the site root (no base), always with leading and trailing slash. */
export function pagePath(lang: Lang, key: PageKey): string {
  const prefix = lang === 'es' ? '' : `${lang}/`;
  const slug = SLUGS[key][lang];
  return `/${prefix}${slug ? slug + '/' : ''}`;
}

/** Prepend the configured base (needed for GitHub Pages project sites). */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + path;
}
