import { HTMLAttributes } from "react";
import Typography from "../typography/Typography";
import { readableDate } from "@/libs/helper";

interface SimpleHeaderProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  date: Date;
}
const SimpleHeader = ({ title, date, ...props }: SimpleHeaderProps) => {
  return (
    <div {...props}>
      <Typography variant="h4" weight="bold">{title}</Typography>
      <Typography variant="p" font="mono" color="gray" className="mt-4">{readableDate(date)}</Typography>
    </div>
  );
};

export default SimpleHeader;
