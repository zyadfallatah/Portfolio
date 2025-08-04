import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/data/projects",
  }),
  schema: z.object({
    title: z.string(),
    shortDescription: z.string(),
    longDescription: z.string().optional(),
    technologies: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
      })
    ),
    metadata: z.array(z.string()),
    bannar: z.string(),
    tags: z.array(z.string()).optional(),
    linkName: z.string().optional(),
    content: z.string().optional(),
    url: z.string().optional(),
    imagesUrl: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
      .optional(),
    videosUrls: z
      .array(
        z.object({
          name: z.string(),
          url: z.string(),
        })
      )
      .optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects };
