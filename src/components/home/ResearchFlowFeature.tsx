import { ResearchPipeline } from "@/components/previews/ResearchPipeline";
import { ProjectActions } from "@/components/home/ProjectActions";
import { StackList } from "@/components/home/StackList";
import { researchflow } from "@/content/projects";

export function ResearchFlowFeature() {
  return (
    <article id="project-researchflow" className="scroll-mt-24">
      <div className="max-w-3xl">
        <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Pipeline</p>
        <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
          {researchflow.name}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">{researchflow.problem}</p>
        <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base">{researchflow.summary}</p>
      </div>
      <div className="mt-8">
        <ResearchPipeline />
      </div>
      <ul className="mt-8 grid gap-4 text-sm leading-relaxed text-mute sm:grid-cols-2">
        {researchflow.highlights.map((item) => (
          <li key={item} className="border-t border-line pt-4">
            {item}
          </li>
        ))}
      </ul>
      <StackList items={researchflow.stack} />
      <ProjectActions
        demo={researchflow.demo}
        repo={researchflow.repo}
        study={researchflow.caseStudy}
        note={researchflow.demoNote}
      />
    </article>
  );
}
