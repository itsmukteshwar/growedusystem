import type { NavGroup, NavLink } from "@/types";

/**
 * All site URLs live here so a page can be renamed in one place.
 * Pages marked `planned` don't exist yet — create them under src/app/.
 */
export const routes = {
  home: "/",
  consultation: "/contact",

  startSchool: "/start-a-school",
  feasibility: "/start-a-school/feasibility-dpr",
  cbse: "/start-a-school/cbse",
  icse: "/start-a-school/icse",
  ib: "/start-a-school/ib",
  igcse: "/start-a-school/cambridge-igcse",
  stateBoard: "/start-a-school/state-board",
  compareBoards: "/start-a-school/compare-boards",

  management: "/school-management",
  dayManagement: "/school-management/day-school",
  boardingManagement: "/school-management/boarding-school",

  improvement: "/school-improvement",
  audit: "/school-improvement/school-audit",
  admissions: "/school-improvement/admissions-growth",
  training: "/school-improvement/teacher-training",

  platforms: "/platforms",
  erp: "/platforms/school-erp",
  recruitment: "/platforms/teacher-recruitment",
  realEstate: "/platforms/school-real-estate",
  marketplace: "/platforms/supplies-marketplace",
  websiteBuilder: "/platforms/website-builder",

  resources: "/resources",
  blog: "/resources/blog",
  caseStudies: "/case-studies",
  projects: "/projects",
  faq: "/faq",

  about: "/about",
  team: "/about/team",
  careers: "/careers",
  contact: "/contact",
  privacy: "/privacy-policy",
  terms: "/terms",
  sitemap: "/sitemap.xml",
} as const;

export const mainNav: NavGroup[] = [
  {
    label: "Start a School",
    href: routes.startSchool,
    children: [
      { label: "Feasibility & DPR", href: routes.feasibility },
      { label: "CBSE school setup", href: routes.cbse },
      { label: "ICSE school setup", href: routes.icse },
      { label: "IB school setup", href: routes.ib },
      { label: "Cambridge IGCSE setup", href: routes.igcse },
      { label: "State Board setup", href: routes.stateBoard },
    ],
  },
  {
    label: "Management",
    href: routes.management,
    children: [
      { label: "Day school management", href: routes.dayManagement },
      { label: "Boarding school management", href: routes.boardingManagement },
    ],
  },
  {
    label: "Improvement",
    href: routes.improvement,
    children: [
      { label: "School audit", href: routes.audit },
      { label: "Admissions growth", href: routes.admissions },
      { label: "Teacher training", href: routes.training },
    ],
  },
  {
    label: "Platforms",
    href: routes.platforms,
    children: [
      { label: "School ERP", href: routes.erp },
      { label: "Teacher Recruitment", href: routes.recruitment },
      { label: "School Real Estate", href: routes.realEstate },
      { label: "Supplies Marketplace", href: routes.marketplace },
      { label: "Website Builder", href: routes.websiteBuilder },
    ],
  },
  {
    label: "Resources",
    href: routes.resources,
    children: [
      { label: "Knowledge Hub", href: routes.blog },
      { label: "Case Studies", href: routes.caseStudies },
      { label: "FAQ", href: routes.faq },
    ],
  },
  {
    label: "About",
    href: routes.about,
    children: [
      { label: "Our story", href: routes.about },
      { label: "Our team", href: routes.team },
      { label: "Careers", href: routes.careers },
      { label: "Contact", href: routes.contact },
    ],
  },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: "Services",
    links: [
      { label: "Start a School", href: routes.startSchool },
      { label: "School Management", href: routes.management },
      { label: "School Improvement", href: routes.improvement },
      { label: "CBSE Setup", href: routes.cbse },
    ],
  },
  {
    title: "Platforms",
    links: [
      { label: "School ERP", href: routes.erp },
      { label: "Teacher Recruitment", href: routes.recruitment },
      { label: "School Real Estate", href: routes.realEstate },
      { label: "Website Builder", href: routes.websiteBuilder },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Knowledge Hub", href: routes.blog },
      { label: "Case Studies", href: routes.caseStudies },
      { label: "FAQ", href: routes.faq },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: routes.about },
      { label: "Our Team", href: routes.team },
      { label: "Careers", href: routes.careers },
      { label: "Contact", href: routes.contact },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: "Privacy", href: routes.privacy },
  { label: "Terms", href: routes.terms },
  { label: "Sitemap", href: routes.sitemap },
];
