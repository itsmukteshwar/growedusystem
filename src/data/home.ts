/**
 * Homepage content. Edit text here — the section components only handle layout.
 * Replace [bracketed] placeholders with real details before launch.
 */
import { BookOpen, Building2, Globe, GraduationCap, LayoutDashboard, MapPin, Package, Search, Users } from "lucide-react";

import { routes } from "@/config/navigation";
import type {
  Article,
  Board,
  Faq,
  Feature,
  ImageBrief,
  Platform,
  ProcessStep,
  Project,
  ServiceCard,
  Stat,
  Testimonial,
} from "@/types";

/* -------------------------------------------------------------------------- */
/* Announcement & hero                                                        */
/* -------------------------------------------------------------------------- */

export const announcement = {
  badge: "NEW",
  text: "Estimate your school's setup cost in 2 minutes with our free budget calculator.",
  cta: { label: "Try it", href: routes.budgetCalculator },
};

export const heroSlides = {
  start: {
    tab: "Start a school",
    eyebrow: "Start a new school",
    description:
      "Feasibility, DPR, trust registration, affiliation, hiring and launch — one accountable team for CBSE, ICSE, IB, Cambridge and State Board schools.",
    primary: { label: "Book Free Consultation", href: routes.consultation },
    secondary: { label: "Explore School Setup", href: routes.startSchool },
    image: {
      id: "IMG-01",
      spec: "1400×1050 · 4:3",
      title: "Promoter + consultant on a school site",
      description:
        "Promoter and Grow Edu consultant reviewing building plans at an under-construction campus. Golden-hour light, candid, faces visible.",
      alt: "School promoter and Grow Edu consultant reviewing building plans on a campus site",
    } satisfies ImageBrief,
    roadmap: [
      { label: "Trust registration", status: "done" },
      { label: "Feasibility study & DPR", status: "done" },
      { label: "CBSE affiliation", status: "active" },
      { label: "Hiring & first admissions", status: "todo" },
    ] as const,
  },
  manage: {
    tab: "Manage a school",
    eyebrow: "Manage your school",
    description:
      "Academics, HR, finance and boarding operations — managed day to day by people who have run schools before, backed by our own ERP.",
    primary: { label: "Book Free Consultation", href: routes.consultation },
    secondary: { label: "Explore Management", href: routes.management },
    image: {
      id: "IMG-02",
      spec: "1400×1050 · 4:3",
      title: "Morning assembly at a well-run school",
      description:
        "Wide shot of uniformed students in neat rows on a clean campus, principal at the podium. Bright morning light, sense of order and pride.",
      alt: "Students in uniform at morning assembly on a well-run school campus",
    } satisfies ImageBrief,
    metrics: [
      { label: "Student attendance", value: 94, tone: "bg-brand-600" },
      { label: "Term fee collection", value: 82, tone: "bg-navy-800" },
      { label: "Syllabus covered", value: 61, tone: "bg-navy-500" },
    ],
  },
  grow: {
    tab: "Grow a school",
    eyebrow: "Grow an existing school",
    description:
      "Independent audits, admissions growth, branding, staff training and structured turnaround — measured against the numbers that matter to you.",
    primary: { label: "Book a School Audit", href: routes.audit },
    secondary: { label: "Explore Improvement", href: routes.improvement },
    image: {
      id: "IMG-03",
      spec: "1400×1050 · 4:3",
      title: "Teacher training workshop",
      description:
        "Teachers collaborating in small groups in a bright training room, facilitator at a whiteboard. Energetic, engaged, natural expressions.",
      alt: "Teachers collaborating at a Grow Edu training workshop",
    } satisfies ImageBrief,
    bars: [
      { y: 78, h: 30, fill: "var(--color-navy-200)" },
      { y: 70, h: 38, fill: "var(--color-navy-200)" },
      { y: 58, h: 50, fill: "var(--color-navy-500)" },
      { y: 44, h: 64, fill: "var(--color-navy-500)" },
      { y: 28, h: 80, fill: "var(--color-brand-600)" },
      { y: 10, h: 98, fill: "var(--color-brand-600)" },
    ],
  },
};

