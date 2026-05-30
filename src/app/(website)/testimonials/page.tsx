import Link from "next/link";
import { ExternalLink, ArrowRight, MessageSquare, Quote, ShieldCheck, UserCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verified_Referrals // PM_ARCHITECT",
  description: "Endorsements from management, architectural collaborators, and project institutional leads.",
};

const testimonials = [
  {
    _id: "1",
    submitterName: "DR. ANANYA SHARMA",
    role: "ASSOCIATE PROFESSOR",
    organisation: "IIT BOMBAY",
    relationship: "PROFESSOR_COORD",
    quote: "One of the most structured and thoughtful students I've supervised. Rituraj treated every assignment like a real product — from user research to sprint planning. His ability to synthesize complex problems into actionable product specs is well beyond his experience level.",
    approvedAt: "2024-03-01",
  },
  {
    _id: "2",
    submitterName: "VIKRAM PATEL",
    role: "SR PROJECT MANAGER",
    organisation: "RAZORPAY",
    relationship: "DIRECT_MANAGER",
    quote: "Rituraj joined us for a summer internship and immediately impressed the team. He owned the onboarding metrics project end-to-end, from hypothesis formation to A/B test analysis. Ships fast, communicates clearly, and isn't afraid to push back with data.",
    approvedAt: "2024-03-05",
  },
  {
    _id: "3",
    submitterName: "PRIYA NAIR",
    role: "SYSTEMS DESIGNER",
    organisation: "FRESHWORKS",
    relationship: "PEER_COLLAB",
    quote: "The kind of PM every designer dreams of working with. Rituraj brings clear specs but remains genuinely open to design-driven solutions. Our collaboration on the API docs project was seamless — one of my best cross-functional experiences.",
    approvedAt: "2024-03-10",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b-2 border-[var(--color-border)] pb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black">
            VERIFIED <br /> REFERRALS
          </h1>
          <div className="w-1 h-32 bg-[var(--color-secondary)] hidden md:block mx-8 shadow-[4px_0px_0px_rgba(0,0,0,1)]" />
          <p className="text-sm md:text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-lg leading-relaxed">
            Institutional endorsements and professional logs 
            verified by institutional leads, direct managers, 
            and cross-functional delivery partners.
          </p>
        </div>

        {/* Top Action */}
        <div className="mb-20 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <Link
            href="/testimonials/submit"
            className="group inline-flex items-center gap-6 py-5 px-12 bg-[#121212] text-white text-[11px] font-black uppercase tracking-[0.4em] shadow-[10px_10px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
          >
            INITIATE_NEW_ENDORSEMENT <MessageSquare size={18} className="text-[var(--color-accent)]" />
          </Link>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {testimonials.map((t, idx) => (
            <div
              key={t._id}
              className="relative bg-white border-4 border-[#121212] p-10 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[5px] hover:translate-y-[5px] transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${0.2 + idx * 0.1}s` }}
            >
              <div className="absolute top-[-16px] right-10 px-4 py-1 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_rgba(0,0,0,1)]">
                VERIFIED_REFERRAL::{idx + 1}
              </div>

              <div className="mb-8">
                 <ShieldCheck size={32} className="text-[var(--color-accent)] opacity-20 mb-6" />
                 <p className="text-xl font-black uppercase tracking-tight leading-tight text-[var(--color-primary)]">
                    &quot;{t.quote}&quot;
                 </p>
              </div>

              <div className="pt-8 border-t-2 border-[#121212]/10 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <UserCheck size={14} className="text-[#10B981]" />
                    <span className="text-sm font-black uppercase tracking-widest">{t.submitterName}</span>
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[#888]">
                    {t.role} // {t.organisation}
                  </div>
                </div>
                
                <div className="px-3 py-1 bg-[#f4f4f0] border border-[#121212] text-[9px] font-black uppercase tracking-widest">
                  {t.relationship}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-32 pt-16 border-t border-[#121212] text-center border-dashed animate-fade-in-up">
           <h4 className="text-[10px] font-black uppercase tracking-[0.3em] mb-8 text-[#AAA]">COLLABORATION_LOGS</h4>
           <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-[var(--color-primary)]">
                 <span className="w-2 h-2 bg-[#10B981] rounded-full" />
                 READY_FOR_ENGAGEMENT
              </div>
              <Link
                href="/contact"
                className="group flex items-center gap-4 text-[11px] font-black uppercase tracking-[0.3em] hover:text-[var(--color-accent)] transition-colors"
              >
                ACCESS_COMM_MANIFEST <ArrowRight size={18} />
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
}
