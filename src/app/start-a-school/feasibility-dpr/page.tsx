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
  RelatedLinks,
  Timeline,
} from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import * as page from "@/data/services/feasibility-dpr";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function FeasibilityDprPage() {
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: "School feasibility study and detailed project report (DPR)" }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} updated={page.meta.updated} />

      <ArticleLayout toc={page.toc}>
        <ContentSection id="why" title={page.why.title}>
          <MediaSplit image={page.why.image}>
            <Prose>
              {page.why.paragraphs.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </Prose>
          </MediaSplit>
          <div className="mt-8 rounded-[20px] border border-line bg-white p-6">
            <h3 className="mb-4 font-display text-lg font-extrabold text-ink">A good feasibility study answers five questions</h3>
            <Checklist items={page.why.questions} columns={1} />
          </div>
        </ContentSection>

        <ContentSection
          id="difference"
          eyebrow="Know the difference"
          title="Feasibility study vs DPR: what's the difference?"
          intro={
            <p>
              They are often mentioned together but do different jobs. The feasibility study decides <strong>whether</strong> and{" "}
              <strong>what</strong> to build. The DPR documents <strong>how</strong> you will build, fund and run it.
            </p>
          }
        >
          <DataTable table={page.comparison} />
        </ContentSection>

        <ContentSection id="who" eyebrow="Who it's for" title="Who needs a school feasibility study?">
          <IconGrid items={page.audiences} />
        </ContentSection>

        <ContentSection
          id="scope"
          eyebrow="Scope"
          title="What our school feasibility study covers"
          intro={<p>Every study is built on on-ground research in your catchment, then checked against the norms of the board you choose.</p>}
        >
          <IconGrid items={page.scope} />
        </ContentSection>

        <ContentSection
          id="dpr-contents"
          eyebrow="The report"
          title="What's inside a detailed project report (DPR) for a school"
          intro={<p>Our DPRs follow the structure banks and investors expect, so reviews are faster and questions are fewer.</p>}
        >
          <MediaSplit image={page.dprImage} reverse>
            <Prose>
              <p>
                A DPR turns the feasibility findings into an executable plan. It is the document your lender, investors, trustees and
                architect will all work from — so it has to be complete, consistent and defensible.
              </p>
              <p>Here is every chapter we include as standard.</p>
            </Prose>
          </MediaSplit>
          <div className="mt-8">
            <DataTable table={page.dprChapters} />
          </div>
        </ContentSection>

        <ContentSection id="financials" eyebrow="Financial model" title="The numbers we model" intro={<p>{page.financials.intro}</p>}>
          <MediaSplit image={page.financials.image}>
            <Callout tone="tip" title="Start with an estimate, then validate it">
              <p>
                Rough budgets are useful for a first conversation, but school costs vary widely by city, land and board. The DPR replaces
                guesswork with a line-by-line project cost and a funding plan you can take to a bank.
              </p>
            </Callout>
          </MediaSplit>
          <div className="mt-8">
            <IconGrid items={page.financials.items} columns={3} />
          </div>
        </ContentSection>

        <ContentSection id="process" eyebrow="How it works" title="Four stages, typically 6–8 weeks">
          <Timeline steps={page.process} />
        </ContentSection>

        <ContentSection id="deliverables" eyebrow="Deliverables" title="What you receive">
          <MediaSplit image={page.deliverables.image} reverse>
            <Checklist items={page.deliverables.items} columns={1} />
          </MediaSplit>
        </ContentSection>

        <ContentSection id="faq" eyebrow="FAQ" title="Feasibility study & DPR: common questions">
          <FaqAccordion items={page.faqs} />
        </ContentSection>

        <RelatedLinks links={page.related} />
      </ArticleLayout>

      <FinalCta data={page.cta} />
    </>
  );
}
