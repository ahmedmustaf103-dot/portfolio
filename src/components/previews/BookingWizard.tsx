"use client";

import { useState } from "react";
import { PreviewCaption } from "@/components/previews/PreviewCaption";
import { cn } from "@/lib/cn";

const services = [
  { id: "haircut", name: "Haircut", meta: "30 min · £22" },
  { id: "beard", name: "Beard Trim", meta: "20 min · £15" },
  { id: "combo", name: "Haircut & Beard", meta: "45 min · £32" },
] as const;

const staff = [
  { id: "james", name: "James Carter" },
  { id: "adam", name: "Adam Lewis" },
] as const;

const times = ["10:00", "11:30", "14:00"] as const;

const steps = [
  { id: "service", label: "Service" },
  { id: "staff", label: "Staff" },
  { id: "time", label: "Time" },
] as const;

type StepId = (typeof steps)[number]["id"];

export function BookingWizard() {
  const [step, setStep] = useState<StepId>("service");
  const [service, setService] = useState<(typeof services)[number]["id"]>("haircut");
  const [person, setPerson] = useState<(typeof staff)[number]["id"]>("james");
  const [time, setTime] = useState<(typeof times)[number]>("10:00");

  const selectedService = services.find((item) => item.id === service) ?? services[0];
  const selectedStaff = staff.find((item) => item.id === person) ?? staff[0];

  return (
    <div className="overflow-hidden rounded-[14px] border border-line bg-surface">
      <div className="flex border-b border-line">
        {steps.map((item) => {
          const selected = item.id === step;
          return (
            <button
              key={item.id}
              type="button"
              aria-current={selected ? "step" : undefined}
              onClick={() => setStep(item.id)}
              className={cn(
                "flex-1 px-3 py-3 text-sm",
                selected ? "text-warm" : "text-mute hover:text-ink",
              )}
            >
              {item.label}
            </button>
          );
        })}
      </div>
      <div className="p-5">
        {step === "service" && (
          <ChoiceList
            legend="Choose a service"
            options={services.map((item) => ({
              id: item.id,
              title: item.name,
              meta: item.meta,
            }))}
            value={service}
            onChange={setService}
          />
        )}
        {step === "staff" && (
          <ChoiceList
            legend="Choose staff"
            options={staff.map((item) => ({
              id: item.id,
              title: item.name,
              meta: selectedService.name,
            }))}
            value={person}
            onChange={setPerson}
          />
        )}
        {step === "time" && (
          <ChoiceList
            legend="Choose a time"
            options={times.map((slot) => ({
              id: slot,
              title: slot,
              meta: selectedStaff.name,
            }))}
            value={time}
            onChange={(value) => setTime(value as (typeof times)[number])}
          />
        )}
        <p className="mt-5 text-sm text-mute">
          {selectedService.name}
          <span className="mx-2 text-line">/</span>
          {selectedStaff.name}
          <span className="mx-2 text-line">/</span>
          {time}
        </p>
      </div>
      <PreviewCaption>
        Interface preview of the Atelier Hale demo shop — not a production screenshot
      </PreviewCaption>
    </div>
  );
}

function ChoiceList<T extends string>({
  legend,
  options,
  value,
  onChange,
}: {
  legend: string;
  options: { id: T; title: string; meta: string }[];
  value: T;
  onChange: (id: T) => void;
}) {
  return (
    <fieldset>
      <legend className="font-mono text-[10px] uppercase tracking-[0.16em] text-warm">{legend}</legend>
      <div className="mt-3 space-y-2">
        {options.map((option) => {
          const selected = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => onChange(option.id)}
              className={cn(
                "flex w-full items-baseline justify-between gap-3 rounded-md px-3 py-3 text-left",
                selected ? "bg-warm/10 text-ink" : "text-mute hover:text-ink",
              )}
            >
              <span>{option.title}</span>
              <span className="font-mono text-[11px] text-mute">{option.meta}</span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
