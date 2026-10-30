/**
 * Content for /start-a-school/cbse
 * Target searches: "how to start a CBSE school", "CBSE affiliation process", "CBSE land requirement 2026",
 * "CBSE school setup", "CBSE affiliation consultant", "documents required for CBSE affiliation".
 *
 * Regulatory facts below were checked in October 2026 against CBSE notices and news reports.
 * CBSE changes its norms often — re-verify before each content update (see `references`).
 */
import {
  BookOpenCheck,
  Building,
  ClipboardList,
  FileCheck2,
  HardHat,
  Landmark,
  LayoutGrid,
  MapPinned,
  Route,
  UserCheck,
  Users,
} from "lucide-react";

import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import type { Faq, NavLink } from "@/types";
import type { IconItem, PageHeroData, PageMeta, RelatedLink, TableData, TimelineStep } from "@/types/service";

export const meta: PageMeta = {
  path: routes.cbse,
  title: "How to Start a CBSE School in India (2026 Guide) — Land, Process & Documents",
  description:
    "Step-by-step guide to starting a CBSE school: 2026 land norms, infrastructure and staff requirements, documents, the SARAS affiliation process and timelines — with consultants who handle it end to end.",
  keywords: [
    "how to start a CBSE school",
    "CBSE affiliation process",
    "CBSE land requirement 2026",
    "CBSE school setup",
    "CBSE affiliation consultant",
    "documents required for CBSE affiliation",
    "SARAS CBSE affiliation",
    "CBSE affiliation bye-laws",
  ],
  updated: "2026-10-30",
};

export const hero: PageHeroData = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "Start a School", href: routes.startSchool },
    { label: "CBSE School Setup", href: routes.cbse },
  ],
  eyebrow: "Start a school · CBSE",
  title: "How to Start a CBSE School in India",
  description:
    "Everything you need to open a CBSE-affiliated school — land and building norms, staff, documents and the SARAS application — updated for the 2026 land rules. Read the guide, or let our CBSE specialists run the whole process for you.",
  primary: { label: "Book a CBSE setup consultation", href: routes.consultation },
  secondary: { label: "Check land requirements", href: "#land" },
  facts: [
    { value: "2026", label: "Land norms covered" },
    { value: "SARAS", label: "Online application" },
    { value: "18–24 mo", label: "Typical idea-to-opening" },
    { value: "40", label: "Max students per section" },
  ],
  image: brief({
    id: "CBSE-01",
    file: "start-a-school/cbse-hero-school-campus.webp",
    width: 1400,
    height: 1050,
    title: "Modern CBSE day school campus",
    alt: "Students arriving at a modern CBSE day school campus in India in the morning",
    scene:
      "A modern Indian day school campus in the morning: a clean three-storey building in cream with brick accents and large windows, a wide entrance porch, a green lawn and young trees, uniformed students aged 6 to 16 walking in with school bags and a parent waving at the gate, bright clear daylight, welcoming and aspirational",
  }),
};

export const toc = [
  { id: "why-cbse", label: "Why CBSE" },
  { id: "eligibility", label: "Who can open a CBSE school" },
  { id: "land", label: "Land requirements (2026)" },
  { id: "infrastructure", label: "Infrastructure" },
  { id: "staff", label: "Staff & academics" },
  { id: "process", label: "Step-by-step process" },
  { id: "documents", label: "Documents checklist" },
  { id: "timeline", label: "How long it takes" },
  { id: "delays", label: "Common reasons for delay" },
  { id: "how-we-help", label: "How we help" },
  { id: "faq", label: "FAQs" },
];

export const whyCbse = {
  paragraphs: [
    "The Central Board of Secondary Education (CBSE) is India's largest national school board, with around 29,000 affiliated schools reported in 2024 across India and abroad. Its curriculum follows NCERT textbooks and is aligned with the National Education Policy 2020.",
    "For many promoters it is the default choice: parents know and trust it, families who relocate can switch between CBSE schools easily, and its syllabus maps closely to national entrance exams such as JEE and NEET. It also comes with clear, detailed rules — which makes careful planning essential.",
  ],
  pros: [
    "Strong, nationwide parent recognition",
    "Easy transfers for families that move cities",
    "Close alignment with national entrance exams",
    "NCERT textbooks keep book costs predictable",
  ],
  considerations: [
    "Strict land, building and staffing norms",
    "Competition from established CBSE schools nearby",
    "Applications only during CBSE's annual window",
    "Inspection must be passed before affiliation",
  ],
};

