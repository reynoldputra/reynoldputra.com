import { ReactElement } from "react";
import Typography from "../typography/Typography";
import Link from "next/link";

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
      <div className="flex gap-x-2 items-center cursor-pointer group hover:border-spray-300">
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

export default CardButton