/** Content for /school-improvement — hub page for the "School Improvement" section. */
import { BarChart3, GraduationCap, HeartHandshake, ShieldCheck, TrendingUp, Users } from "lucide-react";

import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import type { Faq } from "@/types";
import type { IconItem, PageHeroData, PageMeta, TimelineStep } from "@/types/service";

export const meta: PageMeta = {
  path: routes.improvement,
  title: "School Improvement Consultants in India",
  description:
    "Raise results, enrolment and reputation with school improvement services: independent school audits, admissions growth and teacher training — one plan, measured.",
  keywords: [
    "school improvement consultants",
    "school improvement services India",
    "how to improve school performance",
    "school development plan",
    "school quality improvement",
    "school turnaround",
    "school consultancy services",
  ],
  updated: "2026-10-31",
};

export const hero: PageHeroData = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "School Improvement", href: routes.improvement },
  ],
  eyebrow: "School improvement",
  title: "School Improvement Services — Better Results, Fuller Classrooms",
  description:
    "Every good school can become a great one. We find what's holding your school back, then fix it — through independent audits, admissions growth and teacher training that work together as one improvement plan.",
  primary: { label: "Book a free consultation", href: routes.consultation },
  secondary: { label: "Explore services", href: "#services" },
  facts: [
    { value: "3", label: "Connected services" },
    { value: "Audit-led", label: "Evidence before advice" },
    { value: "NEP 2020", label: "Aligned approach" },
    { value: "All boards", label: "CBSE, ICSE, IB, Cambridge, State" },
  ],
  image: brief({
    id: "IMP-01",
    file: "school-improvement/hub-hero-classroom.webp",
    width: 1400,
    height: 1050,
    title: "An improving classroom",
    alt: "Engaged students collaborating in a bright, well-run classroom while the teacher guides them",
    scene:
      "A bright Indian classroom full of energy, students aged 12 to 14 working in small groups on a hands-on maths activity with cut-outs and measuring tapes, a confident teacher moving between groups, a school leader watching approvingly from the door, natural daylight, purposeful and joyful mood",
  }),
};

export const services = [
  {
    name: "School audit",
    href: routes.audit,
    description: "An independent, evidence-based review of academics, teaching, safety, compliance, finances and admissions — with a 90-day action plan.",
    points: ["Benchmarked to CBSE SQAAF and NEP 2020", "Mock inspections before affiliation", "Safety and safeguarding audits"],
    cta: "Explore school audits",
  },
  {
    name: "Admissions growth",
    href: routes.admissions,
    description: "A full-funnel admissions system: positioning, local SEO, digital ads, open days, enquiry CRM, counselling and retention.",
    points: ["Weekly funnel reporting in season", "Counsellor training and CRM", "New-school launch campaigns"],
    cta: "Explore admissions growth",
  },
  {
    name: "Teacher training",
    href: routes.training,
    description: "In-school professional development with classroom coaching, aligned with NEP 2020 and documented towards CBSE's 50-hour CPD rule.",
    points: ["Pedagogy and competency-based assessment", "New-teacher induction", "Leadership academy for coordinators"],
    cta: "Explore teacher training",
  },
];

export const cycle: TimelineStep[] = [
  {
    title: "Audit",
    timing: "Weeks 1–6",
    description: "An independent review shows exactly where your school stands and what matters most.",
    link: { label: "School audit", href: routes.audit },
  },
  {
    title: "Plan",
    timing: "Weeks 4–8",
    description: "A prioritised improvement plan with owners, budgets and measurable targets, agreed with your trust.",
  },
  {
    title: "Improve",
    timing: "Months 2–12",
    description: "Teacher training lifts classroom practice; admissions growth fills seats; systems fix operational gaps.",
    link: { label: "Teacher training", href: routes.training },
  },
  {
    title: "Measure & repeat",
    timing: "Every term",
    description: "Results, enrolment and retention tracked against the baseline, with a re-audit after 6–12 months.",
  },
];

export const outcomes: IconItem[] = [
  { icon: GraduationCap, title: "Better learning outcomes", description: "Stronger teaching shows up in assessments and board results." },
  { icon: TrendingUp, title: "Higher enrolment", description: "More enquiries, better conversion and fuller entry grades." },
  { icon: HeartHandshake, title: "Families who stay", description: "Higher re-enrolment and more parent referrals." },
  { icon: Users, title: "Teachers who stay", description: "Developed, supported teachers are less likely to leave." },
  { icon: ShieldCheck, title: "Inspection-ready compliance", description: "Gaps closed before your board or the state finds them." },
  { icon: BarChart3, title: "Decisions on data", description: "A clear dashboard for the trust, not guesswork." },
];

export const faqs: Faq[] = [
  {
    question: "What is school improvement?",
    answer:
      "School improvement is a structured process for raising a school's quality — teaching, learning outcomes, leadership, safety, enrolment and reputation — by measuring where the school stands, acting on clear priorities and tracking progress.",
  },
  {
    question: "Where should a school start?",
    answer: "With an independent audit. It shows which problems matter most and what fixing them is worth, so improvement effort and budget go where they will have the most impact.",
  },
  {
    question: "Can we take only one service?",
    answer: "Yes. Many schools start with an audit, admissions campaign or teacher training programme on its own. The services are designed to connect when you want them to.",
  },
  {
    question: "How long before we see improvement?",
    answer:
      "Operational and admissions improvements often show within one term or one admission season. Gains in learning outcomes and board results typically build over one to two academic years.",
  },
  {
    question: "Do you work with schools on every board?",
    answer: "Yes — CBSE, CISCE (ICSE/ISC), State Boards, and schools offering IB and Cambridge programmes.",
  },
  {
    question: "Is school improvement different from school management?",
    answer:
      "Improvement services are focused projects — an audit, a campaign, a training programme — delivered alongside your team. School management means we take ongoing responsibility for running the school's operations.",
  },
];

export const cta = {
  title: "Make this the year your school moves up",
  description: "Book a free 30-minute call. Tell us what you want to improve, and we'll suggest where to start.",
  cta: { label: "Book a free consultation", href: routes.consultation },
  reassurance: "Audit-led · Measurable targets · All boards",
  image: brief({
    id: "IMP-02",
    file: "school-improvement/hub-cta-celebration.webp",
    width: 900,
    height: 900,
    title: "Celebrating results",
    alt: "Teachers and principal celebrating improved results in the staff room",
    scene:
      "Square photo of a happy Indian principal and four teachers in a staff room celebrating, one holding a printed chart with rising bars (no readable text), high-fives and smiles, warm natural light, proud mood",
  }),
};