export const eligibility: IconItem[] = [
  {
    icon: Landmark,
    title: "A not-for-profit sponsoring body",
    description: "The school must be run by a registered society, a trust or a company registered under Section 8 of the Companies Act — not by an individual or a for-profit company.",
  },
  {
    icon: MapPinned,
    title: "Land that meets CBSE norms",
    description: "Owned or held on a registered long-term lease in the name of the sponsoring body, of the size required for your location category.",
  },
  {
    icon: FileCheck2,
    title: "State recognition",
    description: "Recognition from the state education department (and an NOC or essentiality certificate where your state requires one).",
  },
  {
    icon: Building,
    title: "A ready, safe building",
    description: "Classrooms, labs, library and facilities built to CBSE's area norms, with building, fire and sanitation safety certificates.",
  },
];

export const landTable: TableData = {
  caption: "CBSE minimum land requirements for new schools, as amended in January 2026",
  columns: ["Category", "Where it applies", "Secondary (up to Class X)", "Senior Secondary (up to Class XII)"],
  rows: [
    ["Category A", "Anywhere in India", "6,000 sq m (≈ 1.48 acres)", "6,000 sq m (≈ 1.48 acres)"],
    [
      "Category B",
      "Y-category cities, state capitals and hilly areas notified by the Government of India",
      "2,400 sq m (≈ 0.59 acres)",
      "3,200 sq m (≈ 0.79 acres)",
    ],
    [
      "Category C",
      "X-category cities, Arunachal Pradesh, Sikkim, Andaman & Nicobar Islands and Lakshadweep",
      "1,600 sq m (≈ 0.40 acres)",
      "2,400 sq m (≈ 0.59 acres)",
    ],
  ],
  note: "Source: CBSE notification amending Chapter 3 (Land Requirement) of the Affiliation Bye-Laws 2018 — Circular No. 04/2026, 19 January 2026. Acre conversions are approximate (1 acre ≈ 4,047 sq m). X and Y refer to the Government of India's city classification.",
};

export const playArea = [
  "Every school needs a play area of at least 2,000 sq m on campus.",
  "Schools on relaxed land norms with less than 6,000 sq m may instead use a nearby sports facility under an arrangement of at least 15 years.",
  "That facility must be within 200 metres, safely reachable, and must not require students to cross a highway or busy main road.",
];

