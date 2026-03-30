"use client";

import Section from "@/components/Section";

interface SkillsProps {
  skills: string[];
}

export default function Skills({ skills }: SkillsProps) {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="Core frontend tools and practices I use to build reliable interfaces."
    >
      <ul className="flex flex-wrap gap-3 sm:gap-4">
        {skills.map((skill) => (
          <li key={skill}>
            <span className="inline-block rounded-xl border border-white/10 bg-[#161616] px-4 py-2.5 text-sm font-medium text-white/90 sm:text-base">
              {skill}
            </span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
