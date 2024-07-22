import { HTMLAttributes } from "react";

export default function FullOverlay({
  children,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="fixed bg-primary-950 w-screen h-screen z-50 flex justify-center items-center font-mono text-md text-rockblue-50 p-4"
      {...rest}
    >
      {children}
    </div>
  );
}
