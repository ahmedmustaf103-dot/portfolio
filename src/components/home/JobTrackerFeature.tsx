import { JobTrackerPreview } from "@/components/previews/JobTrackerPreview";
import { ProjectActions } from "@/components/home/ProjectActions";
import { StackList } from "@/components/home/StackList";
import { jobtracker } from "@/content/projects";

export function JobTrackerFeature() {
  return (
    <article id="project-jobtracker" className="scroll-mt-24">
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">Product</p>
          <h3 className="mt-3 font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">
            {jobtracker.name}
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-mute sm:text-base">{jobtracker.problem}</p>
          <p className="mt-4 text-sm leading-relaxed text-ink/80 sm:text-base">{jobtracker.summary}</p>
          <ul className="mt-6 space-y-3 text-sm leading-relaxed text-mute">
            {jobtracker.highlights.map((item) => (
              <li key={item} className="border-l border-signal/40 pl-4">
                {item}
              </li>
            ))}
          </ul>
          <StackList items={jobtracker.stack} />
          <ProjectActions demo={jobtracker.demo} repo={jobtracker.repo} study={jobtracker.caseStudy} />
        </div>
        <JobTrackerPreview />
      </div>
    </article>
  );
}
