"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Keeps the desktop dropdowns from "sticking" open.
 * - After a page change, focus is released from the main menu (the header stays mounted between pages,
 *   so the clicked link would otherwise keep focus).
 * - Pressing Esc inside the menu closes the open dropdown.
 */
export function NavFocusReset({ navId }: { navId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    const nav = document.getElementById(navId);
    const active = document.activeElement;
    if (nav && active instanceof HTMLElement && nav.contains(active)) active.blur();
  }, [pathname, navId]);

  useEffect(() => {
    const nav = document.getElementById(navId);
    if (!nav) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && document.activeElement instanceof HTMLElement) document.activeElement.blur();
    };
    nav.addEventListener("keydown", onKey);
    return () => nav.removeEventListener("keydown", onKey);
  }, [navId]);

  return null;
}
