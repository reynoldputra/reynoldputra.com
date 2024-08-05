import { HTMLAttributes } from "react";
import { RiArrowRightSLine } from "react-icons/ri";
export default function TermRegular({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={"flex " + className}>
      <div className="w-4">
        <RiArrowRightSLine className="text-terminal-green h-4 w-4 mt-[1px] i-translate-x-1" />
      </div>
      {children}
    </div>
  );
}
