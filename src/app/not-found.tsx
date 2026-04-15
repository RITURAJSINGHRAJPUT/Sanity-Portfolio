import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-lg px-6 py-24 text-center">
      {/* 404 Number */}
      <div className="text-[120px] md:text-[160px] font-bold leading-none text-[var(--color-surface)]" style={{ WebkitTextStroke: "2px var(--color-accent)" }}>
        404
      </div>

      <h1 className="mt-4 text-2xl font-bold text-[var(--color-primary)]">
        Page Not Found
      </h1>
      <p className="mt-3 text-[var(--color-muted)]">
        Looks like this page doesn&apos;t exist. Maybe it was moved, or maybe
        the URL is wrong. Either way, let&apos;s get you back on track.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-btn)] text-white font-semibold text-sm"
          style={{ background: "var(--color-accent)" }}
        >
          <Home size={16} />
          Go Home
        </Link>
        <Link
          href="/projects"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-[var(--color-primary)] font-semibold text-sm hover:bg-[var(--color-surface)] transition-colors"
        >
          View Projects
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
