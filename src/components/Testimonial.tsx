"use client";

interface TestimonialProps {
  quote?: string;
  attribution?: string;
  heading?: string;
}

/**
 * Optional testimonial / "What people say" section.
 * Replace quote and attribution when you have a real testimonial.
 */
export default function Testimonial({
  quote = "Add a short quote from a mentor, peer, or client when you have one.",
  attribution = "— Name, Role or Company",
  heading = "What people say",
}: TestimonialProps) {
  return (
    <section className="w-full bg-slate-800/60 py-12 sm:py-16 px-6 sm:px-8 md:px-12 border-t border-slate-700">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">
          {heading}
        </h2>
        <blockquote className="text-slate-200 text-lg sm:text-xl leading-relaxed italic mb-4">
          "{quote}"
        </blockquote>
        <cite className="text-slate-400 text-sm not-italic">
          {attribution}
        </cite>
      </div>
    </section>
  );
}
