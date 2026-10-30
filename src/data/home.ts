/**
 * Homepage content. Edit text here — the section components only handle layout.
 * Replace [bracketed] placeholders with real details before launch.
 *
 * Images: each `brief()` lists the file name, export size and an AI prompt.
 * Save the finished image at public/images/<file> and it appears automatically.
 */
import { BookOpen, Building2, Globe, GraduationCap, LayoutDashboard, MapPin, Package, Search, Users } from "lucide-react";

import { routes } from "@/config/navigation";
import { brief, REAL } from "@/data/images";
import type {
  Article,
  Board,
  Faq,
  Feature,
  Platform,
  ProcessStep,
  Project,
  ServiceCard,
  Stat,
  Testimonial,
} from "@/types";

/* -------------------------------------------------------------------------- */
/* Announcement & hero                                                        */
/* -------------------------------------------------------------------------- */

export const announcement = {
  badge: "NEW",
  text: "Estimate your school's setup cost in 2 minutes with our free budget calculator.",
  cta: { label: "Try it", href: routes.budgetCalculator },
};

export const heroSlides = {
  start: {
    tab: "Start a school",
    eyebrow: "Start a new school",
    description:
      "Feasibility, DPR, trust registration, affiliation, hiring and launch — one accountable team for CBSE, ICSE, IB, Cambridge and State Board schools.",
    primary: { label: "Book Free Consultation", href: routes.consultation },
    secondary: { label: "Explore School Setup", href: routes.startSchool },
    image: brief({
      id: "HOME-01",
      file: "home/hero-start-a-school-site-visit.webp",
      width: 1400,
      height: 1050,
      title: "Promoter and consultant on a school site",
      alt: "School promoter and an education consultant reviewing building plans at an under-construction school campus in India",
      scene:
        "A middle-aged Indian school promoter in a light kurta and a female education consultant in smart-casual navy clothing reviewing large architectural building plans together at an under-construction school campus, concrete frame and scaffolding of a three-storey school building softly blurred behind them, both wearing white safety helmets, golden-hour sunlight from the left, faces visible and engaged",
    }),
    roadmap: [
      { label: "Trust registration", status: "done" },
      { label: "Feasibility study & DPR", status: "done" },
      { label: "CBSE affiliation", status: "active" },
      { label: "Hiring & first admissions", status: "todo" },
    ] as const,
  },
  manage: {
    tab: "Manage a school",
    eyebrow: "Manage your school",
    description:
      "Academics, HR, finance and boarding operations — managed day to day by people who have run schools before, backed by our own ERP.",
    primary: { label: "Book Free Consultation", href: routes.consultation },
    secondary: { label: "Explore Management", href: routes.management },
    image: brief({
      id: "HOME-02",
      file: "home/hero-manage-morning-assembly.webp",
      width: 1400,
      height: 1050,
      title: "Morning assembly at a well-run school",
      alt: "Students in uniform standing in neat rows at morning assembly on a clean Indian school campus",
      scene:
        "Wide shot of a morning assembly at a well-run Indian private school: rows of uniformed students aged 8 to 14 in white shirts and navy trousers or skirts standing in neat lines on a clean courtyard, a principal at a small podium in the distance, modern cream-and-brick school building with green trees, bright early-morning sunlight, sense of order and pride",
    }),
    metrics: [
      { label: "Student attendance", value: 94, tone: "bg-brand-600" },
      { label: "Term fee collection", value: 82, tone: "bg-navy-800" },
      { label: "Syllabus covered", value: 61, tone: "bg-navy-500" },
    ],
  },
  grow: {
    tab: "Grow a school",
    eyebrow: "Grow an existing school",
    description:
      "Independent audits, admissions growth, branding, staff training and structured turnaround — measured against the numbers that matter to you.",
    primary: { label: "Book a School Audit", href: routes.audit },
    secondary: { label: "Explore Improvement", href: routes.improvement },
    image: brief({
      id: "HOME-03",
      file: "home/hero-grow-teacher-training.webp",
      width: 1400,
      height: 1050,
      title: "Teacher training workshop",
      alt: "Indian school teachers collaborating in small groups during a professional development workshop",
      scene:
        "Indian school teachers, a mix of men and women aged 25 to 50, collaborating in small groups around round tables during a professional development workshop in a bright training room, sticky notes and chart paper on the tables, a facilitator pointing at a whiteboard in the background, energetic and engaged natural expressions",
    }),
    bars: [
      { y: 78, h: 30, fill: "var(--color-navy-200)" },
      { y: 70, h: 38, fill: "var(--color-navy-200)" },
      { y: 58, h: 50, fill: "var(--color-navy-500)" },
      { y: 44, h: 64, fill: "var(--color-navy-500)" },
      { y: 28, h: 80, fill: "var(--color-brand-600)" },
      { y: 10, h: 98, fill: "var(--color-brand-600)" },
    ],
  },
};

