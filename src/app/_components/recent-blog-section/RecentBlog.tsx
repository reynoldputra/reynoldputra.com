import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import ButtonAnimation from "@/components/button/ButtonAnimation";
import Typography from "@/components/typography/Typography";
import { monthYearDateFormat } from "@/libs/helper";
import { getAllBlogs } from "@/modules/blog/blog.action";
import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { FaChevronRight } from "react-icons/fa";

export default async function RecentBlog({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const blogs = await getAllBlogs();
  const [latest, ...rest] = blogs;
  if (!latest) return null;

  return (
    <div className={clsx("relative", className)} {...props}>
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="h5" color="heading" weight="bold">
              Recent Blogs
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              Notes on things I ran into while building.
            </Typography>
            <Link
              href={`/blog/${latest.slug}`}
              className="mt-12 flex flex-col gap-2 group"
            >
              <Typography variant="c1" font="mono" color="gray">
                Latest · {monthYearDateFormat(latest.frontmatter.created_at)}
              </Typography>
              <Typography
                as="h3"
                variant="t"
                weight="bold"
                color="white"
                className="group-hover:text-accent"
              >
                {latest.frontmatter.title}
              </Typography>
              <Typography variant="p" color="gray">
                {latest.frontmatter.description}
              </Typography>
            </Link>
            {rest.length > 0 && (
              <div className="mt-8 flex flex-col border-t border-line">
                {rest.slice(0, 3).map((blog) => (
                  <Link
                    key={blog.slug}
                    href={`/blog/${blog.slug}`}
                    className="py-3.5 border-b border-line flex flex-wrap items-baseline gap-x-6 gap-y-1 group"
                  >
                    <Typography
                      as="span"
                      variant="c1"
                      font="mono"
                      color="gray"
                      className="w-20 shrink-0"
                    >
                      {monthYearDateFormat(blog.frontmatter.created_at)}
                    </Typography>
                    <Typography
                      as="span"
                      variant="p"
                      weight="semibold"
                      color="white"
                      className="flex-1 min-w-[240px] group-hover:text-accent"
                    >
                      {blog.frontmatter.title}
                    </Typography>
                  </Link>
                ))}
              </div>
            )}
            <div className="w-full flex justify-center mt-16">
              <Link href="/blog">
                <ButtonAnimation data-umami-event="see-more-blogs-button" className="border-foreground" innerClassName="flex items-center gap-2">
                  <Typography
                    font="mono"
                    variant="c1"
                    className="z-20 transition-all group-hover:font-bold text-foreground group-hover:text-background"
                  >
                    See more
                  </Typography>
                  <FaChevronRight className="z-20 h-3  transition-all text-foreground group-hover:text-background" />
                </ButtonAnimation>
              </Link>
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
}
