"use server";

import { headers } from "next/headers";

import { deliverEnquiry } from "@/lib/contact/deliver";
import { parseContactForm, type ContactSubmission, type FieldErrors } from "@/lib/contact/validation";

export type ContactFormState =
  | { status: "idle" }
  | { status: "invalid"; errors: FieldErrors; values: Partial<ContactSubmission> }
  | { status: "error"; message: string; values: Partial<ContactSubmission> }
  | { status: "success"; reference: string; name: string; preferredContact: string };

// Best-effort rate limit per IP (resets when the server restarts; use a store such as Upstash for strict limits).
const recent = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

function rateLimited(ip: string) {
  const now = Date.now();
  const hits = (recent.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  return hits.length > MAX_PER_WINDOW;
}

export async function submitContact(_prev: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Spam traps: a hidden field bots fill in, and a minimum time on the page.
  const startedAt = Number(formData.get("startedAt") ?? 0);
  if (String(formData.get("company_website") ?? "") !== "" || (startedAt && Date.now() - startedAt < 3000)) {
    return { status: "success", reference: "GE-OK", name: "", preferredContact: "" };
  }

  const parsed = parseContactForm(formData);
  if (!parsed.ok) return { status: "invalid", errors: parsed.errors, values: parsed.values };

  const h = await headers();
  const ip = h.get("x-forwarded-for")?.split(",")[0]?.trim() ?? h.get("x-real-ip") ?? "unknown";
  if (rateLimited(ip)) {
    return {
      status: "error",
      message: "You've sent several enquiries in a short time. Please wait a few minutes or call us directly.",
      values: parsed.data,
    };
  }

  const reference = `GE-${Date.now().toString(36).toUpperCase().slice(-6)}`;
  const delivered = await deliverEnquiry({
    ...parsed.data,
    reference,
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
    page: h.get("referer") ?? "/contact",
  });

  if (!delivered) {
    return {
      status: "error",
      message: "We couldn't send your enquiry just now. Please try again, or reach us by phone, WhatsApp or email.",
      values: parsed.data,
    };
  }

  return { status: "success", reference, name: parsed.data.name.split(" ")[0], preferredContact: parsed.data.preferredContact };
}
