import { HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import { readableDate } from "@/libs/helper";
import Image from "next/image";
import { FiGithub } from "react-icons/fi";
import CardButton from "./CardButton";
import { AiOutlineLink } from "react-icons/ai";

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
      {img && <Image src={img} alt={title} width={720} height={420} className="w-full rounded-lg mb-8" />}
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
