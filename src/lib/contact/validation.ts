import { boardOptions, budgetOptions, contactMethods, indianStates, interests, roles, timelineOptions } from "@/data/contact";

export interface ContactSubmission {
  name: string;
  phone: string;
  email: string;
  city: string;
  state: string;
  role: string;
  interests: string[];
  board: string;
  budget: string;
  timeline: string;
  preferredContact: string;
  message: string;
  consent: boolean;
}

export type FieldErrors = Partial<Record<keyof ContactSubmission, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
// Indian mobile (optionally +91 / 0 prefixed) or any international number in E.164 form.
const PHONE = /^(?:(?:\+91|91|0)?[6-9]\d{9}|\+(?!91)\d{8,14})$/;

const str = (fd: FormData, key: string, max = 200) => String(fd.get(key) ?? "").trim().slice(0, max);
const oneOf = <T extends readonly string[]>(value: string, list: T) => (list as readonly string[]).includes(value);

/** Parses and validates the form. Returns either clean data or per-field errors. */
export function parseContactForm(fd: FormData):
  | { ok: true; data: ContactSubmission }
  | { ok: false; errors: FieldErrors; values: Partial<ContactSubmission> } {
  const data: ContactSubmission = {
    name: str(fd, "name", 100),
    phone: str(fd, "phone", 20),
    email: str(fd, "email", 150).toLowerCase(),
    city: str(fd, "city", 80),
    state: str(fd, "state", 60),
    role: str(fd, "role", 60),
    interests: fd.getAll("interests").map(String).filter((v) => oneOf(v, interests)),
    board: str(fd, "board", 40),
    budget: str(fd, "budget", 40),
    timeline: str(fd, "timeline", 40),
    preferredContact: str(fd, "preferredContact", 20),
    message: str(fd, "message", 3000),
    consent: fd.get("consent") === "on",
  };

  const errors: FieldErrors = {};
  const phoneDigits = data.phone.replace(/[\s()-]/g, "");

  if (data.name.length < 2) errors.name = "Please enter your full name.";
  if (!PHONE.test(phoneDigits)) errors.phone = "Enter a valid mobile number, e.g. 98765 43210.";
  if (!EMAIL.test(data.email)) errors.email = "Enter a valid email address.";
  if (data.city.length < 2) errors.city = "Which city is this for?";
  if (!oneOf(data.state, indianStates)) errors.state = "Please choose a state.";
  if (!oneOf(data.role, roles)) errors.role = "Please tell us who you are.";
  if (data.interests.length === 0) errors.interests = "Pick at least one area we can help with.";
  if (data.board && !oneOf(data.board, boardOptions)) errors.board = "Please choose a board.";
  if (data.budget && !oneOf(data.budget, budgetOptions)) errors.budget = "Please choose a budget range.";
  if (data.timeline && !oneOf(data.timeline, timelineOptions)) errors.timeline = "Please choose a timeline.";
  if (!oneOf(data.preferredContact, contactMethods)) errors.preferredContact = "How should we reach you?";
  if (!data.consent) errors.consent = "Please agree so we can contact you.";

  if (Object.keys(errors).length > 0) return { ok: false, errors, values: data };
  return { ok: true, data: { ...data, phone: phoneDigits } };
}
