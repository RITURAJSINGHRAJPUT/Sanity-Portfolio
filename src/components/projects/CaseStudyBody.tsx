"use client";

import { PortableText as BasePortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/client";

const sectionCounter = { current: 0 };

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => {
      sectionCounter.current += 1;
      return (
        <div className="mt-20 mb-8 first:mt-0">
          <div className="flex items-center gap-3 mb-2">
            <span className="w-5 h-5 bg-[var(--color-accent)] shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter leading-none text-[var(--color-primary)]">
              {children}
            </h2>
          </div>
          <div className="w-full h-[2px] bg-[var(--color-border)] mt-4" />
        </div>
      );
    },
    h2: ({ children }) => {
      sectionCounter.current += 1;
      return (
        <div className="mt-16 mb-6 first:mt-0">
          <div className="flex items-center gap-3">
            <span className="w-4 h-4 bg-[var(--color-accent)]" />
            <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none text-[var(--color-primary)]">
              {children}
            </h2>
          </div>
          <div className="w-24 h-[2px] bg-[var(--color-accent)] mt-3 ml-7" />
        </div>
      );
    },
    h3: ({ children }) => (
      <div className="mt-12 mb-4">
        <h3 className="text-xl font-black uppercase tracking-tight text-[var(--color-primary)] border-l-4 border-[var(--color-accent)] pl-4">
          {children}
        </h3>
      </div>
    ),
    h4: ({ children }) => (
      <h4 className="mt-8 mb-3 text-lg font-black uppercase tracking-tight text-[var(--color-primary)]">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-sm font-bold text-[var(--color-muted)] leading-relaxed mb-5 tracking-wide">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <div className="my-8 bg-[#121212] text-white p-8 border-l-8 border-[var(--color-secondary)]">
        <p className="text-sm font-bold uppercase leading-loose opacity-90 tracking-wide font-mono">
          {children}
        </p>
      </div>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-black text-[var(--color-primary)]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="text-[var(--color-accent)] font-black not-italic">{children}</em>
    ),
    code: ({ children }) => (
      <code className="px-2 py-1 bg-[#f4f4f0] border border-[var(--color-border)] text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)]">
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
  list: {
    bullet: ({ children }) => (
      <div className="my-6 space-y-3 pl-4 border-l-2 border-[var(--color-border)]">
        {children}
      </div>
    ),
    number: ({ children }) => (
      <div className="my-6 space-y-3 pl-4 border-l-2 border-[var(--color-accent)]">
        {children}
      </div>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <div className="flex items-start gap-3">
        <span className="w-2 h-2 bg-[var(--color-accent)] mt-1.5 shrink-0 shadow-[1px_1px_0px_rgba(0,0,0,1)]" />
        <span className="text-sm font-bold text-[var(--color-muted)] leading-relaxed tracking-wide">
          {children}
        </span>
      </div>
    ),
    number: ({ children, index }) => (
      <div className="flex items-start gap-3">
        <span className="w-6 h-6 bg-[var(--color-primary)] text-white flex items-center justify-center text-[9px] font-black shrink-0">
          {(index ?? 0) + 1}
        </span>
        <span className="text-sm font-bold text-[var(--color-muted)] leading-relaxed tracking-wide">
          {children}
        </span>
      </div>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const imageUrl = urlFor(value).auto("format").fit("max").url();
      return (
        <figure className="my-10 border-2 border-[var(--color-border)] shadow-[6px_6px_0px_rgba(0,0,0,1)] overflow-hidden">
          <div className="relative w-full aspect-video">
            <Image
              src={imageUrl}
              alt={value.alt || "Project image"}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </div>
          {value.caption && (
            <div className="px-6 py-3 bg-[#f4f4f0] border-t-2 border-[var(--color-border)]">
              <p className="text-[10px] font-black uppercase tracking-widest text-[var(--color-muted)]">
                {value.caption}
              </p>
            </div>
          )}
        </figure>
      );
    },
  },
};

export function CaseStudyBody({ body }: { body: any[] }) {
  sectionCounter.current = 0;
  return (
    <div className="case-study-body">
      <BasePortableText value={body} components={components} />
    </div>
  );
}
