import { defineCollection, z } from "astro:content";

// 2. Import loader(s)
import { glob } from "astro/loaders";

// 3. Define your collection(s)
const projects = defineCollection({
  loader: async () => {
    const res = await fetch(`${import.meta.env.BASE_DATA_URL}/projects`);
    const data = (await res.json()).docs as Project[]; // Docs coming from the CMS

    return data.map((e) => ({
      id: e.title,
      ...e,
    }));
  },
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
    metadata: z.array(z.object({ value: z.string() })),
    bannar: z.string(),
    tags: z.array(z.object({ value: z.string() })).optional(),
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

const projectExperince = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/projectDetail" }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { projects, projectExperince };
