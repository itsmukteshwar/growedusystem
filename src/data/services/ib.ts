/**
 * Content for /start-a-school/ib
 * Target searches: "how to start an IB school in India", "IB authorization process", "IB candidate school",
 * "IB school setup consultant", "PYP MYP DP authorization", "IB school requirements India".
 *
 * Facts checked in October 2026 against ibo.org (authorization process, fees and services, India country page).
 * The IB updates its fees and workshop requirements each year — re-verify before each update.
 */
import {
  BadgeCheck,
  BookOpenCheck,
  Building,
  ClipboardList,
  GraduationCap,
  HardHat,
  Landmark,
  Lightbulb,
  Route,
  UserCheck,
} from "lucide-react";

import type { BoardGuideData } from "@/components/sections/service/BoardGuide";
import { routes } from "@/config/navigation";
import { boardGuideToc } from "@/data/services/board-guide";
import { brief } from "@/data/images";

export const page: BoardGuideData = {
  serviceName: "IB World School setup and authorization consultancy",
  meta: {
    path: routes.ib,
    title: "How to Start an IB School in India (2026 Guide) — Authorization, PYP, MYP & DP",
    description:
      "Step-by-step guide to becoming an IB World School in India: choosing PYP, MYP, DP or CP, the consideration and candidacy phases, teacher training, the verification visit, costs and timelines — with consultants who guide you to authorization.",
    keywords: [
      "how to start an IB school in India",
      "IB authorization process",
      "IB candidate school",
      "IB school setup consultant",
      "IB World School India",
      "PYP MYP DP authorization",
      "IB school requirements",
      "IB verification visit",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "Start a School", href: routes.startSchool },
      { label: "IB School Setup", href: routes.ib },
    ],
    eyebrow: "Start a school · International Baccalaureate",
    title: "How to Start an IB School in India",
    description:
      "IB schools aren't 'affiliated' — they are authorized, after a candidacy period that tests your philosophy, policies, teachers and resources. This guide walks through every phase, from first interest to your IB World School certificate.",
    primary: { label: "Book an IB setup consultation", href: routes.consultation },
    secondary: { label: "See the authorization phases", href: "#process" },
    facts: [
      { value: "269", label: "IB World Schools in India" },
      { value: "4", label: "Programmes: PYP, MYP, DP, CP" },
      { value: "1 yr+", label: "Trial implementation (PYP/MYP)" },
      { value: "2–3 yrs", label: "Typical path to authorization" },
    ],
    image: brief({
      id: "IB-01",
      file: "start-a-school/ib-hero-inquiry-class.webp",
      width: 1400,
      height: 1050,
      title: "Inquiry-based IB classroom",
      alt: "Students collaborating on an inquiry project in a modern IB classroom in India",
      scene:
        "A modern Indian international school classroom with flexible furniture, small groups of students aged 9 to 11 collaborating around tables on a hands-on inquiry project with models, sticky notes and laptops, a teacher crouching to listen to one group, walls with student work (no readable text), bright daylight, energetic and curious mood",
    }),
  },
  toc: boardGuideToc("Programme choices"),
  titles: {
    why: "Why choose the IB for your new school?",
    eligibility: "What the IB looks for before candidacy",
    requirements: "Choosing your IB programmes",
    infrastructure: "Campus and resource requirements for an IB school",
    staff: "Staff, leadership and training requirements",
    process: "The IB authorization process, phase by phase",
    documents: "Documents and policies for IB authorization",
    timeline: "How long does IB authorization take?",
    delays: "Common reasons IB authorization gets delayed",
    help: "How Grow Edu System helps you become an IB World School",
    faq: "Starting an IB school: common questions",
  },
  why: {
    paragraphs: [
      "The International Baccalaureate (IB) is a Geneva-based non-profit foundation offering four programmes for students aged 3 to 19. India has 269 IB World Schools, with the Diploma Programme (193 schools) and Primary Years Programme (179 schools) the most widely offered.",
      "IB schools attract globally mobile families and parents who value inquiry-based, internationally minded education. The IB Diploma is recognised by universities worldwide and by the Association of Indian Universities. Because authorization depends on philosophy and practice — not just buildings — it rewards promoters willing to invest in teachers and leadership.",
    ],
    pros: [
      "Global recognition and premium positioning",
      "Strong university outcomes in India and abroad",
      "Inquiry-based learning that parents seek out",
      "Freedom to design curriculum within IB frameworks",
    ],
    considerations: [
      "Highest fees and running costs of any board",
      "Substantial, ongoing teacher training investment",
      "Multi-year candidacy before you're authorized",
      "Annual programme fees payable to the IB",
    ],
  },
  eligibility: {
    intro: "Before a school can apply for candidacy, the IB expects it to show it can deliver a programme sustainably.",
    items: [
      {
        icon: Landmark,
        title: "Legal standing and state recognition",
        description:
          "A school run by a registered trust, society or Section 8 company, recognised (or in the process of recognition) by the state education department.",
      },
      {
        icon: Lightbulb,
        title: "Alignment with the IB mission",
        description:
          "Leadership and governing body commitment to the IB's philosophy of inquiry, international-mindedness and the learner profile.",
      },
      {
        icon: BadgeCheck,
        title: "Financial sustainability",
        description: "A budget that covers IB fees, professional development, resources and staffing for at least the candidacy period and beyond.",
      },
      {
        icon: UserCheck,
        title: "A committed leadership team",
        description:
          "A head of school and an appointed IB programme coordinator who will complete the IB's 'Leading the learning' workshop early in candidacy.",
      },
    ],
  },
  requirements: {
    intro: "Most new schools start with one or two programmes and add others once the first is authorized. Each programme is authorized separately.",
    table: {
      caption: "The four IB programmes and how Indian schools use them",
      columns: ["Programme", "Ages / grades", "What it is", "Common in India as"],
      rows: [
        ["Primary Years Programme (PYP)", "3–12 (Nursery–Grade 5)", "Transdisciplinary, inquiry-based framework", "Junior school programme for new IB schools (179 schools)"],
        ["Middle Years Programme (MYP)", "11–16 (Grades 6–10)", "Concept-based framework across eight subject groups", "Middle school; often paired with Cambridge IGCSE at Grades 9–10 (85 schools)"],
        ["Diploma Programme (DP)", "16–19 (Grades 11–12)", "Two-year pre-university programme with external exams", "Senior school; the most widely offered IB programme (193 schools)"],
        ["Career-related Programme (CP)", "16–19 (Grades 11–12)", "Career-focused pathway combining DP courses with a career study", "Smaller niche option (42 schools)"],
      ],
      note: "School counts from the IB's India country page (ibo.org), checked October 2026. A school may offer several programmes, so counts overlap.",
    },
    callout: {
      title: "Plan your Class 10 and 12 pathway early",
      body: "Many Indian IB schools run IB alongside another board (often Cambridge IGCSE or CBSE) for some grades. Decide your full Nursery-to-Grade-12 pathway in the feasibility stage so state recognition and campus planning cover it.",
    },
  },
  infrastructure: {
    intro:
      "The IB doesn't set fixed room sizes like Indian boards, but its programme standards require learning spaces and resources that support inquiry, collaboration and the curriculum you design. Your state's recognition norms still apply to land and building.",
    essentials: [
      "Flexible classrooms that support group and project work",
      "A well-resourced library with a qualified librarian at the centre of inquiry",
      "Science labs, design / makerspace and ICT resources for MYP and DP",
      "Arts, music and drama spaces for the arts subject groups",
      "Sports and outdoor learning spaces",
      "Reliable internet and devices for research and IB online systems",
      "Spaces for counselling, university guidance and learning support",
      "Full building, fire and child-safety compliance under state rules",
    ],
  },
  staff: [
    "A head of school with international curriculum experience",
    "A dedicated IB coordinator for each programme",
    "Required IB category 1 workshops for teachers before authorization",
    "At least one DP teacher per subject group trained in a subject workshop — with all DP teachers expected to train",
    "Theory of Knowledge (TOK) teacher and CAS coordinator for the DP",
    "A university and careers counsellor",
    "Learning-support and language-support staff",
    "Time in the timetable for collaborative planning",
  ],
  staffImage: brief({
    id: "IB-02",
    file: "start-a-school/ib-teacher-workshop.webp",
    width: 1200,
    height: 800,
    title: "Teacher professional development",
    alt: "Teachers in a collaborative IB planning workshop with chart paper and laptops",
    scene:
      "A group of eight Indian teachers of mixed ages in a bright staff workshop room, collaboratively planning a unit around a table covered with chart paper, sticky notes and laptops, a facilitator pointing at a whiteboard diagram (no readable text), engaged and collegial mood",
  }),
  process: {
    intro: "The IB's authorization process has three broad phases: consideration, candidacy and authorization. Here is how it fits into building a new school.",
    steps: [
      {
        title: "Feasibility, programme choice & school setup",
        timing: "Months 0–6",
        description: "Confirm demand for IB at your fee level, choose programmes, register the sponsoring body and begin land, building and state recognition.",
        link: { label: "Read about feasibility & DPR", href: routes.feasibility },
      },
      {
        title: "Consideration phase",
        timing: "Months 3–9",
        description: "Study the IB programme standards and practices, appoint leadership, budget for IB costs and prepare your application for candidacy.",
      },
      {
        title: "Application for candidacy",
        timing: "When the school is ready",
        description: "Submit the application and fee. Once accepted, the school becomes an IB candidate school and is assigned a consultant.",
        points: ["Coordinator completes 'Leading the learning' within six months of applying", "Candidacy fee is billed annually until you request authorization"],
      },
      {
        title: "Candidacy & trial implementation",
        timing: "At least 1 academic year (PYP/MYP)",
        description: "Develop policies and curriculum, train staff and run the programme on a trial basis, with guidance from your IB consultant.",
      },
      {
        title: "Application for authorization",
        timing: "End of candidacy",
        description: "Submit evidence that all programme requirements are met, with all required professional development completed.",
      },
      {
        title: "Verification visit",
        timing: "After application",
        description: "IB representatives visit the school, meet leadership, teachers, students and parents, and verify implementation.",
      },
      {
        title: "Authorization as an IB World School",
        timing: "Years 2–3",
        description: "Once authorized, the school may offer the programme and pays an annual school fee per programme. Regular programme evaluation follows.",
      },
    ],
  },
  documents: {
    intro: "IB authorization is evidence-based. Alongside your legal documents, you will build and submit a set of school policies and curriculum documents.",
    items: [
      "Registration documents of the trust, society or company",
      "State recognition / NOC documents for the school",
      "Land and building documents with safety certificates",
      "Five-year budget covering IB fees, training and resources",
      "Language policy",
      "Assessment policy",
      "Inclusion / special educational needs policy",
      "Academic integrity policy",
      "Admissions policy",
      "Curriculum plans and units of inquiry or unit planners",
      "Professional development records and workshop certificates",
      "Organisational chart and coordinator job description",
    ],
  },
  timeline: {
    caption: "Typical timeline to start an IB school",
    columns: ["Stage", "Typical duration", "What decides the pace"],
    rows: [
      ["Feasibility, programme choice and legal setup", "3–6 months", "Market data, trust registration and land"],
      ["Campus construction and state recognition", "9–18 months", "Plan approvals, funding and state rules"],
      ["Consideration phase", "6–12 months", "Leadership hiring and readiness to apply"],
      ["Candidacy and trial implementation", "At least 1 academic year (PYP/MYP)", "Training, policies and curriculum development"],
      ["Authorization and verification visit", "Several months", "IB review and visit scheduling"],
    ],
    note: "Most new schools reach authorization 2–3 years after starting the IB process. Many open first under state recognition (and sometimes another board), then add IB programmes as they are authorized.",
  },
  delays: [
    { title: "Leadership churn", description: "Losing the head of school or IB coordinator mid-candidacy resets momentum and training." },
    { title: "Training not completed", description: "Required category 1 workshops not completed before the application for authorization." },
    { title: "Policies written but not lived", description: "Language, assessment and inclusion policies that don't match what visitors see in classrooms." },
    { title: "Underestimated budget", description: "IB fees, workshops and resources not funded through candidacy." },
    { title: "Weak library and resources", description: "A library or ICT set-up that can't support inquiry across subjects." },
    { title: "Board pathway not planned", description: "No clear plan for Class 10 and 12 credentials alongside IB programmes." },
  ],
  help: {
    intro: "Use this guide to plan — or work with a team that understands both Indian regulations and IB standards.",
    body: "IB authorization is as much about people and practice as it is about buildings. We set up the school legally and physically under Indian rules, then help leadership build the policies, training plan and evidence the IB looks for — so the verification visit sees a school already living its programme.",
    items: [
      { icon: Route, title: "Programme strategy", description: "Which programmes to start with, and how they fit with Indian board credentials." },
      { icon: Landmark, title: "Legal & state recognition", description: "Trust setup, land, building approvals and state NOC." },
      { icon: Building, title: "Campus planning", description: "Learning spaces designed for inquiry, labs, arts and library." },
      { icon: UserCheck, title: "Leadership hiring", description: "Head of school and IB coordinators with international experience." },
      { icon: GraduationCap, title: "Training plan", description: "Workshop scheduling so every requirement is met on time." },
      { icon: ClipboardList, title: "Policies & evidence", description: "Language, assessment, inclusion and integrity policies drafted with your team." },
      { icon: HardHat, title: "Mock verification visit", description: "A rehearsal with leadership, teachers, students and parents." },
      { icon: BookOpenCheck, title: "After authorization", description: "Programme evaluation readiness and adding further programmes." },
    ],
  },
  helpImage: brief({
    id: "IB-03",
    file: "start-a-school/ib-leadership-planning.webp",
    width: 1200,
    height: 800,
    title: "Leadership planning session",
    alt: "School head, IB coordinator and consultant reviewing policy documents together",
    scene:
      "An Indian head of school, a female IB coordinator and an education consultant seated at a round table in a modern office, reviewing printed policy documents and a laptop together, a bookshelf behind them, natural window light, thoughtful and collaborative mood",
  }),
  faqs: [
    {
      question: "Does the IB 'affiliate' schools like CBSE?",
      answer:
        "No. The IB authorizes schools to offer specific programmes after a candidacy period and verification visit. A school is authorized separately for each programme — PYP, MYP, DP or CP.",
    },
    {
      question: "How many IB schools are there in India?",
      answer: "According to the IB's India country page, India has 269 IB World Schools. 193 offer the Diploma Programme, 179 the PYP, 85 the MYP and 42 the Career-related Programme.",
    },
    {
      question: "How long does it take to become an IB World School?",
      answer:
        "Typically 2–3 years from starting the consideration phase. PYP and MYP schools must complete at least one academic year of trial implementation during candidacy before applying for authorization.",
    },
    {
      question: "What does IB authorization cost?",
      answer:
        "The IB charges an application fee, an annual candidacy and consultation fee, an authorization fee and, once authorized, an annual school fee per programme — plus teacher workshop costs. The IB sets the amounts and currency during application; we build them into your project budget.",
    },
    {
      question: "Does an IB school in India need state recognition?",
      answer:
        "Yes. IB authorization does not replace Indian regulation. The school must be run by a not-for-profit body and hold recognition from the state education department under its rules.",
    },
    {
      question: "Is the IB Diploma recognised by Indian universities?",
      answer:
        "Yes. The Association of Indian Universities recognises the IB Diploma for admission to Indian universities, and it is recognised by universities worldwide. Check each university's specific subject requirements.",
    },
    {
      question: "Can we start with one IB programme and add others later?",
      answer: "Yes — most schools do. Many start with the PYP or DP and add programmes as the school grows. Each new programme goes through its own authorization process.",
    },
    {
      question: "What training do IB teachers need?",
      answer:
        "Requirements vary by programme. For example, all PYP faculty take the 'Making the PYP happen' workshop, all MYP teachers take 'Developing the MYP', and DP teachers take subject workshops — all before the application for authorization.",
    },
  ],
  references: [
    { label: "International Baccalaureate — The authorization process: candidacy", href: "https://www.ibo.org/become-an-ib-school/the-authorization-process/candidacy/" },
    { label: "International Baccalaureate — Fees and services", href: "https://ibo.org/become-an-ib-school/fees-and-services/" },
    { label: "International Baccalaureate — The IB in India", href: "https://ibo.org/about-the-ib/the-ib-by-country-and-territory/i/india/" },
  ],
  related: [
    { label: "Compare school boards", href: routes.compareBoards, description: "CBSE, ICSE, IB, Cambridge and State Board side by side." },
    { label: "Cambridge IGCSE school setup", href: routes.igcse, description: "Often paired with IB at Grades 9–10." },
    { label: "Feasibility study & DPR", href: routes.feasibility, description: "Test whether IB fees will work in your market." },
  ],
  cta: {
    title: "Build an IB World School on solid foundations",
    description: "Book a free 30-minute call. We'll discuss programme choices, budget and a realistic path to authorization.",
    cta: { label: "Book an IB setup consultation", href: routes.consultation },
    reassurance: "Programme strategy · Indian compliance + IB readiness · Named consultant",
    image: brief({
      id: "IB-04",
      file: "start-a-school/ib-cta-exhibition.webp",
      width: 900,
      height: 900,
      title: "Student exhibition",
      alt: "Students presenting their inquiry projects to parents at a school exhibition",
      scene:
        "Square photo of a PYP-style student exhibition in an Indian international school hall, students aged 10 to 11 presenting colourful project boards and models to interested parents and teachers, warm lighting, proud and lively mood",
    }),
  },
};
