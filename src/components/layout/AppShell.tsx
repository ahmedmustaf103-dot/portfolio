"use client";

import type { ReactNode } from "react";
import { SectionIndex } from "@/components/layout/SectionIndex";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { useActiveSection } from "@/lib/use-active-section";

export function AppShell({ children }: { children: ReactNode }) {
  const active = useActiveSection();

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas"
      >
        Skip to content
      </a>
      <SiteHeader active={active} />
      <SectionIndex active={active} />
      {children}
      <SiteFooter />
    </>
  );
}
