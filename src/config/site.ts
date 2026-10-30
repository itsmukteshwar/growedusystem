/**
 * Site-wide settings. Update the values marked TODO before going live —
 * they feed the header, footer, SEO metadata and structured data.
 */
export const siteConfig = {
  name: "Grow Edu System",
  shortName: "Grow Edu",
  /** Production URL, no trailing slash. Override with NEXT_PUBLIC_SITE_URL. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.growedusystem.com").replace(/\/$/, ""),
  tagline: "From vision to inauguration — India's end-to-end school consultants.",
  description:
    "Grow Edu System helps promoters start, manage and grow K-12 schools across India — feasibility & DPR, trust registration, CBSE, ICSE, IB, Cambridge and State Board affiliation, hiring, school management, ERP and admissions growth.",
  keywords: [
    "school consultants in India",
    "how to start a school in India",
    "CBSE school setup",
    "CBSE affiliation consultant",
    "ICSE school affiliation",
    "IB school authorisation",
    "Cambridge IGCSE school setup",
    "school feasibility study",
    "school DPR",
    "school management services",
    "school improvement consultants",
    "school ERP",
    "teacher recruitment",
  ],
  locale: "en_IN",
  foundingCountry: "IN",

  contact: {
    // TODO: replace with real details. Leave `phoneHref` empty to hide phone links.
    phoneDisplay: "[+91 PHONE]",
    phoneHref: "", // e.g. "tel:+919876543210"
    email: "hello@growedusystem.com",
    whatsappHref: "", // e.g. "https://wa.me/919876543210"
  },

  // TODO: replace with your real office address — shown on /contact and in structured data.
  address: {
    street: "[Office address line]",
    locality: "[City]",
    region: "[State]",
    postalCode: "[PIN]",
    country: "IN",
    /** Used for the "Get directions" link. */
    mapsQuery: "Grow Edu System",
  },

  /**
   * Office hours in India Standard Time. Days: 0 = Sunday … 6 = Saturday.
   * Used for the live "Open now / Closed" badge and structured data.
   */
  hours: {
    timeZone: "Asia/Kolkata",
    schedule: [
      { day: 1, open: "10:00", close: "19:00" },
      { day: 2, open: "10:00", close: "19:00" },
      { day: 3, open: "10:00", close: "19:00" },
      { day: 4, open: "10:00", close: "19:00" },
      { day: 5, open: "10:00", close: "19:00" },
      { day: 6, open: "10:00", close: "14:00" },
    ],
    /** Closed dates (YYYY-MM-DD, IST), e.g. national holidays. */
    holidays: [] as string[],
  },

  // TODO: add real profile URLs — they become `sameAs` links in structured data.
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
    youtube: "",
  },

  /** Shows the image-brief labels inside photo placeholders. */
  showImageBriefs:
    process.env.NEXT_PUBLIC_SHOW_IMAGE_BRIEFS === "true" || process.env.NODE_ENV !== "production",
} as const;

export type SiteConfig = typeof siteConfig;
