import type { Metadata } from "next";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Professional certifications and completed courses relevant to product management.",
};

const certifications = [
  {
    name: "Google Project Management Certificate",
    issuer: "Google / Coursera",
    dateEarned: "2026-01-15",
    credentialId: "CERT-GPM-2026",
    verifyUrl: "https://coursera.org/verify/",
    inProgress: false,
  },
  {
    name: "Professional Scrum Master I (PSM I)",
    issuer: "Scrum.org",
    dateEarned: "2026-02-20",
    credentialId: "PSM-I-12345",
    verifyUrl: "https://scrum.org/certificates/",
    inProgress: false,
  },
  {
    name: "Atlassian Jira Fundamentals",
    issuer: "Atlassian University",
    dateEarned: "2025-11-10",
    credentialId: "JIRA-FUND-2025",
    verifyUrl: "https://university.atlassian.com/",
    inProgress: false,
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    dateEarned: "",
    credentialId: "",
    verifyUrl: "",
    inProgress: true,
  },
  {
    name: "Google Data Analytics Certificate",
    issuer: "Google / Coursera",
    dateEarned: "",
    credentialId: "",
    verifyUrl: "",
    inProgress: true,
  },
];

export default function CertificationsPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-5xl font-bold text-[var(--color-primary)] animate-fade-in-up">
          Certifications
        </h1>
        <p className="mt-4 text-[var(--color-muted)] max-w-xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Professional certifications that back up my PM skills with industry-recognized credentials.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[var(--color-border)] md:left-1/2 md:-translate-x-px" />

        <div className="space-y-8">
          {certifications.map((cert, idx) => (
            <div
              key={cert.name}
              className="relative pl-14 md:pl-0 animate-fade-in-up"
              style={{ animationDelay: `${0.1 + idx * 0.1}s` }}
            >
              {/* Dot */}
              <div
                className={`absolute left-4 w-5 h-5 rounded-full border-2 md:left-1/2 md:-translate-x-1/2 ${
                  cert.inProgress
                    ? "bg-white border-[var(--color-warning)] animate-pulse-glow"
                    : "bg-[var(--color-accent)] border-[var(--color-accent)]"
                }`}
                style={{ top: "1.5rem" }}
              />

              {/* Card */}
              <div
                className={`bg-white rounded-[var(--radius-card)] p-5 shadow-[var(--shadow-default)] hover:shadow-[var(--shadow-hover)] transition-all duration-200 ${
                  idx % 2 === 0 ? "md:mr-[calc(50%+1.5rem)]" : "md:ml-[calc(50%+1.5rem)]"
                }`}
              >
                {cert.inProgress && (
                  <span className="inline-block px-2.5 py-0.5 text-xs font-semibold rounded-[var(--radius-badge)] bg-[var(--color-warning)]/10 text-[var(--color-warning)] mb-2">
                    In Progress
                  </span>
                )}
                <h3 className="text-base font-bold text-[var(--color-primary)]">
                  {cert.name}
                </h3>
                <p className="text-sm text-[var(--color-muted)] mt-1">
                  {cert.issuer}
                </p>
                {cert.dateEarned && (
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    Earned:{" "}
                    {new Date(cert.dateEarned).toLocaleDateString("en-US", {
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                )}
                {cert.credentialId && (
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    ID: {cert.credentialId}
                  </p>
                )}
                {cert.verifyUrl && (
                  <a
                    href={cert.verifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-[var(--color-accent)] hover:text-[var(--color-accent-light)] transition-colors"
                  >
                    Verify
                    <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
