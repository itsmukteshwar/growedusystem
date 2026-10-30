import type { LucideIcon } from "lucide-react";

import type { Faq, ImageBrief, NavLink } from "@/types";

/** Shared shapes for long-form service / guide pages (src/data/services/*). */

export interface PageMeta {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  /** ISO date — shown as "Updated …" and used in structured data. */
  updated: string;
}

export interface PageHeroData {
  breadcrumbs: NavLink[];
  eyebrow: string;
  title: string;
  description: string;
  primary: NavLink;
  secondary?: NavLink;
  facts: { label: string; value: string }[];
  image: ImageBrief;
}

export interface IconItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface TimelineStep {
  title: string;
  timing: string;
  description: string;
  points?: string[];
  link?: NavLink;
}

export interface TableData {
  caption: string;
  columns: string[];
  rows: string[][];
  note?: string;
}

export interface RelatedLink extends NavLink {
  description: string;
}

export interface ServiceFaqs {
  title: string;
  items: Faq[];
}
