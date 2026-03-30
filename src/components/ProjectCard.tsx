interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveHref?: string;
  githubHref?: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech,
  liveHref,
  githubHref,
}: ProjectCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-white/10 bg-[#161616] shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-transform duration-300 hover:scale-[1.03]">
      <img src={image} alt={`${title} preview`} className="h-44 w-full object-cover" loading="lazy" />

      <div className="p-5">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-white/65">{description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-md border border-white/10 bg-[#1f1f1f] px-2.5 py-1 text-xs text-white/80"
            >
              {item}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          {liveHref && (
            <a
              href={liveHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-[#4f46e5] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#4338ca]"
            >
              Live Demo
            </a>
          )}
          {githubHref && (
            <a
              href={githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-[#4f46e5] hover:text-[#c7c5ff]"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
