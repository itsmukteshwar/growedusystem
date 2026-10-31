/**
 * Content for /school-improvement/teacher-training
 * Target searches: "teacher training for schools", "teacher training programme India", "CBSE 50 hours teacher training",
 * "teacher professional development", "in-school teacher training", "CPD for teachers".
 *
 * CBSE CPD rule (50 hours a year: 25 via CBSE/government institutes, 25 in-house or school complex; NPST split) is from
 * CBSE's press release of 17 April 2025 (Notification TRG-3/2025). Checked October 2026.
 */
import {
  Accessibility,
  BookOpenCheck,
  ClipboardList,
  HeartHandshake,
  Laptop,
  Lightbulb,
  UserPlus,
  Users,
} from "lucide-react";

import type { ManagementGuideData } from "@/components/sections/service/ManagementGuide";
import { routes } from "@/config/navigation";
import { brief } from "@/data/images";

export const page: ManagementGuideData = {
  serviceName: "Teacher training and professional development for schools",
  meta: {
    path: routes.training,
    title: "Teacher Training Programmes for Schools",
    description:
      "In-school teacher training aligned with NEP 2020 and CBSE's 50-hour CPD rule: pedagogy, assessment, classroom management, technology and leadership coaching.",
    keywords: [
      "teacher training for schools",
      "teacher training programme India",
      "CBSE 50 hours teacher training",
      "teacher professional development",
      "in-school teacher training",
      "CPD for teachers",
      "competency based education training",
      "school leadership training",
    ],
    updated: "2026-10-31",
  },
  hero: {
    breadcrumbs: [
      { label: "Home", href: routes.home },
      { label: "School Improvement", href: routes.improvement },
      { label: "Teacher Training", href: routes.training },
    ],
    eyebrow: "School improvement · Teacher training",
    title: "Teacher Training Programmes for Schools",
    description:
      "Practical, in-school professional development that changes what happens in classrooms — not one-off seminars. Built around your teachers' real needs, aligned with NEP 2020, and documented towards CBSE's 50-hour annual requirement.",
    primary: { label: "Plan your training programme", href: routes.consultation },
    secondary: { label: "See training areas", href: "#scope" },
    facts: [
      { value: "50 hrs", label: "CBSE annual CPD requirement" },
      { value: "25 hrs", label: "Can be in-house training" },
      { value: "8", label: "Training areas" },
      { value: "Coaching", label: "Follow-up in classrooms" },
    ],
    image: brief({
      id: "TRN-01",
      file: "school-improvement/training-hero-workshop.webp",
      width: 1400,
      height: 1050,
      title: "Hands-on teacher workshop",
      alt: "Teachers working in groups during a hands-on professional development workshop",
      scene:
        "An energetic hands-on teacher training workshop in a bright Indian school hall, groups of teachers of mixed ages around tables building a science activity with simple materials, a facilitator in her 40s guiding one group, chart paper and markers on tables, natural daylight, engaged and joyful mood",
    }),
  },
  toc: [
    { id: "overview", label: "Overview" },
    { id: "scope", label: "Training areas" },
    { id: "specialised", label: "How training sticks" },
    { id: "models", label: "Programmes" },
    { id: "process", label: "How it works" },
    { id: "kpis", label: "Measuring impact" },
    { id: "compliance", label: "Standards & CPD rules" },
    { id: "signs", label: "Signs you need it" },
    { id: "faq", label: "FAQs" },
  ],
  eyebrows: {
    scope: "Training areas",
    models: "Programmes",
    kpis: "Impact",
    compliance: "Standards",
    signs: "Is it time?",
  },
  titles: {
    overview: "Why most teacher training doesn't change classrooms — and ours does",
    scope: "Eight areas our teacher training covers",
    specialised: "How we make training stick",
    models: "Choose the training programme that fits",
    process: "How a teacher training programme works",
    kpis: "How we measure the impact of training",
    compliance: "Standards and CPD rules we align with",
    signs: "Signs your teachers need structured training",
    faq: "Teacher training: common questions",
  },
  overview: {
    paragraphs: [
      "Teachers are the single biggest factor in how much students learn — and the biggest investment a school makes. Yet much teacher training in India is a one-day seminar on a generic topic, quickly forgotten once teachers are back in front of forty students.",
      "Our programmes start in your classrooms. We observe teaching, agree the few changes that will matter most, train teachers in practical techniques they can use the next day, and follow up with coaching and peer observation until the new practice becomes routine. Every hour is documented, so your annual CPD records are always in order.",
    ],
    benefits: {
      title: "What you get",
      items: [
        "Training based on observed needs, not a catalogue",
        "Practical techniques teachers use the next day",
        "Classroom coaching after every workshop",
        "Documented CPD hours for every teacher",
        "Stronger, more confident teachers who stay",
      ],
    },
    fit: {
      title: "Who it's for",
      items: [
        "CBSE schools planning their 50-hour CPD calendar",
        "New schools inducting a first teaching team",
        "Schools moving to competency-based learning",
        "Coordinators and principals growing as leaders",
        "IB and Cambridge schools strengthening pedagogy",
      ],
    },
  },
  scope: {
    intro: "Programmes are built from these modules and tailored to your board, grades and audit findings.",
    items: [
      {
        icon: UserPlus,
        title: "Induction for new teachers",
        description: "School culture, routines, lesson planning, classroom management and policies — so new teachers settle fast.",
      },
      {
        icon: Lightbulb,
        title: "Pedagogy & active learning",
        description: "Experiential, inquiry-based and activity-based teaching, questioning techniques and differentiation.",
      },
      {
        icon: ClipboardList,
        title: "Competency-based assessment",
        description: "Assessment for learning, competency-based questions, rubrics, feedback and using data to plan teaching.",
      },
      {
        icon: Users,
        title: "Classroom management",
        description: "Routines, positive behaviour strategies and managing large or mixed-ability classes calmly.",
      },
      {
        icon: Laptop,
        title: "Technology in teaching",
        description: "Smart classrooms, digital tools and the school ERP — used to improve learning, not just to display slides.",
      },
      {
        icon: Accessibility,
        title: "Inclusive education",
        description: "Identifying learning needs, classroom adaptations and working with special educators and parents.",
      },
      {
        icon: HeartHandshake,
        title: "Wellbeing & child protection",
        description: "Social-emotional learning, POCSO awareness and safeguarding duties, and teacher wellbeing.",
      },
      {
        icon: BookOpenCheck,
        title: "Leadership for coordinators & heads",
        description: "Instructional leadership, lesson observation and feedback, mentoring and running effective meetings.",
      },
    ],
  },
  specialised: {
    eyebrow: "Beyond the workshop",
    intro: "Research and experience agree: training changes practice only when it is followed up. Every programme includes these elements.",
    image: brief({
      id: "TRN-02",
      file: "school-improvement/training-coaching.webp",
      width: 1200,
      height: 800,
      title: "One-to-one coaching",
      alt: "Instructional coach giving feedback to a teacher after a lesson observation",
      scene:
        "An Indian instructional coach in her 40s and a young male teacher seated side by side in an empty classroom after a lesson, reviewing observation notes on a tablet, the teacher smiling and nodding, student desks and a green board behind, soft afternoon light, supportive mood",
    }),
    items: [
      "Needs analysis from lesson observations, results and teacher surveys",
      "Short, practical workshops modelled the way we want teachers to teach",
      "Classroom coaching cycles: observe, feedback, practise, re-observe",
      "Peer observation and lesson study within subject teams",
      "Coordinators trained to sustain coaching after we step back",
      "Attendance and CPD-hour records maintained for every teacher",
      "Termly review of classroom practice and student outcomes",
    ],
  },
  models: {
    intro: "From a single focused series to a full-year CPD calendar for every teacher.",
    table: {
      caption: "Teacher training programmes compared",
      columns: ["Programme", "Best for", "What's included", "Duration"],
      rows: [
        ["Focused workshop series", "One priority such as assessment or classroom management", "Needs check, 2–4 workshops, follow-up observations", "4–8 weeks"],
        ["Annual CPD programme", "A structured year of development for all teachers", "Needs analysis, monthly workshops, coaching cycles, documented CPD hours", "One academic year"],
        ["New-teacher induction", "New schools and new joiners", "Pre-session induction, mentoring and first-term observations", "2–4 weeks plus first term"],
        ["Leadership academy", "Coordinators, HODs, vice-principals and principals", "Instructional leadership modules, coaching and a school improvement project", "6–12 months"],
      ],
      note: "Delivered on your campus, online or blended. Under CBSE's CPD framework, in-house training can cover up to 25 of the 50 hours a year — the rest comes from CBSE or government training institutes.",
    },
  },
  process: {
    intro: "Every programme is designed around your teachers and your students.",
    steps: [
      {
        title: "Needs analysis",
        timing: "Weeks 1–3",
        description: "Lesson observations, results analysis, teacher surveys and a conversation with leadership on goals.",
        link: { label: "About our school audit", href: routes.audit },
      },
      {
        title: "Programme design",
        timing: "Weeks 3–4",
        description: "A training calendar with modules, dates, groups and success measures, fitted around your academic calendar.",
      },
      {
        title: "Workshops",
        timing: "Through the year",
        description: "Practical sessions where teachers experience the techniques, plan with them and leave with resources.",
      },
      {
        title: "Coaching & observation",
        timing: "Between workshops",
        description: "Classroom visits and feedback cycles to help each teacher apply what they learned.",
        points: ["Observe → feedback → practise → re-observe", "Peer observation within departments"],
      },
      {
        title: "Review & certification",
        timing: "End of term / year",
        description: "Review of classroom practice and outcomes, certificates of participation and a CPD-hours record for every teacher.",
      },
    ],
  },
  kpis: {
    intro: "We measure training by what changes in classrooms, not by how many sessions were held.",
    table: {
      caption: "How we measure the impact of teacher training",
      columns: ["Measure", "How it's tracked", "Why it matters"],
      rows: [
        ["Participation & CPD hours", "Attendance records per teacher, per module", "Keeps CPD records complete for your board"],
        ["Teacher feedback", "Session ratings and confidence surveys", "Shows whether training felt relevant and useful"],
        ["Classroom practice", "Observation scores against an agreed rubric, before and after", "The real test: did teaching change?"],
        ["Student learning", "Assessment results and work samples in targeted areas", "Links training to outcomes parents care about"],
        ["Teacher retention", "Attrition among trained teachers", "Developed teachers are more likely to stay"],
      ],
    },
  },
  compliance: {
    intro: "Our programmes align with national policy and board requirements, so they count towards what your school must already do.",
    items: [
      "National Education Policy 2020 — at least 50 hours of continuous professional development a year for every teacher",
      "CBSE's CPD framework (2025): 50 hours a year — 25 through CBSE or government institutes, 25 in-house or school-complex based",
      "National Professional Standards for Teachers (NPST) — core values and ethics, knowledge and practice, professional growth",
      "National Curriculum Framework for School Education (NCF-SE) 2023 and competency-based education",
      "Inclusive education in line with the Rights of Persons with Disabilities Act, 2016",
      "Child protection awareness under the POCSO Act, 2012",
      "IB and Cambridge professional development expectations for international programmes",
    ],
    callout: {
      title: "Check what counts for your board",
      body: "Boards decide which training counts towards their requirements and how it must be recorded. We maintain records in the format your school needs, and plan in-house hours alongside the hours your board requires through its own institutes.",
    },
  },
  signs: [
    { title: "Results are flat across subjects", description: "Learning outcomes that don't improve despite good effort from teachers." },
    { title: "CPD hours are hard to track", description: "No clear record of who trained in what — and inspection is coming." },
    { title: "Lessons are mostly lecture", description: "Little discussion, activity or checking for understanding in classrooms." },
    { title: "New teachers struggle", description: "Joiners take months to settle, or leave within the first year." },
    { title: "Competency-based exams worry staff", description: "Teachers unsure how to teach and assess for competency-based questions." },
    { title: "Coordinators lack leadership skills", description: "Middle leaders promoted for teaching skill, without support to lead others." },
  ],
  faqs: [
    {
      question: "How many hours of training do CBSE teachers need each year?",
      answer:
        "CBSE requires a minimum of 50 hours of training per teacher per year. Under its 2025 framework, 25 hours come through CBSE or government regional training institutes, and 25 hours can be in-house or school-complex based training.",
    },
    {
      question: "Does your training count towards the 50 hours?",
      answer:
        "Our in-school programmes are designed to form part of the in-house share of your CPD hours, and we maintain attendance and hours records for every teacher. Your board decides what counts, so we plan with its current rules in mind.",
    },
    {
      question: "Is the training delivered at our school?",
      answer: "Yes, most programmes are delivered on your campus so coaching can happen in real classrooms. Online and blended formats are available for multi-campus groups.",
    },
    {
      question: "Do you train teachers for ICSE, IB and Cambridge schools?",
      answer:
        "Yes. Our pedagogy, assessment and classroom management modules apply across boards, and we tailor examples and assessment practice to your curriculum. IB and Cambridge schools also need programme-specific workshops from those organisations.",
    },
    {
      question: "What is competency-based education training?",
      answer:
        "It helps teachers teach and assess for applying knowledge to real situations — not just recall — in line with NEP 2020 and NCF-SE 2023. It covers designing competency-based questions, rubrics and classroom activities.",
    },
    {
      question: "How do you know if the training worked?",
      answer:
        "We compare classroom observation scores before and after, track student results in targeted areas, and gather teacher feedback. You get a termly impact report.",
    },
    {
      question: "Can you train our principal and coordinators?",
      answer:
        "Yes. Our leadership academy develops instructional leadership — observing lessons, giving feedback, mentoring teachers and leading improvement projects.",
    },
    {
      question: "How much does teacher training cost?",
      answer: "It depends on the programme, the number of teachers and the coaching included. We share a fixed proposal after the needs analysis.",
    },
  ],
  references: [
    { label: "CBSE — Press release on professional development framework (April 2025)", href: "https://cbse.gov.in/cbsenew/documents/PRESS_RELEASE_STEM_17042025.pdf" },
    { label: "NCERT — NISHTHA national teacher training initiative", href: "https://ciet.ncert.gov.in/nishtha?lang=en" },
  ],
  related: [
    { label: "School audit", href: routes.audit, description: "Identify exactly where teaching needs support." },
    { label: "Admissions growth", href: routes.admissions, description: "Turn better teaching into more admissions." },
    { label: "Teacher Recruitment platform", href: routes.recruitment, description: "Hire qualified teachers faster." },
  ],
  cta: {
    title: "Invest in the people who make your school",
    description: "Book a free 30-minute call. We'll understand your teachers' needs and suggest a training plan for the year.",
    cta: { label: "Plan your training programme", href: routes.consultation },
    reassurance: "In-school coaching · Documented CPD hours · NEP 2020 aligned",
    image: brief({
      id: "TRN-03",
      file: "school-improvement/training-cta-certificates.webp",
      width: 900,
      height: 900,
      title: "Teachers receiving certificates",
      alt: "Smiling teachers holding training certificates after completing a programme",
      scene:
        "Square photo of a group of six smiling Indian teachers of mixed ages holding certificates (no readable text) after completing a training programme, standing together in a bright school hall, a facilitator applauding beside them, warm proud mood",
    }),
  },
};
