import type { Metadata } from "next";
import { safeFetch } from "@/sanity/lib/client";
import { allExperienceQuery } from "@/sanity/lib/queries";
import { Briefcase, GraduationCap, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Education & Experience",
  description: "Records of academic background, internships, and professional roles.",
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

interface Experience {
  _id: string;
  title: string;
  organization: string;
  type: "work" | "internship" | "education";
  startDate: string;
  endDate?: string;
  isCurrent: boolean;
  location?: string;
  description?: string;
}

const formatDate = (dateString?: string, isCurrent?: boolean) => {
  if (isCurrent) return "PRESENT";
  if (!dateString) return "UNKNOWN";
  
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { month: "short", year: "numeric" }).toUpperCase();
};

// Fallback data if Sanity is empty
const fallbackExperience: Experience[] = [
  {
    _id: "demo-1",
    title: "Project Manager",
    organization: "Tech Solutions Inc.",
    type: "work",
    startDate: "2024-01",
    isCurrent: true,
    location: "Remote",
    description: "Leading cross-functional agile teams to deliver enterprise SaaS applications. Reduced cycle time by 20% through optimized Kanban workflows.",
  },
  {
    _id: "demo-2",
    title: "Product Management Intern",
    organization: "InnovateTech",
    type: "internship",
    startDate: "2023-05",
    endDate: "2023-08",
    isCurrent: false,
    location: "San Francisco, CA",
    description: "Conducted user research and A/B testing on core onboarding flows, improving activation rate by 15%.",
  },
  {
    _id: "demo-3",
    title: "B.S. in Computer Science",
    organization: "State University",
    type: "education",
    startDate: "2020-08",
    endDate: "2024-05",
    isCurrent: false,
    location: "New York, NY",
    description: "Concentration in Systems Architecture and Human-Computer Interaction. GPA: 3.8/4.0.",
  }
];

export default async function ExperiencePage() {
  const sanityExperience = await safeFetch<Experience>(allExperienceQuery);
  const experiences = sanityExperience.length > 0 ? sanityExperience : fallbackExperience;

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="text-center mb-20 animate-fade-in-up">
          <div className="inline-block px-3 py-1 bg-[var(--color-primary)] text-[10px] font-black tracking-[0.2em] uppercase text-white mb-6">
            // BACKGROUND_LOG
          </div>
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[var(--color-primary)] mb-6">
            Education <br /> & Experience
          </h1>
          <p className="text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-xl mx-auto leading-relaxed">
            A chronological timeline of academic foundations, 
            internship developments, and professional delivery roles.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="space-y-12">
          {experiences.map((exp: Experience, idx: number) => {
            const isEducation = exp.type === "education";
            const Icon = isEducation ? GraduationCap : Briefcase;
            
            return (
              <div
                key={exp._id}
                className="relative bg-white border-2 border-[var(--color-border)] p-6 md:p-10 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 animate-fade-in-up flex flex-col md:flex-row gap-6 md:gap-10"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* ID Tag */}
                <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--color-border)] text-white text-[9px] font-black uppercase tracking-widest translate-x-[2px] translate-y-[-2px]">
                  REC::{idx + 1}
                </div>

                {/* Left Side: Timeline / Meta */}
                <div className="md:w-1/3 flex flex-col pt-2 border-l-4 pl-4 md:border-l-0 md:pl-0 border-[var(--color-primary)] md:border-transparent shrink-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 flex items-center justify-center border-2 border-[var(--color-border)] text-[var(--color-primary)] ${isEducation ? 'bg-[#f4f4f0]' : 'bg-[var(--color-surface)]'}`}>
                      <Icon size={20} />
                    </div>
                    <span className="px-2 py-1 bg-[var(--color-primary)] text-white text-[8px] font-black uppercase tracking-widest">
                      {exp.type}
                    </span>
                  </div>
                  
                  <div className="text-xl md:text-2xl font-black uppercase tracking-tighter text-[var(--color-accent)] leading-none mb-2">
                    {formatDate(exp.startDate)} <br />
                    — <br />
                    {formatDate(exp.endDate, exp.isCurrent)}
                  </div>
                  
                  {exp.location && (
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[var(--color-muted)] mt-auto">
                      <MapPin size={12} />
                      {exp.location}
                    </div>
                  )}
                </div>

                {/* Right Side: Content */}
                <div className="md:w-2/3 border-t-2 md:border-t-0 md:border-l-2 border-[var(--color-border)] border-dashed pt-6 md:pt-0 md:pl-10 flex flex-col justify-center">
                  <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[var(--color-primary)] mb-2 leading-none break-words">
                    {exp.title}
                  </h2>
                  <div className="text-sm font-black uppercase tracking-widest text-[#888] mb-6">
                    @{exp.organization}
                  </div>
                  
                  {exp.description && (
                    <p className="text-xs md:text-sm font-bold text-[var(--color-muted)] uppercase leading-relaxed whitespace-pre-wrap">
                      {exp.description}
                    </p>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
