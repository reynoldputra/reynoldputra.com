import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import ButtonAnimation from "@/components/button/ButtonAnimation";
import Typography from "@/components/typography/Typography";
import { monthYearDateFormat } from "@/libs/helper";
import { getFeaturedProjects } from "@/modules/project/project.action";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { FaChevronRight } from "react-icons/fa";

export default async function ProjectSnippet({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const featuredProjects = await getFeaturedProjects();

  return (
    <div className={clsx("relative", className)} {...props}>
      <Section>
        <Grid screenHeight={false}>
          <Cell cols="1_full" colsMd="3_8" colsLg="4_6">
            <Typography variant="h5" color="heading" weight="bold">
              Featured Projects
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              A few products I built and can walk you through in full.
            </Typography>
            <div className="mt-12 flex flex-col border-t border-line">
              {featuredProjects.slice(0, 3).map((project, idx) => {
                const { frontmatter: fm, slug } = project;
                const meta = [
                  fm.title,
                  fm.position,
                  monthYearDateFormat(fm.created_at),
                ]
                  .filter(Boolean)
                  .join(" · ");
                return (
                  <article
                    key={slug}
                    className="py-5 border-b border-line flex flex-wrap items-center gap-x-4 gap-y-3"
                  >
                    <Typography
                      as="span"
                      variant="c1"
                      font="mono"
                      color="gray"
                      className="w-8 shrink-0 self-start leading-6"
                    >
                      {String(idx + 1).padStart(2, "0")}
                    </Typography>
                    <div className="flex-1 min-w-[240px] flex flex-col gap-1.5">
                      <Typography
                        as="h3"
                        variant="bt"
                        weight="bold"
                        color="white"
                      >
                        <Link
                          href={`/projects/${slug}`}
                          className="hover:text-accent"
                        >
                          {fm.headline ?? fm.title}
                        </Link>
                      </Typography>
                      <Typography variant="c1" font="mono" color="gray">
                        {meta}
                      </Typography>
                    </div>
                    {fm.cover && (
                      <div className="relative w-32 aspect-video rounded-md overflow-hidden shrink-0 bg-muted/20">
                        <Image
                          src={fm.cover}
                          alt={`image cover ${fm.title}`}
                          fill
                          sizes="128px"
                          className="object-cover"
                        />
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
            <div className="w-full flex justify-center mt-16">
              <Link href="/projects">
                <ButtonAnimation data-umami-event="see-more-projects-button" className="border-foreground" innerClassName="flex items-center gap-2">
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
