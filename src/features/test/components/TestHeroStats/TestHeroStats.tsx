"use client";

import { cn } from "@/libs/cn";
import { useEffect, useRef, useState } from "react";

import { testHeroStats } from "./TestHeroStats.const";
import { heroStatsStyles } from "./TestHeroStats.styles";

export type StatConfig = {
  id: string;
  end: number;
  suffix?: string;
  labelLines: string[];
};

const DURATION_MS = 1600;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function formatValue(value: number, suffix?: string) {
  return `${Math.round(value)}${suffix ?? ""}`;
}

function useCountUp(end: number, active: boolean, instant: boolean) {
  const [value, setValue] = useState(instant ? end : 0);

  useEffect(() => {
    if (!active) return;

    if (instant) {
      setValue(end);

      return;
    }

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION_MS, 1);
      setValue(end * easeOutCubic(progress));

      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };

    frame = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(frame);
  }, [active, end, instant]);

  return value;
}

function StatNumber({
  className,
  stat,
  active,
  instant,
}: {
  stat: StatConfig;
  active: boolean;
  instant: boolean;
  className?: string;
}) {
  const value = useCountUp(stat.end, active, instant);

  return (
    <div
      className={cn("font-medium tracking-[-1px] text-text-primary", className)}
    >
      {formatValue(value, stat.suffix)}
    </div>
  );
}

function StatLabel({
  className,
  stat,
}: {
  className?: string;
  stat: StatConfig;
}) {
  return (
    <div
      className={cn(
        className,
        "text-[12px] font-normal leading-[16px] text-text-primary",
      )}
    >
      {stat.labelLines[0]}
    </div>
  );
}

function mobileStatBorder(index: number) {
  return cn(
    index % 2 === 0 && "border-r border-border-stat",
    index < 2 && "border-b border-border-stat",
  );
}

function TestHeroStatsMobile({
  active,
  instant,
}: {
  active: boolean;
  instant: boolean;
}) {
  return (
    <div className={heroStatsStyles.mobileGrid} aria-label="Key statistics">
      {testHeroStats.map((stat, index) => (
        <div
          key={stat.id}
          className={cn(
            "flex flex-col items-center justify-center px-3 py-6 text-center",
            mobileStatBorder(index),
          )}
        >
          <StatNumber
            stat={stat}
            active={active}
            instant={instant}
            className={heroStatsStyles.mobileValue}
          />
          <StatLabel stat={stat} className={heroStatsStyles.mobileLabel} />
        </div>
      ))}
    </div>
  );
}

function TestHeroStatsDesktop({
  active,
  instant,
}: {
  active: boolean;
  instant: boolean;
}) {
  return (
    <div className={heroStatsStyles.desktopWrap} aria-label="Key statistics">
      <div className={heroStatsStyles.desktopList}>
        {testHeroStats.map((stat) => (
          <div key={`${stat.id}-value`} className={heroStatsStyles.desktopItem}>
            <StatNumber
              stat={stat}
              active={active}
              instant={instant}
              className={heroStatsStyles.desktopValue}
            />
            <StatLabel key={`${stat.id}-label`} stat={stat} />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TestHeroStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [instant, setInstant] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setInstant(true);
      setActive(true);

      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry !== undefined && entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={heroStatsStyles.root}>
      <TestHeroStatsMobile active={active} instant={instant} />
      <TestHeroStatsDesktop active={active} instant={instant} />
    </div>
  );
}
