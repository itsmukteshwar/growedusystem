import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/home/FinalCta";
import { DataTable, FaqAccordion, IconGrid, Timeline } from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import * as page from "@/data/services/school-management";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function SchoolManagementPage() {
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: "School management services" }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} />

      <section id="models" className="scroll-mt-24 px-6 py-20">
        <Container>
          <SectionHeader
            eyebrow="Two school models"
            title="Day school or boarding school management"
            description="Every school shares the same foundations. Residential schools add a 24-hour layer of care — so we manage each with a dedicated approach."
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {page.schoolModels.map((m) => (
              <li key={m.name}>
                <Link
                  href={m.href}
                  className="lift group flex h-full flex-col rounded-[24px] border-[1.5px] border-line bg-white p-8 hover:border-brand-500!"
                >
                  <h3 className="mb-3 font-display text-2xl font-extrabold tracking-[-0.4px] text-navy-800">{m.name}</h3>
                  <p className="mb-5 text-[15px] leading-[1.7] text-body">{m.description}</p>
                  <ul className="mb-6 flex flex-col gap-2.5">
                    {m.points.map((p) => (
                      <li key={p} className="flex gap-2.5 text-[15px] text-body">
                        <Check aria-hidden="true" className="mt-0.5 size-4.5 shrink-0 text-brand-600" strokeWidth={3} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-700">
                    {m.cta}
                    <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line bg-white px-6 py-20">
        <Container>
          <SectionHeader
            eyebrow="What we manage"
            title="Eight functions, one accountable team"
            description="Take the full service, or only the functions where your school needs support most."
          />
          <IconGrid items={page.functions} columns={3} />
        </Container>
      </section>

      <section className="border-t border-line px-6 py-20">
        <Container>
          <SectionHeader
            eyebrow="Engagement models"
            title="Choose how involved you want us to be"
            description="From expert advice to full operational responsibility — your trust always keeps ownership and control."
          />
          <DataTable table={page.engagementModels} />
        </Container>
      </section>

      <section className="border-t border-line bg-white px-6 py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <SectionHeader
            eyebrow="How it works"
            title="From diagnosis to a school that runs itself"
            description="Every engagement starts by understanding your school as it is today — then moves to measurable change."
            className="mb-0 lg:sticky lg:top-28 lg:self-start"
          />
          <Timeline steps={page.steps} />
        </Container>
      </section>

      <section className="border-t border-line px-6 py-20">
        <Container className="max-w-200">
          <SectionHeader eyebrow="FAQ" title="School management: quick answers" align="center" />
          <FaqAccordion items={page.faqs} />
        </Container>
      </section>

      <FinalCta data={page.cta} />
    </>
  );
}
