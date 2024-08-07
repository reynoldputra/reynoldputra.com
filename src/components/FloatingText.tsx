import clsx from "clsx";
import { HTMLAttributes } from "react";

const FloatingText = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx("flex justify-center items-end", className)}
      {...props}
    >
      <p className="font-bold text-primary-100 text-stroke opacity-10 text-[192px] [writing-mode:vertical-lr]">
        {children}
      </p>
    </div>
  );
};

export default FloatingText;
