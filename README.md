# Grow Edu System — Website

Marketing website for Grow Edu System, built with **Next.js 16 (App Router)**, **TypeScript** and **Tailwind CSS v4**.

## Getting started

```powershell
npm install
npm run dev      # http://localhost:3000 (shows photo briefs in placeholders)
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

Requires Node.js 20.9 or newer.

## Project structure

```
public/
  images/logo.png          Brand logo (also used in the share image)
src/
  app/                     Routes (one folder per page)
    layout.tsx             Root layout: <html>, fonts, header, footer, site-wide SEO
    page.tsx               Homepage (composes the sections)
    not-found.tsx          404 page
    sitemap.ts             → /sitemap.xml
    robots.ts              → /robots.txt
    manifest.ts            → /manifest.webmanifest
    opengraph-image.tsx    → 1200×630 social share image
    icon.png, apple-icon.png  Favicons
  components/
    layout/                Header, MobileNav, Footer, AnnouncementBar, Logo
    sections/home/         One file per homepage section (Hero, Stats, About, …)
    sections/service/      Building blocks for guide pages (hero, contents, timeline, tables, FAQ)
    ui/                    Reusable building blocks (Button, Container, Section, ImageSlot, …)
    seo/                   JsonLd (structured data)
  config/
    site.ts                Name, URL, contact details, social links  ← edit first
    navigation.ts          Every URL + header/footer menus
  data/
    home.ts                All homepage text and image briefs
    contact.ts             Contact page content and form options
    services/              Content for Start a School, Feasibility & DPR and CBSE pages
    images.ts              brief() helper + shared AI photo style
    image-registry.ts      Collects every brief for /image-briefs
  lib/                     Helpers: fonts, schema.org builders, cn()
  styles/globals.css       Tailwind import + design tokens (colours, fonts, animations)
  types/                   Shared TypeScript types
```

**Rule of thumb:** text lives in `src/data`, settings in `src/config`, colours in `src/styles/globals.css`, layout in `src/components`.

## Before going live

1. **Contact details** — phone, WhatsApp, email and address are set in `src/config/site.ts` (change them there and they update everywhere).
2. **Domain** — set `NEXT_PUBLIC_SITE_URL` (see `.env.example`). It drives canonical URLs, the sitemap and structured data.
3. **Social profiles** — fill `social` in `src/config/site.ts`.
4. **Placeholders** — replace every `[bracketed]` value in `src/data/home.ts`.
5. **Photos** — see "Images" below.
6. **Search Console** — add verification codes in `src/app/layout.tsx` (`metadata.verification`) and submit `/sitemap.xml`.

## Images

Every photo slot has a brief with an **ID, export size, file name, alt text and a ready-to-paste AI prompt**.

- **See them all:** run `npm run dev` and open [http://localhost:3000/image-briefs](http://localhost:3000/image-briefs) (copy buttons for each prompt and file name), or read `docs/IMAGE-BRIEFS.md`.
- **In the page:** while developing, each placeholder shows its brief.
- **Add an image:** export it as `.webp` at the listed size and save it at `public/images/<file>` (e.g. `public/images/home/hero-start-a-school-site-visit.webp`). It replaces the placeholder automatically and is resized and optimised by Next.js.
- **Real photos:** slots marked "Real photo required" (team, clients, projects we built, product screenshots) must use genuine photos before launch — the AI prompt is only for a temporary stand-in.
- **Edit a brief:** briefs live next to the page content in `src/data` (built with `brief()` from `src/data/images.ts`, which also holds the shared photo style). Run `npm run images:list` to refresh `docs/IMAGE-BRIEFS.md`.

## Contact page & enquiry form

`/contact` shows a live **Open now / Closed** badge and weekly timetable (India Standard Time), call / WhatsApp / email cards, the office address with directions, and a detailed enquiry form.

- **Office hours & holidays:** `hours` in `src/config/site.ts`
- **Form options** (roles, services, budgets…): `src/data/contact.ts`
- **Validation:** `src/lib/contact/validation.ts` · **Server action:** `src/app/contact/actions.ts`

The form submits with a Next.js Server Action (works even before JavaScript loads), validates every field on the server, blocks bots with a honeypot + timing check, rate-limits by IP and shows the visitor a reference number.

**To receive enquiries, set at least one channel** in `.env.local` (and in your host's environment variables):

| Channel | Variables |
| --- | --- |
| Email via [Resend](https://resend.com) | `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, optional `CONTACT_FROM_EMAIL` |
| Google Sheets / Zapier / Make / Slack / CRM | `CONTACT_WEBHOOK_URL` (receives JSON) |

In development with nothing configured, enquiries are printed to the terminal. In production with nothing configured, visitors see a friendly error asking them to call or email instead.

## Adding a page

Links in the menus already point to planned pages (see `routes` in `src/config/navigation.ts`). To build one, e.g. `/start-a-school/cbse`:

1. Create `src/app/start-a-school/cbse/page.tsx`.
2. Export `metadata` with a unique `title` and `description`, and `alternates: { canonical: "/start-a-school/cbse" }`.
3. Add the path to `livePages` in `src/app/sitemap.ts`.

## SEO built in

- Server-rendered HTML for every section (including all hero slides and FAQ answers)
- Unique title template, meta description, canonical URL, Open Graph and Twitter cards
- Schema.org JSON-LD: Organization/ProfessionalService, WebSite, FAQPage
- `sitemap.xml`, `robots.txt`, web manifest, favicons and a generated share image
- Self-hosted fonts via `next/font` (no layout shift, no third-party requests)
- Optimised images via `next/image`
- Single `<h1>`, semantic landmarks, skip link, keyboard-accessible menus and carousel, reduced-motion support

## Deploying

Vercel is the simplest option (import the Git repo; no settings needed). Any Node.js host also works with `npm run build && npm run start`.
