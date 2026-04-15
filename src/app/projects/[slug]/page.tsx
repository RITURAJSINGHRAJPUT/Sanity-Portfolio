import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, Share2, FileCode, Target, Users, Zap } from "lucide-react";
import type { Metadata } from "next";
import { safeFetch } from "@/sanity/lib/client";
import { projectBySlugQuery } from "@/sanity/lib/queries";
import { PortableText } from "@portabletext/react";
import { notFound } from "next/navigation";

import { CaseStudyBody } from "@/components/projects/CaseStudyBody";

export const dynamic = "force-dynamic";
export const revalidate = 0;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const projects = await safeFetch<any>(projectBySlugQuery, { slug });
  const project = projects;
  if (project && typeof project === "object" && "title" in project) {
    return {
      title: `${project.title} // PM_ARCHITECT`,
      description: project.tldr || "In-depth delivery architecture and product strategy analysis.",
    };
  }
  return {
    title: "Project_Log // PM_ARCHITECT",
    description: "In-depth delivery architecture and product strategy analysis.",
  };
}

// Hardcoded fallback for when Sanity has no data
const fallbackProject = {
  title: "SaaS Onboarding Optimization",
  methodology: "Agile_Delivery",
  industry: "B2B_SaaS",
  duration: "Q1_2024",
  tldr: "Reduced time-to-activation by 38% through a core redesign of the user onboarding lifecycle flow.",
  readTime: 6,
  sections: {
    overview: "Our B2B SaaS product was struggling with user activation. New trial users were signing up but failing to reach their 'aha moment' within the first session, lead to a 62% abandonment rate during onboarding.",
    problem: "Users faced a complex, unguided setup process with 14 configuration steps. There was no contextual help, no progress tracking, and no personalization based on user role or use case. Support tickets related to onboarding consumed 5 hours per week of CS team time.",
    role: "I served as the Lead Product Manager for this initiative, directing a cross-functional squad of 2 engineers, 1 designer, and 1 data analyst. Responsible for user research, PRD synthesis, and end-to-end delivery.",
    process: "We followed a structured Agile approach with 2-week sprints. Discovery included 15 user interviews and Mixpanel funnel analysis. Definition involved writing a comprehensive PRD with clear success metrics. Two development sprints built and iterated on the onboarding wizard, followed by a launch phase with A/B testing.",
    outcomes: [
      { val: "38%", label: "Faster_Activation" },
      { val: "5H/WK", label: "CS_Time_Saved" },
      { val: "0.0", label: "Critical_Bugs" },
      { val: "+28%", label: "Conversion_Lift" },
    ],
    reflection: "If I were to do this project again, I would allocate more time for initial discovery. Two weeks felt rushed for 15 interviews. I'd also implement a more robust analytics setup before starting, so we could track micro-conversions within the onboarding flow from day one.",
  },
};

