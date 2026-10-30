import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes safely: `cn("px-4", isActive && "px-6")`. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Build an absolute URL from a site path (used in metadata and schema). */
export function absoluteUrl(path = "/", base: string) {
  return new URL(path, base).toString();
}
