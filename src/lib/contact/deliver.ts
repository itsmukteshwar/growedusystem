import "server-only";

import { siteConfig } from "@/config/site";

import type { ContactSubmission } from "./validation";

/**
 * Sends an enquiry to every configured channel. Configure at least one in .env.local:
 *
 *  - RESEND_API_KEY + CONTACT_TO_EMAIL (+ optional CONTACT_FROM_EMAIL)  → email via resend.com
 *  - CONTACT_WEBHOOK_URL → JSON POST (Google Apps Script → Sheets, Zapier, Make, Slack, your CRM)
 *
 * Returns false only if nothing is configured in production or every channel fails.
 */
export async function deliverEnquiry(entry: ContactSubmission & { reference: string; submittedAt: string; page: string }) {
  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  const jobs: Promise<Response>[] = [];

  if (resendKey && to) {
    jobs.push(
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${resendKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? `${siteConfig.name} <onboarding@resend.dev>`,
          to: to.split(",").map((s) => s.trim()),
          reply_to: entry.email,
          subject: `New enquiry ${entry.reference}: ${entry.name} — ${entry.city} (${entry.interests.join(", ")})`,
          html: renderEmail(entry),
          text: renderText(entry),
        }),
      }),
    );
  }

  if (webhook) {
    jobs.push(
      fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...entry, interests: entry.interests.join(", ") }),
      }),
    );
  }

  if (jobs.length === 0) {
    if (process.env.NODE_ENV !== "production") {
      console.info("[contact] No delivery channel configured — enquiry logged instead:\n", renderText(entry));
      return true;
    }
    console.error("[contact] No delivery channel configured. Set RESEND_API_KEY/CONTACT_TO_EMAIL or CONTACT_WEBHOOK_URL.");
    return false;
  }

  const results = await Promise.allSettled(jobs);
  const delivered = results.some((r) => r.status === "fulfilled" && r.value.ok);
  if (!delivered) console.error("[contact] Delivery failed", results);
  return delivered;
}

const rows = (e: ContactSubmission & { reference: string; submittedAt: string; page: string }) =>
  [
    ["Reference", e.reference],
    ["Name", e.name],
    ["Phone", e.phone],
    ["Email", e.email],
    ["City / State", `${e.city}, ${e.state}`],
    ["I am a", e.role],
    ["Help with", e.interests.join(", ")],
    ["Board", e.board || "—"],
    ["Budget", e.budget || "—"],
    ["Timeline", e.timeline || "—"],
    ["Preferred contact", e.preferredContact],
    ["Message", e.message || "—"],
    ["Submitted", e.submittedAt],
    ["Page", e.page],
  ] as const;

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

function renderEmail(e: Parameters<typeof rows>[0]) {
  const body = rows(e)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:8px 12px;color:#5a6d88;white-space:nowrap;vertical-align:top">${k}</td><td style="padding:8px 12px;color:#0d1b30">${escape(v).replace(/\n/g, "<br>")}</td></tr>`,
    )
    .join("");
  return `<div style="font-family:system-ui,sans-serif"><h2 style="color:#1a3660">New website enquiry</h2><table style="border-collapse:collapse;border:1px solid #dde5f0">${body}</table></div>`;
}

function renderText(e: Parameters<typeof rows>[0]) {
  return rows(e)
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
}
