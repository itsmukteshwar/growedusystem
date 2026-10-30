import Link from "next/link";

import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { articles, resourcesIntro } from "@/data/home";

export function Resources() {
  return (
    <Section tone="white">
      <Container>
        <SectionHeader
          eyebrow={resourcesIntro.eyebrow}
          title={resourcesIntro.title}
          aside={<ArrowLink href={resourcesIntro.cta.href}>{resourcesIntro.cta.label}</ArrowLink>}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-5">
          {articles.map((article) => (
            <article key={article.href} className="lift relative flex flex-col overflow-hidden rounded-[22px] border border-line bg-white">
              <ImageSlot image={article.image} compact sizes="(min-width: 1024px) 33vw, 100vw" className="flex aspect-video items-end p-3" />
              <div className="flex flex-col gap-2.5 p-6">
                <p className="text-xs font-bold tracking-[0.8px] text-brand-700 uppercase">
                  {article.category} · {article.readTime}
                </p>
                <h3 className="text-[19px] leading-[1.3] font-extrabold text-ink">
                  <Link href={article.href} className="after:absolute after:inset-0">
                    {article.title}
                  </Link>
                </h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}
