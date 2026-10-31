import type { MetadataRoute } from "next";

import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

export const dynamic = "force-static";

/**
 * Generates /sitemap.xml. Add each new page here once it exists
 * (listing pages that 404 hurts SEO).
 */
const livePages: { path: string; priority: number; changeFrequency: "weekly" | "monthly" | "yearly" }[] = [
  { path: routes.home, priority: 1, changeFrequency: "weekly" },
  { path: routes.startSchool, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.feasibility, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.cbse, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.icse, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.ib, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.igcse, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.stateBoard, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.compareBoards, priority: 0.8, changeFrequency: "monthly" },
  { path: routes.management, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.dayManagement, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.boardingManagement, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.improvement, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.audit, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.admissions, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.training, priority: 0.9, changeFrequency: "monthly" },
  { path: routes.about, priority: 0.7, changeFrequency: "yearly" },
  { path: routes.careers, priority: 0.6, changeFrequency: "monthly" },
  { path: routes.contact, priority: 0.8, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return livePages.map(({ path, priority, changeFrequency }) => ({
    url: new URL(path, siteConfig.url).toString(),
    changeFrequency,
    priority,
  }));
}
