import Link from "next/link";
import { ArrowLeft, Clock, Calendar, Share2, ExternalLink, Globe, LinkIcon, Terminal, Hash, ArrowRight } from "lucide-react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Intel_Report // PM_ARCHITECT",
    description: "Deep-dive product teardown and strategic delivery analysis.",
  };
}

export default function BlogPostPage() {
  const post = {
    title: "A PM Architect's Teardown of Slack's Onboarding Lifecycle",
    category: "PRODUCT_STRATEGY",
    publishedAt: "2024-03-10",
    estimatedReadTime: 8,
    headings: [
      { text: "Onboarding_Fundamentals", style: "h2" },
      { text: "Slack_Execution_Flow", style: "h2" },
      { text: "Critical_Aha_Moment", style: "h3" },
      { text: "Structural_Deficiencies", style: "h2" },
      { text: "Strategic_Optimization", style: "h2" },
      { text: "Final_Verdict", style: "h2" },
    ],
  };

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <ReadingProgress />

      <article className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        {/* COMMAND_BACK */}
        <div className="mb-16 animate-fade-in-up">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-4 py-2 px-4 border-2 border-[#121212] bg-white text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            COMMAND_BACK // INTEL_REPORTS
          </Link>
        </div>

        {/* METADATA HEADER */}
        <header className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[var(--color-accent)] text-white text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {post.category}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#AAA]">
              REF_ID: // 2024_B_01
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-10 text-[var(--color-primary)]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-widest text-[#888] border-y-2 border-[#121212]/10 py-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#121212] text-white flex items-center justify-center text-[8px]">RS</div>
              RITURAJ_SINGH
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[var(--color-accent)]" />
              TIMESTAMP // MAR_2024
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[var(--color-accent)]" />
              LATENCY // {post.estimatedReadTime} MIN
            </div>
          </div>
        </header>

        {/* CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* MAIN PROSE */}
          <div className="lg:col-span-8 prose prose-neutral max-w-none">
            <div className="space-y-12">
              <section id="onboarding_fundamentals" className="animate-fade-in-up">
                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 bg-[var(--color-accent)]" />
                  Fundamentals_Analysis
                </h2>
                <p className="text-lg font-bold uppercase leading-relaxed text-[var(--color-muted)] text-justify tracking-wide">
                  Good onboarding isn&apos;t about showing every feature. It&apos;s about getting the user 
                  to their &quot;aha moment&quot; as quickly as possible — the instant they understand 
                  the product&apos;s value and feel motivated to continue.
                </p>
                <div className="bg-[#121212] text-white p-8 border-l-8 border-[var(--color-secondary)] my-10 font-mono text-sm leading-loose uppercase tracking-wide">
                  &quot;The best products don&apos;t teach users how to use features. They teach users 
                  how to achieve their goals.&quot; — ARCHITECT_REF_01
                </div>
              </section>

              <section id="slacks_execution_flow" className="animate-fade-in-up">
                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-6">
                  <span className="w-3 h-3 bg-[var(--color-primary)]" />
                  Execution_Flow_Log
                </h2>
                <p className="text-sm font-bold uppercase leading-relaxed text-[var(--color-muted)] opacity-80">
                  When you create a new Slack workspace, the product doesn&apos;t dump you into 
                  an empty channel. Instead, it walks you through a carefully designed sequence: 
                  naming your workspace, inviting teammates, and sending your first message.
                </p>
              </section>

              <section id="critical_aha_moment" className="animate-fade-in-up">
                <h3 className="text-xl font-black uppercase tracking-tight mb-4 text-[var(--color-accent)]">
                  // CRITICAL_AHA_MOMENT
                </h3>
                <p className="text-sm font-bold uppercase leading-relaxed text-[var(--color-muted)] opacity-80">
                  Slack&apos;s aha moment is the first real-time message exchange. The bot 
                  &quot;Slackbot&quot; sends you an immediate message, simulating engagement 
                  even before teammates join.
                </p>
              </section>

              <section id="structural_deficiencies" className="animate-fade-in-up">
                <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-6 border-b-2 border-[#121212] pb-4">
                  Deficiency_Report
                </h2>
                <p className="text-sm font-bold uppercase leading-relaxed text-[var(--color-muted)] opacity-80">
                  Despite its strengths, Slack&apos;s onboarding has gaps. Power features are buried. 
                  There&apos;s no role-based personalization — a developer and a marketer 
                  get the same static flow.
                </p>
              </section>

              <div className="p-10 border-4 border-[#121212] bg-[#f4f4f0] shadow-[8px_8px_0px_rgba(0,0,0,1)] animate-fade-in-up">
                <h2 className="text-xl font-black uppercase tracking-tighter mb-6 flex items-center gap-2">
                  <Terminal size={20} className="text-[var(--color-accent)]" /> 
                  PROPOSED_CHANGES
                </h2>
                <ul className="space-y-4 text-[11px] font-black uppercase tracking-[0.1em]">
                  <li className="flex items-start gap-4">
                    <span className="bg-[#121212] text-white px-2 py-0.5">01</span>
                    ROLE_BASED_PATHING // PERSONALIZE_BY_IDENT
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-[#121212] text-white px-2 py-0.5">02</span>
                    PROGRESSIVE_DISCOVERY // LATENT_FEATURE_ROLLOUT
                  </li>
                  <li className="flex items-start gap-4">
                    <span className="bg-[#121212] text-white px-2 py-0.5">03</span>
                    ACTIVATION_CHECKLIST // MILESTONE_TRACKING
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* TABLE OF CONTENTS SIDEBAR */}
          <aside className="lg:col-span-4 space-y-12 animate-fade-in-up">
            <div className="sticky top-32">
              <div className="bg-white border-2 border-[#121212] p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)]">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-[#888] border-b border-[#121212]/10 pb-2">
                  TOC_INDEX
                </h4>
                <nav className="space-y-4">
                  {post.headings.map((heading, idx) => (
                    <a
                      key={idx}
                      href={`#${heading.text.toLowerCase()}`}
                      className={`block text-[10px] font-black uppercase tracking-widest transition-all hover:text-[var(--color-accent)] ${
                        heading.style === "h3" ? "pl-4 opacity-60" : "opacity-100"
                      }`}
                    >
                      {idx + 1}. {heading.text}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Related Intel */}
              <div className="mt-12">
                <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-[#AAA]">RELATED_INTEL</h4>
                <div className="space-y-6">
                  {[
                    { title: "SQUAD_DELIVERY_V1", category: "FRAMEWORK" },
                    { title: "STRATEGIC_KPI_MAPPING", category: "STRATEGY" }
                  ].map((rel) => (
                    <div key={rel.title} className="group p-6 border-2 border-[#121212] bg-white hover:bg-[#121212] hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:shadow-none">
                       <span className="text-[8px] font-black tracking-widest text-[var(--color-accent)] mb-2 block">{rel.category}</span>
                       <h5 className="text-xs font-black uppercase tracking-tight">{rel.title}</h5>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        {/* SHARE & NAV */}
        <div className="mt-32 pt-12 border-t-2 border-[#121212] animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#888]">TRANSMIT:</span>
              <div className="flex gap-4">
                {[ExternalLink, Globe, LinkIcon].map((Icon, i) => (
                  <button key={i} className="p-3 border-2 border-[#121212] bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-6 py-4 px-10 bg-[#121212] text-white text-[11px] font-black uppercase tracking-[0.3em] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              INTEL_INDEX_SCAN
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[var(--color-secondary)]" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
