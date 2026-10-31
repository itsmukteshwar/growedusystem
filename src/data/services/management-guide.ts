/** Helpers shared by the School Management data modules (day school, boarding school). */
import type { TableData } from "@/types/service";

/** Standard table of contents — section ids match ManagementGuide.tsx. */
export const managementToc = (specialisedLabel: string) => [
  { id: "overview", label: "Overview" },
  { id: "scope", label: "What we manage" },
  { id: "specialised", label: specialisedLabel },
  { id: "models", label: "Engagement models" },
  { id: "process", label: "How it works" },
  { id: "kpis", label: "What we measure" },
  { id: "compliance", label: "Compliance" },
  { id: "signs", label: "Signs you need support" },
  { id: "faq", label: "FAQs" },
];

/** The three ways schools engage us — shared by the hub and both service pages. */
export const engagementModels: TableData = {
  caption: "School management engagement models compared",
  columns: ["", "Advisory", "Co-management", "Full management"],
  rows: [
    ["Best for", "Established schools that want expert guidance", "Schools that want hands-on support alongside their own team", "New schools, or schools that need a turnaround"],
    ["Who runs day-to-day operations", "Your team", "Your team, with our specialists embedded", "Our team, reporting to your trust or board"],
    ["Leadership", "We coach your principal", "We co-recruit and mentor leadership", "We recruit and line-manage the principal"],
    ["Systems & SOPs", "We review and recommend", "We design and implement with you", "We design, implement and run them"],
    ["Reporting", "Quarterly review", "Monthly dashboard and review", "Monthly dashboard, quarterly board review"],
    ["Typical term", "12 months, renewable", "2–3 years", "3–5 years"],
  ],
  note: "Every engagement is scoped after a diagnostic audit. The trust or management committee always retains ownership, control of finances and final decision rights.",
};
