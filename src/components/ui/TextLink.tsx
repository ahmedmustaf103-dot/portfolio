import type { ComponentProps } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

function isInternal(href?: string): href is string {
  return Boolean(href && href.startsWith("/") && !href.startsWith("//"));
}

export function TextLink({ className, href, ...props }: ComponentProps<"a">) {
  const classes = cn("text-sm text-ink underline-offset-4 hover:text-signal hover:underline", className);

  if (isInternal(href)) {
    return (
      <Link href={href} className={classes}>
        {props.children}
      </Link>
    );
  }

  return <a href={href} className={classes} {...props} />;
}
