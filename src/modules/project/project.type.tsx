import path from "node:path";

export const DIR_PROJECTS = path.join(
  process.cwd(),
  "src",
  "contents",
  "projects",
);

export interface ProjectFrontmatter {
  title: string;
  description: string;
  og_image?: string;
  created_at: Date;
  featured: boolean;
  category: "main" | "archived";
  icons?: string[];
  article?: boolean;
  github?: string;
  link?: string;
  cover?: string;
}
