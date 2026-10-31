/**
 * Content for /start-a-school/feasibility-dpr
 * Target searches: "school feasibility study", "DPR for school", "detailed project report for school",
 * "school project report India", "feasibility report for CBSE school".
 */
import {
  Banknote,
  Building2,
  ClipboardCheck,
  Compass,
  FileSpreadsheet,
  Gauge,
  GraduationCap,
  Landmark,
  LineChart,
  MapPinned,
  Scale,
  ShieldAlert,
  Users,
  Wallet,
} from "lucide-react";

import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import type { Faq } from "@/types";
import type { IconItem, PageHeroData, PageMeta, RelatedLink, TableData, TimelineStep } from "@/types/service";

export const meta: PageMeta = {
  path: routes.feasibility,
  title: "School Feasibility Study & DPR in India",
  description:
      "Test demand, fees and costs before you build. Our school feasibility study and DPR give promoters and banks a clear, investor-ready plan for a new school.",
  keywords: [
    "school feasibility study",
    "school feasibility report",
    "DPR for school",
    "detailed project report for school",
    "school project report",
    "school financial model",
    "feasibility study for CBSE school",
    "school business plan India",
  ],
  updated: "2026-10-30",
};

export const hero: PageHeroData = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "Start a School", href: routes.startSchool },
    { label: "Feasibility & DPR", href: routes.feasibility },
  ],
  eyebrow: "Start a school · Step 1",
  title: "School Feasibility Study & Detailed Project Report (DPR)",
  description:
    "Know whether your school will succeed before you invest a rupee in construction. We study demand in your catchment, recommend the right board, size and fee level, and build a bank-ready DPR with 10-year financials.",
  primary: { label: "Book a feasibility consultation", href: routes.consultation },
  secondary: { label: "What's inside a DPR", href: "#dpr-contents" },
  facts: [
    { value: "6–8 weeks", label: "Typical turnaround" },
    { value: "10 years", label: "Financial projections" },
    { value: "Go / no-go", label: "Clear recommendation" },
    { value: "Bank-ready", label: "For lenders & investors" },
  ],
  image: brief({
    id: "FDPR-01",
    file: "start-a-school/feasibility-hero-presentation.webp",
    width: 1400,
    height: 1050,
    title: "Consultant presenting a feasibility study",
    alt: "Education consultant presenting a school feasibility study with charts to a group of school promoters",
    scene:
      "An Indian education consultant in a navy blazer presenting a school feasibility study to three school promoters seated around a boardroom table, a large wall screen behind her showing simple bar and line charts in navy and green (no readable text), printed reports and a laptop on the table, promoters leaning in with interest, bright modern meeting room",
  }),
};

export const toc = [
  { id: "why", label: "Why start with feasibility" },
  { id: "difference", label: "Feasibility study vs DPR" },
  { id: "who", label: "Who needs it" },
  { id: "scope", label: "What the study covers" },
  { id: "dpr-contents", label: "What's inside the DPR" },
  { id: "financials", label: "The numbers we model" },
  { id: "process", label: "Process & timeline" },
  { id: "deliverables", label: "What you receive" },
  { id: "faq", label: "FAQs" },
];

export const why = {
  title: "Why every new school should start with a feasibility study",
  paragraphs: [
    "Building a school is a long commitment: crores of rupees in land and construction, a 15–20 year horizon, and a reputation that takes years to build. The decisions that make or break a school — where it is, which board it follows, how big it is in year one, and what it charges — are almost impossible to reverse once the building is up.",
    "A feasibility study tests those decisions against real data before you commit. It tells you how many families in your catchment can afford your fee, which schools you will compete with, how quickly seats are likely to fill, and when the project breaks even. If the numbers don't work, you find out on paper — not after construction.",
  ],
  questions: [
    "Is there enough demand from families who can afford the fee we have in mind?",
    "Which board — CBSE, ICSE, IB, Cambridge or State — fits this location best?",
    "How large should the school be on day one, and how should it grow?",
    "What will the project cost, and when will it break even?",
    "Does the land meet board norms, and which approvals are needed?",
  ],
  image: brief({
    id: "FDPR-02",
    file: "start-a-school/feasibility-field-research.webp",
    width: 1200,
    height: 800,
    title: "On-ground catchment research",
    alt: "Education consultant talking to parents outside a residential society as part of a school catchment survey",
    scene:
      "An Indian education consultant holding a tablet talking with two parents outside the gate of a residential housing society in a growing Indian suburb, apartment towers and a tree-lined road behind them, children with school bags nearby, late-afternoon light, natural conversational moment",
  }),
};

