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
    first_image: image().refine((img)=> img.width >= 100,{
      message:"Must be a cover image"
    }),
    image01Alt: z.string().optional(),
    // seccond_image: image().refine((img)=> img.width >= 100,{
    //   message:"Must be a cover image"
    // }),
    // image02Alt: z.string().optional(),
    // third: image().refine((img)=> img.width >= 100,{
    //   message:"Must be a cover image"
    // }),
    // image03Alt: z.string().optional(),
    // Assuminz.string() a single alt text optional for all gallery images
    // If each image has its own alt text, you might want to define separate fields
  }),
});

export const collections = {
  proyectos: projectsCollection,
};
