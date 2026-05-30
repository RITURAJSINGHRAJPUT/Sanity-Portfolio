"use client";

import { PortableText as BasePortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

const components: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl font-black uppercase tracking-tight flex items-center gap-3 mb-6 mt-16 first:mt-0">
        <span className="w-3 h-3 bg-[var(--color-accent)]" />
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-black uppercase tracking-tight mb-4 mt-12 text-[var(--color-accent)]">
        // {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-black uppercase tracking-tight mb-4 mt-8 text-[var(--color-primary)]">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-sm font-bold uppercase leading-relaxed text-[var(--color-muted)] opacity-80 mb-6 text-justify tracking-wide">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <div className="bg-[#121212] text-white p-8 border-l-8 border-[var(--color-secondary)] my-10 font-mono text-sm leading-loose uppercase tracking-wide">
        {children}
      </div>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-black text-[var(--color-primary)]">{children}</strong>,
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 bg-[#f4f4f0] border border-[var(--color-border)] text-[0.85em] font-black tracking-tight text-[var(--color-accent)]">
        {children}
      </code>
    ),
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-[var(--color-accent)] underline decoration-2 underline-offset-4 hover:text-[var(--color-primary)] transition-colors"
      >
        {children}
      </a>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).auto("format").fit("max").url();
      return (
        <figure className="my-12 border-4 border-[#121212] shadow-[8px_8px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt || "Blog image"}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
          {(value.caption || value.alt) && (
            <div className="px-6 py-3 bg-[#121212] text-white flex justify-between items-center">
              <span className="text-[9px] font-black uppercase tracking-[0.2em]">
                IMG_LOG__{value.caption || "SECURE_ASSET"}
              </span>
              <span className="text-[8px] opacity-40 font-mono">ARCHIVE_REF__{Math.floor(Math.random() * 9000) + 1000}</span>
            </div>
          )}
        </figure>
      );
    },
    codeBlock: ({ value }) => (
      <div className="my-10 bg-[#121212] border-l-8 border-[var(--color-accent)] shadow-[10px_10px_0px_rgba(0,0,0,1)] overflow-hidden">
        {value.filename && (
          <div className="bg-[#1a1a1a] px-6 py-2 border-b border-white/5 flex items-center justify-between">
            <span className="text-[9px] font-black uppercase tracking-widest text-[#555]">
              FILE_NAME // {value.filename}
            </span>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
            </div>
          </div>
        )}
        <pre className="p-8 overflow-x-auto">
          <code className="text-[#10B981] font-mono text-xs leading-[1.8]">
            {value.code}
          </code>
        </pre>
        <div className="bg-[#121212] px-6 py-2 flex justify-end">
           <span className="text-[8px] font-mono text-[#444] uppercase tracking-[0.3em]">{value.language || "EXTERN_CODE"}</span>
        </div>
      </div>
    ),
  },
};

export function BlogBody({ body }: { body: any[] }) {
  if (!body) return null;
  return (
    <div className="blog-body">
      <BasePortableText value={body} components={components} />
    </div>
  );
}
