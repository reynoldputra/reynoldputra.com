import clsx from "clsx";
import Link from "next/link";
import { HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import { ProjectFrontmatter } from "@/modules/project/project.type";
import { monthYearDateFormat } from "@/libs/helper";
import IconList from "./IconList";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";
import CardButton from "./CardButton";

interface ProjectListItemProps extends HTMLAttributes<HTMLElement> {
  project: ProjectFrontmatter;
  slug: string;
}

const ProjectListItem = ({
  className,
  slug,
  project,
  ...props
}: ProjectListItemProps) => {
  const heading = project.headline ?? project.title;
  const meta = [
    project.headline && project.title,
    project.position,
    monthYearDateFormat(project.created_at),
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <article
      className={clsx(
        "py-6 border-b border-line flex flex-wrap items-start gap-x-5 gap-y-3",
        className,
      )}
      {...props}
    >
      <div className="flex-1 min-w-[280px] flex flex-col gap-2">
        <Typography as="h3" variant="bt" weight="bold" color="white">
          {project.article ? (
            <Link
              href={"/projects/" + slug}
              className="hover:text-accent"
            >
              {heading}
            </Link>
          ) : (
            heading
          )}
        </Typography>
        <Typography variant="c1" font="mono" color="gray">
          {meta}
        </Typography>
        <Typography
          variant="c1"
          color="gray"
          className="leading-[18px] line-clamp-2"
        >
          {project.description}
        </Typography>
        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1.5">
          {project.icons ? <IconList icons={project.icons} /> : <span />}
          <div className="flex gap-x-4">
            {project.github && (
              <CardButton Icon={<FiGithub />} text="Source Code" url={project.github} />
            )}

            {project.link && (
              <CardButton Icon={<AiOutlineLink />} text="Visit Site" url={project.link} />
            )}

            {project.article && (
              <CardButton
                Icon={<FiArrowUpRight />}
                text="Read more"
                url={"/projects/" + slug}
              />
            )}
          </div>
        </div>
      </div>
      {project.cover && (
        <div className="relative w-40 aspect-video rounded-md overflow-hidden shrink-0 bg-muted/20">
          <Image
            src={project.cover}
            alt={"image cover " + project.title}
            fill
            sizes="160px"
            className="object-cover"
          />
        </div>
      )}
    </article>
  );
};
export default ProjectListItem;
