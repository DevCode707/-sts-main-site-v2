"use client";

import { cn } from "@/libs/cn";

type TestMenuToggleProps = {
  open: boolean;
  className?: string;
};

export function TestMenuToggle({ open, className }: TestMenuToggleProps) {
  return (
    <span
      className={cn("relative block size-6 shrink-0", className)}
      aria-hidden
    >
      <span
        className={cn(
          "absolute left-1/2 h-px w-4 -translate-x-1/2 bg-white transition-all duration-300 ease-out motion-reduce:transition-none",
          open
            ? "top-1/2 -translate-y-1/2 rotate-45"
            : "top-[9px] translate-y-0 rotate-0",
        )}
      />
      <span
        className={cn(
          "absolute left-1/2 h-px w-4 -translate-x-1/2 bg-white transition-all duration-300 ease-out motion-reduce:transition-none",
          open
            ? "top-1/2 -translate-y-1/2 -rotate-45"
            : "top-[16px] translate-y-0 rotate-0",
        )}
      />
    </span>
  );
}
