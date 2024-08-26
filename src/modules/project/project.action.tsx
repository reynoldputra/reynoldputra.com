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

    return {
      content,
      frontmatter: {
        ...frontmatter,
        created_at: new Date(frontmatter.created_at),
      },
    };
  } catch (error) {
    notFound();
  }
};

const getAllProjects = async () => {
  let slugs = await getMdSlugs(DIR_PROJECTS);
  const projects = await Promise.all(
    slugs.map(async (slug: string) => {
      const filePath = path.join(DIR_PROJECTS, slug) + ".mdx";
      const page = await fs.readFile(filePath, "utf8");

      const compiled = await compileMDX<ProjectFrontmatter>({
        source: page,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        frontmatter: {
          ...compiled.frontmatter,
          created_at: new Date(compiled.frontmatter.created_at),
        },
        slug: slug,
      };
    }),
  );
  return projects;
};

const getFeaturedProjects = async () => {
  const projects = await getAllProjects();

  return projects.filter((p) => p.frontmatter.featured);
};

export { getAllProjects, getProject, getFeaturedProjects };
