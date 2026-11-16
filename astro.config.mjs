// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: 'https://daljo25.dev',
  integrations: [icon()],
  i18n: {
    // El español es el idioma principal y vive en la raíz del sitio.
    // El inglés se sirve bajo el prefijo /en.
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },
  redirects: {
    // El idioma principal no lleva prefijo: /es -> /
    '/es': '/',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
