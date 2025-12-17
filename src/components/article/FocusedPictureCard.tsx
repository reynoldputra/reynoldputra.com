import clsx from "clsx";
import { HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import { ProjectFrontmatter } from "@/modules/project/project.type";
import { monthYearDateFormat } from "@/libs/helper";
import IconList from "./IconList";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import Image from "next/image";
import CardButton from "./CardButton";

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
        "w-full max-w-4xl min-w-[256px] sm:min-w-[400px] min-h-[288px] sm:min-h-[112px] relative rounded-md p-4 bg-primary-900 border border-rockblue-900/40",
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
          <div className="flex justify-between">
            <div>
              <Typography variant="p" weight="bold" color="white">
                {project.title}
              </Typography>
              <Typography variant="c1" font="mono" color="gray" className="mt-1">
                {monthYearDateFormat(project.created_at)}
              </Typography>
            </div>
          </div>
          {project.icons && <IconList className="my-2" icons={project.icons} />}
          <Typography variant="c1" className="mt-2" color="gray">
            {project.description}
          </Typography>
        </div>
      </div>
      <div className="flex text-bt w-full sm:justify-end justify-center mt-4 gap-x-4">
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
  );
};
export default FocusedPictureCard;