import React from "react"

interface BadgeProps {
  children: React.ReactNode
}

const Badge = React.forwardRef<HTMLElement, BadgeProps>(({
  children,
  ...rest
}, ref) => {
  return (
    <span
      className="inline-flex items-center rounded-[3px] border border-foreground/20 px-2.5 py-1 text-xs"
      ref={ref}
      {...rest}
    >
      {children}
    </span>
  )
})

Badge.displayName = "Badge";
export default Badge;
