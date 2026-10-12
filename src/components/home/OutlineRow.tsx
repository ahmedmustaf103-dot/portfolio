export function OutlineRow({
  id,
  name,
  summary,
}: {
  id: string;
  name: string;
  summary: string;
}) {
  return (
    <article id={id} className="scroll-mt-24 border-t border-line py-7 last:border-b last:border-line">
      <h3 className="text-xl tracking-tight text-ink sm:text-2xl">{name}</h3>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute sm:text-base">{summary}</p>
    </article>
  );
}
