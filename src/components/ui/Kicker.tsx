import { cn } from "@/lib/cn";

export function Kicker({
  index,
  children,
  className,
}: {
  index?: string;
  children: string;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-mute",
        className,
      )}
    >
      {index ? (
        <>
          <span className="text-signal">{index}</span>
          <span className="mx-2 text-line">/</span>
        </>
      ) : null}
      {children}
    </p>
  );
}
