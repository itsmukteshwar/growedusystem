/** Contact page content and form options. */
import { routes } from "@/config/navigation";

export const contactIntro = {
  eyebrow: "Contact us",
  title: "Talk to a school consultant",
  description:
    "Tell us where you are in your school journey. A board-specialist consultant will call you back with clear next steps on cost, timeline and approvals — free, with no commitment.",
};

export const roles = [
  "Promoter / investor starting a school",
  "School owner / trustee",
  "Principal / administrator",
  "Teacher / job seeker",
  "Parent",
  "Vendor / partner",
  "Other",
] as const;

export const interests = [
  "Start a new school",
  "Feasibility study & DPR",
  "Board affiliation",
  "School management",
  "School improvement",
  "Admissions growth",
  "Teacher training",
  "School ERP & platforms",
] as const;

export const boardOptions = ["Not decided yet", "CBSE", "ICSE / CISCE", "IB", "Cambridge (IGCSE)", "State Board"] as const;

export const budgetOptions = [
  "Not sure yet",
  "Under ₹1 crore",
  "₹1 – 5 crore",
  "₹5 – 15 crore",
  "₹15 – 50 crore",
  "Above ₹50 crore",
] as const;

export const timelineOptions = [
  "Just exploring",
  "Within 3 months",
  "3 – 6 months",
  "6 – 12 months",
  "More than a year",
] as const;

export const contactMethods = ["Phone call", "WhatsApp", "Email"] as const;

export const indianStates = [
  "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh",
  "Chhattisgarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana",
  "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry",
  "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Outside India",
] as const;

export const nextSteps = [
  { title: "We review your enquiry", description: "A consultant reads your details and matches you with the right board and service specialist." },
  { title: "Free 30-minute call", description: "We call within one working day to understand your plans, location and budget." },
  { title: "Your action plan", description: "You get a clear note on cost, timeline and approvals for your city — yours to keep." },
];

export const departments = [
  { title: "New schools & setup", description: "Feasibility, DPR, trust, affiliation and launch.", email: "setup@growedusystem.com" },
  { title: "Existing schools", description: "Management, audits, admissions and training.", email: "schools@growedusystem.com" },
  { title: "Platforms & ERP support", description: "School ERP, recruitment and marketplace help.", email: "support@growedusystem.com" },
  { title: "Careers", description: "Join our consulting or technology teams.", email: "careers@growedusystem.com" },
];

export const selfServe = [
  { label: "Estimate your setup cost", href: routes.budgetCalculator },
  { label: "Read the knowledge hub", href: routes.blog },
  { label: "Browse common questions", href: routes.faq },
];
