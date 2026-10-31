/**
 * Content for /start-a-school/icse
 * Target searches: "how to start an ICSE school", "CISCE affiliation process", "ICSE affiliation requirements",
 * "ICSE school setup", "ICSE affiliation consultant", "documents required for ICSE affiliation".
 *
 * Facts checked in October 2026 against CISCE's School Affiliation page (cisce.org) and its published
 * statistics. CISCE revises its Rules for Affiliation and fee schedule — re-verify before each update.
 */
import {
  BookOpenCheck,
  Building,
  ClipboardList,
  FileCheck2,
  FlaskConical,
  HardHat,
  Landmark,
  Languages,
  MapPinned,
  UserCheck,
} from "lucide-react";

import type { BoardGuideData } from "@/components/sections/service/BoardGuide";
import { routes } from "@/config/navigation";
import { boardGuideToc } from "@/data/services/board-guide";
import { brief } from "@/data/images";

export const page: BoardGuideData = {
  serviceName: "ICSE (CISCE) school setup and affiliation consultancy",
  meta: {
    path: routes.icse,
    title: "How to Start an ICSE School (CISCE Guide)",
    description:
      "Start an ICSE school: CISCE eligibility, state NOC, Certificate of Land, lab and library needs, the affiliation process, documents and timelines.",
    keywords: [
      "how to start an ICSE school",
      "CISCE affiliation process",
      "ICSE affiliation requirements",
      "ICSE school setup",
      "ICSE affiliation consultant",
      "documents required for ICSE affiliation",
      "ISC affiliation",
      "CISCE certificate of land",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "Start a School", href: routes.startSchool },
      { label: "ICSE School Setup", href: routes.icse },
    ],
    eyebrow: "Start a school · ICSE / CISCE",
    title: "How to Start an ICSE School in India",
    description:
      "Everything you need to open a school affiliated to the Council for the Indian School Certificate Examinations (CISCE) — eligibility, state NOC, land certificate, labs, staff, documents and the online application. Read the guide, or let our ICSE specialists run it for you.",
    primary: { label: "Book an ICSE setup consultation", href: routes.consultation },
    secondary: { label: "See requirements", href: "#requirements" },
    facts: [
      { value: "ICSE + ISC", label: "Class X and Class XII" },
      { value: "English", label: "Medium of instruction" },
      { value: "State NOC", label: "Needed before applying" },
      { value: "18–30 mo", label: "Typical idea-to-affiliation" },
    ],
    image: brief({
      id: "ICSE-01",
      file: "start-a-school/icse-hero-campus.webp",
      width: 1400,
      height: 1050,
      title: "Heritage-style ICSE school campus",
      alt: "Students walking past the arched corridors of an ICSE school campus in India",
      scene:
        "An elegant Indian school campus with red-brick arched corridors and a central quadrangle lawn, uniformed students aged 10 to 16 in blazers and ties walking between classes carrying books, a teacher in a saree talking to two students, soft morning daylight, classic and aspirational",
    }),
  },
  toc: boardGuideToc("CISCE requirements"),
  titles: {
    why: "Why choose ICSE for your new school?",
    eligibility: "Who can open an ICSE school?",
    requirements: "CISCE affiliation requirements at a glance",
    infrastructure: "Infrastructure requirements for an ICSE school",
    staff: "Staff and academic requirements",
    process: "The CISCE affiliation process, step by step",
    documents: "Documents required for CISCE affiliation",
    timeline: "How long does it take to start an ICSE school?",
    delays: "Common reasons ICSE applications get delayed",
    help: "How Grow Edu System helps you open an ICSE school",
    faq: "Starting an ICSE school: common questions",
  },
  why: {
    paragraphs: [
      "The Council for the Indian School Certificate Examinations (CISCE) is a private, non-governmental national board based in New Delhi. It conducts the ICSE examination at Class X and the ISC examination at Class XII. In 2022, more than 2,500 schools in India and abroad presented candidates for ICSE and over 1,200 for ISC.",
      "ICSE is known for a broad, application-based syllabus, a strong emphasis on English language and literature, and detailed internal assessment. It appeals to parents who want depth across languages, sciences and humanities — and it positions a new school as premium in markets where CBSE schools are crowded.",
    ],
    pros: [
      "Premium positioning and strong parent recall",
      "Excellent English and communication outcomes",
      "Wide subject choice, including arts and applied subjects",
      "Recognised for university admission across India",
    ],
    considerations: [
      "English must be the medium of instruction",
      "Detailed lab requirements set by the Council",
      "Fewer ICSE-trained teachers in smaller cities",
      "Separate affiliation steps for ICSE and ISC levels",
    ],
  },
  eligibility: {
    intro: "CISCE's Rules for Affiliation set out the foundations a school must have before it applies.",
    items: [
      {
        icon: Landmark,
        title: "A not-for-profit sponsoring body",
        description:
          "A registered society, trust, or a company formed for charitable purposes (Section 25 of the 1956 Act, now Section 8 of the Companies Act 2013) whose principal purpose is education. The school must not be run for profit.",
      },
      {
        icon: FileCheck2,
        title: "NOC from the state government",
        description:
          "A No Objection Certificate from the state education department, covering pre-school to Class X or pre-school to Class XII as applicable.",
      },
      {
        icon: MapPinned,
        title: "Certificate of Land",
        description:
          "CISCE's prescribed land certificate, signed by the District Magistrate, Tehsildar, Sub-Registrar or another registering authority, uploaded with the application.",
      },
      {
        icon: Languages,
        title: "English-medium instruction",
        description:
          "Teaching must be in English, with special emphasis on English — including oral and aural English — as required by the Council.",
      },
    ],
  },
  requirements: {
    intro:
      "Unlike CBSE, CISCE does not publish a single table of minimum plot sizes. Instead, it asks for infrastructure adequate for the number and gender of pupils, Council-approved labs, and a set of certificates. Here is what an inspection typically looks for.",
    table: {
      caption: "Key CISCE affiliation requirements for a new school",
      columns: ["Area", "What CISCE expects", "Planning tip"],
      rows: [
        ["Management", "Registered society, trust or charitable company with a Governing Body and Managing Committee", "Draft objectives that explicitly include running a school"],
        ["State approval", "NOC from the state government", "Apply early — state timelines vary widely"],
        ["Land", "Certificate of Land in CISCE's format, signed by a registering authority", "Keep title or registered lease in the sponsoring body's name"],
        ["Building", "Accommodation adequate for pupil numbers and gender, plus safety compliance", "Prepare an area statement before the architect starts"],
        ["Laboratories", "Premises and apparatus approved by the Council where science, home science or technical subjects are offered", "Follow CISCE's separate ICSE and ISC lab requirement lists"],
        ["Library", "A well-equipped library for pupils and staff", "Budget for a growing collection and a trained librarian"],
        ["Play and activities", "Adequate playing fields and facilities for co-curricular activities", "Plan play space on campus wherever possible"],
        ["Staff", "Qualifications as prescribed by the Council, and service conditions as per rules", "Hire a principal with ICSE experience early"],
      ],
      note: "Source: CISCE School Affiliation page and Rules for Affiliation (cisce.org), checked October 2026. Many promoters plan for at least 2,000 sq m of land, but state recognition rules may require more — confirm your state's norms before buying.",
    },
    callout: {
      title: "State rules decide your land size",
      body: "Because CISCE relies on the state NOC, your state's school-recognition rules usually set the effective minimum land and building norms. We check both sets of rules for your exact location before you commit to a plot.",
    },
  },
  infrastructure: {
    intro:
      "CISCE inspectors check that the campus is safe, adequate for the number of pupils, and equipped to teach every subject offered for the examinations. Plan for these as a minimum.",
    essentials: [
      "Well-ventilated, naturally lit classrooms with suitable furniture",
      "Separate physics, chemistry and biology labs approved by the Council",
      "Computer lab with internet access",
      "A well-stocked library for pupils and staff",
      "Playing fields and space for co-curricular activities",
      "Separate toilets for boys, girls and staff, and accessible toilets",
      "Fire safety equipment and compliance with the CISCE School Safety Manual",
      "Safe drinking water, sanitation, CCTV and a secure boundary",
    ],
  },
  staff: [
    "A principal and teachers with qualifications prescribed by CISCE and relevant national norms",
    "Strong English-language teaching across all subjects",
    "Subject specialists for each science, language and elective offered",
    "Appointment letters, written service rules and salaries paid through bank transfer",
    "A librarian, physical education teacher, counsellor and lab assistants",
    "Working days and hours as prescribed by the Council",
    "Regular CISCE and in-house teacher training",
    "Fees and admission policies disclosed transparently to parents",
  ],
  staffImage: brief({
    id: "ICSE-02",
    file: "start-a-school/icse-english-class.webp",
    width: 1200,
    height: 800,
    title: "English literature lesson",
    alt: "Teacher leading an English literature discussion with ICSE students",
    scene:
      "An Indian teacher in her 30s leading an animated English literature discussion in a bright classroom, students aged 14 to 15 in blazers seated in a horseshoe arrangement holding open novels, one student speaking, large windows, warm daylight",
  }),
  process: {
    intro: "From registering your trust to the first ICSE batch — in the order that avoids costly rework.",
    steps: [
      {
        title: "Feasibility study & board decision",
        timing: "Months 0–2",
        description: "Confirm that an ICSE school will succeed at your location, at what fee level and size, and what it will cost.",
        link: { label: "Read about feasibility & DPR", href: routes.feasibility },
      },
      {
        title: "Register the sponsoring body",
        timing: "Months 1–3",
        description: "Register a society, trust or Section 8 company with education as its principal purpose, and constitute the Governing Body.",
      },
      {
        title: "Secure land and plan the campus",
        timing: "Months 1–5",
        description: "Buy or lease land in the sponsoring body's name, meeting your state's recognition norms, and brief the architect.",
        points: ["Obtain the Certificate of Land in CISCE's format", "Plan labs to CISCE's ICSE and ISC lab lists"],
      },
      {
        title: "Build, equip and get state recognition",
        timing: "Months 4–18",
        description: "Construct the campus, obtain building, fire and sanitation certificates, and secure state recognition and the NOC.",
      },
      {
        title: "Apply online to CISCE",
        timing: "When the school is ready",
        description: "Register on CISCE's affiliation portal, pay the fee and upload the application with the Certificate of Land, NOC and other documents.",
      },
      {
        title: "Document scrutiny and inspection",
        timing: "After application",
        description: "The Council reviews the documents and sends an inspection team to verify infrastructure, labs, staff and records.",
      },
      {
        title: "Affiliation for ICSE, then ISC",
        timing: "Months 18–30",
        description: "After a satisfactory inspection and payment of the affiliation fee, the school is affiliated for ICSE (Class X). Affiliation for ISC (Class XII) follows as a separate application when you add those classes.",
      },
    ],
  },
  documents: {
    intro: "The exact list depends on the affiliation head you apply under; CISCE's online checklist is the final word. Plan for these as a minimum.",
    items: [
      "Registration certificate and memorandum, bye-laws or trust deed of the sponsoring body",
      "List of Governing Body and Managing Committee members",
      "Minutes of the Governing Body meeting resolving to seek affiliation",
      "Certificate of Land in CISCE's prescribed format",
      "Sale deed or registered lease in the sponsoring body's name",
      "Approved building plan and structural fitness certificate",
      "Fire safety and sanitation certificates",
      "NOC and recognition from the state government",
      "Audited accounts of the sponsoring body",
      "Staff list with qualifications and appointment letters",
      "Fee structure and details of the school's classes and enrolment",
      "Photographs of the campus, labs and library",
    ],
  },
  timeline: {
    caption: "Typical timeline to start an ICSE school",
    columns: ["Stage", "Typical duration", "What decides the pace"],
    rows: [
      ["Feasibility, DPR and board decision", "1–2 months", "Availability of land options and market data"],
      ["Society / trust registration", "1–3 months", "State registrar processing times"],
      ["Land purchase or lease", "1–4 months", "Title checks and land-use conversion"],
      ["Design, approvals and construction", "9–15 months", "Plan approval, funding and construction scale"],
      ["State recognition and NOC", "2–6 months (overlaps construction)", "State rules and inspection schedules"],
      ["CISCE application to affiliation", "Several months", "Document scrutiny and inspection scheduling"],
    ],
    note: "Most projects take 18–30 months from idea to ICSE affiliation. If an application is rejected, CISCE generally allows a fresh application only after a waiting period — so getting it right first time matters.",
  },
  delays: [
    { title: "Certificate of Land in the wrong format", description: "Land certificates not in CISCE's format, or signed by an authority the Council doesn't accept." },
    { title: "State NOC not covering the right classes", description: "An NOC that stops short of the classes you plan to run, or recognition that has lapsed." },
    { title: "Labs that don't match the lists", description: "Apparatus, safety fittings or room layouts that don't meet CISCE's lab requirement documents." },
    { title: "Governing Body gaps", description: "Missing resolutions, improperly constituted committees or member details that don't match registration records." },
    { title: "Under-qualified staff", description: "Teachers without the qualifications the Council prescribes, or weak English-medium delivery." },
    { title: "Safety compliance issues", description: "Fire, structural or CCTV gaps against the CISCE School Safety Manual." },
  ],
  help: {
    intro: "Use this guide to plan — or hand the whole process to a team that has taken schools through CISCE affiliation before.",
    body: "ICSE applications succeed or stall on detail: the exact format of the land certificate, the apparatus on a lab list, the wording of a Governing Body resolution. We prepare every element against CISCE's current rules and walk the campus with you before the Council's inspectors do.",
    items: [
      { icon: MapPinned, title: "Land & NOC strategy", description: "We match your plot to state norms and plan the NOC application." },
      { icon: Landmark, title: "Society or trust setup", description: "Objectives, Governing Body and Managing Committee structured to CISCE rules." },
      { icon: FlaskConical, title: "Lab planning", description: "Room layouts and apparatus lists built from CISCE's ICSE and ISC lab requirements." },
      { icon: ClipboardList, title: "Application filing", description: "Every certificate and upload prepared and checked before submission." },
      { icon: HardHat, title: "Mock inspection", description: "A full walk-through against the Council's checklist and safety manual." },
      { icon: UserCheck, title: "ICSE-experienced hiring", description: "Principal and teacher recruitment with English-medium depth." },
      { icon: BookOpenCheck, title: "Academic setup", description: "Subject choices, timetables and internal assessment systems." },
      { icon: Building, title: "ISC upgrade", description: "Planning and applying for Class XI–XII affiliation when you're ready." },
    ],
  },
  helpImage: brief({
    id: "ICSE-03",
    file: "start-a-school/icse-lab-inspection.webp",
    width: 1200,
    height: 800,
    title: "Lab readiness check",
    alt: "Consultant checking apparatus against a checklist in a school physics lab with the principal",
    scene:
      "An Indian education consultant with a tablet checklist and a school principal inspecting apparatus on a physics lab bench, neatly arranged equipment cupboards, an exhaust fan and fire extinguisher visible, bright clean laboratory, focused and thorough mood",
  }),
  faqs: [
    {
      question: "Who grants ICSE affiliation?",
      answer:
        "ICSE affiliation is granted by the Council for the Indian School Certificate Examinations (CISCE), New Delhi. The Council conducts the ICSE examination at Class X and the ISC examination at Class XII.",
    },
    {
      question: "How much land is required for an ICSE school?",
      answer:
        "CISCE does not publish a fixed minimum plot size like CBSE. It requires a Certificate of Land, infrastructure adequate for the number of pupils and adequate playing fields. In practice, your state's recognition rules set the minimum — many promoters plan for at least 2,000 sq m. We confirm the exact norm for your location.",
    },
    {
      question: "Is a state NOC required for ICSE affiliation?",
      answer: "Yes. CISCE requires a No Objection Certificate from the state government, covering pre-school to Class X or pre-school to Class XII as applicable.",
    },
    {
      question: "Can an ICSE school teach in Hindi or a regional language?",
      answer: "No. CISCE requires English as the medium of instruction, with special emphasis on English. Hindi and regional languages are taught as subjects.",
    },
    {
      question: "What is the difference between ICSE and ISC affiliation?",
      answer:
        "ICSE affiliation covers the secondary stage up to Class X. ISC covers the higher secondary stage, Classes XI and XII. Schools usually secure ICSE affiliation first and apply for ISC separately when they add senior classes.",
    },
    {
      question: "Can a for-profit company run an ICSE school?",
      answer: "No. The Council requires that the school is not run for profit and is managed by a registered society, trust or charitable company whose principal purpose is education.",
    },
    {
      question: "How long does ICSE affiliation take?",
      answer:
        "Most projects take 18–30 months from idea to affiliation, including land, construction and state recognition. The CISCE stage itself includes document scrutiny and an inspection before affiliation is granted.",
    },
    {
      question: "Is ICSE better than CBSE for a new school?",
      answer:
        "Neither is better in every market. ICSE often wins on premium positioning and English outcomes; CBSE wins on national familiarity and entrance-exam alignment. A feasibility study shows which board your target parents will pay for.",
    },
  ],
  references: [
    { label: "CISCE — School Affiliation (rules, land certificate format, lab requirements)", href: "https://cisce.org/?p=2669" },
    { label: "Council for the Indian School Certificate Examinations — official website", href: "https://cisce.org/" },
  ],
  related: [
    { label: "Compare school boards", href: routes.compareBoards, description: "CBSE, ICSE, IB, Cambridge and State Board side by side." },
    { label: "Feasibility study & DPR", href: routes.feasibility, description: "Test demand, fees and costs before you build." },
    { label: "CBSE school setup guide", href: routes.cbse, description: "The 2026 land norms and SARAS process explained." },
  ],
  cta: {
    title: "Open your ICSE school with a team that's done it before",
    description: "Book a free 30-minute call. We'll check your land and state NOC position and map your path to CISCE affiliation.",
    cta: { label: "Book an ICSE setup consultation", href: routes.consultation },
    reassurance: "Free land & NOC check · Named consultant · Inspection-ready documentation",
    image: brief({
      id: "ICSE-04",
      file: "start-a-school/icse-cta-assembly.webp",
      width: 900,
      height: 900,
      title: "Morning assembly",
      alt: "Students in blazers at morning assembly in a new ICSE school",
      scene:
        "Square photo of a neat morning assembly in the courtyard of a new Indian school, students aged 8 to 15 in navy blazers standing in rows, a student speaking at a small podium, teachers standing at the side, bright morning light, proud and orderly mood",
    }),
  },
};
