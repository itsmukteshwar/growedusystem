import "server-only";

import { existsSync } from "node:fs";
import { join } from "node:path";

import { ImageIcon, TriangleAlert } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { ImageBrief } from "@/types";

/** True when the brief's file has been saved into public/images. */
export function imageExists(image: ImageBrief) {
  return existsSync(join(process.cwd(), "public", "images", image.file));
}

interface ImageSlotProps {
  image: ImageBrief;
  className?: string;
  /** Extra classes for the brief label box. */
  labelClassName?: string;
  /** Smaller label (id, size and file only) for thumbnails. */
  compact?: boolean;
  /** Hide the label even in development (tiny avatars). */
  hideLabel?: boolean;
  /** Hide the centred photo icon. */
  hideIcon?: boolean;
  /** Passed to next/image — describe the rendered width for responsive loading. */
  sizes?: string;
  /** Load eagerly (only for above-the-fold images such as the hero). */
  priority?: boolean;
  /** Overlays rendered on top (badges, captions, buttons). */
  children?: ReactNode;
}

/**
 * A photo slot. When `public/images/<image.file>` exists it renders that photo
 * (optimised by next/image). Otherwise it shows a striped placeholder with the
 * brief — size, file name and AI prompt — in development.
 */
export function ImageSlot({
  image,
  className,
  labelClassName,
  compact = false,
  hideLabel = false,
  hideIcon = false,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
  children,
}: ImageSlotProps) {
  const hasFile = imageExists(image);
  const showBrief = !hasFile && !hideLabel && siteConfig.showImageBriefs;

  return (
    <div
      className={cn("relative overflow-hidden", !hasFile && "bg-placeholder", className)}
      title={!hasFile && siteConfig.showImageBriefs ? `${image.id} · ${image.width}×${image.height} · public/images/${image.file}` : undefined}
    >
      {hasFile ? (
        <Image
          src={`/images/${image.file}`}
          alt={image.alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        !hideIcon && (
          <ImageIcon
            aria-hidden="true"
            strokeWidth={1.5}
            className="pointer-events-none absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 text-navy-800/16"
          />
        )
      )}

      {showBrief && (
        <div
          aria-hidden="true"
          className={cn(
            "relative max-w-90 rounded-xl border border-line bg-white/95 text-left shadow-[0_8px_20px_-12px_rgb(13_31_60/0.3)]",
            compact ? "px-2.5 py-2" : "px-3.5 py-3",
            labelClassName,
          )}
        >
          <div
            className={cn(
              "flex flex-wrap items-center gap-x-1.5 font-extrabold tracking-[0.6px] text-brand-700 uppercase",
              compact ? "text-[10px]" : "text-[11px]",
            )}
          >
            {!compact && <ImageIcon className="size-3.25" strokeWidth={2.2} />}
            {image.id} · {image.width}×{image.height} · {image.ratio}
          </div>
          <div className={cn("mt-0.5 font-mono break-all text-navy-500", compact ? "text-[10px]" : "text-[11px]")}>
            {image.file}
          </div>
          {image.realPhoto && (
            <div className="mt-1 flex items-start gap-1 text-[11px] leading-snug font-semibold text-warn-800">
              <TriangleAlert className="mt-px size-3 shrink-0" />
              {compact ? "Real photo required" : image.realPhoto}
            </div>
          )}
          {!compact && <div className="mt-1.5 font-display text-sm leading-[1.35] font-extrabold text-ink">{image.title}</div>}
          <p className={cn("mt-1 leading-normal text-body", compact ? "line-clamp-2 text-[10.5px]" : "line-clamp-4 text-[11.5px]")}>
            <span className="font-bold text-ink">AI prompt: </span>
            {image.prompt}
          </p>
        </div>
      )}

      {children}
    </div>
  );
}
