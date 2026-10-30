"use client";

import { ChevronDown, Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { ButtonLink } from "@/components/ui/Button";
import { mainNav, routes } from "@/config/navigation";
import { siteConfig } from "@/config/site";

/** Slide-down menu for screens narrower than 1080px. */
export function MobileNav() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // Lock page scroll while open; close on Escape.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const { phoneDisplay, phoneHref } = siteConfig.contact;

  return (
    <div className="min-[1081px]:hidden">
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex size-11 cursor-pointer items-center justify-center rounded-[10px] border border-line bg-navy-25 text-navy-800"
      >
        {open ? <X className="size-5" /> : <Menu className="size-5" />}
      </button>

      <div
        id={panelId}
        hidden={!open}
        // Close the menu as soon as any link inside it is followed.
        onClick={(e) => (e.target as HTMLElement).closest("a") && setOpen(false)}
        className="fixed inset-x-0 top-19.5 bottom-0 z-50 overflow-y-auto border-t border-line bg-white px-6 pt-4 pb-10"
      >
        <nav aria-label="Mobile">
          <ul className="divide-y divide-line">
            {mainNav.map((item) => (
              <li key={item.label}>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 font-display text-base font-bold text-ink">
                    {item.label}
                    <ChevronDown aria-hidden="true" className="size-4 text-muted transition-transform group-open:rotate-180" />
                  </summary>
                  <ul className="pb-4 pl-1">
                    <li>
                      <Link href={item.href} className="block py-2 text-[15px] font-semibold text-navy-800">
                        {item.label} overview
                      </Link>
                    </li>
                    {item.children?.map((child) => (
                      <li key={child.href + child.label}>
                        <Link href={child.href} className="block py-2 text-[15px] text-body">
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-6 flex flex-col gap-3">
          <ButtonLink href={routes.consultation} size="lg" withArrow>
            Free Consultation
          </ButtonLink>
          <a
            href={phoneHref || routes.contact}
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-line py-3.5 font-display font-bold text-navy-800"
          >
            <Phone aria-hidden="true" className="size-4 text-brand-600" />
            {phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
}
