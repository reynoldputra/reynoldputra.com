import clsx from "clsx";
import { HTMLAttributes } from "react";
import { technologyMap } from "@/data/technologies";

interface IconListProps extends HTMLAttributes<HTMLDivElement> {
  icons: string[]
}

const IconList = ({ className, icons, ...props }: IconListProps) => {
  const renderIcon = (iconKey: string, idx: number) => {
    const tech = technologyMap[iconKey as keyof typeof technologyMap];
    
    if (!tech || !tech.icon) return null;

    return (
      <div
        key={idx}
        className="relative group cursor-pointer"
      >
        {tech.icon()}
        <div
          className={clsx(
            "absolute bottom-full left-1/2 -translate-x-1/2 mb-2",
            "px-2 py-1 rounded-md text-xs font-mono",
            "bg-primary-900 text-rockblue-50 border border-rockblue-500/50",
            "opacity-0 invisible group-hover:opacity-100 group-hover:visible",
            "transition-all duration-200 pointer-events-none",
            "whitespace-nowrap z-10"
          )}
        >
          {tech.name}
        </div>
      </div>
    );
  };

  return (
    <div
      className={clsx("flex items-center gap-x-2 text-bt text-rockblue-500", className)}
      {...props}
    >
      {icons.map((icon, idx) => renderIcon(icon, idx))}
    </div>
  );
};

export default IconList;
