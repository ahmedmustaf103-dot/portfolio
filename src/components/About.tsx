"use client";

interface AboutProps {
  heading?: string;
  children: React.ReactNode;
}

/**
 * About section — who you are, what you build, what you're looking for.
 */
export default function About({
  heading = "About",
  children,
}: AboutProps) {
  return (
    <section
      id="about"
      className="w-full bg-slate-900 py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12 border-t border-slate-700"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 sm:mb-8">
          {heading}
        </h2>
        <div className="text-slate-300 text-base sm:text-lg leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </section>
  );
}
