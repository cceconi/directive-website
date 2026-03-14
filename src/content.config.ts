import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docs = defineCollection({
  loader: glob({
    pattern: '**/*.md',
    base: process.env.DOCS_PATH ?? '/web/directive-cli-doc/',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    nav_order: z.number(),
    group: z.string().optional(),
    commands: z.array(z.string()).optional(),
  }),
});

export const collections = { docs };
