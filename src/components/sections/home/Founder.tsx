import { Quote } from "lucide-react";

import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";
import { Eyebrow } from "@/components/ui/SectionHeader";
import { siteConfig } from "@/config/site";
import { founder } from "@/data/home";

const teamAvatars = ["a", "b", "c", "d"];

export function Founder() {
  return (
    <Section aria-label="A note from our founder">
      <Container className="flex flex-wrap items-center gap-14">
        <ImageSlot
          image={founder.portrait}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="flex aspect-4/5 max-h-140 min-w-0 flex-[1_1_380px] items-end rounded-[28px] p-4.5"
        />

        <figure className="min-w-0 flex-[1_1_520px]">
          <Eyebrow className="mb-4.5">{founder.eyebrow}</Eyebrow>
          <Quote aria-hidden="true" className="mb-3.5 size-11 -scale-x-100 fill-brand-500 text-brand-500" />
          <blockquote className="mb-7 font-display text-[clamp(22px,2.4vw,30px)] leading-[1.4] font-bold tracking-[-0.4px] text-ink">
            {founder.quote}
          </blockquote>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <figcaption>
              <span className="block font-display font-extrabold text-ink">{founder.name}</span>
              <span className="block text-sm text-muted">{founder.role}</span>
            </figcaption>
            <div className="flex items-center gap-3.5">
              <div aria-hidden="true" className="flex">
                {teamAvatars.map((k) => (
                  <span key={k} className="size-11 rounded-full border-3 border-canvas bg-placeholder not-first:-ml-3" />
                ))}
              </div>
              <ArrowLink href={founder.cta.href}>{founder.cta.label}</ArrowLink>
            </div>
          </div>
          {siteConfig.showImageBriefs && <p className="mt-2.5 text-xs text-muted">{founder.teamNote}</p>}
        </figure>
      </Container>
    </Section>
  );
}
