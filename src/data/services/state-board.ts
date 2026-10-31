/**
 * Content for /start-a-school/state-board
 * Target searches: "how to start a state board school", "school recognition under RTE", "private school permission",
 * "state board school setup", "school recognition certificate", "essentiality certificate for school".
 *
 * RTE norms are from the Right of Children to Free and Compulsory Education Act, 2009 and its Schedule.
 * Delhi's self-certification change was reported on 19 July 2026. State rules differ and change often —
 * re-verify for each state before each update.
 */
import {
  BookOpenCheck,
  Building,
  ClipboardList,
  FileCheck2,
  HardHat,
  Landmark,
  MapPinned,
  Scale,
  UserCheck,
} from "lucide-react";

import type { BoardGuideData } from "@/components/sections/service/BoardGuide";
import { routes } from "@/config/navigation";
import { boardGuideToc } from "@/data/services/board-guide";
import { brief } from "@/data/images";

export const page: BoardGuideData = {
  serviceName: "State Board school setup and recognition consultancy",
  meta: {
    path: routes.stateBoard,
    title: "How to Start a State Board School in India (2026 Guide) — RTE Recognition & Permission",
    description:
      "Guide to opening a State Board school: RTE Act recognition norms, state permission and essentiality certificates, land and building rules, teacher eligibility, documents and timelines — with consultants who handle approvals in your state.",
    keywords: [
      "how to start a state board school",
      "school recognition under RTE",
      "private school permission",
      "state board school setup",
      "school recognition certificate",
      "essentiality certificate for school",
      "RTE norms for private schools",
      "new school permission state government",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "Start a School", href: routes.startSchool },
      { label: "State Board Setup", href: routes.stateBoard },
    ],
    eyebrow: "Start a school · State Board",
    title: "How to Start a State Board School in India",
    description:
      "Every private school in India — whatever its board — starts with state permission and recognition under the RTE Act. For State Board schools, that is the whole journey. Here's how it works, and how rules differ from state to state.",
    primary: { label: "Book a State Board consultation", href: routes.consultation },
    secondary: { label: "See RTE norms", href: "#requirements" },
    facts: [
      { value: "RTE 2009", label: "Sets minimum norms" },
      { value: "30:1", label: "RTE pupil–teacher ratio (I–V)" },
      { value: "25%", label: "EWS seats at entry level" },
      { value: "12–18 mo", label: "Typical idea-to-opening" },
    ],
    image: brief({
      id: "STATE-01",
      file: "start-a-school/state-hero-school.webp",
      width: 1400,
      height: 1050,
      title: "Community school in a growing town",
      alt: "Children arriving at a neat, newly built school in a growing Indian town",
      scene:
        "A neat, newly built two-storey school in a growing Indian town, painted cream and green with a covered verandah, a small playground with a banyan tree, children aged 6 to 14 in uniforms arriving with bags, parents on scooters at the gate, warm morning light, hopeful and community-centred mood",
    }),
  },
  toc: boardGuideToc("RTE recognition norms"),
  titles: {
    why: "Why choose a State Board for your new school?",
    eligibility: "Who can open a State Board school?",
    requirements: "RTE recognition norms every school must meet",
    infrastructure: "Infrastructure requirements for a State Board school",
    staff: "Staff and academic requirements",
    process: "The state permission and recognition process, step by step",
    documents: "Documents required for school recognition",
    timeline: "How long does it take to start a State Board school?",
    delays: "Common reasons recognition gets delayed",
    help: "How Grow Edu System helps you open a State Board school",
    faq: "Starting a State Board school: common questions",
  },
  why: {
    paragraphs: [
      "State Boards educate the majority of India's school students. Each state's board of secondary or higher secondary education sets the syllabus and conducts Class 10 and 12 exams, while the state education department grants permission and recognition to new schools.",
      "A State Board school is often the right choice in tier-2 and tier-3 towns and rural areas, where parents want affordable fees, the regional language and alignment with state entrance exams and government recruitment. Approvals stay within one state, and the investment needed is usually lower than for national or international boards.",
    ],
    pros: [
      "Lower setup and running costs",
      "Strong fit for local parents and fee levels",
      "Teaching in the regional language or English",
      "Approvals handled within one state",
    ],
    considerations: [
      "Rules differ significantly between states",
      "Some states require an essentiality certificate",
      "Fee regulation applies in many states",
      "25% RTE seats for disadvantaged groups at entry level",
    ],
  },
  eligibility: {
    intro: "While each state writes its own rules, these four foundations are needed almost everywhere.",
    items: [
      {
        icon: Landmark,
        title: "A not-for-profit sponsoring body",
        description: "A registered society, public trust or Section 8 company whose objects include running a school.",
      },
      {
        icon: MapPinned,
        title: "Land meeting state norms",
        description: "Owned or leased in the sponsoring body's name, of the size your state prescribes for the classes you plan to run.",
      },
      {
        icon: FileCheck2,
        title: "Permission to open the school",
        description:
          "A permission letter, NOC or essentiality certificate from the state where required. Some states are simplifying this — Delhi replaced its essentiality certificate with self-certification in July 2026.",
      },
      {
        icon: Scale,
        title: "Recognition under the RTE Act",
        description: "Section 18 of the RTE Act bars any private school from operating without recognition from the appropriate authority.",
      },
    ],
  },
  requirements: {
    intro:
      "The Right of Children to Free and Compulsory Education Act, 2009 sets national minimum norms (Section 19 and the Schedule) that every recognised school must meet. States add their own land, building and fee rules on top.",
    table: {
      caption: "Key norms from the RTE Act Schedule for elementary schools",
      columns: ["Norm", "Classes I–V", "Classes VI–VIII"],
      rows: [
        ["Pupil–teacher ratio", "About 30:1 — 2 teachers for up to 60 pupils, scaling up; no more than 40:1 above 200 pupils", "35:1, with at least one teacher each for science & maths, social studies and languages"],
        ["Head teacher", "Required above 150 pupils", "Full-time head teacher above 100 pupils"],
        ["Minimum working days per year", "200", "220"],
        ["Minimum instructional hours per year", "800", "1,000"],
        ["Teacher working hours", "45 hours per week, including preparation", "45 hours per week, including preparation"],
        ["Building", "All-weather building with at least one classroom per teacher and an office-cum-store-cum-head teacher's room", "Same"],
        ["Facilities", "Barrier-free access, separate toilets for boys and girls, safe drinking water, playground, boundary wall, library and play/sports equipment", "Same"],
      ],
      note: "Source: Schedule to the RTE Act, 2009 (Sections 19 and 25). These are national minimums for Classes I–VIII; state rules for land, secondary classes and fees apply in addition.",
    },
    callout: {
      title: "Your state's rules decide the details",
      body: "Minimum land area, whether an essentiality certificate is needed, fee regulation and the secondary-level recognition process all vary by state. We confirm the current rules for your district before you buy land or apply.",
    },
  },
  infrastructure: {
    intro: "The RTE Schedule sets the baseline; most states add area norms per student, fire safety and secondary-level lab requirements. Plan for these as a minimum.",
    essentials: [
      "All-weather building with one classroom per teacher",
      "Office-cum-store-cum-head teacher's room",
      "Barrier-free access with ramps for children with disabilities",
      "Separate toilets for boys and girls, plus staff toilets",
      "Safe and adequate drinking water",
      "Playground and play / sports equipment",
      "Boundary wall or fencing",
      "Library with newspapers, magazines and books on all subjects",
      "Science and computer labs for secondary classes, per state norms",
      "Fire safety and building stability certificates",
    ],
  },
  staff: [
    "Teachers meeting NCTE minimum qualifications, including passing a Teacher Eligibility Test (TET) where required",
    "Pupil–teacher ratio within RTE limits: about 30:1 for Classes I–V and 35:1 for VI–VIII",
    "A head teacher or principal as per state rules",
    "Subject teachers for science and maths, social studies and languages at upper primary",
    "Part-time instructors for art, health and physical education, and work education as per norms",
    "Salaries and service conditions in line with state rules, paid through bank",
    "No screening tests for admission and no capitation fee, as required by the RTE Act",
    "25% of entry-level seats reserved for children from weaker and disadvantaged groups under Section 12(1)(c)",
  ],
  staffImage: brief({
    id: "STATE-02",
    file: "start-a-school/state-primary-class.webp",
    width: 1200,
    height: 800,
    title: "Primary classroom",
    alt: "Teacher teaching young children in a cheerful primary classroom",
    scene:
      "A cheerful Indian primary classroom with about 25 children aged 7 to 8 sitting on low benches, a young female teacher in a cotton saree showing a picture card, colourful charts on the walls (no readable text), large windows with daylight, warm and engaged mood",
  }),
  process: {
    intro: "The exact sequence and forms vary by state, but most State Board schools follow this path.",
    steps: [
      {
        title: "Feasibility study",
        timing: "Months 0–2",
        description: "Confirm demand, the right fee level and medium of instruction, and the classes to open with.",
        link: { label: "Read about feasibility & DPR", href: routes.feasibility },
      },
      {
        title: "Register the sponsoring body",
        timing: "Months 1–3",
        description: "Register a society, trust or Section 8 company with objects that include running a school.",
      },
      {
        title: "Secure land and land-use clearance",
        timing: "Months 1–4",
        description: "Buy or lease land in the sponsoring body's name, meeting state area norms and permitted land use.",
      },
      {
        title: "Apply for permission to open",
        timing: "As per the state calendar",
        description: "Apply to the district or state education authority for permission, NOC or essentiality certificate, where your state requires it.",
        points: ["Many states accept applications only in a set window", "Some states have moved to self-certification"],
      },
      {
        title: "Build and equip the school",
        timing: "Months 4–14",
        description: "Construct to RTE and state norms, and obtain building stability, fire and sanitation certificates.",
      },
      {
        title: "Apply for recognition and inspection",
        timing: "Before admissions",
        description: "Submit the recognition application with a self-declaration of RTE compliance. The district education officer inspects the school.",
      },
      {
        title: "Recognition and opening",
        timing: "Months 12–18",
        description: "Receive recognition, register on UDISE+, announce RTE seats, complete hiring and open admissions. Secondary recognition and board registration follow as you add classes.",
      },
    ],
  },
  documents: {
    intro: "Each state prescribes its own forms; these are needed almost everywhere.",
    items: [
      "Registration certificate and deed or bye-laws of the sponsoring body",
      "List of members or trustees with identity proofs",
      "Land documents: sale deed or registered lease, and land-use certificate",
      "Approved building plan and building stability certificate",
      "Fire safety certificate",
      "Health and sanitation certificate",
      "Permission letter, NOC or essentiality certificate where required",
      "Self-declaration of compliance with RTE norms in the state's format",
      "Staff list with qualifications and TET certificates",
      "Proposed fee structure, as per state fee-regulation rules",
      "Bank solvency certificate or proof of funds",
      "Affidavits in the state's prescribed format",
    ],
  },
  timeline: {
    caption: "Typical timeline to start a State Board school",
    columns: ["Stage", "Typical duration", "What decides the pace"],
    rows: [
      ["Feasibility and planning", "1–2 months", "Market data and land options"],
      ["Society / trust registration", "1–3 months", "State registrar processing times"],
      ["Land and land-use clearance", "1–4 months", "Title checks and conversion"],
      ["Permission / NOC", "1–6 months", "State application window and rules"],
      ["Construction", "6–12 months", "Size of the building and funding"],
      ["Recognition and inspection", "1–3 months", "District inspection schedules"],
    ],
    note: "Most State Board schools open within 12–18 months. Missing a state's annual application window can delay the opening by a full academic year.",
  },
  delays: [
    { title: "Missed application window", description: "Many states accept new-school applications only during a fixed period each year." },
    { title: "Land-use not converted", description: "Agricultural land not converted for educational use before applying." },
    { title: "Essentiality or NOC refused", description: "Objections about existing schools nearby, in states that still assess need." },
    { title: "Teachers without TET", description: "Staff who don't meet NCTE qualifications or state eligibility tests." },
    { title: "RTE norms not met", description: "Classroom count, toilets, ramps or playground falling short at inspection." },
    { title: "Fee filings incomplete", description: "Fee structures not filed or approved under state fee-regulation rules." },
  ],
  help: {
    intro: "Use this guide to plan — or let a team that knows your state's rules handle approvals end to end.",
    body: "State Board approvals are local: the right form, the right office, the right window. We track the current rules for your state, prepare every application and certificate, and walk the campus against RTE and state norms before the district inspection.",
    items: [
      { icon: MapPinned, title: "State rules check", description: "Current land, permission and recognition rules for your district." },
      { icon: Landmark, title: "Society or trust setup", description: "Registering the right sponsoring body with the right objects." },
      { icon: Building, title: "Campus planning", description: "A building plan sized to RTE and state norms — and to future growth." },
      { icon: ClipboardList, title: "Applications & filings", description: "Permission, recognition and fee-regulation filings prepared and tracked." },
      { icon: HardHat, title: "Mock inspection", description: "A walk-through against RTE and state checklists." },
      { icon: UserCheck, title: "Hiring", description: "Qualified, TET-eligible teachers and a capable head teacher." },
      { icon: Scale, title: "RTE compliance", description: "25% seat process, admissions policy and records." },
      { icon: BookOpenCheck, title: "Growing to secondary", description: "Upgrading to Classes IX–XII — or switching to CBSE or ICSE later." },
    ],
  },
  helpImage: brief({
    id: "STATE-03",
    file: "start-a-school/state-district-inspection.webp",
    width: 1200,
    height: 800,
    title: "District inspection walk-through",
    alt: "School promoter and consultant walking an education officer through a new school",
    scene:
      "An Indian school promoter in a kurta and an education consultant showing a government education officer around a new school verandah, the officer holding a file, classrooms with open doors and a ramp visible, bright midday light, respectful and professional mood",
  }),
  faqs: [
    {
      question: "Who grants recognition to a State Board school?",
      answer:
        "The state education department, usually through the district education officer or equivalent authority, grants permission and recognition. The state board of secondary or higher secondary education then registers the school for its Class 10 and 12 exams.",
    },
    {
      question: "Is recognition under the RTE Act compulsory?",
      answer: "Yes. Section 18 of the RTE Act says no school other than a government-run school may be established or function without recognition from the appropriate authority.",
    },
    {
      question: "What is an essentiality certificate?",
      answer:
        "Some states require a certificate confirming that a new school is needed in the area before they grant permission. Rules are changing — Delhi, for example, replaced its essentiality certificate with self-certification in July 2026.",
    },
    {
      question: "How much land do I need for a State Board school?",
      answer: "It depends on your state, location (urban or rural) and the classes you plan to run. The RTE Act sets building norms but not a land size, so state rules decide. We confirm the requirement for your district.",
    },
    {
      question: "Do State Board schools have to reserve 25% seats?",
      answer:
        "Yes. Under Section 12(1)(c) of the RTE Act, private unaided schools must admit children from weaker and disadvantaged groups to at least 25% of entry-level seats, with reimbursement from the state as per its rules.",
    },
    {
      question: "Can a State Board school switch to CBSE later?",
      answer:
        "Yes. Many schools start with the State Board and apply for CBSE or ICSE affiliation once they meet those boards' norms. Planning the campus for that from day one saves rebuilding later.",
    },
    {
      question: "Can a State Board school teach in English?",
      answer: "Yes. Most states recognise English-medium as well as regional-language schools, though some require the state language to be taught as a subject.",
    },
    {
      question: "How long does it take to open a State Board school?",
      answer: "Typically 12–18 months, depending on land, construction and your state's application calendar.",
    },
  ],
  references: [
    { label: "Right of Children to Free and Compulsory Education Act, 2009 — Department of School Education & Literacy", href: "https://dsel.education.gov.in/" },
    { label: "Delhi replaces Essentiality Certificate with self-certification (Business Standard, July 2026)", href: "https://www.business-standard.com/india-news/delhi-govt-approves-self-certification-system-for-opening-private-schools-126071800850_1.html" },
  ],
  related: [
    { label: "Compare school boards", href: routes.compareBoards, description: "CBSE, ICSE, IB, Cambridge and State Board side by side." },
    { label: "CBSE school setup guide", href: routes.cbse, description: "When you're ready to upgrade to a national board." },
    { label: "Feasibility study & DPR", href: routes.feasibility, description: "Test demand and fees before you build." },
  ],
  cta: {
    title: "Get your State Board school approved, first time",
    description: "Book a free 30-minute call. We'll check your state's current rules and map your path to recognition.",
    cta: { label: "Book a State Board consultation", href: routes.consultation },
    reassurance: "State-specific rules · Named consultant · Inspection-ready campus",
    image: brief({
      id: "STATE-04",
      file: "start-a-school/state-cta-classroom.webp",
      width: 900,
      height: 900,
      title: "Children ready to learn",
      alt: "Smiling primary school children raising their hands in class",
      scene:
        "Square photo of smiling Indian primary school children aged 7 to 9 in uniforms eagerly raising their hands in a bright classroom, a teacher smiling in the foreground slightly out of focus, warm daylight, joyful mood",
    }),
  },
};
