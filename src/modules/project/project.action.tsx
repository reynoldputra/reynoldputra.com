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

const getAllProjects = async (sort: boolean = true) => {
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

  if (!sort) return projects;

  const sorted = projects.sort((a, b) => {
    return getPriority(b.frontmatter) - getPriority(a.frontmatter);
  });

  return sorted;
};

const getFeaturedProjects = async (sort: boolean = true) => {
  const projects = await getAllProjects(sort);
  const filtered = projects.filter((p) => p.frontmatter.featured);
  return filtered;
};

const getPriority = (obj: ProjectFrontmatter) => {
  let priority_count = 0;
  const priorities: Array<keyof ProjectFrontmatter> = ["link", "github"];

  if (obj.article) priority_count += priorities.length;

  for (const priority of priorities) {
    if (obj[priority]) priority_count++;
  }

  return priority_count;
};

export { getAllProjects, getProject, getFeaturedProjects };
