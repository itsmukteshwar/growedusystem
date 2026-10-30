import { Briefcase, ChevronRight, Clock, Heart, MapPin, TrendingUp, Users, Zap } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { JsonLd } from "@/components/seo/JsonLd";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeader";
import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { breadcrumbSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Careers at Grow Edu System — Join India's Leading School Consultants",
  description:
    "Join Grow Edu System and help shape the future of K-12 education in India. We're hiring a Business Development Manager to expand our school consultancy practice.",
  alternates: { canonical: routes.careers },
  openGraph: {
    title: `Careers at ${siteConfig.name}`,
    url: routes.careers,
  },
};

const perks = [
  {
    icon: TrendingUp,
    title: "High-impact work",
    body: "Every project you touch results in a real school that educates real children. The impact is tangible and lasting.",
  },
  {
    icon: Zap,
    title: "Fast growth",
    body: "A lean team means you'll take ownership quickly. We promote from within and invest in your professional development.",
  },
  {
    icon: Users,
    title: "Expert peers",
    body: "Work alongside architects, educators, regulatory specialists, and technologists who are leaders in their domains.",
  },
  {
    icon: Heart,
    title: "Mission-driven culture",
    body: "We're here to improve education in India. That shared purpose makes the work meaningful and the team cohesive.",
  },
];

const APPLY_EMAIL = "itsmukteshwar@gmail.com";

const vacancy = {
  title: "Business Development Manager",
  department: "Growth",
  type: "Full-time",
  location: "Bhopal, MP (Hybrid)",
  about:
    "We are looking for a driven Business Development Manager to identify, approach and convert new school-promoter leads across India. You will own the entire sales cycle — from first outreach to signed engagement — and work closely with our consulting team to ensure new clients are set up for success.",
  responsibilities: [
    "Identify and reach school promoters, trusts, and education entrepreneurs who are planning to establish or expand a school",
    "Qualify inbound leads and manage the pipeline from first contact to signed contract",
    "Conduct discovery calls and presentations to communicate Grow Edu System's value proposition",
    "Attend education conferences, networking events, and partner meets to build a referral network",
    "Coordinate with the consulting team to scope engagements and develop proposals",
    "Maintain accurate CRM records, weekly pipeline reports, and revenue forecasts",
    "Work with marketing to create targeted campaigns for specific geographies and board segments",
  ],
  requirements: [
    "3–7 years of B2B sales or business development experience; education sector experience is a strong plus",
    "Proven track record of managing complex, consultative sales cycles",
    "Excellent communication skills in English and Hindi; additional regional languages are an advantage",
    "Ability to travel 30–40 % of the time within India",
    "Bachelor's degree required; MBA preferred",
    "Self-starter mentality with experience working in a lean, fast-moving team",
  ],
  niceToHave: [
    "Prior exposure to school setup, EdTech, or government education policy",
    "Existing network among education trusts, NGOs, or CBSE/ICSE-affiliated school bodies",
    "Experience with CRM tools (HubSpot, Zoho, or similar)",
  ],
};

