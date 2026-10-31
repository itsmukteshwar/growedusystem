/**
 * Content for /start-a-school/compare-boards
 * Target searches: "CBSE vs ICSE vs IB vs IGCSE", "which board is best for a new school", "school board comparison India",
 * "best board to start a school in India", "CBSE vs state board".
 *
 * Figures are drawn from the individual board guides (checked October 2026). Update them together.
 */
import { Banknote, Compass, GraduationCap, MapPin, Users, Wallet } from "lucide-react";

import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import type { Faq, NavLink } from "@/types";
import type { IconItem, PageHeroData, PageMeta, RelatedLink, TableData } from "@/types/service";

export const meta: PageMeta = {
  path: routes.compareBoards,
  title: "CBSE vs ICSE vs IB vs Cambridge vs State Board — Which Board to Choose for a New School",
  description:
    "Compare CBSE, ICSE, IB, Cambridge IGCSE and State Boards for starting a school in India: who approves them, land and setup norms, timelines, costs, parent demand and how to choose the right board for your location.",
  keywords: [
    "CBSE vs ICSE vs IB vs IGCSE",
    "which board is best for a new school",
    "school board comparison India",
    "best board to start a school in India",
    "CBSE vs state board",
    "IB vs IGCSE",
    "school affiliation comparison",
  ],
  updated: "2026-10-31",
};

export const hero: PageHeroData = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "Start a School", href: routes.startSchool },
    { label: "Compare Boards", href: routes.compareBoards },
  ],
  eyebrow: "Start a school · Choosing a board",
  title: "CBSE vs ICSE vs IB vs Cambridge vs State Board",
  description:
    "Your board shapes your land, building, staff, fees and the parents you'll attract. Compare the five options side by side — from the promoter's point of view, not just the student's.",
  primary: { label: "Get a board recommendation", href: routes.consultation },
  secondary: { label: "Jump to the comparison", href: "#at-a-glance" },
  facts: [
    { value: "5", label: "Boards compared" },
    { value: "~29,000", label: "CBSE schools (largest)" },
    { value: "269", label: "IB World Schools in India" },
    { value: "1,000+", label: "Cambridge schools in India" },
  ],
  image: brief({
    id: "CMP-01",
    file: "start-a-school/compare-boards-hero.webp",
    width: 1400,
    height: 1050,
    title: "Promoters weighing board options",
    alt: "School promoters and a consultant comparing board options on printed charts at a meeting table",
    scene:
      "An Indian husband-and-wife school promoter couple in their 40s and an education consultant at a meeting table, comparing printed charts and a laptop showing graphs (no readable text), coffee cups, a large window with city view, thoughtful decision-making mood",
  }),
};

export const toc = [
  { id: "overview", label: "Why the board matters" },
  { id: "at-a-glance", label: "Boards at a glance" },
  { id: "setup", label: "Setup requirements compared" },
  { id: "fit", label: "Which board fits you" },
  { id: "factors", label: "How to decide" },
  { id: "faq", label: "FAQs" },
];

export const overview = [
  "Most comparisons of school boards are written for parents choosing a school. Promoters face a different question: which board will your target parents pay for, and what will it take — in land, money, staff and time — to get it?",
  "The board decides your approval route (affiliation, authorization or registration), how much land and building you need, the teachers you must hire, your fee ceiling and the competition you'll face. Choosing it after buying land is the most common — and most expensive — mistake new promoters make.",
];

export const atAGlance: TableData = {
  caption: "School boards in India compared at a glance",
  columns: ["", "CBSE", "ICSE / ISC", "IB", "Cambridge", "State Board"],
  rows: [
    ["Approved by", "Central Board of Secondary Education", "CISCE, New Delhi", "International Baccalaureate, Geneva", "Cambridge International Education, UK", "State education department & state board"],
    ["How a school joins", "Affiliation via SARAS", "Affiliation via CISCE portal", "Authorization after candidacy", "Registration after approval visit", "Permission & recognition under RTE"],
    ["Schools", "~29,000 (2024)", "2,500+ presenting ICSE candidates", "269 in India", "1,000+ in India", "The majority of Indian schools"],
    ["Curriculum style", "NCERT-based, exam-aligned", "Broad, English-rich, application-based", "Inquiry-based, international", "Subject-choice driven, international", "State syllabus, regional focus"],
    ["Medium", "English or Hindi", "English", "Usually English", "English", "Regional language or English"],
    ["Typical fee level", "Low to high", "Mid to high", "Premium", "High to premium", "Low to mid"],
    ["Best fit", "Most cities and towns", "Premium urban and mid-size markets", "Globally mobile, affluent families", "International & premium schools", "Tier-2/3 towns and rural areas"],
  ],
  note: "School counts from CBSE (2024 reports), CISCE statistics (2022), ibo.org and cambridgeinternational.org, checked October 2026.",
};

export const setupTable: TableData = {
  caption: "What it takes to set up a school under each board",
  columns: ["", "CBSE", "ICSE / ISC", "IB", "Cambridge", "State Board"],
  rows: [
    ["State recognition / NOC", "Required", "State NOC required", "Required", "Required", "Is the approval"],
    ["Land norms", "Fixed categories (1,600–6,000 sq m, 2026 rules)", "Certificate of Land; state norms apply", "State norms apply", "State norms apply", "Set by each state"],
    ["Inspection", "CBSE inspection committee", "CISCE inspection", "IB verification visit", "Cambridge approval visit", "District education officer"],
    ["Teacher requirements", "CBSE/NCTE qualifications, 50 hrs training/yr", "CISCE qualifications, English-medium", "IB category 1 workshops before authorization", "Cambridge training recommended", "NCTE qualifications and TET"],
    ["Typical time to open", "18–24 months", "18–30 months", "2–3 years to authorization", "18–24 months", "12–18 months"],
    ["Ongoing board fees", "Affiliation and exam fees", "Affiliation and exam fees", "Annual fee per programme", "Annual and per-candidate exam fees", "Exam fees"],
  ],
  note: "Indicative only. Exact requirements depend on your state and the classes you plan to run — see each board guide for details and sources.",
};