export const boardsStrip = ["CBSE", "CISCE", "IB", "CAMBRIDGE", "STATE BOARDS"];

/* -------------------------------------------------------------------------- */
/* Stats & about                                                              */
/* -------------------------------------------------------------------------- */

export const stats: Stat[] = [
  { value: "50+", label: "Schools established", icon: GraduationCap, tone: "navy" },
  { value: "15+", label: "States served", icon: MapPin, tone: "green" },
  { value: "5", label: "Boards supported", icon: BookOpen, tone: "navy" },
  { value: "1 team", label: "Accountable end to end", icon: Users, tone: "green" },
];

export const about = {
  eyebrow: "Why Grow Edu System",
  title: "Starting a school in India is hard. It doesn't have to be.",
  description:
    "We handle everything from trust registration and land requirements to affiliation, staff hiring and your first admissions season. One team. The full journey.",
  features: [
    {
      title: "Board-specialist consultants",
      description: "CBSE, CISCE, IB and Cambridge each have their own expert.",
    },
    {
      title: "Pan-India, including tier-2 and tier-3 cities",
      description: "State-specific rules, local approvals and on-ground support.",
    },
    {
      title: "Consultancy plus our own technology",
      description: "ERP, hiring portal and supplies marketplace built in-house.",
    },
  ] satisfies Feature[],
  cta: { label: "Read our story", href: routes.about },
  images: [
    brief({
      id: "HOME-04",
      file: "home/about-consultants-at-work.webp",
      width: 800,
      height: 1100,
      title: "Our consultants at work",
      alt: "Grow Edu System consultants reviewing a school project report around a table",
      scene:
        "Vertical portrait-orientation photo of three Indian education consultants, two women and one man in smart-casual navy and white clothing, gathered around a wooden table reviewing a printed project report with charts and an open laptop, modern bright office with plants, one consultant pointing at a chart while the others listen, collaborative and focused",
      realPhoto: "Ideally a real photo of your own team — replace the AI version when you can.",
    }),
    brief({
      id: "HOME-05",
      file: "home/about-classroom-hands-raised.webp",
      width: 800,
      height: 600,
      title: "Classroom detail",
      alt: "Students raising their hands in a modern Indian classroom",
      scene:
        "Indian primary school students aged 9 to 11 in neat uniforms eagerly raising their hands in a modern classroom, photographed from the side at desk height, an interactive smartboard softly out of focus at the front, bright window light",
    }),
    brief({
      id: "HOME-06",
      file: "home/about-campus-aerial.webp",
      width: 800,
      height: 600,
      title: "Campus aerial view",
      alt: "Aerial drone view of a completed school campus with buildings, playground and greenery",
      scene:
        "Aerial drone photograph at a 45-degree angle of a completed modern Indian school campus on the edge of a growing city: an L-shaped three-storey cream and terracotta building, a large green sports field with a running track, a basketball court, rows of mature trees and a covered drop-off area, late-morning light",
    }),
  ],
};

/* -------------------------------------------------------------------------- */
/* Services                                                                   */
/* -------------------------------------------------------------------------- */

export const servicesIntro = {
  eyebrow: "What we do",
  title: "Everything a school needs, from one team",
  description:
    "Whether you're breaking ground or turning around an existing school, we own the outcome — not just the paperwork.",
};

