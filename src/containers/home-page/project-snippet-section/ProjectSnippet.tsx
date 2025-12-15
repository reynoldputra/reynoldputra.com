import Cell from "@/components/Cell";
import Grid from "@/components/Grid";
import Section from "@/components/Section";
import FocusedPictureCard from "@/components/article/FocusedPictureCard";
import ButtonAnimation from "@/components/button/ButtonAnimation";
import Typography from "@/components/typography/Typography";
import { getFeaturedProjects } from "@/modules/project/project.action";
import clsx from "clsx";
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
            <Typography variant="h5" color="highlight" weight="bold">
              Featured Projects
            </Typography>
            <Typography className="mt-2" variant="p" color="white">
              Here, you’ll find a collection of my work that reflects my journey
              in the world of software development.
            </Typography>
            <div className="flex flex-col gap-y-8 sm:gap-y-4 mt-16">
              {featuredProjects.slice(0, 3).map((project, idx) => (
                <FocusedPictureCard project={project.frontmatter} slug={project.slug} key={idx} />
              ))}
            </div>
            <div className="w-full flex justify-center mt-16">
              <Link href="/projects">
                <ButtonAnimation className="border-rockblue-50" innerClassName="flex items-center gap-2">
                  <Typography
                    font="mono"
                    variant="c1"
                    className="z-20 transition-all group-hover:font-bold text-rockblue-50 group-hover:text-primary-950"
                  >
                    See more
                  </Typography>
                  <FaChevronRight className="z-20 h-3  transition-all text-rockblue-50 group-hover:text-primary-950" />
                </ButtonAnimation>
              </Link>
            </div>
          </Cell>
        </Grid>
      </Section>
    </div>
  );
}
