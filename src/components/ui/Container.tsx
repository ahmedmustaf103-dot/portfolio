import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1240px] px-6 sm:px-8 lg:pr-10 lg:pl-24", className)}>
      {children}
    </div>
  );
}