export const boardsStrip = ["CBSE", "CISCE", "IB", "CAMBRIDGE", "STATE BOARDS"];

/* -------------------------------------------------------------------------- */
/* Stats & about                                                              */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { value: "50+", label: "Schools established", icon: GraduationCap, tone: "navy" },
  { value: "15+", label: "States served", icon: MapPin, tone: "green" },
  { value: "5", label: "Boards supported", icon: BookOpen, tone: "navy" },
  { value: "1 team", label: "Accountable end to end", icon: Users, tone: "green" },
];

export const about = {
  eyebrow: "Why Grow Edu System",
  title: "Starting a school in India is hard. It doesn't have to be.",
  description:
    "We handle everything from trust registration and land requirements to affiliation, staff hiring and your first admissions season. One team. The full journey.",
  features: [
    {
      title: "Board-specialist consultants",
      description: "CBSE, CISCE, IB and Cambridge each have their own expert.",
    },
    {
      title: "Pan-India, including tier-2 and tier-3 cities",
      description: "State-specific rules, local approvals and on-ground support.",
    },
    {
      title: "Consultancy plus our own technology",
      description: "ERP, hiring portal and supplies marketplace built in-house.",
    },
  ] satisfies Feature[],
  cta: { label: "Read our story", href: routes.about },
  images: [
    {
      id: "IMG-04",
      spec: "800×1100 · Portrait",
      title: "Our consultants at work",
      description:
        "Two or three Grow Edu team members around a table with DPR documents and a laptop. Real team, office or client site, smart-casual.",
      alt: "Grow Edu System consultants reviewing a school project report",
    },
    {
      id: "IMG-05",
      spec: "800×600",
      title: "Classroom detail",
      description: "Students raising hands in a modern classroom, smartboard in soft focus.",
      alt: "Students raising hands in a modern classroom",
    },
    {
      id: "IMG-06",
      spec: "800×600",
      title: "Campus aerial / drone",
      description: "Drone shot of a completed campus — building, playground, greenery.",
      alt: "Aerial view of a completed school campus",
    },
  ] satisfies ImageBrief[],
};

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Everything a school needs, from one team",
  description:
    "Whether you're breaking ground or turning around an existing school, we own the outcome — not just the paperwork.",
};

export const services: ServiceCard[] = [
  {
    title: "Start a new school",
    description:
      "From the first document to the first assembly — feasibility, trust, infrastructure, affiliation and launch.",
    cta: "Explore school setup",
    href: routes.startSchool,
    badge: "Most requested",
    image: {
      id: "IMG-07",
      spec: "960×600",
      title: "New school building nearing completion",
      description: "Fresh school façade with scaffolding coming down, signage space visible.",
      alt: "New school building nearing completion",
    },
  },
  {
    title: "School management",
    description:
      "Day and boarding school operations — academics, HR, finance and fee management run as one system.",
    cta: "Explore management",
    href: routes.management,
    image: {
      id: "IMG-08",
      spec: "960×600",
      title: "Principal and admin team meeting",
      description: "Principal reviewing a timetable with coordinators in a tidy staff room.",
      alt: "Principal reviewing a timetable with school coordinators",
    },
  },
  {
    title: "School improvement",
    description:
      "Audits, admissions growth, branding, staff training and turnaround programmes for existing schools.",
    cta: "Explore improvement",
    href: routes.improvement,
    image: {
      id: "IMG-09",
      spec: "960×600",
      title: "Parents at an admissions open day",
      description: "Families at a welcome desk with brochures; friendly staff, school banner behind.",
      alt: "Parents at a school admissions open day",
    },
  },
];

