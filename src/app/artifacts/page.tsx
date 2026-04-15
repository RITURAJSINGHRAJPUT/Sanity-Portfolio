import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Artifacts",
  description: "PM artifacts: PRDs, Gantt charts, sprint boards, wireframes, and retrospective boards.",
};

const artifacts = [
  {
    _id: "1",
    title: "Product Requirements Document (PRD)",
    caption: "Comprehensive PRD for the SaaS onboarding project. Includes user stories, acceptance criteria, and success metrics.",
    project: "SaaS Onboarding",
  },
  {
    _id: "2",
    title: "Sprint Board — Jira",
    caption: "Sprint 1 Jira board showing user story breakdown, estimation, and priority. 8 of 12 stories completed.",
    project: "SaaS Onboarding",
  },
  {
    _id: "3",
    title: "RACI Matrix",
    caption: "Stakeholder responsibility matrix for the API documentation project. Defined R/A/C/I for 6 workstreams.",
    project: "API Docs Revamp",
  },
  {
    _id: "4",
    title: "User Journey Map",
    caption: "End-to-end user journey for new trial users, mapping touchpoints, emotions, and pain points across 5 stages.",
    project: "SaaS Onboarding",
  },
  {
    _id: "5",
    title: "A/B Test Analysis Report",
    caption: "Statistical analysis of onboarding A/B test with 200 users. 95% confidence level, 28% improvement in activation.",
    project: "SaaS Onboarding",
  },
  {
    _id: "6",
    title: "Gantt Chart — 10 Week Plan",
    caption: "Project timeline for the API docs revamp, with dependencies, milestones, and resource allocation.",
    project: "API Docs Revamp",
  },
];

export default function ArtifactsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] animate-fade-in-up">
          PM Artifacts
        </h1>
        <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Real PM deliverables from my projects — PRDs, sprint boards, RACI matrices, and more.
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {artifacts.map((artifact, idx) => (
          <div
            key={artifact._id}
            className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 hover:-translate-y-1 overflow-hidden group cursor-pointer animate-fade-in-up"
            style={{ animationDelay: `${0.1 + idx * 0.05}s` }}
          >
            {/* Image placeholder */}
            <div className="h-48 bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-accent)]/10 flex items-center justify-center relative">
              <span className="text-4xl opacity-20">📄</span>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  View Artifact
                </span>
              </div>
            </div>

            <div className="p-5">
              <span className="text-xs font-medium text-[var(--color-accent)]">
                {artifact.project}
              </span>
              <h3 className="mt-1 text-base font-bold text-[var(--color-primary)]">
                {artifact.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--color-muted)] line-clamp-2">
                {artifact.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
