import { getCollection } from 'astro:content';

export const locales = ['es', 'en'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'es';

/** Nombre completo del idioma, usado en los atributos aria/title del selector. */
export const localeLabels: Record<Locale, string> = {
  es: 'Español',
  en: 'English',
};

/** Código corto mostrado en el selector de idioma del header. */
export const localeShortLabels: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
};

/**
 * Anclas de cada sección por idioma. Tanto el `id` de los <section> como los
 * enlaces de navegación se derivan de este mapa, de modo que no pueden
 * desincronizarse entre sí.
 */
export const sectionAnchors: Record<Locale, Record<string, string>> = {
  es: {
    hero: 'inicio',
    about: 'sobre-mi',
    projects: 'proyectos',
    'open-source': 'open-source',
    experiments: 'experimentos',
    stack: 'tech-stack',
    contact: 'contacto',
  },
  en: {
    hero: 'home',
    about: 'about',
    projects: 'projects',
    'open-source': 'open-source',
    experiments: 'experiments',
    stack: 'tech-stack',
    contact: 'contact',
  },
};

export function isLocale(value: unknown): value is Locale {
  return typeof value === 'string' && (locales as readonly string[]).includes(value);
}

/** Normaliza cualquier valor a un locale soportado. */
export function toLocale(value: string | undefined | null): Locale {
  return isLocale(value) ? value : defaultLocale;
}

/** Ancla de una sección para el idioma indicado. */
export function anchorFor(locale: Locale, section: string): string {
  return sectionAnchors[locale][section] ?? section;
}

/**
 * Devuelve las entradas de una colección filtradas por idioma y ordenadas por
 * el campo `order` de su frontmatter.
 */
export async function getLocalizedEntries(collection: string, locale: Locale): Promise<any[]> {
  const entries = await getCollection(collection as any);
  return entries
    .filter((entry: any) => entry.data.locale === locale)
    .sort((a: any, b: any) => (a.data.order ?? 0) - (b.data.order ?? 0));
}

/**
 * Busca una entrada por su clave (nombre de archivo sin la carpeta de idioma).
 * Las claves son `hero`, `about`, `projects`, `open-source`, `experiments`,
 * `stack`, `contact` y `site`.
 */
export function findByKey(entries: any[], key: string): any {
  return entries.find((entry) => entry.id.split('/').pop() === key);
}
