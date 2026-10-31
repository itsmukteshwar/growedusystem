/**
 * Content for /start-a-school/cambridge-igcse
 * Target searches: "how to start a Cambridge school in India", "IGCSE affiliation", "Cambridge school registration",
 * "IGCSE school setup", "Cambridge International school requirements", "IGCSE affiliation consultant".
 *
 * Facts checked in October 2026 against cambridgeinternational.org (India page, registration process and
 * programme details). Re-verify before each update.
 */
import {
  BookOpenCheck,
  Building,
  ClipboardList,
  FileCheck2,
  Globe2,
  HardHat,
  Landmark,
  Layers,
  UserCheck,
} from "lucide-react";

import type { BoardGuideData } from "@/components/sections/service/BoardGuide";
import { routes } from "@/config/navigation";
import { boardGuideToc } from "@/data/services/board-guide";
import { brief } from "@/data/images";

export const page: BoardGuideData = {
  serviceName: "Cambridge International (IGCSE) school setup and registration consultancy",
  meta: {
    path: routes.igcse,
    title: "Start a Cambridge IGCSE School in India",
    description:
      "How to become a Cambridge International school in India: programmes, the registration process and approval visit, infrastructure, staff and timelines.",
    keywords: [
      "how to start a Cambridge school in India",
      "IGCSE affiliation",
      "Cambridge school registration",
      "IGCSE school setup",
      "Cambridge International school requirements",
      "IGCSE affiliation consultant",
      "Cambridge A Level school India",
      "Cambridge approval visit",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "Start a School", href: routes.startSchool },
      { label: "Cambridge IGCSE Setup", href: routes.igcse },
    ],
    eyebrow: "Start a school · Cambridge International",
    title: "How to Start a Cambridge IGCSE School in India",
    description:
      "Cambridge schools are 'registered', not affiliated — after an application and an approval visit against Cambridge's quality standards. Here's how to plan the school, meet Indian rules and register for Cambridge Primary to A Level.",
    primary: { label: "Book a Cambridge setup consultation", href: routes.consultation },
    secondary: { label: "See the registration steps", href: "#process" },
    facts: [
      { value: "1,000+", label: "Cambridge schools in India" },
      { value: "70+", label: "IGCSE subjects" },
      { value: "4 steps", label: "To registration" },
      { value: "Age 3–19", label: "Early Years to A Level" },
    ],
    image: brief({
      id: "IGCSE-01",
      file: "start-a-school/igcse-hero-students.webp",
      width: 1400,
      height: 1050,
      title: "Cambridge students in a modern campus",
      alt: "Secondary students walking and talking in the atrium of a modern international school in India",
      scene:
        "A bright modern international school atrium in India with glass, timber and planters, secondary students aged 14 to 17 in smart uniforms walking and chatting with books and laptops, a teacher greeting them, clean contemporary architecture, airy daylight, confident and global mood",
    }),
  },
  toc: boardGuideToc("Cambridge programmes"),
  titles: {
    why: "Why choose Cambridge for your new school?",
    eligibility: "What Cambridge looks for in a new school",
    requirements: "Cambridge programmes from Early Years to A Level",
    infrastructure: "Infrastructure requirements for a Cambridge school",
    staff: "Staff and academic requirements",
    process: "The Cambridge registration process, step by step",
    documents: "Documents for Cambridge registration",
    timeline: "How long does it take to start a Cambridge school?",
    delays: "Common reasons Cambridge registration gets delayed",
    help: "How Grow Edu System helps you become a Cambridge school",
    faq: "Starting a Cambridge IGCSE school: common questions",
  },
  why: {
    paragraphs: [
      "Cambridge International Education, part of the University of Cambridge, offers international curricula and qualifications to more than 10,000 schools in over 160 countries. In India it works with more than 1,000 schools, and says its qualifications are recognised by Indian universities and over 2,200 universities worldwide.",
      "Cambridge IGCSE (Grades 9–10) and AS & A Level (Grades 11–12) are the best-known qualifications, with 70+ and 50+ subjects respectively. The flexibility to choose subjects and combine Cambridge with other programmes — for example IB MYP or DP — makes it a popular choice for international and premium schools.",
    ],
    pros: [
      "Internationally recognised qualifications",
      "Very wide subject choice at IGCSE and A Level",
      "Flexible — can be combined with other programmes",
      "Clear syllabuses and external assessment",
    ],
    considerations: [
      "Exam fees paid per candidate, usually in foreign currency",
      "Teachers need Cambridge training and experience",
      "Higher resource and library expectations",
      "State recognition still required in India",
    ],
  },
  eligibility: {
    intro: "Cambridge registers schools that meet its quality standards — and in India, the school must also be lawfully established under state rules.",
    items: [
      {
        icon: Landmark,
        title: "A legally established school",
        description: "Run by a registered trust, society or Section 8 company, with recognition or permission from the state education department.",
      },
      {
        icon: Building,
        title: "Suitable premises and resources",
        description: "Safe, adequate buildings, labs and learning resources for the Cambridge programmes and subjects you plan to offer.",
      },
      {
        icon: UserCheck,
        title: "Qualified leadership and teachers",
        description: "A head of school and subject teachers able to deliver Cambridge syllabuses, with a plan for Cambridge professional development.",
      },
      {
        icon: FileCheck2,
        title: "Secure exam administration",
        description: "The ability to meet Cambridge's rules for conducting exams, including secure storage of papers and trained exams staff.",
      },
    ],
  },
  requirements: {
    intro: "You can offer one Cambridge stage or the whole pathway. Most new schools start with Primary and Lower Secondary, then add IGCSE and A Level as students move up.",
    table: {
      caption: "Cambridge International programmes offered to schools in India",
      columns: ["Stage", "Typical age", "Qualification / programme", "Notes"],
      rows: [
        ["Cambridge Early Years", "3+", "Early years curriculum", "Adopted by 100+ schools in India"],
        ["Cambridge Primary", "5–11", "10+ subjects incl. English, Maths, Science", "Optional Checkpoint assessments"],
        ["Cambridge Lower Secondary", "11–14", "10+ subjects incl. English, Maths, Science", "Prepares students for IGCSE"],
        ["Cambridge Upper Secondary", "14–16", "Cambridge IGCSE (70+ subjects), O Level (40+), ICE", "Equivalent stage to Class 10"],
        ["Cambridge Advanced", "16–19", "AS & A Level (50+ subjects), AICE, IPQ", "Equivalent stage to Class 12"],
      ],
      note: "Source: Cambridge International Education — India page (cambridgeinternational.org), checked October 2026.",
    },
    callout: {
      title: "Recognition for Indian university admission",
      body: "Cambridge qualifications are accepted by Indian universities, but some courses and states set specific subject or equivalence requirements. Plan subject choices at IGCSE and A Level with university pathways in mind.",
    },
  },
  infrastructure: {
    intro:
      "Cambridge checks that the school can deliver its programmes well and run exams securely; your state's recognition rules set the land and building minimums. Plan for these as a baseline.",
    essentials: [
      "Classrooms suited to active, discussion-based learning",
      "Science labs for practical work in IGCSE and A Level sciences",
      "Computer lab and reliable internet for teaching and Cambridge systems",
      "A well-resourced library with international texts",
      "A secure, lockable room for storing question papers",
      "An exam hall or rooms that meet Cambridge invigilation rules",
      "Art, music, design and sports facilities for the subjects you offer",
      "Fire, building and child-safety compliance under state rules",
    ],
  },
  staff: [
    "A head of school committed to Cambridge standards",
    "Subject teachers qualified in their subjects, with strong English",
    "A Cambridge exams officer to manage entries and exam administration",
    "Cambridge introductory and subject training for teachers",
    "A programme coordinator for each Cambridge stage",
    "University and careers guidance for IGCSE and A Level students",
    "Learning-support staff for students who need extra help",
    "Written service rules, appointment letters and salary through bank transfer",
  ],
  staffImage: brief({
    id: "IGCSE-02",
    file: "start-a-school/igcse-science-practical.webp",
    width: 1200,
    height: 800,
    title: "IGCSE science practical",
    alt: "Students carrying out a physics practical under a teacher's guidance",
    scene:
      "IGCSE students aged 15 in lab coats measuring with a pendulum and stopwatch on a modern lab bench, a young male teacher guiding them, neat lab with equipment cupboards, bright clean light, focused and hands-on mood",
  }),
  process: {
    intro: "Cambridge describes registration in four steps: express interest, application, approval visit and becoming a Cambridge school. Here's how they fit into opening a new school in India.",
    steps: [
      {
        title: "Feasibility & programme plan",
        timing: "Months 0–3",
        description: "Confirm demand for Cambridge at your fee level and plan which stages to offer, and how they map to Indian classes.",
        link: { label: "Read about feasibility & DPR", href: routes.feasibility },
      },
      {
        title: "Legal setup, land and state recognition",
        timing: "Months 1–18",
        description: "Register the sponsoring body, secure land, build to state norms and obtain state recognition or permission.",
      },
      {
        title: "Express your interest",
        timing: "Once the school plan is firm",
        description: "Submit an expression of interest to Cambridge. The regional team in India gets in touch to explain requirements.",
      },
      {
        title: "Complete the application form",
        timing: "After discussions",
        description: "Provide details of your school, leadership, facilities, staffing and the programmes you want to offer.",
      },
      {
        title: "Approval visit",
        timing: "After the application",
        description: "Cambridge visits to check the school against its registration quality standards, including exams security.",
        points: ["Leadership and teaching capacity", "Facilities and resources", "Secure storage and exam arrangements"],
      },
      {
        title: "Become a Cambridge school",
        timing: "On approval",
        description: "Once approved, the school is registered, gets access to Cambridge support and resources, and can make exam entries.",
      },
    ],
  },
  documents: {
    intro: "Cambridge's application asks for information on your school; Indian regulations add their own requirements. Plan for these as a minimum.",
    items: [
      "Registration certificate and deed or bye-laws of the sponsoring body",
      "State recognition, permission or NOC for the school",
      "Land documents and approved building plan",
      "Building, fire and sanitation safety certificates",
      "Organisation chart and leadership CVs",
      "Staff list with qualifications",
      "Details of programmes, subjects and expected student numbers",
      "Plans for secure storage of exam papers and exam administration",
      "Fee structure and admission policy",
      "Photographs of facilities",
    ],
  },
  timeline: {
    caption: "Typical timeline to start a Cambridge school",
    columns: ["Stage", "Typical duration", "What decides the pace"],
    rows: [
      ["Feasibility and programme plan", "1–3 months", "Market data and land options"],
      ["Legal setup and land", "2–6 months", "Registration and title checks"],
      ["Construction and state recognition", "9–18 months", "Approvals, funding and state rules"],
      ["Cambridge application and approval visit", "Typically a few months", "Readiness of staff, facilities and exam arrangements"],
      ["First Cambridge exam entries", "When students reach IGCSE / A Level", "Your intake grades and exam series"],
    ],
    note: "Most new schools open within 18–24 months, often registering with Cambridge before or soon after opening so Primary and Lower Secondary can start from day one.",
  },
  delays: [
    { title: "State recognition not in place", description: "Cambridge registration doesn't replace Indian approval — schools without recognition face regulatory risk." },
    { title: "No secure exam storage", description: "Missing a lockable, controlled store for confidential exam materials." },
    { title: "Teachers new to Cambridge", description: "Staff unfamiliar with Cambridge syllabuses and assessment, without a training plan." },
    { title: "Unclear Indian-class mapping", description: "No clear plan for how Cambridge stages align with Indian classes and transfers." },
    { title: "Thin resources", description: "Labs, library and ICT that can't support the subjects you've applied to offer." },
    { title: "Budget surprises", description: "Exam fees and foreign-currency costs not built into fee planning." },
  ],
  help: {
    intro: "Use this guide to plan — or let a team experienced in both Indian approvals and Cambridge registration take you through it.",
    body: "We set up your school legally under state rules, design the campus and resources around the Cambridge programmes you plan to offer, and prepare leadership and exams staff for the approval visit — so registration is a formality, not a hurdle.",
    items: [
      { icon: Layers, title: "Programme pathway", description: "Which Cambridge stages to offer and how they map to Indian classes." },
      { icon: Landmark, title: "Legal & state approvals", description: "Trust setup, land, building plans and state recognition." },
      { icon: Building, title: "Campus & resources", description: "Labs, library, ICT and secure exam storage designed in." },
      { icon: UserCheck, title: "Hiring", description: "Head of school, Cambridge-experienced teachers and an exams officer." },
      { icon: ClipboardList, title: "Application support", description: "Expression of interest and application prepared with you." },
      { icon: HardHat, title: "Approval-visit readiness", description: "A rehearsal against Cambridge's quality standards." },
      { icon: Globe2, title: "University guidance setup", description: "Counselling systems for Indian and overseas admissions." },
      { icon: BookOpenCheck, title: "Academic launch", description: "Schemes of work, timetables and teacher training." },
    ],
  },
  helpImage: brief({
    id: "IGCSE-03",
    file: "start-a-school/igcse-exam-room.webp",
    width: 1200,
    height: 800,
    title: "Exam room readiness",
    alt: "Exams officer and consultant checking an exam hall set-up with spaced desks",
    scene:
      "An Indian exams officer and an education consultant walking through a quiet school exam hall with neatly spaced individual desks, a wall clock and seating plan board (no readable text), the consultant holding a checklist, bright even light, calm and orderly mood",
  }),
  faqs: [
    {
      question: "Is IGCSE a board like CBSE?",
      answer:
        "Not exactly. Cambridge International Education registers schools to offer its programmes and qualifications, including IGCSE. In India, the school still needs recognition from the state education department.",
    },
    {
      question: "How does a school become a Cambridge school?",
      answer:
        "Cambridge describes four steps: express your interest, complete the application form, host an approval visit and become a Cambridge school. The approval visit checks the school against Cambridge's registration quality standards.",
    },
    {
      question: "How many Cambridge schools are there in India?",
      answer: "Cambridge International says it works with more than 1,000 schools in India, and more than 100 schools have adopted its Early Years programme.",
    },
    {
      question: "Are IGCSE and A Levels recognised by Indian universities?",
      answer:
        "Cambridge states its qualifications are recognised by Indian universities and over 2,200 universities worldwide. Some courses set specific subject requirements, so plan subject choices with university pathways in mind.",
    },
    {
      question: "Can a school offer Cambridge and CBSE together?",
      answer:
        "Some schools run separate streams, but each board has its own rules on dual programmes. We assess what's permitted for your school and state before you plan a dual-curriculum campus.",
    },
    {
      question: "Can a Cambridge school be combined with the IB?",
      answer: "Yes. A common international pathway is IB PYP, Cambridge IGCSE at Grades 9–10, and IB Diploma at Grades 11–12.",
    },
    {
      question: "What does it cost to run Cambridge programmes?",
      answer:
        "Costs include Cambridge's school fees, per-candidate exam entry fees, teacher training and resources. Exam fees are usually passed on to parents. We build these into your fee model during feasibility.",
    },
    {
      question: "How long does Cambridge registration take?",
      answer:
        "The Cambridge stage — application to approval — typically takes a few months once the school is ready. Building and approving the school itself usually takes 18–24 months.",
    },
  ],
  references: [
    { label: "Cambridge International — Become a Cambridge school in India", href: "https://www.cambridgeinternational.org/cambridge-international-in-india/become-a-cambridge-international-school-in-india/" },
    { label: "Cambridge International — Registration quality standards", href: "https://www.cambridgeinternational.org/why-choose-us/join-cambridge/our-requirements/" },
  ],
  related: [
    { label: "Compare school boards", href: routes.compareBoards, description: "CBSE, ICSE, IB, Cambridge and State Board side by side." },
    { label: "IB school setup", href: routes.ib, description: "Combine Cambridge with IB PYP or Diploma." },
    { label: "Feasibility study & DPR", href: routes.feasibility, description: "Test whether international fees work in your market." },
  ],
  cta: {
    title: "Launch a Cambridge school with confidence",
    description: "Book a free 30-minute call. We'll map your programme pathway, approvals and a realistic opening date.",
    cta: { label: "Book a Cambridge setup consultation", href: routes.consultation },
    reassurance: "Indian approvals + Cambridge registration · Named consultant · Exam-ready setup",
    image: brief({
      id: "IGCSE-04",
      file: "start-a-school/igcse-cta-graduates.webp",
      width: 900,
      height: 900,
      title: "Proud graduates",
      alt: "Smiling senior students celebrating results outside their international school",
      scene:
        "Square photo of three smiling Indian senior students aged 17 to 18 in smart uniforms celebrating outside a modern school building, one holding a results envelope, a proud teacher beside them, golden afternoon light, joyful mood",
    }),
  },
};
