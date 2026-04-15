"use client";

import { useEffect, useRef, useState } from "react";

interface StatItem {
  value: number;
  label: string;
  suffix?: string;
}

interface StatsTickerProps {
  stats: StatItem[];
}

export default function StatsTicker({ stats }: StatsTickerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-[var(--color-primary)] py-12 border-y border-[var(--color-border)]"
    >
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
        {stats.map((stat, idx) => (
          <div
            key={stat.label}
            className="flex flex-col"
            style={{
              animation: isVisible
                ? `count-up 0.5s ease-out ${idx * 0.1}s both`
                : "none",
            }}
          >
            <div className="text-3xl md:text-5xl font-black text-[var(--color-secondary)] uppercase">
              {isVisible ? (
                <AnimatedNumber value={stat.value} suffix={stat.suffix} />
              ) : (
                "0"
              )}
            </div>
            <div className="text-[10px] font-black uppercase tracking-widest text-[#888] mt-2">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnimatedNumber({
  value,
  suffix = "",
}: {
  value: number;
  suffix?: string;
}) {
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const stepTime = duration / steps;
    let current = 0;
    const increment = value / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setDisplayed(value);
        clearInterval(timer);
      } else {
        setDisplayed(Math.floor(current));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <>
      {displayed}
      {suffix}
    </>
  );
}
