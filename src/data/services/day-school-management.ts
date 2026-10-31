/**
 * Content for /school-management/day-school
 * Target searches: "day school management services", "school management company India", "school operations consultant",
 * "school management consultancy", "outsource school management", "school administration services".
 *
 * Compliance references (POSH, POCSO, FSSAI school food regulations, MoE safety guidelines, DPDP Act) checked October 2026.
 */
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

import type { ManagementGuideData } from "@/components/sections/service/ManagementGuide";
import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import { engagementModels, managementToc } from "@/data/services/management-guide";

export const page: ManagementGuideData = {
  serviceName: "Day school management services",
  meta: {
    path: routes.dayManagement,
    title: "Day School Management Services in India",
    description:
      "Professional day school management: academics, teacher hiring, fees and finance, admissions, transport and compliance — with monthly reporting to your trust.",
    keywords: [
      "day school management services",
      "school management company India",
      "school operations consultant",
      "school management consultancy",
      "outsource school management",
      "school administration services",
      "CBSE school management",
      "school turnaround consultant",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "School Management", href: routes.management },
      { label: "Day School Management", href: routes.dayManagement },
    ],
    eyebrow: "School management · Day schools",
    title: "Day School Management Services",
    description:
      "Academics, people, finance, admissions and compliance — run as one system, by one accountable team. We help trusts and promoters run day schools that parents trust, teachers stay with and boards can audit with confidence.",
    primary: { label: "Book a management consultation", href: routes.consultation },
    secondary: { label: "See engagement models", href: "#models" },
    facts: [
      { value: "8", label: "Functions under one team" },
      { value: "3", label: "Engagement models" },
      { value: "Monthly", label: "Dashboard to your trust" },
      { value: "You", label: "Retain ownership & control" },
    ],
    image: brief({
      id: "DAY-01",
      file: "school-management/day-hero-morning.webp",
      width: 1400,
      height: 1050,
      title: "A well-run school morning",
      alt: "Principal greeting students and parents at the gate of a busy Indian day school in the morning",
      scene:
        "Morning arrival at a well-run Indian day school: a confident principal in a formal saree greeting students at the gate, orderly lines of yellow school buses behind, parents dropping children off, a staff member with a tablet marking arrivals, students aged 6 to 15 in neat uniforms, bright morning light, calm and organised mood",
    }),
  },
  toc: managementToc("The school day"),
  titles: {
    overview: "What day school management really means",
    scope: "Everything we manage in a day school",
    specialised: "A school day that runs on time, every day",
    models: "Choose how involved you want us to be",
    process: "How a management engagement works",
    kpis: "What we measure — and report to you every month",
    compliance: "Compliance we keep on track",
    signs: "Signs your school needs management support",
    faq: "Day school management: common questions",
  },
  overview: {
    paragraphs: [
      "A day school is a daily operation with hundreds of moving parts: timetables, substitutions, buses, fee collections, parent messages, inspections and exams — all while the real work of teaching and learning has to stay at the centre. When any part slips, parents notice first.",
      "Our day school management service gives your trust a professional operating team. We put in place the leadership, systems and routines that make a school predictable, then measure them every month. You keep ownership, the finances and the final say; we take responsibility for making the school run well.",
    ],
    benefits: {
      title: "What you get",
      items: [
        "Experienced academic and operational leadership",
        "Standard operating procedures for every function",
        "Transparent finances and fee collection",
        "A monthly dashboard your trust can act on",
        "Steady admissions growth and parent retention",
      ],
    },
    fit: {
      title: "Who it's for",
      items: [
        "Promoters opening their first school",
        "Trusts whose founders can't run daily operations",
        "Schools with falling enrolment or results",
        "Groups adding a second or third campus",
        "Schools preparing for affiliation or inspection",
      ],
    },
  },
  scope: {
    intro: "Take the full service or only the functions you need. Each one comes with clear SOPs, an owner and measurable targets.",
    items: [
      {
        icon: BookOpenCheck,
        title: "Academic management",
        description: "Curriculum planning, timetables, lesson-plan review, assessment calendars, results analysis and remedial programmes.",
      },
      {
        icon: UserCog,
        title: "Leadership & HR",
        description: "Principal and teacher recruitment, appraisal, salary structures, service rules, training plans and retention.",
      },
      {
        icon: Calculator,
        title: "Finance & fee management",
        description: "Annual budgets, fee structures within state rules, collections, vendor control and monthly MIS for the trust.",
      },
      {
        icon: Megaphone,
        title: "Admissions & marketing",
        description: "Admission funnel, open days, digital marketing, counselling scripts and parent referral programmes.",
      },
      {
        icon: Users,
        title: "Parent engagement",
        description: "PTMs, communication calendars, feedback surveys and a clear escalation process for concerns.",
      },
      {
        icon: Bus,
        title: "Transport & facilities",
        description: "Route planning, bus safety audits, GPS tracking, housekeeping, maintenance schedules and security.",
      },
      {
        icon: ShieldCheck,
        title: "Safety & compliance",
        description: "Board and state compliance calendars, child protection, fire and building safety, statutory HR registers.",
      },
      {
        icon: MonitorSmartphone,
        title: "Technology & ERP",
        description: "School ERP for attendance, fees, exams and communication — set up, trained and actually used.",
      },
    ],
  },
  specialised: {
    eyebrow: "Daily operations",
    intro: "Great schools feel calm because the routines behind them are designed. These are the daily systems we put in place.",
    image: brief({
      id: "DAY-02",
      file: "school-management/day-staff-briefing.webp",
      width: 1200,
      height: 800,
      title: "Morning staff briefing",
      alt: "Principal leading a short morning briefing with teachers in a school staff room",
      scene:
        "A short morning staff briefing in a bright Indian school staff room, a principal standing beside a whiteboard with a weekly plan grid (no readable text), twelve teachers of mixed ages seated and standing with diaries and coffee cups, attentive and purposeful mood, daylight from large windows",
    }),
    items: [
      "Morning arrival, attendance and absentee-follow-up routine",
      "Substitution system so no class is left unsupervised",
      "Daily duty roster for gates, corridors, breaks and dispersal",
      "Lesson-plan and notebook checks on a weekly cycle",
      "Bus departure and arrival checks with parent notifications",
      "Same-day logging and resolution of parent concerns",
      "Weekly leadership meeting against the school dashboard",
    ],
  },
  models: {
    intro: "Every school is different. Choose the level of support that fits your team today — and change it as you grow.",
    table: engagementModels,
  },
  process: {
    intro: "Every engagement begins with understanding the school as it is, then moves to measurable change.",
    steps: [
      {
        title: "Diagnostic audit",
        timing: "Weeks 1–4",
        description: "A structured review of academics, staffing, finances, admissions, safety and compliance, with classroom observations and parent and staff surveys.",
        link: { label: "About our school audit", href: routes.audit },
      },
      {
        title: "Management plan & targets",
        timing: "Weeks 4–6",
        description: "A written plan with priorities, owners, budgets and targets for enrolment, results, fee collection and staff retention, agreed with your trust.",
      },
      {
        title: "Leadership & team set-up",
        timing: "Months 2–3",
        description: "Recruit or strengthen the principal and key coordinators, clarify roles and set up the leadership meeting rhythm.",
      },
      {
        title: "Systems & SOPs",
        timing: "Months 2–6",
        description: "Roll out SOPs, the ERP and the school dashboard, function by function, with training for every staff member.",
      },
      {
        title: "Run, measure, improve",
        timing: "Ongoing",
        description: "Monthly dashboards and reviews with the trust, termly academic reviews and an annual plan for the next session.",
        points: ["Monthly MIS and dashboard", "Quarterly trust or board review", "Annual budget and admissions plan"],
      },
    ],
  },
  kpis: {
    intro: "What gets measured gets managed. These are the indicators on your monthly dashboard.",
    table: {
      caption: "Key indicators we track for day schools",
      columns: ["Area", "What we track", "Why it matters"],
      rows: [
        ["Admissions", "Enquiries, visits, conversion rate and new admissions by grade", "Shows whether the school is growing and where the funnel leaks"],
        ["Retention", "Students re-enrolling for the next session", "The most honest measure of parent satisfaction"],
        ["Finance", "Fee collection against demand, outstanding dues, cost per student", "Keeps the school financially sustainable"],
        ["Academics", "Assessment results, learning gaps, board results", "Evidence that teaching is working"],
        ["People", "Teacher attendance, vacancies, training hours, attrition", "Stable, trained teams drive every other result"],
        ["Operations", "Student attendance, transport incidents, open complaints", "Daily reliability that parents notice"],
        ["Compliance", "Upcoming renewals, certificates and audit actions", "No surprises at inspection time"],
      ],
    },
  },
  compliance: {
    intro: "A day school answers to its board, the state and several national laws. We maintain a compliance calendar so nothing lapses.",
    items: [
      "Board affiliation norms and mandatory public disclosures (for example, CBSE's website disclosures)",
      "State recognition renewals, fee-regulation filings and RTE 25% seat process",
      "UDISE+ data submission every year",
      "Child protection and mandatory reporting under the POCSO Act, 2012",
      "Internal Committee under the POSH Act, 2013 for workplaces with 10 or more employees",
      "Fire safety, building safety and sanitation certificates kept current",
      "School-bus safety under state transport rules and board guidelines",
      "Canteen food safety under FSSAI's 2020 regulations for food in schools",
      "EPF, ESI and other statutory HR registers",
      "Student data handling in line with the Digital Personal Data Protection Act, 2023",
    ],
    callout: {
      title: "Rules vary by state and board",
      body: "Fee regulation, recognition renewal and transport rules differ from state to state. Our compliance calendar is built for your state, board and campus.",
    },
  },
  signs: [
    { title: "Enrolment is flat or falling", description: "Fewer enquiries, lower conversion or more students leaving at the end of the year." },
    { title: "High teacher turnover", description: "Good teachers leaving mid-year and constant hiring just to stand still." },
    { title: "Fee dues keep rising", description: "Collections lag, concessions are informal and nobody owns the follow-up." },
    { title: "The founder is the system", description: "Every decision waits for one person, and the school stalls when they're away." },
    { title: "Parent complaints repeat", description: "The same issues — transport, communication, homework — come back every term." },
    { title: "An inspection is coming", description: "Affiliation, extension or state inspection due, with gaps in records or facilities." },
  ],
  faqs: [
    {
      question: "What is day school management?",
      answer:
        "Day school management is running a school's academics and operations as a professional service — leadership, teachers, finance, admissions, transport, safety and compliance — on behalf of the trust or society that owns it.",
    },
    {
      question: "Will we lose control of our school?",
      answer:
        "No. Your trust or society keeps ownership, control of bank accounts and final decision rights. We work to an agreed plan and budget, and report to you every month.",
    },
    {
      question: "Can you manage only some functions, like admissions or HR?",
      answer:
        "Yes. Many schools start with one or two functions — often admissions, academics or finance — under an advisory or co-management model, and expand the scope later.",
    },
    {
      question: "Do you manage CBSE, ICSE and State Board schools?",
      answer: "Yes. We manage schools on all major boards, and build academic calendars, assessments and compliance around each board's requirements.",
    },
    {
      question: "How are management fees structured?",
      answer:
        "Fees depend on the scope, school size and model. Common structures are a fixed monthly retainer or a retainer plus performance-linked components tied to agreed targets. We share a proposal after the diagnostic audit.",
    },
    {
      question: "How soon will we see results?",
      answer:
        "Operational improvements — routines, communication, fee follow-up — usually show within the first term. Enrolment and academic results typically improve over one to two admission cycles.",
    },
    {
      question: "Do you recruit the principal?",
      answer:
        "In co-management and full management engagements we recruit, induct and mentor the principal with your approval. Under the advisory model we coach your existing leadership.",
    },
    {
      question: "Can you manage a new school from day one?",
      answer: "Yes. For promoters who have used our Start a School service, management can begin before opening — covering hiring, systems and the first admissions season.",
    },
  ],
  related: [
    { label: "Boarding school management", href: routes.boardingManagement, description: "Residential life, hostels, food and 24×7 care." },
    { label: "School audit", href: routes.audit, description: "An independent diagnostic of where your school stands." },
    { label: "Admissions growth", href: routes.admissions, description: "Fill seats with a predictable admissions funnel." },
  ],
  cta: {
    title: "Run your day school like the best schools in your city",
    description: "Book a free 30-minute call. Tell us about your school and we'll suggest where professional management would make the biggest difference.",
    cta: { label: "Book a management consultation", href: routes.consultation },
    reassurance: "You keep ownership · Monthly reporting · One accountable team",
    image: brief({
      id: "DAY-03",
      file: "school-management/day-cta-dashboard.webp",
      width: 900,
      height: 900,
      title: "Reviewing the school dashboard",
      alt: "Trust members and a consultant reviewing a school performance dashboard on a laptop",
      scene:
        "Square photo of two Indian trust members in their 50s and an education consultant reviewing colourful charts on a laptop (no readable text) in a school boardroom, one trustee nodding with approval, warm natural light, confident and trusting mood",
    }),
  },
};
