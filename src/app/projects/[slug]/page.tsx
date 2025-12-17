import type { Metadata } from "next";
import { getMdSlugs } from "@/libs/mdx";
import { MdxArticle } from "@/components/mdx/mdxTypography";
import SimpleHeader from "@/components/article/SimpleHeader";
import BackNavigation from "@/components/BackNavigation";
import { DIR_PROJECTS } from "@/modules/project/project.type";
import { getProject } from "@/modules/project/project.action";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter } = await getProject(params.slug);
  const metadata: Metadata = {
    title: `${frontmatter.title ?? "Projects"}`,
    description: frontmatter.description,
    openGraph: {
      siteName: frontmatter.title,
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.cover ?? "",
    },
  };

  if (frontmatter.og_image)
    metadata.openGraph!.images = [
      {
        url: frontmatter.og_image,
        width: 1200,
        height: 630,
        alt: "",
      },
    ];

  return metadata;
}

export async function generateStaticParams() {
  let slugs = await getMdSlugs(DIR_PROJECTS);
  let filtered_slug: string[] = [];

  for (const slug of slugs) {
    const { frontmatter } = await getProject(slug);

    if (frontmatter.article) filtered_slug.push(slug);
  }

  return filtered_slug.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getProject(params.slug);
  const { title, created_at, cover, github, link } = frontmatter;

  return (
    <div className="mt-12">
      <BackNavigation href="/projects" text="All Projects" />
      <SimpleHeader
        title={title}
        date={new Date(created_at)}
        className="mt-8"
        img={cover}
        github={github}
        link={link}
      />
      <MdxArticle>{content}</MdxArticle>
    </div>
  );
}
