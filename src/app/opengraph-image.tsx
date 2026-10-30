import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

// The 1200×630 preview shown when the site is shared on WhatsApp, LinkedIn, X, etc.
export const alt = `${siteConfig.name} — School consultants in India`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(join(process.cwd(), "public/images/logo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0d1f3c",
          color: "#fff",
        }}
      >
        <div style={{ display: "flex", background: "#fff", borderRadius: 18, padding: "16px 24px", alignSelf: "flex-start" }}>
          <img src={logoSrc} height={72} alt="" />
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
            From idea to inauguration — we build schools that last.
          </div>
          <div style={{ fontSize: 30, color: "rgba(255,255,255,.72)" }}>
            Start · Manage · Grow — CBSE, ICSE, IB, Cambridge & State Board schools across India
          </div>
        </div>
        <div style={{ display: "flex", height: 10, width: 220, borderRadius: 999, background: "#3ab04b" }} />
      </div>
    ),
    size,
  );
}
