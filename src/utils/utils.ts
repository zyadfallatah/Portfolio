// cn.ts
import type { ClassValue } from "clsx";

import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { projects } from "../constants";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const getCurrentProject = (name: string) => {
  return projects.filter((project) => project.linkName === name).at(0) || null;
};
