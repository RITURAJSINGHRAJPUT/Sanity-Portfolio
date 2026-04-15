# Rituraj Singh // Sanity Content Deployment Guide

Now that your Studio is connected (Project ID: `ma52vgrm`), you can start populating your portfolio with real data. This guide will walk you through the process of moving from "Demo Mode" to your official professional archive.

---

## 🔐 Step 1: Access & Login
1.  Ensure your development server is running (`npm run dev`).
2.  Open **[http://localhost:3000/studio](http://localhost:3000/studio)** in your browser.
3.  **Log in**: Use the same account you used to create the Sanity project (Google, GitHub, or Email).

---

## ✍️ Step 2: Creating Your Core Content

The Studio is divided into several "Document Types." Here is how to handle the most important ones:

### 1. Projects (Portfolio Entries)
This is the heart of your site.
- **Title**: Use high-impact names (e.g., "SaaS Onboarding Optimization").
- **TL;DR**: A 1-sentence summary for the card grid.
- **Methodology**: Select from the list (Agile, Waterfall, etc.).
- **Outcome Metrics**: Add key stats (e.g., "38% Increase in Activation").
- **Case Study Flow**: Add "Phases" (Discovery, Definition, Delivery) to build the interactive timeline.

### 2. Achievements
- **Category**: Tag them as "Project Management", "Technical", or "Leadership".
- **Date**: Used for sorting (newest first).
- **Organization**: Where you earned the achievement.

### 3. Blog Posts (Intel Reports)
- **Status**: The grid only shows posts where the "Published At" date is set.
- **Content**: Use the rich text editor to write your analysis.

---

## 🖼️ Step 3: Media & Assets
- **Images**: Drag and drop images directly into the "Cover Image" fields.
- **Alt Text**: Always add a short description for SEO.
- **PDFs (Resume)**: In the **Resume** document, upload your latest PDF. The "Download Resume" buttons on the site will link to this file automatically.

---

## 🚀 Step 4: Making it Live

### 1. The "Publish" Button
Inside the Studio, changes are saved as drafts. **You must click the green "Publish" button** (bottom right) for the data to become available to your website.

### 2. Production Studio (Optional)
If you want to access the Studio at a URL like `rituraj-pm.sanity.studio` without running your local server:
1.  Open your terminal in the project root.
2.  Run: `npx sanity deploy`
3.  This will host your Studio on Sanity's cloud.

---

## ⚡ PM Strategy Tip
> [!TIP]
> **Data Consistency:** When entering Project Titles, use **UPPERCASE** or **Bold Titles** to match the Brutalist aesthetic. For example, use **"SaaS_OPTIMIZATION_V1"** instead of "SaaS Optimization" for that extra industrial feel.

---

### Need help with a specific section?
If you're unsure how to fill out a specific schema field, just ask! I can explain the logic behind any part of the delivery architect archive.
