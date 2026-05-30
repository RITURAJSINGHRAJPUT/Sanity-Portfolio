"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Send, CheckCircle } from "lucide-react";

export default function TestimonialSubmitPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    role: "",
    organisation: "",
    relationship: "",
    linkedinUrl: "",
    email: "",
    quote: "",
    consent: false,
  });

  const charCount = formData.quote.length;
  const maxChars = 600;
  const minChars = 30;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would POST to /api/testimonials/submit
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-6 py-24 text-center">
        <div className="w-16 h-16 mx-auto rounded-full bg-[var(--color-success)]/10 flex items-center justify-center mb-6">
          <CheckCircle size={32} className="text-[var(--color-success)]" />
        </div>
        <h1 className="text-2xl font-bold text-[var(--color-primary)]">
          Thank You!
        </h1>
        <p className="mt-3 text-[var(--color-muted)]">
          Your testimonial has been submitted and will be reviewed within 48 hours.
          You&apos;ll receive a confirmation email shortly.
        </p>
        <Link
          href="/testimonials"
          className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--radius-btn)] text-white text-sm font-semibold"
          style={{ background: "var(--color-accent)" }}
        >
          View Testimonials
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-12 md:py-16">
      {/* Back Link */}
      <Link
        href="/testimonials"
        className="inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-accent)] transition-colors mb-8"
      >
        <ArrowLeft size={14} />
        Back to Testimonials
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)]">
        Leave a Testimonial
      </h1>
      <p className="mt-2 text-[var(--color-muted)]">
        Your testimonial will be reviewed before being published. No account
        required — just fill in the form below.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
            Full Name <span className="text-[var(--color-error)]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors"
            placeholder="e.g. Dr. Ananya Sharma"
          />
        </div>

        {/* Role & Organisation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
              Role / Title <span className="text-[var(--color-error)]">*</span>
            </label>
            <input
              type="text"
              id="role"
              name="role"
              required
              value={formData.role}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors"
              placeholder="e.g. Associate Professor"
            />
          </div>
          <div>
            <label htmlFor="organisation" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
              Organisation <span className="text-[var(--color-error)]">*</span>
            </label>
            <input
              type="text"
              id="organisation"
              name="organisation"
              required
              value={formData.organisation}
              onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors"
              placeholder="e.g. IIT Bombay"
            />
          </div>
        </div>

        {/* Relationship */}
        <div>
          <label htmlFor="relationship" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
            Relationship to Candidate <span className="text-[var(--color-error)]">*</span>
          </label>
          <select
            id="relationship"
            name="relationship"
            required
            value={formData.relationship}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors bg-white"
          >
            <option value="">Select relationship...</option>
            <option value="Professor">Professor</option>
            <option value="Manager">Manager</option>
            <option value="Peer">Peer</option>
            <option value="Collaborator">Collaborator</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* LinkedIn */}
        <div>
          <label htmlFor="linkedinUrl" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
            LinkedIn URL <span className="text-xs text-[var(--color-muted)]">(optional)</span>
          </label>
          <input
            type="url"
            id="linkedinUrl"
            name="linkedinUrl"
            value={formData.linkedinUrl}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors"
            placeholder="https://linkedin.com/in/your-profile"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
            Email Address <span className="text-[var(--color-error)]">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors"
            placeholder="you@example.com"
          />
          <p className="mt-1 text-xs text-[var(--color-muted)]">
            For notifications only — never displayed publicly.
          </p>
        </div>

        {/* Testimonial Text */}
        <div>
          <label htmlFor="quote" className="block text-sm font-medium text-[var(--color-primary)] mb-1.5">
            Testimonial <span className="text-[var(--color-error)]">*</span>
          </label>
          <textarea
            id="quote"
            name="quote"
            required
            rows={5}
            minLength={minChars}
            maxLength={maxChars}
            value={formData.quote}
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-[var(--radius-btn)] border border-[var(--color-border)] text-sm focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] outline-none transition-colors resize-none"
            placeholder="Share your experience working with me..."
          />
          <div className="flex justify-between mt-1">
            <p className="text-xs text-[var(--color-muted)]">
              Min {minChars} characters
            </p>
            <p
              className={`text-xs font-medium ${
                charCount > maxChars
                  ? "text-[var(--color-error)]"
                  : charCount >= minChars
                  ? "text-[var(--color-success)]"
                  : "text-[var(--color-muted)]"
              }`}
            >
              {charCount}/{maxChars}
            </p>
          </div>
        </div>

        {/* Consent */}
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            required
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-accent)] focus:ring-[var(--color-accent)]"
          />
          <label htmlFor="consent" className="text-sm text-[var(--color-muted)]">
            I consent to this testimonial being displayed on Rituraj&apos;s portfolio website.{" "}
            <span className="text-[var(--color-error)]">*</span>
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-[var(--radius-btn)] text-white font-semibold text-sm transition-all duration-200 hover:shadow-[var(--shadow-glow)] hover:-translate-y-0.5"
          style={{ background: "var(--color-accent)" }}
        >
          <Send size={16} />
          Submit Testimonial
        </button>
      </form>
    </div>
  );
}
