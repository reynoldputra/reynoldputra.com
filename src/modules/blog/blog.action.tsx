import path from "path";
import fs from "node:fs/promises";
import { DIR_BLOGS, BlogFrontmatter } from "./blog.type";
import { notFound } from "next/navigation";
import { compileMDX } from "next-mdx-remote/rsc";
import MdxComponent from "@/components/mdx/MdxComponent";
import { getMdSlugs } from "@/libs/mdx";

const getBlog = async (slug: string) => {
  try {
    const filePath = path.join(DIR_BLOGS, slug) + ".mdx";
    const page = await fs.readFile(filePath, "utf8");

    const { content, frontmatter } = await compileMDX<BlogFrontmatter>({
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
        updated_at: frontmatter.updated_at ? new Date(frontmatter.updated_at) : undefined,
      },
    };
  } catch (error) {
    notFound();
  }
};

const getAllBlogs = async () => {
  let slugs = await getMdSlugs(DIR_BLOGS);
  const blogs = await Promise.all(
    slugs.map(async (slug: string) => {
      const filePath = path.join(DIR_BLOGS, slug) + ".mdx";
      const page = await fs.readFile(filePath, "utf8");

      const compiled = await compileMDX<BlogFrontmatter>({
        source: page,
        options: {
          parseFrontmatter: true,
        },
      });

      return {
        frontmatter: {
          ...compiled.frontmatter,
          created_at: new Date(compiled.frontmatter.created_at),
          updated_at: compiled.frontmatter.updated_at ? new Date(compiled.frontmatter.updated_at) : undefined,
        },
        slug: slug,
      };
    }),
  );

  // Filter only published blogs
  const publishedBlogs = blogs.filter((blog) => blog.frontmatter.published);

  // Sort by order or created_at
  const sortedBlogs = publishedBlogs.sort((a, b) => {
    const orderA = a.frontmatter?.order;
    const orderB = b.frontmatter?.order;
    
    if (orderA !== undefined && orderB !== undefined) return orderA - orderB;
    if (orderA !== undefined && orderB === undefined) return -1;
    if (orderA === undefined && orderB !== undefined) return 1;
  
    // If no order, sort by created_at (newest first)
    return b.frontmatter.created_at.getTime() - a.frontmatter.created_at.getTime();
  });

  return sortedBlogs;
};

export { getAllBlogs, getBlog };

