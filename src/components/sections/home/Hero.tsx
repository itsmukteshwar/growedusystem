import { Check } from "lucide-react";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { boardsStrip, heroSlides } from "@/data/home";
import { cn } from "@/lib/utils";
import type { ImageBrief } from "@/types";

import { HeroCarousel } from "./HeroCarousel";

const headingClass =
  "mb-5.5 text-[clamp(36px,4.8vw,60px)] leading-[1.05] font-extrabold tracking-[-1.5px] text-white";

export function Hero() {
  const { start, manage, grow } = heroSlides;

  const slides = [
    <Slide
      key="start"
      slide={start}
      // Only the first slide uses <h1> — one H1 per page is best for SEO.
      heading={
        <h1 className={headingClass}>
          From idea to{" "}
          <span className="relative whitespace-nowrap text-brand-400">
            inauguration
            <svg
              aria-hidden="true"
              viewBox="0 0 300 14"
              preserveAspectRatio="none"
              className="absolute -bottom-2 left-0 h-3 w-full"
            >
              <path d="M2 10 C 70 2, 180 2, 298 8" fill="none" stroke="var(--color-brand-500)" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>{" "}
          — we build schools that last.
        </h1>
      }
      visual={<StartVisual image={start.image} roadmap={start.roadmap} />}
    />,
    <Slide
      key="manage"
      slide={manage}
      heading={
        <h2 className={headingClass}>
          Great schools run on <span className="text-brand-400">great systems.</span> We bring both.
        </h2>
      }
      visual={<ManageVisual image={manage.image} metrics={manage.metrics} />}
    />,
    <Slide
      key="grow"
      slide={grow}
      heading={
        <h2 className={headingClass}>
          Your school has more potential. <span className="text-brand-400">Let&apos;s unlock it.</span>
        </h2>
      }
      visual={<GrowVisual image={grow.image} bars={grow.bars} />}
    />,
  ];

  return (
    <section aria-label="Grow Edu System services" className="relative overflow-hidden bg-navy-950 bg-dots">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 size-160 rounded-full bg-[radial-gradient(circle,rgb(58_176_75/0.22)_0%,transparent_65%)]"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-95 -left-65 size-180 rounded-full bg-[radial-gradient(circle,rgb(77_119_184/0.30)_0%,transparent_65%)]"
      />

      <Container className="relative z-2 px-6 pt-18 pb-10">
        <HeroCarousel slides={slides} labels={[start.tab, manage.tab, grow.tab]} />
      </Container>

      <div className="relative z-2 border-t border-white/8">
        <Container className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4.5 px-6 pt-6.5 pb-16">
          <p className="text-[13px] text-white/60">Affiliation expertise across every major board</p>
          <ul className="flex flex-wrap items-center gap-x-9 gap-y-2.5">
            {boardsStrip.map((board) => (
              <li key={board} className="font-display text-lg font-extrabold tracking-[1px] text-white/78">
                {board}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */

interface SlideData {
  eyebrow: string;
  description: string;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

function Slide({ slide, heading, visual }: { slide: SlideData; heading: ReactNode; visual: ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-14">
      <div className="min-w-0 flex-[1_1_460px]">
        <p className="mb-6.5 inline-flex items-center gap-2.5 rounded-full border border-white/14 bg-white/6 py-1.75 pr-3.5 pl-2">
          <span className="inline-flex size-5.5 items-center justify-center rounded-full bg-brand-400/18">
            <span className="size-2 rounded-full bg-brand-400" />
          </span>
          <span className="text-[13px] font-medium text-white/88">{slide.eyebrow}</span>
        </p>
        {heading}
        <p className="mb-8.5 max-w-130 text-lg leading-[1.7] text-white/74">{slide.description}</p>
        <div className="flex flex-wrap gap-3.5">
          <ButtonLink href={slide.primary.href} size="lg" withArrow>
            {slide.primary.label}
          </ButtonLink>
          <ButtonLink href={slide.secondary.href} size="lg" variant="outline-light" className="font-semibold">
            {slide.secondary.label}
          </ButtonLink>
        </div>
      </div>
      <div className="flex min-w-0 flex-[1_1_460px] flex-col">{visual}</div>
    </div>
  );
}

const floatCard =
  "relative z-2 animate-float rounded-[20px] bg-white p-5.5 shadow-[0_40px_70px_-30px_rgb(0_0_0/0.6)]";

function StartVisual({
  image,
  roadmap,
}: {
  image: ImageBrief;
  roadmap: readonly { label: string; status: "done" | "active" | "todo" }[];
}) {
  return (
    <>
      <ImageSlot
        image={image}
        priority
        className="flex aspect-4/3 w-[86%] items-start justify-end self-end rounded-3xl p-4.5"
        labelClassName="max-w-70"
      />
      <div className={cn(floatCard, "-mt-42.5 w-[min(360px,92%)]")}>
        <div className="mb-3.5 flex items-center justify-between gap-2.5">
          <div>
            <p className="text-[11px] font-bold tracking-[1.1px] text-muted uppercase">Setup roadmap</p>
            <p className="mt-0.75 font-display text-base font-extrabold text-ink">[Your School] · CBSE</p>
          </div>
          <span className="rounded-full bg-brand-50 px-2.25 py-1.25 text-xs font-bold text-brand-700">On track</span>
        </div>
        <div className="mb-3.5 h-1.75 overflow-hidden rounded-full bg-navy-50">
          <div className="h-full w-[72%] bg-linear-to-r from-brand-600 to-brand-400" />
        </div>
        <ul className="flex flex-col gap-2 text-[13px]">
          {roadmap.map((step) => (
            <li
              key={step.label}
              className={cn(
                "flex items-center gap-2.5",
                step.status === "done" && "text-body",
                step.status === "active" && "font-bold text-ink",
                step.status === "todo" && "text-muted",
              )}
            >
              {step.status === "done" && (
                <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-600">
                  <Check aria-hidden="true" className="size-2.75 text-white" strokeWidth={3.5} />
                </span>
              )}
              {step.status === "active" && (
                <span className="inline-flex size-5 items-center justify-center rounded-full border-[2.5px] border-warn-500">
                  <span className="size-1.5 rounded-full bg-warn-500" />
                </span>
              )}
              {step.status === "todo" && <span className="size-5 rounded-full border-2 border-dashed border-navy-200" />}
              {step.label}
              {step.status === "active" && <span className="ml-auto text-[11px] text-warn-800">In progress</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

function ManageVisual({
  image,
  metrics,
}: {
  image: ImageBrief;
  metrics: { label: string; value: number; tone: string }[];
}) {
  return (
    <>
      <ImageSlot image={image} className="flex aspect-4/3 w-[90%] items-start justify-start rounded-3xl p-4.5" labelClassName="max-w-70" />
      <div className={cn(floatCard, "-mt-37.5 w-[min(330px,92%)] self-end")}>
        <div className="mb-4 flex items-center justify-between">
          <p className="font-display text-[15px] font-extrabold text-ink">Today at [Your School]</p>
          <span className="text-[11px] text-muted">ERP view</span>
        </div>
        <div className="flex flex-col gap-3.5">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="mb-1.5 flex justify-between text-[13px] text-body">
                <span>{m.label}</span>
                <span className="font-bold text-ink">[{m.value}]%</span>
              </div>
              <div className="h-1.75 rounded-full bg-navy-50">
                <div className={cn("h-full rounded-full", m.tone)} style={{ width: `${m.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function GrowVisual({ image, bars }: { image: ImageBrief; bars: { y: number; h: number; fill: string }[] }) {
  return (
    <>
      <ImageSlot
        image={image}
        className="flex aspect-4/3 w-[86%] items-start justify-end self-end rounded-3xl p-4.5"
        labelClassName="max-w-70"
      />
      <div className={cn(floatCard, "-mt-40 w-[min(330px,92%)]")}>
        <div className="mb-1 flex items-baseline justify-between">
          <p className="font-display text-[15px] font-extrabold text-ink">Admission enquiries</p>
          <span className="rounded-full bg-brand-50 px-2 py-1 text-xs font-bold text-brand-700">+[XX]%</span>
        </div>
        <p className="mb-3.5 text-xs text-muted">Illustrative — 6 months after a growth plan</p>
        <svg viewBox="0 0 280 110" className="h-27.5 w-full" role="img" aria-label="Bar chart: enquiries rising month on month">
          <line x1="0" y1="108" x2="280" y2="108" stroke="var(--color-line)" strokeWidth="2" />
          {bars.map((b, i) => (
            <rect key={i} x={6 + i * 47} y={b.y} width="32" height={b.h} rx="6" fill={b.fill} />
          ))}
        </svg>
      </div>
    </>
  );
}