export const boardFit = [
  {
    name: "CBSE",
    href: routes.cbse,
    summary: "The safe, scalable default. Strong parent recognition everywhere, NCERT books and alignment with JEE and NEET.",
    choose: "Choose it if you want broad demand, predictable costs and easy transfers for families.",
  },
  {
    name: "ICSE / ISC",
    href: routes.icse,
    summary: "A premium Indian board with a reputation for English and depth across subjects.",
    choose: "Choose it if your market values English outcomes and you want to stand out from nearby CBSE schools.",
  },
  {
    name: "IB",
    href: routes.ib,
    summary: "An inquiry-based international framework with authorization by programme.",
    choose: "Choose it if you're targeting affluent, globally mobile families and can invest in teachers.",
  },
  {
    name: "Cambridge IGCSE",
    href: routes.igcse,
    summary: "International qualifications with wide subject choice, often combined with IB.",
    choose: "Choose it for an international school with flexible pathways to Indian and overseas universities.",
  },
  {
    name: "State Board",
    href: routes.stateBoard,
    summary: "Affordable, local and in the regional language, with approvals in one state.",
    choose: "Choose it for tier-2/3 towns and rural areas, or as a first step before upgrading.",
  },
];

export const factors: IconItem[] = [
  { icon: Users, title: "Who your parents are", description: "Income, aspirations, mobility and the language they want their children taught in." },
  { icon: MapPin, title: "Your location and competition", description: "Which boards are oversupplied nearby, and where there's a gap for a quality school." },
  { icon: Wallet, title: "The fee your market will bear", description: "International boards need premium fees to cover their costs." },
  { icon: Banknote, title: "Your capital and land", description: "Land size and budget can rule a board in or out before anything else." },
  { icon: GraduationCap, title: "Teacher availability", description: "Whether you can hire and retain board-experienced teachers in your city." },
  { icon: Compass, title: "Your long-term plan", description: "Starting with one board and adding or upgrading later is common — if planned for." },
];

export const faqs: Faq[] = [
  {
    question: "Which board is best for starting a new school in India?",
    answer:
      "There is no single best board. CBSE suits most cities and towns; ICSE suits premium markets that value English; IB and Cambridge suit affluent, international families; State Boards suit affordable schools in smaller towns. A feasibility study tells you which your target parents will choose and pay for.",
  },
  {
    question: "Which board is cheapest to set up?",
    answer:
      "State Board schools usually need the least investment, followed by CBSE. ICSE is similar to CBSE in setup cost but needs English-medium staff. IB and Cambridge have the highest costs — international board fees, teacher training and resources — and need premium fees to be viable.",
  },
  {
    question: "Which board takes the longest to get?",
    answer:
      "IB authorization usually takes the longest — 2–3 years, including at least one year of trial implementation for PYP and MYP. CBSE and ICSE typically take 18–30 months from idea to affiliation, including construction. State Board schools can often open in 12–18 months.",
  },
  {
    question: "Can one school offer more than one board?",
    answer:
      "Yes, in some combinations. A common international pathway is IB PYP, Cambridge IGCSE and IB Diploma. Combining an Indian board with an international one in the same school is possible in some cases, but each board has its own rules — check before you plan a dual-curriculum campus.",
  },
  {
    question: "Can I change boards later?",
    answer:
      "Yes. Many schools start with a State Board and move to CBSE or ICSE, or add international programmes. Designing the campus to the stricter board's norms from day one avoids expensive rebuilding.",
  },
  {
    question: "Do all boards need state recognition?",
    answer:
      "Yes. Every private school in India needs recognition under the RTE Act and state rules. CBSE and ICSE affiliation, IB authorization and Cambridge registration all sit on top of state recognition — they don't replace it.",
  },
];

export const related: RelatedLink[] = [
  { label: "Feasibility study & DPR", href: routes.feasibility, description: "The data-led way to choose your board, size and fees." },
  { label: "Start a school: the full journey", href: routes.startSchool, description: "Every stage from idea to inauguration." },
  { label: "Talk to a board specialist", href: routes.contact, description: "Get a free board recommendation for your location." },
];

export const references: NavLink[] = [
  { label: "CBSE — SARAS affiliation portal", href: "https://saras.cbse.gov.in/" },
  { label: "CISCE — School Affiliation", href: "https://cisce.org/?p=2669" },
  { label: "International Baccalaureate — The IB in India", href: "https://ibo.org/about-the-ib/the-ib-by-country-and-territory/i/india/" },
  { label: "Cambridge International — Become a Cambridge school in India", href: "https://www.cambridgeinternational.org/cambridge-international-in-india/become-a-cambridge-international-school-in-india/" },
];

export const cta = {
  title: "Not sure which board is right for your school?",
  description: "Book a free 30-minute call. Tell us your location, land and budget — we'll recommend the board that fits.",
  cta: { label: "Get a board recommendation", href: routes.consultation },
  reassurance: "Unbiased advice across all five boards · Free · No commitment",
  image: brief({
    id: "CMP-02",
    file: "start-a-school/compare-boards-cta.webp",
    width: 900,
    height: 900,
    title: "Consultant advising a promoter",
    alt: "Education consultant explaining options to a school promoter over a laptop",
    scene:
      "Square photo of a friendly Indian female education consultant in her 30s explaining options on a laptop to a male school promoter in his 50s, both smiling, a bright modern office with plants, warm natural light, trusting mood",
  }),
};
