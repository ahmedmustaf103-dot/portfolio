"use client";

import { useState } from "react";
import { PreviewCaption } from "@/components/previews/PreviewCaption";
import { cn } from "@/lib/cn";

const lanes = {
  llm: [
    {
      id: "intent",
      label: "Read the question",
      body: "The user’s wording is the contract. Profit is not silently rewritten as revenue.",
    },
    {
      id: "plan",
      label: "Structured AnalysisPlan",
      body: "Gemini returns a Zod-validated plan: operation, columns, filters, metrics. It does not return numbers.",
    },
    {
      id: "guard",
      label: "Validate + intent check",
      body: "Missing columns fail closed. A valid plan that answers a different question is also rejected.",
    },
  ],
  pandas: [
    {
      id: "profile",
      label: "Profile the CSV",
      body: "Pandas inspects schema, types and nulls before any model call shapes the analysis.",
    },
    {
      id: "execute",
      label: "Closed operation catalog",
      body: "Only aggregate, trend and detail run. No generated Python, no exec, no shell.",
    },
    {
      id: "evidence",
      label: "Check claims + chart",
      body: "Numeric claims in the explanation are checked against the result. Charts come from the table, not the prose.",
    },
  ],
} as const;

type StepId = (typeof lanes.llm)[number]["id"] | (typeof lanes.pandas)[number]["id"];

export function InsightSplit() {
  const [active, setActive] = useState<StepId>("plan");
  const all = [...lanes.llm, ...lanes.pandas];
  const current = all.find((step) => step.id === active) ?? lanes.llm[1];

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <div className="grid border-b border-line lg:grid-cols-2">
        <Lane
          title="LLM plans"
          kicker="Reasoning"
          steps={lanes.llm}
          active={active}
          onSelect={setActive}
        />
        <Lane
          title="Pandas calculates"
          kicker="Deterministic"
          steps={lanes.pandas}
          active={active}
          onSelect={setActive}
          accent
        />
      </div>
      <div className="px-5 py-5">
        <h4 className="text-lg tracking-tight text-ink">{current.label}</h4>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{current.body}</p>
      </div>
      <div className="border-t border-line px-5 py-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">Sample fixture</p>
        <p className="mt-2 text-sm text-ink">Which products generated the most revenue in 2025?</p>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead className="font-mono text-[10px] uppercase tracking-[0.12em] text-mute">
              <tr>
                <th className="pb-2 font-medium">Product</th>
                <th className="pb-2 font-medium">sum_revenue</th>
              </tr>
            </thead>
            <tbody className="text-ink">
              <tr className="border-t border-line">
                <td className="py-2">Sensor</td>
                <td>500</td>
              </tr>
              <tr className="border-t border-line">
                <td className="py-2">Gadget</td>
                <td>340</td>
              </tr>
              <tr className="border-t border-line">
                <td className="py-2">Widget</td>
                <td>325</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <PreviewCaption>
        Interface preview using the project’s sales.csv fixture — not a production screenshot
      </PreviewCaption>
    </div>
  );
}

function Lane({
  title,
  kicker,
  steps,
  active,
  onSelect,
  accent = false,
}: {
  title: string;
  kicker: string;
  steps: readonly { id: StepId; label: string; body: string }[];
  active: StepId;
  onSelect: (id: StepId) => void;
  accent?: boolean;
}) {
  return (
    <div className={cn("p-5", accent ? "bg-white/[0.02] lg:border-l lg:border-line" : "")}>
      <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-signal">{kicker}</p>
      <h4 className="mt-1 text-base text-ink">{title}</h4>
      <ol className="mt-4 space-y-2">
        {steps.map((step) => {
          const selected = step.id === active;
          return (
            <li key={step.id}>
              <button
                type="button"
                aria-pressed={selected}
                onClick={() => onSelect(step.id)}
                className={cn(
                  "w-full rounded-md px-3 py-2.5 text-left text-sm",
                  selected ? "bg-white/6 text-ink" : "text-mute hover:text-ink",
                )}
              >
                {step.label}
              </button>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
