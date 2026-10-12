"use client";

import Image from "next/image";
import { useState } from "react";
import { jobtracker } from "@/content/projects";
import { PreviewCaption } from "@/components/previews/PreviewCaption";
import { cn } from "@/lib/cn";

const tabs = [
  { id: "dashboard", label: "Dashboard", image: jobtracker.screenshots.dashboard },
  { id: "coverLetters", label: "Cover letters", image: jobtracker.screenshots.coverLetters },
] as const;

export function JobTrackerPreview() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("dashboard");
  const current = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <figure className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <div role="tablist" aria-label="JobTracker screenshots" className="flex border-b border-line">
        {tabs.map((tab, index) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`jobtracker-tab-${tab.id}`}
              aria-selected={selected}
              aria-controls="jobtracker-screenshot"
              tabIndex={selected ? 0 : -1}
              className={cn(
                "flex-1 px-4 py-3 text-sm tracking-tight",
                selected ? "bg-white/4 text-ink" : "text-mute hover:text-ink",
              )}
              onClick={() => setActive(tab.id)}
              onKeyDown={(event) => {
                if (event.key !== "ArrowRight" && event.key !== "ArrowLeft") {
                  return;
                }
                event.preventDefault();
                const next = event.key === "ArrowRight" ? index + 1 : index - 1;
                const target = tabs[(next + tabs.length) % tabs.length];
                setActive(target.id);
                document.getElementById(`jobtracker-tab-${target.id}`)?.focus();
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        id="jobtracker-screenshot"
        role="tabpanel"
        aria-labelledby={`jobtracker-tab-${current.id}`}
        className="relative aspect-[16/10] bg-canvas"
      >
        <Image
          src={current.image.src}
          alt={current.image.alt}
          fill
          sizes="(min-width: 1024px) 56rem, 100vw"
          className="object-cover object-top"
          priority={current.id === "dashboard"}
        />
      </div>
      <PreviewCaption>Screenshot from the live JobTracker demo</PreviewCaption>
    </figure>
  );
}
