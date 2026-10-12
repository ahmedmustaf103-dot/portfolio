"use client";

import { useState } from "react";
import Link from "next/link";
import { site } from "@/content/site";
import { GitHubIcon, MenuIcon } from "@/components/layout/Icons";
import { MobileNav } from "@/components/layout/MobileNav";
import { Container } from "@/components/ui/Container";
import { homeSection } from "@/lib/paths";

export function SiteHeader({ active }: { active: string }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      <Container className="flex h-14 items-center justify-between">
        <Link href="/" className="flex items-baseline gap-3 text-ink" aria-label={`${site.name}, home`}>
          <span className="font-mono text-[11px] tracking-[0.18em] text-signal">{site.monogram}</span>
          <span className="text-sm tracking-tight">{site.name}</span>
        </Link>
        <div className="flex items-center gap-5">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 text-sm text-mute hover:text-ink sm:flex"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a
            href={homeSection("contact")}
            className="hidden text-sm text-ink hover:text-signal sm:inline"
          >
            Discuss
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md border border-line text-ink lg:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </Container>
      <MobileNav open={open} onClose={() => setOpen(false)} active={active} />
    </header>
  );
}
