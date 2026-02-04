"use client";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  name?: string;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "My Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * Sticky top navigation — name and section links.
 */
export default function Nav({
  name = "Mustaf Ahmed",
  links = defaultLinks,
}: NavProps) {
  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 md:px-12 py-3 sm:py-4 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
        <a
          href="#"
          className="text-base sm:text-lg font-semibold text-white hover:text-slate-200 transition-colors shrink-0"
        >
          {name}
        </a>
        <ul className="flex flex-wrap items-center gap-4 sm:gap-8">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm sm:text-base text-slate-300 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
