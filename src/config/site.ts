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
    "Grow Edu System helps promoters start, manage and grow K-12 schools in India: feasibility & DPR, board affiliation, school management and admissions growth.",
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
    phoneDisplay: "+91 87399 90953",
    phoneHref: "tel:+918739990953",
    /** Same number in international format, used in structured data. */
    phoneE164: "+918739990953",
    email: "growedusystem@gmail.com",
    whatsappDisplay: "+91 87399 90953",
    /** Opens WhatsApp with a ready-typed greeting. */
    whatsappHref:
      "https://wa.me/918739990953?text=" +
      encodeURIComponent("Hello Grow Edu System, I'd like to know more about your school services."),
  },

  /** Head office — shown in the footer and on /contact, and used in structured data. */
  address: {
    street: "LIG-10, Bharti Niketan, Huzur, Govindpura",
    locality: "Bhopal",
    region: "Madhya Pradesh",
    postalCode: "462023",
    country: "IN",
    /** Used for the map and the "Get directions" link. */
    mapsQuery: "LIG-10, Bharti Niketan, Govindpura, Bhopal, Madhya Pradesh 462023",
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
