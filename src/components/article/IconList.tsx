import clsx from "clsx";
import { HTMLAttributes } from "react";
import { SiAmazon, SiAzuredevops, SiC, SiGo, SiLaravel, SiNestjs, SiNextdotjs, SiPython, SiReact, SiTypescript } from "react-icons/si";

interface IconListProps extends HTMLAttributes<HTMLDivElement> {
  icons: string[]
}

const IconList = ({ className, icons, ...props }: IconListProps) => {
  return (
    <div
      className={clsx("flex gap-x-2 text-bt text-rockblue-500", className)}
      {...props}
    >
      {
        icons.map((icon, idx) => {
            if(icon == "react") return <SiReact key={idx} />
            if(icon == "nest") return <SiNestjs key={idx} />
            if(icon == "next") return <SiNextdotjs key={idx} />
            if(icon == "laravel") return <SiLaravel key={idx} />
            if(icon == "typescript") return <SiTypescript key={idx} />
            if(icon == "aws") return <SiAmazon key={idx} />
            if(icon == "azure") return <SiAzuredevops key={idx} />
            if(icon == "golang") return <SiGo key={idx} />
            if(icon == "c") return <SiC className="text-md" key={idx} />
            if(icon == "python") return <SiPython className="text-md" key={idx} />
            return null;
        })
      } 
    </div>
  );
};

export default IconList;
