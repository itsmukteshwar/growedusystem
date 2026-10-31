"use client";

import { ArrowRight, Check, ExternalLink, ShieldCheck, X } from "lucide-react";
import { type FormEvent, type ReactNode, useCallback, useEffect, useId, useRef, useState, useSyncExternalStore } from "react";

import { siteConfig } from "@/config/site";
import { getOfficeStatus } from "@/lib/business-hours";
import { cn } from "@/lib/utils";

/**
 * Floating WhatsApp enquiry widget (bottom-right on every page).
 *
 * - The launcher pops in, flips periodically to say "Hi!", and pulses so visitors notice it.
 * - Clicking opens a small panel that collects name, mobile, email and the services they need.
 * - Submitting opens WhatsApp (app on phones, WhatsApp Web on desktop) with all details pre-typed,
 *   so nothing is stored on a server — the conversation simply starts in WhatsApp.
 */

const WHATSAPP_NUMBER = siteConfig.contact.phoneE164.replace(/\D/g, "");

const SERVICES = [
  "Start a new school",
  "Feasibility study & DPR",
  "CBSE / ICSE / IB / Cambridge affiliation",
  "State Board recognition",
  "Day school management",
  "Boarding school management",
  "School audit",
  "Admissions growth",
  "Teacher training",
  "School ERP & platforms",
  "Something else",
] as const;

const STORAGE_KEY = "ges-wa-details";
const SEEN_KEY = "ges-wa-seen";

type Errors = Partial<Record<"name" | "mobile" | "email" | "services", string>>;

/* ---------------------------------------------------------------------------------------------- */
/* Small helpers                                                                                   */
/* ---------------------------------------------------------------------------------------------- */

function safeGet(storage: "local" | "session", key: string) {
  try {
    return (storage === "local" ? window.localStorage : window.sessionStorage).getItem(key);
  } catch {
    return null;
  }
}
function safeSet(storage: "local" | "session", key: string, value: string) {
  try {
    (storage === "local" ? window.localStorage : window.sessionStorage).setItem(key, value);
  } catch {
    /* storage unavailable (private mode) — the widget still works */
  }
}

// Office status, re-checked every minute (null during server render).
const subscribeMinute = (cb: () => void) => {
  const id = window.setInterval(cb, 60_000);
  return () => window.clearInterval(id);
};
const getMinute = () => Math.floor(Date.now() / 60_000);
const getServerMinute = () => null;

function useOfficeStatus() {
  const minute = useSyncExternalStore(subscribeMinute, getMinute, getServerMinute);
  return minute === null ? null : getOfficeStatus(new Date(minute * 60_000));
}

function buildMessage(d: { name: string; mobile: string; email: string; services: string[]; message: string }) {
  const lines = [
    `Hello ${siteConfig.name}, I'd like to know more about your services.`,
    "",
    `*Name:* ${d.name}`,
    `*Mobile:* +91 ${d.mobile}`,
    `*Email:* ${d.email}`,
    `*Interested in:* ${d.services.join(", ")}`,
  ];
  if (d.message.trim()) lines.push(`*Message:* ${d.message.trim()}`);
  lines.push("", `_Sent from ${window.location.host}${window.location.pathname}_`);
  return lines.join("\n");
}

/** Official-style WhatsApp glyph (the speech-bubble phone mark). */
function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={className} fill="currentColor">
      <path d="M16.004 3.2C8.94 3.2 3.2 8.937 3.2 16c0 2.26.593 4.467 1.72 6.413L3.2 28.8l6.56-1.687A12.77 12.77 0 0 0 16.004 28.8C23.066 28.8 28.8 23.063 28.8 16S23.066 3.2 16.004 3.2Zm0 23.36a10.6 10.6 0 0 1-5.4-1.48l-.387-.227-3.893 1.004 1.04-3.787-.253-.4A10.53 10.53 0 0 1 5.44 16c0-5.827 4.74-10.56 10.564-10.56 5.82 0 10.556 4.733 10.556 10.56 0 5.826-4.736 10.56-10.556 10.56Zm5.787-7.907c-.317-.16-1.876-.927-2.167-1.033-.29-.107-.5-.16-.713.16-.21.316-.817 1.033-1.003 1.246-.184.214-.37.24-.687.08-.316-.16-1.336-.493-2.546-1.573-.94-.84-1.574-1.874-1.76-2.19-.183-.32-.02-.49.14-.65.143-.14.316-.37.476-.553.16-.187.21-.32.316-.534.107-.213.054-.4-.026-.56-.08-.16-.714-1.72-.977-2.353-.257-.62-.52-.533-.713-.543l-.607-.01c-.21 0-.553.08-.843.4-.29.316-1.107 1.08-1.107 2.633 0 1.554 1.133 3.054 1.29 3.267.16.213 2.23 3.4 5.4 4.766.754.327 1.344.52 1.804.667.757.24 1.447.206 1.993.126.607-.09 1.876-.767 2.14-1.507.263-.74.263-1.373.183-1.507-.077-.133-.29-.213-.607-.373Z" />
    </svg>
  );
}