export const comparison: TableData = {
  caption: "Difference between a school feasibility study and a detailed project report (DPR)",
  columns: ["", "Feasibility study", "Detailed Project Report (DPR)"],
  rows: [
    ["Main question", "Should we build this school, and in what form?", "How exactly will we build, fund and run it?"],
    ["Focus", "Demand, competition, board, fee level, location risk", "Project cost, building plan, funding, 10-year financials"],
    ["Outcome", "A go / no-go recommendation with the right size and positioning", "A detailed, bank-ready plan to execute the project"],
    ["Used by", "Promoters and their family or board", "Banks, NBFCs, investors, trustees and your architect"],
    ["When", "Before buying land or finalising the site", "After the go decision, before construction and funding"],
  ],
  note: "We usually deliver both together: the feasibility findings become the foundation chapters of your DPR.",
};

export const audiences: IconItem[] = [
  { icon: GraduationCap, title: "First-time school promoters", description: "Turn an idea into a validated plan before you commit capital or buy land." },
  { icon: MapPinned, title: "Landowners", description: "Find out whether your land suits a school, which board fits it and what it is worth as a school project." },
  { icon: Landmark, title: "Investors & education groups", description: "Compare micro-markets and sites objectively before adding a new campus." },
  { icon: Building2, title: "Existing schools expanding", description: "Test a new branch, a senior secondary upgrade or a switch of board." },
  { icon: Banknote, title: "Promoters seeking a loan", description: "Get the detailed project report lenders ask for, with projections that stand up to scrutiny." },
  { icon: Users, title: "Trusts & societies", description: "Give trustees an independent, numbers-first basis for a major decision." },
];

export const scope: IconItem[] = [
  { icon: Users, title: "Catchment & demand analysis", description: "School-age population, household incomes, housing growth and travel time within the realistic catchment of your site." },
  { icon: Compass, title: "Competition mapping", description: "Every relevant school nearby: board, fees, seat capacity, occupancy, results and parent perception." },
  { icon: GraduationCap, title: "Board recommendation", description: "Which board — or combination — best matches local demand, your vision and your budget." },
  { icon: Wallet, title: "Fee positioning", description: "A fee level and structure the market will accept, benchmarked against comparable schools." },
  { icon: Scale, title: "Land & norms check", description: "Your plot measured against the chosen board's land, play-area and building norms." },
  { icon: Gauge, title: "Capacity & phasing", description: "How many grades and sections to open in year one, and when to add the rest." },
  { icon: ClipboardCheck, title: "Regulatory pathway", description: "Trust or society structure, state recognition, NOC and board affiliation steps for your state." },
  { icon: ShieldAlert, title: "Risk assessment", description: "What could go wrong — demand, competition, approvals, cost overruns — and how to reduce it." },
];

export const dprChapters: TableData = {
  caption: "Chapters of a detailed project report (DPR) for a school",
  columns: ["DPR chapter", "What it covers"],
  rows: [
    ["Executive summary", "The project on one page: vision, location, board, capacity, cost, funding and key returns."],
    ["Promoter & legal structure", "Background of the promoters and the trust, society or Section 8 company that will run the school."],
    ["Market & demand study", "Catchment demographics, competitor benchmarking and the demand estimate from the feasibility study."],
    ["Academic plan", "Board, grades, curriculum approach, section sizes, student–teacher ratio and co-curricular plan."],
    ["Infrastructure plan", "Area statement against board norms, building programme, labs, library, sports and phase-wise construction."],
    ["Project cost", "Land, construction, furniture, labs, IT, transport, security, pre-opening and contingency costs."],
    ["Operating costs", "Salaries, utilities, maintenance, transport, marketing and administration, year by year."],
    ["Revenue model", "Fee structure, enrolment ramp-up by grade, transport and other income."],
    ["Financial projections", "10-year profit and loss, cash flow and balance sheet."],
    ["Funding plan", "Promoter contribution, loans or investment, and the repayment schedule."],
    ["Returns & ratios", "Break-even year, payback period, IRR, NPV and debt service coverage ratio (DSCR)."],
    ["Sensitivity analysis", "What happens if enrolment is slower, fees lower or costs higher than planned."],
    ["Implementation timeline", "Month-by-month plan from approvals and construction to the first admissions season."],
    ["Risks & mitigation", "Key project risks and the actions that reduce each one."],
  ],
};

