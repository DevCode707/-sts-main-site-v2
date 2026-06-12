import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import type { ReactNode } from "react";

type SiteShellProps = {
  children: ReactNode;
  className?: string;
};

function SiteShell({ children, className }: SiteShellProps) {
  return (
    <div
      className={cn(
        figtree.className,
        "flex min-h-screen flex-col bg-white text-zinc-900",
        className,
      )}
    >
      {children}
    </div>
  );
}

export { SiteShell };
