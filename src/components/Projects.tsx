"use client";

export interface Project {
  title: string;
  description: string;
  highlight?: string;
  href?: string;
  liveHref?: string;
  tech?: string[];
}

interface ProjectsProps {
  heading?: string;
  projects: Project[];
}

/**
 * Projects section with a clear heading and list of projects.
 */
export default function Projects({
  heading = "My Projects",
  projects,
}: ProjectsProps) {
  return (
    <section
      id="projects"
      className="w-full bg-slate-900 py-16 sm:py-20 md:py-24 px-6 sm:px-8 md:px-12"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-5xl font-bold tracking-tight text-white mb-10 sm:mb-12">
          {heading}
        </h2>

        <ul className="space-y-8 sm:space-y-10">
          {projects.map((project, index) => (
            <li key={index}>
              <article className="group block p-6 sm:p-8 rounded-xl bg-slate-800 border border-slate-600 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-200">
                <h3 className="text-xl sm:text-2xl font-semibold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>
                <p className={`text-slate-300 leading-relaxed ${project.highlight ? "mb-2" : "mb-4"}`}>
                  {project.description}
                </p>
                {project.highlight && (
                  <p className="text-slate-400 text-sm italic mb-4">
                    {project.highlight}
                  </p>
                )}
                {project.tech && project.tech.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs sm:text-sm px-3 py-1 rounded-full bg-slate-700 text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-3">
                  {project.liveHref && (
                    <a
                      href={project.liveHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg transition-colors"
                    >
                      View live
                    </a>
                  )}
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-slate-300 hover:text-white border border-slate-600 hover:border-slate-500 rounded-lg transition-colors"
                    >
                      View code
                    </a>
                  )}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
