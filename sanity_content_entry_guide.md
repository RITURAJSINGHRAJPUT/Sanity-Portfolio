# 📋 Sanity Content Entry Guide — Complete Field-by-Field Reference

Your portfolio has a Sanity CMS backend (Project ID: `ma52vgrm`). This guide tells you **exactly** what to type into every field for Projects, Skills, and Achievements.

---

## 🔑 Step 0: Access the Sanity Studio

1. Make sure your dev server is running (`npm run dev`)
2. Open **[http://localhost:3000/studio](http://localhost:3000/studio)**
3. Log in with the account you used to create the Sanity project

> [!IMPORTANT]
> **Current State of Your Site:**
> - ✅ **Achievements page** → Already fetches from Sanity (falls back to demo data if empty)
> - ❌ **Projects page** → Uses hardcoded sample data, NOT Sanity yet
> - ❌ **Skills page** → Uses hardcoded sample data, NOT Sanity yet
>
> After you enter your data, I'll need to wire up the Projects and Skills pages to pull from Sanity. **Enter the data first**, then I'll connect it.

---

## 📁 SECTION 1: Projects (Case Studies)

In the Studio sidebar, click **"Project"** → click the **"+"** button to create a new project.

### Field-by-Field Guide

For each project, fill in these fields:

| # | Field | Type | What to Enter | Example |
|---|-------|------|---------------|---------|
| 1 | **Project Title** | Text | Your project name. Use impactful, descriptive names | `SaaS Onboarding Optimization` |
| 2 | **Slug** | Auto | Click **"Generate"** — it auto-creates from the title | `saas-onboarding-optimization` |
| 3 | **Cover Image** | Image | Drag & drop a screenshot, mockup, or relevant visual. **Always fill in the Alt Text** sub-field | Alt: `Dashboard showing onboarding funnel metrics` |
| 4 | **TL;DR** | Text | 1–2 sentence summary. This appears on the project card | `Reduced time-to-activation by 38% through a redesigned user onboarding flow using Agile sprints.` |
| 5 | **Tags** | Multi-select | Pick from the dropdown. You can select multiple | Options: `agile`, `waterfall`, `b2b-saas`, `api-platform`, `growth`, `research`, `data` |
| 6 | **Methodology** | Dropdown | The PM framework you used | Options: `Agile`, `Waterfall`, `Hybrid`, `Discovery-only` |
| 7 | **Industry** | Dropdown | The sector this project belongs to | Options: `B2B SaaS`, `Consumer Tech`, `Logistics`, `FinTech`, `HealthTech`, `EdTech`, `Developer Tools` |
| 8 | **Duration** | Text | How long the project lasted | `8 weeks`, `3 months`, `12 weeks` |
| 9 | **Tech Stack** | Tags | Type each tool and press Enter to add | `Jira`, `Figma`, `Mixpanel`, `Notion` |
| 10 | **Status** | Dropdown | **Must be `published`** for it to appear on the site | `published` |
| 11 | **Display Order** | Number | Controls sort order (lower = shown first) | `1`, `2`, `3` |

### Project Phases (The Timeline)

Click **"Add item"** under the **Phases** section. Each phase represents one stage of your project lifecycle. **Add 3–5 phases per project.**

| Phase Field | What to Enter | Example |
|-------------|---------------|---------|
| **Phase Name** | The stage name | `Discovery`, `Definition`, `Sprint 1`, `Sprint 2`, `Launch & Retro` |
| **Date Range** | When this phase happened | `Week 1–2`, `Week 3`, `Jan 2024 – Feb 2024` |
| **Phase Narrative** | 2–4 sentences describing what you did, decisions made, challenges faced | `Conducted user interviews with 15 trial users, analyzed Mixpanel funnel data, and identified 3 critical dropoff points in the onboarding flow.` |
| **Artifacts** | Click "Add item" for each deliverable you produced | `User Interview Guide`, `Funnel Analysis Report`, `Journey Map`, `PRD v1.0` |
| **Phase Outcome** | One sentence summarizing the result of this phase | `Identified 3 critical dropoff points causing 62% abandonment rate` |

### Outcome Metrics

Click **"Add item"** under **Outcome Metrics**. Add 3–4 key results per project.

| Metric Field | What to Enter | Example |
|--------------|---------------|---------|
| **Value** | The number/percentage | `38%`, `5 hrs/wk`, `120+`, `4.2/5` |
| **Label** | What the value measures | `faster activation`, `CS time saved`, `endpoints documented`, `developer satisfaction` |

### Full Case Study Body (Optional Rich Text)

Use the rich text editor to write a detailed long-form case study. You can add:
- Paragraphs of analysis
- Embedded images (drag & drop) with alt text and captions
- Headers to structure the content

> [!TIP]
> **Minimum Viable Project Entry:** You need at minimum: Title, Slug, TL;DR, Tags, Methodology, at least 1 Phase, at least 2 Outcome Metrics, and Status set to `published`.

---

## 🛠️ SECTION 2: Skills

In the Studio sidebar, click **"Skill"** → click **"+"** to add a new skill.

### Field-by-Field Guide

| # | Field | Type | What to Enter | Example |
|---|-------|------|---------------|---------|
| 1 | **Tool / Skill Name** | Text | The name of the tool or skill | `Jira`, `Figma`, `SQL`, `Agile Ceremonies` |
| 2 | **Category** | Dropdown | Which group this skill belongs to | See options below |
| 3 | **Logo Icon** | Image | Optional — upload the tool's logo (PNG with transparent background works best) | Jira logo, Figma logo, etc. |
| 4 | **Proficiency Level** | Dropdown | Your comfort level | `Familiar`, `Working`, `Proficient` |

### Category Options (choose one per skill)

| Category | When to Use | Example Skills |
|----------|-------------|----------------|
| `Planning & Delivery` | PM tools for tracking and execution | Jira, Linear, Asana, Notion, Confluence, Trello |
| `Collaboration` | Communication and teamwork tools | Slack, Miro, FigJam, Google Workspace, MS Teams |
| `Analytics & Data` | Data analysis and tracking tools | Google Analytics 4, Mixpanel, Amplitude, SQL, Excel/Sheets |
| `Design Adjacency` | UX/design tools you work with | Figma, Maze, Hotjar, Balsamiq |
| `Dev Awareness` | Technical skills and tools | GitHub, Postman, REST API Concepts, CI/CD, Git |

### Proficiency Levels Explained

| Level | Meaning | Use When... |
|-------|---------|-------------|
| **Familiar** | You understand the concepts and have used it a few times | You've explored it but haven't used it in a production project |
| **Working** | You use it regularly and can work independently | You've used it in real projects but wouldn't call yourself an expert |
| **Proficient** | You're highly skilled and can teach others | You use it daily and know advanced features |

> [!TIP]
> **Suggested entry order:** Add all `Planning & Delivery` skills first, then `Collaboration`, etc. This keeps the Studio organized and makes it easy to review.

### Skills You Should Enter (Recommended List)

Here's a suggested list based on your portfolio's PM focus. **Enter each as a separate Skill document:**

```
Planning & Delivery:
  ├── Jira → Proficient
  ├── Notion → Proficient
  ├── Confluence → Working
  ├── Linear → Working (if applicable)
  └── Asana → Familiar (if applicable)

Collaboration:
  ├── Slack → Proficient
  ├── Miro → Working
  ├── FigJam → Working
  └── Google Workspace → Proficient

Analytics & Data:
  ├── Google Analytics 4 → Working
  ├── Mixpanel → Working
  ├── Excel / Sheets → Proficient
  ├── SQL (Basic) → Familiar
  └── Amplitude → Familiar (if applicable)

Design Adjacency:
  ├── Figma → Working
  ├── Hotjar → Familiar
  └── Maze → Familiar (if applicable)

Dev Awareness:
  ├── GitHub → Working
  ├── Postman → Working
  ├── REST API Concepts → Working
  └── Agile Ceremonies → Proficient
```

---

## 🏆 SECTION 3: Achievements

In the Studio sidebar, click **"Achievement"** → click **"+"** to add a new achievement.

### Field-by-Field Guide

| # | Field | Type | What to Enter | Example |
|---|-------|------|---------------|---------|
| 1 | **Achievement Name** | Text | The title of the award, honor, or milestone | `National Fintech Hackathon Finalist` |
| 2 | **Issuing Organization** | Text | Who gave you this achievement | `FinTech Global`, `University of XYZ`, `Google` |
| 3 | **Date of Achievement** | Date | When you earned it (use the date picker) | `March 2024` |
| 4 | **Category** | Dropdown | What type of achievement | See options below |
| 5 | **Description** | Text | 1–2 sentences explaining the achievement and your impact | `Led a cross-functional team of 4 to build a real-time risk assessment MVP. Ranked in the top 10 out of 250+ teams.` |
| 6 | **Award/Achievement Image** | Image | Optional — a certificate, badge screenshot, or event photo | Upload PNG/JPG |
| 7 | **Reference Link** | URL | Optional — link to proof, announcement, or certificate | `https://credential.net/abc123` |

### Category Options

| Category Value | Label | Use For |
|----------------|-------|---------|
| `academic` | Academic | Dean's list, scholarships, academic honors, GPA milestones |
| `professional` | Professional | Work awards, performance recognitions, PM certifications |
| `leadership` | Leadership | Team lead roles, mentorship programs, org leadership |
| `competition` | Competition/Hackathon | Hackathons, case competitions, coding contests |
| `community` | Community | Open source contributions, volunteer work, community organizing |

---

## 🎓 SECTION 4: Certifications

In the Studio sidebar, click **"Certification"** → click **"+"** to add a new certification.

### Field-by-Field Guide

| # | Field | Type | What to Enter | Example |
|---|-------|------|---------------|---------|
| 1 | **Certification Name** | Text | Full official name of the certification | `Professional Scrum Master I (PSM I)` |
| 2 | **Issuing Body** | Text | The organization that issued it | `Scrum.org`, `Google`, `PMI`, `Atlassian` |
| 3 | **Issuer Logo** | Image | Optional — logo of the issuing body | Upload PNG |
| 4 | **Date Earned** | Date | When you completed it | `2024-01-15` |
| 5 | **Credential ID** | Text | Your unique certificate/credential identifier | `PSM-12345678` |
| 6 | **Verification URL** | URL | Link where someone can verify your credential | `https://www.scrum.org/certificates/12345` |
| 7 | **In Progress?** | Toggle | Turn ON if you're currently pursuing this cert | `false` for completed, `true` for in-progress |

---

## ✅ After Entering Data: The Publishing Checklist

After filling in each document:

1. **Click the green "Publish" button** (bottom-right of the Studio editor) — drafts are NOT visible on the site
2. For Projects, make sure **Status = `published`**
3. Verify your data appears on the site:
   - **Achievements**: Refresh [localhost:3000/achievements](http://localhost:3000/achievements) — should show your real data immediately
   - **Projects & Skills**: These pages still use hardcoded data. **Tell me when you've entered your data** and I'll wire them up to Sanity

---

## 🔄 What Happens Next

Once you've entered your content:

1. **Tell me you're done** entering data
2. I'll update the **Projects page** (`/projects`) to fetch from Sanity instead of hardcoded samples
3. I'll update the **Skills page** (`/skills`) to fetch from Sanity instead of hardcoded arrays
4. Your portfolio will be fully dynamic and CMS-driven

> [!IMPORTANT]
> **Start with Achievements** — that page already fetches from Sanity, so you'll see results immediately and can verify the Studio is working before entering the more complex Project data.
