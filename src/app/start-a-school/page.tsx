import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { FinalCta } from "@/components/sections/home/FinalCta";
import { FaqAccordion, Timeline } from "@/components/sections/service/Blocks";
import { PageHero } from "@/components/sections/service/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import * as page from "@/data/services/start-a-school";
import { pageMetadata } from "@/lib/metadata";
import { breadcrumbSchema, faqSchema, graph, servicePageSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

export const metadata = pageMetadata(page.meta, page.hero.image);

export default function StartASchoolPage() {
  return (
    <>
      <JsonLd
        data={graph(
          ...servicePageSchema({ ...page.meta, serviceName: "New school setup consultancy" }),
          breadcrumbSchema(page.hero.breadcrumbs.map((b) => ({ name: b.label, path: b.href }))),
          faqSchema(page.faqs),
        )}
      />

      <PageHero hero={page.hero} />

      <section id="journey" className="scroll-mt-24 px-6 py-20">
        <Container className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          <SectionHeader
            eyebrow="The journey"
            title="Five stages from idea to your first assembly"
            description="Every school project follows the same path. We take responsibility for each stage — or step in wherever you need us."
            className="mb-0 lg:sticky lg:top-28 lg:self-start"
          />
          <Timeline steps={page.journey} />
        </Container>
      </section>

      <section className="border-t border-line bg-white px-6 py-20">
        <Container>
          <SectionHeader eyebrow="Choose your board" title="Board-specific setup guides" />
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {page.boardCards.map((board) => {
              const inner = (
                <>
                  <span className="font-display text-2xl font-extrabold tracking-[-0.4px] text-navy-800">{board.name}</span>
                  <span className="flex-1 text-sm leading-[1.6] text-body">{board.description}</span>
                  {board.live ? (
                    <span className="inline-flex items-center gap-1.5 font-display text-sm font-bold text-brand-700">
                      Read the guide <ArrowRight aria-hidden="true" className="size-4" />
                    </span>
                  ) : (
                    <span className="text-xs font-semibold text-muted">Guide coming soon</span>
                  )}
                </>
              );
              return (
                <li key={board.name}>
                  {board.live ? (
                    <Link href={board.href} className="lift flex h-full flex-col gap-2.5 rounded-[20px] border-[1.5px] border-line bg-white p-6 hover:border-brand-500!">
                      {inner}
                    </Link>
                  ) : (
                    <div className={cn("flex h-full flex-col gap-2.5 rounded-[20px] border-[1.5px] border-dashed border-line bg-canvas p-6")}>{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-t border-line px-6 py-20">
        <Container className="max-w-200">
          <SectionHeader eyebrow="FAQ" title="Starting a school: quick answers" align="center" />
          <FaqAccordion items={page.faqs} />
        </Container>
      </section>

      <FinalCta data={page.cta} />
    </>
  );
}
