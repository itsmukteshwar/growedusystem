"use client";

import { AlertCircle, CheckCircle2, Loader2, Lock, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";

import { submitContact, type ContactFormState } from "@/app/contact/actions";
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

const MESSAGE_MAX = 3000;
const methodIcons = { "Phone call": Phone, WhatsApp: MessageCircle, Email: Mail } as const;

export function ContactForm() {
  const [state, formAction, pending] = useActionState<ContactFormState, FormData>(submitContact, { status: "idle" });
  const [messageLength, setMessageLength] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const startedAtRef = useRef<HTMLInputElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  // Time the form was opened (spam check), set on the client only.
  useEffect(() => {
    if (startedAtRef.current) startedAtRef.current.value = String(Date.now());
  }, [state]);

  // Move focus to the first problem, or to the success message.
  useEffect(() => {
    if (state.status === "invalid") {
      formRef.current?.querySelector<HTMLElement>("[aria-invalid='true']")?.focus();
    } else if (state.status === "success" || state.status === "error") {
      resultRef.current?.focus();
    }
  }, [state]);

  if (state.status === "success") {
    return <SuccessPanel ref={resultRef} state={state} />;
  }

  const errors = state.status === "invalid" ? state.errors : {};
  const values = state.status === "invalid" || state.status === "error" ? state.values : {};

  return (
    <form ref={formRef} action={formAction} noValidate className="flex flex-col gap-8" aria-describedby="form-note">
      {state.status === "error" && (
        <div
          ref={resultRef}
          tabIndex={-1}
          role="alert"
          className="flex gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800 outline-none"
        >
          <AlertCircle aria-hidden="true" className="mt-0.5 size-5 shrink-0" />
          <p>{state.message}</p>
        </div>
      )}
      {state.status === "invalid" && (
        <p role="alert" className="flex items-center gap-2 rounded-2xl bg-red-50 px-4 py-3 text-sm font-medium text-red-800">
          <AlertCircle aria-hidden="true" className="size-4.5 shrink-0" />
          Please fix the highlighted fields below.
        </p>
      )}

      {/* Spam protection — hidden from people */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor="company_website">Leave this empty</label>
        <input id="company_website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input ref={startedAtRef} type="hidden" name="startedAt" defaultValue="" />

      <Fieldset step="1" legend="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field id="name" label="Full name" required error={errors.name}>
            <input
              id="name"
              name="name"
              autoComplete="name"
              required
              defaultValue={values.name}
              placeholder="e.g. Rajesh Sharma"
              className={inputClass}
              {...describedBy("name", errors.name)}
            />
          </Field>
          <Field id="phone" label="Mobile number" required error={errors.phone} hint="We'll call from an Indian number.">
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
                defaultValue={values.phone}
                placeholder="98765 43210"
                className={cn(inputClass, "rounded-l-none")}
                {...describedBy("phone", errors.phone, "We'll call from an Indian number.")}
              />
            </div>
          </Field>
          <Field id="email" label="Email" required error={errors.email}>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              defaultValue={values.email}
              placeholder="you@example.com"
              className={inputClass}
              {...describedBy("email", errors.email)}
            />
          </Field>
          <Field id="role" label="I am a" required error={errors.role}>
            <Select id="role" name="role" required defaultValue={values.role ?? ""} {...describedBy("role", errors.role)}>
              <option value="" disabled>
                Choose one
              </option>
              {roles.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </Select>
          </Field>
          <Field id="city" label="City" required error={errors.city}>
            <input
              id="city"
              name="city"
              autoComplete="address-level2"
              required
              defaultValue={values.city}
              placeholder="Where is / will the school be?"
              className={inputClass}
              {...describedBy("city", errors.city)}
            />
          </Field>
          <Field id="state" label="State" required error={errors.state}>
            <Select id="state" name="state" required defaultValue={values.state ?? ""} {...describedBy("state", errors.state)}>
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
        <fieldset aria-describedby={errors.interests ? "interests-error" : undefined}>
          <legend className="mb-2.5 text-sm font-semibold text-ink">
            What can we help with?
            <span aria-hidden="true" className="ml-0.5 text-red-600">
              *
            </span>
            <span className="ml-1.5 text-xs font-normal text-muted">Select all that apply</span>
          </legend>
          <div className="flex flex-wrap gap-2">
            {interests.map((item) => (
              <label key={item} className="cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value={item}
                  defaultChecked={values.interests?.includes(item)}
                  aria-invalid={errors.interests ? true : undefined}
                  className="peer sr-only"
                />
                <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-2 text-sm text-body transition-colors select-none peer-checked:border-navy-800 peer-checked:bg-navy-800 peer-checked:text-white peer-focus-visible:ring-4 peer-focus-visible:ring-navy-500/25 hover:border-navy-300">
                  {item}
                </span>
              </label>
            ))}
          </div>
          {errors.interests && (
            <p id="interests-error" className="mt-2 text-[13px] text-red-600">
              {errors.interests}
            </p>
          )}
        </fieldset>

        <div className="mt-5 grid gap-5 sm:grid-cols-3">
          <Field id="board" label="Preferred board" error={errors.board}>
            <Select id="board" name="board" defaultValue={values.board ?? ""}>
              <option value="">Select</option>
              {boardOptions.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </Select>
          </Field>
          <Field id="budget" label="Investment budget" error={errors.budget}>
            <Select id="budget" name="budget" defaultValue={values.budget ?? ""}>
              <option value="">Select</option>
              {budgetOptions.map((b) => (
                <option key={b}>{b}</option>
              ))}
            </Select>
          </Field>
          <Field id="timeline" label="Timeline" error={errors.timeline}>
            <Select id="timeline" name="timeline" defaultValue={values.timeline ?? ""}>
              <option value="">Select</option>
              {timelineOptions.map((t) => (
                <option key={t}>{t}</option>
              ))}
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
            defaultValue={values.message}
            onChange={(e) => setMessageLength(e.target.value.length)}
            placeholder="e.g. We have 2 acres in a growing suburb and want to open a CBSE school for 1,200 students by 2028."
            className={cn(inputClass, "resize-y")}
            {...describedBy("message", undefined, "Land status, student capacity, questions — anything that helps us prepare.")}
          />
          <span className="self-end text-xs text-muted tabular-nums" aria-live="off">
            {messageLength}/{MESSAGE_MAX}
          </span>
        </Field>

        <fieldset className="mt-5" aria-describedby={errors.preferredContact ? "preferredContact-error" : undefined}>
          <legend className="mb-2.5 text-sm font-semibold text-ink">
            Best way to reach you
            <span aria-hidden="true" className="ml-0.5 text-red-600">
              *
            </span>
          </legend>
          <div className="grid grid-cols-3 gap-2">
            {contactMethods.map((method, i) => {
              const Icon = methodIcons[method];
              return (
                <label key={method} className="cursor-pointer">
                  <input
                    type="radio"
                    name="preferredContact"
                    value={method}
                    defaultChecked={values.preferredContact ? values.preferredContact === method : i === 0}
                    className="peer sr-only"
                  />
                  <span className="flex flex-col items-center gap-1.5 rounded-xl border border-line bg-white px-2 py-3 text-center text-sm font-semibold text-body transition-colors peer-checked:border-brand-600 peer-checked:bg-brand-50 peer-checked:text-brand-700 peer-focus-visible:ring-4 peer-focus-visible:ring-brand-500/25 hover:border-navy-300 sm:flex-row sm:justify-center">
                    <Icon aria-hidden="true" className="size-4.5" />
                    {method}
                  </span>
                </label>
              );
            })}
          </div>
          {errors.preferredContact && (
            <p id="preferredContact-error" className="mt-2 text-[13px] text-red-600">
              {errors.preferredContact}
            </p>
          )}
        </fieldset>
      </Fieldset>

      <div className="flex flex-col gap-5 border-t border-line pt-6">
        <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-body">
          <input
            type="checkbox"
            name="consent"
            defaultChecked={values.consent}
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? "consent-error" : undefined}
            className="mt-0.5 size-4.5 shrink-0 cursor-pointer accent-brand-600"
          />
          <span>
            I agree to be contacted by Grow Edu System about my enquiry by phone, WhatsApp or email. See our{" "}
            <a href={routes.privacy} className="font-semibold text-navy-800 underline underline-offset-2">
              privacy policy
            </a>
            .
          </span>
        </label>
        {errors.consent && (
          <p id="consent-error" className="-mt-3 text-[13px] text-red-600">
            {errors.consent}
          </p>
        )}

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
              <>
                <Loader2 aria-hidden="true" className="size-4.5 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                Send enquiry
                <Send aria-hidden="true" className="size-4.5 transition-transform group-hover:translate-x-0.5" />
              </>
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
        <span className="inline-flex size-7 items-center justify-center rounded-full bg-navy-50 text-[13px] text-navy-800">
          {step}
        </span>
        {legend}
      </legend>
      {children}
    </fieldset>
  );
}

function SuccessPanel({
  ref,
  state,
}: {
  ref: React.Ref<HTMLDivElement>;
  state: Extract<ContactFormState, { status: "success" }>;
}) {
  const via =
    state.preferredContact === "Email" ? "by email" : state.preferredContact === "WhatsApp" ? "on WhatsApp" : "by phone";
  return (
    <div ref={ref} tabIndex={-1} role="status" className="flex flex-col items-center px-2 py-10 text-center outline-none">
      <span className="mb-5 inline-flex size-16 items-center justify-center rounded-full bg-brand-50">
        <CheckCircle2 aria-hidden="true" className="size-9 text-brand-600" />
      </span>
      <h2 className="mb-3 text-[28px] font-extrabold tracking-[-0.5px] text-ink">
        Thank you{state.name ? `, ${state.name}` : ""}!
      </h2>
      <p className="mb-6 max-w-110 text-base leading-[1.7] text-body">
        Your enquiry has reached our team. A consultant will contact you {via} within one working day.
      </p>
      {state.reference !== "GE-OK" && (
        <p className="mb-8 rounded-xl bg-canvas px-4 py-3 text-sm text-body">
          Your reference number: <strong className="font-display text-navy-800">{state.reference}</strong>
        </p>
      )}
      <a href={routes.contact} className="font-display text-[15px] font-bold text-navy-800 underline underline-offset-4">
        Send another enquiry
      </a>
    </div>
  );
}
