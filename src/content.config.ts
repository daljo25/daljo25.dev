import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sections = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/sections' }),
	schema: z.object({
		title: z.string(),
		description: z.string().default(''),
		order: z.number().optional(),
	}).passthrough(),
});

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({ title: z.string(), description: z.string().default(''), order: z.number().optional() }).passthrough(),
});

const openSource = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/open-source' }),
	schema: z.object({ title: z.string(), description: z.string().default(''), order: z.number().optional() }).passthrough(),
});

const experiments = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/experiments' }),
	schema: z.object({ title: z.string(), description: z.string().default(''), order: z.number().optional() }).passthrough(),
});

export const collections = { sections, projects, openSource, experiments };
