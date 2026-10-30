import type { Metadata } from "next";

import { siteConfig } from "@/config/site";
import type { ImageBrief } from "@/types";
import type { PageMeta } from "@/types/service";

import { imageExists } from "@/components/ui/ImageSlot";

/**
 * Builds page metadata: unique title, description, canonical URL and social cards.
 * If the page's hero photo exists it becomes the share image; otherwise the site default is used.
 */
export function pageMetadata(meta: PageMeta, shareImage?: ImageBrief): Metadata {
  const images =
    shareImage && imageExists(shareImage)
      ? [{ url: `/images/${shareImage.file}`, width: shareImage.width, height: shareImage.height, alt: shareImage.alt }]
      : undefined;

  return {
    title: { absolute: `${meta.title} | ${siteConfig.name}` },
    description: meta.description,
    keywords: meta.keywords,
    alternates: { canonical: meta.path },
    openGraph: {
      type: "article",
      url: meta.path,
      title: meta.title,
      description: meta.description,
      modifiedTime: meta.updated,
      ...(images && { images }),
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      ...(images && { images: images.map((i) => i.url) }),
    },
  };
}
