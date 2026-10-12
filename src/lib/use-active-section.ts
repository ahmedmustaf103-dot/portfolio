"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { sections, type SectionId } from "@/content/site";

export function useActiveSection() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [homeActive, setHomeActive] = useState("home");

  useEffect(() => {
    if (!onHome) {
      return;
    }

    const nodes = sections
      .map((section) => document.getElementById(section.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (nodes.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        const next = visible[0]?.target.id as SectionId | undefined;
        if (next) {
          setHomeActive(next);
        }
      },
      {
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0.08, 0.2, 0.4, 0.7],
      },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [onHome]);

  return onHome ? homeActive : "";
}
