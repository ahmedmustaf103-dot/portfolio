import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { Kicker } from "@/components/ui/Kicker";

export function Chapter({
  id,
  index,
  label,
  title,
  children,
  tone = "default",
}: {
  id: string;
  index: string;
  label: string;
  title: string;
  children: ReactNode;
  tone?: "default" | "warm";
}) {
  return (
    <section
      id={id}
      className={
        tone === "warm"
          ? "scroll-mt-16 border-b border-line bg-[linear-gradient(180deg,rgb(215_181_109/0.04),transparent_28%)]"
          : "scroll-mt-16 border-b border-line"
      }
    >
      <Container className="py-20 sm:py-24">
        <Kicker index={index}>{label}</Kicker>
        <h2 className="mt-5 max-w-2xl font-serif text-4xl tracking-[-0.03em] text-ink sm:text-5xl">
          {title}
        </h2>
        <div className="mt-12">{children}</div>
      </Container>
    </section>
  );
}
