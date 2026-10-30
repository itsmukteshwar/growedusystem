import { Container } from "@/components/ui/Container";
import { stats } from "@/data/home";
import { cn } from "@/lib/utils";

export function Stats() {
  return (
    <section aria-label="Grow Edu System in numbers" className="relative z-3 -mt-10 px-6">
      <Container
        as="dl"
        className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] rounded-3xl border border-line bg-white shadow-[0_30px_60px_-34px_rgb(13_31_60/0.35)]"
      >
        {stats.map(({ value, label, icon: Icon, tone }) => (
          <div key={label} className="flex items-center gap-4.5 border-divider p-8 not-last:border-b sm:not-last:border-b-0 sm:not-last:border-r">
            <span
              className={cn(
                "inline-flex size-13 shrink-0 items-center justify-center rounded-[14px]",
                tone === "navy" ? "bg-navy-50 text-navy-800" : "bg-brand-50 text-brand-600",
              )}
            >
              <Icon aria-hidden="true" className="size-6" />
            </span>
            <div className="flex flex-col-reverse">
              <dt className="mt-1.5 text-sm text-muted">{label}</dt>
              <dd className="font-display text-[38px] leading-none font-extrabold tracking-[-1px] text-navy-800 tabular-nums">
                {value}
              </dd>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
}
