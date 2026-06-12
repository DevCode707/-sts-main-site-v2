import { cn } from "@/libs/cn";
import { type CSSProperties, type ReactNode } from "react";

export type TestRevealAnimation =
  | "fade-up"
  | "fade-in"
  | "fade-down"
  | "slide-left"
  | "slide-right"
  | "scale-up";

type TestRevealProps = {
  children: ReactNode;
  className?: string;
  animation?: TestRevealAnimation;
  delay?: number;
  duration?: number;

  immediate?: boolean;
};

export function TestReveal({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
  immediate = false,
}: TestRevealProps) {
  const style = {
    "--test-reveal-delay": `${delay}ms`,
    "--test-reveal-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <div
      {...(!immediate ? { "data-test-reveal": "" } : {})}
      style={style}
      className={cn(
        "test-reveal",
        `test-reveal-${animation}`,
        immediate && "test-reveal-immediate",
        className,
      )}
    >
      {children}
    </div>
  );
}

type TestHeroEnterProps = {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "slide-left";
  delay?: number;
  duration?: number;
};

export function TestHeroEnter({
  children,
  className,
  animation = "fade-up",
  delay = 0,
  duration = 700,
}: TestHeroEnterProps) {
  const style = {
    "--test-enter-delay": `${delay}ms`,
    "--test-enter-duration": `${duration}ms`,
  } as CSSProperties;

  return (
    <div
      style={style}
      className={cn(
        "test-hero-enter",
        animation === "slide-left" && "test-hero-enter-slide",
        className,
      )}
    >
      {children}
    </div>
  );
}