export const infrastructure = {
  intro:
    "Since July 2025, the number of sections a CBSE school may run is linked to its built-up (carpet) area, which must be certified by the local body or a licensed architect. Secondary (IX–X) and senior secondary (XI–XII) sections are each capped at a quarter of the school's total sections.",
  facilities: {
    caption: "Indicative minimum room sizes for CBSE schools with up to 48 sections",
    columns: ["Facility", "Minimum size"],
    rows: [
      ["Physics, Chemistry and Biology labs (senior secondary)", "54 sq m each"],
      ["Composite science lab (secondary)", "54 sq m"],
      ["Computer lab", "54 sq m"],
      ["Mathematics lab", "48 sq m"],
      ["Art & craft room", "48 sq m"],
      ["Infirmary / wellness room", "48 sq m"],
      ["Learning centre for children with special needs", "48 sq m"],
      ["Music, dance, art and sports", "Four rooms of 54 sq m each, or one 216 sq m multipurpose hall"],
    ],
    note: "From CBSE's revised Appendix-V to the Affiliation Bye-Laws (July 2025), as reported. Library and other requirements scale with the number of sections — we prepare a full area statement for your plan.",
  } satisfies TableData,
  essentials: [
    "One classroom per section, sized for up to 40 students",
    "Separate toilets for boys, girls and staff, plus accessible toilets",
    "Ramps, rails and barrier-free access for children with special needs",
    "Safe drinking water and hygienic sanitation",
    "Fire safety equipment and approved evacuation routes",
    "CCTV and secure boundary, gate and visitor control",
    "Library with age-appropriate books and periodicals",
    "Transport that follows school-bus safety rules, if offered",
  ],
  gallery: [
    {
      caption: "Classrooms sized for up to 40 students, with natural light and ventilation.",
      image: brief({
        id: "CBSE-02",
        file: "start-a-school/cbse-classroom.webp",
        width: 1200,
        height: 800,
        title: "Bright, spacious classroom",
        alt: "Spacious, well-lit CBSE school classroom with students at desks",
        scene:
          "A spacious, well-lit Indian school classroom with about 30 students aged 12 to 13 in uniform seated at twin desks in neat rows, a teacher at a green board, large windows along one wall with daylight streaming in, ceiling fans, clean painted walls with a few charts (no readable text)",
      }),
    },
    {
      caption: "Separate physics, chemistry and biology labs for senior secondary classes.",
      image: brief({
        id: "CBSE-03",
        file: "start-a-school/cbse-science-lab.webp",
        width: 1200,
        height: 800,
        title: "Senior secondary science lab",
        alt: "Senior secondary students doing a chemistry experiment in a school laboratory",
        scene:
          "Senior secondary students aged 16 to 17 in white lab coats and safety goggles doing a chemistry titration at a long lab bench with sinks and reagent shelves, a teacher supervising, clean modern school laboratory, bright even light",
      }),
    },
    {
      caption: "A library that grows with the number of sections.",
      image: brief({
        id: "CBSE-04",
        file: "start-a-school/cbse-library.webp",
        width: 1200,
        height: 800,
        title: "School library",
        alt: "Students reading and browsing books in a bright school library",
        scene:
          "A bright, modern Indian school library with tall wooden bookshelves, reading tables and a cosy corner with bean bags, students aged 10 to 15 browsing and reading quietly, large windows with soft daylight",
      }),
    },
    {
      caption: "At least 2,000 sq m of play area on campus for most schools.",
      image: brief({
        id: "CBSE-05",
        file: "start-a-school/cbse-playground.webp",
        width: 1200,
        height: 800,
        title: "Playground and sports field",
        alt: "Students playing on a large school playground with a sports field and the school building behind",
        scene:
          "Wide shot of a large school playground and sports field in India, students in sports uniforms playing football and others running on a marked track, the school building visible at the edge of the field, clear blue sky, energetic afternoon scene",
      }),
    },
  ],
};

export const staff = [
  "A principal and teachers with the qualifications prescribed by CBSE and NCTE",
  "At least 1.5 teachers per section, and a pupil–teacher ratio no higher than 30:1",
  "No more than 40 students in a section",
  "Salaries paid through bank transfer, at least in line with state norms",
  "Written service rules, appointment letters and a provident fund for staff",
  "At least 50 hours of professional training for every teacher each year",
  "Counsellor, special educator, librarian and physical education teacher as per norms",
  "NCERT/CBSE-prescribed curriculum and textbooks, with fees set transparently and disclosed on the school website",
];

export const staffImage = brief({
  id: "CBSE-06",
  file: "start-a-school/cbse-teacher-hiring.webp",
  width: 1200,
  height: 800,
  title: "Teacher interview panel",
  alt: "School principal and a consultant interviewing a teacher candidate",
  scene:
    "An Indian school principal and an education consultant seated at a table interviewing a young female teacher candidate in a smart salwar kameez, the candidate presenting a lesson plan from a folder, bright staff room setting, professional and friendly mood",
});

export const process: TimelineStep[] = [
  {
    title: "Feasibility study & board decision",
    timing: "Months 0–2",
    description: "Confirm that a CBSE school will succeed at your location, at what size and fee level, and what it will cost.",
    link: { label: "Read about feasibility & DPR", href: routes.feasibility },
  },
  {
    title: "Register the sponsoring body",
    timing: "Months 1–3",
    description: "Register a society, trust or Section 8 company with objectives that include running a school, and open its bank account.",
  },
  {
    title: "Secure land that meets the norms",
    timing: "Months 1–4",
    description: "Buy or lease land in the sponsoring body's name, of the size required for your category, with clear title and the right land use.",
    points: ["Check the 2026 land categories before you buy", "Register any lease for the full tenure required by the bye-laws", "Plan the play area on campus wherever possible"],
  },
  {
    title: "Design and build the campus",
    timing: "Months 4–16",
    description: "Prepare an area statement against CBSE norms, get the building plan approved and construct in phases.",
    points: ["Built-up area certificate from the local body or a licensed architect", "Building safety, fire safety and sanitation certificates"],
  },
  {
    title: "State recognition and NOC",
    timing: "Months 10–16",
    description: "Obtain recognition from the state education department, and the NOC or essentiality certificate where your state requires it.",
  },
  {
    title: "Apply online on SARAS",
    timing: "During the CBSE window",
    description:
      "Submit the affiliation application, fee and documents on CBSE's SARAS portal. For the 2027–28 session the window opened on 26 February 2026 and was extended to 30 September 2026.",
  },
  {
    title: "CBSE inspection",
    timing: "After scrutiny",
    description: "A CBSE inspection committee visits the school and reports on land, building, facilities, staff and records. Any deficiencies must be fixed and reported within CBSE's deadlines.",
  },
  {
    title: "Affiliation and first session",
    timing: "Months 18–24",
    description: "Once affiliation is granted, publish the mandatory disclosures on your website, complete hiring and open admissions.",
  },
];

