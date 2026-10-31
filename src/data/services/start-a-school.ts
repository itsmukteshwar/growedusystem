/** Content for /start-a-school — hub page for the "Start a School" section. */
import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import type { Faq } from "@/types";
import type { PageHeroData, PageMeta, TimelineStep } from "@/types/service";

export const meta: PageMeta = {
  path: routes.startSchool,
  title: "Start a School in India — Setup Consultants",
  description:
      "Start a school in India with one team: feasibility & DPR, trust registration, land, construction, CBSE, ICSE, IB or Cambridge affiliation, hiring and admissions.",
  keywords: ["start a school in India", "how to open a school", "school setup consultants", "school establishment services", "new school project"],
  updated: "2026-10-30",
};

export const hero: PageHeroData = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "Start a School", href: routes.startSchool },
  ],
  eyebrow: "Start a new school",
  title: "Start a School in India — From Idea to Inauguration",
  description:
    "One accountable team for every stage of your school project: feasibility and DPR, trust registration, land and building, board affiliation, hiring and your first admissions season.",
  primary: { label: "Book a free consultation", href: routes.consultation },
  secondary: { label: "See the journey", href: "#journey" },
  facts: [
    { value: "5", label: "Boards supported" },
    { value: "50+", label: "Schools established" },
    { value: "15+", label: "States served" },
    { value: "1 team", label: "Idea to opening" },
  ],
  image: brief({
    id: "SAS-01",
    file: "start-a-school/hub-hero-groundbreaking.webp",
    width: 1400,
    height: 1050,
    title: "Groundbreaking for a new school",
    alt: "School promoters and a consultant at the groundbreaking of a new school site in India",
    scene:
      "Groundbreaking ceremony for a new school on an open plot in India: a promoter family and an education consultant holding a ceremonial spade together beside a small decorated pooja setup with marigolds, a large site board with a simple illustrated building (no text) behind them, construction workers and an excavator in the distance, bright hopeful morning light",
  }),
};

export const journey: TimelineStep[] = [
  {
    title: "Feasibility study & DPR",
    timing: "Months 0–2",
    description: "Validate demand, choose the board, size and fees, and get a bank-ready project report.",
    link: { label: "Feasibility & DPR", href: routes.feasibility },
  },
  {
    title: "Trust or society registration",
    timing: "Months 1–3",
    description: "Set up the not-for-profit body that will own and run the school.",
  },
  {
    title: "Land, design & construction",
    timing: "Months 1–16",
    description: "Land that meets board norms, an area statement for your architect, approvals and phased construction.",
  },
  {
    title: "Recognition & board affiliation",
    timing: "Months 10–24",
    description: "State recognition, then affiliation with CBSE, CISCE, IB, Cambridge or your State Board.",
    link: { label: "CBSE school setup guide", href: routes.cbse },
  },
  {
    title: "Hiring, admissions & launch",
    timing: "Final 6 months",
    description: "Principal and teacher hiring, fee structure, admissions campaign and day-one operations.",
  },
];

export const boardCards = [
  { name: "CBSE", description: "Land norms, SARAS application, inspection and affiliation.", href: routes.cbse, live: true },
  { name: "ICSE / CISCE", description: "CISCE affiliation requirements and setup.", href: routes.icse, live: true },
  { name: "IB", description: "Candidate status through full authorisation.", href: routes.ib, live: true },
  { name: "Cambridge (IGCSE)", description: "Cambridge International registration.", href: routes.igcse, live: true },
  { name: "State Board", description: "Recognition support across Indian states.", href: routes.stateBoard, live: true },
];

export const faqs: Faq[] = [
  {
    question: "What is the first step to start a school in India?",
    answer:
      "Start with a feasibility study. It confirms there is demand in your location, recommends the board, size and fee level, and estimates the project cost — before you buy land or start construction.",
  },
  {
    question: "Who can start a school in India?",
    answer: "Schools must be run by a not-for-profit body — a registered trust, society or Section 8 company. Promoters set up this body first and the school operates under it.",
  },
  {
    question: "How long does it take to open a new school?",
    answer: "Most new schools take 18–24 months from idea to the first day of classes, depending on land, approvals, construction and the board's application calendar.",
  },
];

export const cta = {
  title: "Start your school with a plan, not a guess",
  description: "Book a free 30-minute call. Tell us your city, budget and preferred board, and we'll outline your first 90 days.",
  cta: { label: "Book a free consultation", href: routes.consultation },
  reassurance: "No commitment · 30-minute call · Expert guidance",
  image: brief({
    id: "SAS-02",
    file: "start-a-school/hub-cta-model-campus.webp",
    width: 900,
    height: 900,
    title: "Architectural model of a school campus",
    alt: "Promoter and consultant studying an architectural model of a planned school campus",
    scene:
      "Square close-up of hands of an Indian promoter and an education consultant pointing at a detailed white architectural scale model of a school campus with buildings, a sports field and tiny trees on a meeting-room table, soft daylight, shallow depth of field",
  }),
};
