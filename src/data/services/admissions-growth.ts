/**
 * Content for /school-improvement/admissions-growth
 * Target searches: "school admission marketing", "how to increase school admissions", "school marketing agency India",
 * "school admission campaign", "school digital marketing", "admission counselling for schools".
 *
 * Compliance references (RTE Act s.12–13, ASCI code, TRAI TCCCPR 2018, DPDP Act 2023) checked October 2026.
 */
import {
  CalendarDays,
  Globe,
  HeartHandshake,
  MapPin,
  MessagesSquare,
  MousePointerClick,
  Search,
  Sparkles,
} from "lucide-react";

import type { ManagementGuideData } from "@/components/sections/service/ManagementGuide";
import { routes } from "@/config/navigation";
import { brief } from "@/data/images";

export const page: ManagementGuideData = {
  serviceName: "School admissions growth and marketing services",
  meta: {
    path: routes.admissions,
    title: "School Admission Marketing & Growth Services",
    description:
      "Grow school admissions with a proven funnel: local SEO, digital ads, open days, enquiry CRM and counselling — measured by cost per admission and retention.",
    keywords: [
      "school admission marketing",
      "how to increase school admissions",
      "school marketing agency India",
      "school admission campaign",
      "school digital marketing",
      "admission counselling for schools",
      "school enrolment growth",
      "school lead generation",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "School Improvement", href: routes.improvement },
      { label: "Admissions Growth", href: routes.admissions },
    ],
    eyebrow: "School improvement · Admissions",
    title: "School Admissions Growth Services",
    description:
      "More enquiries, more campus visits and more admissions — from a funnel you can measure. We combine school-specific marketing with the counselling and follow-up that actually convert parents, then help you keep the families you win.",
    primary: { label: "Plan your admissions season", href: routes.consultation },
    secondary: { label: "See the funnel", href: "#specialised" },
    facts: [
      { value: "Enquiry → seat", label: "Full-funnel approach" },
      { value: "8", label: "Growth levers" },
      { value: "Weekly", label: "Funnel reporting in season" },
      { value: "Retention", label: "Built in, not bolted on" },
    ],
    image: brief({
      id: "ADM-01",
      file: "school-improvement/admissions-hero-open-day.webp",
      width: 1400,
      height: 1050,
      title: "School open day",
      alt: "Parents and children touring a school on a busy admissions open day",
      scene:
        "A lively admissions open day at a modern Indian school, families with young children aged 4 to 8 being guided through a bright corridor by a smiling admissions counsellor, a student volunteer in uniform showing a science display, balloons in school colours, warm daylight, welcoming and busy mood",
    }),
  },
  toc: [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Growth levers" },
    { id: "specialised", label: "The admissions funnel" },
    { id: "models", label: "Packages" },
    { id: "process", label: "How it works" },
    { id: "kpis", label: "Metrics we track" },
    { id: "compliance", label: "Ethical admissions" },
    { id: "signs", label: "Signs you need help" },
    { id: "faq", label: "FAQs" },
  ],
  eyebrows: {
    scope: "Growth levers",
    models: "Packages",
    kpis: "Metrics",
    compliance: "Ethical & compliant",
    signs: "Is it time?",
  },
  titles: {
    overview: "Why admissions need a system, not just ads",
    scope: "Eight levers we use to grow school admissions",
    specialised: "The admissions funnel we build for your school",
    models: "Choose the admissions support you need",
    process: "How an admissions growth engagement works",
    kpis: "Metrics we track — weekly during admissions season",
    compliance: "Ethical, compliant school marketing",
    signs: "Signs your admissions need help",
    faq: "School admissions growth: common questions",
  },
  overview: {
    paragraphs: [
      "Parents choose a school slowly and carefully. They search online, read reviews, ask other parents, visit two or three campuses and compare fees — often over several months. A school that only runs ads during the admission season catches a small part of that journey and loses the rest.",
      "We build the whole system: a clear reason to choose your school, visibility where parents search, fast and warm responses to every enquiry, campus visits that impress, counselling that answers real worries, and follow-up until a decision is made. Then we protect your hard-won enrolment by improving retention.",
    ],
    benefits: {
      title: "What you get",
      items: [
        "A clear positioning parents can repeat to others",
        "More qualified enquiries from your catchment",
        "Higher visit-to-admission conversion",
        "A lower cost per admission, tracked weekly",
        "Better re-enrolment and more referrals",
      ],
    },
    fit: {
      title: "Who it's for",
      items: [
        "New schools launching their first admissions",
        "Schools with empty seats in key grades",
        "Schools facing new competition nearby",
        "Schools upgrading to senior secondary",
        "Groups opening additional campuses",
      ],
    },
  },
  scope: {
    intro: "Each lever is planned around your catchment, fee level and the grades where you most need students.",
    items: [
      {
        icon: Sparkles,
        title: "Positioning & brand story",
        description: "Market and competitor research to define why parents should choose you — then a message, photography and proof points to match.",
      },
      {
        icon: Globe,
        title: "Website & landing pages",
        description: "Fast, mobile-first admission pages with clear fees information, virtual tours and simple enquiry forms.",
      },
      {
        icon: Search,
        title: "Search & SEO",
        description: "Ranking for searches like 'best CBSE school near me' with content, technical SEO and a well-managed Google Business Profile.",
      },
      {
        icon: MousePointerClick,
        title: "Digital advertising",
        description: "Targeted Google and Meta campaigns by locality, age of child and season — optimised for admissions, not just clicks.",
      },
      {
        icon: MessagesSquare,
        title: "Enquiry management & CRM",
        description: "Every enquiry logged, answered quickly by phone or WhatsApp, and followed up on a set cadence until a decision.",
      },
      {
        icon: CalendarDays,
        title: "Open days & campus tours",
        description: "Scripted tours, open days, demo classes and events that show the school at its best.",
      },
      {
        icon: MapPin,
        title: "Local & community outreach",
        description: "Pre-school and society partnerships, local events and on-ground activity in your catchment.",
      },
      {
        icon: HeartHandshake,
        title: "Retention & referrals",
        description: "Parent satisfaction tracking, early-warning on withdrawals and a structured referral programme.",
      },
    ],
  },
  specialised: {
    eyebrow: "Enquiry to enrolment",
    intro: "Most schools lose more admissions after the enquiry than before it. These are the stages we set up and measure.",
    image: brief({
      id: "ADM-02",
      file: "school-improvement/admissions-counselling.webp",
      width: 1200,
      height: 800,
      title: "Admissions counselling",
      alt: "Admissions counsellor talking with parents and their child in a welcoming school office",
      scene:
        "A friendly Indian admissions counsellor in her 30s talking with a young couple and their 5-year-old daughter in a bright, welcoming school admissions office, a school brochure and tablet on the table, children's artwork on the wall (no readable text), warm and reassuring mood",
    }),
    items: [
      "Awareness: parents in your catchment know your school exists",
      "Enquiry: easy forms, calls and WhatsApp, answered within hours",
      "Visit: every enquiry invited to a campus tour or open day",
      "Counselling: questions on fees, safety and academics answered honestly",
      "Application: a simple, fair process with clear timelines",
      "Admission: confirmation, fee payment and a warm welcome kit",
      "Retention: onboarding and regular check-ins through the first year",
    ],
  },
  models: {
    intro: "Start with an audit of your current funnel, or hand us the full admissions season.",
    table: {
      caption: "Admissions growth packages compared",
      columns: ["Package", "Best for", "What's included", "Duration"],
      rows: [
        ["Admissions audit", "Understanding where admissions are lost", "Funnel data review, mystery-parent enquiries, competitor scan, action plan", "3–4 weeks"],
        ["Admission season campaign", "Filling seats for the next session", "Positioning, ads, landing pages, open days, CRM and counsellor training", "4–6 months"],
        ["Year-round growth partner", "Sustained enrolment growth", "Everything in the campaign, plus SEO, content, referrals and retention programme", "12 months, renewable"],
        ["New school launch", "First admissions for a new campus", "Brand, website, pre-launch campaign, events and counselling team set-up", "6–9 months before opening"],
      ],
      note: "Advertising spend is billed at cost and controlled by you. We agree targets for enquiries, visits and admissions before any campaign goes live.",
    },
  },
  process: {
    intro: "A typical engagement starts 6–9 months before the session begins, so you reach parents while they are still deciding.",
    steps: [
      {
        title: "Funnel audit",
        timing: "Weeks 1–3",
        description: "Review past enquiry and admission data, test your response with mystery-parent enquiries, and study competing schools.",
        link: { label: "About our school audit", href: routes.audit },
      },
      {
        title: "Strategy & targets",
        timing: "Weeks 3–5",
        description: "Agree positioning, target grades and seats, budget and weekly targets for enquiries, visits and admissions.",
      },
      {
        title: "Build the assets",
        timing: "Weeks 4–10",
        description: "Messaging, photography, landing pages, Google Business Profile, CRM set-up, tour scripts and counsellor training.",
      },
      {
        title: "Launch the campaign",
        timing: "Admission season",
        description: "Digital ads, local outreach and open days go live, with every enquiry tracked in the CRM.",
      },
      {
        title: "Optimise weekly",
        timing: "Throughout the season",
        description: "Weekly funnel reviews shift budget to what works and fix leaks in follow-up and conversion.",
        points: ["Weekly funnel dashboard", "Counsellor call reviews", "Budget reallocation by channel"],
      },
      {
        title: "Retain & refer",
        timing: "After admission",
        description: "Onboarding for new families, satisfaction surveys and a referral programme for the next cycle.",
      },
    ],
  },
  kpis: {
    intro: "We report on admissions, not vanity metrics. These numbers are reviewed with you every week in season.",
    table: {
      caption: "Admissions funnel metrics we track",
      columns: ["Metric", "What it tells you"],
      rows: [
        ["Enquiries by source", "Which channels bring parents — and which waste budget"],
        ["Cost per enquiry", "Efficiency of advertising and outreach"],
        ["Response time", "How fast enquiries are answered — a major driver of conversion"],
        ["Enquiry-to-visit rate", "Whether follow-up turns interest into a campus visit"],
        ["Visit-to-admission rate", "How well tours and counselling convert"],
        ["Cost per admission", "The real cost of each new student"],
        ["Re-enrolment rate", "How many families stay for the next session"],
        ["Referral admissions", "How many new families come from existing parents"],
      ],
    },
  },
  compliance: {
    intro: "Admissions marketing in India has rules. We keep your campaigns ethical and compliant — which also builds the trust that converts parents.",
    items: [
      "No screening of children or parents and no capitation fee for admissions covered by Section 13 of the RTE Act — and your state's rules for pre-primary",
      "25% entry-level seats for children from weaker and disadvantaged groups — Section 12(1)(c), RTE Act",
      "Fee information consistent with your state's fee-regulation rules and filings",
      "Truthful claims about results, facilities and rankings, in line with the ASCI advertising code",
      "Calls and SMS that respect TRAI's commercial communication rules and DND preferences",
      "Parent and child data collected with consent under the Digital Personal Data Protection Act, 2023",
      "Board-specific rules on how affiliation status and results are publicised",
    ],
    callout: {
      title: "Honest marketing converts better",
      body: "Parents compare notes. Exaggerated claims win a visit but lose the admission — and the referral. We build campaigns on proof you can stand behind.",
    },
  },
  signs: [
    { title: "Seats are empty in key grades", description: "Entry grades or senior classes running well below capacity." },
    { title: "Enquiries don't convert", description: "Plenty of enquiries, but few campus visits or admissions." },
    { title: "Ad spend with no clear return", description: "Money spent on hoardings, pamphlets or ads without knowing what worked." },
    { title: "A new competitor opened", description: "A new school nearby is attracting the families you used to get." },
    { title: "Families leave after a year", description: "Withdrawals at the end of the session cancel out new admissions." },
    { title: "Poor online reviews", description: "Few or negative Google reviews, and an outdated website." },
  ],
  faqs: [
    {
      question: "How can a school increase admissions?",
      answer:
        "By working on the whole funnel: a clear reason to choose the school, visibility where parents search, fast replies to every enquiry, campus visits that impress, honest counselling, steady follow-up and strong retention of existing families. Ads alone rarely fix low admissions.",
    },
    {
      question: "When should we start our admission campaign?",
      answer:
        "Many parents start researching schools six to nine months before the session begins. Start positioning, SEO and your Google Business Profile early, then run paid campaigns and open days in the main admission window.",
    },
    {
      question: "Do you run Google and Facebook ads for schools?",
      answer:
        "Yes. We plan, run and optimise Google Search, Meta (Facebook and Instagram) and YouTube campaigns targeted by locality and child age. Ad spend is billed at cost and stays under your control.",
    },
    {
      question: "How do you measure success?",
      answer:
        "Against agreed targets for enquiries, visits and admissions, and by cost per admission and re-enrolment rate. You see a weekly dashboard throughout the admission season.",
    },
    {
      question: "Can you train our admissions counsellors?",
      answer:
        "Yes. Counsellor training covers enquiry handling, campus tour scripts, answering questions on fees and safety, follow-up cadence and using the CRM. We also review recorded calls with consent.",
    },
    {
      question: "Do you guarantee a number of admissions?",
      answer:
        "No honest partner can guarantee admissions — results depend on your school, fees and market too. We agree realistic targets based on the audit and can link part of our fee to achieving them.",
    },
    {
      question: "Can you help a new school get its first admissions?",
      answer:
        "Yes. Our new-school launch package starts six to nine months before opening, building the brand, website and pre-launch campaign so you open with a strong first batch.",
    },
    {
      question: "Can schools hold admission tests or interviews?",
      answer:
        "Section 13 of the RTE Act prohibits screening procedures for children and parents, and capitation fees, for admissions the Act covers. Several states apply similar rules to nursery and pre-primary admissions. We design admission processes that follow the Act and your state's rules.",
    },
  ],
  related: [
    { label: "School audit", href: routes.audit, description: "Find the gaps in your school before you market it." },
    { label: "Teacher training", href: routes.training, description: "Great teaching is your strongest admissions message." },
    { label: "School Website Builder", href: routes.websiteBuilder, description: "A school website built to convert parents." },
  ],
  cta: {
    title: "Fill your seats with families who stay",
    description: "Book a free 30-minute call. Tell us your seats, grades and timeline, and we'll outline an admissions plan.",
    cta: { label: "Plan your admissions season", href: routes.consultation },
    reassurance: "Full-funnel · Weekly reporting · Ethical marketing",
    image: brief({
      id: "ADM-03",
      file: "school-improvement/admissions-cta-welcome.webp",
      width: 900,
      height: 900,
      title: "Welcoming a new family",
      alt: "Principal welcoming a new student and her parents on admission day",
      scene:
        "Square photo of a smiling Indian school principal shaking hands with a young father while the mother holds their excited 5-year-old daughter wearing a new school uniform, a welcome kit bag in hand, bright school reception area, joyful mood",
    }),
  },
};
