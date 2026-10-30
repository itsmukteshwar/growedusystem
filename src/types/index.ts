import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup extends NavLink {
  children?: NavLink[];
}

/**
 * Describes a photo slot. Save the image as `public/images/<file>` and it
 * replaces the placeholder automatically — no code change needed.
 * Build briefs with `brief()` from src/data/images.ts.
 */
export interface ImageBrief {
  /** Short reference, e.g. "HOME-01". */
  id: string;
  /** Path inside public/images, e.g. "home/hero-start-a-school.webp". */
  file: string;
  /** Recommended export size in pixels (2× the largest display size). */
  width: number;
  height: number;
  /** Aspect ratio label, e.g. "4:3". */
  ratio: string;
  title: string;
  /** Alt text for screen readers and image search. */
  alt: string;
  /** Ready-to-paste prompt for an AI image generator. */
  prompt: string;
  /** Set when the slot shows a real person, client, project or product — use a real photo before launch. */
  realPhoto?: string;
}

export interface Stat {
  value: string;
  label: string;
  icon: LucideIcon;
  tone: "navy" | "green";
}

export interface Feature {
  title: string;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  cta: string;
  href: string;
  badge?: string;
  image: ImageBrief;
}

export interface ProcessStep {
  number: string;
  timing: string;
  title: string;
  description: string;
  highlight?: boolean;
  /** Optional page with more detail on this stage. */
  href?: string;
  image: ImageBrief;
}

export interface Board {
  name: string;
  description: string;
  href: string;
}

export interface Project {
  name: string;
  meta: string;
  href: string;
  featured?: boolean;
  image: ImageBrief;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  variant: "video" | "card";
  image: ImageBrief;
}

export interface Platform {
  name: string;
  href: string;
  icon: LucideIcon;
  tone: "navy" | "green";
}

export interface Article {
  category: string;
  readTime: string;
  title: string;
  href: string;
  image: ImageBrief;
}

export interface Faq {
  question: string;
  answer: string;
}
