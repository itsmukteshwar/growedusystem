"use client";

import { AlertCircle, CheckCircle2, Loader2, Lock, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";

import { describedBy, Field, inputClass, Select } from "@/components/ui/FormField";
import { routes } from "@/config/navigation";
import {
  boardOptions,
  budgetOptions,
  contactMethods,
  indianStates,
  interests,
  roles,
  timelineOptions,
} from "@/data/contact";
import { cn } from "@/lib/utils";

// Replace with your Formspree endpoint — sign up free at https://formspree.io
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ?? "";

const MESSAGE_MAX = 3000;
const methodIcons = { "Phone call": Phone, WhatsApp: MessageCircle, Email: Mail } as const;

type Status = "idle" | "pending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [messageLength, setMessageLength] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setErrorMsg("Contact form is not yet configured. Please reach us directly by phone or WhatsApp.");
      setStatus("error");
      return;
    }

    const data = new FormData(e.currentTarget);
    if (String(data.get("company_website") ?? "") !== "") return; // honeypot

    const startedAt = Number(startedAtRef.current?.value ?? 0);
    if (startedAt && Date.now() - startedAt < 3000) {
      setStatus("success");
      return;
    }

    setStatus("pending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        formRef.current?.reset();
      } else {
        const json = await res.json().catch(() => ({}));
        setErrorMsg(
          (json as { error?: string }).error ??
            "We couldn't send your enquiry just now. Please try again, or reach us by phone, WhatsApp or email.",
        );
        setStatus("error");
      }
    } catch {
      setErrorMsg("We couldn't send your enquiry just now. Please try again, or reach us by phone, WhatsApp or email.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return <SuccessPanel />;
  }

  const pending = status === "pending";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="flex flex-col gap-8"
      aria-describedby="form-note"
    >
      {status === "error" && (
        <div
          role="alert"
          className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 outline-none"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>{errorMsg}</p>
        </div>
      )}

      {/* Spam protection */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input
        ref={startedAtRef}
        type="hidden"
        name="startedAt"
        defaultValue={String(Date.now())}
      />

      <Fieldset step="1" legend="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Full name" required>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              placeholder="e.g. Rajesh Sharma"
              className={inputClass}
              {...describedBy("name")}
            />
          </Field>
          <Field id="phone" label="Mobile number" required hint="We'll call from an Indian number.">
            <div className="flex">
              <span className="inline-flex items-center rounded-l-xl border border-r-0 border-line bg-canvas px-3 text-[15px] text-muted">
                +91
              </span>
              <input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                autoComplete="tel-national"
                required
                placeholder="98765 43210"
                className={cn(inputClass, "rounded-l-none")}
                {...describedBy("phone", undefined, "We'll call from an Indian number.")}
              />
            </div>
          </Field>
          <Field id="email" label="Email" required>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
              className={inputClass}
              {...describedBy("email")}
            />
          </Field>
          <Field id="role" label="I am a" required>
            <Select id="role" name="role" required defaultValue="" {...describedBy("role")}>
              <option value="" disabled>
                Choose one
              </option>
              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </Select>
          </Field>
          <Field id="city" label="City" required>
            <input
              id="city"
              name="city"
              autoComplete="address-level2"
              required
              placeholder="Where is / will the school be?"
              className={inputClass}
              {...describedBy("city")}
            />
          </Field>
          <Field id="state" label="State" required>
            <Select id="state" name="state" required defaultValue="" {...describedBy("state")}>
              <option value="" disabled>
                Choose a state
              </option>
              {indianStates.map((s) => (
                <option key={s}>{s}</option>
              ))}
            </Select>
          </Field>
        </div>
      </Fieldset>

      <Fieldset step="2" legend="Your project">
        <fieldset>
          <legend className="mb-2.5 text-sm font-semibold text-ink">
            What can we help with?
            <span aria-hidden="true" className="ml-0.5 text-red-600">*</span>
            <span className="ml-1.5 text-xs font-normal text-muted">Select all that apply</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <label key={item} className="cursor-pointer">
                <input type="checkbox" name="interests" value={item} className="peer sr-only" />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-sm text-body transition-colors select-none peer-checked:border-navy-800 peer-checked:bg-navy-800 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-navy-500/25 hover:border-navy-300">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <Field id="board" label="Preferred board">
            <Select id="board" name="board" defaultValue="">
              <option value="">Select</option>
              {boardOptions.map((b) => (<option key={b}>{b}</option>))}
            </Select>
          </Field>
          <Field id="budget" label="Investment budget">
            <Select id="budget" name="budget" defaultValue="">
              <option value="">Select</option>
              {budgetOptions.map((b) => (<option key={b}>{b}</option>))}
            </Select>
          </Field>
          <Field id="timeline" label="Timeline">
            <Select id="timeline" name="timeline" defaultValue="">
              <option value="">Select</option>
              {timelineOptions.map((t) => (<option key={t}>{t}</option>))}
            </Select>
          </Field>
        </div>
      </Fieldset>

      <Fieldset step="3" legend="Anything else?">
        <Field id="message" label="Your message" hint="Land status, student capacity, questions — anything that helps us prepare.">
          <textarea
            id="message"
            name="message"
            rows={5}
            maxLength={MESSAGE_MAX}
            onChange={(e) => setMessageLength(e.target.value.length)}
            placeholder="e.g. We have 2 acres in a growing suburb and want to open a CBSE school for 1,200 students by 2028."
            className={cn(inputClass, "resize-y")}
            {...describedBy("message", undefined, "Land status, student capacity, questions — anything that helps us prepare.")}
          />
          <span className="self-end text-xs text-muted tabular-nums" aria-live="off">
            {messageLength}/{MESSAGE_MAX}
          </span>
        </Field>

        <fieldset className="mt-5">
          <legend className="mb-2.5 text-sm font-semibold text-ink">
            Best way to reach you
            <span aria-hidden="true" className="ml-0.5 text-red-600">*</span>
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {contactMethods.map((method, i) => {
              const Icon = methodIcons[method];
              return (
                <label key={method} className="cursor-pointer">
                  <input type="radio" name="preferredContact" value={method} defaultChecked={i === 0} className="peer sr-only" />
                  <span className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-white px-2 py-3 text-center text-sm font-semibold text-body transition-colors peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-checked:text-brand-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/25 hover:border-navy-300 sm:flex-row sm:justify-center">
                    <Icon aria-hidden="true" className="size-4.5" />
                    {method}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>
      </Fieldset>

      <div className="flex flex-col gap-5 border-t border-line pt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-body">
          <input type="checkbox" name="consent" required className="mt-0.5 size-4.5 shrink-0 cursor-pointer accent-brand-600" />
          <span>
            I agree to be contacted by Grow Edu System about my enquiry by phone, WhatsApp or email. See our{" "}
            <a href={routes.privacy} className="font-semibold text-navy-800 underline underline-offset-2">privacy policy</a>.
          </span>
        </label>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <p id="form-note" className="flex items-center gap-2 text-[13px] text-muted">
            <Lock aria-hidden="true" className="size-3.5" />
            Your details stay private. We never share or sell them.
          </p>
          <button
            type="submit"
            disabled={pending}
            className="group inline-flex min-w-52 items-center justify-center gap-2.5 rounded-xl bg-brand-600 px-7 py-4 font-display text-base font-bold text-white transition-[background-color,transform,box-shadow] hover:-translate-y-px hover:bg-brand-700 hover:shadow-[0_10px_24px_-10px_rgb(37_135_53/0.7)] disabled:cursor-wait disabled:opacity-80 disabled:hover:translate-y-0"
          >
            {pending ? (
              <><Loader2 aria-hidden="true" className="size-4.5 animate-spin" />Sending…</>
            ) : (
              <><Send aria-hidden="true" className="size-4.5 transition-transform group-hover:translate-x-0.5" />Send enquiry</>
            )}
          </button>
        </div>
      </div>
    </form>
  );
}

function Fieldset({ step, legend, children }: { step: string; legend: string; children: React.ReactNode }) {
  return (
    <fieldset>
      <legend className="mb-5 flex items-center gap-3 font-display text-lg font-extrabold text-ink">
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-navy-50 text-[13px] text-navy-800">{step}</span>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function SuccessPanel() {
  return (
    <div role="status" className="flex flex-col items-center px-2 py-10 text-center">
      <span className="mb-5 inline-flex size-16 items-center justify-center rounded-full bg-brand-50">
        <CheckCircle2 aria-hidden="true" className="size-9 text-brand-600" />
      </span>
      <h2 className="mb-3 text-[28px] font-extrabold tracking-[-0.5px] text-ink">Thank you!</h2>
      <p className="mb-6 max-w-110 text-base leading-[1.7] text-body">
        Your enquiry has reached our team. A consultant will contact you within one working day.
      </p>
      <a href={routes.contact} className="font-display text-[15px] font-bold text-navy-800 underline underline-offset-4">
        Send another enquiry
      </a>
    </div>
  );
}
