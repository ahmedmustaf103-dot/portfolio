"use client";

import { useEffect, useRef, useState } from "react";

interface SectionProps {
  id?: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function Section({ id, title, subtitle, children }: SectionProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`fade-in-section border-t border-white/10 py-20 sm:py-24 ${visible ? "is-visible" : ""}`}
    >
      <div className="mx-auto w-full max-w-[1100px] px-6 sm:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
          {title}
        </h2>
        {subtitle && <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/65">{subtitle}</p>}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}
