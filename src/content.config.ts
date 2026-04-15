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
    titleEn: z.string().optional(),
    shortDescription: z.string(),
    shortDescriptionEn: z.string().optional(),
    longDescription: z.string().optional(),
    longDescriptionEn: z.string().optional(),
    technologies: z.array(
      z.object({
        name: z.string(),
        icon: z.string(),
      }),
    ),
    metadata: z.array(z.string()),
    metadataEn: z.array(z.string()).optional(),
    bannar: z.string(),
    tags: z.array(z.string()).optional(),
    tagsEn: z.array(z.string()).optional(),
    linkName: z.string().optional(),
    compact: z.boolean().optional(),
    content: z.string().optional(),
    url: z.string().optional(),
    imagesUrl: z
      .array(
        z.object({
          name: z.string(),
          nameEn: z.string().optional(),
          url: z.string(),
        }),
      )
      .optional(),
    videosUrls: z
      .array(
        z.object({
          name: z.string(),
          nameEn: z.string().optional(),
          url: z.string(),
        }),
      )
      .optional(),
  }),
});

const projectExperince = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projectDetail" }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, projectExperince };
