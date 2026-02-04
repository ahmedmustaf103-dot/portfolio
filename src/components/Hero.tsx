"use client";

interface HeroProps {
  name?: string;
  subtitle?: string;
  tagline?: string;
  projectsHref?: string;
  showAvailability?: boolean;
}

/**
 * Hero section for a developer portfolio — client-focused and enticing.
 */
export default function Hero({
  name = "Your Name",
  subtitle = "Frontend Developer",
  tagline = "I build fast, polished web experiences that users love and businesses trust.",
  projectsHref = "#projects",
  showAvailability = true,
}: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 text-slate-100">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800/95 to-slate-900" />
      {/* Ambient orbs */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-[28rem] h-[28rem] rounded-full bg-slate-600/20 blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-indigo-900/30 blur-[80px] animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-slate-600/15 blur-[70px] animate-blob animation-delay-4000" />
      </div>
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative z-10 w-full max-w-3xl mx-auto px-6 sm:px-8 md:px-12 text-center">
        {/* Availability badge — builds trust */}
        {showAvailability && (
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/80 border border-slate-600 text-slate-300 text-sm font-medium mb-8 sm:mb-10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for new projects
          </div>
        )}

        {/* Name — strong, memorable */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-4 sm:mb-5">
          {name}
        </h1>

        {/* Role */}
        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-6 sm:mb-8">
          {subtitle}
        </p>

        {/* Value proposition — why clients should care */}
        <p className="text-slate-200 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-10 sm:mb-12">
          {tagline}
        </p>

        {/* Primary CTA — inviting and clear */}
        <a
          href={projectsHref}
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-4 text-base sm:text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
        >
          View Projects
          <svg
            className="w-5 h-5 transition-transform group-hover:translate-x-0.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
