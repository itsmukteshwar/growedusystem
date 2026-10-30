/**
 * Collects every image brief on the site, grouped by page, for the /image-briefs
 * page and the `npm run images:list` export. New pages: add their data module here.
 */
import { routes } from "@/config/navigation";
import * as home from "@/data/home";
import * as cbse from "@/data/services/cbse";
import * as feasibility from "@/data/services/feasibility-dpr";
import * as startSchool from "@/data/services/start-a-school";
import type { ImageBrief } from "@/types";

function isBrief(value: unknown): value is ImageBrief {
  return typeof value === "object" && value !== null && "file" in value && "prompt" in value && "width" in value;
}

/** Walks any data structure and returns every ImageBrief in document order (deduplicated). */
function collect(source: unknown, found = new Map<string, ImageBrief>()) {
  if (isBrief(source)) {
    found.set(source.id, source);
  } else if (Array.isArray(source)) {
    source.forEach((item) => collect(item, found));
  } else if (typeof source === "object" && source !== null) {
    Object.values(source).forEach((value) => collect(value, found));
  }
  return found;
}

const byId = (a: ImageBrief, b: ImageBrief) => a.id.localeCompare(b.id, "en", { numeric: true });

export const imageGroups = [
  { page: "Homepage", path: routes.home, images: [...collect(home).values()].sort(byId) },
  { page: "Start a School", path: routes.startSchool, images: [...collect(startSchool).values()].sort(byId) },
  { page: "Feasibility & DPR", path: routes.feasibility, images: [...collect(feasibility).values()].sort(byId) },
  { page: "CBSE School Setup", path: routes.cbse, images: [...collect(cbse).values()].sort(byId) },
];