export const services: ServiceCard[] = [
  {
    title: "Start a new school",
    description:
      "From the first document to the first assembly — feasibility, trust, infrastructure, affiliation and launch.",
    cta: "Explore school setup",
    href: routes.startSchool,
    badge: "Most requested",
    image: brief({
      id: "HOME-07",
      file: "home/service-start-new-school-building.webp",
      width: 1200,
      height: 750,
      title: "New school building nearing completion",
      alt: "A new school building nearing completion with scaffolding being removed",
      scene:
        "Front view of a newly built three-storey Indian school building nearing completion, clean cream and brick facade with large windows, the last scaffolding being taken down on one side, freshly laid paving and young saplings in the foreground, a blank signage panel above the entrance, bright clear-sky daylight",
    }),
  },
  {
    title: "School management",
    description:
      "Day and boarding school operations — academics, HR, finance and fee management run as one system.",
    cta: "Explore management",
    href: routes.management,
    image: brief({
      id: "HOME-08",
      file: "home/service-school-management-meeting.webp",
      width: 1200,
      height: 750,
      title: "Principal and admin team meeting",
      alt: "School principal reviewing a timetable with academic coordinators in a staff room",
      scene:
        "An Indian school principal, a woman in her 40s in a formal saree, reviewing a printed weekly timetable with two academic coordinators in a tidy staff room, colour-coded planner board on the wall behind, laptops and files on the table, calm professional atmosphere",
    }),
  },
  {
    title: "School improvement",
    description:
      "Audits, admissions growth, branding, staff training and turnaround programmes for existing schools.",
    cta: "Explore improvement",
    href: routes.improvement,
    image: brief({
      id: "HOME-09",
      file: "home/service-school-improvement-open-day.webp",
      width: 1200,
      height: 750,
      title: "Parents at an admissions open day",
      alt: "Parents and children at a school admissions open day welcome desk",
      scene:
        "Indian parents with young children at a school admissions open day, gathered at a welcome desk under a canopy where a friendly school staff member hands them a brochure, a plain fabric banner in the background without any lettering, cheerful atmosphere, morning light",
    }),
  },
];

export const consultantCallout = {
  title: "Not sure where to start?",
  description: "Tell us your city, budget and board — we'll map your next 90 days, free.",
  cta: { label: "Talk to a consultant", href: routes.consultation },
  image: brief({
    id: "HOME-10",
    file: "home/team-lead-consultant-headshot.webp",
    width: 320,
    height: 320,
    title: "Lead consultant headshot",
    alt: "Grow Edu System lead consultant",
    scene:
      "Friendly head-and-shoulders portrait of an Indian education consultant in his late 30s wearing a navy blazer over a white shirt, warm genuine smile, plain soft light-grey background, even studio lighting, centred square crop",
    realPhoto: REAL.person,
  }),
};

/* -------------------------------------------------------------------------- */
/* Process                                                                    */
/* -------------------------------------------------------------------------- */

export const processIntro = {
  eyebrow: "The process",
  title: "Four stages. Zero guesswork.",
  description:
    "A clear path from your first call to your first assembly — with a named consultant at every stage.",
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    timing: "Week 1",
    title: "Consultation",
    description: "A free 30-minute call on your vision, location, budget and board.",
    href: routes.consultation,
    image: brief({
      id: "HOME-11",
      file: "home/process-01-consultation-call.webp",
      width: 800,
      height: 500,
      title: "Consultation call",
      alt: "Education consultant on a video call with a school promoter, notebook open",
      scene:
        "An Indian female education consultant on a video call at her desk, laptop screen showing a blurred video tile of a promoter, notebook open with handwritten notes beside her, coffee cup, soft window light, focused and attentive",
    }),
  },
  {
    number: "02",
    timing: "Months 1–2",
    title: "Feasibility & DPR",
    description: "Demand analysis, financial model and an investor-ready project report.",
    href: routes.feasibility,
    image: brief({
      id: "HOME-12",
      file: "home/process-02-feasibility-dpr.webp",
      width: 800,
      height: 500,
      title: "DPR report on a desk",
      alt: "A printed detailed project report with charts lying on a desk",
      scene:
        "Close-up of a professionally bound printed project report lying open on a wooden desk, pages showing bar charts, a pie chart and tables in navy and green (all text blurred and unreadable), a calculator, a pen and reading glasses beside it, shallow depth of field",
    }),
  },
  {
    number: "03",
    timing: "Months 3–18",
    title: "Setup & affiliation",
    description: "Trust, land, building, NOC and affiliation — documented and inspection-ready.",
    href: routes.cbse,
    image: brief({
      id: "HOME-13",
      file: "home/process-03-setup-site-walk.webp",
      width: 800,
      height: 500,
      title: "Architect and consultant on site",
      alt: "An architect and a school consultant walking through a school construction site",
      scene:
        "An Indian architect holding a rolled drawing and a school consultant holding a tablet walking side by side through a school construction site, columns and slabs of the building around them, both wearing white safety helmets, discussing the layout, midday light",
    }),
  },
  {
    number: "04",
    timing: "Launch & beyond",
    title: "Open your doors",
    description: "Hiring, first admissions, day-one operations and ongoing support.",
    highlight: true,
    href: routes.consultation,
    image: brief({
      id: "HOME-14",
      file: "home/process-04-inauguration.webp",
      width: 800,
      height: 500,
      title: "School inauguration",
      alt: "Ribbon-cutting ceremony at a new school inauguration with students cheering",
      scene:
        "Ribbon-cutting ceremony at the entrance of a new Indian school, a smiling chief guest cutting a red ribbon with scissors, marigold garlands on the doorway, uniformed students and parents clapping and cheering around, festive bright daylight",
    }),
  },
];

