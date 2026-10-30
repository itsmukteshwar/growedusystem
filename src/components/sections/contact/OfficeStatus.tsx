"use client";

import { Clock } from "lucide-react";
import { useSyncExternalStore } from "react";

import { getOfficeStatus, weeklyHours } from "@/lib/business-hours";
import { cn } from "@/lib/utils";

// Re-render every 30 s so the badge flips at opening/closing time.
const subscribe = (cb: () => void) => {
  const id = window.setInterval(cb, 30_000);
  return () => window.clearInterval(id);
};
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

function useOfficeStatus() {
  const minute = useSyncExternalStore(subscribe, getMinute, getServerMinute);
  return minute === null ? null : getOfficeStatus(new Date(minute * 60_000));
}

/** Pill showing "Open now" / "Closed" — renders a neutral placeholder until the browser clock is known. */
export function OfficeStatusBadge({ tone = "light", className }: { tone?: "light" | "dark"; className?: string }) {
  const status = useOfficeStatus();

  const label =
    status === null
      ? "Checking office hours…"
      : status.open
        ? `Open now · until ${status.closesAt} IST`
        : `${status.reason === "holiday" ? "Closed for a holiday" : "Closed now"} · opens ${status.nextOpenLabel}`;

  return (
    <p
      role="status"
      aria-live="polite"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full border py-1.75 pr-3.5 pl-2.5 text-[13px] font-medium",
        tone === "dark" ? "border-white/14 bg-white/6 text-white/88" : "border-line bg-white text-body",
        className,
      )}
    >
      <span className="relative flex size-2.5">
        {status?.open && (
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-400 opacity-60 motion-reduce:animate-none" />
        )}
        <span
          className={cn(
            "relative inline-flex size-2.5 rounded-full",
            status === null ? "bg-navy-300" : status.open ? "bg-brand-400" : "bg-warn-500",
          )}
        />
      </span>
      {label}
    </p>
  );
}

/** Card with the full weekly timetable, today highlighted. */
export function OfficeHoursCard() {
  const status = useOfficeStatus();
  const rows = weeklyHours();

  return (
    <section aria-labelledby="hours-title" className="rounded-3xl border border-line bg-white p-6">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 id="hours-title" className="flex items-center gap-2 font-display text-lg font-extrabold text-ink">
          <Clock aria-hidden="true" className="size-5 text-navy-800" />
          Office hours
        </h2>
        {status && (
          <span
            className={cn(
              "rounded-full px-2.5 py-1 text-xs font-bold",
              status.open ? "bg-brand-50 text-brand-700" : "bg-warn-500/12 text-warn-800",
            )}
          >
            {status.open ? "Open now" : "Closed"}
          </span>
        )}
      </div>

      <dl className="divide-y divide-divider text-sm">
        {rows.map((row) => {
          const isToday = status?.today === row.day;
          return (
            <div
              key={row.day}
              className={cn("flex justify-between gap-4 py-2.5", isToday && "-mx-3 rounded-lg border-0 bg-navy-25 px-3 font-semibold")}
            >
              <dt className={cn(isToday ? "text-navy-800" : "text-body")}>
                {row.name}
                {isToday && <span className="ml-2 text-xs font-bold text-brand-600">Today</span>}
              </dt>
              <dd className={cn(row.hours === "Closed" ? "text-muted" : "text-ink")}>{row.hours}</dd>
            </div>
          );
        })}
      </dl>

      <p className="mt-4 text-xs leading-relaxed text-muted">
        All times are India Standard Time (IST). Enquiries sent outside office hours are answered the next working day.
      </p>
    </section>
  );
}
