import { CalendarCheck, ChevronRight } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ImageSlot } from "@/components/ui/ImageSlot";
import type { PageHeroData } from "@/types/service";

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

/** Navy hero for inner pages: breadcrumb, H1, intro, CTAs, key facts and a photo. */
export function PageHero({ hero, updated }: { hero: PageHeroData; updated?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-brand-200/70 bg-hero-soft px-6 pt-8 pb-16 md:pb-20">
      <div
        aria-hidden="true"
        className="absolute -top-40 -right-40 size-160 rounded-full bg-[radial-gradient(circle,rgb(91_201_106/0.28)_0%,transparent_65%)]"
      />
      <Container className="relative">
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-muted">
            {hero.breadcrumbs.map((crumb, i) => {
              const last = i === hero.breadcrumbs.length - 1;
              return (
                <li key={crumb.href} className="flex items-center gap-1.5">
                  {last ? (
                    <span aria-current="page" className="text-navy-800">
                      {crumb.label}
                    </span>
                  ) : (
                    <>
                      <Link href={crumb.href} className="hover:text-brand-700">
                        {crumb.label}
                      </Link>
                      <ChevronRight aria-hidden="true" className="size-3.5" />
                    </>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>

        <div className="flex flex-wrap items-center gap-12">
          <div className="min-w-0 flex-[1_1_480px]">
            <p className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-white/75 py-1.5 pr-3.5 pl-2 text-[13px] font-medium text-navy-800">
              <span className="inline-flex size-5 items-center justify-center rounded-full bg-brand-50">
                <span className="size-2 rounded-full bg-brand-400" />
              </span>
              {hero.eyebrow}
            </p>
            <h1 className="mb-5 text-[clamp(34px,4.4vw,54px)] leading-[1.06] font-extrabold tracking-[-1.4px] text-ink">
              {hero.title}
            </h1>
            <p className="mb-8 max-w-140 text-lg leading-[1.7] text-body">{hero.description}</p>
            <div className="mb-8 flex flex-wrap gap-3.5">
              <ButtonLink href={hero.primary.href} size="lg" withArrow>
                {hero.primary.label}
              </ButtonLink>
              {hero.secondary && (
                <ButtonLink href={hero.secondary.href} size="lg" variant="outline" className="font-semibold">
                  {hero.secondary.label}
                </ButtonLink>
              )}
            </div>
            {updated && (
              <p className="flex items-center gap-2 text-[13px] text-muted">
                <CalendarCheck aria-hidden="true" className="size-4" />
                Updated <time dateTime={updated}>{formatDate(updated)}</time>
              </p>
            )}
          </div>

          <div className="min-w-0 flex-[1_1_420px]">
            <ImageSlot image={hero.image} priority className="flex aspect-4/3 items-start rounded-3xl p-4" />
            <dl className="relative z-2 mx-4 -mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-line shadow-[0_30px_60px_-30px_rgb(18_48_31/0.25)] sm:grid-cols-4">
              {hero.facts.map((fact) => (
                <div key={fact.label} className="flex flex-col-reverse bg-white px-4 py-3.5">
                  <dt className="mt-0.5 text-xs leading-snug text-muted">{fact.label}</dt>
                  <dd className="font-display text-[17px] leading-tight font-extrabold text-navy-800">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}