/* -------------------------------------------------------------------------- */
/* Boards                                                                     */
/* -------------------------------------------------------------------------- */

export const boardsIntro = {
  eyebrow: "Choose your board",
  title: "Board-specialist guidance, not one-size-fits-all",
  cta: { label: "Compare all boards", href: routes.compareBoards },
};

export const boards: Board[] = [
  { name: "CBSE", description: "Affiliation, NOC, land and staffing norms.", href: routes.cbse },
  { name: "ICSE", description: "CISCE affiliation requirements and setup.", href: routes.icse },
  { name: "IB", description: "Candidate status through full authorisation.", href: routes.ib },
  { name: "IGCSE", description: "Cambridge International recognition.", href: routes.igcse },
  { name: "State", description: "Recognition support across Indian states.", href: routes.stateBoard },
];

/* -------------------------------------------------------------------------- */
/* Case study & projects                                                      */
/* -------------------------------------------------------------------------- */

export const caseStudy = {
  tags: ["CBSE", "Day school", "[City, State]"],
  title: "[School name]: from bare land to a fully affiliated campus",
  challenge: "[One sentence on the promoter's starting point.]",
  outcome: "[One sentence on what was achieved.]",
  metrics: [
    { value: "[XX]", label: "Months to open" },
    { value: "[XXX]", label: "Students, year 1" },
    { value: "[XX]%", label: "Seats filled", accent: true },
  ],
  cta: { label: "Read the full story", href: routes.caseStudies },
  heroImage: brief({
    id: "HOME-15",
    file: "home/case-study-school-facade.webp",
    width: 1500,
    height: 1000,
    title: "Case-study school — front facade",
    alt: "Front facade of a school established with Grow Edu System, with students arriving",
    scene:
      "Straight-on architectural photo of a completed modern Indian CBSE day school seen from its main gate, symmetrical three-storey facade in cream and brick, a blank name board above the entrance, uniformed students walking in through the gate with school bags, bright morning daylight",
    realPhoto: REAL.project,
  }),
  thumbnails: [
    brief({
      id: "HOME-16",
      file: "home/case-study-science-lab.webp",
      width: 600,
      height: 450,
      title: "Science lab in use",
      alt: "Students doing an experiment in a school science lab",
      scene: "Students in lab coats doing a chemistry experiment with test tubes in a clean, well-equipped school science lab",
      realPhoto: REAL.project,
    }),
    brief({
      id: "HOME-17",
      file: "home/case-study-library.webp",
      width: 600,
      height: 450,
      title: "Library reading corner",
      alt: "Children reading in a bright school library corner",
      scene: "Children reading books on low cushioned seating in a bright, colourful school library corner with wooden shelves",
      realPhoto: REAL.project,
    }),
    brief({
      id: "HOME-18",
      file: "home/case-study-sports-field.webp",
      width: 600,
      height: 450,
      title: "Sports field",
      alt: "Students playing football on a school sports field",
      scene: "Students playing football on a green school sports field with the school building in the background, afternoon light",
      realPhoto: REAL.project,
    }),
  ],
};

export const projectsIntro = {
  eyebrow: "Our projects",
  title: "Schools we've helped build across India",
  cta: { label: "View all projects", href: routes.projects },
};

