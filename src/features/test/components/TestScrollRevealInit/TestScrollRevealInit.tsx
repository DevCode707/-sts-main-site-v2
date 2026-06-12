"use client";

import { useEffect } from "react";

const ANIMATION_MAP: Record<string, string> = {
  "test-reveal-fade-up": "test-anim-fade-up",
  "test-reveal-fade-down": "test-anim-fade-down",
  "test-reveal-fade-in": "test-anim-fade-in",
  "test-reveal-slide-left": "test-anim-slide-left",
  "test-reveal-slide-right": "test-anim-slide-right",
  "test-reveal-scale-up": "test-anim-scale-up",
};

function getAnimationName(node: HTMLElement) {
  for (const className of node.classList) {
    const animation = ANIMATION_MAP[className];
    if (animation !== undefined && animation.length > 0) return animation;
  }

  return "test-anim-fade-up";
}

function finishReveal(node: HTMLElement) {
  node.style.animation = "";
  node.classList.remove("test-reveal-animating");
  node.classList.add("test-reveal-done");
  node.removeAttribute("data-test-reveal");
}

function revealNode(node: HTMLElement) {
  if (node.classList.contains("test-reveal-done")) return;

  const styles = getComputedStyle(node);
  const parsedDelay = Number.parseInt(
    styles.getPropertyValue("--test-reveal-delay"),
    10,
  );
  const parsedDuration = Number.parseInt(
    styles.getPropertyValue("--test-reveal-duration"),
    10,
  );
  const delay = Number.isFinite(parsedDelay) ? parsedDelay : 0;
  const duration = Number.isFinite(parsedDuration) ? parsedDuration : 700;

  const animationName = getAnimationName(node);
  node.classList.add("test-reveal-animating");
  node.style.animation = `${animationName} ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms both`;

  let finished = false;
  const complete = () => {
    if (finished) return;
    finished = true;
    finishReveal(node);
    node.removeEventListener("animationend", onAnimationEnd);
  };

  const onAnimationEnd = (event: AnimationEvent) => {
    if (event.target !== node) return;
    complete();
  };

  node.addEventListener("animationend", onAnimationEnd);
  window.setTimeout(complete, delay + duration + 120);
}

export function TestScrollRevealInit() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>("[data-test-reveal]")
        .forEach((node) => {
          finishReveal(node);
        });

      return;
    }

    const nodes = document.querySelectorAll<HTMLElement>("[data-test-reveal]");
    if (nodes.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const node = entry.target as HTMLElement;
          observer.unobserve(node);
          revealNode(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px 8% 0px",
      },
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  return null;
}
