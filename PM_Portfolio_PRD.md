# Product Requirements Document
## Project Manager Intern Portfolio — Tech Industry Edition

| | |
|---|---|
| **Document Status** | Final v2.1 |
| **Version** | 2.1 |
| **Last Updated** | April 2026 |
| **Prepared For** | PM Intern Candidate (Tech Industry) |
| **Audience** | Hiring Managers, Recruiters, Mentors |

> **Purpose:** This PRD defines the goals, scope, features, technical requirements, and success metrics for building a professional online portfolio targeting the **tech industry**. All open questions from v1.0 have been resolved. This document is the final, actionable spec for design, development, and launch.

### ✅ Decisions Log (Resolved from v1.0)

| # | Question | Decision |
|---|---|---|
| OQ-01 | Industry vertical | **Tech industry** — SaaS, product, platform, and dev-tools roles |
| OQ-02 | CMS vs static | **CMS-driven** — Sanity.io as headless CMS for full content control |
| OQ-03 | Blog scope | **In Phase 1** — Blog with full admin panel, categories, drafts, and scheduling |
| OQ-04 | Contact email routing | **Dedicated portfolio email** — `hello@[yourname].dev` via Resend + Zoho Mail |
| OQ-05 | Testimonial sources | **All sources** — Professors, managers, peers; with submit + approve workflow |
| OQ-06 | Project presentation format | **Interactive story timeline** — each project presented as a phase-by-phase narrative with a clickable visual timeline, artifact tags, phase outcomes, and a final metrics strip |

---

## Table of Contents

1. [Executive Summary](#1-executive-summary)
2. [Problem Statement & Opportunity](#2-problem-statement--opportunity)
3. [Goals & Success Metrics (OKRs)](#3-goals--success-metrics-okrs)
4. [Target Audience & User Personas](#4-target-audience--user-personas)
5. [Scope — In & Out](#5-scope--in--out)
6. [Portfolio Architecture](#6-portfolio-architecture)
7. [Feature Requirements](#7-feature-requirements)
   - 7.1 Hero / Landing
   - 7.2 Case Study Cards
   - **7.3 Project Story Timeline (Interactive)**
   - 7.4 Case Study Detail
   - 7.5 Skills & Tools Matrix
   - 7.6 Certifications Timeline
   - 7.7 Artifact Gallery
   - 7.8 Blog — Public View
   - 7.9 Blog — Admin Panel
   - 7.10 Testimonials — Public View
   - 7.11 Testimonials — Submission & Approval Flow
   - 7.12 Contact & Dedicated Email
   - 7.13 Analytics & Tracking
8. [Content Requirements](#8-content-requirements)
9. [CMS Architecture (Sanity)](#9-cms-architecture-sanity)
10. [Design & UX Requirements](#10-design--ux-requirements)
11. [Technical Requirements](#11-technical-requirements)
12. [Email System Architecture](#12-email-system-architecture)
13. [Milestones & Timeline](#13-milestones--timeline)
14. [Risks & Mitigations](#14-risks--mitigations)
15. [Assumptions](#15-assumptions)
16. [Appendix](#16-appendix)

---

## 1. Executive Summary

The PM Intern Portfolio is a personal, CMS-powered web platform built to attract and convert tech industry hiring teams into interview conversations. It goes beyond a static resume site — it is a living product that the candidate manages like a real PM: publishing blog posts, curating testimonials, and measuring engagement through analytics.

The portfolio targets **tech industry roles** specifically: SaaS product companies, platform teams, startup environments, and developer-tools companies. Every design and content decision is tuned to signal fluency with tech culture — agile thinking, data literacy, and product intuition.

The stack is **Next.js + Sanity CMS + Vercel**, giving the candidate full creative and editorial control through a browser-based admin interface, while delivering the performance and SEO of a custom-built site. The portfolio's signature feature is the **interactive project story timeline** — a phase-by-phase narrative viewer that lets hiring managers click through each project's journey, artifacts, and outcomes rather than reading a static wall of text.

---

## 2. Problem Statement & Opportunity

### 2.1 The Problem

Entry-level PM candidates targeting the tech industry face a three-part credibility gap:

- **Skills gap** — Resumes list tasks; tech hiring managers want evidence of product thinking, agile process, and data-driven decisions.
- **Differentiation gap** — Hundreds of applicants share similar GPAs and coursework; nothing makes them memorable after the resume screen.
- **Presence gap** — No centralised, always-on digital identity means the candidate is invisible between touchpoints.

Additionally, generic portfolio tools (Notion, Wix) signal low technical awareness — a red flag for tech PM roles where cross-functional credibility with engineers matters.

### 2.2 The Opportunity

A custom-built, CMS-powered portfolio signals three things immediately:

1. **Product mindset** — The candidate treats their own career as a product, with users (recruiters), metrics (interview rate), and iterations (blog posts, new projects).
2. **Tech fluency** — A real domain, custom stack, and active blog shows comfort with the tools and language of tech teams.
3. **Thought leadership** — Regular blog posts on PM topics (product teardowns, sprint retros, framework breakdowns) build a discoverable, compounding reputation over time.

> **Key Insight:** For tech PM roles, the act of building and maintaining this portfolio *is* the case study. It demonstrates user empathy, scoping, prioritization, and execution — the exact skills being hired for.

---

## 3. Goals & Success Metrics (OKRs)

| Objective | Key Result | Target | Measurement Tool |
|---|---|---|---|
| Increase recruiter engagement | Average time-on-page per visit | > 2 min 30 sec | Plausible / GA4 |
| Drive interview conversions | Interview requests via portfolio email | ≥ 3 / month | Email inbox count |
| Build thought leadership | Blog posts published | ≥ 2 / month | Sanity CMS |
| Build thought leadership | Organic blog search traffic | ≥ 100 visits / month by month 3 | GA4 |
| Demonstrate PM credibility | Approved testimonials displayed | ≥ 5 within 60 days of launch | Testimonial dashboard |
| Professional discoverability | LinkedIn profile views after launch | +40% MoM | LinkedIn analytics |
| Accessibility compliance | Lighthouse accessibility score | ≥ 90 / 100 | Lighthouse CI |
| Performance | PageSpeed mobile score | ≥ 85 / 100 | PageSpeed Insights |
| Content freshness | Days since last CMS update | ≤ 14 days always | Sanity activity log |

---

## 4. Target Audience & User Personas

### 🎯 Persona 1 — The Tech Recruiter

- **Name / Role:** Priya, Talent Partner at a Series B SaaS startup (50–200 employees)
- **Goal:** Screen 60+ applicants per week; identify candidates who "get" product and tech culture
- **Behaviour:** Googles the candidate's name before or after reviewing resume; clicks the portfolio link within 10 seconds of landing
- **Pain:** Generic Notion portfolios with no personality; candidates who list "Agile" but can't explain a sprint
- **Need from portfolio:** Instant clarity on who the person is, what they've shipped, and whether they can communicate like a PM

### 🏗️ Persona 2 — The Tech Hiring Manager (PM Lead)

- **Name / Role:** Arjun, Group PM at a product-led growth company
- **Goal:** Hire someone who thinks in systems, communicates with clarity, and can hold their own with engineers
- **Behaviour:** Reads 1–2 case studies in full; skims the blog to assess depth of thinking; checks if there's real product sense
- **Pain:** Candidates who performed PM tasks but didn't understand the *why*; portfolios that describe, not analyse
- **Need from portfolio:** Product teardowns, data-backed outcomes, honest retrospectives, and original PM thinking in the blog

### 🔗 Persona 3 — The Tech Peer / Network Referrer

- **Name / Role:** A batchmate, hackathon partner, or collaborator who wants to recommend the candidate
- **Goal:** Share one link that does the selling
- **Behaviour:** Pastes the portfolio URL in a Slack DM or LinkedIn message with a quick note
- **Need from portfolio:** Fast-loading, shareable, mobile-friendly; a simple testimonial submission form so they can publicly endorse the candidate

### 🎓 Persona 4 — The Professor / Academic Mentor

- **Name / Role:** Faculty supervisor or thesis guide with industry connections
- **Goal:** Vouch for the candidate's analytical and collaborative ability
- **Behaviour:** Rarely has time; needs a < 3 min process to submit a testimonial
- **Need from portfolio:** A frictionless, email-linked testimonial submission form; no account required

---

## 5. Scope — In & Out

| ✅ IN SCOPE (Phase 1) | ❌ OUT OF SCOPE |
|---|---|
| Personal introduction & bio page | Native mobile app (iOS/Android) |
| 3–5 tech-focused project case study pages | Real-time collaboration or co-editing |
| **Interactive project story timeline** (phase stepper, artifact tags, outcome metrics strip) | Multi-tenant or team portfolios |
| PM artifact gallery (Gantt, PRD, sprint board, wireframes) | Multi-tenant or team portfolios |
| Skills & tools section — tech PM tools specifically | Job board or application tracker |
| Certifications & education timeline | E-commerce or paid content |
| Downloadable PDF resume | Video hosting / streaming (embed only) |
| **Blog with full admin panel** (write, edit, draft, schedule, publish, delete) | AI-generated content automation |
| Blog categories, tags, estimated read time, SEO fields per post | Multi-language localisation |
| **Testimonials public display** with name, role, relationship, optional LinkedIn | Real-time push notifications |
| **Testimonial submission form** (no login required, CAPTCHA-protected) | Social login for submitters |
| **Testimonial approval / rejection admin workflow** | Automated sentiment filtering |
| **Dedicated portfolio email** (`hello@[yourname].dev`) | Internal email server / custom MX hosting |
| Email notifications for new contacts and new testimonial submissions | CRM or pipeline tracking |
| Responsive design — mobile, tablet, desktop | Phone / WhatsApp contact options |
| Analytics with custom event tracking | |
| Sanity CMS for all content management | |
| Admin dashboard — blog + testimonial management via Sanity Studio | |
| SEO: sitemap, meta tags, dynamic OG images, JSON-LD | |

---

## 6. Portfolio Architecture

The site uses a **hub-and-spoke** information architecture. The Home page is the hub; all primary sections are one click away. The Admin section (Sanity Studio) is auth-protected and separate from public routes.

### 6.1 Public Routes

| Page / Section | Path | Priority | Content Source |
|---|---|---|---|
| Home (Landing) | `/` | P0 | Sanity — hero, stats |
| About Me | `/about` | P0 | Sanity — bio, photo |
| Case Studies Index | `/projects` | P0 | Sanity — project list + story timeline component |
| Case Study Detail | `/projects/[slug]` | P0 | Sanity — project doc + embedded story timeline |
| Skills & Tools | `/skills` | P1 | Sanity — skills list |
| Certifications | `/certifications` | P1 | Sanity — cert list |
| Artifact Gallery | `/artifacts` | P1 | Sanity — gallery |
| Blog Index | `/blog` | P0 | Sanity — published posts |
| Blog Post Detail | `/blog/[slug]` | P0 | Sanity — post doc |
| Testimonials | `/testimonials` | P0 | Sanity — approved only |
| Testimonial Submit | `/testimonials/submit` | P0 | Public form → Sanity |
| Resume | `/resume` | P0 | Static PDF embed |
| Contact | `/contact` | P0 | Form → Resend email |
| 404 / Error | `/404` | P2 | Static |

### 6.2 Admin Routes (Sanity Studio — Auth-Protected)

| Page | Path | Function |
|---|---|---|
| Sanity Studio | `/studio` | Full CMS — all content types |
| Blog Manager | Studio → Blog Posts | List, create, edit, draft, schedule, publish posts |
| Testimonial Queue | Studio → Testimonials | Filter by status: Pending / Approved / Rejected |
| Media Library | Studio → Media | Manage all uploaded images and files |
| Site Settings | Studio → Settings | Hero text, stats, bio, resume file |

> Sanity Studio is protected by Sanity's own auth (Google SSO). The portfolio owner is the only user — no additional auth build needed.

---

## 7. Feature Requirements

### 7.1 Hero / Landing Section `[P0]`

- Full-width hero with candidate name, role tag (e.g. "PM Intern · Product · SaaS · Agile"), and two CTAs: **"View My Work"** and **"Download Resume"**.
- Typewriter animation cycling through roles: "Aspiring Product Manager", "Agile Practitioner", "Tech PM Candidate".
- Professional headshot (min 800×800px) with descriptive `alt` text.
- Quick-stat ticker: e.g. `5 Case Studies · 3 Certs · 12 Blog Posts · 8 Testimonials`.
- Stat numbers animate from 0 on scroll-into-view.
- Stats are **pulled live from Sanity** — no hardcoding; auto-update as content grows.

### 7.2 Case Study Cards (Projects Index) `[P0]`

- Filterable card grid by tag: Agile, Waterfall, B2B SaaS, API/Platform, Growth, Research, Data.
- Each card includes: cover image, project title, company/context, 1-line outcome, tech stack used, duration, methodology badge.
- Hover reveals "Read Case Study →" CTA with smooth scale animation.
- Tags managed in Sanity — no hardcoded filter list.
- Skeleton shimmer loading state on cards.
- Empty state message if no projects match the active filter.

### 7.3 Project Story Timeline (Interactive) `[P0]`

Each project on the `/projects` index is presented not as a static card but as an **interactive, phase-by-phase story** — the single most distinctive UI feature of this portfolio. It transforms how hiring managers experience a case study: instead of reading a wall of text, they click through the project's journey one phase at a time.

#### Layout & Behaviour

- **Project tabs** at the top — one tab per project. Clicking a tab instantly loads that project's story without a page reload.
- **Visual phase timeline** — a horizontal stepper showing all phases (e.g. Discovery → Definition → Planning → Execution → Launch). Each phase is represented by a numbered dot connected by a progress line.
  - Completed phases: filled accent-blue dot with a checkmark.
  - Active phase: filled navy dot with a soft glow ring.
  - Upcoming phases: hollow dot with muted border.
  - Clicking any dot jumps directly to that phase.
- **Phase content card** — the main reading area, updated on each phase navigation:
  - Phase name and date range (top left and top right).
  - Phase narrative (2–4 sentences describing what happened, decisions made, and challenges encountered).
  - Artifact tags — pill badges listing every PM artifact produced in that phase (e.g. `PRD v1`, `RACI matrix`, `Sprint board`, `Risk register`).
  - Phase outcome — a green callout strip at the bottom of the card showing the measurable result or decision reached at the end of that phase.
- **Prev / Next navigation** — buttons below the phase card to move forward or backward through phases. The Next button on the final phase reads "See outcomes".
- **Outcomes metrics strip** — visible only on the final phase. A dark navy bar displaying 2–4 headline metrics (e.g. `38% faster activation`, `5 hrs/week saved`, `0 critical bugs at launch`) and a "Write case study ↗" button that triggers a `sendPrompt` to generate a full case study document.

#### Content Per Phase (Sanity fields)

| Field | Type | Notes |
|---|---|---|
| `phaseName` | Text | e.g. "Discovery", "Sprint 1", "UAT" |
| `dateRange` | Text | e.g. "Week 1–2" or "Jan 5 – Jan 18" |
| `narrative` | Textarea | 2–4 sentences; what happened, what you did, key decisions |
| `artifacts` | Array of strings | Tags shown as pills: "PRD", "Jira board", "RACI matrix", etc. |
| `phaseOutcome` | Text | 1-line measurable result at the end of this phase |

#### Project-Level Fields (in addition to phase data)

| Field | Type | Notes |
|---|---|---|
| `methodology` | Badge | Agile / Waterfall / Hybrid / Discovery-only |
| `industry` | Badge | B2B SaaS / Logistics / Consumer Tech / etc. |
| `duration` | Text | e.g. "8 weeks" |
| `tldr` | Text | 1–2 sentence project summary shown in the card header |
| `outcomeMetrics` | Array of `{ val, label }` | Displayed in the final-phase outcomes strip |

#### Interaction States

| State | Behaviour |
|---|---|
| Tab switch | Resets to phase 1 of the newly selected project; timeline and content update instantly |
| Phase dot click | Jumps to that phase; all previous dots turn filled/done; progress line fills up to that point |
| Final phase reached | "See outcomes" replaces "Next →"; outcomes strip slides in below the phase card |
| Empty project | Graceful empty state with a message prompting the candidate to add phases in Sanity |

#### Accessibility

- All interactive elements (tabs, dots, nav buttons) are keyboard-navigable with visible focus rings.
- Phase dots have `aria-label` describing phase name and status (e.g. `aria-label="Phase 3: Planning — completed"`).
- Phase content area has `aria-live="polite"` so screen readers announce content changes on navigation.

#### Technical Implementation Notes

- Built as a React client component (`"use client"`) inside the Next.js app.
- Project and phase data fetched from Sanity on page load via a single GROQ query — no additional requests on phase navigation (all data loaded upfront and stored in component state).
- Phase transitions use CSS `transition: opacity 0.15s` — no heavy animation libraries needed.
- Progress line fill uses a CSS custom property updated via inline style on navigation: `style="--progress: 60%"`.
- The "Write case study ↗" button calls `sendPrompt()` with the project title and outcomes pre-filled — this is the portfolio's AI-powered feature, available only when the portfolio is embedded in a Claude-powered interface or via the Anthropic API artifact feature.

#### Sanity Schema Addition (`project` document — extended)

```js
// Added to the existing `project` schema in Sanity
{
  name: 'phases',
  title: 'Project phases',
  type: 'array',
  of: [{
    type: 'object',
    fields: [
      { name: 'phaseName',     type: 'string',  title: 'Phase name' },
      { name: 'dateRange',     type: 'string',  title: 'Date range' },
      { name: 'narrative',     type: 'text',    title: 'Phase narrative' },
      { name: 'artifacts',     type: 'array', of: [{ type: 'string' }], title: 'Artifacts' },
      { name: 'phaseOutcome',  type: 'string',  title: 'Phase outcome' },
    ]
  }]
},
{
  name: 'outcomeMetrics',
  title: 'Outcome metrics',
  type: 'array',
  of: [{
    type: 'object',
    fields: [
      { name: 'val',   type: 'string', title: 'Value (e.g. 38%)' },
      { name: 'label', type: 'string', title: 'Label (e.g. faster activation)' },
    ]
  }]
}
```

#### Why This Matters (PM Signal)

A standard portfolio shows *what* was built. The story timeline shows *how* you think. Hiring managers can watch the candidate navigate ambiguity in Discovery, make trade-offs in Planning, and handle unexpected problems in Execution — all without reading a 1,000-word case study. It demonstrates PM process fluency at a glance, which is the #1 thing tech PM interviewers are assessing.

---

### 7.4 Case Study Detail Page `[P0]`

- Structured 7-section layout: **Overview → Problem → Role → Process → Artifacts → Outcome → Reflection**.
- Rich text body rendered from Sanity Portable Text — supports headings, callout blocks, code snippets, and embedded images.
- PM artifact embeds (Gantt, RACI, sprint board, wireframe) in a lightbox gallery within the case study.
- Outcome metrics in a styled callout block (e.g. "🚀 Shipped 2 weeks early · ₹40K under budget").
- "Related Projects" section — 2 cards auto-suggested by shared tags.
- Prev / Next project navigation.
- Estimated read time auto-calculated from word count.
- Social share buttons: LinkedIn, Twitter/X, Copy Link.
- The story timeline (§7.3) is embedded at the top of each case study detail page as a visual summary before the full written narrative begins.

### 7.5 Skills & Tools Matrix `[P1]`

- Visual proficiency grid grouped by category:
  - **Planning & Delivery:** Jira, Linear, Asana, Notion, Confluence
  - **Collaboration:** Slack, Miro, FigJam, Google Workspace
  - **Analytics & Data:** GA4, Mixpanel, Amplitude, SQL (basic), Excel/Sheets
  - **Design Adjacency:** Figma (view + comment), Maze, Hotjar
  - **Dev Awareness:** GitHub, Postman, REST API concepts, Agile ceremonies
- Each tool has: logo icon, name, proficiency badge (Familiar / Working / Proficient).
- Fully managed in Sanity — add/remove tools without code changes.

### 7.6 Certifications Timeline `[P1]`

- Vertical timeline on desktop, stacked list on mobile.
- Each entry: cert logo, name, issuing body, date earned, credential ID, "Verify →" link.
- "In Progress" badge for certifications currently being completed.
- Fully managed in Sanity — new certs appear without a redeploy.

### 7.7 Artifact Gallery `[P1]`

- Masonry or grid gallery of PM artifacts: PRDs, Gantt charts, sprint boards, RACI matrices, retrospective boards.
- Each artifact: thumbnail, title, caption describing context and candidate's contribution.
- Lightbox on click with prev/next navigation.
- Downloadable PDF option per artifact where relevant.
- All assets stored and delivered via Sanity's asset CDN.

---

### 7.8 Blog — Public View `[P0]`

The blog is a **primary thought leadership channel** for demonstrating PM knowledge in the tech industry. It is a first-class Phase 1 feature, not optional.

**Blog Index (`/blog`)**

- Card grid: cover image, category tag, title, 1-line excerpt, estimated read time, published date.
- Filter/search by category: Product Strategy · Agile & Scrum · Career · Case Breakdown · Tools & Frameworks · Industry Analysis.
- "Featured" pinned post at top (toggled in Sanity).
- Pagination or infinite scroll (configurable in Sanity settings).

**Blog Post (`/blog/[slug]`)**

- Full-width cover image with post title overlaid.
- Author byline with headshot, date, estimated read time, category tag.
- Rich text body via Sanity Portable Text — supports: headings, inline code, code blocks (Prism.js syntax highlighting), callout blocks, images with captions, blockquotes, bullet and numbered lists.
- Sticky table of contents sidebar on desktop for posts > 1000 words.
- Reading progress bar at top of viewport.
- Social share buttons: LinkedIn, Twitter/X, Copy Link.
- Related posts (2–3 cards) matched by category at the bottom.
- SEO: dynamic `<title>`, meta description, OG image, canonical URL — all editable per post in Sanity.

---

### 7.9 Blog — Admin Panel `[P0]`

Full editorial control via **Sanity Studio** — browser-based, no code required.

| Admin Action | Details |
|---|---|
| Create new post | Title, slug (auto-generated, editable), category, cover image, body (rich text) |
| Save as draft | `status: draft` — not visible on public site |
| Preview draft | Live preview of draft in public site layout before publishing |
| Publish | One-click — sets `status: published` and `publishedAt` timestamp |
| Schedule publish | Set future `publishedAt` date — goes live automatically via ISR revalidation |
| Edit published post | Changes reflected on live site within seconds (on-demand ISR) |
| Unpublish | Reverts to draft — removed from public blog index |
| Delete | Permanent delete with confirmation prompt |
| Manage categories | Add / rename / delete blog categories |
| Set featured post | Toggle to pin a post at the top of the blog index |
| SEO fields per post | Meta title (max 60 chars), meta description (max 160 chars), OG image upload |

**Per-post fields in Sanity Studio:**

- Title, Slug, Cover image (with alt text), Category, Tags, Body (Portable Text)
- Estimated read time (auto-calculated, manually overridable)
- Meta title, Meta description, OG image (defaults to cover if unset)
- Featured toggle, Publish status (Draft / Scheduled / Published)

---

### 7.10 Testimonials — Public View `[P0]`

**Testimonials Page (`/testimonials`)**

- Masonry card grid of approved testimonials only.
- Each card: quote text, submitter name, role/title, organisation, relationship badge (Professor / Manager / Peer / Collaborator), optional "View LinkedIn →" link, date approved.
- Filter by relationship type: All · Professor · Manager · Peer · Collaborator.
- "Leave a Testimonial →" CTA at top and bottom of the page.
- Long quotes (> 200 chars) truncated with a "Read more" expand.
- Empty state with encouraging copy and CTA if fewer than 3 approved testimonials exist.

---

### 7.11 Testimonials — Submission & Approval Flow `[P0]`

This is a complete end-to-end workflow from public submission through admin review to live display.

#### Submission Form (`/testimonials/submit`)

| Field | Type | Required | Notes |
|---|---|---|---|
| Full Name | Text | ✅ | Displayed publicly on card |
| Role / Title | Text | ✅ | e.g. "Associate Professor" |
| Organisation | Text | ✅ | e.g. "IIT Bombay" |
| Relationship to Candidate | Dropdown | ✅ | Professor / Manager / Peer / Collaborator / Other |
| LinkedIn URL | URL | ❌ | Optional; shown as "View Profile →" link if provided |
| Email Address | Email | ✅ | For notifications only — never displayed publicly |
| Testimonial Text | Textarea | ✅ | Min 30 chars · Max 600 chars · Live character count shown |
| Consent checkbox | Boolean | ✅ | "I consent to this testimonial being displayed on [Name]'s portfolio" |
| hCaptcha | CAPTCHA | ✅ | Spam prevention |

**On Submission (automated flow):**

1. Client-side validation (required fields, length, email format, CAPTCHA).
2. POST to `/api/testimonials/submit` (Next.js API route, rate-limited).
3. New testimonial document created in Sanity with `status: "pending"`.
4. **Notification email → candidate's dedicated inbox** (`hello@[yourname].dev`):
   - Subject: `New Testimonial Submission — [Submitter Name]`
   - Body: Full quote preview + direct link to Sanity Studio testimonial review
5. **Confirmation email → submitter**:
   - Subject: `Thanks for your testimonial, [First Name]!`
   - Body: Receipt confirmation + "usually reviewed within 48 hours" note
6. Submitter sees a branded thank-you screen with confirmation message and link back to `/testimonials`.

#### Admin Review Flow (Sanity Studio)

**Testimonial Queue (Sanity Studio → Testimonials document list)**

- Filter by status: **Pending / Approved / Rejected**
- List columns: Submitter Name · Role & Org · Relationship · Submitted At · Status
- Unread pending submissions highlighted with a badge count

**Individual Testimonial Review**

- Full quote text displayed
- All submitter details visible (email shown for admin only — never in public queries)
- **Edit display fields:** Admin can adjust displayed name, role, or org before approving (e.g. formatting corrections)
- **Admin notes field:** Private field, never shown publicly (e.g. "Verified — my thesis supervisor")
- **Actions:**
  - ✅ **Approve** → `status: approved`, `approvedAt` timestamp set → immediately live on `/testimonials` → approval email sent to submitter
  - ❌ **Reject** → `status: rejected` → never shown publicly → optional rejection email sent to submitter
  - ⏸ **Hold** → keeps `status: pending` → stays in queue for later

#### Testimonial Status State Machine

```
[Public Form Submitted]
        ↓
  status: PENDING  ──────────────────────────────────────────┐
        ↓                                                     │
  Admin reviews in Sanity Studio                             │ Hold
        ├── Approve → status: APPROVED                        │
        │     ↓ visible on /testimonials                      │
        │     ↓ approval email sent to submitter ◀────────────┘
        │
        └── Reject  → status: REJECTED
              ↓ hidden from public
              ↓ optional rejection email sent to submitter
```

**Email on Approval** (sent automatically via Resend):
- Subject: `Your testimonial is now live on [Candidate Name]'s portfolio!`
- Body: Thank-you message + link to live `/testimonials` page so they can share it

**Email on Rejection** (sent manually — admin clicks "Send rejection email" button):
- Subject: `Re: Your testimonial for [Candidate Name]`
- Body: Polite note, thanking them for their time

---

### 7.12 Contact & Dedicated Email `[P0]`

**Contact Form (`/contact`)**

| Field | Type | Required |
|---|---|---|
| Full Name | Text | ✅ |
| Email Address | Email | ✅ |
| Subject | Dropdown | ✅ (Internship Inquiry / Collaboration / Feedback / Other) |
| Message | Textarea | ✅ (min 20 chars, max 1000 chars) |
| How did you find me? | Dropdown | ❌ (LinkedIn / Google / Referral / Other) |
| hCaptcha | CAPTCHA | ✅ |

- All submissions routed to `hello@[yourname].dev` via Resend.
- Auto-reply sent to submitter within seconds confirming receipt.
- "How did you find me?" data stored for manual source attribution tracking.

**Social & Scheduling Links**

- LinkedIn profile (opens in new tab)
- GitHub profile
- **Cal.com** calendar link — 30-min "Chat with me" booking slot
- Email displayed as a plain mailto link (no obfuscation — open door policy)

---

### 7.13 Analytics & Tracking `[P1]`

- **Plausible Analytics** (privacy-first, GDPR-compliant, no cookie consent banner needed).
- Custom events tracked:

| Event | Trigger |
|---|---|
| `resume_download` | PDF download button click |
| `cta_hero_projects` | Hero "View My Work" click |
| `cta_hero_resume` | Hero "Download Resume" click |
| `story_tab_switch` | User switches to a different project tab in the story timeline |
| `story_phase_next` | User clicks "Next" to advance a phase in the story timeline |
| `story_phase_dot_click` | User clicks a phase dot directly to jump to that phase |
| `story_outcomes_viewed` | User reaches the final phase and sees the outcomes metrics strip |
| `testimonial_submit_start` | Testimonial form first field focus |
| `testimonial_submit_success` | Successful testimonial submission |
| `blog_read_50pct` | Scroll 50% of a blog post |
| `blog_read_100pct` | Scroll to end of a blog post |
| `contact_submit` | Successful contact form submission |

- UTM parameters on all resume download links for source tracking.

---

## 8. Content Requirements

### 8.1 Case Study Template (Tech-Focused)

| Section | Guidance | Tech-Specific Note |
|---|---|---|
| TL;DR | 1–2 sentence summary of project and outcome | Lead with the metric |
| Context & Stack | What product/system? What tools/tech was involved? | Mention APIs, integrations, or platforms even if you didn't build them |
| Problem Statement | What broke, what was missing, what was the user pain? | Frame as a user story where possible |
| My Role & Team | Exact role, team composition, stakeholders | Name engineering, design, and data counterparts where relevant |
| Process | Discovery → Definition → Planning → Execution → Retrospective | Include sprint structure if Agile was used |
| Key Decisions & Trade-offs | What choices did you make and why? | Show options evaluated — PMs make judgment calls |
| PM Artifacts | Gantt, RACI, PRD, sprint board, wireframe hand-off | Minimum 2 artifacts embedded per case study |
| Outcomes & Metrics | Quantified results with baseline comparison | Format: "X improved from Y to Z over N weeks" |
| Lessons Learned | What would you do differently? | Intellectual honesty is valued in tech PM culture |

### 8.2 Blog Content Plan — First 3 Months

| Month | Post (Suggested Title) | Type |
|---|---|---|
| Month 1 | "A PM intern's teardown of [App]'s onboarding" | Product Teardown |
| Month 1 | "How I ran my first sprint as a student: mistakes & fixes" | Sprint Retro |
| Month 2 | "OKRs vs KPIs — when each framework actually works" | Framework Breakdown |
| Month 2 | "[Tool A] vs [Tool B]: what I'd choose for an early-stage team" | Tool Deep Dive |
| Month 3 | "5 things I'd do differently if I wrote my first PRD again" | Career Reflection |
| Month 3 | "How [Tech Company] used PM thinking to solve [problem]" | Industry Analysis |

### 8.3 Writing Quality Standards

- Active voice, first-person ("I coordinated…", "We shipped…").
- Every claim backed by a number, date, or observable outcome.
- Blog posts: 600–1500 words for SEO performance on PM/product keywords.
- Case studies: 700–1000 words, supplemented by artifact images.
- Proofread with Grammarly + Hemingway App (aim for Grade 8 readability).
- Each blog post requires: cover image, SEO meta description, and category tag before publishing.

---

## 9. CMS Architecture (Sanity)

**Chosen CMS: Sanity.io** — headless CMS with real-time Studio, free tier (3 users, 10GB assets), and native Next.js integration via `next-sanity`.

### 9.1 Sanity Document Schemas

| Document Type | Key Fields | Used By |
|---|---|---|
| `siteSettings` | name, tagline, bio, headshot, stats (auto-count or manual) | Hero, global meta |
| `project` | title, slug, coverImage, tags[], methodology, duration, tl_dr, body (PortableText), artifacts[], **phases[]** (phaseName, dateRange, narrative, artifacts[], phaseOutcome), **outcomeMetrics[]** (val, label), status | Case studies + story timeline |
| `skill` | name, category, logo, proficiencyLevel | Skills page |
| `certification` | name, issuer, logo, dateEarned, credentialId, verifyUrl, inProgress | Certifications |
| `artifact` | title, image, caption, downloadUrl, relatedProject | Gallery |
| `blogPost` | title, slug, coverImage, category, tags[], body (PortableText), seoTitle, seoDescription, ogImage, featured, status, publishedAt | Blog |
| `blogCategory` | name, slug, description | Blog filters |
| `testimonial` | submitterName, role, organisation, relationship, linkedinUrl, submitterEmail (private), quote, status, adminNotes, submittedAt, approvedAt | Testimonials |
| `resume` | file (PDF asset), lastUpdated | Resume page |

### 9.2 Content Delivery Strategy

| Strategy | Applied To | Rationale |
|---|---|---|
| **ISR (on-demand revalidation)** | Blog posts, case studies, testimonials | Sanity webhook triggers `revalidatePath()` on publish — live within seconds |
| **Static Generation (SSG)** | Skills, certifications, gallery | Rarely changes; built at deploy time |
| **Edge caching** | All pages | Vercel CDN serves pages from edge — globally fast |

### 9.3 Sanity Studio Access & Security

- Studio at `/studio` — protected by Sanity's built-in Google SSO (no custom auth to build).
- Only portfolio owner has write access.
- All public-facing GROQ queries use **field projection** to explicitly exclude private fields (e.g. `submitterEmail`, `adminNotes`) — these are never exposed in any API response.
- Testimonial submissions from the public hit a Next.js API route that writes to Sanity via the Sanity client with a write token stored in environment variables.

---

## 10. Design & UX Requirements

### 10.1 Visual Design Tokens

| Token | Value |
|---|---|
| Primary colour | `#1B2A4A` (Navy) |
| Accent colour | `#4F8EF7` (Blue) |
| Background | `#FFFFFF` / `#F5F7FA` (Light Gray) |
| Dark card bg | `#0F172A` |
| Body text | `#1A202C` |
| Muted text | `#8898AA` |
| Heading font | Inter Bold or Sora Bold — 36 / 28 / 22 / 18px |
| Body font | Inter Regular — 16px, line-height 1.65, max-width 680px |
| Code font | JetBrains Mono or Fira Code — 14px |
| Border radius | Cards: 12px · Buttons: 8px · Badges: 999px |
| Shadow (default) | `0 1px 3px rgba(0,0,0,0.10)` |
| Shadow (hover) | `0 8px 24px rgba(0,0,0,0.12)` |

### 10.2 Responsive Breakpoints

| Breakpoint | Width | Notable Layout Changes |
|---|---|---|
| Mobile | ≤ 640px | Single column, stacked nav, min 44px tap targets |
| Tablet | 641–1024px | 2-column cards, collapsible nav |
| Desktop | ≥ 1025px | Full grid, sticky TOC on blog, side-by-side sections |

### 10.3 UX Standards

- All form errors: inline validation with red border + helper text below field.
- All form successes: full-screen or modal confirmation — not just a toast.
- Loading states: skeleton shimmer on all server-fetched content.
- Animations: fade-in-up on scroll-trigger; respects `prefers-reduced-motion`.
- Page transitions: 150ms fade — no jarring jumps.
- Favicon: custom icon (candidate initials or logo mark).
- OG image: 1200×630px branded template per page (generated via `@vercel/og`).

---

## 11. Technical Requirements

### 11.1 Confirmed Tech Stack

| Layer | Technology | Rationale |
|---|---|---|
| Framework | **Next.js 14** (App Router) | ISR, API routes, server components, Vercel-native |
| Styling | **Tailwind CSS** | Utility-first, consistent design tokens, fast iteration |
| Component Library | **shadcn/ui** | Accessible, unstyled base components, Tailwind-compatible |
| CMS | **Sanity.io** (free tier) | Headless, GROQ queries, excellent Next.js SDK |
| Hosting | **Vercel** (Hobby — free) | Edge CDN, instant previews, webhook revalidation |
| Email (transactional) | **Resend** (free tier — 3,000/mo) | API-first, React Email support, reliable delivery |
| Email (inbox) | **Zoho Mail** (free tier) | Custom domain inbox for `hello@[yourname].dev` |
| CAPTCHA | **hCaptcha** (free) | Privacy-respecting, GDPR-friendly |
| Analytics | **Plausible** (free 30-day → ~$9/mo or self-host) | No cookies, no consent banner, loved in tech |
| Calendar | **Cal.com** (free, open source) | No vendor lock-in, custom domain option |
| Domain | **Namecheap / Porkbun** | `[yourname].dev` — ~$10–12/year |
| Image CDN | **Sanity asset pipeline** | Auto WebP, transformation API, CDN-delivered |
| Package manager | **pnpm** | Faster installs, disk-efficient |

### 11.2 Performance Targets

- **Core Web Vitals:**
  - LCP < 2.5s
  - INP < 100ms
  - CLS < 0.1
- All images served as WebP via Sanity + `next/image`.
- Fonts loaded via `next/font` — no FOUT, inlined at build.
- Initial JS bundle: < 200KB (excluding `/studio` route).
- Blog and case study pages: static at build + on-demand ISR on Sanity publish.

### 11.3 Security Requirements

- HTTPS enforced on all routes (Vercel default).
- `/studio` protected by Sanity's auth — accessible to signed-in owner only.
- Public API routes (`/api/testimonials/submit`, `/api/contact`) rate-limited via Vercel Edge Middleware (max 5 requests/IP/hour).
- CAPTCHA on all public forms.
- Private Sanity fields excluded from all public GROQ queries via field projection.
- All secrets (Sanity write token, Resend API key) stored in Vercel environment variables — never in git.

### 11.4 SEO Requirements

- Unique `<title>` (≤ 60 chars) and `<meta description>` (≤ 160 chars) on every page.
- Dynamic OG images per blog post via `@vercel/og`.
- JSON-LD structured data:
  - `Person` schema on About page
  - `BlogPosting` schema on each blog post
  - `BreadcrumbList` on case study and blog post pages
- `sitemap.xml` auto-generated from Sanity content via `next-sitemap`.
- `robots.txt` — allow all public routes, disallow `/studio`.
- All images have `alt` text as a required Sanity field.
- Canonical URLs on all pages.

---

## 12. Email System Architecture

### 12.1 Email Addresses

| Address | Visibility | Purpose |
|---|---|---|
| `hello@[yourname].dev` | Public — displayed on site | Primary inbox; receives contact form submissions and testimonial alerts |
| `noreply@[yourname].dev` | Hidden — used as sender | Resend sends all automated emails from this address |

### 12.2 All Automated Email Flows

| Trigger | From | To | Subject |
|---|---|---|---|
| Contact form submitted | `noreply@` | `hello@` (you) | `[Portfolio Contact] [Subject] — [Name]` |
| Contact form submitted | `noreply@` | Submitter | `Got your message, [First Name]!` |
| Testimonial submitted | `noreply@` | `hello@` (you) | `New Testimonial Submission — [Name]` (+ Sanity review link) |
| Testimonial submitted | `noreply@` | Submitter | `Thanks for your testimonial, [First Name]!` |
| Testimonial approved | `noreply@` | Submitter | `Your testimonial is now live!` (+ link to /testimonials) |
| Testimonial rejected (optional) | `noreply@` | Submitter | `Re: Your testimonial for [Candidate Name]` |

### 12.3 Email Templates

All emails use branded HTML templates built with **React Email** (open source). Templates include:

- Candidate name and logo mark in header.
- Minimal layout consistent with portfolio design language.
- Unsubscribe / contact note for CAN-SPAM / GDPR compliance.
- Plain-text fallback for every template.

### 12.4 Domain Email Setup (One-Time)

1. Purchase `[yourname].dev` domain.
2. Create Zoho Mail account → add domain → verify via DNS TXT record.
3. Set MX records at registrar → point to Zoho Mail servers.
4. Create `hello@[yourname].dev` inbox in Zoho.
5. Add domain to Resend → verify via DNS (SPF + DKIM records).
6. Configure `noreply@[yourname].dev` as verified sender in Resend.
7. Test full flow: contact form → `hello@` inbox + submitter auto-reply.

> **DMARC setup strongly recommended** — prevents emails from landing in spam. Set a `_dmarc` TXT record: `v=DMARC1; p=none; rua=mailto:hello@[yourname].dev`.

---

## 13. Milestones & Timeline

| Phase | Milestone | Duration | Owner | Depends On |
|---|---|---|---|---|
| **0 — Setup** | Register domain; set up Vercel, Sanity, Resend, Zoho Mail accounts | 1 day | You | Domain purchase |
| **0 — Setup** | Configure custom email (`hello@` inbox + `noreply@` sender); test email flow | 1 day | You | Domain DNS propagation |
| **1 — Design** | Wireframe all pages in Figma; finalise colour tokens and component library | 4 days | You | — |
| **2 — CMS** | Define all Sanity schemas incl. `phases[]` and `outcomeMetrics[]` fields; populate with 3 projects (each with 4–5 phases), bio, skills, 2 certs | 3 days | You | Sanity account |
| **3 — Dev: Core** | Home, About, Skills, Certifications, Resume, Contact pages | 5 days | You | CMS schemas |
| **3 — Dev: Projects** | Projects index + story timeline React component + 3 case study detail pages with embedded timeline | 6 days | You | Core pages |
| **3 — Dev: Blog** | Blog index + post detail (public view) | 3 days | You | Core pages |
| **3 — Dev: Blog Admin** | Configure Sanity Studio for blog — all fields, preview, scheduling plugin | 2 days | You | Blog pages |
| **3 — Dev: Testimonials** | Public page, submit form, API route, Sanity write pipeline | 3 days | You | Core pages |
| **3 — Dev: Testimonials Admin** | Admin review UI in Sanity Studio, approve/reject actions, email triggers | 2 days | You | Testimonials |
| **3 — Dev: Email** | Build all 6 React Email templates; wire up Resend for all flows | 2 days | You | All forms |
| **4 — QA** | Cross-browser + mobile testing (Chrome, Safari, Firefox + real phone) | 2 days | You | All dev done |
| **4 — QA** | Lighthouse CI audit — hit ≥ 90 accessibility, ≥ 85 performance | 1 day | You | QA |
| **4 — QA** | Full content proofread — mentor or peer review | 2 days | Mentor | Content populated |
| **5 — Launch** | Deploy to production domain; submit sitemap to Google Search Console | 1 day | You | QA passed |
| **6 — Growth** | Send testimonial request emails to 10+ contacts | Week 1 post-launch | You | Launch |
| **6 — Growth** | Publish first 2 blog posts | Weeks 1–2 post-launch | You | Launch |
| **6 — Growth** | Monthly: add new project/cert, publish 2 posts, review analytics | Recurring | You | Ongoing |

**Total estimated build time: 6–7 weeks** at 1–2 focused hours/day.

> The story timeline component adds ~2 extra days to the projects phase, but it is the single highest-impact feature for differentiating this portfolio. The blog admin and testimonial workflow add approximately 1 additional week over a basic portfolio build. Both compound in value every month post-launch.

---

## 14. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Scope creep on blog or testimonial features mid-build | High | Medium | Lock feature spec in this PRD; new ideas go into a `v2-backlog` Notion page |
| Story timeline phases not populated before launch | Medium | High | Write phase content for all 3 projects in Sanity before QA; use the sample phases from §7.3 as a template |
| Story timeline mobile layout breaking on narrow screens | Medium | Medium | Build mobile-first; on screens ≤ 400px collapse the phase dot labels and show only numbers; test on a real phone |
| Perfectionism delaying launch | High | High | Hard rule: ship with 3 case studies, 0 blog posts, 0 testimonials if needed — all three can be added after launch |
| Sanity free tier asset limit (10GB) hit early | Low | Low | Compress images before upload; use Sanity image URL params for resizing |
| Resend free tier (3,000 emails/month) exceeded | Low | Low | Sufficient for Phase 1; $20/mo upgrade if needed |
| Spam submissions on public forms | Medium | Medium | hCaptcha on all forms + server-side rate limiting + honeypot field |
| Inappropriate testimonial submissions | Low | High | All testimonials require manual admin approval — no auto-publish under any condition |
| Emails landing in spam (Resend / Zoho) | Low | High | Set up SPF + DKIM + DMARC records; send test emails to Gmail and Outlook inboxes before launch |
| Blog going stale after launch (< 1 post/month) | Medium | High | Recurring calendar block: 2 posts/month; use the content plan in §8.2 as a starting backlog |
| Poor mobile reading experience on blog | Medium | Medium | Mobile-first development; test on a real phone at QA stage, not just browser DevTools |
| Next.js App Router learning curve for solo builder | Medium | Medium | Use Sanity's official `next-sanity` starter template to skip boilerplate setup |

---

## 15. Assumptions

- The candidate has at least 2–3 real or mock tech-adjacent projects ready to document as case studies before the launch date.
- Each project has enough process detail to populate 4–5 distinct phases with a narrative, artifacts list, and measurable phase outcome — this is the minimum needed for the story timeline to be meaningful.
- A professional headshot is available or will be taken before the design phase begins.
- The candidate is comfortable with basic terminal usage (running `pnpm install`, `vercel deploy`) — no advanced coding required beyond following the Next.js + Sanity starter.
- The portfolio will be actively maintained — a stale blog or a queue of unreviewed testimonials actively damages credibility.
- English is the primary language; localisation is not in scope for Phase 1.
- The candidate will proactively solicit testimonials within the first 2 weeks post-launch (target: 10+ outreach messages sent).
- Budget available: ~₹1,500–2,000/year for the domain; Plausible Analytics at ~₹750/month if not self-hosted (this is optional — Plausible has a generous 30-day free trial).

---

## 16. Appendix

### 16.1 Final Tech Stack & Cost Summary

| Tool | Purpose | Cost |
|---|---|---|
| Next.js 14 | Framework | Free |
| Tailwind CSS + shadcn/ui | Styling + components | Free |
| Sanity.io | CMS | Free (up to 3 users, 10GB) |
| Vercel Hobby | Hosting + CDN | Free |
| Resend | Transactional email | Free (3,000 emails/mo) |
| Zoho Mail | Inbox for custom domain | Free |
| hCaptcha | CAPTCHA | Free |
| Cal.com | Calendar booking | Free |
| Plausible Analytics | Privacy-first analytics | Free trial → ~$9/mo or self-host |
| Domain `[name].dev` | Custom domain | ~$10–12/year |
| Figma | Wireframing | Free |
| **Total Year 1** | | **~$120–240/year** |

### 16.2 Certifications — Tech PM Priority Order

| Certification | Platform | Cost | Priority |
|---|---|---|---|
| Google Project Management Certificate | Coursera | Free to audit | ⭐ High |
| Scrum.org PSM I | scrum.org | $150 | ⭐ High |
| Atlassian Jira Fundamentals | Atlassian University | Free | ⭐ High |
| AWS Cloud Practitioner | AWS | $100 exam | Medium — signals cloud awareness for tech PMs |
| Google / Meta Data Analytics | Coursera | Free to audit | Medium |
| PMI CAPM | PMI.org | $225 (student) | Medium |
| Reforge PM Program | Reforge | $2,000+ | Low — best post-internship |

### 16.3 Recommended Sanity Plugins

| Plugin | Purpose |
|---|---|
| `@sanity/vision` | Run GROQ queries live in browser during development |
| `sanity-plugin-media` | Better media library management in Studio |
| `sanity-plugin-seo` | SEO field character counter and validator |
| `@sanity/table` | Embed tables in Portable Text body |
| `sanity-plugin-scheduled-publishing` | Schedule blog posts to publish at a future time |

### 16.4 Useful Links & Resources

| Resource | URL |
|---|---|
| Next.js + Sanity starter | github.com/sanity-io/next-sanity |
| Resend + Next.js guide | resend.com/docs/send-with-nextjs |
| React Email components | react.email |
| Cal.com self-hosting | cal.com/docs |
| Plausible self-hosting | plausible.io/docs/self-hosting |
| hCaptcha Next.js setup | docs.hcaptcha.com |
| shadcn/ui components | ui.shadcn.com |
| Vercel OG image generation | vercel.com/docs/functions/og-image-generation |
| next-sitemap | github.com/iamvishnusankar/next-sitemap |

---

> **Final Note:** This portfolio is itself a PM case study in your interviews. Be ready to walk hiring managers through the decisions you made while building it — the trade-offs (CMS vs static), the scope calls (blog in Phase 1), the features you considered and cut. The meta-narrative of "I treated my career like a product" is one of the strongest PM interview stories you can tell.

---

*PM Portfolio PRD — Final v2.1 · Tech Industry Edition · April 2026*
*All open questions from v1.0 resolved. Story timeline feature added in v2.1. Ready for execution.*
