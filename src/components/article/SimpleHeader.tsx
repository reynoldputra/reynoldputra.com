import { HTMLAttributes } from "react";
import { readableDate } from "@/libs/helper";
import { FiGithub } from "react-icons/fi";
import { AiOutlineLink } from "react-icons/ai";
import ImageWithLoader from "../ImageWithLoader";
import Typography from "../typography/Typography";
import CardButton from "./CardButton";

interface SimpleHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  date: Date;
  img?: string;
  github?: string;
  link?: string;
}

const SimpleHeader = ({ title, date, img, github, link, ...props }: SimpleHeaderProps) => {
  return (
    <div {...props}>
      {img && (
          <ImageWithLoader 
            priority={true} 
            quality={100}
            src={img} 
            alt={title} 
            width={1920} 
            height={1080} 
            className="relative w-full h-full object-cover rounded-lg"
          />
      )}
      <Typography variant="p" font="mono" color="gray" className="mt-4">{readableDate(date)}</Typography>
      <Typography variant="h4" weight="bold">{title}</Typography>
      <div className="mt-4 flex gap-x-6">
        {github && (
          <CardButton Icon={<FiGithub />} text="Source Code" url={github} />
        )}
        {link && (
          <CardButton Icon={<AiOutlineLink />} text="Visit Site" url={link} />
        )}
      </div>
    </div>
  );
};

export default SimpleHeader;
