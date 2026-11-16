import type { APIRoute } from 'astro';
import { getAbsoluteLocaleUrl } from 'astro:i18n';
import { defaultLocale, locales } from '../lib/i18n';

export const prerender = true;

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (char) =>
      ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char,
  );

export const GET: APIRoute = () => {
  // Se generan las rutas a partir de las páginas .astro existentes, así el
  // sitemap se mantiene al día al añadir secciones o nuevas traducciones.
  const pageFiles = Object.keys(import.meta.glob('./**/*.astro')).filter(
    (file) => !file.includes('[') && !(file.split('/').pop() ?? '').startsWith('_'),
  );

  // Las páginas dentro de una carpeta de idioma (/en/...) se sirven bajo ese
  // prefijo; el resto se sirven en el idioma principal, que no lleva prefijo.
  const groups = new Map<string, { locale: string; route: string }[]>();

  for (const file of pageFiles) {
    const segments = file.replace(/^\.\//, '').split('/');
    const first = segments[0];
    const isLocaleFolder = (locales as readonly string[]).includes(first);
    const locale = isLocaleFolder ? first : defaultLocale;
    const rest = (isLocaleFolder ? segments.slice(1) : segments).join('/');
    const route = rest.replace(/index\.astro$/, '');

    groups.set(route, [...(groups.get(route) ?? []), { locale, route }]);
  }

  const urls = [...groups.values()]
    .flatMap((group) => {
      // Cada idioma de la ruta es una URL propia, enlazada con sus alternativas.
      const alternates = group.map(({ locale, route }) => ({
        hreflang: locale,
        href: new URL(route, getAbsoluteLocaleUrl(locale)).href,
      }));
      return group.map(({ locale, route }) => ({
        loc: new URL(route, getAbsoluteLocaleUrl(locale)).href,
        alternates,
      }));
    })
    .sort((a, b) => a.loc.localeCompare(b.loc));

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls.flatMap((entry) => [
      `  <url>`,
      `    <loc>${escapeXml(entry.loc)}</loc>`,
      ...entry.alternates.map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${alternate.hreflang}" href="${escapeXml(alternate.href)}" />`,
      ),
      `  </url>`,
    ]),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
