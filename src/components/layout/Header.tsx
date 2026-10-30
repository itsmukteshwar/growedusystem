import { ChevronDown } from "lucide-react";
import Link from "next/link";

import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { mainNav, routes } from "@/config/navigation";

import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";

/**
 * Sticky site header. Desktop dropdowns are pure CSS (hover + keyboard focus),
 * so every menu link is in the server HTML and crawlable.
 */
export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/96 backdrop-blur-md backdrop-saturate-160">
      <Container className="flex h-19.5 items-center justify-between gap-6 px-6">
        <Logo priority />

        <nav aria-label="Main" className="hidden items-center gap-0.5 min-[1081px]:flex">
          {mainNav.map((item) => (
            <div key={item.label} className="group relative">
              <Link
                href={item.href}
                className="inline-flex items-center gap-1 rounded-lg px-3 py-2.5 font-display text-sm font-semibold text-body transition-colors duration-200 group-focus-within:bg-navy-25 group-hover:bg-navy-25 group-hover:text-navy-800"
              >
                {item.label}
                {item.children && (
                  <ChevronDown
                    aria-hidden="true"
                    strokeWidth={2.5}
                    className="size-3 transition-transform duration-200 group-hover:rotate-180"
                  />
                )}
              </Link>

              {item.children && (
                <div className="invisible absolute top-full left-0 z-50 pt-2 opacity-0 transition-[opacity,visibility] duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <ul className="min-w-60 rounded-2xl border border-line bg-white p-2 shadow-[0_24px_48px_-24px_rgb(13_31_60/0.35)]">
                    {item.children.map((child) => (
                      <li key={child.href + child.label}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:bg-navy-25 hover:text-navy-800"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3.5">
          <ButtonLink href={routes.consultation} className="hidden sm:inline-flex">
            Free Consultation
          </ButtonLink>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
