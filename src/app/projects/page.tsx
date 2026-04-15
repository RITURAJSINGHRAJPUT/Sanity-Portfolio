import Link from "next/link";
import { ArrowRight } from "lucide-react";
import StoryTimeline from "@/components/projects/StoryTimeline";
import { safeFetch } from "@/sanity/lib/client";
import { allProjectsQuery } from "@/sanity/lib/queries";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Fallback data — used only when Sanity is empty or unconfigured
const sampleProjects = [
  {
    _id: "1",
    title: "SaaS Onboarding Optimization",
    slug: { current: "saas-onboarding" },
    tldr: "Reduced time-to-activation by 38% through a redesigned user onboarding flow. Led a cross-functional team through 4 agile sprints to identify dropoff points and implement targeted improvements.",
    tags: ["b2b-saas", "agile", "growth"],
    methodology: "Agile",
    industry: "B2B SaaS",
    duration: "8 weeks",
    techStack: ["Jira", "Figma", "Mixpanel", "Notion"],
    phases: [
      {
        phaseName: "Discovery",
        dateRange: "Week 1–2",
        narrative: "Conducted user interviews with 15 trial users, analyzed Mixpanel funnel data, and identified 3 critical dropoff points in the onboarding flow. Created user journey maps and presented findings to stakeholders.",
        artifacts: ["User Interview Guide", "Funnel Analysis Report", "Journey Map"],
        phaseOutcome: "Identified 3 critical dropoff points causing 62% abandonment rate",
      },
      {
        phaseName: "Definition",
        dateRange: "Week 3",
        narrative: "Synthesized research into problem statements and defined success metrics. Wrote a PRD outlining the proposed solution: a guided onboarding wizard with contextual tooltips. Aligned with engineering on technical feasibility.",
        artifacts: ["PRD v1.0", "Success Metrics Doc", "RACI Matrix"],
        phaseOutcome: "PRD approved by stakeholders with clear success criteria: 30% reduction in time-to-activation",
      },
      {
        phaseName: "Sprint 1",
        dateRange: "Week 4–5",
        narrative: "Prioritized the backlog using MoSCoW method. Sprint focused on the onboarding wizard UI and first-time user detection. Led daily standups and resolved a scope conflict between design and engineering teams.",
        artifacts: ["Sprint Backlog", "Wireframes", "Sprint Board"],
        phaseOutcome: "Onboarding wizard MVP deployed to staging with 8 of 12 user stories completed",
      },
      {
        phaseName: "Sprint 2",
        dateRange: "Week 6–7",
        narrative: "Implemented contextual tooltips, progress indicators, and a checklist sidebar. Ran a small-scale A/B test with 200 users. Conducted sprint retrospective and adjusted velocity estimates.",
        artifacts: ["A/B Test Plan", "Sprint Retro Board", "Risk Register"],
        phaseOutcome: "A/B test showed 28% improvement in activation rate — exceeding target",
      },
      {
        phaseName: "Launch & Retro",
        dateRange: "Week 8",
        narrative: "Full rollout to all new users. Monitored metrics for 5 days, no critical issues. Wrote a retrospective document analyzing what worked and what to improve. Presented outcomes deck to leadership.",
        artifacts: ["Launch Checklist", "Outcomes Deck", "Retro Document"],
        phaseOutcome: "38% reduction in time-to-activation, 5 hours/week saved for CS team",
      },
    ],
    outcomeMetrics: [
      { val: "38%", label: "faster activation" },
      { val: "5 hrs/wk", label: "CS time saved" },
      { val: "0", label: "critical bugs at launch" },
      { val: "28%", label: "activation rate increase" },
    ],
  },
  {
    _id: "2",
    title: "API Documentation Revamp",
    slug: { current: "api-docs-revamp" },
    tldr: "Led the developer documentation overhaul for a platform API, improving adoption rates by 52% across 3 product lines. Partnered with engineering to restructure 120+ API endpoints.",
    tags: ["api-platform", "agile"],
    methodology: "Hybrid",
    industry: "Developer Tools",
    duration: "10 weeks",
    techStack: ["Confluence", "Postman", "GitHub", "Notion"],
    phases: [
      {
        phaseName: "Research",
        dateRange: "Week 1–2",
        narrative: "Audited existing documentation across 120+ endpoints. Surveyed 30 external developers and conducted 8 in-depth interviews. Found that 74% rated current docs as 'poor' or 'very poor'.",
        artifacts: ["Developer Survey", "Docs Audit Report", "Competitor Analysis"],
        phaseOutcome: "74% developer dissatisfaction rate confirmed; top 3 pain points identified",
      },
      {
        phaseName: "Information Architecture",
        dateRange: "Week 3–4",
        narrative: "Designed a new docs structure using card sorting with 12 developers. Created a taxonomy for endpoints, organized by use case rather than technical structure. Built interactive API explorer prototype.",
        artifacts: ["Card Sort Results", "New IA Diagram", "API Explorer Prototype"],
        phaseOutcome: "New information architecture validated by 85% of test participants",
      },
      {
        phaseName: "Content Sprint",
        dateRange: "Week 5–8",
        narrative: "Coordinated with 4 engineers to rewrite documentation for all endpoints. Introduced code samples in 5 languages. Added interactive 'Try It' panels. Ran weekly reviews with developer advocates.",
        artifacts: ["Content Calendar", "Style Guide", "Sprint Board"],
        phaseOutcome: "120+ endpoints documented with code samples and interactive panels",
      },
      {
        phaseName: "Launch & Measure",
        dateRange: "Week 9–10",
        narrative: "Soft launch to beta developers, collected feedback, iterated on 15 pages. Full launch with announcement blog post. Tracked adoption metrics weekly for 4 weeks post-launch.",
        artifacts: ["Launch Plan", "Feedback Log", "Metrics Dashboard"],
        phaseOutcome: "52% increase in API adoption rate within 30 days",
      },
    ],
    outcomeMetrics: [
      { val: "52%", label: "API adoption increase" },
      { val: "120+", label: "endpoints documented" },
      { val: "4.2/5", label: "developer satisfaction" },
      { val: "60%", label: "fewer support tickets" },
    ],
  },
  {
    _id: "3",
    title: "Growth Experiment Framework",
    slug: { current: "growth-experiments" },
    tldr: "Designed and executed 12 structured growth experiments, increasing monthly active users by 24% in one quarter. Built a reusable experiment framework adopted by the full product team.",
    tags: ["growth", "data", "research"],
    methodology: "Discovery-only",
    industry: "Consumer Tech",
    duration: "12 weeks",
    techStack: ["Google Analytics", "Amplitude", "Sheets", "Notion"],
    phases: [
      {
        phaseName: "Opportunity Mapping",
        dateRange: "Week 1–2",
        narrative: "Analyzed user funnels, cohort data, and feature adoption metrics to build an opportunity backlog of 25+ growth levers. Prioritized using ICE scoring framework.",
        artifacts: ["Opportunity Backlog", "ICE Scoring Sheet", "Cohort Analysis"],
        phaseOutcome: "25 growth opportunities identified and ranked; top 12 selected for experimentation",
      },
      {
        phaseName: "Framework Design",
        dateRange: "Week 3",
        narrative: "Created a standardized experiment framework: hypothesis → metric → test design → analysis → decision. Built templates in Notion. Trained 3 team members on the process.",
        artifacts: ["Experiment Template", "Training Deck", "Decision Log"],
        phaseOutcome: "Reusable experiment framework adopted by the entire product team",
      },
      {
        phaseName: "Experiment Execution",
        dateRange: "Week 4–10",
        narrative: "Ran 12 experiments across onboarding, engagement, and retention. Each experiment had a clear hypothesis, sample size calculation, and success criteria. 7 of 12 showed statistically significant results.",
        artifacts: ["12 Experiment Reports", "A/B Test Results", "Weekly Digest"],
        phaseOutcome: "7 of 12 experiments showed positive results; 4 shipped to production",
      },
      {
        phaseName: "Analysis & Playbook",
        dateRange: "Week 11–12",
        narrative: "Compiled results into a growth playbook documenting what worked, what didn't, and why. Presented learnings to leadership. Created a self-serve experiment dashboard for ongoing use.",
        artifacts: ["Growth Playbook", "Outcomes Presentation", "Experiment Dashboard"],
        phaseOutcome: "24% MAU increase over the quarter; playbook used for 8 subsequent experiments",
      },
    ],
    outcomeMetrics: [
      { val: "24%", label: "MAU increase" },
      { val: "12", label: "experiments run" },
      { val: "7/12", label: "positive results" },
      { val: "4", label: "shipped to production" },
    ],
  },
];

