"use client";

import { useEffect, useRef } from "react";
import { sections, site } from "@/content/site";
import { CloseIcon } from "@/components/layout/Icons";
import { homeSection } from "@/lib/paths";

export function MobileNav({
  open,
  onClose,
  active,
}: {
  open: boolean;
  onClose: () => void;
  active: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previous = document.activeElement;
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusable = () =>
      panelRef.current
        ? [...panelRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')]
        : [];

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const items = focusable();
      if (items.length === 0) {
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKey);
      if (previous instanceof HTMLElement) {
        previous.focus();
      }
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        tabIndex={-1}
        className="absolute inset-0 bg-canvas/80"
        aria-label="Close menu overlay"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        className="absolute inset-x-0 top-0 border-b border-line bg-canvas px-6 pb-10 pt-5"
      >
        <div className="flex items-center justify-between">
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-mute">Menu</p>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center text-ink"
            aria-label="Close menu"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        <nav className="mt-8">
          <ul className="space-y-1">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={homeSection(section.id)}
                  onClick={onClose}
                  aria-current={active === section.id ? "location" : undefined}
                  className="flex items-baseline gap-4 py-3 text-2xl tracking-tight text-ink"
                >
                  <span className="font-mono text-[11px] text-signal">{section.index}</span>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-8 flex gap-6 border-t border-line pt-6 text-sm">
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="text-mute hover:text-ink">
            GitHub
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
          <a href={`mailto:${site.email}`} className="text-mute hover:text-ink">
            Discuss
          </a>
        </div>
      </div>
    </div>
  );
}
