import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills & Tools",
  description: "PM tools and skills across planning, collaboration, analytics, design, and development.",
};

const skillCategories = [
  {
    name: "Planning & Delivery",
    icon: "📋",
    skills: [
      { name: "Jira", level: "Proficient" },
      { name: "Linear", level: "Working" },
      { name: "Asana", level: "Familiar" },
      { name: "Notion", level: "Proficient" },
      { name: "Confluence", level: "Working" },
    ],
  },
  {
    name: "Collaboration",
    icon: "🤝",
    skills: [
      { name: "Slack", level: "Proficient" },
      { name: "Miro", level: "Working" },
      { name: "FigJam", level: "Working" },
      { name: "Google Workspace", level: "Proficient" },
    ],
  },
  {
    name: "Analytics & Data",
    icon: "📊",
    skills: [
      { name: "Google Analytics 4", level: "Working" },
      { name: "Mixpanel", level: "Working" },
      { name: "Amplitude", level: "Familiar" },
      { name: "SQL (Basic)", level: "Familiar" },
      { name: "Excel / Sheets", level: "Proficient" },
    ],
  },
  {
    name: "Design Adjacency",
    icon: "🎨",
    skills: [
      { name: "Figma", level: "Working" },
      { name: "Maze", level: "Familiar" },
      { name: "Hotjar", level: "Familiar" },
    ],
  },
  {
    name: "Dev Awareness",
    icon: "💻",
    skills: [
      { name: "GitHub", level: "Working" },
      { name: "Postman", level: "Working" },
      { name: "REST API Concepts", level: "Working" },
      { name: "Agile Ceremonies", level: "Proficient" },
    ],
  },
];

const levelColors: Record<string, { bg: string; text: string }> = {
  Familiar: { bg: "bg-yellow-50", text: "text-yellow-700" },
  Working: { bg: "bg-blue-50", text: "text-blue-700" },
  Proficient: { bg: "bg-green-50", text: "text-green-700" },
};

export default function SkillsPage() {
  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b-2 border-[var(--color-border)] pb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black">
            TECHNICAL <br /> STACK
          </h1>
          <div className="w-1 h-32 bg-[var(--color-accent)] hidden md:block mx-8" />
          <p className="text-sm md:text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-lg leading-relaxed">
            Tools and frameworks utilized for end-to-end product 
            lifecycle management — optimized for precision and efficiency.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-24">
          {skillCategories.map((category, catIdx) => (
            <div
              key={category.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.1 + catIdx * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-10">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-[var(--color-accent)]">Category_{catIdx + 1}</span>
                <div className="flex-1 h-[2px] bg-[var(--color-border)] opacity-20" />
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  {category.name}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.skills.map((skill) => {
                  return (
                    <div
                      key={skill.name}
                      className="bg-white border-2 border-[var(--color-border)] p-8 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200"
                    >
                      <div className="text-[10px] font-black uppercase tracking-widest text-[var(--color-muted)] mb-8">
                        Module::{skill.name}
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black uppercase tracking-tight">
                          {skill.name}
                        </span>
                        <div className="px-2 py-1 bg-[var(--color-accent)] text-[8px] font-black text-white uppercase tracking-widest">
                          {skill.level}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
