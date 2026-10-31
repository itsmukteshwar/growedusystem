import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/home/FinalCta";
import { FaqAccordion, IconGrid, Timeline } from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import * as page from "@/data/services/school-improvement";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function SchoolImprovementPage() {
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: "School improvement consultancy" }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} />

      <section id="services" className="scroll-mt-24 px-6 py-20">
        <Container>
          <SectionHeader
            eyebrow="Our improvement services"
            title="Three services, one improvement plan"
            description="Use them on their own, or together — each is designed to feed the next."
          />
          <ul className="grid gap-5 lg:grid-cols-3">
            {page.services.map((s) => (
              <li key={s.name}>
                <Link
                  href={s.href}
                  className="lift group flex h-full flex-col rounded-[24px] border-[1.5px] border-line bg-white p-7 hover:border-brand-500!"
                >
                  <h3 className="mb-3 font-display text-2xl font-extrabold tracking-[-0.4px] text-navy-800">{s.name}</h3>
                  <p className="mb-5 text-[15px] leading-[1.7] text-body">{s.description}</p>
                  <ul className="mb-6 flex flex-col gap-2.5">
                    {s.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[15px] text-body">
                        <Check aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-700">
                    {s.cta}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-white px-6 py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <SectionHeader
            eyebrow="The improvement cycle"
            title="Audit, plan, improve, measure — then repeat"
            description="Lasting improvement comes from a cycle, not a one-off fix. Every engagement follows the same evidence-led rhythm."
            className="mb-0 lg:sticky lg:top-28 lg:self-start"
          />
          <Timeline steps={page.cycle} />
        </Container>
      </section>

      <section className="border-t border-line px-6 py-20">
        <Container>
          <SectionHeader
            eyebrow="Outcomes"
            title="What school improvement delivers"
            description="We agree measurable targets at the start, so you can see the return on every rupee and hour invested."
          />
          <IconGrid items={page.outcomes} columns={3} />
        </Container>
      </section>

      <section className="border-t border-line bg-white px-6 py-20">
        <Container className="max-w-200">
          <SectionHeader eyebrow="FAQ" title="School improvement: quick answers" align="center" />
          <FaqAccordion items={page.faqs} />
        </Container>
      </section>

      <FinalCta data={page.cta} />
    </>
  );
}
