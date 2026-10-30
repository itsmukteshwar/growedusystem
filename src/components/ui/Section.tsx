import type { ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

const tones = {
  canvas: "bg-canvas",
  white: "bg-white border-t border-line",
  none: "",
} as const;

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  tone?: keyof typeof tones;
};

/** Standard vertical rhythm for homepage sections. */
export function Section({ tone = "none", className, ...props }: SectionProps) {
  return <section className={cn("px-6 py-20 md:py-26", tones[tone], className)} {...props} />;
}
