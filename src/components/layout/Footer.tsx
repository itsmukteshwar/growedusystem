import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/ui/Container";
import { footerNav, legalNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import { Logo } from "./Logo";

export function Footer() {
  const { email, phoneDisplay, phoneHref, whatsappHref } = siteConfig.contact;
  const { address } = siteConfig;

  return (
    <footer className="bg-navy-950 px-6 pt-18 pb-8 text-white">
      <Container>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-10 border-b border-white/10 pb-12">
          <div className="min-w-0 sm:col-span-2">
            <Logo className="mb-5 inline-flex rounded-[10px] bg-white px-3 py-2" imageClassName="h-8" />
            <p className="mb-5 max-w-80 text-sm leading-[1.75] text-white/68">{siteConfig.tagline}</p>
            <address className="flex flex-col gap-2.5 text-sm text-white/78 not-italic">
              <span className="flex gap-2.5">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand-400" />
                <span>
                  {address.street},
                  <br />
                  {address.locality}, {address.region} {address.postalCode}
                </span>
              </span>
              <a href={phoneHref} className="flex items-center gap-2.5 hover:text-white">
                <Phone aria-hidden="true" className="size-4 shrink-0 text-brand-400" />
                {phoneDisplay}
              </a>
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white">
                <MessageCircle aria-hidden="true" className="size-4 shrink-0 text-brand-400" />
                WhatsApp us
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-2.5 hover:text-white">
                <Mail aria-hidden="true" className="size-4 shrink-0 text-brand-400" />
                {email}
              </a>
            </address>
          </div>

          {footerNav.map((group) => (
            <nav key={group.title} aria-label={group.title}>
              <h2 className="mb-4.5 text-xs font-extrabold tracking-[1.2px] text-brand-400 uppercase">{group.title}</h2>
              <ul className="flex flex-col gap-3 text-sm">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white/72 transition-colors hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 pt-7 text-[13px] text-white/62">
          <p>
            © <CopyrightYear /> {siteConfig.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalNav.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}

/** Current year, rendered at build time. */
function CopyrightYear() {
  return <>{new Date().getFullYear()}</>;
}
