import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const sections = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
  schema: z
    .object({
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
      title: z.string(),
      description: z.string().default(''),
      order: z.number().optional(),
    })
    .loose(),
});

export const collections = { sections, projects, openSource, experiments };