export const consultantCallout = {
  title: "Not sure where to start?",
  description: "Tell us your city, budget and board — we'll map your next 90 days, free.",
  cta: { label: "Talk to a consultant", href: routes.consultation },
  image: {
    id: "IMG-10",
    spec: "160×160",
    description: "Lead consultant headshot",
    alt: "Grow Edu lead consultant",
  } satisfies ImageBrief,
};

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

export const processIntro = {
  eyebrow: "The process",
  title: "Four stages. Zero guesswork.",
  description:
    "A clear path from your first call to your first assembly — with a named consultant at every stage.",
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    timing: "Week 1",
    title: "Consultation",
    description: "A free 30-minute call on your vision, location, budget and board.",
    image: { id: "IMG-11", spec: "640×400", description: "Consultant on a video call with a promoter, notebook open." },
  },
  {
    number: "02",
    timing: "Months 1–2",
    title: "Feasibility & DPR",
    description: "Demand analysis, financial model and an investor-ready project report.",
    image: { id: "IMG-12", spec: "640×400", description: "Printed DPR report with charts on a desk, close-up." },
  },
  {
    number: "03",
    timing: "Months 3–18",
    title: "Setup & affiliation",
    description: "Trust, land, building, NOC and affiliation — documented and inspection-ready.",
    image: { id: "IMG-13", spec: "640×400", description: "Architect and consultant walking a construction site." },
  },
  {
    number: "04",
    timing: "Launch & beyond",
    title: "Open your doors",
    description: "Hiring, first admissions, day-one operations and ongoing support.",
    highlight: true,
    image: { id: "IMG-14", spec: "640×400", description: "Ribbon-cutting at a school inauguration, students cheering." },
  },
];

/* -------------------------------------------------------------------------- */
/* Boards                                                                     */
/* -------------------------------------------------------------------------- */

export const boardsIntro = {
  eyebrow: "Choose your board",
  title: "Board-specialist guidance, not one-size-fits-all",
  cta: { label: "Compare all boards", href: routes.compareBoards },
};

export const boards: Board[] = [
  { name: "CBSE", description: "Affiliation, NOC, land and staffing norms.", href: routes.cbse },
  { name: "ICSE", description: "CISCE affiliation requirements and setup.", href: routes.icse },
  { name: "IB", description: "Candidate status through full authorisation.", href: routes.ib },
  { name: "IGCSE", description: "Cambridge International recognition.", href: routes.igcse },
  { name: "State", description: "Recognition support across Indian states.", href: routes.stateBoard },
];

/* -------------------------------------------------------------------------- */
/* Case study & projects                                                      */
/* -------------------------------------------------------------------------- */

export const caseStudy = {
  tags: ["CBSE", "Day school", "[City, State]"],
  title: "[School name]: from bare land to a fully affiliated campus",
  challenge: "[One sentence on the promoter's starting point.]",
  outcome: "[One sentence on what was achieved.]",
  metrics: [
    { value: "[XX]", label: "Months to open" },
    { value: "[XXX]", label: "Students, year 1" },
    { value: "[XX]%", label: "Seats filled", accent: true },
  ],
  cta: { label: "Read the full story", href: routes.caseStudies },
  heroImage: {
    id: "IMG-15",
    spec: "1400×900 · 3:2",
    title: "Case-study school — front façade",
    description:
      "Completed school building from the main gate, name board visible, students arriving. Bright daylight, straight-on architectural angle.",
    alt: "Front façade of a school established with Grow Edu System",
  } satisfies ImageBrief,
  thumbnails: [
    { id: "IMG-16", spec: "", description: "Science lab in use", alt: "Science lab in use" },
    { id: "IMG-17", spec: "", description: "Library reading corner", alt: "School library reading corner" },
    { id: "IMG-18", spec: "", description: "Sports field / playground", alt: "School sports field" },
  ] satisfies ImageBrief[],
};

export const projectsIntro = {
  eyebrow: "Our projects",
  title: "Schools we've helped build across India",
  cta: { label: "View all projects", href: routes.projects },
};

