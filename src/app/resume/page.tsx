import Link from "next/link";
import { Download, FileText, Calendar } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resume",
  description: "Download my latest resume — PM Intern, Tech Industry.",
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] animate-fade-in-up">
          Resume
        </h1>
        <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          A concise overview of my experience, skills, and education.
        </p>
      </div>

      {/* Resume Card */}
      <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-default)] p-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-[var(--radius-card)] bg-[var(--color-accent)]/10 flex items-center justify-center">
            <FileText size={24} className="text-[var(--color-accent)]" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--color-primary)]">
              Rituraj — PM Resume
            </h2>
            <p className="text-sm text-[var(--color-muted)] flex items-center gap-1.5">
              <Calendar size={12} />
              Last updated: April 2026
            </p>
          </div>
        </div>

        {/* PDF Embed placeholder */}
        <div className="h-[600px] bg-[var(--color-surface)] rounded-[var(--radius-btn)] flex items-center justify-center border border-[var(--color-border)]">
          <div className="text-center">
            <FileText size={48} className="text-[var(--color-muted)] mx-auto mb-3" />
            <p className="text-sm text-[var(--color-muted)]">
              Resume PDF will be embedded here
            </p>
            <p className="text-xs text-[var(--color-muted)] mt-1">
              Upload your resume.pdf to /public or manage via Sanity CMS
            </p>
          </div>
        </div>

        {/* Download Button */}
        <div className="mt-6 flex justify-center">
          <a
            href="/resume.pdf"
            download
            id="resume-download"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-btn)] text-white font-semibold text-sm transition-all duration-200 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
            style={{ background: "var(--color-accent)" }}
          >
            <Download size={16} />
            Download Resume (PDF)
          </a>
        </div>
      </div>

      {/* Quick Links */}
      <div className="mt-10 text-center text-sm text-[var(--color-muted)]">
        <p>
          Want to learn more? Check out my{" "}
          <Link href="/projects" className="text-[var(--color-accent)] font-medium hover:underline">
            case studies
          </Link>{" "}
          or{" "}
          <Link href="/contact" className="text-[var(--color-accent)] font-medium hover:underline">
            get in touch
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
