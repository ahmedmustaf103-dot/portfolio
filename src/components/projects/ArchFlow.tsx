import type { FlowNode } from "@/content/case-studies";

export function ArchFlow({
  nodes,
  caption,
}: {
  nodes: FlowNode[];
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <ol className="divide-y divide-line">
        {nodes.map((node, index) => (
          <li key={node.id} className="grid gap-3 px-5 py-4 sm:grid-cols-[4.5rem_minmax(0,1fr)] sm:items-start">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-signal">
              {String(index + 1).padStart(2, "0")}
            </p>
            <div>
              <p className="text-[15px] tracking-tight text-ink">{node.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-mute">{node.detail}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
        {caption}
      </figcaption>
    </figure>
  );
}

export function DualPath({
  leftTitle,
  leftKicker,
  left,
  rightTitle,
  rightKicker,
  right,
  join,
  caption,
}: {
  leftTitle: string;
  leftKicker: string;
  left: readonly string[];
  rightTitle: string;
  rightKicker: string;
  right: readonly string[];
  join: string;
  caption: string;
}) {
  return (
    <figure className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <div className="grid lg:grid-cols-2">
        <PathColumn kicker={leftKicker} title={leftTitle} steps={left} />
        <PathColumn kicker={rightKicker} title={rightTitle} steps={right} accent />
      </div>
      <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-ink">{join}</p>
      <figcaption className="border-t border-line px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.14em] text-mute">
        {caption}
      </figcaption>
    </figure>
  );
}

function PathColumn({
  kicker,
  title,
  steps,
  accent = false,
}: {
  kicker: string;
  title: string;
  steps: readonly string[];
  accent?: boolean;
}) {
  return (
    <div className={accent ? "border-t border-line bg-white/[0.02] p-5 lg:border-t-0 lg:border-l" : "p-5"}>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">{kicker}</p>
      <h3 className="mt-1 text-base tracking-tight text-ink">{title}</h3>
      <ol className="mt-4 space-y-2">
        {steps.map((step, index) => (
          <li key={step} className="flex gap-3 text-sm leading-relaxed text-mute">
            <span className="font-mono text-[10px] text-signal">{String(index + 1).padStart(2, "0")}</span>
            {step}
          </li>
        ))}
      </ol>
    </div>
  );
}
