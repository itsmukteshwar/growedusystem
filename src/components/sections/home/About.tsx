import { Check } from "lucide-react";

import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeader";
import { about } from "@/data/home";

export function About() {
  const [main, second, third] = about.images;

  return (
    <section className="px-6 pt-28 pb-10">
      <Container className="flex flex-wrap items-center gap-16">
        <div className="grid min-w-0 flex-[1_1_520px] grid-cols-2 gap-4">
          <ImageSlot image={main} sizes="(min-width: 1024px) 25vw, 50vw" className="row-span-2 flex min-h-120 items-end rounded-3xl p-4" />
          <ImageSlot image={second} sizes="(min-width: 1024px) 25vw, 50vw" className="flex min-h-58 items-end rounded-3xl p-3.5" />
          <ImageSlot image={third} sizes="(min-width: 1024px) 25vw, 50vw" className="flex min-h-58 items-end rounded-3xl p-3.5" />
        </div>

        <div className="min-w-0 flex-[1_1_440px]">
          <Eyebrow>{about.eyebrow}</Eyebrow>
          <SectionTitle className="mb-4.5">{about.title}</SectionTitle>
          <p className="mb-7 text-[17px] leading-[1.75] text-body">{about.description}</p>
          <ul className="mb-8 flex flex-col gap-4">
            {about.features.map((f) => (
              <li key={f.title} className="flex gap-3.5">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-brand-50">
                  <Check aria-hidden="true" className="size-3.5 text-brand-600" strokeWidth={3} />
                </span>
                <div>
                  <h3 className="font-display text-base font-extrabold text-ink">{f.title}</h3>
                  <p className="mt-0.5 text-[15px] text-body">{f.description}</p>
                </div>
              </li>
            ))}
          </ul>
          <ArrowLink href={about.cta.href}>{about.cta.label}</ArrowLink>
        </div>
      </Container>
    </section>
  );
}
