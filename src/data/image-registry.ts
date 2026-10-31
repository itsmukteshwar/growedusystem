/**
 * Collects every image brief on the site, grouped by page, for the /image-briefs
 * page and the `npm run images:list` export. New pages: add their data module here.
 */
import { routes } from "@/config/navigation";
import * as home from "@/data/home";
import * as boardingMgmt from "@/data/services/boarding-school-management";
import * as cambridge from "@/data/services/cambridge-igcse";
import * as cbse from "@/data/services/cbse";
import * as compareBoards from "@/data/services/compare-boards";
import * as dayMgmt from "@/data/services/day-school-management";
import * as feasibility from "@/data/services/feasibility-dpr";
import * as ib from "@/data/services/ib";
import * as icse from "@/data/services/icse";
import * as management from "@/data/services/school-management";
import * as startSchool from "@/data/services/start-a-school";
import * as stateBoard from "@/data/services/state-board";
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
  { page: "ICSE School Setup", path: routes.icse, images: [...collect(icse).values()].sort(byId) },
  { page: "IB School Setup", path: routes.ib, images: [...collect(ib).values()].sort(byId) },
  { page: "Cambridge IGCSE Setup", path: routes.igcse, images: [...collect(cambridge).values()].sort(byId) },
  { page: "State Board Setup", path: routes.stateBoard, images: [...collect(stateBoard).values()].sort(byId) },
  { page: "Compare Boards", path: routes.compareBoards, images: [...collect(compareBoards).values()].sort(byId) },
  { page: "School Management", path: routes.management, images: [...collect(management).values()].sort(byId) },
  { page: "Day School Management", path: routes.dayManagement, images: [...collect(dayMgmt).values()].sort(byId) },
  { page: "Boarding School Management", path: routes.boardingManagement, images: [...collect(boardingMgmt).values()].sort(byId) },
];
