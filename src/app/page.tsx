import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Briefcase, BookOpen, Award, MessageSquare } from "lucide-react";
import TypewriterText from "@/components/home/TypewriterText";
import StatsTicker from "@/components/home/StatsTicker";

// Placeholder data — will be replaced with Sanity data when connected
const heroData = {
  name: "Rituraj Singh",
  tagline: "Project Manager · Delivery Architect · Strategy · Agile",
  roles: [
    "Project Manager",
    "Agile Delivery Architect",
    "Strategic Product Partner",
    "Systems Thinker",
  ],
};

const stats = [
  { value: 5, label: "Case Studies", suffix: "" },
  { value: 3, label: "Certifications", suffix: "" },
  { value: 12, label: "Blog Posts", suffix: "+" },
  { value: 8, label: "Testimonials", suffix: "+" },
];

// Featured projects for preview
const featuredProjects = [
  {
    title: "SaaS Onboarding Optimization",
    description: "Reduced time-to-activation by 38% through a redesigned user onboarding flow using Agile sprints.",
    tag: "B2B SaaS",
    methodology: "Agile",
  },
  {
    title: "API Platform Documentation Revamp",
    description: "Led the developer docs overhaul, improving API adoption rates by 52% across 3 product lines.",
    tag: "Developer Tools",
    methodology: "Hybrid",
  },
  {
    title: "Data-Driven Growth Experiment",
    description: "Designed and executed 12 growth experiments, increasing MAU by 24% in one quarter.",
    tag: "Growth",
    methodology: "Discovery-only",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden grid-bg border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6 pt-24 pb-0 md:pt-32">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            {/* Left Content */}
            <div className="flex-1 max-w-2xl">
              <div className="inline-block px-3 py-1 bg-[#A88849] text-[8px] font-black uppercase tracking-[0.2em] text-white mb-6">
                Established 2024
              </div>
              
              <h1 className="leading-[0.85] text-[var(--color-primary)]">
                Strategic <br />
                Architect & <br />
                <span className="text-[var(--color-accent)]">Delivery <br /> Expert</span>
              </h1>
              
              <div className="mt-10 flex gap-6 items-start">
                <div className="w-[2px] h-16 bg-[var(--color-accent)]" />
                <p className="text-lg md:text-xl font-bold text-[var(--color-primary)] max-w-sm leading-tight uppercase">
                  Building high-performing teams and delivering 
                  complex digital products with precision and care.
                </p>
              </div>

              <div className="mt-12 mb-20 md:mb-32">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-4 px-8 py-4 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-widest border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0 transition-all"
                >
                  See My Latest Projects
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>

            {/* Right Image/Portrait placeholder */}
            <div className="relative flex-1 flex justify-center md:justify-end">
              <div className="relative w-full max-w-md aspect-[4/5]">
                <div className="relative w-full h-full border-2 border-[var(--color-border)] grayscale hover:grayscale-0 transition-all duration-500 overflow-hidden">
                  <Image
                    src="/profile.jpeg"
                    alt="Rituraj Singh – Project Manager & Delivery Architect"
                    fill
                    className="object-cover object-top"
                    priority
                    sizes="(max-width: 768px) 100vw, 448px"
                  />
                </div>
                {/* ID Badge overlay */}
                <div className="absolute -bottom-6 -left-6 bg-white border-2 border-[var(--color-border)] p-4 shadow-[var(--shadow-default)] z-10 w-40">
                  <div className="text-[8px] font-black text-[#888] uppercase tracking-widest mb-1">Architect_ID</div>
                  <div className="text-[10px] font-black text-[var(--color-primary)] uppercase tracking-wider">Lead_PM_09</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <StatsTicker stats={stats} />

      {/* ── Featured Projects Preview ── */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--color-primary)" }}>
              Featured Projects
            </h2>
            <p className="mt-3 text-[var(--color-muted)] max-w-xl mx-auto">
              Real-world product challenges solved with structured PM thinking, agile execution, and data-driven decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProjects.map((project, idx) => (
              <div
                key={project.title}
                className="bg-white border-2 border-[var(--color-border)] p-8 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Monospace Label */}
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] mb-6">
                  Case_Study_0{idx + 1}
                </div>

                {/* Title */}
                <h3 className="text-xl font-black uppercase tracking-tight text-[var(--color-primary)] mb-4 leading-none">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs font-bold text-[var(--color-muted)] leading-relaxed uppercase mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  <span className="px-2 py-1 border border-[var(--color-border)] text-[8px] font-black uppercase tracking-[0.1em]">
                    {project.tag}
                  </span>
                  <span className="px-2 py-1 border border-[var(--color-border)] text-[8px] font-black uppercase tracking-[0.1em]">
                    {project.methodology}
                  </span>
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-accent)]">
                  Execute_Analysis
                  <ArrowRight size={14} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
            >
              View All Projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Core Competencies ── */}
      <section className="py-24 bg-white border-b border-[var(--color-border)]">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-center gap-4 mb-16">
            <div className="w-16 h-[2px] bg-[var(--color-tertiary)]" />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tighter">
              Core_Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
            {/* Box 1 - Systemic Planning */}
            <div className="md:col-span-8 p-10 bg-[#f4f4f0] border-2 border-[var(--color-border)] shadow-[var(--shadow-default)]">
              <div className="w-12 h-12 flex items-center justify-center text-[var(--color-accent)] mb-8">
                <Briefcase size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase mb-4 tracking-tight">Systemic Planning</h3>
              <p className="text-sm font-bold text-[var(--color-muted)] max-w-md leading-relaxed uppercase mb-8">
                Mapping complex dependencies before the first line of code 
                is written. I specialize in identifying bottlenecks in the critical 
                path of large-scale infrastructure projects.
              </p>
              <div className="flex gap-2">
                {["Agile", "Kanban", "JIRA_PRO"].map(tag => (
                  <span key={tag} className="px-2 py-1 bg-black text-[8px] font-black text-white uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Box 2 - Team Orchestration (Yellow) */}
            <div className="md:col-span-4 p-10 bg-[var(--color-secondary)] border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center text-[var(--color-primary)]">
                <MessageSquare size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none mt-16">
                Team <br /> Orchestration
              </h3>
            </div>

            {/* Box 3 - Data-Driven Governance (Teal) */}
            <div className="md:col-span-4 p-10 bg-[var(--color-accent)] border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] text-white flex flex-col justify-between">
              <div className="w-12 h-12 flex items-center justify-center">
                <Award size={32} />
              </div>
              <h3 className="text-2xl font-black uppercase tracking-tight leading-none mt-16">
                Data-Driven <br /> Governance
              </h3>
            </div>

            {/* Box 4 - Lifecycle Management */}
            <div className="md:col-span-8 p-10 bg-[#e5e5e0] border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] flex flex-col md:flex-row items-center gap-10">
              <div className="w-24 h-24 border-2 border-dashed border-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)] shrink-0">
                <BookOpen size={40} />
              </div>
              <div>
                <h3 className="text-xl font-black uppercase mb-3 tracking-tight">Lifecycle Management</h3>
                <p className="text-xs font-bold text-[var(--color-muted)] leading-relaxed uppercase">
                  From discovery to post-launch optimization, ensuring every milestone 
                  translates to measurable business value and user satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ready to Build Better? ── */}
      <section className="py-24 mb-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden bg-[var(--color-accent-light)] p-12 md:p-20 border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background Text Overlay */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden h-full">
              <span className="text-[12rem] md:text-[20rem] font-black text-black opacity-10 uppercase tracking-tighter leading-none select-none">
                DELIVERY
              </span>
            </div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-4xl md:text-6xl font-black text-white leading-[0.9] mb-6">
                Ready to <br /> Build Better?
              </h2>
              <p className="text-sm md:text-md font-bold text-white uppercase tracking-wide opacity-80 leading-relaxed max-w-md mt-4">
                Let&apos;s discuss how architectural precision can 
                transform your next product delivery cycle.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-10 py-5 bg-[var(--color-tertiary)] text-white text-xs font-black uppercase tracking-widest border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] hover:shadow-none translate-x-[-4px] translate-y-[-4px] hover:translate-x-0 hover:translate-y-0 transition-all"
              >
                Start_Project
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
