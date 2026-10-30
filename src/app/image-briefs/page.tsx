import { CheckCircle2, CircleDashed, TriangleAlert } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui/Container";
import { CopyButton } from "@/components/ui/CopyButton";
import { imageExists } from "@/components/ui/ImageSlot";
import { siteConfig } from "@/config/site";
import { imageGroups } from "@/data/image-registry";
import { PHOTO_STYLE } from "@/data/images";

export const metadata: Metadata = {
  title: "Image briefs",
  robots: { index: false, follow: false },
};

/**
 * Internal checklist of every photo the site needs: size, file name and AI prompt.
 * Only available while image briefs are enabled (always in `npm run dev`).
 */
export default function ImageBriefsPage() {
  if (!siteConfig.showImageBriefs) notFound();

  const all = imageGroups.flatMap((g) => g.images);
  const done = all.filter(imageExists).length;

  return (
    <div className="px-6 py-14">
      <Container>
        <h1 className="mb-3 text-[clamp(30px,3.6vw,44px)] font-extrabold tracking-[-1px] text-ink">Image briefs</h1>
        <p className="mb-2 max-w-180 text-[17px] leading-relaxed text-body">
          Every photo slot on the site. Generate or shoot each image, export it as <strong>.webp</strong> at the listed size, and save it at{" "}
          <code className="rounded bg-navy-50 px-1.5 py-0.5 text-sm">public/images/&lt;file&gt;</code>. It replaces the placeholder automatically.
        </p>
        <p className="mb-8 text-sm text-muted">
          {done} of {all.length} images added · This page is hidden in production.
        </p>

        <div className="mb-10 rounded-[20px] border border-line bg-white p-5">
          <div className="mb-2 flex items-center justify-between gap-3">
            <h2 className="font-display font-extrabold text-ink">House photo style (already included in every prompt)</h2>
            <CopyButton text={PHOTO_STYLE} />
          </div>
          <p className="text-sm leading-relaxed text-body">{PHOTO_STYLE}</p>
        </div>

        {imageGroups.map((group) => (
          <section key={group.page} className="mb-12">
            <h2 className="mb-4 flex items-baseline gap-3 font-display text-2xl font-extrabold text-ink">
              {group.page}
              <Link href={group.path} className="text-sm font-semibold text-navy-500 underline underline-offset-2">
                {group.path}
              </Link>
            </h2>
            <ul className="flex flex-col gap-3">
              {group.images.map((img) => {
                const exists = imageExists(img);
                return (
                  <li key={img.id} className="rounded-[18px] border border-line bg-white p-5">
                    <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                      {exists ? (
                        <CheckCircle2 aria-label="Added" className="size-5 text-brand-600" />
                      ) : (
                        <CircleDashed aria-label="Missing" className="size-5 text-muted" />
                      )}
                      <span className="font-display font-extrabold text-ink">
                        {img.id} — {img.title}
                      </span>
                      <span className="rounded-full bg-navy-50 px-2.5 py-0.5 text-xs font-bold text-navy-800">
                        {img.width}×{img.height}px · {img.ratio}
                      </span>
                    </div>
                    <div className="mb-3 flex flex-wrap items-center gap-2">
                      <code className="rounded bg-canvas px-2 py-1 text-[13px] break-all text-navy-800">public/images/{img.file}</code>
                      <CopyButton text={img.file.split("/").pop() ?? img.file} label="Copy file name" />
                    </div>
                    {img.realPhoto && (
                      <p className="mb-3 flex items-start gap-2 rounded-lg bg-warn-500/10 px-3 py-2 text-[13px] font-medium text-warn-800">
                        <TriangleAlert aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
                        {img.realPhoto} The prompt below is only for a temporary stand-in.
                      </p>
                    )}
                    <div className="flex items-start gap-3">
                      <p className="flex-1 text-sm leading-relaxed text-body">
                        <span className="font-semibold text-ink">AI prompt: </span>
                        {img.prompt}
                      </p>
                      <CopyButton text={img.prompt} label="Copy prompt" />
                    </div>
                    <p className="mt-2 text-[13px] text-muted">
                      <span className="font-semibold">Alt text:</span> {img.alt}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </Container>
    </div>
  );
}
