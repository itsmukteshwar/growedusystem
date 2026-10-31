/** Helpers shared by the board-specific guide data modules (ICSE, IB, Cambridge, State Board). */

/** Standard table of contents — section ids match BoardGuide.tsx. */
export const boardGuideToc = (requirementsLabel: string) => [
  { id: "why", label: "Overview" },
  { id: "eligibility", label: "Eligibility" },
  { id: "requirements", label: requirementsLabel },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "staff", label: "Staff & academics" },
  { id: "process", label: "Step-by-step process" },
  { id: "documents", label: "Documents checklist" },
  { id: "timeline", label: "How long it takes" },
  { id: "delays", label: "Common reasons for delay" },
  { id: "how-we-help", label: "How we help" },
  { id: "faq", label: "FAQs" },
];
