/**
 * Image brief helpers. Every photo slot on the site is described with `brief()`:
 * a file name, the size to export at, alt text and an AI prompt.
 *
 * Workflow: generate (or shoot) the image → export at the listed size as .webp →
 * save it at public/images/<file>. The placeholder is replaced automatically.
 * See every brief at /image-briefs while running `npm run dev`.
 */
import type { ImageBrief } from "@/types";

/** House style appended to every prompt so all images look like one shoot. */
export const PHOTO_STYLE =
  "Photorealistic editorial photograph in an Indian setting with authentic Indian people, natural daylight, candid and warm, shot on a full-frame camera with a 35mm lens, gentle depth of field, true-to-life colours with a subtle navy-and-green palette in clothing or surroundings, clean uncluttered composition";

export const NEGATIVE = "No text, no signage lettering, no logos, no watermarks, no distorted hands or faces";

function gcd(a: number, b: number): number {
  return b === 0 ? a : gcd(b, a % b);
}

export function ratioLabel(width: number, height: number) {
  const d = gcd(width, height);
  return `${width / d}:${height / d}`;
}

interface BriefInput {
  id: string;
  file: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  /** The scene only — style, ratio and negatives are added for you. */
  scene: string;
  realPhoto?: string;
  /** Use a fully custom prompt instead of the house photo style (UI shots, cut-outs…). */
  customPrompt?: string;
}

export function brief({ id, file, width, height, title, alt, scene, realPhoto, customPrompt }: BriefInput): ImageBrief {
  const ratio = ratioLabel(width, height);
  const prompt = customPrompt ?? `${scene}. ${PHOTO_STYLE}. Aspect ratio ${ratio}, ${width}×${height}px. ${NEGATIVE}.`;
  return { id, file, width, height, ratio, title, alt, prompt, ...(realPhoto && { realPhoto }) };
}

/** Reason shown on slots that must not stay AI-generated. */
export const REAL = {
  person: "Shows a real member of our team — use a real photo before launch.",
  client: "Shows a real client — use their real photo (with consent) before launch.",
  project: "Represents a school we actually built — use a real photo of that school before launch.",
  product: "Represents our real product — use a real screenshot with demo data before launch.",
} as const;
