import type { APIRoute } from 'astro';

export const prerender = true;

const escapeXml = (value: string) =>
  value.replace(
    /[<>&'"]/g,
    (char) =>
      ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[char] ?? char,
  );

export const GET: APIRoute = ({ site }) => {
  const base = site ?? new URL('https://daljo25.dev');

  // Se generan las rutas a partir de las páginas .astro existentes, así el
  // sitemap se mantiene al día al añadir secciones o el futuro /en/.
  const pageFiles = Object.keys(import.meta.glob('./**/*.astro'));

  const routes = pageFiles
    .filter((file) => !file.includes('[') && !(file.split('/').pop() ?? '').startsWith('_'))
    .map((file) => new URL(file.replace(/^\.\//, '').replace(/index\.astro$/, ''), base).href);

  const urls = [...new Set(routes)].sort();

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map((url) => `  <url><loc>${escapeXml(url)}</loc></url>`),
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
