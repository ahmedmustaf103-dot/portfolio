"use client";

export interface ContactLink {
  label: string;
  href: string;
}

interface ContactProps {
  heading?: string;
  email: string;
  copy?: string;
  links?: ContactLink[];
}

/**
 * Contact section — email and optional social/other links.
 */
export default function Contact({
  heading = "Get in touch",
  email,
  copy = "Have a project in mind or want to chat? I’d love to hear from you.",
  links = [],
}: ContactProps) {
  return (
    <section
      id="contact"
      className="w-full bg-slate-900 py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 border-t border-slate-700"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 sm:mb-5">
          {heading}
        </h2>
        <p className="text-slate-300 text-base sm:text-lg mb-8 sm:mb-10">
          {copy}
        </p>
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          {email}
        </a>
        {links.length > 0 && (
          <div className="mt-10 pt-10 border-t border-slate-700 flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