/* ---------------------------------------------------------------------------------------------- */
/* Widget                                                                                          */
/* ---------------------------------------------------------------------------------------------- */

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false); // launcher entrance
  const [teaser, setTeaser] = useState(false); // one-time speech bubble
  const [unread, setUnread] = useState(false); // little "1" badge
  const [sent, setSent] = useState<string | null>(null); // WhatsApp URL after submit

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const panelRef = useRef<HTMLDivElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const uid = useId();
  const status = useOfficeStatus();

  // Entrance, unread badge and teaser bubble — once per browser session.
  useEffect(() => {
    const seen = safeGet("session", SEEN_KEY) === "1";
    const t1 = window.setTimeout(() => setReady(true), 900);
    const t2 = seen ? 0 : window.setTimeout(() => setUnread(true), 3500);
    const t3 = seen ? 0 : window.setTimeout(() => setTeaser(true), 6000);
    const t4 = seen ? 0 : window.setTimeout(() => setTeaser(false), 16000);

    return () => [t1, t2, t3, t4].forEach((t) => t && window.clearTimeout(t));
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    launcherRef.current?.focus();
  }, []);

  // Pre-fill details a visitor typed before (only into empty fields).
  const prefill = () => {
    const saved = safeGet("local", STORAGE_KEY);
    if (!saved) return;
    try {
      const d = JSON.parse(saved) as { name?: string; mobile?: string; email?: string };
      if (d.name && !name) setName(d.name);
      if (d.mobile && !mobile) setMobile(d.mobile);
      if (d.email && !email) setEmail(d.email);
    } catch {
      /* ignore malformed storage */
    }
  };

  const toggle = () => {
    if (!open) prefill();
    setOpen((o) => !o);
    setTeaser(false);
    setUnread(false);
    safeSet("session", SEEN_KEY, "1");
  };

  // Focus the first field on open; Esc and outside-click close.
  useEffect(() => {
    if (!open) return;
    const focusTimer = window.setTimeout(() => firstFieldRef.current?.focus({ preventScroll: true }), 220);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    const onPointer = (e: PointerEvent) => {
      const t = e.target as Node;
      if (!panelRef.current?.contains(t) && !launcherRef.current?.contains(t)) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
    };
  }, [open, close]);

  const toggleService = (s: string) => {
    setServices((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));
    setErrors((e) => ({ ...e, services: undefined }));
  };

  const validate = (): Errors => {
    const e: Errors = {};
    if (name.trim().length < 2) e.name = "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(mobile)) e.mobile = "Enter a valid 10-digit Indian mobile number.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email.trim())) e.email = "Enter a valid email address.";
    if (services.length === 0) e.services = "Choose at least one service.";
    return e;
  };

  const onSubmit = (ev: FormEvent) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) {
      const first = (["name", "mobile", "email"] as const).find((k) => e[k]);
      if (first) document.getElementById(`${uid}-${first}`)?.focus({ preventScroll: false });
      return;
    }
    safeSet("local", STORAGE_KEY, JSON.stringify({ name: name.trim(), mobile, email: email.trim() }));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      buildMessage({ name: name.trim(), mobile, email: email.trim(), services, message }),
    )}`;
    setSent(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const resetForm = () => {
    setSent(null);
    setServices([]);
    setMessage("");
  };

  const statusLabel = status === null ? "Usually replies within an hour" : status.open ? "Online now · replies in minutes" : `Away · back ${status.nextOpenLabel}`;

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-45 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {/* ------------------------------------------------------------------ Panel */}
      <div
        ref={panelRef}
        id={`${uid}-panel`}
        role="dialog"
        aria-modal="false"
        aria-labelledby={`${uid}-title`}
        inert={!open}
        className={cn(
          "wa-panel pointer-events-auto flex w-[min(380px,calc(100vw-32px))] origin-bottom-right flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_24px_70px_-20px_rgb(13_31_60/0.45),0_0_0_1px_rgb(13_31_60/0.06)]",
          "max-h-[calc(100dvh-112px)] min-h-0 sm:max-h-[calc(100dvh-128px)]",
          open ? "wa-panel-open" : "wa-panel-closed",
        )}
      >
        {/* Header */}
        <div className="relative overflow-hidden bg-[linear-gradient(135deg,#075e54_0%,#128c7e_55%,#25d366_140%)] px-5 pt-5 pb-6 text-white">
          <div aria-hidden="true" className="absolute -top-10 -right-10 size-36 rounded-full bg-white/8" />
          <div aria-hidden="true" className="absolute -bottom-16 -left-6 size-32 rounded-full bg-white/6" />
          <div className="relative flex items-start gap-3">
            <span className="relative flex size-11 shrink-0 items-center justify-center rounded-full bg-white font-display text-lg font-extrabold text-[#128c7e] shadow-sm">
              G
              <span
                className={cn(
                  "absolute right-0 bottom-0 size-3 rounded-full ring-2 ring-[#128c7e]",
                  status?.open ? "bg-[#25d366]" : "bg-warn-500",
                )}
              />
            </span>
            <div className="min-w-0 flex-1">
              <h2 id={`${uid}-title`} className="font-display text-[17px] leading-tight font-extrabold">
                {siteConfig.name}
              </h2>
              <p className="mt-0.5 text-[13px] text-white/85">{statusLabel}</p>
            </div>
            <button
              type="button"
              onClick={close}
              className="-mt-1 -mr-1 rounded-full p-1.5 text-white/85 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
            >
              <X aria-hidden="true" className="size-5" />
              <span className="sr-only">Close chat</span>
            </button>
          </div>
        </div>

        <div className="-mt-3 min-h-0 flex-1 overflow-y-auto overscroll-contain rounded-t-[20px] bg-[#f0f2f5] px-4 pt-4 pb-4">
          {/* Greeting bubble */}
          <div className="wa-bubble mb-4 max-w-[88%] rounded-[16px] rounded-tl-[4px] bg-white px-3.5 py-2.5 text-[14px] leading-[1.5] text-ink shadow-[0_1px_1px_rgb(0_0_0/0.06)]">
            Namaste! Share a few details and pick what you need — we&apos;ll continue the conversation on WhatsApp.
          </div>

          {sent ? (
            <div className="wa-bubble rounded-[16px] bg-white p-5 text-center shadow-[0_1px_1px_rgb(0_0_0/0.06)]" role="status">
              <span className="mx-auto mb-3 flex size-12 items-center justify-center rounded-full bg-[#25d366]/15 text-[#128c7e]">
                <Check aria-hidden="true" className="size-6" strokeWidth={3} />
              </span>
              <p className="font-display text-[16px] font-extrabold text-ink">Opening WhatsApp…</p>
              <p className="mt-1 text-[13.5px] leading-[1.55] text-body">
                Your details are ready in the chat — just press <strong>Send</strong> in WhatsApp.
              </p>
              <a
                href={sent}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#25d366] px-4.5 py-2.5 text-[14px] font-bold text-white transition-colors hover:bg-[#1ebe5b]"
              >
                Didn&apos;t open? Tap here <ExternalLink aria-hidden="true" className="size-3.5" />
              </a>
              <button type="button" onClick={resetForm} className="mt-3 block w-full text-[13px] font-semibold text-muted hover:text-ink">
                Start a new enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-3">
              <WaField id={`${uid}-name`} label="Your name" error={errors.name}>
                <input
                  ref={firstFieldRef}
                  id={`${uid}-name`}
                  type="text"
                  autoComplete="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setErrors((x) => ({ ...x, name: undefined }));
                  }}
                  placeholder="e.g. Rahul Sharma"
                  aria-invalid={!!errors.name || undefined}
                  aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                  className={waInput}
                />
              </WaField>

              <WaField id={`${uid}-mobile`} label="Mobile number" error={errors.mobile}>
                <div className="flex">
                  <span className="inline-flex items-center rounded-l-xl border border-r-0 border-line bg-canvas px-3 text-[14px] font-semibold text-body">
                    +91
                  </span>
                  <input
                    id={`${uid}-mobile`}
                    type="tel"
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={10}
                    value={mobile}
                    onChange={(e) => {
                      setMobile(e.target.value.replace(/\D/g, "").slice(-10));
                      setErrors((x) => ({ ...x, mobile: undefined }));
                    }}
                    placeholder="98765 43210"
                    aria-invalid={!!errors.mobile || undefined}
                    aria-describedby={errors.mobile ? `${uid}-mobile-error` : undefined}
                    className={cn(waInput, "rounded-l-none")}
                  />
                </div>
              </WaField>

              <WaField id={`${uid}-email`} label="Email" error={errors.email}>
                <input
                  id={`${uid}-email`}
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setErrors((x) => ({ ...x, email: undefined }));
                  }}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email || undefined}
                  aria-describedby={errors.email ? `${uid}-email-error` : undefined}
                  className={waInput}
                />
              </WaField>

              <fieldset aria-describedby={errors.services ? `${uid}-services-error` : undefined}>
                <legend className="mb-2 text-[13px] font-semibold text-ink">
                  What can we help with? <span className="font-normal text-muted">(choose one or more)</span>
                </legend>
                <div className="flex flex-wrap gap-1.5">
                  {SERVICES.map((s) => {
                    const on = services.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        aria-pressed={on}
                        onClick={() => toggleService(s)}
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full border px-3 py-1.5 text-[12.5px] font-semibold transition-[background-color,border-color,color,transform] duration-150 active:scale-95",
                          on
                            ? "border-[#128c7e] bg-[#128c7e] text-white"
                            : "border-line bg-white text-body hover:border-[#128c7e]/50 hover:text-ink",
                        )}
                      >
                        {on && <Check aria-hidden="true" className="size-3.5" strokeWidth={3} />}
                        {s}
                      </button>
                    );
                  })}
                </div>
                {errors.services && (
                  <p id={`${uid}-services-error`} className="mt-1.5 text-[12.5px] text-red-600">
                    {errors.services}
                  </p>
                )}
              </fieldset>

              <WaField id={`${uid}-message`} label="Anything else?" optional>
                <textarea
                  id={`${uid}-message`}
                  rows={2}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="City, board, timeline…"
                  className={cn(waInput, "resize-none")}
                />
              </WaField>

              <button
                type="submit"
                className="group mt-1 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25d366] px-5 py-3.5 font-display text-[15px] font-extrabold text-white shadow-[0_8px_20px_-8px_rgb(37_211_102/0.8)] transition-[background-color,transform] duration-150 hover:bg-[#1ebe5b] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#128c7e]"
              >
                <WhatsAppGlyph className="size-5" />
                Continue on WhatsApp
                <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>

              <p className="flex items-center justify-center gap-1.5 text-center text-[11.5px] text-muted">
                <ShieldCheck aria-hidden="true" className="size-3.5" />
                Your details go only to our team, via WhatsApp.
              </p>
            </form>
          )}
        </div>
      </div>

      <div className="relative">
      {/* ------------------------------------------------------------------ Teaser bubble */}
      <div
        aria-hidden={!teaser || open}
        className={cn(
          "wa-teaser pointer-events-auto absolute right-1 bottom-[calc(100%+14px)] w-62 rounded-2xl rounded-br-[4px] bg-white py-3 pr-8 pl-4 text-[13.5px] leading-[1.45] text-ink shadow-[0_12px_32px_-12px_rgb(13_31_60/0.4),0_0_0_1px_rgb(13_31_60/0.06)]",
          teaser && !open ? "wa-teaser-in" : "wa-teaser-out",
        )}
      >
        <button type="button" onClick={toggle} className="text-left" tabIndex={teaser && !open ? 0 : -1}>
          <strong className="block font-display text-[14px]">Planning a school?</strong>
          Chat with our experts on WhatsApp.
        </button>
        <button
          type="button"
          onClick={() => {
            setTeaser(false);
            safeSet("session", SEEN_KEY, "1");
          }}
          tabIndex={teaser && !open ? 0 : -1}
          className="absolute top-2 right-2 rounded-full p-0.5 text-muted hover:bg-canvas hover:text-ink"
        >
          <X aria-hidden="true" className="size-3.5" />
          <span className="sr-only">Dismiss</span>
        </button>
      </div>

      {/* ------------------------------------------------------------------ Launcher */}
      <button
        ref={launcherRef}
        type="button"
        onClick={toggle}
        aria-expanded={open}
        aria-controls={`${uid}-panel`}
        className={cn(
          "wa-launcher group pointer-events-auto relative size-15 rounded-full focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#128c7e]",
          ready ? "wa-launcher-in" : "wa-launcher-pre",
        )}
      >
        <span className="sr-only">{open ? "Close WhatsApp chat" : "Chat with us on WhatsApp"}</span>

        {/* Pulse rings (only while closed) */}
        {!open && (
          <>
            <span aria-hidden="true" className="wa-ring absolute inset-0 rounded-full bg-[#25d366]" />
            <span aria-hidden="true" className="wa-ring wa-ring-2 absolute inset-0 rounded-full bg-[#25d366]" />
          </>
        )}

        {/* 3D flip card: WhatsApp logo ↔ "Hi!" */}
        <span aria-hidden="true" className={cn("wa-flip absolute inset-0 rounded-full", !open && "wa-flip-loop")}>
          <span className="wa-face absolute inset-0 flex items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_28px_-6px_rgb(37_211_102/0.7)] transition-transform duration-200 group-hover:scale-[1.06] group-active:scale-95">
            <WhatsAppGlyph className={cn("size-8 transition-[transform,opacity] duration-300", open ? "scale-50 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100")} />
            <X
              className={cn(
                "absolute size-7 transition-[transform,opacity] duration-300",
                open ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0",
              )}
              strokeWidth={2.5}
            />
          </span>
          <span className="wa-face wa-back absolute inset-0 flex flex-col items-center justify-center rounded-full bg-white text-[#128c7e] shadow-[0_10px_28px_-6px_rgb(13_31_60/0.45)] ring-2 ring-[#25d366]">
            <span className="font-display text-[15px] leading-none font-extrabold">Hi!</span>
            <span className="mt-0.5 text-[9px] font-bold tracking-wide text-navy-800 uppercase">Chat</span>
          </span>
        </span>

        {/* Unread badge */}
        <span
          aria-hidden="true"
          className={cn(
            "absolute -top-0.5 -right-0.5 flex size-5 items-center justify-center rounded-full bg-red-500 text-[11px] font-bold text-white ring-2 ring-white transition-[transform,opacity] duration-300",
            unread && !open ? "scale-100 opacity-100" : "scale-0 opacity-0",
          )}
        >
          1
        </span>

        {/* Hover label (desktop) */}
        {!open && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 right-[calc(100%+12px)] hidden -translate-y-1/2 translate-x-2 rounded-full bg-navy-950 px-3.5 py-2 text-[13px] font-semibold whitespace-nowrap text-white opacity-0 shadow-lg transition-[opacity,transform] duration-200 group-hover:translate-x-0 group-hover:opacity-100 sm:block"
          >
            Chat with us
          </span>
        )}
      </button>
      </div>
    </div>
  );
}

const waInput =
  "w-full rounded-xl border border-line bg-white px-3.5 py-2.5 text-[14px] text-ink placeholder:text-muted/60 outline-none transition-[border-color,box-shadow] hover:border-navy-200 focus:border-[#128c7e] focus:ring-4 focus:ring-[#128c7e]/12 aria-invalid:border-red-500 aria-invalid:focus:ring-red-500/12";

function WaField({ id, label, error, optional, children }: { id: string; label: string; error?: string; optional?: boolean; children: ReactNode }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-[13px] font-semibold text-ink">
        {label}
        {optional ? <span className="ml-1 font-normal text-muted">(optional)</span> : <span aria-hidden="true" className="ml-0.5 text-red-600">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-[12.5px] text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
