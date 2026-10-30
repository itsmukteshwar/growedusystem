import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p
      className={cn(
        "mb-3.5 font-display text-xs font-extrabold tracking-[1.6px] text-brand-600 uppercase",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionTitle({
  children,
  className,
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={cn(
        "text-[clamp(30px,3.6vw,44px)] leading-[1.1] font-extrabold tracking-[-1px] text-ink",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
  /** Right-hand slot on split layouts (a link or short paragraph). */
  aside?: ReactNode;
  align?: "split" | "center";
  className?: string;
}

/** Eyebrow + H2 + optional description, used at the top of most sections. */
export function SectionHeader({ eyebrow, title, description, aside, align = "split", className }: SectionHeaderProps) {
  if (align === "center") {
    return (
      <div className={cn("mx-auto mb-14 max-w-160 text-center", className)}>
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
        {description && <p className="mt-4 text-[17px] leading-[1.7] text-body">{description}</p>}
      </div>
    );
  }

  return (
    <div className={cn("mb-10 flex flex-wrap items-end justify-between gap-6", className)}>
      <div className="max-w-155">
        <Eyebrow>{eyebrow}</Eyebrow>
        <SectionTitle>{title}</SectionTitle>
        {description && <p className="mt-4 text-base leading-[1.7] text-body">{description}</p>}
      </div>
      {aside}
    </div>
  );
}
