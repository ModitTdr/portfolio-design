import clsx from "clsx";
import React from "react"
import { twMerge } from "tailwind-merge";


interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

const Button = ({
  children,
  className,
  size = 'md',
}: ButtonProps) => {
  const baseStyle = "border bg-primary md:bg-transparent shadow-xl text-black md:text-primary rounded-full text-md cursor-pointer relative overflow-hidden group z-0 font-semibold mt-6 border-primary not-dark:text-black not-dark:border-black text-sm"
  const sizeVariant = {
    sm: "h-9 px-2.5",
    md: "h-10 px-3",
    lg: "px-8 py-3",
    icon: 'p-1'
  }

  return (
    <button
      className={twMerge(
        clsx(
          baseStyle,
          sizeVariant[size],
          className,
        )
      )}
    >
      <p className="transition-all duration-400 ease-in-out group-hover:text-black relative z-10">{children}</p>
      <div
        className="absolute h-full w-full left-0 -bottom-full bg-primary rounded-4xl transition-all duration-400 ease-in-out 
            group-hover:bottom-0 group-hover:rounded-none z-0"
      />
    </button>
  )
}

export default Button
