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
  ImageGallery,
  MediaSplit,
  Prose,
  References,
  RelatedLinks,
  Timeline,
} from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import * as page from "@/data/services/cbse";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function CbseSetupPage() {
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: "CBSE school setup and affiliation consultancy" }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} updated={page.meta.updated} />

      <ArticleLayout toc={page.toc}>
        <ContentSection id="why-cbse" eyebrow="Overview" title="Why choose CBSE for your new school?">
          <Prose>
            {page.whyCbse.paragraphs.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </Prose>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[20px] border border-brand-200 bg-brand-50 p-6">
              <h3 className="mb-4 font-display text-lg font-extrabold text-ink">Advantages</h3>
              <ul className="flex flex-col gap-2.5">
                {page.whyCbse.pros.map((item) => (
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
                {page.whyCbse.considerations.map((item) => (
                  <li key={item} className="flex gap-2.5 text-[15px] text-body">
                    <Minus aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-warn-800" strokeWidth={3} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ContentSection>

        <ContentSection id="eligibility" eyebrow="Eligibility" title="Who can open a CBSE school?" intro={<p>Before CBSE looks at your application, four foundations must be in place.</p>}>
          <IconGrid items={page.eligibility} />
        </ContentSection>

        <ContentSection
          id="land"
          eyebrow="Land"
          title="CBSE land requirements in 2026"
          intro={
            <p>
              CBSE replaced its land rules in January 2026. The minimum plot now depends on where the school is and the highest class it
              will teach. Check this <strong>before</strong> you buy or lease land.
            </p>
          }
        >
          <DataTable table={page.landTable} />
          <div className="mt-6 rounded-[20px] border border-line bg-white p-6">
            <h3 className="mb-4 font-display text-lg font-extrabold text-ink">Play area rules</h3>
            <Checklist items={page.playArea} columns={1} />
          </div>
          <div className="mt-6">
            <Callout tone="warning" title="Norms change — verify before you buy">
              <p>
                CBSE updates its bye-laws regularly; the land clauses were last amended on 19 January 2026. Confirm the current text on
                CBSE&apos;s SARAS portal before any land transaction — or ask us for a free land check against the latest rules.
              </p>
            </Callout>
          </div>
        </ContentSection>

        <ContentSection id="infrastructure" eyebrow="Building" title="Infrastructure requirements for a CBSE school" intro={<p>{page.infrastructure.intro}</p>}>
          <DataTable table={page.infrastructure.facilities} />
          <div className="mt-8 rounded-[20px] border border-line bg-white p-6">
            <h3 className="mb-4 font-display text-lg font-extrabold text-ink">Every campus also needs</h3>
            <Checklist items={page.infrastructure.essentials} />
          </div>
          <div className="mt-8">
            <ImageGallery images={page.infrastructure.gallery} />
          </div>
        </ContentSection>

        <ContentSection id="staff" eyebrow="People" title="Staff and academic requirements">
          <MediaSplit image={page.staffImage}>
            <Checklist items={page.staff} columns={1} />
          </MediaSplit>
        </ContentSection>

        <ContentSection
          id="process"
          eyebrow="Step by step"
          title="The CBSE affiliation process, step by step"
          intro={<p>From registering your trust to the first day of classes — in the order that avoids costly rework.</p>}
        >
          <Timeline steps={page.process} />
        </ContentSection>

        <ContentSection
          id="documents"
          eyebrow="Paperwork"
          title="Documents required for CBSE affiliation"
          intro={<p>The exact list depends on your application type; the checklist on SARAS is the final word. Plan for these as a minimum.</p>}
        >
          <Checklist items={page.documents} />
        </ContentSection>

        <ContentSection id="timeline" eyebrow="Timeline" title="How long does it take to start a CBSE school?">
          <DataTable table={page.timeline} />
        </ContentSection>

        <ContentSection id="delays" eyebrow="Avoid these" title="Common reasons CBSE applications get delayed">
          <ul className="grid gap-4 sm:grid-cols-2">
            {page.delays.map((d) => (
              <li key={d.title} className="rounded-[20px] border border-line bg-white p-5.5">
                <h3 className="mb-1.5 font-display text-[17px] font-extrabold text-ink">{d.title}</h3>
                <p className="text-[15px] leading-[1.6] text-body">{d.description}</p>
              </li>
            ))}
          </ul>
        </ContentSection>

        <ContentSection
          id="how-we-help"
          eyebrow="Our service"
          title="How Grow Edu System helps you open a CBSE school"
          intro={<p>Use this guide to plan — or hand the whole process to a CBSE specialist team that has taken schools through it before.</p>}
        >
          <MediaSplit image={page.helpImage} reverse>
            <Prose>
              <p>
                Most delays come from small gaps found late: a lease clause, a certificate from the wrong authority, a playground a few
                metres short. Our job is to find those gaps months before the inspection committee does.
              </p>
            </Prose>
          </MediaSplit>
          <div className="mt-8">
            <IconGrid items={page.help} columns={3} />
          </div>
        </ContentSection>

        <ContentSection id="faq" eyebrow="FAQ" title="Starting a CBSE school: common questions">
          <FaqAccordion items={page.faqs} />
        </ContentSection>

        <References links={page.references} />
        <RelatedLinks links={page.related} />
      </ArticleLayout>

      <FinalCta data={page.cta} />
    </>
  );
}
