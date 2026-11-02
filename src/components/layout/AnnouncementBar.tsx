import { Mail, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";

import { Arrow } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";
import { announcement } from "@/data/home";

/** Dark strip above the header: quick call / WhatsApp / email on the left, announcement on the right. */
export function AnnouncementBar() {
  const { phoneDisplay, phoneHref, whatsappHref, email } = siteConfig.contact;

  return (
    <div className="border-b border-brand-200/70 bg-mint-200 px-4 text-[13px] text-body sm:px-6">
      <Container className="flex min-h-10 items-center justify-between gap-x-6 gap-y-1 py-1.5">
        <ul className="flex items-center gap-1 sm:gap-2">
          <li>
            <a
              href={phoneHref}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-semibold text-ink transition-colors hover:bg-white/70"
            >
              <Phone aria-hidden="true" className="size-3.5 text-brand-700" />
              <span className="sr-only">Call us: </span>
              {phoneDisplay}
            </a>
          </li>
          <li aria-hidden="true" className="h-4 w-px bg-brand-200" />
          <li>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 font-semibold text-ink transition-colors hover:bg-white/70"
            >
              <MessageCircle aria-hidden="true" className="size-3.5 text-brand-700" />
              WhatsApp<span className="sr-only"> us (opens in a new tab)</span>
            </a>
          </li>
          <li aria-hidden="true" className="hidden h-4 w-px bg-brand-200 lg:block" />
          <li className="hidden lg:block">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-1.5 rounded-md px-2 py-1 text-body transition-colors hover:bg-white/70 hover:text-brand-700"
            >
              <Mail aria-hidden="true" className="size-3.5 text-brand-700" />
              {email}
            </a>
          </li>
        </ul>

        <p className="hidden items-center gap-2.5 md:flex">
          <span className="rounded bg-brand-600 px-2 py-0.5 font-display text-[11px] font-bold tracking-[0.6px] text-white">
            {announcement.badge}
          </span>
          <span className="hidden xl:inline">{announcement.text}</span>
          <span className="xl:hidden">Free 30-minute consultation</span>
          <Link href={announcement.cta.href} className="group font-semibold text-brand-700">
            {announcement.cta.label} <Arrow />
          </Link>
        </p>
      </Container>
    </div>
  );
}
