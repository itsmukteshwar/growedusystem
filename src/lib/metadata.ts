import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { ImageBrief } from "@/types";
import type { PageMeta } from "@/types/service";

import { imageExists } from "@/components/ui/ImageSlot";

/** Default social share card, a static PNG in public/og-default.jpg (1200×630). */
const DEFAULT_SHARE_IMAGE = { url: "/og-default.jpg", width: 1200, height: 630, alt: `${siteConfig.name} — School consultants in India` };

/**
 * Builds page metadata: unique title, description, canonical URL and social cards.
 *
 * SEO notes:
 * - Keep `meta.title` to ~42 characters so "Title | Grow Edu System" fits Google's ~60-character display.
 * - Keep `meta.description` between 120 and 160 characters.
 * - The page's hero photo becomes the share image once it exists; until then the default card is used.
 * - Next.js replaces (does not merge) the root `openGraph` object, so site name and locale are repeated here.
 */
export function pageMetadata(meta: PageMeta, shareImage?: ImageBrief, type: "article" | "website" = "article"): Metadata {
  const image =
    shareImage && imageExists(shareImage)
      ? { url: `/images/${shareImage.file}`, width: shareImage.width, height: shareImage.height, alt: shareImage.alt }
      : DEFAULT_SHARE_IMAGE;

  return {
    title: { absolute: `${meta.title} | ${siteConfig.name}` },
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: meta.path },
    openGraph: {
      type,
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      url: meta.path,
      title: meta.title,
      description: meta.description,
      images: [image],
      ...(type === "article" && { modifiedTime: meta.updated }),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [image.url],
    },
  };
}
