/**
 * Content for /school-management/boarding-school
 * Target searches: "boarding school management services", "residential school management India", "hostel management for schools",
 * "boarding school consultant India", "residential school operations", "boarding house management".
 *
 * Compliance references (POCSO, NCPCR safety manual, MoE safety guidelines, FSSAI school food regulations) checked October 2026.
 */
import {
  BedDouble,
  BookOpenCheck,
  Calculator,
  HeartPulse,
  Megaphone,
  ShieldCheck,
  Trophy,
  UserCog,
  Utensils,
} from "lucide-react";

import type { ManagementGuideData } from "@/components/sections/service/ManagementGuide";
import { routes } from "@/config/navigation";
import { brief } from "@/data/images";
import { engagementModels, managementToc } from "@/data/services/management-guide";

export const page: ManagementGuideData = {
  serviceName: "Boarding and residential school management services",
  meta: {
    path: routes.boardingManagement,
    title: "Boarding School Management Services",
    description:
      "Boarding school management in India: house parents, 24×7 pastoral care, safeguarding, hostel dining and health — plus academics and admissions, run by one team.",
    keywords: [
      "boarding school management services",
      "residential school management India",
      "hostel management for schools",
      "boarding school consultant India",
      "residential school operations",
      "boarding house management",
      "school hostel safety",
      "pastoral care boarding school",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "School Management", href: routes.management },
      { label: "Boarding School Management", href: routes.boardingManagement },
    ],
    eyebrow: "School management · Boarding & residential",
    title: "Boarding School Management Services",
    description:
      "A boarding school is responsible for children 24 hours a day. We run residential schools with the systems that parents expect — trained house parents, safe hostels, good food, round-the-clock health care and a rich life beyond the classroom.",
    primary: { label: "Book a boarding consultation", href: routes.consultation },
    secondary: { label: "See residential care", href: "#specialised" },
    facts: [
      { value: "24×7", label: "Care and supervision" },
      { value: "9", label: "Functions under one team" },
      { value: "Day + night", label: "Duty rosters & checks" },
      { value: "You", label: "Retain ownership & control" },
    ],
    image: brief({
      id: "BRD-01",
      file: "school-management/boarding-hero-campus.webp",
      width: 1400,
      height: 1050,
      title: "Boarding school campus at dusk",
      alt: "Students walking back to their boarding houses across a green residential school campus at dusk",
      scene:
        "A large green residential school campus in the Indian hills at golden-hour dusk, students aged 11 to 16 in casual house T-shirts walking in small groups from the sports fields toward warmly lit hostel buildings, a house parent walking with them, mountains softly in the background, peaceful and safe mood",
    }),
  },
  toc: managementToc("Residential care"),
  titles: {
    overview: "What makes boarding school management different",
    scope: "Everything we manage in a boarding school",
    specialised: "Residential care that parents can trust",
    models: "Choose how involved you want us to be",
    process: "How a boarding management engagement works",
    kpis: "What we measure — and report to you every month",
    compliance: "Safeguarding and compliance we keep on track",
    signs: "Signs your boarding school needs support",
    faq: "Boarding school management: common questions",
  },
  overview: {
    paragraphs: [
      "Parents who choose a boarding school hand over far more than education. They trust the school with their child's safety, health, food, friendships and emotional wellbeing — every hour of the day and night. That trust is the school's real product, and it is earned in the boarding house as much as in the classroom.",
      "Boarding school management adds a full residential layer to everything a day school does: house parents and wardens, night supervision, a dining operation, a health centre, weekend programmes and constant communication with families who may live far away. We bring the people, routines and safeguarding systems that make this work, and report to your trust every month.",
    ],
    benefits: {
      title: "What you get",
      items: [
        "Trained house parents and wardens for every house",
        "A written safeguarding framework and duty rosters",
        "Nutritious, FSSAI-compliant dining operations",
        "A health centre with clear medical protocols",
        "Weekend and co-curricular life that keeps boarders engaged",
      ],
    },
    fit: {
      title: "Who it's for",
      items: [
        "Promoters opening a new residential school",
        "Day schools adding hostel facilities",
        "Boarding schools with falling boarder numbers",
        "Trusts concerned about safety or reputation",
        "Schools upgrading to an international standard",
      ],
    },
  },
  scope: {
    intro: "Take the full service or only the functions you need. Each comes with SOPs, an owner and measurable targets.",
    items: [
      {
        icon: BedDouble,
        title: "Boarding house management",
        description: "House structure, room allocation, house parents and wardens, daily routines, study hours and lights-out.",
      },
      {
        icon: ShieldCheck,
        title: "Safeguarding & security",
        description: "Child protection policy, POCSO training, visitor and outing controls, CCTV, night rounds and incident reporting.",
      },
      {
        icon: HeartPulse,
        title: "Health & wellbeing",
        description: "Infirmary staffing, medical records, medication protocols, counselling, and tie-ups with nearby hospitals.",
      },
      {
        icon: Utensils,
        title: "Dining & nutrition",
        description: "Menu planning with a nutritionist, kitchen hygiene, FSSAI compliance, special diets and food-cost control.",
      },
      {
        icon: BookOpenCheck,
        title: "Academics & prep",
        description: "Curriculum planning, supervised evening prep, tutorials and academic tracking for every boarder.",
      },
      {
        icon: Trophy,
        title: "Co-curricular & weekends",
        description: "Sports, clubs, outdoor education and structured weekend programmes so boarders are never idle.",
      },
      {
        icon: UserCog,
        title: "Leadership & HR",
        description: "Recruitment and training of principals, teachers and residential staff, with rosters that respect rest hours.",
      },
      {
        icon: Calculator,
        title: "Finance & procurement",
        description: "Budgets, boarding fee structures, vendor contracts for food and housekeeping, and monthly MIS.",
      },
      {
        icon: Megaphone,
        title: "Admissions & parent relations",
        description: "Admissions for local, national and overseas families, induction for new boarders and regular parent updates.",
      },
    ],
  },
  specialised: {
    eyebrow: "Residential life",
    intro: "Boarding works when every hour has an adult responsible for it. These are the residential systems we put in place.",
    image: brief({
      id: "BRD-02",
      file: "school-management/boarding-house-parent.webp",
      width: 1200,
      height: 800,
      title: "House parent with boarders",
      alt: "House parent helping boarders with evening study in a warm boarding-house common room",
      scene:
        "A warm, homely boarding-house common room in an Indian residential school in the evening, a kind female house parent in her 40s helping three boarders aged 12 to 13 with homework at a study table, other students reading on sofas, soft lamp light, bookshelves and a notice board (no readable text), caring and safe mood",
    }),
    items: [
      "Resident house parents and wardens, with women staff for girls' houses",
      "Separate, secured boarding wings for boys and girls",
      "Fixed daily routine: wake-up, meals, prep, activities and lights-out",
      "Head counts at set times and documented night rounds",
      "Controlled visitors, outings and leave with parental consent",
      "Regular, scheduled calls and updates between boarders and families",
      "Induction and buddy system for new boarders to manage homesickness",
      "Weekend programmes and supervised outings",
    ],
  },
  models: {
    intro: "Choose the level of support that fits your team today. Many schools begin with an audit of the boarding houses and grow from there.",
    table: engagementModels,
  },
  process: {
    intro: "Every engagement begins with a close look at the residential experience, including overnight observation.",
    steps: [
      {
        title: "Residential & safety audit",
        timing: "Weeks 1–4",
        description:
          "A review of boarding houses, safeguarding, health, dining, academics, staffing and finances — including evening and night observation, and surveys of boarders, parents and staff.",
        link: { label: "About our school audit", href: routes.audit },
      },
      {
        title: "Management plan & targets",
        timing: "Weeks 4–6",
        description: "A written plan with priorities, budgets and targets for safety, boarder satisfaction, occupancy, results and finances, agreed with your trust.",
      },
      {
        title: "Residential team set-up",
        timing: "Months 2–3",
        description: "Recruit and train house parents, wardens, nurses and dining staff; set up duty rosters and the safeguarding team.",
      },
      {
        title: "Systems, SOPs & training",
        timing: "Months 2–6",
        description: "Roll out boarding SOPs, health and dining protocols, the ERP and the dashboard, with child-protection training for every adult on campus.",
      },
      {
        title: "Run, measure, improve",
        timing: "Ongoing",
        description: "Monthly dashboards and reviews, termly safeguarding reviews, and an annual plan for occupancy, facilities and fees.",
        points: ["Monthly MIS and dashboard", "Termly safeguarding review", "Annual boarder and parent survey"],
      },
    ],
  },
  kpis: {
    intro: "Residential schools need a wider dashboard. These are the indicators we report to your trust every month.",
    table: {
      caption: "Key indicators we track for boarding schools",
      columns: ["Area", "What we track", "Why it matters"],
      rows: [
        ["Occupancy", "Beds filled, new boarders, boarders leaving mid-year", "The core driver of a residential school's finances"],
        ["Safeguarding", "Incidents logged and closed, training completion, night-round compliance", "Evidence that children are safe"],
        ["Health", "Infirmary visits, hospital referrals, medication logs", "Early warning on health and wellbeing"],
        ["Dining", "Menu compliance, hygiene audits, food cost per boarder, feedback", "Food is one of the top reasons boarders stay or leave"],
        ["Wellbeing", "Boarder surveys, counselling referrals, homesickness cases", "Happy boarders stay and refer others"],
        ["Academics", "Assessment and board results, prep attendance", "Parents expect boarding to improve outcomes"],
        ["Finance", "Fee collection, cost per boarder, vendor spend", "Keeps the school sustainable"],
      ],
    },
  },
  compliance: {
    intro: "Boarding schools carry a higher duty of care. We maintain a safeguarding and compliance calendar for your campus.",
    items: [
      "Child protection policy and mandatory reporting under the POCSO Act, 2012",
      "Practices aligned with NCPCR's Manual on Safety and Security of Children in Schools",
      "Ministry of Education Guidelines on School Safety and Security (2021)",
      "Background and police verification for every adult working on campus",
      "Fire safety certificate and evacuation drills that include the boarding houses",
      "FSSAI registration or licence for the kitchen, and compliance with the 2020 school food regulations",
      "Infirmary records, medication consent and emergency protocols",
      "Internal Committee under the POSH Act, 2013 for staff",
      "Board affiliation norms, state recognition and any hostel registration your state requires",
      "Student data handling in line with the Digital Personal Data Protection Act, 2023",
    ],
    callout: {
      title: "Hostel rules differ by state",
      body: "Some states require separate registration or licences for school hostels, and rules for girls' hostels are often stricter. We confirm what applies to your campus at the start of the engagement.",
    },
  },
  signs: [
    { title: "Boarder numbers are falling", description: "Empty beds, more withdrawals mid-year or fewer siblings joining." },
    { title: "Parents worry about safety", description: "Recurring questions about supervision, outings, bullying or night-time care." },
    { title: "Food complaints don't stop", description: "Menus, hygiene or quantity are a constant theme in feedback." },
    { title: "Residential staff keep leaving", description: "House parents and wardens burning out on unclear rosters." },
    { title: "No written safeguarding system", description: "Incidents are handled informally, without logs, training or review." },
    { title: "Weekends are empty", description: "Boarders with nothing structured to do outside school hours." },
  ],
  faqs: [
    {
      question: "What does boarding school management include?",
      answer:
        "Everything a day school needs — academics, staff, finance, admissions and compliance — plus the residential layer: boarding houses, house parents and wardens, night supervision, dining, health care, safeguarding and weekend programmes.",
    },
    {
      question: "How do you keep boarders safe?",
      answer:
        "Through a written child protection policy, background-verified staff, POCSO training for every adult, separate secured wings for boys and girls, set head counts, documented night rounds, controlled visitors and outings, and a clear incident-reporting process reviewed every term.",
    },
    {
      question: "Do you manage the hostel kitchen and food?",
      answer:
        "Yes. We plan menus with a nutritionist, run or supervise the kitchen to FSSAI requirements, manage vendors and food costs, and cater for medical and religious dietary needs.",
    },
    {
      question: "What is the ideal ratio of house parents to boarders?",
      answer:
        "It depends on boarders' ages, building layout and night-time arrangements. Younger boarders need more adults per child. We set staffing for each house after the residential audit, so every hour has a named responsible adult.",
    },
    {
      question: "Can you help a day school start a hostel?",
      answer:
        "Yes. We plan the hostel's capacity, layout, staffing, fees and SOPs, check state and board requirements, and manage the launch — including induction for the first boarders and their parents.",
    },
    {
      question: "Will our trust stay in control?",
      answer: "Yes. Your trust or society keeps ownership, control of the bank accounts and final decision rights. We work to an agreed plan and budget and report every month.",
    },
    {
      question: "How do you handle homesickness and wellbeing?",
      answer:
        "With a structured induction for new boarders, a buddy system, scheduled calls home, access to a counsellor, and house parents trained to spot early signs that a child is struggling.",
    },
    {
      question: "Do you manage international or co-educational boarding schools?",
      answer:
        "Yes. We manage boys', girls' and co-educational residential schools on Indian and international boards, adapting routines, staffing and safeguarding to each.",
    },
  ],
  references: [
    { label: "National Commission for Protection of Child Rights (NCPCR)", href: "https://ncpcr.gov.in/" },
    { label: "Food Safety and Standards Authority of India (FSSAI)", href: "https://www.fssai.gov.in/" },
  ],
  related: [
    { label: "Day school management", href: routes.dayManagement, description: "Academics, operations and growth for day schools." },
    { label: "School audit", href: routes.audit, description: "An independent residential and safety audit." },
    { label: "Start a school", href: routes.startSchool, description: "Planning a new residential campus from scratch." },
  ],
  cta: {
    title: "Give parents the boarding school they're looking for",
    description: "Book a free 30-minute call. We'll talk through your boarding houses, safety systems and occupancy — and where we can help.",
    cta: { label: "Book a boarding consultation", href: routes.consultation },
    reassurance: "Safeguarding-first · Monthly reporting · You keep ownership",
    image: brief({
      id: "BRD-03",
      file: "school-management/boarding-cta-dining.webp",
      width: 900,
      height: 900,
      title: "Boarders at dinner",
      alt: "Boarders sharing a meal together in a bright school dining hall",
      scene:
        "Square photo of Indian boarders aged 11 to 15 sharing a cheerful dinner at long tables in a clean, bright school dining hall, steel thalis with dal, rice, roti and vegetables, a house parent seated with them, warm evening light, family-like mood",
    }),
  },
};