export const documents = [
  "Registration certificate and bye-laws or trust deed of the sponsoring body",
  "List of members or trustees, with their details",
  "Land documents: sale deed or registered lease, and land-use or conversion certificate",
  "Approved building plan and built-up area certificate",
  "Building safety certificate",
  "Fire safety certificate from the competent authority",
  "Water, health and sanitation certificate",
  "State recognition certificate, and NOC or essentiality certificate where required",
  "Fee structure for each class",
  "Staff list with qualifications, appointment letters and salary statements",
  "Audited financial statements of the sponsoring body",
  "Affidavit and self-declarations in CBSE's prescribed format",
  "Photographs and videos of the infrastructure, as asked on SARAS",
];

export const timeline: TableData = {
  caption: "Typical timeline to start a CBSE school",
  columns: ["Stage", "Typical duration", "What decides the pace"],
  rows: [
    ["Feasibility, DPR and board decision", "1–2 months", "How quickly land options and data are available"],
    ["Society / trust registration", "1–3 months", "State registrar processing times"],
    ["Land purchase or lease", "1–4 months", "Title checks and land-use conversion"],
    ["Design, approvals and construction", "9–15 months", "Plan approval, funding and construction scale"],
    ["State recognition / NOC", "2–6 months (overlaps construction)", "State rules and inspection schedules"],
    ["CBSE application to decision", "Several months", "CBSE's annual window, scrutiny and inspection dates"],
  ],
  note: "Most projects take 18–24 months from idea to opening. Missing CBSE's annual application window can add up to a year, so plan construction backwards from the window.",
};

export const delays = [
  { title: "Land not in the sponsoring body's name", description: "Land owned by a promoter personally, or a lease that isn't registered for the required tenure." },
  { title: "Play area that doesn't qualify", description: "A playground that is too small, not on campus, or reached by crossing a busy road." },
  { title: "Built-up area mismatch", description: "Certified carpet area that doesn't support the number of sections applied for." },
  { title: "Missing or expired safety certificates", description: "Fire, building or sanitation certificates that are missing, outdated or issued by the wrong authority." },
  { title: "Staff not meeting qualification norms", description: "Teachers without the prescribed qualifications, or salary and appointment records that don't match." },
  { title: "Incomplete website disclosures", description: "Mandatory public disclosures missing from the school website before inspection." },
];

export const help: IconItem[] = [
  { icon: MapPinned, title: "Land & norms check", description: "We check your plot against the latest category norms before you buy or build." },
  { icon: Landmark, title: "Society or trust setup", description: "Drafting objectives and registering the right sponsoring body." },
  { icon: LayoutGrid, title: "Area statement & architect brief", description: "A room-by-room plan your architect can design to, sized to CBSE norms." },
  { icon: ClipboardList, title: "Documents & SARAS filing", description: "Every certificate, affidavit and upload prepared and checked before submission." },
  { icon: HardHat, title: "Mock inspection", description: "We walk the campus the way the committee will and close gaps before they arrive." },
  { icon: UserCheck, title: "Hiring & first admissions", description: "Principal and teacher recruitment, fee structure and your first admissions campaign." },
  { icon: Route, title: "One accountable team", description: "A named consultant from first call to first assembly." },
  { icon: Users, title: "After affiliation", description: "Ongoing compliance, upgrades to senior secondary and extension of affiliation." },
  { icon: BookOpenCheck, title: "Academic setup", description: "Timetables, curriculum planning and teacher training aligned with CBSE expectations." },
];

