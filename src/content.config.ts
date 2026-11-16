import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * Cada colección guarda sus entradas en carpetas por idioma (`es/`, `en/`).
 * El campo `locale` del frontmatter indica a qué idioma pertenece cada
 * entrada y permite filtrarlas con `getLocalizedEntries()`.
 */
const locale = z.enum(['es', 'en']);

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z
    .object({
      locale,
      title: z.string(),
      description: z.string().default(''),
      order: z.number().optional(),
    })
    .loose(),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z
    .object({
      locale,
      title: z.string(),
      description: z.string().default(''),
      order: z.number().optional(),
    })
    .loose(),
});

const openSource = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/open-source' }),
  schema: z
    .object({
      locale,
      title: z.string(),
      description: z.string().default(''),
      order: z.number().optional(),
    })
    .loose(),
});

const experiments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
  schema: z
    .object({
      locale,
      title: z.string(),
      description: z.string().default(''),
      order: z.number().optional(),
    })
    .loose(),
});

export const collections = { sections, projects, openSource, experiments };
