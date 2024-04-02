import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    objective: z.string(),
    client: z.string(),
    cover_image: z.string(),
    coverAlt: z.string(),
  //   // Make these image fields optional
    first_image: z.string(),
    image01Alt: z.string().optional(),
    seccond_image: z.string(),
    image02Alt: z.string().optional(),
    third_image: z.string(),
    image03Alt: z.string().optional(),
    // Assuming that each image has its own alt text, you might want to define separate fields
  }),
});

export const collections = {
  proyectos: projectsCollection,
};
