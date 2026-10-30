import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeader";
import { platforms, platformsIntro } from "@/data/home";
import { cn } from "@/lib/utils";

export function Platforms() {
  return (
    <Section tone="white">
      <Container className="flex flex-wrap items-center gap-12">
        <div className="min-w-0 flex-[1_1_420px]">
          <Eyebrow>{platformsIntro.eyebrow}</Eyebrow>
          <SectionTitle className="mb-4">{platformsIntro.title}</SectionTitle>
          <p className="mb-7 text-base leading-[1.7] text-body">{platformsIntro.description}</p>
          <ul className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
            {platforms.map(({ name, href, icon: Icon, tone }) => (
              <li key={name}>
                <Link href={href} className="lift flex items-center gap-3 rounded-[14px] border border-line p-3.5">
                  <span
                    className={cn(
                      "inline-flex size-9.5 shrink-0 items-center justify-center rounded-[10px]",
                      tone === "navy" ? "bg-navy-800" : "bg-brand-600",
                    )}
                  >
                    <Icon aria-hidden="true" className="size-4.5 text-white" />
                  </span>
                  <span className="font-display text-sm font-extrabold text-ink">{name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="min-w-0 flex-[1_1_560px] overflow-hidden rounded-[28px] bg-navy-950 px-7 pt-7">
          <div aria-hidden="true" className="mb-3.5 flex gap-1.5">
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
            <span className="size-2.5 rounded-full bg-white/25" />
          </div>
          <ImageSlot
            image={platformsIntro.screenshot}
            className="flex aspect-16/10 items-end rounded-t-[14px] p-4.5"
          />
        </div>
      </Container>
    </Section>
  );
}