export const projects: Project[] = [
  {
    name: "[School name]",
    meta: "IB · Residential · [City]",
    href: routes.projects,
    featured: true,
    image: {
      id: "IMG-19",
      spec: "900×1200 · Portrait",
      title: "Residential school — hostel block at dusk",
      description: "Boarding campus with warm window lights, landscaped path.",
    },
  },
  {
    name: "[School name]",
    meta: "CBSE · Day · [City]",
    href: routes.projects,
    image: { id: "IMG-20", spec: "900×600", description: "Primary wing — colourful corridor with student artwork." },
  },
  {
    name: "[School name]",
    meta: "ICSE · Day · [City]",
    href: routes.projects,
    image: { id: "IMG-21", spec: "900×600", description: "Smart classroom with students on tablets." },
  },
  {
    name: "[School name]",
    meta: "Cambridge · Day · [City]",
    href: routes.projects,
    image: { id: "IMG-22", spec: "900×600", description: "Auditorium during an annual day function." },
  },
  {
    name: "[School name]",
    meta: "State Board · Day · [City]",
    href: routes.projects,
    image: { id: "IMG-23", spec: "900×600", description: "School bus fleet lined up at the gate, morning." },
  },
];

/* -------------------------------------------------------------------------- */
/* Testimonials                                                               */
/* -------------------------------------------------------------------------- */

export const testimonialsIntro = {
  eyebrow: "Client stories",
  title: "Promoters who trusted us with their school",
};

export const testimonials: Testimonial[] = [
  {
    variant: "video",
    quote: "[Client quote — 2–3 sentences on the outcome they got, in their own words.]",
    name: "[Client name]",
    role: "Chairman, [School] · [City]",
    image: {
      id: "IMG-24",
      spec: "960×600 · or video still",
      title: "Client portrait at their school",
      description: "Chairman standing in front of the school they built with us. Optional 60-sec video testimonial.",
    },
  },
  {
    variant: "card",
    quote: "[Client quote about the feasibility study and DPR process.]",
    name: "[Client name]",
    role: "Trustee, [School] · [City]",
    image: { id: "IMG-25", spec: "headshot 200×200", description: "Client headshot" },
  },
  {
    variant: "card",
    quote: "[Client quote about admissions growth or school improvement results.]",
    name: "[Client name]",
    role: "Director, [School] · [City]",
    image: { id: "IMG-26", spec: "headshot 200×200", description: "Client headshot" },
  },
];

/* -------------------------------------------------------------------------- */
/* Platforms                                                                  */
/* -------------------------------------------------------------------------- */

export const platformsIntro = {
  eyebrow: "Our platforms",
  title: "Tools built for school growth",
  description: "Technology we built for our own projects — now available to every school.",
  screenshot: {
    id: "IMG-27",
    spec: "1600×1000 · UI screenshot",
    title: "School ERP dashboard screenshot",
    description:
      "Real product screen: attendance, fee collection and timetable widgets. Use demo data only — no real student names.",
    alt: "Grow Edu School ERP dashboard showing attendance and fee collection",
  } satisfies ImageBrief,
};

export const platforms: Platform[] = [
  { name: "School ERP", href: routes.erp, icon: LayoutDashboard, tone: "navy" },
  { name: "Teacher Recruitment", href: routes.recruitment, icon: Search, tone: "green" },
  { name: "School Real Estate", href: routes.realEstate, icon: Building2, tone: "navy" },
  { name: "Supplies Marketplace", href: routes.marketplace, icon: Package, tone: "green" },
  { name: "Website Builder", href: routes.websiteBuilder, icon: Globe, tone: "navy" },
];

/* -------------------------------------------------------------------------- */
/* Founder                                                                    */
/* -------------------------------------------------------------------------- */

