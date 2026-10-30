import Link from "next/link";

import { Arrow } from "@/components/ui/Button";
import { announcement } from "@/data/home";

export function AnnouncementBar() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2.5 bg-navy-950 px-5 py-2.5 text-center text-[13px] text-white/82">
      <span className="rounded bg-brand-600 px-2 py-0.75 font-display text-[11px] font-bold tracking-[0.6px] text-white">
        {announcement.badge}
      </span>
      <span>{announcement.text}</span>
      <Link href={announcement.cta.href} className="group font-semibold text-brand-400">
        {announcement.cta.label} <Arrow />
      </Link>
    </div>
  );
}
