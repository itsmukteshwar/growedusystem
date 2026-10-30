import { ArrowLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { caseStudy } from "@/data/home";
import { cn } from "@/lib/utils";

export function CaseStudy() {
  return (
    <section aria-label="Featured case study" className="px-6 pb-20 md:pb-26">
      <Container as="article" className="flex flex-wrap overflow-hidden rounded-[28px] border border-line bg-white">
        <div className="flex min-w-0 flex-[1_1_520px] flex-col gap-2 p-2">
          <ImageSlot
            image={caseStudy.heroImage}
            className="flex min-h-90 flex-1 flex-col items-start justify-between rounded-[22px] p-4.5"
          >
            <span className="absolute top-4.5 left-4.5 rounded-full bg-navy-800 px-3 py-1.5 text-xs font-bold text-white">
              Featured case study
            </span>
          </ImageSlot>
          <div className="grid grid-cols-3 gap-2">
            {caseStudy.thumbnails.map((img) => (
              <ImageSlot key={img.id} image={img} compact hideIcon sizes="(min-width: 1024px) 15vw, 33vw" className="flex aspect-4/3 items-end rounded-2xl p-2.5" />
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-[1_1_440px] flex-col gap-5 p-8 md:p-12">
          <ul className="flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <li key={tag} className="rounded-md bg-navy-50 px-2.5 py-1.25 text-xs font-bold text-navy-800">
                {tag}
              </li>
            ))}
          </ul>
          <h2 className="text-[clamp(26px,2.8vw,34px)] leading-[1.15] font-extrabold tracking-[-0.6px] text-ink">
            {caseStudy.title}
          </h2>
          <p className="text-base leading-[1.7] text-body">
            <strong className="text-ink">Challenge:</strong> {caseStudy.challenge}
          </p>
          <p className="text-base leading-[1.7] text-body">
            <strong className="text-ink">Outcome:</strong> {caseStudy.outcome}
          </p>
          <dl className="grid grid-cols-3 gap-3">
            {caseStudy.metrics.map((m) => (
              <div key={m.label} className="flex flex-col-reverse rounded-[14px] bg-canvas p-4">
                <dt className="mt-1 text-[13px] text-muted">{m.label}</dt>
                <dd className={cn("font-display text-2xl font-extrabold", m.accent ? "text-brand-600" : "text-navy-800")}>
                  {m.value}
                </dd>
              </div>
            ))}
          </dl>
          <ArrowLink href={caseStudy.cta.href} className="mt-auto">
            {caseStudy.cta.label}
          </ArrowLink>
        </div>
      </Container>
    </section>
  );
}
