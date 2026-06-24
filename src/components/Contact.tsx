"use client";

import Section from "@/components/Section";

export interface ContactLink {
  label: string;
  href: string;
}

interface ContactProps {
  email: string;
  copy?: string;
  links?: ContactLink[];
}

export default function Contact({
  email,
  copy = "Open to frontend and full-stack opportunities. I build and deploy real-world web apps and SaaS products with authentication, databases, and API integrations, and I use AI tools like Cursor to speed up debugging and development.",
  links = [],
}: ContactProps) {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Let's connect if you have an opportunity or project in mind."
    >
      <div className="mx-auto max-w-2xl rounded-xl border border-white/10 bg-[#161616] p-6 sm:p-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
        <p className="mb-8 text-base text-white/70 sm:text-lg">{copy}</p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center rounded-xl bg-[#4f46e5] px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-[#4338ca]"
        >
          {email}
        </a>
        {links.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-6 border-t border-white/10 pt-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-white/75 transition-colors hover:text-[#b8b5ff]"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
