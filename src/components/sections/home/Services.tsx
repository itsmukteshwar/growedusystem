import Link from "next/link";

import { Arrow, ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { Section } from "@/components/ui/Section";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { consultantCallout, services, servicesIntro } from "@/data/home";

export function Services() {
  return (
    <Section className="md:py-24">
      <Container>
        <SectionHeader
          eyebrow={servicesIntro.eyebrow}
          title={servicesIntro.title}
          className="mb-12"
          aside={<p className="max-w-95 text-base leading-[1.7] text-body">{servicesIntro.description}</p>}
        />

        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(320px,100%),1fr))] gap-5">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="lift group flex flex-col overflow-hidden rounded-3xl border border-line bg-white"
            >
              <ImageSlot image={service.image} sizes="(min-width: 1024px) 33vw, 100vw" className="flex aspect-16/10 items-end p-3.5">
                {service.badge && (
                  <span className="absolute top-3.5 left-3.5 rounded-full bg-brand-600 px-2.5 py-1.25 text-xs font-bold text-white">
                    {service.badge}
                  </span>
                )}
              </ImageSlot>
              <div className="flex flex-1 flex-col gap-3 p-7">
                <h3 className="text-[22px] font-extrabold tracking-[-0.3px] text-ink">{service.title}</h3>
                <p className="text-[15px] leading-[1.7] text-body">{service.description}</p>
                <span className="mt-auto pt-2 font-display text-[15px] font-bold text-navy-800">
                  {service.cta} <Arrow />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-between gap-5 rounded-3xl border border-brand-200 bg-brand-50 px-7 py-6">
          <div className="flex min-w-0 items-center gap-4">
            <ImageSlot image={consultantCallout.image} hideLabel hideIcon sizes="56px" className="size-14 shrink-0 rounded-full border-3 border-white" />
            <div>
              <p className="font-display text-lg font-extrabold text-ink">{consultantCallout.title}</p>
              <p className="mt-0.75 text-[15px] text-body">{consultantCallout.description}</p>
            </div>
          </div>
          <ButtonLink href={consultantCallout.cta.href} withArrow className="rounded-xl px-5.5 py-3.5 text-[15px]">
            {consultantCallout.cta.label}
          </ButtonLink>
        </div>
      </Container>
    </Section>
  );
}
