import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppWidget } from "@/components/layout/WhatsAppWidget";
import { JsonLd } from "@/components/seo/JsonLd";
import { siteConfig } from "@/config/site";
import { inter, jakarta } from "@/lib/fonts";
import { graph, organizationSchema, websiteSchema } from "@/lib/schema";

import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — School Consultants in India`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "education",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: "/",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — School Consultants in India`,
    description: siteConfig.description,
    images: [{ url: "/og-default.jpg", width: 1200, height: 630, alt: `${siteConfig.name} — School consultants in India` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — School Consultants in India`,
    description: siteConfig.description,
    images: ["/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: { telephone: false },
  // TODO: paste your Google Search Console / Bing verification codes here.
  // verification: { google: "xxxxxxxx", other: { "msvalidate.01": "xxxxxxxx" } },
};

export const viewport: Viewport = {
  themeColor: "#0d1f3c",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-IN" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="overflow-x-hidden">
        <a
          href="#main"
          className="sr-only z-100 rounded-lg bg-white px-4 py-2 font-semibold text-navy-800 focus:not-sr-only focus:fixed focus:top-3 focus:left-3"
        >
          Skip to content
        </a>
        <JsonLd data={graph(organizationSchema(), websiteSchema())} />
        <AnnouncementBar />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  );
}
