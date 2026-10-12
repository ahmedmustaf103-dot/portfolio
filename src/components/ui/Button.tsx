import type { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-ink text-canvas hover:bg-white active:bg-ink/90",
  secondary:
    "border border-line bg-transparent text-ink hover:border-ink/30 hover:bg-white/3",
  ghost: "text-mute hover:text-ink",
};

function buttonClass(variant: Variant, className?: string) {
  return cn(
    "inline-flex h-11 items-center justify-center rounded-md px-[1.15rem] text-sm font-medium tracking-[-0.01em]",
    variants[variant],
    className,
  );
}

function isInternal(href?: string): href is string {
  return Boolean(href && href.startsWith("/") && !href.startsWith("//"));
}

export function Button({
  variant = "primary",
  className,
  href,
  ...props
}: ComponentProps<"a"> & { variant?: Variant }) {
  const classes = buttonClass(variant, className);

  const label = (
    <>
      {props.children}
      {props.target === "_blank" ? <span className="sr-only"> (opens in a new tab)</span> : null}
    </>
  );

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes} {...props}>
      {label}
    </a>
  );
}
