import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    fecha: z.date(),
    tags: z.array(z.string()),
    objective: z.string(),
    client: z.string(),
    cover: z.string(),
    coverAlt: z.string(),
    // Make these image fields optional
    imgGal01: z.string(),
    imgGal02: z.string(),
    imgGal03: z.string(),
    // Assuminz.string() a single alt text optional for all gallery images
    // If each image has its own alt text, you might want to define separate fields
    imgGal01Alt: z.string().optional(),
    imgGal02Alt: z.string().optional(),
    imgGal03Alt: z.string().optional(),
  }),
});

export const collections = {
  proyectos: projectsCollection,
};
