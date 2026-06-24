"use client";

import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";

export interface PortfolioProject {
  title: string;
  description: string;
  image: string;
  githubHref?: string;
  liveHref?: string;
  tech: string[];
}

interface ProjectsProps {
  projects: PortfolioProject[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Full-stack SaaS and web applications with authentication, database workflows, API integrations, and deployed production demos."
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            tech={project.tech}
            liveHref={project.liveHref}
            githubHref={project.githubHref}
          />
        ))}
      </div>
    </Section>
  );
}
