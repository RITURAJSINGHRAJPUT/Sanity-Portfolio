import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/client";
import { Award, Star, Trophy, Target, ShieldCheck, ExternalLink } from "lucide-react";
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
  const query = `*[_type == "achievement"] | order(date desc) {
    _id,
    name,
    organization,
    date,
    category,
    description,
    image,
    link
  }`;
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
            const certificateUrl = achievement.image
              ? urlFor(achievement.image).auto("format").fit("max").url()
              : achievement.link || null;

            return (
              <div
                key={achievement._id}
                className="bg-white border-2 border-[var(--color-border)] p-8 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 animate-fade-in-up flex flex-col"
                style={{ animationDelay: `${idx * 0.1}s`, minHeight: "420px" }}
              >
                {/* Meta Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[10px] font-black uppercase tracking-widest text-[#888]">
                    Record_ID::{idx + 1}
                  </div>
                  <div className="px-2 py-1 bg-[var(--color-primary)] text-white text-[8px] font-black uppercase tracking-[0.2em]">
                    {achievement.category}
                  </div>
                </div>

                {/* Content — fixed height with overflow control */}
                <div className="flex-1 flex flex-col">
                  <div className="w-12 h-12 bg-[#f4f4f0] border-2 border-[var(--color-border)] flex items-center justify-center text-[var(--color-accent)] mb-4 shadow-[2px_2px_0px_rgba(0,0,0,1)] shrink-0">
                    <Icon size={24} />
                  </div>
                  <h2 className="text-xl font-black uppercase tracking-tight mb-2 leading-tight line-clamp-3">
                    {achievement.name}
                  </h2>
                  <div className="text-[10px] font-black uppercase tracking-widest text-[var(--color-accent)] opacity-80 mb-4 shrink-0">
                    @{achievement.organization}
                  </div>
                  <p className="text-xs font-bold text-[var(--color-muted)] uppercase leading-relaxed line-clamp-4 mb-6">
                    {achievement.description}
                  </p>

                  {/* Spacer pushes footer to bottom */}
                  <div className="flex-1" />

                  {/* View Certificate Button */}
                  {certificateUrl && (
                    <a
                      href={certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-3 bg-[var(--color-accent)] text-white text-[9px] font-black uppercase tracking-widest border-2 border-[var(--color-border)] shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all mb-6 self-start"
                    >
                      View_Certificate
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>

                {/* Footer Tag */}
                <div className="pt-4 border-t border-[var(--color-border)] border-dashed flex items-center justify-between shrink-0">
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
