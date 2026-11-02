import Link from "next/link";

import { Arrow } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processIntro, processSteps } from "@/data/home";
import { cn } from "@/lib/utils";

export function Process() {
  return (
    <section id="process" className="border-y border-line bg-white px-6 py-20 md:py-26">
      <Container>
        <SectionHeader align="center" {...processIntro} />

        <ol className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 90} as="li" className={cn(
              "lift overflow-hidden rounded-[20px] border",
              step.highlight ? "border-brand-500 bg-mint-100 text-ink shadow-[0_18px_40px_-24px_rgb(37_135_53/0.45)]" : "border-line bg-canvas",
            )}>
              <ImageSlot image={step.image} compact sizes="(min-width: 1024px) 25vw, 100vw" className="flex aspect-16/10 items-end p-3" />
              <div className="p-6">
                <div className="mb-3.5 flex items-center justify-between">
                  <span
                    aria-hidden="true"
                    className={cn("font-display text-[28px] font-extrabold", step.highlight ? "text-brand-500/45" : "text-navy-200")}
                  >
                    {step.number}
                  </span>
                  <span
                    className={cn(
                      "rounded-full px-2.5 py-1.25 text-xs font-bold",
                      step.highlight ? "bg-brand-600 text-white" : "border border-line bg-white text-navy-800",
                    )}
                  >
                    {step.timing}
                  </span>
                </div>
                <h3 className={cn("mb-2 text-[19px] font-extrabold", !step.highlight && "text-ink")}>{step.title}</h3>
                <p className={cn("text-[15px] leading-[1.65]", "text-body")}>
                  {step.description}
                </p>
                {step.href && (
                  <Link
                    href={step.href}
                    className={cn(
                      "group mt-4 inline-flex items-center gap-1.5 font-display text-sm font-bold",
                      step.highlight ? "text-brand-700" : "text-navy-800",
                    )}
                  >
                    Learn more<span className="sr-only">: {step.title}</span> <Arrow />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
