/**
 * Building blocks for long-form service pages. All server components,
 * so every word is in the HTML that search engines read.
 */
import { AlertTriangle, Check, Info, Lightbulb } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

import { Arrow } from "@/components/ui/Button";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";
import type { ImageBrief, NavLink } from "@/types";
import type { IconItem, RelatedLink, TableData, TimelineStep } from "@/types/service";

/* ------------------------------------------------------------------------ */

interface ContentSectionProps {
  id: string;
  eyebrow?: string;
  title: string;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}

/** A titled, linkable section of the article (anchor target for the table of contents). */
export function ContentSection({ id, eyebrow, title, intro, children, className }: ContentSectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-28 border-t border-line pt-14 first:border-t-0 first:pt-0", className)}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 id={`${id}-title`} className="mb-4 text-[clamp(26px,3vw,36px)] leading-[1.15] font-extrabold tracking-[-0.8px] text-ink">
        {title}
      </h2>
      {intro && <div className="mb-8 max-w-180 text-[17px] leading-[1.75] text-body [&_p+p]:mt-4">{intro}</div>}
      {children}
    </section>
  );
}

export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "max-w-180 text-[17px] leading-[1.75] text-body [&_a]:font-semibold [&_a]:text-navy-800 [&_a]:underline [&_a]:underline-offset-2 [&_p+p]:mt-4 [&_strong]:text-ink",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function IconGrid({ items, columns = 2 }: { items: IconItem[]; columns?: 2 | 3 }) {
  return (
    <ul className={cn("grid gap-4 sm:grid-cols-2", columns === 3 && "lg:grid-cols-3")}>
      {items.map(({ icon: Icon, title, description }) => (
        <li key={title} className="flex gap-4 rounded-[20px] border border-line bg-white p-5.5">
          <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
            <Icon aria-hidden="true" className="size-5.5" />
          </span>
          <div>
            <h3 className="mb-1 font-display text-[17px] leading-snug font-extrabold text-ink">{title}</h3>
            <p className="text-[15px] leading-[1.6] text-body">{description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export function Checklist({ items, columns = 2 }: { items: string[]; columns?: 1 | 2 }) {
  return (
    <ul className={cn("grid gap-x-8 gap-y-3", columns === 2 && "sm:grid-cols-2")}>
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-[1.6] text-body">
          <span className="mt-0.5 inline-flex size-5.5 shrink-0 items-center justify-center rounded-full bg-brand-50">
            <Check aria-hidden="true" className="size-3.25 text-brand-600" strokeWidth={3} />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

/* ------------------------------------------------------------------------ */

export function Timeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <ol className="relative flex flex-col gap-4 before:absolute before:top-4 before:bottom-4 before:left-5.25 before:w-0.5 before:bg-navy-100">
      {steps.map((step, i) => (
        <li key={step.title} className="relative flex gap-5">
          <span className="relative z-1 inline-flex size-11 shrink-0 items-center justify-center rounded-full border-4 border-canvas bg-navy-800 font-display text-sm font-extrabold text-white">
            {i + 1}
          </span>
          <div className="min-w-0 flex-1 rounded-[20px] border border-line bg-white p-5.5">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <h3 className="font-display text-lg leading-snug font-extrabold text-ink">{step.title}</h3>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-xs font-bold text-brand-700">{step.timing}</span>
            </div>
            <p className="text-[15px] leading-[1.65] text-body">{step.description}</p>
            {step.points && (
              <ul className="mt-3 flex flex-col gap-1.5">
                {step.points.map((p) => (
                  <li key={p} className="flex gap-2 text-sm leading-[1.6] text-body">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-brand-500" />
                    {p}
                  </li>
                ))}
              </ul>
            )}
            {step.link && (
              <Link href={step.link.href} className="group mt-3 inline-flex font-display text-sm font-bold text-navy-800">
                {step.link.label} <Arrow className="ml-1" />
              </Link>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}

/* ------------------------------------------------------------------------ */

export function DataTable({ table }: { table: TableData }) {
  return (
    <figure>
      <div className="overflow-x-auto rounded-[20px] border border-line bg-white">
        <table className="w-full min-w-140 border-collapse text-left text-[15px]">
          <caption className="sr-only">{table.caption}</caption>
          <thead>
            <tr className="bg-navy-25">
              {table.columns.map((col) => (
                <th key={col} scope="col" className="px-5 py-3.5 font-display text-[13px] font-extrabold tracking-[0.4px] text-navy-800 uppercase">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-line">
            {table.rows.map((row) => (
              <tr key={row[0]} className="align-top">
                {row.map((cell, i) =>
                  i === 0 ? (
                    <th key={i} scope="row" className="px-5 py-3.5 font-semibold text-ink">
                      {cell}
                    </th>
                  ) : (
                    <td key={i} className="px-5 py-3.5 leading-[1.6] text-body">
                      {cell}
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {table.note && <figcaption className="mt-3 text-[13px] leading-relaxed text-muted">{table.note}</figcaption>}
    </figure>
  );
}

/* ------------------------------------------------------------------------ */

const calloutTones = {
  info: { icon: Info, box: "border-navy-200 bg-navy-25", iconCls: "text-navy-800" },
  tip: { icon: Lightbulb, box: "border-brand-200 bg-brand-50", iconCls: "text-brand-600" },
  warning: { icon: AlertTriangle, box: "border-warn-500/40 bg-warn-500/8", iconCls: "text-warn-800" },
} as const;

export function Callout({ tone = "info", title, children }: { tone?: keyof typeof calloutTones; title: string; children: ReactNode }) {
  const { icon: Icon, box, iconCls } = calloutTones[tone];
  return (
    <aside className={cn("flex gap-4 rounded-[20px] border p-5.5", box)}>
      <Icon aria-hidden="true" className={cn("mt-0.5 size-5.5 shrink-0", iconCls)} />
      <div className="text-[15px] leading-[1.65] text-body [&_a]:font-semibold [&_a]:text-navy-800 [&_a]:underline [&_a]:underline-offset-2">
        <p className="mb-1 font-display font-extrabold text-ink">{title}</p>
        {children}
      </div>
    </aside>
  );
}

/* ------------------------------------------------------------------------ */

/** Photo beside text. */
export function MediaSplit({ image, children, reverse = false }: { image: ImageBrief; children: ReactNode; reverse?: boolean }) {
  return (
    <div className={cn("flex flex-col items-center gap-8 md:flex-row", reverse && "md:flex-row-reverse")}>
      <ImageSlot
        image={image}
        sizes="(min-width: 1024px) 400px, 100vw"
        className="flex aspect-3/2 w-full shrink-0 items-end rounded-3xl p-3.5 md:w-[46%]"
      />
      <div className="min-w-0 flex-1">{children}</div>
    </div>
  );
}

export function ImageGallery({ images }: { images: { image: ImageBrief; caption: string }[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {images.map(({ image, caption }) => (
        <figure key={image.id}>
          <ImageSlot image={image} compact sizes="(min-width: 1024px) 400px, 100vw" className="flex aspect-3/2 items-end rounded-[20px] p-3" />
          <figcaption className="mt-2.5 text-sm leading-relaxed text-body">{caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function FaqAccordion({ items, name = "faq" }: { items: { question: string; answer: string }[]; name?: string }) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((faq, i) => (
        <details
          key={faq.question}
          name={name}
          open={i === 0}
          className="group overflow-hidden rounded-2xl border border-line bg-white transition-colors open:border-navy-300"
        >
          <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 font-display text-[17px] font-bold text-ink">
            <h3>{faq.question}</h3>
            <span
              aria-hidden="true"
              className="inline-flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-50 text-xl leading-none text-navy-800 transition-colors group-open:bg-brand-600 group-open:text-white"
            >
              <span className="group-open:hidden">+</span>
              <span className="hidden group-open:inline">−</span>
            </span>
          </summary>
          <p className="max-w-170 px-6 pb-6 text-[15px] leading-[1.75] text-body">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------------ */

export function RelatedLinks({ title = "Keep reading", links }: { title?: string; links: RelatedLink[] }) {
  return (
    <nav aria-label={title}>
      <h2 className="mb-5 font-display text-2xl font-extrabold tracking-[-0.4px] text-ink">{title}</h2>
      <ul className="grid gap-4 md:grid-cols-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="lift group flex h-full flex-col gap-2 rounded-[20px] border border-line bg-white p-6">
              <span className="font-display text-lg font-extrabold text-ink">{link.label}</span>
              <span className="flex-1 text-sm leading-[1.6] text-body">{link.description}</span>
              <span className="font-display text-sm font-bold text-navy-800">
                Read more <Arrow />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** External, authoritative references (helps trust and E-E-A-T). */
export function References({ links }: { links: NavLink[] }) {
  return (
    <section aria-labelledby="references-title" className="rounded-[20px] border border-line bg-white p-6">
      <h2 id="references-title" className="mb-3 font-display text-lg font-extrabold text-ink">
        Official sources
      </h2>
      <ul className="flex flex-col gap-2 text-sm">
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-navy-800 underline underline-offset-2 hover:text-brand-600">
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
