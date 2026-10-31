/** Content for /school-management — hub page for the "School Management" section. */
import {
  BookOpenCheck,
  Bus,
  Calculator,
  Megaphone,
  MonitorSmartphone,
  ShieldCheck,
  UserCog,
  Users,
} from "lucide-react";

import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import { engagementModels } from "@/data/services/management-guide";
import type { Faq } from "@/types";
import type { IconItem, PageHeroData, PageMeta, TimelineStep } from "@/types/service";

export const meta: PageMeta = {
  path: routes.management,
  title: "School Management Services in India — Day & Boarding School Operations",
  description:
    "Professional school management services for trusts and promoters across India. We run day and boarding schools end to end — academics, leadership, HR, finance, admissions, safety and compliance — while you keep ownership and control.",
  keywords: [
    "school management services",
    "school management company in India",
    "school management consultants",
    "school operations management",
    "boarding school management",
    "day school management",
    "outsource school management",
  ],
  updated: "2026-10-31",
};

export const hero: PageHeroData = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "School Management", href: routes.management },
  ],
  eyebrow: "School management",
  title: "School Management Services — Run Your School Like the Best",
  description:
    "Owning a school and running one are different jobs. We give trusts and promoters a professional operating team for day and boarding schools — with clear systems, monthly reporting and one accountable partner.",
  primary: { label: "Book a free consultation", href: routes.consultation },
  secondary: { label: "Day or boarding?", href: "#models" },
  facts: [
    { value: "2", label: "School models: day & boarding" },
    { value: "3", label: "Engagement levels" },
    { value: "Monthly", label: "Dashboard to your trust" },
    { value: "All boards", label: "CBSE, ICSE, IB, Cambridge, State" },
  ],
  image: brief({
    id: "MGT-01",
    file: "school-management/hub-hero-leadership.webp",
    width: 1400,
    height: 1050,
    title: "School leadership team at work",
    alt: "School principal, trust member and consultant walking through a busy school corridor together",
    scene:
      "A school principal in a formal saree, a senior trust member in a bandhgala jacket and an education consultant with a tablet walking and talking together along a bright school corridor, students moving between classrooms in the background, natural daylight, purposeful and confident mood",
  }),
};

export const schoolModels = [
  {
    name: "Day school management",
    href: routes.dayManagement,
    description: "For day schools of every size and board — from a new campus's first session to a turnaround of an established school.",
    points: ["Academics, timetables and results", "Teacher hiring, training and retention", "Fees, finance and admissions", "Transport, safety and compliance"],
    cta: "Explore day school management",
  },
  {
    name: "Boarding school management",
    href: routes.boardingManagement,
    description: "For residential and semi-residential schools that carry responsibility for children 24 hours a day.",
    points: ["House parents, wardens and night supervision", "Safeguarding and child protection", "Dining, nutrition and health centre", "Weekend and co-curricular life"],
    cta: "Explore boarding school management",
  },
];

export const functions: IconItem[] = [
  { icon: BookOpenCheck, title: "Academics", description: "Curriculum planning, assessment and results improvement." },
  { icon: UserCog, title: "Leadership & HR", description: "Principal and teacher hiring, appraisal and training." },
  { icon: Calculator, title: "Finance & fees", description: "Budgets, fee collection and monthly MIS for the trust." },
  { icon: Megaphone, title: "Admissions", description: "A predictable funnel from enquiry to enrolment." },
  { icon: Users, title: "Parent engagement", description: "Communication, PTMs and feedback that build trust." },
  { icon: Bus, title: "Transport & facilities", description: "Safe buses, clean campuses and planned maintenance." },
  { icon: ShieldCheck, title: "Safety & compliance", description: "Board, state and statutory compliance calendars." },
  { icon: MonitorSmartphone, title: "Technology", description: "School ERP set up, trained and used every day." },
];

export { engagementModels };

export const steps: TimelineStep[] = [
  {
    title: "Diagnostic audit",
    timing: "Weeks 1–4",
    description: "We study the school as it is — academics, people, finances, admissions, safety and compliance.",
    link: { label: "About our school audit", href: routes.audit },
  },
  {
    title: "Plan & targets",
    timing: "Weeks 4–6",
    description: "A written management plan with priorities, budgets and measurable targets, agreed with your trust.",
  },
  {
    title: "Team & systems",
    timing: "Months 2–6",
    description: "Leadership in place, SOPs rolled out function by function, ERP and dashboard live.",
  },
  {
    title: "Run & report",
    timing: "Ongoing",
    description: "Monthly dashboards, quarterly trust reviews and an annual plan for the next session.",
  },
];

export const faqs: Faq[] = [
  {
    question: "What is a school management company?",
    answer:
      "A school management company runs a school's academics and operations on behalf of the trust or society that owns it — providing leadership, systems, staff training, financial management and compliance under an agreed plan.",
  },
  {
    question: "Do we have to hand over ownership of the school?",
    answer:
      "No. The trust or society always keeps ownership, control of finances and final decision rights. We are accountable to you through monthly reporting and regular reviews.",
  },
  {
    question: "Do you manage both day and boarding schools?",
    answer:
      "Yes. Day school management covers academics and daily operations; boarding school management adds residential life, safeguarding, dining, health care and weekend programmes.",
  },
  {
    question: "How long is a typical management engagement?",
    answer: "Advisory engagements usually run for 12 months, co-management for two to three years and full management for three to five years, with annual reviews.",
  },
  {
    question: "Which boards do you work with?",
    answer: "We manage schools affiliated to CBSE, CISCE (ICSE/ISC), State Boards, and schools offering IB and Cambridge programmes.",
  },
  {
    question: "Can you start managing a school that hasn't opened yet?",
    answer: "Yes. For new schools, management can begin six months or more before opening — covering hiring, systems, the first admissions season and day-one operations.",
  },
];

export const cta = {
  title: "Let your school run as well as you imagined it",
  description: "Book a free 30-minute call. Tell us about your school, and we'll suggest the management model that fits.",
  cta: { label: "Book a free consultation", href: routes.consultation },
  reassurance: "You keep ownership · Monthly reporting · Day & boarding expertise",
  image: brief({
    id: "MGT-02",
    file: "school-management/hub-cta-handshake.webp",
    width: 900,
    height: 900,
    title: "Partnership agreed",
    alt: "Trust chairperson and consultant shaking hands in a school office",
    scene:
      "Square photo of an Indian school trust chairperson in his 60s and a female education consultant shaking hands warmly across a desk in a school office, a framed campus photo and plants behind, both smiling, soft daylight, trusting mood",
  }),
};
