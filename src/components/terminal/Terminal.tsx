import { HTMLAttributes } from "react";

export default function Terminal({
  children,
  className,
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={
        "text-md font-medium rounded-md bg-primary-900 border border-spray-50 font-mono text-rockblue-200 p-4 flex flex-col gap-y-2 " +
        className
      }
    >
      {children}
    </div>
  );
}
