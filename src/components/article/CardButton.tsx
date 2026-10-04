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
      <div className="flex gap-x-2 items-center cursor-pointer group hover:border-accent">
        <div className="text-foreground group-hover:text-accent">
          <Icon.type className="text-foreground group-hover:text-accent" />
        </div>
        <Typography
          font="mono"
          variant="c2"
          color="white"
          className="group-hover:text-accent"
        >
          {text}
        </Typography>
      </div>
    </Link>
  );
};

export default CardButton