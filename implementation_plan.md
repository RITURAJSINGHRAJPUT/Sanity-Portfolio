# PM Intern Portfolio — Implementation Plan

> Based on [PM_Portfolio_PRD.md](file:///Users/rituraj/Downloads/Projects/Portfolio/PM_Portfolio_PRD.md) v2.1

## Summary

Build a CMS-powered PM portfolio targeting tech industry hiring managers. The standout feature is an **interactive project story timeline** — a phase-by-phase narrative viewer. The site includes a full blog with admin panel, testimonial submission/approval workflow, contact system with custom email, and privacy-first analytics.

---

## User Review Required

> [!IMPORTANT]
> **Sanity CMS requires an account.** You'll need a Sanity.io project ID and dataset name before Phase 2 can begin. Do you have these, or should we scaffold with placeholder config?

> [!IMPORTANT]
> **API keys needed.** The following services require API keys/tokens:
> - **Resend** — for transactional email
> - **hCaptcha** — site key + secret key
> - **Plausible** — domain registration
> - **Sanity** — project ID, dataset, API token (read + write)
>
> We can build with dummy env vars and wire them up later.

> [!WARNING]
> **Domain & email setup is external.** Zoho Mail inbox (`hello@[yourname].dev`), DNS records (SPF, DKIM, DMARC), and domain purchase are manual steps outside this codebase. We'll document the setup flow but can't automate it.

> [!IMPORTANT]
> **Personal content needed.** The PRD calls for your headshot, resume PDF, project details, and bio. Should I use placeholder content for now?

---

## Tech Stack (Confirmed per PRD §11.1)

| Layer | Tech |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Components | shadcn/ui |
| CMS | Sanity.io (free tier) |
| Hosting | Vercel |
| Email (transactional) | Resend |
| Email (inbox) | Zoho Mail |
| CAPTCHA | hCaptcha |
| Analytics | Plausible |
| Calendar | Cal.com (embed) |
| Package Manager | pnpm |

---

## Proposed File Structure

```
Portfolio/
├── app/
│   ├── layout.tsx                    # Root layout (fonts, analytics, nav, footer)
│   ├── page.tsx                      # Home / Hero (§7.1)
│   ├── about/page.tsx                # About Me
│   ├── projects/
│   │   ├── page.tsx                  # Projects index + Story Timeline (§7.2, §7.3)
│   │   └── [slug]/page.tsx           # Case Study Detail (§7.4)
│   ├── skills/page.tsx               # Skills & Tools Matrix (§7.5)
│   ├── certifications/page.tsx       # Certifications Timeline (§7.6)
│   ├── artifacts/page.tsx            # Artifact Gallery (§7.7)
│   ├── blog/
│   │   ├── page.tsx                  # Blog Index (§7.8)
│   │   └── [slug]/page.tsx           # Blog Post Detail (§7.8)
│   ├── testimonials/
│   │   ├── page.tsx                  # Testimonials Public (§7.10)
│   │   └── submit/page.tsx           # Testimonial Submit Form (§7.11)
│   ├── resume/page.tsx               # Resume PDF embed
│   ├── contact/page.tsx              # Contact Form (§7.12)
│   ├── studio/[[...tool]]/page.tsx   # Sanity Studio (§6.2)
│   ├── not-found.tsx                 # 404 page
│   ├── api/
│   │   ├── testimonials/submit/route.ts   # POST testimonial
│   │   ├── contact/route.ts               # POST contact form
│   │   ├── revalidate/route.ts            # Sanity webhook → ISR
│   │   └── draft/route.ts                 # Sanity preview mode
│   ├── globals.css
│   └── fonts/                        # Local font files (Inter, JetBrains Mono)
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── MobileNav.tsx
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── StatsTicker.tsx
│   │   └── TypewriterText.tsx
│   ├── projects/
│   │   ├── ProjectTabs.tsx
│   │   ├── StoryTimeline.tsx         # ⭐ Signature feature (§7.3)
│   │   ├── PhaseCard.tsx
│   │   ├── PhaseNavigation.tsx
│   │   ├── OutcomeStrip.tsx
│   │   ├── CaseStudyCard.tsx
│   │   └── FilterBar.tsx
│   ├── blog/
│   │   ├── BlogCard.tsx
│   │   ├── BlogBody.tsx
│   │   ├── TableOfContents.tsx
│   │   ├── ReadingProgress.tsx
│   │   └── ShareButtons.tsx
│   ├── testimonials/
│   │   ├── TestimonialCard.tsx
│   │   ├── TestimonialForm.tsx
│   │   └── TestimonialFilter.tsx
│   ├── skills/
│   │   ├── SkillGrid.tsx
│   │   └── SkillCard.tsx
│   ├── certifications/
│   │   └── CertTimeline.tsx
│   ├── artifacts/
│   │   ├── ArtifactGallery.tsx
│   │   └── Lightbox.tsx
│   ├── contact/
│   │   └── ContactForm.tsx
│   └── ui/                           # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── textarea.tsx
│       ├── select.tsx
│       ├── skeleton.tsx
│       ├── dialog.tsx
│       └── ...
│
├── sanity/
│   ├── sanity.config.ts
│   ├── sanity.cli.ts
│   ├── lib/
│   │   ├── client.ts                 # Sanity client (read + write)
│   │   ├── queries.ts                # All GROQ queries
│   │   ├── image.ts                  # Image URL builder
│   │   └── portable-text.tsx         # Custom Portable Text renderers
│   ├── schemas/
│   │   ├── index.ts
│   │   ├── siteSettings.ts
│   │   ├── project.ts                # Includes phases[] and outcomeMetrics[]
│   │   ├── skill.ts
│   │   ├── certification.ts
│   │   ├── artifact.ts
│   │   ├── blogPost.ts
│   │   ├── blogCategory.ts
│   │   ├── testimonial.ts
│   │   └── resume.ts
│   └── plugins/                      # Sanity desk structure customization
│       └── deskStructure.ts
│
├── lib/
│   ├── resend.ts                     # Resend client setup
│   ├── utils.ts                      # Shared utilities (cn, formatDate, readTime)
│   └── analytics.ts                  # Plausible event helper
│
├── emails/                           # React Email templates
│   ├── ContactNotification.tsx
│   ├── ContactAutoReply.tsx
│   ├── TestimonialNotification.tsx
│   ├── TestimonialConfirmation.tsx
│   ├── TestimonialApproved.tsx
│   └── TestimonialRejected.tsx
│
├── public/
│   ├── resume.pdf                    # Downloadable resume
│   ├── favicon.ico
│   └── og-default.png               # Fallback OG image
│
├── tailwind.config.ts                # Design tokens from §10.1
├── next.config.mjs
├── next-sitemap.config.js
├── .env.local.example
├── package.json
└── tsconfig.json
```

---

## Proposed Changes

### Phase 1 — Project Setup & Scaffolding

#### [NEW] Project initialization
- Scaffold Next.js 14 App Router with TypeScript, Tailwind CSS, ESLint
- Install and configure shadcn/ui
- Install Sanity dependencies (`next-sanity`, `sanity`, `@sanity/image-url`, `@sanity/vision`)
- Install Resend, React Email, hCaptcha
- Configure `tailwind.config.ts` with design tokens from PRD §10.1 (Navy primary, Blue accent, Inter/Sora fonts)
- Set up Google Fonts via `next/font` (Inter, JetBrains Mono)
- Create `.env.local.example` with all required env vars
- Configure `next.config.mjs` for Sanity image domains

---

### Phase 2 — Sanity CMS Schemas (§9)

#### [NEW] All 9 Sanity document schemas
Per §9.1, create schemas for:
1. `siteSettings` — name, tagline, bio, headshot, stat counts
2. `project` — title, slug, cover, tags, methodology, duration, tldr, body, **phases[]** (phaseName, dateRange, narrative, artifacts[], phaseOutcome), **outcomeMetrics[]** (val, label)
3. `skill` — name, category, logo, proficiencyLevel
4. `certification` — name, issuer, logo, dateEarned, credentialId, verifyUrl, inProgress
5. `artifact` — title, image, caption, downloadUrl, relatedProject
6. `blogPost` — title, slug, cover, category ref, tags, body, SEO fields, featured, status, publishedAt
7. `blogCategory` — name, slug, description
8. `testimonial` — submitterName, role, org, relationship, linkedinUrl, email (private), quote, status, adminNotes, timestamps
9. `resume` — file asset, lastUpdated

#### [NEW] Sanity Studio configuration
- Custom desk structure: Blog Manager, Testimonial Queue (filter by status), Site Settings singleton
- Install plugins: `@sanity/vision`, `sanity-plugin-media`
- GROQ queries with field projection (exclude private fields)

---

### Phase 3 — Core Pages

#### [NEW] Root layout + Navigation
- Responsive navbar with logo, nav links, mobile hamburger menu
- Footer with social links (LinkedIn, GitHub, Cal.com), email, copyright
- Page transition animations (150ms fade)

#### [NEW] Home / Hero (§7.1)
- Full-width hero with headshot, name, typewriter role animation
- "View My Work" and "Download Resume" CTAs
- Stats ticker pulled live from Sanity (auto-count), animate-on-scroll

#### [NEW] About page
- Bio, professional photo, personal narrative from Sanity

#### [NEW] Skills & Tools Matrix (§7.5)
- Grouped grid by category (Planning, Collaboration, Analytics, Design, Dev)
- Tool cards with logo, name, proficiency badge

#### [NEW] Certifications Timeline (§7.6)
- Vertical timeline (desktop), stacked list (mobile)
- Cert entries with logo, issuer, date, verify link, in-progress badge

#### [NEW] Artifact Gallery (§7.7)
- Masonry grid with lightbox on click
- Downloadable PDF option per artifact

#### [NEW] Resume page
- PDF embed / viewer with download button

#### [NEW] 404 page
- Branded error page with nav back to home

---

### Phase 4 — Projects & Story Timeline (⭐ Signature Feature)

#### [NEW] Projects index (§7.2, §7.3)
- **Project tabs** — one tab per project, instant switch
- **StoryTimeline component** — horizontal phase stepper with:
  - Filled/active/upcoming dot states
  - Progress line with CSS custom property `--progress`
  - Phase content card (name, date range, narrative, artifact tags, outcome callout)
  - Prev/Next navigation
  - Outcomes metrics strip on final phase
- Filter bar by methodology/industry tags
- Skeleton loading states

#### [NEW] Case Study Detail (§7.4)
- 7-section structured layout: Overview → Problem → Role → Process → Artifacts → Outcome → Reflection
- Embedded story timeline at top
- Portable Text renderer with Prism.js code highlighting
- Artifact lightbox
- Outcome metrics callout
- Related projects, prev/next nav, read time, share buttons

---

### Phase 5 — Blog System

#### [NEW] Blog Index (§7.8)
- Card grid with cover, category, title, excerpt, read time, date
- Category filter/search
- Featured pinned post
- Pagination

#### [NEW] Blog Post Detail (§7.8)
- Full-width cover with overlaid title
- Author byline, date, read time
- Portable Text body (headings, code blocks with Prism.js, callouts, images, quotes)
- Sticky table of contents sidebar (>1000 words, desktop)
- Reading progress bar
- Share buttons, related posts

---

### Phase 6 — Testimonials System

#### [NEW] Testimonials Public (§7.10)
- Masonry card grid (approved only)
- Filter by relationship (Professor/Manager/Peer/Collaborator)
- Read more expansion for long quotes
- CTA to submit testimonial

#### [NEW] Testimonial Submit Form (§7.11)
- All fields per PRD: name, role, org, relationship dropdown, LinkedIn URL, email, quote (30-600 chars with live count), consent checkbox, hCaptcha
- Client-side validation + API POST
- Thank-you confirmation screen

#### [NEW] API route: `/api/testimonials/submit`
- Server-side validation
- Rate limiting (5 req/IP/hr via headers)
- Write to Sanity with `status: pending`
- Send notification email to candidate
- Send confirmation email to submitter

---

### Phase 7 — Email & Contact

#### [NEW] Contact Form (§7.12)
- Fields: name, email, subject dropdown, message, "how did you find me" dropdown, hCaptcha
- Social & scheduling links (LinkedIn, GitHub, Cal.com, mailto)

#### [NEW] API route: `/api/contact`
- Rate limiting, CAPTCHA verification
- Send to candidate inbox via Resend
- Auto-reply to submitter

#### [NEW] 6 React Email templates (§12.2)
- ContactNotification, ContactAutoReply
- TestimonialNotification, TestimonialConfirmation
- TestimonialApproved, TestimonialRejected

#### [NEW] ISR revalidation webhook route
- `/api/revalidate` — Sanity webhook triggers `revalidatePath()` on content publish

---

### Phase 8 — SEO, Analytics & Polish

#### [NEW] SEO setup (§11.4)
- Dynamic `<title>`, meta description, OG images per page
- JSON-LD: `Person` (About), `BlogPosting` (blog posts), `BreadcrumbList`
- `next-sitemap` for auto-generated `sitemap.xml` and `robots.txt`
- Canonical URLs

#### [NEW] Analytics (§7.13)
- Plausible script in root layout
- Custom event tracking for all 12 events in PRD §7.13

#### Polish
- Lighthouse audit (accessibility ≥90, performance ≥85)
- Cross-browser testing
- `prefers-reduced-motion` support
- Dark card backgrounds, hover shadows, micro-animations
- Skeleton shimmer loading states on all fetched content

---

## Open Questions

> [!IMPORTANT]
> 1. **Do you have a Sanity.io project already created?** If not, I'll scaffold the project and you can create one and plug in the credentials.
> 2. **Shall I use placeholder content** (dummy headshot, sample projects, lorem text) for the initial build?
> 3. **Your name for the portfolio** — what name should appear in the hero, meta tags, and email templates?
> 4. **Do you want to start with all 8 phases**, or should we prioritize specific phases (e.g., core pages + story timeline first)?

---

## Verification Plan

### Automated Tests
- `pnpm build` — ensure zero build errors
- Lighthouse CI audit on key pages (`/`, `/projects`, `/blog`, `/contact`)
- Target: Accessibility ≥90, Performance ≥85, SEO ≥90

### Browser Testing
- Open dev server and visually verify all pages using browser subagent
- Test responsive layouts at mobile (375px), tablet (768px), desktop (1440px)
- Test interactive story timeline phase navigation
- Test form submissions (contact + testimonial) with validation states

### Manual Verification
- Verify Sanity Studio loads at `/studio`
- Verify GROQ queries return expected data
- Test full testimonial flow: submit → pending in Sanity → approve → visible on public page
- Test email delivery (requires live Resend API key)