export const dprImage = brief({
  id: "FDPR-03",
  file: "start-a-school/dpr-printed-report.webp",
  width: 1200,
  height: 800,
  title: "Printed DPR on a desk",
  alt: "A bound detailed project report for a school lying open on a desk with charts and tables",
  scene:
    "A thick, professionally bound detailed project report lying open on a dark wooden boardroom table, pages showing a site layout drawing on one side and financial tables with a navy and green bar chart on the other (all text blurred and unreadable), a fountain pen and a pair of reading glasses resting beside it, soft window light, shallow depth of field",
});

export const financials = {
  intro:
    "Lenders and investors look for projections they can trust. Our model is built bottom-up — from sections, teachers and fee bands — so every number can be traced and tested.",
  items: [
    { icon: LineChart, title: "Enrolment ramp-up", description: "Grade-by-grade admissions over 10 years, based on catchment demand and competitor occupancy." },
    { icon: Building2, title: "Capital cost by phase", description: "What you spend before opening and in each later phase of construction." },
    { icon: Users, title: "Staffing & salaries", description: "Teachers and support staff by year, linked to sections and board norms." },
    { icon: Gauge, title: "Break-even & payback", description: "The year the school covers its operating costs, and when the investment is recovered." },
    { icon: Banknote, title: "Loan servicing", description: "Repayment schedule and DSCR, the figures banks check first." },
    { icon: FileSpreadsheet, title: "Scenarios", description: "Best, base and worst cases so you can see the downside before it happens." },
  ] satisfies IconItem[],
  image: brief({
    id: "FDPR-04",
    file: "start-a-school/dpr-financial-model.webp",
    width: 1200,
    height: 800,
    title: "Financial model on a laptop",
    alt: "Laptop showing a school financial model with charts, beside a notebook and calculator",
    scene:
      "Over-the-shoulder view of an Indian finance consultant working on a laptop showing a spreadsheet financial model with a rising green line chart and navy bar chart (numbers blurred and unreadable), a notebook with handwritten calculations and a calculator beside the laptop, modern office desk, soft daylight",
  }),
};

export const process: TimelineStep[] = [
  {
    title: "Kick-off & site visit",
    timing: "Week 1",
    description: "We understand your vision, budget and constraints, and visit the site or shortlisted plots.",
    points: ["Vision, board preference and budget discussion", "Land documents and site visit", "Agreed scope and timeline"],
  },
  {
    title: "Field research",
    timing: "Weeks 2–4",
    description: "On-ground work in your catchment — not desk estimates.",
    points: ["Catchment and household survey", "Visits to competing schools and fee benchmarking", "Conversations with parents and local stakeholders", "Land check against board norms"],
  },
  {
    title: "Planning & financial model",
    timing: "Weeks 4–6",
    description: "We turn the research into a school plan and a 10-year model.",
    points: ["Board, capacity and phasing", "Fee structure", "Project and operating costs", "Projections, returns and scenarios"],
  },
  {
    title: "Report & presentation",
    timing: "Weeks 6–8",
    description: "You receive the findings, a clear recommendation and the bank-ready DPR.",
    points: ["Draft review meeting", "Final feasibility report and DPR", "Presentation to your family, board, bank or investors"],
    link: { label: "Next: CBSE school setup", href: routes.cbse },
  },
];

