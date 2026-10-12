"use client";

import { sections } from "@/content/site";
import { cn } from "@/lib/cn";
import { homeSection } from "@/lib/paths";

export function SectionIndex({ active }: { active: string }) {
  return (
    <nav
      aria-label="Portfolio sections"
      className="pointer-events-none fixed top-1/2 left-6 z-30 hidden w-16 -translate-y-1/2 lg:block"
    >
      <ol className="pointer-events-auto space-y-3">
        {sections.map((section) => {
          const isActive = active === section.id;
          return (
            <li key={section.id}>
              <a
                href={homeSection(section.id)}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "group flex flex-col gap-1 font-mono text-[11px] tracking-[0.14em] uppercase",
                  isActive ? "text-ink" : "text-mute/80 hover:text-ink",
                )}
              >
                <span className={isActive ? "text-signal" : "text-mute group-hover:text-signal"}>
                  {section.index}
                </span>
                <span className="relative w-fit">
                  {section.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-signal transition-all duration-200",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
