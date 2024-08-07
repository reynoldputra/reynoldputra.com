import clsx from "clsx";

export enum TypographyVariant {
  "c2",
  "c1",
  "p",
  "bt",
  "t",
  "h6",
  "h5",
  "h4",
  "h3",
  "h2",
  "h1",
}

export enum TypographyColor {
  "gray",
  "white",
  "highlight",
}

enum FontWeight {
  "regular",
  "semibold",
  "bold",
}

export type TypographyProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  weight?: keyof typeof FontWeight;
  color?: keyof typeof TypographyColor;
  variant?: keyof typeof TypographyVariant;
  children?: React.ReactNode;
  font?: "sans" | "mono";
};

export default function Typography<T extends React.ElementType>({
  as,
  children,
  weight = "regular",
  className,
  color = "white",
  variant = "p",
  font = "sans",
  ...props
}: TypographyProps<T> &
  Omit<React.ComponentProps<T>, keyof TypographyProps<T>>) {
  const Component = as || "p";
  return (
    <Component
      className={clsx(
        // *=============== Font Weight ==================
        [
          weight === "regular" && "font-normal",
          weight === "semibold" && "font-semibold",
          weight === "bold" && "font-bold",
        ],

        // *=============== Font Variants ==================
        [
          variant === "c2" && "text-xs",
          variant === "c1" && "text-sm",
          variant === "p" && "text-md",
          variant === "bt" && "text-lg",
          variant === "t" && "text-xl",
          variant === "h6" && "text-2xl",
          variant === "h5" && "text-3xl",
          variant === "h4" && "text-4xl",
          variant === "h3" && "text-5xl",
          variant === "h2" && "text-6xl",
          variant === "h1" && "text-7xl",
        ],

        [
          color === "gray" && ["text-rockblue-500"],
          color === "white" && ["text-rockblue-50"],
          color === "highlight" && ["text-spray-300"],
        ],

        font == "sans" ? "font-sans" : "font-mono",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
