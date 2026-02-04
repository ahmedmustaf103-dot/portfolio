"use client";

interface SkillsProps {
  heading?: string;
  skills: string[];
}

/**
 * Skills / tech stack section with a short list of technologies.
 */
export default function Skills({
  heading = "Skills & Tech",
  skills,
}: SkillsProps) {
  return (
    <section className="w-full bg-slate-900 py-12 sm:py-16 md:py-20 px-6 sm:px-8 md:px-12 border-t border-slate-700">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10">
          {heading}
        </h2>
        <ul className="flex flex-wrap gap-3 sm:gap-4">
          {skills.map((skill) => (
            <li key={skill}>
              <span className="inline-block px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg bg-slate-800 text-slate-200 font-medium text-sm sm:text-base border border-slate-600">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
