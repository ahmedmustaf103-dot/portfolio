"use client";

import { useState } from "react";
import { capabilities } from "@/content/site";
import { cn } from "@/lib/cn";

export function CapabilityBoard() {
  const [active, setActive] = useState<(typeof capabilities)[number]["id"]>(
    capabilities[0].id,
  );

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <p className="border-b border-line px-5 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-mute">
        Systems
      </p>
      <ul>
        {capabilities.map((item) => {
          const isActive = active === item.id;
          return (
            <li key={item.id} className="border-b border-line last:border-b-0">
              <a
                href={item.href}
                onFocus={() => setActive(item.id)}
                onMouseEnter={() => setActive(item.id)}
                className={cn(
                  "block px-5 py-4 transition-colors",
                  isActive ? "bg-white/3" : "hover:bg-white/2",
                )}
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                  {item.label}
                </p>
                <p className="mt-1 text-[15px] tracking-tight text-ink">{item.title}</p>
                <p
                  className={cn(
                    "mt-2 max-w-md text-sm leading-relaxed text-mute transition-opacity duration-200",
                    isActive ? "opacity-100" : "opacity-70",
                  )}
                >
                  {item.detail}
                </p>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
