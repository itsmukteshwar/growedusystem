import { Award, BookOpen, Building2, ChevronRight, Globe, Target, Users } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeader";
import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "About Grow Edu System — India's End-to-End School Consultants",
  description:
    "Learn how Grow Edu System has helped promoters establish and grow K-12 schools across India since 2012 — from feasibility studies to affiliation, hiring, ERP and admissions growth.",
  alternates: { canonical: routes.about },
  openGraph: {
    title: `About ${siteConfig.name}`,
    url: routes.about,
  },
};

const milestones = [
  { year: "2012", title: "Founded in Bhopal", body: "Started as a boutique school-setup consultancy to fill the gap between a promoter's vision and the regulatory maze of starting a school in India." },
  { year: "2015", title: "First CBSE affiliation secured", body: "Guided our first school partner through the full CBSE affiliation cycle — from NOC to inspection — in record time." },
  { year: "2018", title: "Technology platforms launched", body: "Built proprietary platforms for teacher recruitment, school ERP, real estate and supplies marketplace to extend our reach to schools we couldn't serve in person." },
  { year: "2021", title: "Multi-board expertise", body: "Expanded credentials to cover ICSE, IB and Cambridge IGCSE affiliations, making us one of very few consultancies in India capable of advising across all major boards." },
  { year: "2024", title: "100+ school partners", body: "Crossed the milestone of 100 school establishments and improvement projects across 18 states, with a repeat-engagement rate above 70 %." },
];

const values = [
  {
    icon: Target,
    title: "Ownership over advice",
    body: "We don't hand you a report and walk away. We stay involved through every stage — from land selection to the first-day bell.",
  },
  {
    icon: BookOpen,
    title: "Research-led practice",
    body: "Every engagement begins with rigorous on-ground research. Our DPRs and feasibility studies are built on real data, not templates.",
  },
  {
    icon: Globe,
    title: "Multi-board depth",
    body: "We have in-house expertise across CBSE, ICSE, IB, Cambridge IGCSE and State Boards — rare in India's consulting landscape.",
  },
  {
    icon: Users,
    title: "Long-term partnerships",
    body: "Over 70 % of our clients engage us for management or improvement services after their school is established. We earn trust, not just fees.",
  },
  {
    icon: Building2,
    title: "End-to-end capability",
    body: "Land sourcing, trust registration, architecture, staffing, ERP, admissions — we cover the entire spectrum so you never have to co-ordinate multiple vendors.",
  },
  {
    icon: Award,
    title: "Innovation every year",
    body: "We launch at least one new platform or service annually, keeping our partners ahead of the curve in a rapidly changing education landscape.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "About", path: routes.about },
          ]),
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 bg-dots px-6 pt-10 pb-24">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 size-160 rounded-full bg-[radial-gradient(circle,rgb(58_176_75/0.22)_0%,transparent_65%)]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-1.5 text-[13px] text-white/60">
              <li><Link href={routes.home} className="hover:text-white">Home</Link></li>
              <li aria-hidden="true"><ChevronRight className="size-3.5" /></li>
              <li aria-current="page" className="text-white/88">About</li>
            </ol>
          </nav>
          <div className="max-w-175">
            <Eyebrow className="mb-6 text-brand-400">Our story</Eyebrow>
            <h1 className="mb-6 text-[clamp(36px,4.6vw,60px)] leading-[1.05] font-extrabold tracking-[-1.5px] text-white">
              India’s end-to-end school consultants
            </h1>
            <p className="max-w-140 text-lg leading-[1.75] text-white/74">
              Grow Edu System was founded with a single conviction: that a school promoter with a genuine commitment to quality education should never be stopped by paperwork, process or lack of expertise. We exist to remove every barrier between a vision and a school that works.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission strip */}
      <section className="border-b border-line bg-white px-6 py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow className="mb-4">Why we exist</Eyebrow>
              <h2 className="mb-5 text-[clamp(26px,3vw,38px)] font-extrabold leading-[1.15] tracking-[-0.8px] text-ink">
                We believe every child in India deserves a well-run school
              </h2>
              <p className="text-[15px] leading-[1.75] text-body">
                India needs thousands of new, quality schools to serve its growing school-age population. Most promoters — trustees, entrepreneurs, NRIs, educators — have the resources and the intent, but not the specialist knowledge to navigate affiliations, infrastructure norms, staffing requirements and management systems all at once.
              </p>
              <p className="mt-4 text-[15px] leading-[1.75] text-body">
                Grow Edu System bridges that gap. Our in-house team covers every dimension of school establishment and management, so our partners can focus on their mission instead of the machinery.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "100+", label: "Schools established" },
                { value: "18", label: "States served" },
                { value: "12+", label: "Years of practice" },
                { value: "70%+", label: "Repeat engagement rate" },
              ].map(({ value, label }) => (
                <div key={label} className="rounded-2xl border border-line bg-canvas p-6">
                  <p className="font-display text-[42px] font-extrabold leading-none tracking-[-1.5px] text-navy-800">{value}</p>
                  <p className="mt-2 text-sm text-muted">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Our story / timeline */}
      <section className="px-6 py-20">
        <Container>
          <div className="mx-auto mb-14 max-w-155 text-center">
            <Eyebrow>Our journey</Eyebrow>
            <SectionTitle>Over a decade of building schools</SectionTitle>
          </div>
          <ol className="relative border-l border-line pl-8 md:pl-12">
            {milestones.map((m, i) => (
              <li key={m.year} className={`relative pb-10 ${i === milestones.length - 1 ? "" : ""}`}>
                <span className="absolute -left-[41px] flex size-6 items-center justify-center rounded-full border-2 border-brand-500 bg-white md:-left-[49px]" aria-hidden="true" />
                <p className="mb-1 font-display text-sm font-bold text-brand-600">{m.year}</p>
                <h3 className="mb-2 text-[19px] font-extrabold text-ink">{m.title}</h3>
                <p className="text-[15px] leading-[1.7] text-body">{m.body}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Values */}
      <section className="border-y border-line bg-white px-6 py-20">
        <Container>
          <div className="mx-auto mb-14 max-w-155 text-center">
            <Eyebrow>What drives us</Eyebrow>
            <SectionTitle>The principles behind every engagement</SectionTitle>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-[20px] border border-line bg-canvas p-7">
                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mb-2.5 text-[18px] font-extrabold text-ink">{title}</h3>
                <p className="text-[15px] leading-[1.7] text-body">{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <Container>
          <div className="rounded-3xl bg-navy-950 bg-dots px-8 py-14 text-center">
            <h2 className="mb-4 text-[clamp(26px,3.5vw,42px)] font-extrabold tracking-[-1px] text-white">
              Ready to start your school journey?
            </h2>
            <p className="mx-auto mb-8 max-w-120 text-[15px] leading-[1.75] text-white/70">
              Book a free 30-minute consultation with our team. We’ll help you understand the path ahead — with no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ButtonLink href={routes.consultation} withArrow className="bg-brand-600 hover:bg-brand-700 px-7 py-4 text-base">
                Book a free consultation
              </ButtonLink>
              <ButtonLink href={routes.careers} variant="outline-light" className="px-7 py-4 text-base">
                Join our team
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
