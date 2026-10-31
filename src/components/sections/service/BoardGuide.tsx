import { Check, Minus } from "lucide-react";

import { FinalCta } from "@/components/sections/home/FinalCta";
import { ArticleLayout } from "@/components/sections/service/ArticleLayout";
import {
  Callout,
  Checklist,
  ContentSection,
  DataTable,
  FaqAccordion,
  IconGrid,
  MediaSplit,
  Prose,
  References,
  RelatedLinks,
  Timeline,
} from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";
import type { Faq, ImageBrief, NavLink } from "@/types";
import type { IconItem, PageHeroData, PageMeta, RelatedLink, TableData, TimelineStep } from "@/types/service";

/**
 * Shared layout for the board-specific "Start a school" guides (ICSE, IB, Cambridge, State Board).
 * Each guide supplies its content as a data module in src/data/services/; this component keeps the
 * section order, headings and structured data consistent across boards.
 */
export interface BoardGuideData {
  serviceName: string;
  meta: PageMeta;
  hero: PageHeroData;
  toc: { id: string; label: string }[];
  titles: {
    why: string;
    eligibility: string;
    requirements: string;
    infrastructure: string;
    staff: string;
    process: string;
    documents: string;
    timeline: string;
    delays: string;
    help: string;
    faq: string;
  };
  why: { paragraphs: string[]; pros: string[]; considerations: string[] };
  eligibility: { intro: string; items: IconItem[] };
  requirements: { intro: string; table: TableData; callout?: { title: string; body: string } };
  infrastructure: { intro: string; essentials: string[] };
  staff: string[];
  staffImage: ImageBrief;
  process: { intro: string; steps: TimelineStep[] };
  documents: { intro: string; items: string[] };
  timeline: TableData;
  delays: { title: string; description: string }[];
  help: { intro: string; body: string; items: IconItem[] };
  helpImage: ImageBrief;
  faqs: Faq[];
  references: NavLink[];
  related: RelatedLink[];
  cta: { title: string; description: string; cta: NavLink; reassurance: string; image: ImageBrief };
}

export function BoardGuide({ page }: { page: BoardGuideData }) {
  const t = page.titles;
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: page.serviceName }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} updated={page.meta.updated} />

      <ArticleLayout toc={page.toc}>
        <ContentSection id="why" eyebrow="Overview" title={t.why}>
          <Prose>
            {page.why.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-brand-200 bg-brand-50 p-6">
              <h3 className="mb-4 font-display text-lg font-extrabold text-ink">Advantages</h3>
              <ul className="flex flex-col gap-2.5">
                {page.why.pros.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-body">
                    <Check aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-line bg-white p-6">
              <h3 className="mb-4 font-display text-lg font-extrabold text-ink">Things to plan for</h3>
              <ul className="flex flex-col gap-2.5">
                {page.why.considerations.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-body">
                    <Minus aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-warn-800" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="eligibility" eyebrow="Eligibility" title={t.eligibility} intro={<p>{page.eligibility.intro}</p>}>
          <IconGrid items={page.eligibility.items} />
        </ContentSection>

        <ContentSection id="requirements" eyebrow="Norms" title={t.requirements} intro={<p>{page.requirements.intro}</p>}>
          <DataTable table={page.requirements.table} />
          {page.requirements.callout && (
            <div className="mt-6">
              <Callout tone="warning" title={page.requirements.callout.title}>
                <p>{page.requirements.callout.body}</p>
              </Callout>
            </div>
          )}
        </ContentSection>

        <ContentSection id="infrastructure" eyebrow="Building" title={t.infrastructure} intro={<p>{page.infrastructure.intro}</p>}>
          <div className="rounded-[20px] border border-line bg-white p-6">
            <Checklist items={page.infrastructure.essentials} />
          </div>
        </ContentSection>

        <ContentSection id="staff" eyebrow="People" title={t.staff}>
          <MediaSplit image={page.staffImage}>
            <Checklist items={page.staff} columns={1} />
          </MediaSplit>
        </ContentSection>

        <ContentSection id="process" eyebrow="Step by step" title={t.process} intro={<p>{page.process.intro}</p>}>
          <Timeline steps={page.process.steps} />
        </ContentSection>

        <ContentSection id="documents" eyebrow="Paperwork" title={t.documents} intro={<p>{page.documents.intro}</p>}>
          <Checklist items={page.documents.items} />
        </ContentSection>

        <ContentSection id="timeline" eyebrow="Timeline" title={t.timeline}>
          <DataTable table={page.timeline} />
        </ContentSection>

        <ContentSection id="delays" eyebrow="Avoid these" title={t.delays}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {page.delays.map((d) => (
              <li key={d.title} className="rounded-[20px] border border-line bg-white p-5.5">
                <h3 className="mb-1.5 font-display text-[17px] font-extrabold text-ink">{d.title}</h3>
                <p className="text-[15px] leading-[1.6] text-body">{d.description}</p>
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection id="how-we-help" eyebrow="Our service" title={t.help} intro={<p>{page.help.intro}</p>}>
          <MediaSplit image={page.helpImage} reverse>
            <Prose>
              <p>{page.help.body}</p>
            </Prose>
          </MediaSplit>
          <div className="mt-8">
            <IconGrid items={page.help.items} columns={3} />
          </div>
        </ContentSection>

        <ContentSection id="faq" eyebrow="FAQ" title={t.faq}>
          <FaqAccordion items={page.faqs} />
        </ContentSection>

        <References links={page.references} />
        <RelatedLinks links={page.related} />
      </ArticleLayout>

      <FinalCta data={page.cta} />
    </>
  );
}
