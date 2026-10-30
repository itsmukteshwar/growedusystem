import { Play } from "lucide-react";

import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { testimonials, testimonialsIntro } from "@/data/home";
import type { Testimonial } from "@/types";

export function Testimonials() {
  return (
    <section className="border-t border-line bg-canvas px-6 py-20 md:py-26">
      <Container>
        <SectionHeader align="center" {...testimonialsIntro} />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
          {testimonials.map((t) =>
            t.variant === "video" ? <VideoTestimonial key={t.image.id} t={t} /> : <CardTestimonial key={t.image.id} t={t} />,
          )}
        </div>
      </Container>
    </section>
  );
}

function VideoTestimonial({ t }: { t: Testimonial }) {
  return (
    <figure className="flex flex-col overflow-hidden rounded-3xl bg-navy-950 text-white">
      <ImageSlot image={t.image} sizes="(min-width: 1024px) 33vw, 100vw" className="flex aspect-16/10 items-end justify-between gap-3 p-3.5">
        <span aria-hidden="true" className="relative ml-auto inline-flex size-13 shrink-0 items-center justify-center rounded-full bg-brand-600">
          <Play className="size-5 fill-white text-white" />
        </span>
      </ImageSlot>
      <div className="flex flex-1 flex-col gap-5 p-8">
        <blockquote className="font-display text-[19px] leading-normal font-semibold">&ldquo;{t.quote}&rdquo;</blockquote>
        <figcaption className="mt-auto">
          <span className="block font-bold">{t.name}</span>
          <span className="block text-[13px] text-white/70">{t.role}</span>
        </figcaption>
      </div>
    </figure>
  );
}

function CardTestimonial({ t }: { t: Testimonial }) {
  return (
    <figure className="flex flex-col gap-5.5 rounded-3xl border border-line bg-white p-8">
      <div role="img" aria-label="5 out of 5 stars" className="text-lg tracking-[2px] text-warn-500">
        ★★★★★
      </div>
      <blockquote className="text-base leading-[1.75] text-body">&ldquo;{t.quote}&rdquo;</blockquote>
      <figcaption className="mt-auto flex items-center gap-3.5">
        <ImageSlot image={t.image} hideLabel hideIcon sizes="56px" className="size-14 shrink-0 rounded-full" />
        <span>
          <span className="block font-bold text-ink">{t.name}</span>
          <span className="block text-[13px] text-muted">{t.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}
