/**
 * Schema.org structured data (JSON-LD) builders.
 * Validate changes at https://validator.schema.org and
 * https://search.google.com/test/rich-results.
 */
import { siteConfig } from "@/config/site";
import type { Faq } from "@/types";

const orgId = `${siteConfig.url}/#organization`;

function postalAddress() {
  const { address } = siteConfig;
  return {
    "@type": "PostalAddress",
    streetAddress: address.street,
    addressLocality: address.locality,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: address.country,
  };
}

const websiteId = `${siteConfig.url}/#website`;

export function organizationSchema() {
  const { phoneE164: telephone, email } = siteConfig.contact;
  const { address } = siteConfig;
  const sameAs = Object.values(siteConfig.social).filter(Boolean);

  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": orgId,
    name: siteConfig.name,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/images/logo.png`,
    },
    image: `${siteConfig.url}/opengraph-image`,
    description: siteConfig.description,
    email,
    telephone,
    address: postalAddress(),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address.mapsQuery)}`,
    areaServed: { "@type": "Country", name: "India" },
    knowsAbout: [
      "School setup in India",
      "CBSE affiliation",
      "CISCE (ICSE) affiliation",
      "IB authorisation",
      "Cambridge International (IGCSE) recognition",
      "School feasibility studies and DPR",
      "School management",
      "School improvement and admissions growth",
    ],
    ...(sameAs.length > 0 && { sameAs }),
    contactPoint: {
      "@type": "ContactPoint",
      telephone,
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "School consulting services",
      itemListElement: ["Start a new school", "School management", "School improvement"].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, provider: { "@id": orgId } },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "en-IN",
    publisher: { "@id": orgId },
  };
}

export function faqSchema(items: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

/** Wraps several nodes into one @graph document. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}

const dayUri = (d: number) =>
  `https://schema.org/${["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][d]}`;

export function contactPageSchema() {
  const { hours, contact } = siteConfig;
  const telephone = contact.phoneE164;

  return {
    "@type": "ContactPage",
    "@id": `${siteConfig.url}/contact#webpage`,
    url: `${siteConfig.url}/contact`,
    name: `Contact ${siteConfig.name}`,
    isPartOf: { "@id": websiteId },
    about: {
      "@id": orgId,
      address: postalAddress(),
      openingHoursSpecification: hours.schedule.map((s) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: dayUri(s.day),
        opens: s.open,
        closes: s.close,
      })),
      contactPoint: {
        "@type": "ContactPoint",
        contactType: "sales",
        email: contact.email,
        telephone,
        areaServed: "IN",
        availableLanguage: ["English", "Hindi"],
      },
    },
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, siteConfig.url).toString(),
    })),
  };
}

/** Service + WebPage node for a service or guide page. */
export function servicePageSchema(page: { path: string; title: string; description: string; updated: string; serviceName: string }) {
  const url = new URL(page.path, siteConfig.url).toString();
  return [
    {
      "@type": "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.title,
      description: page.description,
      inLanguage: "en-IN",
      isPartOf: { "@id": websiteId },
      dateModified: page.updated,
      publisher: { "@id": orgId },
    },
    {
      "@type": "Service",
      "@id": `${url}#service`,
      name: page.serviceName,
      description: page.description,
      serviceType: page.serviceName,
      provider: { "@id": orgId },
      areaServed: { "@type": "Country", name: "India" },
      url,
    },
  ];
}
