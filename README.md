# daljo25.dev

Portafolio personal de **Daljomar Morillo** — desarrollador Full Stack especializado en Laravel,
Filament, PHP y productos SaaS. Sitio estático generado con Astro, bilingüe (español / inglés) y
desplegado en Cloudflare Workers.

- **Producción:** https://daljo25.dev
- **Stack:** Astro 7 · Tailwind CSS 4 · TypeScript · astro-icon
- **Contenido:** Colecciones de Astro (Markdown) con soporte i18n por carpeta de idioma

---

## 🧰 Requisitos

| Herramienta | Versión                                        |
| :---------- | :--------------------------------------------- |
| Node.js     | `>= 22.23.4` (ver `engines` en `package.json`) |
| pnpm        | 11.x (usa `pnpm-lock.yaml`)                    |

```sh
pnpm install
```

---

## 🧞 Comandos

| Comando                        | Acción                                                           |
| :----------------------------- | :--------------------------------------------------------------- |
| `pnpm dev`                     | Servidor de desarrollo en `http://localhost:4321`                |
| `pnpm build`                   | Build estático en `./dist/`                                      |
| `pnpm preview`                 | Sirve el build de `./dist/` localmente                           |
| `pnpm astro check`             | Chequeo de tipos de `.astro`/`.ts` (`@astrojs/check`)            |
| `pnpm astro ...`               | CLI de Astro (`astro add`, `astro info`, …)                      |
| `pnpm exec prettier --write .` | Formatea el proyecto (`.prettierrc` con `prettier-plugin-astro`) |

> ⚠️ El código del repositorio **no está normalizado con Prettier** (varios componentes ya lo
> incumplían antes de tocar nada). Ejecuta `--write` sobre los archivos que toques, no sobre todo
> el proyecto, o el diff se llenará de cambios de formato sin valor semántico.

El servidor de desarrollo puede gestionarse en segundo plano:

```sh
pnpm astro dev --background   # arranca en background
pnpm astro dev status         # estado
pnpm astro dev logs           # logs
pnpm astro dev stop           # parar
```

---

## 📁 Estructura

```text
src/
├── components/           # Componentes .astro de cada sección
│   ├── Header.astro      # Navegación, selector de idioma y toggle de tema
│   ├── Hero.astro        # Cabecera con foto y CTAs
│   ├── About.astro       # Biografía (con animación de "typing")
│   ├── Projects.astro    # Casos de estudio
│   ├── OpenSource.astro  # Herramientas publicadas
│   ├── Experiments.astro # Proyectos de fin de semana
│   ├── TechStack.astro   # Stack y competencias
│   ├── Contact.astro     # Formulario de contacto
│   ├── Footer.astro      # Pie de página
│   ├── SectionHeading.astro
│   ├── WindowFrame.astro # Marco de terminal reutilizable
│   ├── ProjectCard.astro
│   ├── ProjectTerminal.astro
│   └── DevFoto.astro
├── content/              # Contenido en Markdown (colecciones)
│   ├── sections/{es,en}/
│   ├── projects/{es,en}/
│   ├── open-source/{es,en}/
│   └── experiments/{es,en}/
├── layouts/
│   ├── SiteLayout.astro  # Cáscara HTML: <head>, SEO, tema
│   └── HomeLayout.astro  # Página de inicio (contenido + JSON-LD)
├── lib/
│   └── i18n.ts           # Locales, anclas de sección y helpers de contenido
├── pages/
│   ├── index.astro       # Español  → /
│   ├── en/index.astro    # Inglés   → /en
│   ├── robots.txt.ts
│   └── sitemap.xml.ts
└── styles/
    └── global.css        # Tokens de tema + estilos de componentes
```

Todo el contenido y los textos visibles viven en Markdown; los componentes no llevan copy
hardcodeado (los únicos literales son mensajes de `console.error` dirigidos al desarrollador).

---

## 🌍 Multilenguaje (i18n)

