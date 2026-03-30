"use client";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterProps {
  name?: string;
  navLinks?: FooterLink[];
  socialLinks?: FooterLink[];
  copyright?: string;
}

const defaultNavLinks: FooterLink[] = [
  { label: "About", href: "#about" },
  { label: "My Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

/**
 * Footer — same links as nav, social links, copyright.
 */
export default function Footer({
  name = "Mustaf Ahmed",
  navLinks = defaultNavLinks,
  socialLinks = [],
  copyright,
}: FooterProps) {
  const year = new Date().getFullYear();
  const copy = copyright ?? `© ${year} ${name}`;

  return (
    <footer className="w-full bg-slate-900 py-10 sm:py-12 px-6 sm:px-8 md:px-12 border-t border-slate-800">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-slate-300 hover:text-white font-medium transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
      <p className="max-w-4xl mx-auto mt-6 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
        {copy}
      </p>
    </footer>
  );
}
