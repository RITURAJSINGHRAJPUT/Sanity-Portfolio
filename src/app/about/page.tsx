import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Globe, Mail, MapPin, GraduationCap, Briefcase, Award } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Rituraj Singh",
  description: "Professional background and project management philosophy of Rituraj Singh.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
        {/* Photo & Quick Info */}
        <div className="md:col-span-1 text-center md:text-left">
          <div className="relative w-40 h-40 mx-auto md:mx-0 border-4 border-[var(--color-border)] overflow-hidden shadow-[var(--shadow-default)] animate-fade-in-up">
            <Image
              src="/profile.jpeg"
              alt="Rituraj Singh"
              fill
              className="object-cover object-top"
              sizes="160px"
            />
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-bold uppercase tracking-widest text-[var(--color-muted)]">
              <MapPin size={14} />
              India
            </div>
            <div className="flex items-center gap-2 justify-center md:justify-start text-xs font-black uppercase tracking-widest text-[var(--color-primary)]">
              <Briefcase size={14} />
              Project Manager
            </div>
          </div>

          {/* Social */}
          <div className="mt-6 flex gap-3 justify-center md:justify-start">
            {[
              { label: "LI", href: "https://linkedin.com/in/" },
              { label: "GH", href: "https://github.com/" },
              { label: "EM", href: "mailto:hello@rituraj.dev" },
            ].map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 border-2 border-[var(--color-border)] bg-white flex items-center justify-center text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] hover:bg-[var(--color-accent)] hover:text-white transition-all shadow-[var(--shadow-default)] hover:shadow-none"
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        {/* Bio */}
        <div className="md:col-span-2">
          <div className="inline-block px-3 py-1 bg-[var(--color-accent)] text-[8px] font-black uppercase tracking-[0.2em] text-white mb-6">
            Profile_Overview
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-10 leading-none">
            Rituraj Singh
          </h1>

          <div className="mt-6 space-y-6 text-sm font-bold uppercase tracking-wide text-[var(--color-body-text)] leading-relaxed animate-fade-in-up">
            <p>
              Rituraj Singh is a dedicated Project Manager with a focus on building resilient 
              product architectures and delivering high-impact solutions in the tech sector. 
              My methodology centers on the intersection of strategic foresight and tactical precision.
            </p>
            <p>
              With a background in Engineering (B.Tech), I bring a technical depth to project 
              governance that ensures alignment between product vision and engineering execution. 
              I specialize in managing the end-to-end lifecycle of complex digital products, 
              from systemic discovery to post-launch optimization.
            </p>
            <p>
              I am an advocate for Data-Driven Governance and Agile Orchestration. 
              My goal is to minimize friction in the delivery pipeline while maximizing 
              value for stakeholders and end-users alike.
            </p>
          </div>

          {/* Highlights */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fade-in-up">
            {[
              {
                title: "Certified Delivery",
                desc: "Strategic PM, PSM I, and Jira Infrastructure Expert.",
              },
              {
                title: "Systems Architect",
                desc: "Focus on dependency mapping and risk mitigation.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="bg-[var(--color-background)] border-2 border-[var(--color-border)] p-6 shadow-[var(--shadow-default)]"
              >
                <p className="text-xs font-black text-[var(--color-accent)] uppercase tracking-widest mb-2">{title}</p>
                <p className="text-[10px] font-bold text-[var(--color-muted)] uppercase tracking-wider leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex gap-4 animate-fade-in-up">
            <Link
              href="/projects"
              className="px-8 py-4 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-widest border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] hover:shadow-none transition-all"
            >
              Analyze_Work
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 bg-white border-2 border-[var(--color-border)] text-[var(--color-primary)] text-xs font-black uppercase tracking-widest shadow-[var(--shadow-default)] hover:shadow-none transition-all"
            >
              Contact_Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
