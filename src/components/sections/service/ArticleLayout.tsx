import { List, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

import { TableOfContents, type TocItem } from "./TableOfContents";

/** Long-form page body: sticky "On this page" + consultation card on desktop, collapsible contents on mobile. */
export function ArticleLayout({ toc, children }: { toc: TocItem[]; children: ReactNode }) {
  const { phoneDisplay, phoneHref } = siteConfig.contact;

  return (
    <div className="px-6 py-14 md:py-20">
      <Container className="grid gap-12 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-16">
        <aside className="lg:order-none">
          <div className="flex flex-col gap-6 lg:sticky lg:top-28">
            <details className="group rounded-2xl border border-line bg-white p-4 lg:hidden">
              <summary className="flex cursor-pointer list-none items-center gap-2 font-display font-bold text-ink">
                <List aria-hidden="true" className="size-4.5" /> On this page
              </summary>
              <div className="mt-4">
                <TableOfContents items={toc} />
              </div>
            </details>

            <nav aria-label="On this page" className="hidden lg:block">
              <p className="mb-3 font-display text-xs font-extrabold tracking-[1.4px] text-muted uppercase">On this page</p>
              <TableOfContents items={toc} />
            </nav>

            <div className="hidden rounded-[20px] bg-navy-950 p-5.5 text-white lg:block">
              <p className="mb-1.5 font-display text-base font-extrabold">Talk to a consultant</p>
              <p className="mb-4 text-sm leading-relaxed text-white/72">Free 30-minute call on cost, timeline and approvals for your city.</p>
              <ButtonLink href={routes.consultation} size="sm" withArrow className="w-full">
                Book free call
              </ButtonLink>
              <a href={phoneHref} className="mt-3 flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white">
                <Phone aria-hidden="true" className="size-3.5" />
                {phoneDisplay}
              </a>
            </div>
          </div>
        </aside>

        <article className="flex min-w-0 flex-col gap-14">{children}</article>
      </Container>
    </div>
  );
}