export const projects: Project[] = [
  {
    name: "[School name]",
    meta: "IB · Residential · [City]",
    href: routes.projects,
    featured: true,
    image: brief({
      id: "HOME-19",
      file: "home/project-residential-school-dusk.webp",
      width: 900,
      height: 1200,
      title: "Residential school — hostel block at dusk",
      alt: "Residential school hostel block with warm window lights at dusk",
      scene:
        "Vertical photo of a residential boarding school hostel block at dusk, warm light glowing from rows of windows, a landscaped walkway with garden lamps leading to the entrance, deep blue evening sky",
      realPhoto: REAL.project,
    }),
  },
  {
    name: "[School name]",
    meta: "CBSE · Day · [City]",
    href: routes.projects,
    image: brief({
      id: "HOME-20",
      file: "home/project-primary-wing-corridor.webp",
      width: 900,
      height: 600,
      title: "Primary wing corridor",
      alt: "Colourful primary school corridor decorated with student artwork",
      scene: "Wide colourful primary-school corridor with student paintings pinned along the walls, cubbies with small bags, soft daylight from a courtyard",
      realPhoto: REAL.project,
    }),
  },
  {
    name: "[School name]",
    meta: "ICSE · Day · [City]",
    href: routes.projects,
    image: brief({
      id: "HOME-21",
      file: "home/project-smart-classroom.webp",
      width: 900,
      height: 600,
      title: "Smart classroom",
      alt: "Students using tablets in a smart classroom",
      scene: "Middle-school students using tablets at group desks in a smart classroom, teacher guiding one group, interactive display on the wall",
      realPhoto: REAL.project,
    }),
  },
  {
    name: "[School name]",
    meta: "Cambridge · Day · [City]",
    href: routes.projects,
    image: brief({
      id: "HOME-22",
      file: "home/project-auditorium-annual-day.webp",
      width: 900,
      height: 600,
      title: "Auditorium annual day",
      alt: "School auditorium during an annual day performance",
      scene: "School auditorium during an annual day function, students in costumes performing on a lit stage, audience of parents silhouetted in the foreground",
      realPhoto: REAL.project,
    }),
  },
  {
    name: "[School name]",
    meta: "State Board · Day · [City]",
    href: routes.projects,
    image: brief({
      id: "HOME-23",
      file: "home/project-school-bus-fleet.webp",
      width: 900,
      height: 600,
      title: "School bus fleet",
      alt: "Yellow school buses lined up at the school gate in the morning",
      scene: "A neat row of yellow school buses lined up at a school gate in the early morning, students stepping down, a guard at the gate, long soft shadows",
      realPhoto: REAL.project,
    }),
  },
];

/* -------------------------------------------------------------------------- */
/* Testimonials                                                               */
/* -------------------------------------------------------------------------- */

export const testimonialsIntro = {
  eyebrow: "Client stories",
  title: "Promoters who trusted us with their school",
};

export const testimonials: Testimonial[] = [
  {
    variant: "video",
    quote: "[Client quote — 2–3 sentences on the outcome they got, in their own words.]",
    name: "[Client name]",
    role: "Chairman, [School] · [City]",
    image: brief({
      id: "HOME-24",
      file: "home/testimonial-chairman-video-still.webp",
      width: 1200,
      height: 750,
      title: "Client portrait at their school (video still)",
      alt: "School chairman standing in front of the school he built with Grow Edu System",
      scene:
        "Indian school chairman in his late 50s in a white kurta and navy Nehru jacket standing confidently in front of his school building, looking at the camera with a proud smile, interview-style framing for a video testimonial",
      realPhoto: REAL.client,
    }),
  },
  {
    variant: "card",
    quote: "[Client quote about the feasibility study and DPR process.]",
    name: "[Client name]",
    role: "Trustee, [School] · [City]",
    image: brief({
      id: "HOME-25",
      file: "home/testimonial-trustee-headshot.webp",
      width: 400,
      height: 400,
      title: "Trustee headshot",
      alt: "Portrait of a school trustee",
      scene: "Head-and-shoulders portrait of an Indian woman school trustee in her 40s in a formal saree, warm smile, plain light background",
      realPhoto: REAL.client,
    }),
  },
  {
    variant: "card",
    quote: "[Client quote about admissions growth or school improvement results.]",
    name: "[Client name]",
    role: "Director, [School] · [City]",
    image: brief({
      id: "HOME-26",
      file: "home/testimonial-director-headshot.webp",
      width: 400,
      height: 400,
      title: "Director headshot",
      alt: "Portrait of a school director",
      scene: "Head-and-shoulders portrait of an Indian man in his 40s, school director, in a light blue shirt and blazer, friendly smile, plain light background",
      realPhoto: REAL.client,
    }),
  },
];

