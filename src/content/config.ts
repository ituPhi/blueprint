import { defineCollection, z } from "astro:content";

const projectsCollection = defineCollection({
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()),
    objective: z.string(),
    client: z.string(),
    cover: image().refine((img)=> img.width >= 100,{
      message:"Must be a cover image"
    }),
    coverAlt: z.string(),
    // Make these image fields optional
    imgGal01: image().refine((img)=> img.width >= 100,{
      message:"Must be a cover image"
    }),
    imgGal01Alt: z.string().optional(),
    imgGal02: image().refine((img)=> img.width >= 100,{
      message:"Must be a cover image"
    }),
    imgGal02Alt: z.string().optional(),
    imgGal03: image().refine((img)=> img.width >= 100,{
      message:"Must be a cover image"
    }),
    imgGal03Alt: z.string().optional(),
    // Assuminz.string() a single alt text optional for all gallery images
    // If each image has its own alt text, you might want to define separate fields
  }),
});

export const collections = {
  proyectos: projectsCollection,
};
