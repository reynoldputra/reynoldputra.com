import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonAnimationProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  mode?: "dark" | "light";
  innerClassName?: string;
}

export default function ButtonAnimation({
  children,
  mode = "dark",
  className,
  innerClassName,
  ...rest
}: ButtonAnimationProps) {
  return (
    <button
      className={
        "border w-fit px-3 rounded-md flex items-center py-2 gap-2 text-sm relative group overflow-hidden " +
        (mode == "dark" ? " bg-primary-950 " : " bg-rockblue-50 ") +
        className
      }
      {...rest}
    >
      <div
        className={
          "z-0 w-0 h-0 group-hover:w-32 group-hover:h-32 transition-all duration-500 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 " +
          (mode == "dark" ? "bg-rockblue-50" : "bg-primary-950")
        }
      ></div>
      <div className={clsx("w-full z-10", innerClassName)}>
        {children}
      </div>
    </button>
  );
}
