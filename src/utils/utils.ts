// cn.ts
import { getCollection } from "astro:content";
import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getCurrentProject = async (name: string) => {
  const projects = await getCollection("projects");
  const currentProject = projects
    .filter(({ data: project }) => project.linkName === name)
    .at(0);
  return currentProject?.data || null;
};