export const helpImage = brief({
  id: "CBSE-07",
  file: "start-a-school/cbse-mock-inspection.webp",
  width: 1200,
  height: 800,
  title: "Mock inspection walk-through",
  alt: "Consultant with a checklist walking a school corridor with the principal during a mock inspection",
  scene:
    "An Indian education consultant holding a clipboard checklist walking along a clean school corridor with the school principal, pointing at a fire extinguisher mounted on the wall, classrooms with open doors on one side, bright daylight, focused and thorough mood",
});

export const faqs: Faq[] = [
  {
    question: "How much land is required to open a CBSE school in 2026?",
    answer:
      "Under CBSE's January 2026 amendment, a Category A school (anywhere in India) needs 6,000 sq m. In Category B locations — Y-category cities, state capitals and notified hilly areas — it is 2,400 sq m up to Class X and 3,200 sq m up to Class XII. In Category C locations — X-category cities and a few specified states and union territories — it is 1,600 sq m and 2,400 sq m. Always check the latest bye-laws before buying land.",
  },
  {
    question: "Can a CBSE school be run on leased land?",
    answer:
      "Yes, if the lease is registered in the name of the sponsoring society, trust or company and runs for the minimum tenure set in the bye-laws. We review lease terms before you sign so they don't cause problems at inspection.",
  },
  {
    question: "How long does it take to get CBSE affiliation?",
    answer:
      "Most projects take 18–24 months from idea to opening, including land, construction and state recognition. The CBSE stage itself runs from the annual application window through scrutiny and inspection, so timing your construction to the window matters.",
  },
  {
    question: "When can I apply for CBSE affiliation?",
    answer:
      "Applications are made online on CBSE's SARAS portal during a window CBSE announces each year. For the 2027–28 session the window opened on 26 February 2026 and was extended to 30 September 2026. Watch CBSE's notices for the next window.",
  },
  {
    question: "Who can open a CBSE school — can a private company apply?",
    answer:
      "A CBSE school must be run by a not-for-profit body: a registered society, a trust or a Section 8 company. An individual or a regular for-profit company cannot be the sponsoring body.",
  },
  {
    question: "Is an NOC from the state government required?",
    answer:
      "You need recognition from the state education department. Whether a separate NOC or essentiality certificate is needed depends on your state's rules, which have been changing — we confirm the current position for your state at the start of the project.",
  },
  {
    question: "How many students can be in one CBSE class section?",
    answer: "CBSE allows a maximum of 40 students per section, and the total number of sections is linked to the school's certified built-up area.",
  },
  {
    question: "What does it cost to start a CBSE school?",
    answer:
      "It depends mostly on land, city, construction scale and the number of grades you open with. A feasibility study and DPR give you a reliable project cost and funding plan before you commit.",
  },
];

export const references: NavLink[] = [
  { label: "CBSE affiliation — SARAS portal (applications, circulars, bye-laws)", href: "https://saras.cbse.gov.in/" },
  { label: "Central Board of Secondary Education — official website", href: "https://www.cbse.gov.in/" },
];

export const related: RelatedLink[] = [
  { label: "Feasibility study & DPR", href: routes.feasibility, description: "Test demand, fees and costs, and get a bank-ready project report before you build." },
  { label: "Start a school: the full journey", href: routes.startSchool, description: "Every stage from idea to inauguration, across all boards." },
  { label: "Talk to a CBSE specialist", href: routes.contact, description: "Get a land and timeline check for your city, free." },
];

export const cta = {
  title: "Open your CBSE school with a team that's done it before",
  description: "Book a free 30-minute call. We'll check your land against the 2026 norms and map your path to affiliation.",
  cta: { label: "Book a CBSE setup consultation", href: routes.consultation },
  reassurance: "Free land check · Named consultant · SARAS-ready documentation",
  image: brief({
    id: "CBSE-08",
    file: "start-a-school/cbse-cta-first-day.webp",
    width: 900,
    height: 900,
    title: "First day at a new school",
    alt: "Young students and a teacher waving on the first day at a new CBSE school",
    scene:
      "Square photo of a cheerful teacher welcoming young Indian students aged 6 to 8 in new uniforms at the decorated entrance of a brand-new school on its first day, balloons and marigold garlands at the door, children waving and smiling, bright morning light",
  }),
};
