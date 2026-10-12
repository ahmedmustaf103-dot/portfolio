"use client";

import { useState } from "react";
import { PreviewCaption } from "@/components/previews/PreviewCaption";
import { cn } from "@/lib/cn";

const stages = [
  {
    id: "question",
    label: "Question",
    kind: "Input",
    tone: "neutral",
    body: "A research question is stored as the project brief. Nothing is searched or generated until a plan exists.",
  },
  {
    id: "plan",
    label: "Plan",
    kind: "Gemini + Zod",
    tone: "model",
    body: "Gemini returns a structured plan. Tasks are constrained by the schema — this is not an agent choosing tools on the fly.",
  },
  {
    id: "search",
    label: "Search",
    kind: "Brave",
    tone: "live",
    body: "Brave Search runs as an internal tool. Production uses the live API. Tests inject a mock.",
  },
  {
    id: "retrieve",
    label: "Retrieve",
    kind: "Jina",
    tone: "live",
    body: "Jina Reader fetches page text for planned URLs. Retrieval is capped so a run cannot wander the web.",
  },
  {
    id: "enrich",
    label: "Enrich",
    kind: "MCP fixture",
    tone: "fixture",
    body: "A local MCP server looks up company profiles by hostname. Those profiles are demo fixtures, not a live company-data API.",
  },
  {
    id: "extract",
    label: "Extract",
    kind: "Gemini + quotes",
    tone: "model",
    body: "Findings are extracted as structured objects. Quoted claims are checked against the retrieved source text.",
  },
  {
    id: "verify",
    label: "Verify",
    kind: "Deterministic",
    tone: "deterministic",
    body: "Citation hygiene and quote support are checked in code. Hallucinated quotes are rejected. Report URLs are never taken from the model.",
  },
  {
    id: "analyse",
    label: "Analyse",
    kind: "Gemini + Zod",
    tone: "model",
    body: "Structured analysis sits on verified findings. Conflicts and gaps stay visible instead of being smoothed over.",
  },
  {
    id: "report",
    label: "Report",
    kind: "Gemini + citations",
    tone: "model",
    body: "The brief is generated from persisted sources and findings. A Research Trace reconstructs provenance from stored data.",
  },
] as const;

const toneClass = {
  neutral: "text-mute",
  model: "text-signal",
  live: "text-ink",
  fixture: "text-warm",
  deterministic: "text-ink",
} as const;

export function ResearchPipeline() {
  const [active, setActive] = useState<(typeof stages)[number]["id"]>("question");
  const current = stages.find((stage) => stage.id === active) ?? stages[0];

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <div
        role="radiogroup"
        aria-label="ResearchFlow pipeline stages"
        className="grid grid-cols-3 border-b border-line lg:grid-cols-9"
      >
        {stages.map((stage, index) => {
          const selected = stage.id === active;
          return (
            <button
              key={stage.id}
              type="button"
              role="radio"
              id={`research-stage-${stage.id}`}
              aria-checked={selected}
              tabIndex={selected ? 0 : -1}
              className={cn(
                "min-h-14 border-b border-line px-2 py-3 text-left lg:border-b-0",
                index === stages.length - 1
                  ? ""
                  : (index + 1) % 3 === 0
                    ? "lg:border-r"
                    : "border-r",
                selected ? "bg-white/5 text-ink" : "text-mute hover:text-ink",
              )}
              onClick={() => setActive(stage.id)}
              onKeyDown={(event) => {
                if (
                  event.key !== "ArrowRight" &&
                  event.key !== "ArrowLeft" &&
                  event.key !== "ArrowDown" &&
                  event.key !== "ArrowUp" &&
                  event.key !== "Home" &&
                  event.key !== "End"
                ) {
                  return;
                }
                event.preventDefault();
                let next = index;
                if (event.key === "ArrowRight" || event.key === "ArrowDown") {
                  next = index + 1;
                }
                if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
                  next = index - 1;
                }
                if (event.key === "Home") {
                  next = 0;
                }
                if (event.key === "End") {
                  next = stages.length - 1;
                }
                const target = stages[(next + stages.length) % stages.length];
                setActive(target.id);
                document.getElementById(`research-stage-${target.id}`)?.focus();
              }}
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.12em] text-signal">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-1 block text-[13px] leading-tight tracking-tight">{stage.label}</span>
            </button>
          );
        })}
      </div>
      <div className="px-5 py-5">
        <p className={cn("font-mono text-[10px] uppercase tracking-[0.16em]", toneClass[current.tone])}>
          {current.kind}
        </p>
        <h4 className="mt-2 text-lg tracking-tight text-ink">{current.label}</h4>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mute">{current.body}</p>
      </div>
      <PreviewCaption>Interactive pipeline — not a live research run</PreviewCaption>
    </div>
  );
}
