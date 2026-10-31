import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/home/FinalCta";
import { ArticleLayout } from "@/components/sections/service/ArticleLayout";
import {
  ContentSection,
  DataTable,
  FaqAccordion,
  IconGrid,
  Prose,
  References,
  RelatedLinks,
} from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import * as page from "@/data/services/compare-boards";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function CompareBoardsPage() {
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: "School board selection consultancy" }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} updated={page.meta.updated} />

      <ArticleLayout toc={page.toc}>
        <ContentSection id="overview" eyebrow="Overview" title="Why your choice of board matters">
          <Prose>
            {page.overview.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Prose>
        </ContentSection>

        <ContentSection id="at-a-glance" eyebrow="Comparison" title="School boards in India at a glance">
          <DataTable table={page.atAGlance} />
        </ContentSection>

        <ContentSection
          id="setup"
          eyebrow="For promoters"
          title="Setup requirements compared"
          intro={<p>What each board asks of a new school — approvals, land, inspection, teachers and time.</p>}
        >
          <DataTable table={page.setupTable} />
        </ContentSection>

        <ContentSection id="fit" eyebrow="Which board fits" title="Which board is right for your school?">
          <ul className="grid gap-4 sm:grid-cols-2">
            {page.boardFit.map((b) => (
              <li key={b.name}>
                <Link
                  href={b.href}
                  className="lift group flex h-full flex-col rounded-[20px] border border-line bg-white p-6"
                >
                  <h3 className="mb-2 font-display text-lg font-extrabold text-ink">{b.name}</h3>
                  <p className="mb-3 text-[15px] leading-[1.6] text-body">{b.summary}</p>
                  <p className="mb-4 text-[15px] leading-[1.6] font-medium text-ink">{b.choose}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-sm font-bold text-brand-600">
                    Read the {b.name} setup guide
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection
          id="factors"
          eyebrow="How to decide"
          title="Six factors that should decide your board"
          intro={<p>We weigh these in every feasibility study before recommending a board.</p>}
        >
          <IconGrid items={page.factors} columns={3} />
        </ContentSection>

        <ContentSection id="faq" eyebrow="FAQ" title="Choosing a school board: common questions">
          <FaqAccordion items={page.faqs} />
        </ContentSection>

        <References links={page.references} />
        <RelatedLinks links={page.related} />
      </ArticleLayout>

      <FinalCta data={page.cta} />
    </>
  );
}
