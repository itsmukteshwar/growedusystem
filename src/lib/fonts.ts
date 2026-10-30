import { Inter, Plus_Jakarta_Sans } from "next/font/google";

/**
 * Fonts are downloaded at build time and self-hosted by Next.js,
 * so there is no request to Google from the visitor's browser.
 */
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});
