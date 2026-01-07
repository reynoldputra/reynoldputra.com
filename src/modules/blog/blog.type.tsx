import path from "node:path";

export const DIR_BLOGS = path.join(
  process.cwd(),
  "src",
  "contents",
  "blogs",
);

export interface BlogFrontmatter {
  title: string;
  description: string;
  topics?: string[];
  created_at: Date;
  updated_at?: Date;
  cover?: string;
  og_image?: string;
  published: boolean;
  order?: number;
  github?: string;
  link?: string;
}

