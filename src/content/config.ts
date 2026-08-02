import { defineCollection, z } from 'astro:content';

const insights = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    dek: z.string(),
    pillar: z.enum(['Team Management', 'Business Writing', 'Industry Analysis']),
    date: z.date(),
    readMinutes: z.number(),
    image: z.string(),
    imageAlt: z.string(),
  }),
});

export const collections = { insights };
