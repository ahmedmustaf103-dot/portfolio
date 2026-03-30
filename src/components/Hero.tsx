"use client";

interface HeroProps {
  name: string;
  role?: string;
  intro: string;
  projectsHref?: string;
}

export default function Hero({
  name,
  role = "Junior Frontend Developer",
  intro,
  projectsHref = "#projects",
}: HeroProps) {
  return (
    <section className="flex min-h-[90vh] items-center border-b border-white/10">
      <div className="mx-auto w-full max-w-[1100px] px-6 py-16 text-center sm:px-8">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.14em] text-[#8f89ff]">
          {role}
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          {name}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
          {intro}
        </p>
        <a
          href={projectsHref}
          className="mt-10 inline-flex items-center justify-center rounded-xl bg-[#4f46e5] px-7 py-3.5 text-base font-semibold text-white shadow-[0_8px_20px_rgba(79,70,229,0.35)] transition-colors hover:bg-[#4338ca]"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
