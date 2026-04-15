"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../../sanity.config";
import { AlertTriangle, Terminal, ArrowRight, Settings } from "lucide-react";
import Link from "next/link";

export default function StudioPage() {
  // Sanity Project IDs can only contain a-z, 0-9 and dashes
  const projectId = config.projectId;
  const isConfigured = Boolean(projectId) && 
                      projectId !== "your_project_id" && 
                      /^[a-z0-9-]+$/.test(projectId);

  if (!isConfigured) {
    return (
      <div className="min-h-screen bg-[#FDFDF5] grid-bg flex items-center justify-center p-6">
        <div className="max-w-2xl w-full bg-white border-4 border-[#121212] p-8 md:p-12 shadow-[12px_12px_0px_rgba(0,0,0,1)] animate-fade-in-up">
          <div className="flex items-center gap-4 mb-10 pb-6 border-b-2 border-dashed border-[#121212]/20">
            <div className="w-12 h-12 bg-[#FFB703] border-2 border-[#121212] flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              <AlertTriangle size={24} strokeWidth={3} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1A4D43]">System_Status</div>
              <div className="text-xl font-black uppercase tracking-tight">Configuration_Required</div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-8">
            Studio_Link:: <br /> <span className="text-[#1A4D43]">Missing_ID</span>
          </h2>

          <div className="space-y-6 mb-12">
            <p className="text-sm font-bold uppercase tracking-wide text-[#555] leading-relaxed">
              The Project Management Architect Studio cannot initialize without a valid 
              Sanity Project ID. Your environment setup is currently incomplete.
            </p>

            <div className="bg-[#121212] p-6 text-[#10B981] font-mono text-xs leading-relaxed border-l-8 border-[#FFB703]">
              <div className="flex items-center gap-2 mb-2 opacity-50">
                <Terminal size={14} />
                <span>instruction_manual.log</span>
              </div>
              <ol className="list-decimal list-inside space-y-2">
                <li>CREATE .env.local IN ROOT DIRECTORY</li>
                <li>ADD NEXT_PUBLIC_SANITY_PROJECT_ID=&quot;your_id&quot;</li>
                <li>RESTART DEVELOPMENT SERVER (npm run dev)</li>
              </ol>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://manage.sanity.io" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 bg-[#1A4D43] text-white text-xs font-black uppercase tracking-widest border-2 border-[#121212] shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
            >
              Get Project ID <ArrowRight size={14} />
            </a>
            <Link
              href="/"
              className="px-8 py-4 bg-white border-2 border-[#121212] text-[#121212] text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all flex items-center justify-center gap-2"
            >
              <Settings size={14} /> Return_Home
            </Link>
          </div>
          
          <div className="mt-12 pt-6 border-t border-[#121212]/10 text-center">
             <span className="text-[9px] font-black uppercase tracking-[0.3em] text-[#AAA]">Verified_Industrial_Protocol // 2024</span>
          </div>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
