import clsx from "clsx";
import { HTMLAttributes, ReactNode } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode
  maxScreen?: boolean
}

export default function Section({ className, children, maxScreen = true, ...props }: SectionProps) {
  return (
    <div
      className={clsx(
        "flex justify-center"
      )}
      {...props}
    >
      <div className={clsx(
        maxScreen && "max-w-[1440px] w-full",
        className
      )}>
        {children}
      </div>
    </div>
  )
}
