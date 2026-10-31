/**
 * Content for /school-improvement/school-audit
 * Target searches: "school audit", "school audit services India", "school quality assessment", "academic audit of school",
 * "CBSE SQAAF self assessment", "mock inspection for CBSE affiliation", "school safety audit".
 *
 * Frameworks referenced (CBSE SQAAF, NIEPA Shaala Siddhi, QCI-NABET, NEP 2020, NCF-SE 2023) checked October 2026.
 */
import {
  Banknote,
  Building2,
  ClipboardCheck,
  GraduationCap,
  Landmark,
  Megaphone,
  Presentation,
  ShieldCheck,
} from "lucide-react";

import type { ManagementGuideData } from "@/components/sections/service/ManagementGuide";
import { routes } from "@/config/navigation";
import { brief } from "@/data/images";

export const page: ManagementGuideData = {
  serviceName: "School audit and quality assessment services",
  meta: {
    path: routes.audit,
    title: "School Audit & Quality Assessment in India",
    description:
      "Independent school audits covering academics, teaching, safety, compliance and finances — benchmarked to CBSE SQAAF and NEP 2020, with a 90-day action plan.",
    keywords: [
      "school audit",
      "school audit services India",
      "school quality assessment",
      "academic audit of school",
      "CBSE SQAAF self assessment",
      "mock inspection for CBSE affiliation",
      "school safety audit",
      "school compliance audit",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "School Improvement", href: routes.improvement },
      { label: "School Audit", href: routes.audit },
    ],
    eyebrow: "School improvement · Audit",
    title: "School Audit & Quality Assessment Services",
    description:
      "An independent, evidence-based review of how your school is really performing — in classrooms, in the office, on the buses and with parents. You get a clear score, a ranked list of priorities and a 90-day plan to act on them.",
    primary: { label: "Book a school audit", href: routes.consultation },
    secondary: { label: "See what we audit", href: "#scope" },
    facts: [
      { value: "8", label: "Areas reviewed" },
      { value: "SQAAF", label: "CBSE framework aligned" },
      { value: "90-day", label: "Action plan included" },
      { value: "Independent", label: "Third-party view" },
    ],
    image: brief({
      id: "AUD-01",
      file: "school-improvement/audit-hero-observation.webp",
      width: 1400,
      height: 1050,
      title: "Classroom observation during an audit",
      alt: "Education auditor observing a lesson and taking notes at the back of a classroom",
      scene:
        "An Indian education auditor in smart formal clothes seated at the back of a bright classroom observing a lesson, writing notes on a tablet with a rubric, the teacher at the front engaging students aged 11 to 12 who are raising hands, natural daylight, professional and attentive mood",
    }),
  },
  toc: [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "What we audit" },
    { id: "specialised", label: "Audit week" },
    { id: "models", label: "Audit packages" },
    { id: "process", label: "How it works" },
    { id: "kpis", label: "Your audit report" },
    { id: "compliance", label: "Frameworks we use" },
    { id: "signs", label: "When to audit" },
    { id: "faq", label: "FAQs" },
  ],
  eyebrows: {
    scope: "What we audit",
    models: "Audit packages",
    kpis: "Deliverables",
    compliance: "Benchmarks",
    signs: "When to audit",
  },
  titles: {
    overview: "Why every school needs an independent audit",
    scope: "Eight areas we review in every school audit",
    specialised: "What happens during audit week",
    models: "Choose the audit that fits your need",
    process: "How a school audit works, step by step",
    kpis: "What your audit report includes",
    compliance: "Frameworks we benchmark your school against",
    signs: "When should a school get audited?",
    faq: "School audit: common questions",
  },
  overview: {
    paragraphs: [
      "Most school owners know something isn't working — results have plateaued, admissions are slowing, good teachers are leaving — but not exactly why. Internal reviews rarely help: staff are too close to the problem, and few people will tell the owner what they really see.",
      "A school audit gives you an outside view grounded in evidence. We observe lessons, check records against board and state norms, walk the campus, review finances and speak to teachers, students and parents. Then we tell you plainly what's working, what isn't, what it is costing you, and what to fix first.",
    ],
    benefits: {
      title: "What you get",
      items: [
        "An honest, independent picture of your school",
        "Scores for each area against recognised frameworks",
        "Compliance gaps found before an inspector finds them",
        "A ranked list of priorities, with costs and owners",
        "A practical 90-day action plan",
      ],
    },
    fit: {
      title: "Who it's for",
      items: [
        "Trusts and owners who want a clear baseline",
        "Schools preparing for affiliation or extension",
        "New principals in their first term",
        "Schools with falling results or enrolment",
        "Groups comparing performance across campuses",
      ],
    },
  },
  scope: {
    intro: "Every audit covers the whole school. You can also commission a focused audit of one or two areas.",
    items: [
      {
        icon: GraduationCap,
        title: "Teaching & learning",
        description: "Lesson observations, lesson plans, notebooks, assessment practice and learning outcomes by grade and subject.",
      },
      {
        icon: Presentation,
        title: "Curriculum & academics",
        description: "Curriculum planning, timetables, academic calendar, board-result analysis and alignment with NEP 2020 and NCF-SE 2023.",
      },
      {
        icon: Landmark,
        title: "Leadership & governance",
        description: "Role clarity, decision-making, management committee functioning, policies and leadership capacity.",
      },
      {
        icon: ClipboardCheck,
        title: "Affiliation & compliance",
        description: "Records and certificates checked against your board's bye-laws, state recognition and statutory requirements.",
      },
      {
        icon: ShieldCheck,
        title: "Safety & child protection",
        description: "Fire and building safety, CCTV, visitor control, transport safety, POCSO policy and training, incident records.",
      },
      {
        icon: Building2,
        title: "Infrastructure & facilities",
        description: "Classrooms, labs, library, sports, toilets and accessibility — condition, use and adequacy for your enrolment.",
      },
      {
        icon: Banknote,
        title: "Finance & fees",
        description: "Fee structure, collection efficiency, dues, cost per student, salary ratios and budgeting practice.",
      },
      {
        icon: Megaphone,
        title: "Admissions & reputation",
        description: "Enquiry handling, conversion, retention, online reviews and parent satisfaction — with a mystery-parent enquiry.",
      },
    ],
  },
  specialised: {
    eyebrow: "On-site review",
    intro: "The heart of every audit is time on campus. A typical audit week for a mid-sized school looks like this.",
    image: brief({
      id: "AUD-02",
      file: "school-improvement/audit-records-review.webp",
      width: 1200,
      height: 800,
      title: "Records and compliance review",
      alt: "Auditor reviewing school registers and certificates with the school administrator",
      scene:
        "An Indian education auditor and a school administrator seated at a table in a tidy school office reviewing files, registers and certificates in folders, the auditor ticking items on a checklist, steel cupboards and a wall clock behind, bright natural light, careful and thorough mood",
    }),
    items: [
      "Opening meeting with the owner and principal to agree priorities",
      "Observation of a sample of lessons across grades and subjects",
      "Review of records, registers, certificates and policies",
      "Campus walk covering safety, facilities and accessibility",
      "Focus groups with teachers, students and parents",
      "Review of finances, fee data and admissions funnel",
      "Closing meeting with headline findings before we leave",
    ],
  },
  models: {
    intro: "Pick a full audit for a complete baseline, or a focused audit when you have a specific goal or deadline.",
    table: {
      caption: "School audit packages compared",
      columns: ["Package", "Best for", "What it covers", "Typical on-site time"],
      rows: [
        ["Comprehensive school audit", "A full baseline and improvement plan", "All eight areas, with stakeholder surveys", "3–5 days"],
        ["Affiliation & mock inspection", "Schools applying for affiliation, extension or upgrade", "Board and state compliance, infrastructure, records, staff files", "1–2 days"],
        ["Academic audit", "Raising results and teaching quality", "Lesson observations, assessment, curriculum and results analysis", "2–3 days"],
        ["Safety & safeguarding audit", "Day or boarding schools reviewing child safety", "Fire, building, transport, CCTV, POCSO, visitor control, hostels", "1–2 days"],
      ],
      note: "On-site time depends on the size of the school and the number of campuses. Multi-campus groups can audit every campus against the same scorecard.",
    },
  },
  process: {
    intro: "From scoping call to a funded action plan in about four to six weeks.",
    steps: [
      {
        title: "Scoping call",
        timing: "Week 1",
        description: "Agree your goals, the package, the campus schedule and the people we'll meet.",
      },
      {
        title: "Pre-visit data request",
        timing: "Weeks 1–2",
        description: "You share key documents — results, enrolment, fee data, staff lists and certificates — through a secure folder.",
      },
      {
        title: "On-site audit",
        timing: "Weeks 2–3",
        description: "Lesson observations, records review, campus walk, focus groups and a closing meeting with headline findings.",
      },
      {
        title: "Analysis & scoring",
        timing: "Weeks 3–4",
        description: "Evidence is scored against our rubric and the relevant frameworks, and compared with similar schools.",
      },
      {
        title: "Report & presentation",
        timing: "Weeks 4–6",
        description: "A written report and a presentation to your trust or management committee, with time for questions.",
      },
      {
        title: "90-day plan & re-audit",
        timing: "After the report",
        description: "Prioritised actions with owners and budgets. A follow-up review after 6–12 months shows what has improved.",
        link: { label: "Get help implementing the plan", href: routes.management },
      },
    ],
  },
  kpis: {
    intro: "You get more than a list of problems. Every report is written to be acted on.",
    table: {
      caption: "Contents of a Grow Edu System school audit report",
      columns: ["Section", "What it contains"],
      rows: [
        ["Executive summary", "The school's overall position, top strengths and the five priorities that matter most"],
        ["Scorecard", "A score for each of the eight areas, with the evidence behind it"],
        ["Compliance gap list", "Every missing or expired item against board, state and statutory requirements, ranked by risk"],
        ["Teaching & learning findings", "Patterns from lesson observations, with examples of strong practice to spread"],
        ["Stakeholder voice", "What teachers, students and parents told us, summarised anonymously"],
        ["Financial snapshot", "Fee collection, cost per student and the financial impact of key issues"],
        ["90-day action plan", "Actions with owners, timelines and estimated costs"],
      ],
    },
  },
  compliance: {
    intro: "Our rubric draws on recognised Indian and international frameworks, so your results mean something beyond our own opinion.",
    items: [
      "CBSE's School Quality Assessment and Assurance Framework (SQAAF) for self-assessment",
      "Shaala Siddhi — NIEPA's national school standards and evaluation framework",
      "QCI-NABET school accreditation standards",
      "National Education Policy 2020 and NCF for School Education 2023",
      "Your board's affiliation bye-laws (CBSE, CISCE, IB or Cambridge requirements)",
      "Recognition norms under the RTE Act, 2009 and your state's rules",
      "Ministry of Education Guidelines on School Safety and Security (2021)",
      "NCPCR's Manual on Safety and Security of Children in Schools",
    ],
    callout: {
      title: "An audit is not an accreditation",
      body: "Our audit benchmarks your school against these frameworks to help you improve. It does not replace a board inspection or a formal accreditation — but it is the best preparation for both.",
    },
  },
  signs: [
    { title: "An inspection is coming", description: "Affiliation, extension, upgrade or state inspection due in the next 6–12 months." },
    { title: "Results have plateaued", description: "Board or internal results that haven't improved for two or more years." },
    { title: "Admissions are slowing", description: "Fewer enquiries, lower conversion or more withdrawals at session end." },
    { title: "A new principal has joined", description: "A fresh leader needs an objective baseline to plan from." },
    { title: "Safety concerns from parents", description: "Questions about transport, supervision or incidents that need an honest check." },
    { title: "You're planning to expand", description: "Before adding grades or campuses, make sure the first school is strong." },
  ],
  faqs: [
    {
      question: "What is a school audit?",
      answer:
        "A school audit is an independent, evidence-based review of a school's academics, teaching quality, leadership, compliance, safety, infrastructure, finances and admissions. It ends with a scored report and a prioritised action plan.",
    },
    {
      question: "How long does a school audit take?",
      answer:
        "A comprehensive audit takes about four to six weeks from scoping to final report, including three to five days on campus for a mid-sized school. Focused audits, such as a mock inspection, are faster.",
    },
    {
      question: "Will teachers feel they are being inspected?",
      answer:
        "We position the audit as support, not judgement. Lesson observations are developmental, individual teachers are not named in the report, and staff get feedback on strong practice as well as areas to grow.",
    },
    {
      question: "Can you do a mock inspection before CBSE affiliation?",
      answer:
        "Yes. Our affiliation and mock inspection audit checks your land, building, facilities, staff files, records and website disclosures against the current bye-laws and walks the campus the way an inspection committee would.",
    },
    {
      question: "Is the audit aligned with CBSE's SQAAF?",
      answer:
        "Yes. For CBSE schools, our rubric maps to the School Quality Assessment and Assurance Framework, so findings feed directly into your SQAAF self-assessment and improvement plan.",
    },
    {
      question: "Is the audit report confidential?",
      answer: "Yes. The report belongs to your trust or management. We sign a confidentiality agreement and don't share findings with anyone without your permission.",
    },
    {
      question: "Do you help implement the recommendations?",
      answer:
        "If you want us to. Many schools follow the audit with our admissions growth, teacher training or school management services. Others implement the plan themselves, with a follow-up review after 6–12 months.",
    },
    {
      question: "How much does a school audit cost?",
      answer:
        "The fee depends on the package, the school's size and the number of campuses. We share a fixed quote after the scoping call, so there are no surprises.",
    },
  ],
  references: [
    { label: "CBSE — School Quality Assessment and Assurance Framework (SQAAF)", href: "https://saras.cbse.gov.in/sqaa/Home/aboutsqaaframework" },
    { label: "Ministry of Education — Shaala Siddhi", href: "https://www.education.gov.in/node/13513" },
  ],
  related: [
    { label: "Admissions growth", href: routes.admissions, description: "Turn audit findings into more enquiries and admissions." },
    { label: "Teacher training", href: routes.training, description: "Close the teaching gaps the audit identifies." },
    { label: "Day school management", href: routes.dayManagement, description: "Let us implement the plan with your team." },
  ],
  cta: {
    title: "Find out where your school really stands",
    description: "Book a free 30-minute call. We'll understand your goals and recommend the right audit for your school.",
    cta: { label: "Book a school audit", href: routes.consultation },
    reassurance: "Independent · Confidential · 90-day action plan included",
    image: brief({
      id: "AUD-03",
      file: "school-improvement/audit-cta-report.webp",
      width: 900,
      height: 900,
      title: "Presenting audit findings",
      alt: "Consultant presenting a school audit scorecard to trust members",
      scene:
        "Square photo of an Indian education consultant presenting a bound audit report and a scorecard chart on a screen (no readable text) to three trust members in a school boardroom, attentive faces, soft daylight, constructive mood",
    }),
  },
};
