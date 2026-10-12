import { Button } from "@/components/ui/Button";

export function ProjectActions({
  demo,
  repo,
  study,
  demoLabel = "Live demo",
  note,
}: {
  demo: string;
  repo: string;
  study?: string;
  demoLabel?: string;
  note?: string;
}) {
  return (
    <div className="mt-8">
      <div className="flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
        <Button href={demo} target="_blank" rel="noopener noreferrer">
          {demoLabel}
        </Button>
        <Button href={repo} variant="secondary" target="_blank" rel="noopener noreferrer">
          GitHub
        </Button>
        {study ? (
          <Button href={study} variant="ghost">
            Case study
          </Button>
        ) : null}
      </div>
      {note ? <p className="mt-3 max-w-md text-xs leading-relaxed text-mute">{note}</p> : null}
    </div>
  );
}
