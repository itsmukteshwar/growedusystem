import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

import { cn } from "@/lib/utils";

const variants = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-700 hover:-translate-y-px hover:shadow-[0_10px_24px_-10px_rgb(37_135_53/0.7)]",
  "outline-light": "border-[1.5px] border-white/30 text-white hover:border-white/60 hover:bg-white/8",
  navy: "bg-navy-800 text-white hover:bg-navy-950",
} as const;

const sizes = {
  sm: "gap-2 rounded-[10px] px-4 py-2.75 text-sm",
  md: "gap-2 rounded-[10px] px-5 py-3.25 text-sm",
  lg: "gap-2.5 rounded-xl px-7 py-4.25 text-base",
  xl: "gap-2.5 rounded-[14px] px-8 py-4.75 text-[17px] font-extrabold",
} as const;

type ButtonLinkProps = ComponentProps<typeof Link> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  /** Adds an animated → after the label. */
  withArrow?: boolean;
  children: ReactNode;
};

/** A link styled as a button. Use for navigation and calls to action. */
export function ButtonLink({
  variant = "primary",
  size = "md",
  withArrow = false,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "group inline-flex items-center justify-center font-display font-bold whitespace-nowrap transition-[background-color,border-color,transform,box-shadow] duration-200 motion-reduce:transition-none",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
      {withArrow && <Arrow />}
    </Link>
  );
}

/** Text link with a sliding arrow, e.g. "Read our story →". */
export function ArrowLink({ className, children, ...props }: ComponentProps<typeof Link>) {
  return (
    <Link
      className={cn("group inline-flex items-center gap-1.5 font-display text-[15px] font-bold text-navy-800", className)}
      {...props}
    >
      {children}
      <Arrow />
    </Link>
  );
}

export function Arrow({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none",
        className,
      )}
    >
      →
    </span>
  );
}