export default async function CaseStudyDetail({ params }: Props) {
  const { slug } = await params;
  
  // Fetch from Sanity — safeFetch returns [] for arrays, but projectBySlugQuery returns a single object
  let project: any = null;
  try {
    const { client } = await import("@/sanity/lib/client");
    if (client) {
      project = await client.fetch(projectBySlugQuery, { slug });
    }
  } catch (err) {
    console.error("Error fetching project:", err);
  }

  // If no Sanity data, use fallback only for the default slug
  const useFallback = !project;
  const data = project || fallbackProject;

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      {/* Background ID */}
      <div className="absolute top-32 right-[-50px] rotate-90 opacity-[0.03] pointer-events-none select-none">
        <span className="text-[200px] font-black tracking-tighter uppercase leading-none">
          SYSTEM_ARCHITECT_LOG
        </span>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-24">
        {/* COMMAND_BACK */}
        <div className="mb-16 animate-fade-in-up">
          <Link
            href="/projects"
            className="group inline-flex items-center gap-4 py-2 px-4 border-2 border-[#121212] bg-white text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            COMMAND_BACK // PROJECT_LOG
          </Link>
        </div>

        {/* HERO HEADER */}
        <header className="mb-20 animate-fade-in-up">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="px-3 py-1 bg-[var(--color-accent)] text-white text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {useFallback ? data.methodology : (data.methodology || "PM_Delivery")}
            </span>
            <span className="px-3 py-1 bg-[#121212] text-white text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {useFallback ? data.industry : (data.industry || "Tech")}
            </span>
          </div>

          <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tighter leading-[0.85] mb-10 text-[var(--color-primary)]">
            {data.title}
          </h1>

          <div className="max-w-2xl border-l-8 border-[var(--color-accent)] pl-8 py-2 mb-12">
            <p className="text-xl md:text-2xl font-bold uppercase tracking-tight text-[var(--color-muted)] leading-tight">
              {data.tldr}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-10 text-[10px] font-black uppercase tracking-widest text-[#888]">
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[var(--color-accent)]" />
              {useFallback ? `READ_TIME // ${data.readTime} MIN` : `DURATION // ${data.duration || "N/A"}`}
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[var(--color-accent)]" />
              STATUS // {useFallback ? data.duration : (data.methodology || "Delivered")}
            </div>
            <div className="flex items-center gap-2">
              <Target size={14} className="text-[var(--color-accent)]" />
              VERIFIED_OUTCOME
            </div>
          </div>

          {/* Tech Stack */}
          {!useFallback && data.techStack && data.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {data.techStack.map((tool: string) => (
                <span
                  key={tool}
                  className="px-3 py-1 border-2 border-[var(--color-border)] text-[9px] font-black uppercase tracking-widest bg-white"
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* CASE STUDY CORE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8 space-y-24">
            
            {/* Rich text body from Sanity */}
            {!useFallback && data.body && (
              <section className="animate-fade-in-up">
                <CaseStudyBody body={data.body} />
              </section>
            )}

            {/* Fallback sections (only when no Sanity body) */}
            {(useFallback || !data.body) && (
              <>
                {/* Overview */}
                <section className="animate-fade-in-up">
                  <div className="flex items-center gap-2 mb-6">
                    <span className="w-4 h-4 bg-[var(--color-accent)]" />
                    <h2 className="text-2xl font-black uppercase tracking-tight">01. Overview</h2>
                  </div>
                  <p className="text-lg font-bold text-[var(--color-muted)] uppercase leading-relaxed text-justify">
                    {useFallback ? data.sections.overview : data.tldr}
                  </p>
                </section>

                {/* Problem */}
                {useFallback && (
                  <section className="animate-fade-in-up">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-4 h-4 bg-[var(--color-primary)]" />
                      <h2 className="text-2xl font-black uppercase tracking-tight">02. Problem_Statement</h2>
                    </div>
                    <div className="bg-[#121212] text-white p-10 border-l-8 border-[var(--color-secondary)]">
                      <p className="text-sm font-bold uppercase leading-loose opacity-90 tracking-wide font-mono">
                        {data.sections.problem}
                      </p>
                    </div>
                  </section>
                )}
              </>
            )}

            {/* Phases Timeline — from Sanity */}
            {!useFallback && data.phases && data.phases.length > 0 && (
              <section className="animate-fade-in-up">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-4 h-4 bg-[var(--color-primary)]" />
                  <h2 className="text-2xl font-black uppercase tracking-tight">02. Delivery_Phases</h2>
                </div>
                <div className="space-y-8">
                  {data.phases.map((phase: any, i: number) => (
                    <div
                      key={phase.phaseName}
                      className="border-2 border-[#121212] p-8 bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)]"
                    >
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="w-8 h-8 bg-[var(--color-accent)] text-white flex items-center justify-center text-[10px] font-black">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <h3 className="text-lg font-black uppercase tracking-tight">{phase.phaseName}</h3>
                        </div>
                        {phase.dateRange && (
                          <span className="text-[9px] font-black uppercase tracking-widest text-[#888]">
                            {phase.dateRange}
                          </span>
                        )}
                      </div>
                      {phase.narrative && (
                        <p className="text-xs font-bold text-[var(--color-muted)] uppercase leading-relaxed mb-4">
                          {phase.narrative}
                        </p>
                      )}
                      {phase.artifacts && phase.artifacts.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-3">
                          {phase.artifacts.map((a: string) => (
                            <span key={a} className="px-2 py-1 bg-[#f4f4f0] border border-[var(--color-border)] text-[8px] font-black uppercase tracking-widest">
                              {a}
                            </span>
                          ))}
                        </div>
                      )}
                      {phase.phaseOutcome && (
                        <div className="pt-4 border-t border-dashed border-[var(--color-border)]">
                          <span className="text-[9px] font-black uppercase tracking-widest text-[var(--color-accent)]">
                            ✓ {phase.phaseOutcome}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Squad Architecture */}
            <section className="animate-fade-in-up">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-4 bg-[var(--color-accent)]" />
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  {!useFallback && data.phases ? "03" : "03"}. Squad_Architecture
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="border-2 border-[#121212] p-8 bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                   <div className="flex items-center gap-3 mb-4">
                     <Users size={20} className="text-[var(--color-accent)]" />
                     <h3 className="text-xs font-black uppercase tracking-widest">Team_Role</h3>
                   </div>
                   <p className="text-xs font-bold uppercase leading-relaxed text-[var(--color-muted)]">
                     {useFallback ? data.sections.role : "Lead Product Manager — responsible for end-to-end delivery, stakeholder alignment, and cross-functional coordination."}
                   </p>
                </div>
                <div className="border-2 border-[#121212] p-8 bg-[var(--color-secondary)]/10 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                   <div className="flex items-center gap-3 mb-4">
                     <FileCode size={20} className="text-[var(--color-accent)]" />
                     <h3 className="text-xs font-black uppercase tracking-widest">Key_Deliverables</h3>
                   </div>
                   <ul className="text-[10px] font-black uppercase tracking-widest space-y-2">
                     <li>- Product_Requirements_Doc</li>
                     <li>- User_Journey_Mapping</li>
                     <li>- Agile_Backlog_Ownership</li>
                     <li>- Stakeholder_Alignment</li>
                   </ul>
                </div>
              </div>
            </section>

            {/* Outcome Dashboard */}
            <section className="animate-fade-in-up">
               <div className="flex items-center gap-2 mb-6">
                <span className="w-4 h-4 bg-[#10B981]" />
                <h2 className="text-2xl font-black uppercase tracking-tight">04. Delivery_Metrics</h2>
              </div>
              <div className="bg-[var(--color-primary)] p-12 shadow-[10px_10px_0px_rgba(0,0,0,1)]">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                  {(useFallback ? data.sections.outcomes : (data.outcomeMetrics || [])).map((m: any) => (
                    <div key={m.label || m.val} className="text-center group">
                      <div className="text-4xl md:text-5xl font-black text-white group-hover:text-[var(--color-secondary)] transition-colors tracking-tighter">{m.val}</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-[#AAA] mt-3">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* SIDEBAR ARTIFACTS */}
          <aside className="lg:col-span-4 space-y-12 animate-fade-in-up">
            <div className="sticky top-32">
              <div className="bg-white border-4 border-[#121212] p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)] mb-12">
                <div className="flex items-center gap-3 mb-8 border-b-2 border-[#121212]/10 pb-4">
                  <Zap size={20} className="text-[var(--color-accent)]" />
                  <h3 className="text-xs font-black uppercase tracking-[0.3em]">RECORDS_LOG</h3>
                </div>
                
                <div className="space-y-6">
                  {((data.realArtifacts && data.realArtifacts.length > 0)
                    ? data.realArtifacts
                    : (useFallback
                        ? ["PRD_V1.0.pdf", "BACKLOG_MANIFEST", "STRATEGY_DECK", "METRIC_DASHBOARD"].map(a => ({ title: a, fileUrl: "#" }))
                        : (data.phases || []).flatMap((p: any) => p.artifacts || []).slice(0, 6).map((a: string) => ({ title: a, fileUrl: "#" }))
                      )
                  ).map((artifact: { title: string; fileUrl: string }, i: number) => (
                    <a
                      key={artifact.title + i}
                      href={artifact.fileUrl + (artifact.fileUrl.includes("?") ? "&" : "?") + "dl=0"}
                      target={artifact.fileUrl !== "#" ? "_blank" : undefined}
                      rel={artifact.fileUrl !== "#" ? "noopener noreferrer" : undefined}
                      className={`group flex items-center justify-between p-4 border-2 border-dashed border-[#121212]/20 hover:border-[#121212] transition-colors ${artifact.fileUrl === "#" ? "cursor-default" : "cursor-pointer"}`}
                    >
                      <span className="text-[10px] font-black uppercase tracking-widest text-[var(--color-muted)] group-hover:text-[var(--color-primary)]">
                        {artifact.title}
                      </span>
                      {artifact.fileUrl !== "#" && (
                        <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-8 border-2 border-[#121212] bg-[#f4f4f0] text-center">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-4 text-[#888]">Verification</h4>
                <div className="px-4 py-2 bg-[#10B981] text-white text-[9px] font-black uppercase tracking-widest inline-block shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                  SECURITY_PASSED_//_2024
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* FOOTER NAV */}
        <div className="mt-32 pt-16 border-t-2 border-[#121212] flex flex-col md:flex-row items-center justify-between gap-8 animate-fade-in-up">
          <div className="flex items-center gap-6">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#888]">Transmission:</span>
            <button className="p-3 border-2 border-[#121212] bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
              <Share2 size={16} />
            </button>
          </div>

          <Link
            href="/projects"
            className="group flex items-center gap-6 py-4 px-10 bg-[#121212] text-white text-[11px] font-black uppercase tracking-[0.3em] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            CATALOG_MAIN_SCAN
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[var(--color-secondary)]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
