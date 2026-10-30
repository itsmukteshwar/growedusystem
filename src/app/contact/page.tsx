import { ArrowUpRight, ChevronRight, Mail, MapPin, MessageCircle, Navigation, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/sections/contact/ContactForm";
import { OfficeHoursCard, OfficeStatusBadge } from "@/components/sections/contact/OfficeStatus";
import { JsonLd } from "@/components/seo/JsonLd";
import { Arrow } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow, SectionTitle } from "@/components/ui/SectionHeader";
import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { contactIntro, departments, nextSteps, selfServe } from "@/data/contact";
import { breadcrumbSchema, contactPageSchema, graph } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Contact Us — Book a Free School Consultation",
  description:
    "Talk to Grow Edu System's school consultants. Call, WhatsApp or send an enquiry about starting a CBSE, ICSE, IB or Cambridge school, school management or improvement. Reply within one working day.",
  alternates: { canonical: routes.contact },
  openGraph: {
    title: `Contact ${siteConfig.name} — Book a Free School Consultation`,
    url: routes.contact,
  },
};

export default function ContactPage() {
  const { phoneDisplay, phoneHref, whatsappHref, email } = siteConfig.contact;
  const { address } = siteConfig;
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.mapsQuery)}`;

  const channels = [
    {
      icon: Phone,
      label: "Call us",
      value: phoneDisplay,
      note: "Mon–Sat, during office hours",
      href: phoneHref || undefined,
      tone: "bg-navy-50 text-navy-800",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with a consultant",
      note: "Usually replies within 2 hours",
      href: whatsappHref || undefined,
      external: true,
      tone: "bg-brand-50 text-brand-600",
    },
    {
      icon: Mail,
      label: "Email",
      value: email,
      note: "Replies within one working day",
      href: `mailto:${email}`,
      tone: "bg-navy-50 text-navy-800",
    },
  ];

  return (
    <>
      <JsonLd
        data={graph(
          contactPageSchema(),
          breadcrumbSchema([
            { name: "Home", path: routes.home },
            { name: "Contact", path: routes.contact },
          ]),
        )}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 bg-dots px-6 pt-10 pb-36">
        <div
          aria-hidden="true"
          className="absolute -top-40 -right-40 size-160 rounded-full bg-[radial-gradient(circle,rgb(58_176_75/0.22)_0%,transparent_65%)]"
        />
        <Container className="relative">
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-1.5 text-[13px] text-white/60">
              <li>
                <Link href={routes.home} className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">
                <ChevronRight className="size-3.5" />
              </li>
              <li aria-current="page" className="text-white/88">
                Contact
              </li>
            </ol>
          </nav>
          <div className="max-w-170">
            <OfficeStatusBadge tone="dark" className="mb-6" />
            <h1 className="mb-5 text-[clamp(36px,4.6vw,56px)] leading-[1.05] font-extrabold tracking-[-1.5px] text-white">
              {contactIntro.title}
            </h1>
            <p className="text-lg leading-[1.7] text-white/74">{contactIntro.description}</p>
          </div>
        </Container>
      </section>

      {/* Form + sidebar */}
      <section className="px-6 pb-20">
        <Container className="relative -mt-24 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_380px]">
          <div className="rounded-[28px] border border-line bg-white p-6 shadow-[0_30px_60px_-34px_rgb(13_31_60/0.35)] sm:p-10">
            <div className="mb-8">
              <h2 className="mb-2 text-[26px] font-extrabold tracking-[-0.5px] text-ink">Send us an enquiry</h2>
              <p className="text-[15px] leading-relaxed text-body">
                Takes about 2 minutes. Fields marked <span className="text-red-600">*</span> are required.
              </p>
            </div>
            <ContactForm />
          </div>

          <aside aria-label="Other ways to reach us" className="flex flex-col gap-6 lg:sticky lg:top-24">
            <section aria-labelledby="channels-title" className="rounded-3xl border border-line bg-white p-6">
              <h2 id="channels-title" className="mb-4 font-display text-lg font-extrabold text-ink">
                Prefer to talk now?
              </h2>
              <ul className="flex flex-col gap-2">
                {channels.map(({ icon: Icon, label, value, note, href, external, tone }) => {
                  const inner = (
                    <>
                      <span className={`inline-flex size-11 shrink-0 items-center justify-center rounded-xl ${tone}`}>
                        <Icon aria-hidden="true" className="size-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-xs font-semibold tracking-[0.6px] text-muted uppercase">{label}</span>
                        <span className="block truncate font-display text-[15px] font-extrabold text-ink">{value}</span>
                        <span className="block text-xs text-muted">{note}</span>
                      </span>
                      {href && <ArrowUpRight aria-hidden="true" className="size-4.5 text-muted transition-colors group-hover:text-navy-800" />}
                    </>
                  );
                  return (
                    <li key={label}>
                      {href ? (
                        <a
                          href={href}
                          {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                          className="group -mx-2 flex items-center gap-3.5 rounded-2xl p-2 transition-colors hover:bg-canvas"
                        >
                          {inner}
                        </a>
                      ) : (
                        <div className="-mx-2 flex items-center gap-3.5 p-2">{inner}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>

            <OfficeHoursCard />

            <section aria-labelledby="office-title" className="overflow-hidden rounded-3xl border border-line bg-white">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex h-40 items-center justify-center bg-placeholder"
                aria-label="Open our office location in Google Maps"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-full bg-navy-800 text-white shadow-lg transition-transform group-hover:-translate-y-1">
                  <MapPin aria-hidden="true" className="size-5.5" />
                </span>
              </a>
              <div className="p-6">
                <h2 id="office-title" className="mb-2 font-display text-lg font-extrabold text-ink">
                  Head office
                </h2>
                <address className="mb-4 text-sm leading-relaxed text-body not-italic">
                  {address.street}
                  <br />
                  {address.locality}, {address.region} {address.postalCode}
                  <br />
                  India
                </address>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-display text-sm font-bold text-navy-800 hover:text-brand-600"
                >
                  <Navigation aria-hidden="true" className="size-4" />
                  Get directions
                </a>
                <p className="mt-3 text-xs text-muted">Visits by appointment — book a slot using the form.</p>
              </div>
            </section>
          </aside>
        </Container>
      </section>

      {/* What happens next */}
      <section className="border-t border-line bg-white px-6 py-20">
        <Container>
          <div className="mx-auto mb-12 max-w-160 text-center">
            <Eyebrow>What happens next</Eyebrow>
            <SectionTitle>From enquiry to action plan in three steps</SectionTitle>
          </div>
          <ol className="grid gap-5 md:grid-cols-3">
            {nextSteps.map((step, i) => (
              <li key={step.title} className="rounded-3xl border border-line bg-canvas p-7">
                <span className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-navy-800 font-display text-sm font-extrabold text-white">
                  {i + 1}
                </span>
                <h3 className="mb-2 text-[19px] font-extrabold text-ink">{step.title}</h3>
                <p className="text-[15px] leading-[1.65] text-body">{step.description}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Departments */}
      <section className="border-t border-line px-6 py-20">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-155">
              <Eyebrow>Reach the right team</Eyebrow>
              <SectionTitle>Direct lines for specific requests</SectionTitle>
            </div>
          </div>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((d) => (
              <li key={d.title}>
                <a href={`mailto:${d.email}`} className="lift group flex h-full flex-col gap-2 rounded-[20px] border border-line bg-white p-6">
                  <h3 className="text-lg font-extrabold text-ink">{d.title}</h3>
                  <p className="flex-1 text-sm leading-[1.6] text-body">{d.description}</p>
                  <span className="mt-2 inline-flex items-center gap-1.5 truncate text-sm font-semibold text-navy-800">
                    <Mail aria-hidden="true" className="size-4 shrink-0" />
                    {d.email}
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-brand-200 bg-brand-50 px-7 py-6">
            <p className="font-display text-lg font-extrabold text-ink">Want answers right away?</p>
            <ul className="flex flex-wrap gap-x-7 gap-y-3">
              {selfServe.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="group font-display text-[15px] font-bold text-navy-800">
                    {link.label} <Arrow />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
