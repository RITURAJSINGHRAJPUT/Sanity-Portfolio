import { client } from "@/sanity/lib/client";
import { Award, Star, Trophy, Target, ShieldCheck } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievements",
  description: "Records of specialized milestones, honors, and professional delivery benchmarks.",
};

const categoryIcons: Record<string, any> = {
  academic: Star,
  professional: Trophy,
  leadership: ShieldCheck,
  competition: Target,
  community: Award,
};

async function getAchievements() {
  const query = `*[_type == "achievement"] | order(date desc)`;
  if (!client) {
    console.warn("Sanity client not configured. Using fallback data.");
    return [];
  }
  try {
    const data = await client.fetch(query);
    return data;
  } catch (err) {
    console.error("Error fetching achievements:", err);
    return [];
  }
}

// Fallback data for demonstration if Sanity is empty
const fallbackAchievements = [
  {
    _id: "demo-1",
    name: "National Fintech Hackathon Finalist",
    organization: "FinTech Global",
    date: "2024-03-01",
    category: "competition",
    description: "Led a cross-functional team of 4 to build a real-time risk assessment MVP. Ranked in the top 10 out of 250+ competing teams.",
  },
  {
    _id: "demo-2",
    name: "Strategic PM Excellence Award",
    organization: "Tech-Architecture Summit",
    date: "2023-11-15",
    category: "professional",
    description: "Awarded for exceptional delivery of the 'Product Migration' project, reducing cycle time by 22% through better dependency mapping.",
  },
  {
    _id: "demo-3",
    name: "Dean's Merit Scholarship",
    organization: "Univeristy Engineering Dept",
    date: "2023-06-01",
    category: "academic",
    description: "Awarded for consistent academic excellence and maintaining a top 1% rank in the Engineering cohort.",
  },
];

export default async function AchievementsPage() {
  const sanityAchievements = await getAchievements();
  const achievements = sanityAchievements.length > 0 ? sanityAchievements : fallbackAchievements;

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b-2 border-[var(--color-border)] pb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black">
            LOGGED <br /> RECORDS
          </h1>
          <div className="w-1 h-32 bg-[var(--color-secondary)] hidden md:block mx-8 shadow-[4px_0px_0px_rgba(0,0,0,1)]" />
          <p className="text-sm md:text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-lg leading-relaxed">
            Archives of professional benchmarks, academic honors, 
            and verified delivery milestones. Every record represents 
            a commitment to high-performance outcomes.
          </p>
        </div>

        {/* Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement: any, idx: number) => {
            const Icon = categoryIcons[achievement.category] || Star;
            return (
              <div
                key={achievement._id}
                className="bg-white border-2 border-[var(--color-border)] p-8 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#888]">
                    Record_ID::{idx + 1}
                  </div>
                  <div className="px-2 py-1 bg-[var(--color-primary)] text-white text-[8px] font-black uppercase tracking-[0.2em]">
                    {achievement.category}
                  </div>
                </div>

                {/* Content */}
                <div className="mb-10">
                  <div className="w-12 h-12 bg-[#f4f4f0] border-2 border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] mb-6 shadow-[2px_2px_0px_rgba(0,0,0,1)]">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-2xl font-black uppercase tracking-tight mb-3 leading-none">
                    {achievement.name}
                  </h2>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[var(--color-accent)] opacity-80 mb-6">
                    @{achievement.organization}
                  </div>
                  <p className="text-xs font-bold text-[var(--color-muted)] uppercase leading-relaxed">
                    {achievement.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-6 border-t border-[var(--color-border)] border-dashed flex items-center justify-between">
                  <span className="text-[8px] font-black uppercase tracking-widest text-[#AAA]">Timestamp</span>
                  <span className="text-[10px] font-black uppercase tracking-wider text-[var(--color-primary)]">
                    {achievement.date ? new Date(achievement.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }) : 'Verified'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
