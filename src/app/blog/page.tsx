import Link from "next/link";
import { Clock, ArrowRight, BookOpen, Hash } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thought_Leadership // PM_ARCHITECT",
  description: "Product teardowns, delivery frameworks, and strategic reflections on the tech industry.",
};

const posts = [
  {
    _id: "1",
    title: "A PM Architect's Teardown of Slack's Onboarding",
    slug: { current: "slack-onboarding-teardown" },
    excerpt: "Breaking down what makes Slack's onboarding flow great — and where it could improve from a systems perspective. A product-first analysis with technical benchmarks.",
    category: "Product_Strategy",
    publishedAt: "2024-03-10",
    estimatedReadTime: 8,
    featured: true,
    tags: ["Onboarding", "B2B_SaaS"],
  },
  {
    _id: "2",
    title: "Agile Systems: Running My First Architecture Sprint",
    slug: { current: "first-sprint-mistakes" },
    excerpt: "What happens when you apply agile frameworks to technical architecture for the first time? Spoiler: High learning velocity and critical pivots.",
    category: "Delivery_Frameworks",
    publishedAt: "2024-03-20",
    estimatedReadTime: 6,
    featured: false,
    tags: ["Agile", "Velocity"],
  },
  {
    _id: "3",
    title: "OKRs vs KPIs — Strategic Alignment Architecture",
    slug: { current: "okrs-vs-kpis" },
    excerpt: "Decoupling buzzwords from reality. A breakdown of when each alignment framework actually drives product performance and when they cause latency.",
    category: "Corporate_Governance",
    publishedAt: "2024-04-01",
    estimatedReadTime: 7,
    featured: false,
    tags: ["Strategy", "Metrics"],
  },
];

const categories = [
  "ALL_ENTRIES",
  "PRODUCT_STRATEGY",
  "DELIVERY_FRAMEWORKS",
  "SYSTEMS_THINKING",
];

export default function BlogPage() {
  const featuredPost = posts.find((p) => p.featured);
  const otherPosts = posts.filter((p) => !p.featured);

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-baseline gap-6 mb-20 border-b-2 border-[var(--color-border)] pb-8 animate-fade-in-up">
          <h1 className="text-4xl md:text-7xl font-black">
            INTEL <br /> REPORTS
          </h1>
          <div className="w-1 h-32 bg-[var(--color-secondary)] hidden md:block mx-8 shadow-[4px_0px_0px_rgba(0,0,0,1)]" />
          <p className="text-sm md:text-md font-bold uppercase tracking-wide text-[var(--color-muted)] max-w-lg leading-relaxed">
            Product teardowns, delivery frameworks, and strategic logs 
            on the PM journey. A collection of transmission entries 
            focused on high-velocity systems architecture.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap gap-4 mb-20 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-6 py-2 border-2 border-[#121212] text-[10px] font-black uppercase tracking-widest transition-all ${
                idx === 0 
                  ? "bg-[var(--color-primary)] text-white shadow-[4px_4px_0px_rgba(0,0,0,1)]" 
                  : "bg-white text-[var(--color-muted)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Report */}
        {featuredPost && (
          <div className="mb-24 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <Link
              href={`/blog/${featuredPost.slug.current}`}
              className="group relative block bg-white border-4 border-[#121212] shadow-[12px_12px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-200 overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-[#121212] p-12 flex flex-col justify-center text-white">
                  <div className="flex items-center gap-4 mb-8">
                    <span className="px-3 py-1 bg-[var(--color-accent)] text-white text-[9px] font-black uppercase tracking-widest">
                      FEATURED_INTEL
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#666]">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-[var(--color-secondary)] transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-xs font-bold uppercase leading-relaxed text-[#AAA] mb-8 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-white/10 uppercase font-mono">
                    <div className="flex items-center gap-4 text-[10px]">
                      <Clock size={14} className="text-[var(--color-accent)]" />
                      {featuredPost.estimatedReadTime} MIN_READ
                    </div>
                    <div className="flex items-center gap-2 text-[11px] font-black tracking-[0.2em] text-[var(--color-secondary)]">
                      ACCESS_LOG <ArrowRight size={18} />
                    </div>
                  </div>
                </div>
                <div className="bg-[#f4f4f0] flex items-center justify-center p-20">
                   <BookOpen size={120} strokeWidth={1} className="text-[#121212]/10" />
                   <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#121212]/5" />
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Recent Intelligence Logs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {otherPosts.map((post, idx) => (
            <Link
              key={post._id}
              href={`/blog/${post.slug.current}`}
              className="group relative bg-white border-2 border-[#121212] p-8 shadow-[var(--shadow-default)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-200 animate-fade-in-up"
              style={{ animationDelay: `${0.3 + idx * 0.1}s` }}
            >
              <div className="absolute top-[-14px] left-6 px-3 py-1 bg-[#121212] text-white text-[9px] font-black uppercase tracking-widest shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                LOG_ID::{idx + 1}
              </div>

              <div className="mb-8 mt-4">
                <div className="flex items-center gap-2 mb-4 text-[#888] text-[9px] font-black uppercase tracking-widest">
                  <Hash size={12} className="text-[var(--color-accent)]" />
                  {post.category}
                </div>
                <h3 className="text-2xl font-black uppercase tracking-tight leading-none mb-4 group-hover:text-[var(--color-accent)] transition-colors">
                  {post.title}
                </h3>
                <p className="text-[11px] font-bold uppercase leading-relaxed text-[var(--color-muted)] line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 border-t border-[var(--color-border)] border-dashed flex items-center justify-between text-[10px] font-black uppercase tracking-widest">
                <span className="text-[#AAA]">{post.estimatedReadTime} MIN</span>
                <span className="text-[var(--color-primary)]">READ_ENTRY // {new Date(post.publishedAt).getFullYear()}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
