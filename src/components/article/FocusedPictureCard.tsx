import clsx from "clsx";
import { HTMLAttributes, ReactElement } from "react";
import Typography from "../typography/Typography";
import { ProjectFrontmatter } from "@/modules/project/project.type";
import { monthYearDateFormat } from "@/libs/helper";
import IconList from "./IconList";
import { VscGithubAlt } from "react-icons/vsc";
import { VscGoToFile } from "react-icons/vsc";
import { AiOutlineLink } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

interface FocusedPictureCardProps extends HTMLAttributes<HTMLDivElement> {
  project: ProjectFrontmatter;
  slug: string;
}

const FocusedPictureCard = ({
  className,
  slug,
  project,
  ...props
}: FocusedPictureCardProps) => {
  return (
    <div
      className={clsx(
        "w-full max-w-4xl min-w-[256px] sm:min-w-[400px] min-h-[288px] sm:min-h-[112px] relative rounded-md p-4 bg-primary-900",
        className,
      )}
      {...props}
    >
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 relative z-10">
        <div className="bg-gray-600/30 w-full mx-auto sm:mx-0 sm:w-64 sm:min-w-[256px] sm:h-36 max-w-xs aspect-video relative rounded-md overflow-hidden">
          {project.cover && (
            <Image
              src={project.cover}
              alt={"image cover " + project.title}
              fill
              sizes="(max-width: 768px) 100vw, 170px"
            />
          )}
        </div>
        <div className="w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0">
          <Typography variant="p" weight="bold" color="white">
            {project.title}
          </Typography>
          <Typography variant="c1" font="mono" color="gray" className="mt-1">
            {monthYearDateFormat(project.created_at)}
          </Typography>
          {project.icons && <IconList className="my-2" icons={project.icons} />}
          <Typography variant="c1" className="mt-2" color="gray">
            {project.description}
          </Typography>
        </div>
      </div>
      <div className="flex text-bt w-full sm:justify-end justify-center mt-4 gap-x-2">
        {project.github && (
          <CardButton
            Icon={<VscGithubAlt />}
            text="Github"
            url={project.github}
          />
        )}
        {project.link && (
          <CardButton Icon={<AiOutlineLink />} text="View" url={project.link} />
        )}
        {project.article && (
          <CardButton
            Icon={<VscGoToFile />}
            text="Read more"
            url={"/projects/" + slug}
          />
        )}
      </div>
    </div>
  );
};

const CardButton = ({
  Icon,
  text,
  url,
}: {
  Icon: ReactElement;
  text: string;
  url: string;
}) => {
  return (
    <Link href={url} target={url.startsWith("http") ? "_blank" : undefined}>
      <div className="flex gap-x-2 items-center py-1 px-2 rounded-md border border-white cursor-pointer group hover:border-spray-300">
        <div className="text-white group-hover:text-spray-300">
          <Icon.type className="text-white group-hover:text-spray-300" />
        </div>
        <Typography
          font="mono"
          variant="c2"
          color="white"
          className="group-hover:text-spray-300"
        >
          {text}
        </Typography>
      </div>
    </Link>
  );
};

export default FocusedPictureCard;

//
// <Typography
//   variant="c1"
//   color="highlight"
//   className="bg-spray-700/30 py-1 px-3 rounded-full"
// >
//   React
// </Typography>
// <Typography
//   variant="c1"
//   color="highlight"
//   className="bg-spray-700/30 py-1 px-3 rounded-full"
// >
//   React
// </Typography>
// <Typography
//   variant="c1"
//   color="highlight"
//   className="bg-spray-700/30 py-1 px-3 rounded-full"
// >
//   React
// </Typography>
// <Typography
//   variant="c1"
//   color="highlight"
//   className="bg-spray-700/30 py-1 px-3 rounded-full"
// >
//   React
// </Typography>
//