export default function CareersPage() {
  const applySubject = encodeURIComponent(`Application — ${vacancy.title}`);
  const applyBody = encodeURIComponent(
    `Hi,\n\nI am writing to apply for the ${vacancy.title} position at Grow Edu System.\n\nPlease find my resume attached.\n\n[Add a brief note about yourself here]\n\nBest regards,\n[Your name]`,
  );
  const applyHref = `mailto:${APPLY_EMAIL}?subject=${applySubject}&body=${applyBody}`;

  return (
    <>
      <JsonLd
        data={graph(
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Careers", path: routes.careers },
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
              <li aria-current="page" className="text-white/88">Careers</li>
            </ol>
          </nav>
          <div className="max-w-175">
            <Eyebrow tone="light" className="mb-6">Join us</Eyebrow>
            <h1 className="mb-6 text-[clamp(36px,4.6vw,60px)] leading-[1.05] font-extrabold tracking-[-1.5px] text-white">
              Build the schools that build India
            </h1>
            <p className="max-w-140 text-lg leading-[1.75] text-white/74">
              At Grow Edu System, every engagement ends with a school that wasn't there before. If you want work that matters — and a team that moves fast and takes ownership — you're in the right place.
            </p>
          </div>
        </Container>
      </section>

      {/* Why join us */}
      <section className="border-b border-line bg-white px-6 py-20">
        <Container>
          <div className="mx-auto mb-14 max-w-155 text-center">
            <Eyebrow>Why Grow Edu</Eyebrow>
            <SectionTitle>Work that leaves a mark</SectionTitle>
          </div>
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map(({ icon: Icon, title, body }) => (
              <li key={title} className="rounded-[20px] border border-line bg-canvas p-7">
                <span className="mb-5 inline-flex size-11 items-center justify-center rounded-xl bg-navy-50 text-navy-800">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mb-2 text-[17px] font-extrabold text-ink">{title}</h3>
                <p className="text-[14px] leading-[1.7] text-body">{body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Open role */}
      <section className="px-6 py-20" id="openings">
        <Container>
          <div className="mx-auto mb-14 max-w-155 text-center">
            <Eyebrow>Open position</Eyebrow>
            <SectionTitle>Current vacancy</SectionTitle>
          </div>

          <article className="mx-auto max-w-220 rounded-[28px] border border-line bg-white shadow-[0_8px_40px_-12px_rgb(13_31_60/0.14)]">
            {/* Role header */}
            <div className="flex flex-col gap-4 border-b border-line px-8 py-8 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1 text-[12px] font-semibold text-brand-700">
                    <Briefcase className="size-3" aria-hidden="true" />
                    {vacancy.department}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-navy-50 px-3 py-1 text-[12px] font-semibold text-navy-700">
                    <Clock className="size-3" aria-hidden="true" />
                    {vacancy.type}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-canvas px-3 py-1 text-[12px] font-semibold text-muted">
                    <MapPin className="size-3" aria-hidden="true" />
                    {vacancy.location}
                  </span>
                </div>
                <h2 className="text-[26px] font-extrabold tracking-[-0.5px] text-ink">{vacancy.title}</h2>
              </div>
              <a
                href={applyHref}
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
              >
                Apply now
              </a>
            </div>

            <div className="space-y-8 px-8 py-8">
              {/* About the role */}
              <div>
                <h3 className="mb-3 text-[17px] font-extrabold text-ink">About the role</h3>
                <p className="text-[15px] leading-[1.75] text-body">{vacancy.about}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="mb-3 text-[17px] font-extrabold text-ink">What you'll do</h3>
                <ul className="space-y-2.5">
                  {vacancy.responsibilities.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] leading-[1.65] text-body">
                      <span className="mt-[6px] size-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="mb-3 text-[17px] font-extrabold text-ink">What we're looking for</h3>
                <ul className="space-y-2.5">
                  {vacancy.requirements.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] leading-[1.65] text-body">
                      <span className="mt-[6px] size-1.5 shrink-0 rounded-full bg-navy-400" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nice to have */}
              <div>
                <h3 className="mb-3 text-[17px] font-extrabold text-ink">Nice to have</h3>
                <ul className="space-y-2.5">
                  {vacancy.niceToHave.map((r) => (
                    <li key={r} className="flex gap-3 text-[15px] leading-[1.65] text-body">
                      <span className="mt-[6px] size-1.5 shrink-0 rounded-full bg-muted/50" aria-hidden="true" />
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Apply CTA */}
              <div className="rounded-2xl border border-line bg-canvas p-6">
                <h3 className="mb-1.5 text-[17px] font-extrabold text-ink">How to apply</h3>
                <p className="mb-4 text-[15px] leading-[1.7] text-body">
                  Send your resume and a brief note about why you're the right fit to{" "}
                  <a href={`mailto:${APPLY_EMAIL}`} className="font-medium text-brand-600 hover:underline">
                    {APPLY_EMAIL}
                  </a>{" "}
                  with the subject line <span className="font-medium text-ink">Application — {vacancy.title}</span>.
                </p>
                <a
                  href={applyHref}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-[15px] font-bold text-white transition hover:bg-brand-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600"
                >
                  Send your application
                </a>
              </div>
            </div>
          </article>
        </Container>
      </section>

      {/* No other openings */}
      <section className="border-t border-line bg-white px-6 py-16">
        <Container>
          <div className="mx-auto max-w-155 text-center">
            <p className="mb-2 text-[17px] font-bold text-ink">Don't see the right role?</p>
            <p className="mb-6 text-[15px] leading-[1.7] text-body">
              We're always interested in meeting talented people who care about education. Send us a speculative application and tell us how you'd contribute.
            </p>
            <a
              href={`mailto:${APPLY_EMAIL}?subject=${encodeURIComponent("Speculative Application — Grow Edu System")}`}
              className="inline-flex items-center gap-2 rounded-full border border-navy-200 bg-canvas px-6 py-3 text-[14px] font-semibold text-ink transition hover:border-navy-400"
            >
              Get in touch
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