/* -------------------------------------------------------------------------- */
/* Platforms                                                                  */
/* -------------------------------------------------------------------------- */

export const platformsIntro = {
  eyebrow: "Our platforms",
  title: "Tools built for school growth",
  description: "Technology we built for our own projects — now available to every school.",
  screenshot: brief({
    id: "HOME-27",
    file: "home/platform-erp-dashboard.webp",
    width: 1600,
    height: 1000,
    title: "School ERP dashboard screenshot",
    alt: "Grow Edu School ERP dashboard showing attendance, fee collection and timetable widgets",
    scene: "",
    customPrompt:
      "Clean modern SaaS dashboard user interface for a school ERP, flat UI design on a light background, left sidebar navigation in deep navy, cards showing an attendance donut chart, a fee-collection bar chart in green, a weekly timetable grid and a notices list, generic placeholder labels, crisp vector-like rendering, aspect ratio 8:5, 1600×1000px. No real names, no logos, no watermark.",
    realPhoto: REAL.product,
  }),
};

export const platforms: Platform[] = [
  { name: "School ERP", href: routes.erp, icon: LayoutDashboard, tone: "navy" },
  { name: "Teacher Recruitment", href: routes.recruitment, icon: Search, tone: "green" },
  { name: "School Real Estate", href: routes.realEstate, icon: Building2, tone: "navy" },
  { name: "Supplies Marketplace", href: routes.marketplace, icon: Package, tone: "green" },
  { name: "Website Builder", href: routes.websiteBuilder, icon: Globe, tone: "navy" },
];

/* -------------------------------------------------------------------------- */
/* Founder                                                                    */
/* -------------------------------------------------------------------------- */

const teamHeadshot = (n: number, scene: string) =>
  brief({
    id: `HOME-29${"abcd"[n - 1]}`,
    file: `home/team-headshot-${n}.webp`,
    width: 400,
    height: 400,
    title: `Team headshot ${n} of 4`,
    alt: "Grow Edu System team member",
    scene: `${scene}, plain soft light-grey background, even studio lighting, square crop — keep the same background and lighting for all four team headshots`,
    realPhoto: REAL.person,
  });

export const founder = {
  eyebrow: "A note from our founder",
  quote:
    "We believe every child in India deserves a great school — and every promoter deserves a partner who has done this before.",
  name: "[Founder name]",
  role: "Founder & Director, Grow Edu System",
  cta: { label: "Meet the team", href: routes.team },
  portrait: brief({
    id: "HOME-28",
    file: "home/founder-portrait.webp",
    width: 1000,
    height: 1250,
    title: "Founder portrait",
    alt: "Founder and Director of Grow Edu System",
    scene:
      "Professional but warm vertical portrait of an Indian founder of an education company in his 50s, wearing a navy blazer, standing in a bright school corridor with classrooms softly blurred behind, direct eye contact and a natural smile",
    realPhoto: REAL.person,
  }),
  team: [
    teamHeadshot(1, "Head-and-shoulders portrait of an Indian woman education consultant in her 30s in a navy top"),
    teamHeadshot(2, "Head-and-shoulders portrait of an Indian man finance consultant in his 40s in a white shirt"),
    teamHeadshot(3, "Head-and-shoulders portrait of an Indian woman academic advisor in her 40s in a green kurta"),
    teamHeadshot(4, "Head-and-shoulders portrait of an Indian man operations lead in his 30s in a navy polo shirt"),
  ],
};

/* -------------------------------------------------------------------------- */
/* Resources                                                                  */
/* -------------------------------------------------------------------------- */

export const resourcesIntro = {
  eyebrow: "Knowledge hub",
  title: "Guides for school promoters",
  cta: { label: "Visit the knowledge hub", href: routes.blog },
};