const allTags = [
  { value: "all", label: "All" },
  { value: "agile", label: "Agile" },
  { value: "b2b-saas", label: "B2B SaaS" },
  { value: "api-platform", label: "API/Platform" },
  { value: "growth", label: "Growth" },
  { value: "research", label: "Research" },
  { value: "data", label: "Data" },
];

export default async function ProjectsPage() {
  const sanityProjects = await safeFetch<any>(allProjectsQuery);
  const projects = sanityProjects.length > 0 ? sanityProjects : sampleProjects;

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b-2 border-[var(--color-border)] pb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black">
            STRATEGIC <br /> ARCHIVES
          </h1>
          <div className="w-1 h-32 bg-[var(--color-secondary)] hidden md:block mx-8 shadow-[4px_0px_0px_rgba(0,0,0,1)]" />
          <p className="text-sm md:text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-lg leading-relaxed">
            A comprehensive catalog of product interventions, delivery frameworks, 
            and systems architecture. Each entry represents a unique delivery 
            lifecycle from discovery to scaled outcome.
          </p>
        </div>

        {/* Story Timeline (Featured) */}
        <section className="mb-32 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="flex items-center gap-3 mb-8">
            <span className="w-3 h-3 bg-[var(--color-accent)] shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
            <h2 className="text-xl font-black uppercase tracking-widest text-[var(--color-primary)]">FEATURED_TIMELINE</h2>
          </div>
          <StoryTimeline projects={projects} />
        </section>

        {/* Case Study Cards Grid */}
        <section>
          <div className="flex items-center gap-3 mb-10 pb-4 border-b border-[var(--color-border)] border-dashed">
            <span className="w-3 h-3 bg-[var(--color-primary)] shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
            <h2 className="text-xl font-black uppercase tracking-widest text-[var(--color-primary)]">
              ALL_CASE_STUDIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project: any, idx: number) => (
              <Link
                key={project._id}
                href={`/projects/${project.slug?.current || project.slug}`}
                className="group relative bg-white border-2 border-[var(--color-border)] p-8 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* ID Label */}
                <div className="absolute top-[-12px] right-6 px-3 py-1 bg-[var(--color-accent)] text-white text-[10px] font-black uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                  PROJECT_LOG::{idx + 1}
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.tags || []).slice(0, 2).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[9px] font-black uppercase tracking-tighter bg-[#f4f4f0] border border-[var(--color-border)] text-[var(--color-primary)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-2xl font-black uppercase tracking-tight leading-none group-hover:text-[var(--color-accent)] transition-colors mb-4">
                    {project.title}
                  </h3>

                  <p className="text-xs font-bold text-[var(--color-muted)] uppercase leading-relaxed line-clamp-3 mb-6">
                    {project.tldr}
                  </p>
                </div>

                {/* Metadata Footer */}
                <div className="pt-6 border-t border-[var(--color-border)] border-dashed flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="text-[9px] font-black uppercase tracking-widest text-[#AAA]">
                      Dur: <span className="text-[var(--color-primary)] ml-1">{project.duration}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black uppercase tracking-widest text-[var(--color-accent)]">
                    VIEW_DECK <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
