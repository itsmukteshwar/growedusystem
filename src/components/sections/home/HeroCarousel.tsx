"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const INTERVAL_MS = 7000;

interface HeroCarouselProps {
  /** Fully rendered slides (rendered on the server, so all text is in the HTML). */
  slides: ReactNode[];
  labels: string[];
}

export function HeroCarousel({ slides, labels }: HeroCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const count = slides.length;
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = useCallback((i: number) => setActive(((i % count) + count) % count), [count]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const id = window.setTimeout(() => go(active + 1), INTERVAL_MS);
    return () => window.clearTimeout(id);
  }, [active, paused, reducedMotion, go]);

  const onTabKey = (e: React.KeyboardEvent, i: number) => {
    const next = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : null;
    if (next === null) return;
    e.preventDefault();
    const target = ((next % count) + count) % count;
    go(target);
    tabRefs.current[target]?.focus();
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="min-h-130">
        {slides.map((slide, i) => (
          <div
            key={labels[i]}
            id={`hero-slide-${i}`}
            role="tabpanel"
            aria-roledescription="slide"
            aria-label={`Slide ${i + 1} of ${count}: ${labels[i]}`}
            hidden={i !== active}
            className={cn(i === active && "animate-slide-in")}
          >
            {slide}
          </div>
        ))}
      </div>

      <div className="mt-14 flex flex-wrap items-center gap-5">
        <div role="tablist" aria-label="Choose slide" className="grid flex-[1_1_520px] grid-cols-3 gap-4">
          {labels.map((label, i) => {
            const isActive = i === active;
            return (
              <button
                key={label}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`hero-slide-${i}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => go(i)}
                onKeyDown={(e) => onTabKey(e, i)}
                className="group min-h-11 cursor-pointer pt-3 text-left text-white"
              >
                <span className="mb-3 block h-0.75 overflow-hidden rounded-full bg-white/16">
                  {isActive && (
                    <span
                      key={`${active}-${paused}`}
                      className={cn(
                        "block h-full rounded-full bg-brand-400",
                        reducedMotion ? "w-full" : "animate-bar-run",
                        paused && "[animation-play-state:paused]",
                      )}
                    />
                  )}
                </span>
                <span className="flex items-baseline gap-2.5 font-display">
                  <span className={cn("text-[13px] font-extrabold", isActive ? "text-brand-400" : "text-white/45")}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={cn(
                      "text-[15px] font-bold transition-colors group-hover:text-white",
                      isActive ? "text-white" : "text-white/62",
                    )}
                  >
                    {label}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="flex gap-2.5">
          <CarouselButton label="Previous slide" onClick={() => go(active - 1)}>
            <ArrowLeft className="size-4.5" strokeWidth={2.2} />
          </CarouselButton>
          <CarouselButton label="Next slide" onClick={() => go(active + 1)}>
            <ArrowRight className="size-4.5" strokeWidth={2.2} />
          </CarouselButton>
        </div>
      </div>
    </div>
  );
}

function CarouselButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-12 cursor-pointer items-center justify-center rounded-full border border-white/22 bg-white/6 text-white transition-colors hover:border-white/50 hover:bg-white/14"
    >
      {children}
    </button>
  );
}
