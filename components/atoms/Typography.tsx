import clsx from "clsx";
import React from "react";
import { twMerge } from "tailwind-merge";

type FontType =
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "p1"
  | "p2";

type FontWeight =
  | "bold"
  | "semibold"
  | "normal"
  | "light";

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement> {
  tag?: React.ElementType;
  className?: string;
  fontType?: FontType;
  fontWeight?: FontWeight;
  children: React.ReactNode;
}

const fontTypeVariant: Record<FontType, string> = {
  title1: "text-[10.5vw] md:text-[6vw] leading-none tracking-tighter",
  title2: "text-[7vw] sm:text-[5vw] md:text-[4vw] leading-none tracking-tight",
  title3: "text-[5vw] md:text-[2.6vw] leading-none tracking-tight",
  title4: "text-[5vw] md:text-[1.8vw] leading-none tracking-tight",
  p1: "text-base lg:text-[1.2vw] leading-relaxed max-w-xl lg:max-w-[55vw]",
  p2: "text-sm lg:text-[1vw] leading-relaxed max-w-xl lg:max-w-[55vw]",
};

const fontWeightVariant: Record<FontWeight, string> = {
  bold: "font-bold",
  semibold: "font-semibold",
  normal: "font-normal",
  light: "font-light",
};

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  (
    {
      tag: Tag = "p",
      children,
      fontType = "p1",
      fontWeight = "normal",
      className,
      ...rest
    },
    ref,
  ) => {
    return (
      <Tag
        ref={ref}
        className={twMerge(
          clsx(
            fontTypeVariant[fontType],
            fontWeightVariant[fontWeight],
            "text-muted-foreground",
            className,
          ),
        )}
        {...rest}
      >
        {children}
      </Tag>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;