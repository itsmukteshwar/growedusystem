import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { finalCta } from "@/data/home";
import type { ImageBrief, NavLink } from "@/types";

export interface CtaData {
  title: string;
  description: string;
  cta: NavLink;
  reassurance: string;
  image: ImageBrief;
}

/** Closing call-to-action banner. Pass `data` to reuse it on other pages. */
export function FinalCta({ data = finalCta }: { data?: CtaData }) {
  return (
    <section className="bg-canvas px-6 pb-20 md:pb-26">
      <Container className="relative flex flex-wrap items-stretch overflow-hidden rounded-[32px] bg-navy-800 bg-[radial-gradient(rgb(255_255_255/0.08)_1px,transparent_1px)] bg-size-[24px_24px]">
        <div
          aria-hidden="true"
          className="absolute -top-40 -left-30 size-105 rounded-full bg-[radial-gradient(circle,rgb(58_176_75/0.32),transparent_65%)]"
        />
        <div className="relative min-w-0 flex-[1_1_520px] px-8 py-14 md:px-12 md:py-16">
          <h2 className="mb-4 text-[clamp(30px,4vw,48px)] leading-[1.08] font-extrabold tracking-[-1.2px] text-white">
            {data.title}
          </h2>
          <p className="mb-8 max-w-130 text-[17px] leading-[1.7] text-white/74">{data.description}</p>
          <ButtonLink href={data.cta.href} size="xl" withArrow>
            {data.cta.label}
          </ButtonLink>
          <p className="mt-3.5 text-[13px] text-white/62">{data.reassurance}</p>
        </div>
        <ImageSlot
          image={data.image}
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="flex min-h-95 flex-[1_1_380px] items-end p-4.5"
        />
      </Container>
    </section>
  );
}
