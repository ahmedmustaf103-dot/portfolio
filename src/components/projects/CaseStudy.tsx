import type { ReactNode } from "react";
import { JobTrackerPreview } from "@/components/previews/JobTrackerPreview";
import { InsightSplit } from "@/components/previews/InsightSplit";
import { ResearchPipeline } from "@/components/previews/ResearchPipeline";
import { ProjectActions } from "@/components/home/ProjectActions";
import { StackList } from "@/components/home/StackList";
import { ArchFlow, DualPath } from "@/components/projects/ArchFlow";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";
import { TextLink } from "@/components/ui/TextLink";
import { otherStudies, type CaseStudy as CaseStudyData } from "@/content/case-studies";
import { homeSection } from "@/lib/paths";

export function CaseStudy({ study }: { study: CaseStudyData }) {
  const others = otherStudies(study.slug);

  return (
    <main id="content" tabIndex={-1} className="outline-none">
      <header className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <TextLink href={homeSection("projects")}>← Portfolio</TextLink>
          <Kicker className="mt-8">{study.kicker}</Kicker>
          <h1 className="mt-5 max-w-3xl font-serif text-[2.15rem] leading-[1.1] tracking-[-0.03em] text-ink sm:text-5xl">
            {study.name}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-mute sm:text-[1.05rem]">
            {study.summary}
          </p>
          <ProjectActions demo={study.demo} repo={study.repo} note={study.demoNote} />
        </Container>
      </header>

      <StudyBlock index="01" label="Problem" title="Who it is for, and what is broken">
        <div className="grid gap-10 lg:grid-cols-2">
          <Prose>
            <p>{study.problem}</p>
            <p className="mt-4">{study.why}</p>
          </Prose>
          <aside className="rounded-[14px] border border-line bg-surface px-5 py-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">Intended users</p>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">{study.users}</p>
          </aside>
        </div>
      </StudyBlock>

      <StudyBlock index="02" label="Product" title="What the software actually does">
        <Prose>
          <p>{study.overview}</p>
        </Prose>
        <ol className="mt-8 space-y-4">
          {study.workflow.map((item, index) => (
            <li key={item} className="grid gap-3 border-t border-line pt-4 sm:grid-cols-[3rem_minmax(0,1fr)]">
              <span className="font-mono text-[11px] text-signal">{String(index + 1).padStart(2, "0")}</span>
              <p className="text-sm leading-relaxed text-mute sm:text-base">{item}</p>
            </li>
          ))}
        </ol>
      </StudyBlock>

      <StudyBlock index="03" label="Architecture" title="How the pieces fit">
        <Prose>
          <p>{study.architecture}</p>
        </Prose>
        <div className="mt-8">
          <Architecture study={study} />
        </div>
      </StudyBlock>

      <StudyBlock index="04" label="Implementation" title="AI, validation, and failure handling">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg tracking-tight text-ink">Model and tools</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{study.ai}</p>
          </div>
          <div>
            <h3 className="text-lg tracking-tight text-ink">Reliability</h3>
            <p className="mt-3 text-sm leading-relaxed text-mute sm:text-base">{study.reliability}</p>
          </div>
        </div>
        {study.tools ? (
          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-sm">
              <caption className="mb-4 text-left font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
                Agent and MCP tools
              </caption>
              <thead className="font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
                <tr>
                  <th className="pb-3 font-medium">Tool</th>
                  <th className="pb-3 font-medium">Purpose</th>
                  <th className="pb-3 font-medium">Surface</th>
                </tr>
              </thead>
              <tbody>
                {study.tools.map((tool) => (
                  <tr key={tool.name} className="border-t border-line">
                    <td className="py-2.5 pr-4 font-mono text-[12px] text-ink">{tool.name}</td>
                    <td className="py-2.5 pr-4 text-mute">{tool.purpose}</td>
                    <td className="py-2.5 text-mute">{tool.surface}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : null}
      </StudyBlock>

      <StudyBlock index="05" label="Interface" title="What a reviewer can see">
        <Interface study={study} />
      </StudyBlock>

      <StudyBlock index="06" label="Evaluation" title="What has been measured">
        <Prose>
          <p>{study.testing}</p>
        </Prose>
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-lg tracking-tight text-ink">Decisions</h3>
            <ul className="mt-4 space-y-3">
              {study.decisions.map((item) => (
                <li key={item} className="border-l border-signal/40 pl-4 text-sm leading-relaxed text-mute">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg tracking-tight text-ink">Limitations</h3>
            <ul className="mt-4 space-y-3">
              {study.limitations.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-mute">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <StackList items={study.stack} />
      </StudyBlock>

      <StudyBlock index="07" label="Next" title="Other flagship work">
        <ul className="grid gap-6 sm:grid-cols-2">
          {others.map((item) => (
            <li key={item.slug} className="border-t border-line pt-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">{item.kicker}</p>
              <h3 className="mt-2 text-lg tracking-tight text-ink">{item.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mute">{item.summary}</p>
              <TextLink href={`/projects/${item.slug}`} className="mt-4 inline-block">
                Read the case study
              </TextLink>
            </li>
          ))}
        </ul>
        <p className="mt-10">
          <TextLink href={homeSection("projects")}>Back to the portfolio</TextLink>
        </p>
      </StudyBlock>
    </main>
  );
}

function Architecture({ study }: { study: CaseStudyData }) {
  if (study.slug === "jobtracker-ai") {
    return (
      <div className="space-y-6">
        <DualPath
          leftKicker="In-app"
          leftTitle="Signed-in Gemini agent"
          left={[
            "Browser to Next.js and Auth.js",
            "Gemini function calling with five tools",
            "Shared capability handlers",
            "Prisma services scoped by userId",
          ]}
          rightKicker="Local host"
          rightTitle="MCP stdio server"
          right={[
            "Cursor or Inspector over stdio",
            "Seven tools, identity from local env",
            "The same capability handlers",
            "The same Prisma services",
          ]}
          join="Both paths share validation, ownership and error sanitization. Job Match stays on the application detail page and is not an agent or MCP tool."
          caption="Architecture — two clients, one capability layer"
        />
        <ArchFlow nodes={study.flow} caption="Request path from the interface to PostgreSQL" />
      </div>
    );
  }

  return <ArchFlow nodes={study.flow} caption={`${study.name} workflow`} />;
}

function Interface({ study }: { study: CaseStudyData }) {
  if (study.slug === "jobtracker-ai") {
    return (
      <div className="max-w-4xl">
        <JobTrackerPreview />
      </div>
    );
  }

  if (study.slug === "researchflow-ai") {
    return <ResearchPipeline />;
  }

  return <InsightSplit />;
}

function StudyBlock({
  index,
  label,
  title,
  children,
}: {
  index: string;
  label: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="border-b border-line">
      <Container className="py-16 sm:py-20">
        <Kicker index={index}>{label}</Kicker>
        <h2 className="mt-5 max-w-2xl font-serif text-3xl tracking-[-0.03em] text-ink sm:text-4xl">{title}</h2>
        <div className="mt-10">{children}</div>
      </Container>
    </section>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return <div className="max-w-2xl text-sm leading-relaxed text-mute sm:text-base">{children}</div>;
}
