import path from "path";
import fs from "node:fs/promises";
import { DIR_PROJECTS, ProjectFrontmatter } from "./project.type";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import MdxComponent from "@/components/mdx/MdxComponent";
import { getMdSlugs } from "@/libs/mdx";

const getProject = async (slug: string) => {
  try {
    const filePath = path.join(DIR_PROJECTS, slug) + ".mdx";
    const page = await fs.readFile(filePath, "utf8");

    const { content, frontmatter } = await compileMDX<ProjectFrontmatter>({
      source: page,
      options: {
        parseFrontmatter: true,
      },
      components: MdxComponent,
    });

    return { content, frontmatter };
  } catch (error) {
    notFound();
  }
};

const getAllProjects = async () => {
  let slugs = await getMdSlugs(DIR_PROJECTS);
  const projects = await Promise.all(
    slugs.map(async (slug) => {
      const filePath = path.join(DIR_PROJECTS, slug) + ".mdx";
      const page = await fs.readFile(filePath, "utf8");

      const compiled = await compileMDX<ProjectFrontmatter>({
        source: page,
        options: {
          parseFrontmatter: true,
        },
      });

      return { ...compiled.frontmatter };
    }),
  );
  return projects;
};

export { getAllProjects, getProject };
