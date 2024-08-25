import clsx from "clsx";
import { HTMLAttributes } from "react";
import { SiAmazon, SiAzuredevops, SiLaravel, SiNestjs, SiNextdotjs, SiReact, SiTypescript } from "react-icons/si";

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
        })
      } 
    </div>
  );
};

export default IconList;