export const articles: Article[] = [
  {
    category: "School setup",
    readTime: "8 min read",
    title: "How to start a CBSE school in India: the complete checklist",
    href: routes.cbse,
    image: brief({
      id: "HOME-30",
      file: "home/article-cbse-checklist.webp",
      width: 1200,
      height: 675,
      title: "Affiliation paperwork flat-lay",
      alt: "Flat-lay of school affiliation documents, a checklist and a pen",
      scene:
        "Top-down flat-lay of neatly arranged school affiliation paperwork on a light wooden desk: a ring binder, a checklist with ticked boxes (text unreadable), a fountain pen, a rubber stamp, a small potted plant and a pair of glasses",
    }),
  },
  {
    category: "Finance",
    readTime: "6 min read",
    title: "What does it really cost to build a school? A line-by-line breakdown",
    href: routes.feasibility,
    image: brief({
      id: "HOME-31",
      file: "home/article-school-cost.webp",
      width: 1200,
      height: 675,
      title: "Cost planning desk",
      alt: "Calculator, Indian rupee notes and an architectural plan on a desk",
      scene:
        "Close-up of a desk with an architectural floor plan of a school, a calculator, a small stack of Indian rupee notes and a pencil, warm side light, shallow depth of field",
    }),
  },
  {
    category: "Admissions",
    readTime: "5 min read",
    title: "7 ways to fill your first-year seats before opening day",
    href: routes.blog,
    image: brief({
      id: "HOME-32",
      file: "home/article-admissions-tour.webp",
      width: 1200,
      height: 675,
      title: "Parents on a school tour",
      alt: "Parents touring a school with a student guide",
      scene:
        "A confident student guide in uniform showing two Indian parents and their young daughter around a bright school corridor, pointing towards a classroom, everyone smiling",
    }),
  },
];

/* -------------------------------------------------------------------------- */
/* FAQ & CTA                                                                  */
/* -------------------------------------------------------------------------- */

export const faqIntro = {
  eyebrow: "FAQ",
  title: "Questions promoters ask us first",
  description: "Straight answers to the most common questions about starting a school in India.",
  helpTitle: "Still have questions?",
  helpText: "Message our team on WhatsApp — we reply within working hours.",
  helpCta: "WhatsApp us",
  cta: { label: "See all FAQs", href: routes.faq },
  helpImage: brief({
    id: "HOME-33",
    file: "home/team-support-headshot.webp",
    width: 400,
    height: 400,
    title: "Support team headshot",
    alt: "Grow Edu System support team member",
    scene:
      "Head-and-shoulders portrait of a friendly young Indian woman support executive wearing a light headset, navy top, warm smile, plain soft light-grey background",
    realPhoto: REAL.person,
  }),
};

export const faqs: Faq[] = [
  {
    question: "I want to start a school — where do I begin?",
    answer:
      "Start with a feasibility study. It tells you whether your location has demand, which board fits, what land and building you need, and what the total investment looks like — before you commit capital.",
  },
  {
    question: "How long does CBSE affiliation take?",
    answer:
      "Plan for roughly 18–24 months from trust registration to opening, depending on your state, land status and building readiness. We map a timeline for your city in the first call.",
  },
  {
    question: "Do I need a trust or society to open a school?",
    answer:
      "Yes. In India a school must be run by a not-for-profit entity — a registered trust, society or Section 8 company. We help you choose and register the right structure.",
  },
  {
    question: "How much does it cost to set up a school?",
    answer:
      "It varies widely with land, city, board and capacity. Our free budget calculator gives a first estimate, and the DPR gives you a detailed, investor-ready figure.",
  },
  {
    question: "Can you help an existing school grow admissions?",
    answer:
      "Yes. Our improvement team audits enquiry-to-admission conversion, parent communication and your digital presence, then runs a structured admissions growth plan.",
  },
];

export const finalCta = {
  title: "Ready to build India's next great school?",
  description:
    "Book a free 30-minute call. Walk away with a clear view of cost, timeline and approvals for your city and board.",
  cta: { label: "Book Free Consultation", href: routes.consultation },
  reassurance: "No commitment · 30-minute call · Expert guidance",
  image: brief({
    id: "HOME-34",
    file: "home/cta-consultant-cutout.webp",
    width: 900,
    height: 900,
    title: "Friendly consultant (cut-out)",
    alt: "Grow Edu consultant smiling, ready to help",
    scene: "",
    customPrompt:
      "Waist-up photo of a friendly Indian woman education consultant in her early 30s wearing a navy blazer and a light headset, holding a tablet, smiling and turned slightly to the left as if looking toward a headline, isolated on a plain solid deep-navy (#1a3660) background for easy cut-out, soft studio key light with a gentle green rim light, photorealistic, square 1:1, 900×900px. No text, no logos, no watermark.",
  }),
};