export const deliverables = {
  items: [
    "Feasibility report with a clear go / no-go recommendation",
    "Bank-ready detailed project report (PDF)",
    "Editable 10-year financial model (Excel)",
    "Area statement checked against board norms",
    "Competitor map and fee benchmark",
    "Phase-wise implementation roadmap",
    "Presentation session for your family, board, bank or investors",
    "30 days of follow-up questions after delivery",
  ],
  image: brief({
    id: "FDPR-05",
    file: "start-a-school/dpr-handover-meeting.webp",
    width: 1200,
    height: 800,
    title: "DPR handover to promoters",
    alt: "School promoters shaking hands with a consultant after receiving their detailed project report",
    scene:
      "Two Indian school promoters, a husband and wife in their 40s, shaking hands with a smiling education consultant across a meeting table after receiving a bound project report, the report and a tablet on the table, bright office with a large window, warm celebratory mood",
  }),
};

export const faqs: Faq[] = [
  {
    question: "What is a feasibility study for a school?",
    answer:
      "A school feasibility study tests whether a proposed school can succeed in a specific location. It looks at demand from families in the catchment, competing schools and their fees, the right board and fee level, land and building norms, approvals, project cost and the expected break-even point, and ends with a go / no-go recommendation.",
  },
  {
    question: "What is a DPR for a school?",
    answer:
      "A DPR (detailed project report) is the full execution plan for a school project: legal structure, academic plan, infrastructure and area statement, project and operating costs, fee and enrolment assumptions, 10-year financial projections, funding plan, break-even and risk analysis. Banks, investors and trustees use it to evaluate and fund the project.",
  },
  {
    question: "How long does a school feasibility study and DPR take?",
    answer:
      "Typically 6–8 weeks from kick-off. It can be quicker for a single, well-documented site and longer when we compare several locations or when land documents are still being finalised.",
  },
  {
    question: "Do banks need a DPR to give a loan for a school?",
    answer:
      "Most banks and NBFCs ask for a detailed project report with financial projections before they sanction a loan for school construction. Our DPR is structured the way lenders review projects, including the repayment schedule and debt service coverage ratio.",
  },
  {
    question: "Can you do a feasibility study if I don't have land yet?",
    answer:
      "Yes. We can identify the most promising micro-markets in your city, or compare two or three shortlisted plots, so you buy land that suits a school instead of fitting a school onto unsuitable land.",
  },
  {
    question: "How much does a school feasibility study cost?",
    answer:
      "It depends on the city, the number of sites and the size of the project. After a free first call we share a fixed quote, so there are no surprises.",
  },
  {
    question: "Does the DPR help with CBSE or other board affiliation?",
    answer:
      "The DPR is not itself a board requirement, but we build its infrastructure plan and area statement against your chosen board's norms, so the campus you build is designed to pass the affiliation inspection.",
  },
  {
    question: "What if the study says the school isn't viable?",
    answer:
      "Then the study has done its job and protected your capital. We will show you what would make it work — a different site, a smaller first phase, a different board or fee level, or starting with a pre-school — or recommend not proceeding.",
  },
];

export const related: RelatedLink[] = [
  { label: "How to start a CBSE school", href: routes.cbse, description: "Land norms, infrastructure, documents and the SARAS affiliation process, step by step." },
  { label: "Start a school: the full journey", href: routes.startSchool, description: "Every stage from idea to inauguration, and where we can help." },
  { label: "Talk to a consultant", href: routes.contact, description: "Share your city, budget and board — we'll map your next 90 days, free." },
];

export const cta = {
  title: "Find out if your school will work — before you build it",
  description: "Book a free 30-minute call. We'll discuss your location, budget and board, and outline what your feasibility study should answer.",
  cta: { label: "Book a feasibility consultation", href: routes.consultation },
  reassurance: "Free first call · Fixed quote · 6–8 week turnaround",
  image: brief({
    id: "FDPR-06",
    file: "start-a-school/feasibility-cta-consultant.webp",
    width: 900,
    height: 900,
    title: "Consultant reviewing a site plan",
    alt: "Education consultant smiling while reviewing a school site plan on a tablet",
    scene:
      "Square photo of a smiling Indian male education consultant in his 30s wearing a navy blazer, holding a tablet that shows a simple school site plan, standing on an empty plot of land with a few trees and a distant residential skyline behind him, warm late-afternoon light",
  }),
};