El sitio usa la [integración i18n de Astro](https://docs.astro.build/en/guides/internationalization/).
El **español** es el idioma principal y se sirve en la raíz (`/`); el **inglés** bajo el prefijo `/en`.

```js
// astro.config.mjs
i18n: {
  defaultLocale: 'es',
  locales: ['es', 'en'],
  routing: { prefixDefaultLocale: false, redirectToDefaultLocale: false },
},
redirects: { '/es': '/' },   // /es redirige a la raíz
```

### Cómo funciona

1. **Cada entrada declara su idioma** en el frontmatter (`locale: es` / `locale: en`) y vive en la
   carpeta correspondiente. El esquema de `src/content.config.ts` valida el campo.
2. **`src/lib/i18n.ts`** centraliza los idiomas soportados y el **mapa de anclas por idioma**.
   Tanto el `id` de cada `<section>` como los enlaces de navegación se derivan de ese mapa, así que
   nunca pueden desincronizarse (`#sobre-mi` ↔ `#about`, `#contacto` ↔ `#contact`…).
3. **Los componentes** obtienen el idioma actual con `Astro.currentLocale`.
4. **Las URLs** de cada idioma se construyen con `getRelativeLocaleUrl()` y `getAbsoluteLocaleUrl()`
   del módulo `astro:i18n`.
5. **El selector del header** (`ES | EN`) conserva la sección visible al cambiar de idioma:
   `#contacto` → `/en/#contact`.

### Añadir o corregir una traducción

Crea el archivo en la carpeta del idioma correspondiente, **con el mismo nombre** que su versión
original, y mantén las mismas claves de frontmatter. No hay nada más que tocar: la página, las
anclas y el SEO se generan solos.

---

## ✍️ Modelo de contenido

Cuatro colecciones, todas con el mismo esquema base (`locale`, `title`, `description`, `order`) y
campos propios opcionales (`z.loose()`):

| Colección     | Claves (`id` del archivo)                                                                                        | Campos propios destacados                                                                                    |
| :------------ | :--------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------- |
| `sections`    | `hero`, `about`, `projects`, `open-source`, `experiments`, `stack`, `contact`, `site`                            | `role`, `pitch`, `paragraphs[]`, `principles[]`, `groups[]`, `projectTypes[]`, `navLinks[]`, `seo{}`, `ui{}` |
| `projects`    | `caritas`, `flordecristal`, `gustavstudio`                                                                       | `terminalPrompt{}`, `serverOutput[]`, `technologies[]`, `metrics[]`, `highlights[]`                          |
| `open-source` | `grit-cli`, `filament-tabler-icons`, `filament-dependancy-manager`, `blade-pixelicon-icons`, `filament-pinpoint` | `command`, `problem`, `outcome`, `tags[]`                                                                    |
| `experiments` | `bingo-app`, `quiniela-mundial`                                                                                  | `category`, `stack`, `href`, `linkLabel`                                                                     |

`src/content/sections/*/site.md` es el archivo de configuración de la web (marca, navegación, SEO,
pie de página, textos de interfaz).

---

## 🎨 Temas

`src/styles/global.css` define la paleta con **tokens de Tailwind v4** (`@theme`) y un tema claro
que solo redefine variables CSS (`[data-theme='light']`). **No debe haber colores literales fuera
de los bloques de tema.**

El tema se guarda en `localStorage` bajo la clave `theme` y se aplica **antes del primer paint**
mediante un script inline en `SiteLayout.astro`, evitando el parpadeo. Sin preferencia guardada, la
web sigue la preferencia del sistema en tiempo real.

---

## 🔍 SEO

- **JSON-LD** en `HomeLayout.astro`: `WebSite`, `ProfilePage` y `Person` (con `inLanguage`).
- **Open Graph / Twitter Card**: título, descripción, imagen (`/og-image.png`) y `og:locale`.
- **hreflang**: `SiteLayout.astro` emite un `<link rel="alternate">` por idioma más `x-default`
  apuntando al idioma principal.
- **`sitemap.xml.ts`**: se genera a partir de las páginas `.astro` reales y añade las
  alternativas `xhtml:link` entre idiomas.
- **`robots.txt.ts`**: permite todo e indica el sitemap.

---

## 🚀 Despliegue

El build es estático y se sirve desde **Cloudflare Workers** (assets estáticos):

```sh
pnpm build
npx wrangler deploy     # wrangler no es dependencia del proyecto; se invoca con npx
```

La configuración vive en `wrangler.jsonc` (`name: daljo25-dev`, `assets.directory: ./dist`).

---

## 📝 Notas

- `src/pages/index.astro` y `src/pages/en/index.astro` son envolturas de una línea: delegan en
  `HomeLayout.astro`, que es donde vive toda la lógica de la página.
- Las animaciones (typing del About, terminales de los proyectos, reveal al hacer scroll) usan
  `IntersectionObserver` y respetan `prefers-reduced-motion`.
- `pnpm astro check` debe pasar sin errores antes de abrir una PR.
