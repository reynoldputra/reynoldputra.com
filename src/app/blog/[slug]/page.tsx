import type { Metadata } from "next";
import { getMdSlugs } from "@/libs/mdx";
import { MdxArticle } from "@/components/mdx/mdxTypography";
import SimpleHeader from "@/components/article/SimpleHeader";
import BackNavigation from "@/components/BackNavigation";
import { DIR_BLOGS } from "@/modules/blog/blog.type";
import { getBlog } from "@/modules/blog/blog.action";

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const { frontmatter } = await getBlog(params.slug);
  const metadata: Metadata = {
    title: `${frontmatter.title ?? "Blog"}`,
    description: frontmatter.description,
    openGraph: {
      siteName: frontmatter.title,
      title: frontmatter.title,
      description: frontmatter.description,
      images: frontmatter.cover ?? frontmatter.og_image ?? "",
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
  let slugs = await getMdSlugs(DIR_BLOGS);
  let filtered_slug: string[] = [];

  for (const slug of slugs) {
    const { frontmatter } = await getBlog(slug);

    if (frontmatter.published) filtered_slug.push(slug);
  }

  return filtered_slug.map((slug) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { content, frontmatter } = await getBlog(params.slug);
  const { title, created_at, cover, topics, github } = frontmatter;

  return (
    <div className="mt-12">
      <BackNavigation href="/blog" text="All Blogs" />
      <SimpleHeader
        title={title}
        github={github}
        date={new Date(created_at)}
        className="mt-8"
        img={cover}
      />
      {topics && topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-4">
          {topics.map((topic, idx) => (
            <span
              key={idx}
              className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-spray-300/20 text-spray-300 border border-spray-300/30"
            >
              {topic}
            </span>
          ))}
        </div>
      )}
      <MdxArticle>{content}</MdxArticle>
    </div>
  );
}

