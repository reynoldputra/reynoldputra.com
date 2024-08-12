import clsx from "clsx";
import { HTMLAttributes } from "react";
import Typography from "../typography/Typography";

interface FocusedPictureCardProps extends HTMLAttributes<HTMLDivElement> {}

const FocusedPictureCard = ({
  className,
  ...props
}: FocusedPictureCardProps) => {
  return (
    <div
      className={clsx("w-full max-w-4xl min-w-[256px] sm:min-w-[400px] h-72 sm:h-36 flex flex-col sm:flex-row gap-2 overflow-hidden hover:bg-primary-900 p-2 hover:scale-105 transition-all cursor-pointer", className)}
      {...props}
    >
      <div className="bg-gray-100 w-full sm:w-auto mx-auto sm:h-full max-w-xs aspect-video"></div>
      <div>
        <Typography variant="p" color="highlight" weight="bold">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat
        </Typography>
        <Typography variant="c1" font="mono" color="gray">
          April 28, 2024
        </Typography>
        <Typography variant="c1" className="mt-1">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet. Nisi anim
        </Typography>
      </div>
    </div>
  );
};

export default FocusedPictureCard;
