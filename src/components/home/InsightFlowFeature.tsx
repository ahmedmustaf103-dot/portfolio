import { InsightSplit } from "@/components/previews/InsightSplit";
import { ProjectActions } from "@/components/home/ProjectActions";
import { StackList } from "@/components/home/StackList";
import { insightflow } from "@/content/projects";

export function InsightFlowFeature() {
  return (
    <article id="project-insightflow" className="scroll-mt-24">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Split</p>
          <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
            {insightflow.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">{insightflow.problem}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base">{insightflow.summary}</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-mute">
            {insightflow.highlights.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <StackList items={insightflow.stack} />
          <ProjectActions
            demo={insightflow.demo}
            repo={insightflow.repo}
            study={insightflow.caseStudy}
            note={insightflow.demoNote}
          />
        </div>
        <InsightSplit />
      </div>
    </article>
  );
}
