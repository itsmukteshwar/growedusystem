/**
 * Writes docs/IMAGE-BRIEFS.md — every photo slot with size, file name and AI prompt.
 * Run: npm run images:list
 */
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

import { imageGroups } from "../src/data/image-registry";
import { PHOTO_STYLE } from "../src/data/images";

const exists = (file: string) => existsSync(join(process.cwd(), "public", "images", file));
const all = imageGroups.flatMap((g) => g.images);

let md = `# Image briefs — Grow Edu System website\n\n`;
md += `${all.length} image slots · ${all.filter((i) => exists(i.file)).length} added.\n\n`;
md += `**How to use:** generate (or shoot) each image, export as **.webp** at the listed size, and save it at \`public/images/<file>\`. The placeholder is replaced automatically — no code change needed.\n\n`;
md += `**House style** (already included in every prompt): ${PHOTO_STYLE}.\n\n`;
md += `> ⚠️ Slots marked **Real photo required** show real people, clients, projects or products. Use the AI prompt only for a temporary stand-in and replace it with a genuine photo before launch.\n\n`;

for (const group of imageGroups) {
  md += `## ${group.page} (\`${group.path}\`)\n\n`;
  md += `| ID | Size | File | Status |\n|---|---|---|---|\n`;
  for (const img of group.images) {
    md += `| ${img.id} | ${img.width}×${img.height} (${img.ratio}) | \`public/images/${img.file}\` | ${exists(img.file) ? "✅ Added" : img.realPhoto ? "⚠️ Real photo required" : "Missing"} |\n`;
  }
  md += `\n`;
  for (const img of group.images) {
    md += `### ${img.id} — ${img.title}\n\n`;
    md += `- **Size:** ${img.width}×${img.height}px (${img.ratio})\n`;
    md += `- **Save as:** \`public/images/${img.file}\`\n`;
    md += `- **Alt text:** ${img.alt}\n`;
    if (img.realPhoto) md += `- **⚠️ Real photo required:** ${img.realPhoto}\n`;
    md += `\n**AI prompt:**\n\n\`\`\`text\n${img.prompt}\n\`\`\`\n\n`;
  }
}

mkdirSync("docs", { recursive: true });
writeFileSync("docs/IMAGE-BRIEFS.md", md);
console.log(`Wrote docs/IMAGE-BRIEFS.md (${all.length} images)`);
