import { ImageIcon } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import type { ImageBrief } from "@/types";

interface ImageSlotProps {
  image: ImageBrief;
  className?: string;
  /** Extra classes for the brief label box. */
  labelClassName?: string;
  /** Smaller label for thumbnails. */
  compact?: boolean;
  /** Hide the label even in development (tiny avatars etc.). */
  hideLabel?: boolean;
  /** Hide the centred photo icon. */
  hideIcon?: boolean;
  /** Passed to next/image — describe the rendered width for responsive loading. */
  sizes?: string;
  /** Load eagerly (use only for above-the-fold images such as the hero). */
  priority?: boolean;
  /** Overlays rendered on top (badges, captions, buttons). */
  children?: ReactNode;
}

/**
 * A photo slot. Until `image.src` is set it renders a striped placeholder
 * with the photo brief (visible in development only), so the layout is final
 * and swapping in real photography is a one-line change in src/data.
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
  const showBrief = !image.src && !hideLabel && siteConfig.showImageBriefs;

  return (
    <div className={cn("relative overflow-hidden", !image.src && "bg-placeholder", className)}>
      {image.src ? (
        <Image
          src={image.src}
          alt={image.alt ?? image.title ?? image.description}
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
            "relative max-w-85 rounded-xl border border-line bg-white/94 shadow-[0_8px_20px_-12px_rgb(13_31_60/0.3)]",
            compact ? "px-2.5 py-2" : "px-3.5 py-3",
            labelClassName,
          )}
        >
          <div
            className={cn(
              "flex items-center gap-1.5 font-extrabold tracking-[0.8px] text-brand-700 uppercase",
              compact ? "text-[10px]" : "text-[11px]",
            )}
          >
            {!compact && <ImageIcon className="size-3.25" strokeWidth={2.2} />}
            {image.id}
            {image.spec && ` · ${image.spec}`}
          </div>
          {image.title && !compact && (
            <div className="mt-1.25 font-display text-sm leading-[1.35] font-extrabold text-ink">{image.title}</div>
          )}
          <div className={cn("leading-[1.55] text-body", compact ? "mt-0.5 text-[11.5px]" : "mt-1 text-[12.5px]")}>
            {image.description}
          </div>
        </div>
      )}

      {children}
    </div>
  );
}
