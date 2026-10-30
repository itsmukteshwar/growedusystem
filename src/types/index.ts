import type { LucideIcon } from "lucide-react";

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup extends NavLink {
  children?: NavLink[];
}

/** Describes a photo slot. Add `src` once the real photo is in /public/images. */
export interface ImageBrief {
  id: string;
  spec: string;
  title?: string;
  description: string;
  src?: string;
  alt?: string;
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
