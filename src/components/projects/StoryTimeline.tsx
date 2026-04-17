"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Check, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

interface Phase {
  phaseName: string;
  dateRange: string;
  narrative: string;
  artifacts: string[];
  phaseOutcome: string;
}

interface OutcomeMetric {
  val: string;
  label: string;
}

interface Project {
  _id: string;
  title: string;
  tldr: string;
  methodology: string;
  industry: string;
  duration: string;
  phases: Phase[];
  outcomeMetrics: OutcomeMetric[];
}

interface StoryTimelineProps {
  projects: Project[];
}

export default function StoryTimeline({ projects }: StoryTimelineProps) {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const [activePhaseIdx, setActivePhaseIdx] = useState(0);

  if (!projects || projects.length === 0) {
    return (
      <div className="text-center py-24 px-6 bg-white border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] max-w-2xl mx-auto">
        <p className="text-[var(--color-muted)] font-bold uppercase tracking-widest text-xs">
          Archive_Status: Null
        </p>
      </div>
    );
  }

  const activeProject = projects[activeProjectIdx];
  const phases = activeProject.phases || [];
  const activePhase = phases[activePhaseIdx];
  const isLastPhase = activePhaseIdx === phases.length - 1;
  const progress =
    phases.length > 1
      ? (activePhaseIdx / (phases.length - 1)) * 100
      : 100;

  const handleTabSwitch = (idx: number) => {
    setActiveProjectIdx(idx);
    setActivePhaseIdx(0);
    trackEvent("story_tab_switch", { project: projects[idx].title });
  };

  const handlePhaseDotClick = (idx: number) => {
    setActivePhaseIdx(idx);
    trackEvent("story_phase_dot_click", {
      phase: phases[idx]?.phaseName || "",
    });
  };

  const handleNext = () => {
    if (isLastPhase) {
      trackEvent("story_outcomes_viewed", { project: activeProject.title });
    } else {
      setActivePhaseIdx((prev) => prev + 1);
      trackEvent("story_phase_next");
    }
  };

  const handlePrev = () => {
    if (activePhaseIdx > 0) setActivePhaseIdx((prev) => prev - 1);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      {/* ── Project Tabs ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full">
        {projects.map((project, idx) => (
          <button
            key={project._id}
            onClick={() => handleTabSwitch(idx)}
            className={cn(
              "w-full h-full flex items-center justify-center text-center px-4 py-3 text-[10px] lg:text-xs font-black uppercase tracking-widest transition-all border-2",
              idx === activeProjectIdx
                ? "bg-[var(--color-primary)] text-white border-[var(--color-primary)]"
                : "bg-white text-[var(--color-muted)] hover:text-[var(--color-primary)] border-[var(--color-border)]"
            )}
          >
            {project.title}
          </button>
        ))}
      </div>

      {/* ── Project Header ── */}
      <div className="bg-white border-2 border-[var(--color-border)] p-8 shadow-[var(--shadow-default)]">
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)]">Project_System_{activeProjectIdx + 1}</span>
          <div className="h-[2px] w-8 bg-[var(--color-border)] opacity-20" />
          {activeProject.methodology && (
            <span className="px-2 py-1 bg-black text-[8px] font-black text-white uppercase tracking-widest">
              {activeProject.methodology}
            </span>
          )}
        </div>
        <p className="text-md font-bold text-[var(--color-primary)] leading-tight uppercase max-w-3xl">
          {activeProject.tldr}
        </p>
      </div>

      {/* ── Phase Timeline Stepper ── */}
      {phases.length > 0 && (
        <div className="relative py-8 bg-[#f4f4f0] border-2 border-[var(--color-border)] px-4">
          <div className="flex items-center justify-between overflow-x-auto gap-4">
            {/* Background line */}
            <div className="absolute top-1/2 left-10 right-10 h-[4px] bg-[var(--color-border)] opacity-10 -translate-y-1/2 z-0" />
            
            {phases.map((phase, idx) => {
              const isCompleted = idx < activePhaseIdx;
              const isActive = idx === activePhaseIdx;

              return (
                <button
                  key={idx}
                  onClick={() => handlePhaseDotClick(idx)}
                  className="relative z-10 flex flex-col items-center gap-3 min-w-[100px] transition-transform active:scale-95"
                >
                  <div
                    className={cn(
                      "w-12 h-12 flex items-center justify-center text-sm font-black transition-all border-2",
                      isCompleted && "bg-[var(--color-accent)] border-[var(--color-accent)] text-white",
                      isActive && "bg-[var(--color-primary)] border-[var(--color-primary)] text-white",
                      !isActive && !isCompleted && "bg-white border-[var(--color-border)] text-[var(--color-muted)]"
                    )}
                  >
                    {idx + 1}
                  </div>
                  <span
                    className={cn(
                      "text-[9px] font-black uppercase tracking-widest text-center max-w-[80px]",
                      isActive ? "text-[var(--color-primary)]" : "text-[var(--color-muted)]"
                    )}
                  >
                    {phase.phaseName}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* ── Phase Content Card ── */}
      {activePhase && (
        <div className="bg-white border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] overflow-hidden">
          <div className="p-8 border-b-2 border-[var(--color-border)] bg-[var(--color-surface)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <h3 className="text-2xl font-black uppercase tracking-tight">
                PHASE 0{activePhaseIdx + 1}: {activePhase.phaseName}
              </h3>
              <div className="px-3 py-1 border border-[var(--color-border)] text-[10px] font-black uppercase tracking-widest text-[var(--color-muted)]">
                LOG::{activePhase.dateRange}
              </div>
            </div>
          </div>

          <div className="p-8">
            <p className="text-md font-bold text-[var(--color-primary)] leading-relaxed uppercase">
              {activePhase.narrative}
            </p>

            {activePhase.artifacts && activePhase.artifacts.length > 0 && (
              <div className="mt-10 pt-8 border-t-2 border-[var(--color-border)] border-dashed">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-accent)] mb-4">Output_Artifacts</div>
                <div className="flex flex-wrap gap-3">
                  {activePhase.artifacts.map((artifact) => (
                    <span
                      key={artifact}
                      className="px-3 py-2 bg-[var(--color-surface)] border-2 border-[var(--color-border)] text-[10px] font-black uppercase tracking-widest"
                    >
                      {artifact}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>

          {activePhase.phaseOutcome && (
            <div className="p-8 bg-[var(--color-accent)] text-white border-t-2 border-[var(--color-border)]">
              <div className="flex items-start gap-4">
                <ArrowUpRight size={24} className="shrink-0" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Phase_Outcome</div>
                  <p className="text-sm font-black uppercase leading-tight">
                    {activePhase.phaseOutcome}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── Navigation ── */}
      <div className="flex items-center justify-between pt-4">
        <button
          onClick={handlePrev}
          disabled={activePhaseIdx === 0}
          className={cn(
            "px-8 py-3 text-xs font-black uppercase tracking-widest border-2 transition-all",
            activePhaseIdx === 0
              ? "border-transparent text-[var(--color-muted)] cursor-not-allowed"
              : "border-[var(--color-border)] hover:bg-[var(--color-surface)]"
          )}
        >
          &lt; Previous_Stage
        </button>

        <button
          onClick={handleNext}
          className="px-8 py-3 bg-[var(--color-accent)] text-white text-xs font-black uppercase tracking-widest border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
        >
          {isLastPhase ? "Generate_Outcomes" : "Next_Stage >"}
        </button>
      </div>

      {/* ── Outcomes ── */}
      {isLastPhase && activeProject.outcomeMetrics?.length > 0 && (
        <div className="bg-[#121212] p-10 border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] text-white overflow-hidden relative">
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
              <span className="text-[12rem] font-black uppercase tracking-tighter leading-none select-none">DATA</span>
           </div>
           
           <div className="relative z-10">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--color-secondary)] mb-10">System_Output_Metrics</div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                {activeProject.outcomeMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="text-4xl font-black text-[var(--color-secondary)] leading-none">{metric.val}</div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-muted-foreground mt-2 opacity-60">{metric.label}</div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      )}
    </div>
  );
}
