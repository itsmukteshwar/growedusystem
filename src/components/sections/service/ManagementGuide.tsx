import { Check, Minus } from "lucide-react";

import { FinalCta, type CtaData } from "@/components/sections/home/FinalCta";
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
 * Shared layout for long-form service pages (School Management and School Improvement sections).
 * Section ids are fixed so the table of contents in each data module stays in sync.
 */
export interface ManagementGuideData {
  serviceName: string;
  meta: PageMeta;
  hero: PageHeroData;
  toc: { id: string; label: string }[];
  /** Optional overrides for the small labels above each section heading. */
  eyebrows?: Partial<Record<"scope" | "models" | "kpis" | "compliance" | "signs", string>>;
  titles: {
    overview: string;
    scope: string;
    specialised: string;
    models: string;
    process: string;
    kpis: string;
    compliance: string;
    signs: string;
    faq: string;
  };
  overview: {
    paragraphs: string[];
    benefits: { title: string; items: string[] };
    fit: { title: string; items: string[] };
  };
  scope: { intro: string; items: IconItem[] };
  specialised: { eyebrow: string; intro: string; image: ImageBrief; items: string[] };
  models: { intro: string; table: TableData };
  process: { intro: string; steps: TimelineStep[] };
  kpis: { intro: string; table: TableData };
  compliance: { intro: string; items: string[]; callout?: { title: string; body: string } };
  signs: { title: string; description: string }[];
  faqs: Faq[];
  references?: NavLink[];
  related: RelatedLink[];
  cta: CtaData;
}

export function ManagementGuide({ page }: { page: ManagementGuideData }) {
  const t = page.titles;
  const e = {
    scope: "What we manage",
    models: "Engagement models",
    kpis: "Accountability",
    compliance: "Compliance",
    signs: "Is it time?",
    ...page.eyebrows,
  };
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
        <ContentSection id="overview" eyebrow="Overview" title={t.overview}>
          <Prose>
            {page.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-brand-200 bg-brand-50 p-6">
              <h3 className="mb-4 font-display text-lg font-extrabold text-ink">{page.overview.benefits.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {page.overview.benefits.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-body">
                    <Check aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-[20px] border border-line bg-white p-6">
              <h3 className="mb-4 font-display text-lg font-extrabold text-ink">{page.overview.fit.title}</h3>
              <ul className="flex flex-col gap-2.5">
                {page.overview.fit.items.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-body">
                    <Minus aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-navy-600" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="scope" eyebrow={e.scope} title={t.scope} intro={<p>{page.scope.intro}</p>}>
          <IconGrid items={page.scope.items} />
        </ContentSection>

        <ContentSection id="specialised" eyebrow={page.specialised.eyebrow} title={t.specialised} intro={<p>{page.specialised.intro}</p>}>
          <MediaSplit image={page.specialised.image}>
            <Checklist items={page.specialised.items} columns={1} />
          </MediaSplit>
        </ContentSection>

        <ContentSection id="models" eyebrow={e.models} title={t.models} intro={<p>{page.models.intro}</p>}>
          <DataTable table={page.models.table} />
        </ContentSection>

        <ContentSection id="process" eyebrow="Step by step" title={t.process} intro={<p>{page.process.intro}</p>}>
          <Timeline steps={page.process.steps} />
        </ContentSection>

        <ContentSection id="kpis" eyebrow={e.kpis} title={t.kpis} intro={<p>{page.kpis.intro}</p>}>
          <DataTable table={page.kpis.table} />
        </ContentSection>

        <ContentSection id="compliance" eyebrow={e.compliance} title={t.compliance} intro={<p>{page.compliance.intro}</p>}>
          <Checklist items={page.compliance.items} />
          {page.compliance.callout && (
            <div className="mt-6">
              <Callout tone="warning" title={page.compliance.callout.title}>
                <p>{page.compliance.callout.body}</p>
              </Callout>
            </div>
          )}
        </ContentSection>

        <ContentSection id="signs" eyebrow={e.signs} title={t.signs}>
          <ul className="grid gap-4 sm:grid-cols-2">
            {page.signs.map((s) => (
              <li key={s.title} className="rounded-[20px] border border-line bg-white p-5.5">
                <h3 className="mb-1.5 font-display text-[17px] font-extrabold text-ink">{s.title}</h3>
                <p className="text-[15px] leading-[1.6] text-body">{s.description}</p>
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection id="faq" eyebrow="FAQ" title={t.faq}>
          <FaqAccordion items={page.faqs} />
        </ContentSection>

        {page.references && <References links={page.references} />}
        <RelatedLinks links={page.related} />
      </ArticleLayout>

      <FinalCta data={page.cta} />
    </>
  );
}
