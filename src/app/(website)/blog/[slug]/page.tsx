import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ExternalLink, Globe, LinkIcon, Terminal, ArrowRight } from "lucide-react";
import ReadingProgress from "@/components/blog/ReadingProgress";
import { BlogBody } from "@/components/blog/BlogBody";
import type { Metadata } from "next";
import Image from "next/image";
import { safeFetch, urlFor } from "@/sanity/lib/client";
import { blogPostBySlugQuery } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await safeFetch<any>(blogPostBySlugQuery, { slug });
  
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.seoTitle || post.title} | Rituraj Singh`,
    description: post.seoDescription || post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await safeFetch<any>(blogPostBySlugQuery, { slug });

  if (!post) {
    notFound();
  }

  return (
    <div className="relative overflow-hidden grid-bg min-h-screen">
      <ReadingProgress />

      <article className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        {/* COMMAND_BACK */}
        <div className="mb-16 animate-fade-in-up">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-4 py-2 px-4 border-2 border-[#121212] bg-white text-[10px] font-black uppercase tracking-widest shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            COMMAND_BACK // INTEL_REPORTS
          </Link>
        </div>

        {/* METADATA HEADER */}
        <header className="mb-20 animate-fade-in-up">
          <div className="flex items-center gap-3 mb-6">
            <span className="px-3 py-1 bg-[var(--color-accent)] text-white text-[9px] font-black uppercase tracking-widest shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {post.category?.name || "UNCLASSIFIED"}
            </span>
            <span className="text-[10px] font-black uppercase tracking-widest text-[#AAA]">
              REF_ID: // {post._id.substring(0, 8).toUpperCase()}
            </span>
          </div>

          <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[1.1] mb-10 text-[var(--color-primary)]">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-8 text-[10px] font-black uppercase tracking-widest text-[#888] border-y-2 border-[#121212]/10 py-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-[#121212] text-white flex items-center justify-center text-[8px]">RS</div>
              RITURAJ_SINGH
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[var(--color-accent)]" />
              TIMESTAMP // {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', year: 'numeric' }).toUpperCase() : "XXXX"}
            </div>
            <div className="flex items-center gap-2">
              <Clock size={14} className="text-[var(--color-accent)]" />
              LATENCY // {post.estimatedReadTime || "???"} MIN
            </div>
          </div>
        </header>

        {/* FEATURED IMAGE */}
        {post.coverImage?.asset && (
          <div className="mb-20 animate-fade-in-up border-4 border-[#121212] shadow-[12px_12px_0px_rgba(0,0,0,1)] relative aspect-[21/9] overflow-hidden bg-[#f4f4f0]">
            <Image
              src={urlFor(post.coverImage).auto("format").fit("max").url()}
              alt={post.coverImage.alt || post.title}
              fill
              unoptimized
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* CONTENT LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* MAIN PROSE */}
          <div className="lg:col-span-8 prose prose-neutral max-w-none">
            <BlogBody body={post.body} />
          </div>

          {/* TABLE OF CONTENTS SIDEBAR */}
          <aside className="lg:col-span-4 space-y-12 animate-fade-in-up">
            <div className="sticky top-32">
              {post.headings && post.headings.length > 0 && (
                <div className="bg-white border-2 border-[#121212] p-8 shadow-[6px_6px_0px_rgba(0,0,0,1)] mb-12">
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-[#888] border-b border-[#121212]/10 pb-2">
                    TOC_INDEX
                  </h4>
                  <nav className="space-y-4">
                    {post.headings.map((heading: any, idx: number) => (
                      <a
                        key={heading.key}
                        href={`#${heading.text.toLowerCase().replace(/\s+/g, '-')}`}
                        className={`block text-[10px] font-black uppercase tracking-widest transition-all hover:text-[var(--color-accent)] ${
                          heading.style === "h3" ? "pl-4 opacity-60" : "opacity-100"
                        }`}
                      >
                        {idx + 1}. {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              {/* Related Intel */}
              {post.relatedPosts && post.relatedPosts.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-6 text-[#AAA]">RELATED_INTEL</h4>
                  <div className="space-y-6">
                    {post.relatedPosts.map((rel: any) => (
                      <Link 
                        key={rel._id} 
                        href={`/blog/${rel.slug.current}`}
                        className="group block p-6 border-2 border-[#121212] bg-white hover:bg-[#121212] hover:text-white transition-all cursor-pointer shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none"
                      >
                         <span className="text-[8px] font-black tracking-widest text-[var(--color-accent)] mb-2 block">
                           {rel.category?.name || "INTEL"}
                         </span>
                         <h5 className="text-xs font-black uppercase tracking-tight">{rel.title}</h5>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>

        {/* SHARE & NAV */}
        <div className="mt-32 pt-12 border-t-2 border-[#121212] animate-fade-in-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#888]">TRANSMIT:</span>
              <div className="flex gap-4">
                {[ExternalLink, Globe, LinkIcon].map((Icon, i) => (
                  <button key={i} className="p-3 border-2 border-[#121212] bg-white shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all">
                    <Icon size={14} />
                  </button>
                ))}
              </div>
            </div>

            <Link
              href="/blog"
              className="group flex items-center gap-6 py-4 px-10 bg-[#121212] text-white text-[11px] font-black uppercase tracking-[0.3em] shadow-[8px_8px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all"
            >
              INTEL_INDEX_SCAN
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[var(--color-secondary)]" />
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