export const founder = {
  eyebrow: "A note from our founder",
  quote:
    "We believe every child in India deserves a great school — and every promoter deserves a partner who has done this before.",
  name: "[Founder name]",
  role: "Founder & Director, Grow Edu System",
  cta: { label: "Meet the team", href: routes.team },
  portrait: {
    id: "IMG-28",
    spec: "1000×1250 · Portrait",
    title: "Founder portrait",
    description:
      "Professional but warm portrait of the founder, in a school corridor or classroom. Eye contact, natural smile.",
    alt: "Founder of Grow Edu System",
  } satisfies ImageBrief,
  teamNote: "IMG-29 · 4 team headshots, 200×200 each, same background and lighting",
};

/* -------------------------------------------------------------------------- */
/* Resources                                                                  */
/* -------------------------------------------------------------------------- */

export const resourcesIntro = {
  eyebrow: "Knowledge hub",
  title: "Guides for school promoters",
  cta: { label: "Visit the knowledge hub", href: routes.blog },
};

export const articles: Article[] = [
  {
    category: "School setup",
    readTime: "8 min read",
    title: "How to start a CBSE school in India: the complete checklist",
    href: `${routes.blog}/how-to-start-a-cbse-school-in-india`,
    image: { id: "IMG-30", spec: "1200×675", description: "Affiliation documents and paperwork flat-lay." },
  },
  {
    category: "Finance",
    readTime: "6 min read",
    title: "What does it really cost to build a school? A line-by-line breakdown",
    href: `${routes.blog}/cost-to-build-a-school-in-india`,
    image: { id: "IMG-31", spec: "1200×675", description: "Calculator, rupee notes and a building plan on a desk." },
  },
  {
    category: "Admissions",
    readTime: "5 min read",
    title: "7 ways to fill your first-year seats before opening day",
    href: `${routes.blog}/fill-first-year-school-admissions`,
    image: { id: "IMG-32", spec: "1200×675", description: "Parents touring a school with a student guide." },
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ & CTA                                                                  */
/* -------------------------------------------------------------------------- */

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions promoters ask us first",
  description: "Straight answers to the most common questions about starting a school in India.",
  helpTitle: "Still have questions?",
  helpText: "Message our team on WhatsApp — we reply within working hours.",
  helpCta: "WhatsApp us",
  cta: { label: "See all FAQs", href: routes.faq },
};

export const faqs: Faq[] = [
  {
    question: "I want to start a school — where do I begin?",
    answer:
      "Start with a feasibility study. It tells you whether your location has demand, which board fits, what land and building you need, and what the total investment looks like — before you commit capital.",
  },
  {
    question: "How long does CBSE affiliation take?",
    answer:
      "Plan for roughly 18–24 months from trust registration to opening, depending on your state, land status and building readiness. We map a timeline for your city in the first call.",
  },
  {
    question: "Do I need a trust or society to open a school?",
    answer:
      "Yes. In India a school must be run by a not-for-profit entity — a registered trust, society or Section 8 company. We help you choose and register the right structure.",
  },
  {
    question: "How much does it cost to set up a school?",
    answer:
      "It varies widely with land, city, board and capacity. Our free budget calculator gives a first estimate, and the DPR gives you a detailed, investor-ready figure.",
  },
  {
    question: "Can you help an existing school grow admissions?",
    answer:
      "Yes. Our improvement team audits enquiry-to-admission conversion, parent communication and your digital presence, then runs a structured admissions growth plan.",
  },
];

export const finalCta = {
  title: "Ready to build India's next great school?",
  description:
    "Book a free 30-minute call. Walk away with a clear view of cost, timeline and approvals for your city and board.",
  cta: { label: "Book Free Consultation", href: routes.consultation },
  reassurance: "No commitment · 30-minute call · Expert guidance",
  image: {
    id: "IMG-34",
    spec: "900×900 · cut-out preferred",
    title: "Friendly consultant with headset or laptop",
    description:
      "Waist-up shot of a Grow Edu consultant smiling toward the headline. Transparent PNG/WebP background works best here.",
    alt: "Grow Edu consultant ready to help",
  } satisfies ImageBrief,
};
