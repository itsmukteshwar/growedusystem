import { siteConfig } from "@/config/site";

export const DAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"] as const;

type Slot = { day: number; open: string; close: string };

export type OfficeStatus =
  | { open: true; closesAt: string; minutesToClose: number; today: number }
  | { open: false; reason: "holiday" | "closed"; nextOpenLabel: string; today: number };

const toMinutes = (hhmm: string) => {
  const [h, m] = hhmm.split(":").map(Number);
  return h * 60 + m;
};

/** "19:00" → "7:00 PM" */
export function formatTime(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour = h % 12 === 0 ? 12 : h % 12;
  return `${hour}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** Wall-clock parts of `date` in the office time zone. */
function officeClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: siteConfig.hours.timeZone,
    weekday: "short",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(get("weekday"));
  return {
    weekday,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
    isoDate: `${get("year")}-${get("month")}-${get("day")}`,
  };
}

function addDaysIso(iso: string, days: number) {
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

const slotFor = (day: number): Slot | undefined => siteConfig.hours.schedule.find((s) => s.day === day);

export function getOfficeStatus(now: Date = new Date()): OfficeStatus {
  const { weekday, minutes, isoDate } = officeClock(now);
  const { holidays } = siteConfig.hours;
  const isHoliday = holidays.includes(isoDate);
  const slot = slotFor(weekday);

  if (!isHoliday && slot && minutes >= toMinutes(slot.open) && minutes < toMinutes(slot.close)) {
    return { open: true, closesAt: formatTime(slot.close), minutesToClose: toMinutes(slot.close) - minutes, today: weekday };
  }

  // Find the next opening within the coming two weeks.
  for (let offset = 0; offset < 14; offset++) {
    const day = (weekday + offset) % 7;
    const s = slotFor(day);
    if (!s || holidays.includes(addDaysIso(isoDate, offset))) continue;
    if (offset === 0 && minutes >= toMinutes(s.open)) continue;
    const when = offset === 0 ? "today" : offset === 1 ? "tomorrow" : DAY_NAMES[day];
    return { open: false, reason: isHoliday ? "holiday" : "closed", nextOpenLabel: `${when} at ${formatTime(s.open)}`, today: weekday };
  }

  return { open: false, reason: isHoliday ? "holiday" : "closed", nextOpenLabel: "soon", today: weekday };
}

/** Rows for the weekly hours table, Monday first. */
export function weeklyHours() {
  return [1, 2, 3, 4, 5, 6, 0].map((day) => {
    const s = slotFor(day);
    return { day, name: DAY_NAMES[day], hours: s ? `${formatTime(s.open)} – ${formatTime(s.close)}` : "Closed" };
  });
}
