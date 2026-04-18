"use client";

import { useState } from "react";
import Link from "next/link";
import { Send, CheckCircle, Calendar, Mail, ExternalLink, Globe, Terminal, ShieldCheck } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
    source: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("contact_submit");
    // In production, POST to /api/contact
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  if (submitted) {
    return (
      <div className="relative overflow-hidden grid-bg min-h-screen flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white border-4 border-[#121212] p-12 shadow-[12px_12px_0px_rgba(0,0,0,1)] text-center animate-fade-in-up">
          <div className="w-16 h-16 mx-auto bg-[#10B981] border-2 border-[#121212] flex items-center justify-center mb-8 shadow-[4px_4px_0px_rgba(0,0,0,1)]">
            <CheckCircle size={32} className="text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-black uppercase tracking-tighter mb-4">
            TRANSMISSION_<br />ACKNOWLEDGED
          </h3>
          <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-muted)] mb-10 leading-relaxed">
            Your dispatch has been logged in the system. 
            Estimated response latency: 24-48 business hours.
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-10 py-4 bg-[#121212] text-white text-[10px] font-black uppercase tracking-[0.3em] shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all"
          >
            RETURN_HOME
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b-2 border-[var(--color-border)] pb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black">
            COMMS <br /> DISPATCH
          </h1>
          <div className="w-1 h-32 bg-[var(--color-secondary)] hidden md:block mx-8 shadow-[4px_0px_0px_rgba(0,0,0,1)]" />
          <p className="text-sm md:text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-lg leading-relaxed">
            Initiate a direct communication link for project 
            collaborations, institutional inquiries, or strategic 
            delivery alignment.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Dispatch Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="bg-white border-4 border-[#121212] p-8 md:p-12 shadow-[12px_12px_0px_rgba(0,0,0,1)] space-y-8 animate-fade-in-up">
              <div className="flex items-center gap-3 mb-8 border-b-2 border-[#121212]/10 pb-4">
                <Terminal size={20} className="text-[var(--color-accent)]" />
                <h2 className="text-xs font-black uppercase tracking-[0.3em]">NEW_TRANSMISSION</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] opacity-60">
                    FULL_NAME::REQ
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#121212] bg-[#f4f4f0] text-xs font-bold uppercase focus:bg-white focus:outline-none transition-all"
                    placeholder="ENTER_NAME"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] opacity-60">
                    EMAIL_ADDR::REQ
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-[#121212] bg-[#f4f4f0] text-xs font-bold uppercase focus:bg-white focus:outline-none transition-all"
                    placeholder="ADDR_IDENT"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] opacity-60">
                  CATEGORY::IDENT
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#121212] bg-[#f4f4f0] text-xs font-black uppercase focus:bg-white focus:outline-none transition-all appearance-none"
                >
                  <option value="">SELECT_SUBJECT</option>
                  <option value="Internship">INSTITUTIONAL_INQUIRY</option>
                  <option value="Collaboration">STRATEGIC_COLLAB</option>
                  <option value="Feedback">SYSTEM_FEEDBACK</option>
                  <option value="Other">OTHER_LOGS</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] opacity-60">
                  MESSAGE_PAYLOAD::REQ
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-[#121212] bg-[#f4f4f0] text-xs font-bold uppercase focus:bg-white focus:outline-none transition-all resize-none"
                  placeholder="INPUT_TEXT_DATA..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-4 py-5 bg-[var(--color-primary)] text-white text-[11px] font-black uppercase tracking-[0.4em] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
              >
                SUBMIT_DISPATCH <Send size={18} />
              </button>
            </form>
          </div>

          {/* Side Logs */}
          <div className="lg:col-span-5 space-y-10 animate-fade-in-up">
            <div className="bg-[#121212] p-10 text-white border-l-8 border-[var(--color-accent)] shadow-[10px_10px_0px_rgba(0,0,0,1)]">
              <h3 className="text-xl font-black uppercase tracking-tighter mb-6">DIRECT_LINK</h3>
              <div className="space-y-6">
                <a href="mailto:hello@rituraj.dev" className="group flex items-center justify-between p-4 border border-white/20 hover:border-white transition-all">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#AAA] group-hover:text-white">
                    <Mail size={16} className="text-[var(--color-accent)]" /> 
                    MAIL_SERVER
                  </div>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
                </a>
                <a href="https://linkedin.com/in/" className="group flex items-center justify-between p-4 border border-white/20 hover:border-white transition-all">
                  <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest text-[#AAA] group-hover:text-white">
                    <Globe size={16} className="text-[var(--color-accent)]" /> 
                    LINKEDIN_STRATA
                  </div>
                  <ExternalLink size={14} className="opacity-0 group-hover:opacity-100" />
                </a>
                <div className="pt-6 border-t border-white/10 mt-6 flex items-center gap-3">
                  <ShieldCheck size={18} className="text-[#10B981]" />
                  <span className="text-[9px] font-black uppercase tracking-[0.4em] text-[#666]">Secured_Transmission_Active</span>
                </div>
              </div>
            </div>

            <div className="p-10 border-4 border-[#121212] bg-[var(--color-secondary)]/10 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
              <h3 className="text-base font-black uppercase tracking-widest mb-4">LATENCY_ZERO</h3>
              <p className="text-[10px] font-bold uppercase leading-relaxed text-[var(--color-muted)] mb-8">
                Bypass the manifest and schedule a real-time voice 
                transmission via our scheduling gateway.
              </p>
              <a
                href="https://cal.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 py-4 px-8 bg-white border-2 border-[#121212] text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
              >
                BOOK_TIME <Calendar size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
