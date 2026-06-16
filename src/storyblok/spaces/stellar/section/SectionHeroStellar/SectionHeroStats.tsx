"use client";

import { cn } from "@/libs/cn";
import { useEffect, useRef, useState } from "react";

import { heroStatsStyles } from "./SectionHero.styles";
import type { HeroStatDisplay } from "./SectionHero.types";

type StatConfig = {
  id: string;
  end: number;
  suffix?: string;
  label?: string;
};

const DURATION_MS = 1600;

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

function formatValue(value: number, suffix?: string) {
  return `${Math.round(value)}${suffix ?? ""}`;
}

function toStatConfig(stat: HeroStatDisplay): StatConfig | undefined {
  if (stat.end === undefined) {
    if (stat.value === undefined || stat.value.length === 0) {
      return undefined;
    }

    return {
      id: stat.id,
      end: 0,
      suffix: stat.value,
      label: stat.label,
    };
  }

  return {
    id: stat.id,
    end: stat.end,
    suffix: stat.suffix,
    label: stat.label,
  };
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
  const isTextOnly =
    stat.end === 0 && stat.suffix !== undefined && stat.suffix.length > 0;
  const value = useCountUp(stat.end, active && !isTextOnly, instant);

  if (isTextOnly) {
    return (
      <div
        className={cn(
          "font-medium tracking-[-1px] text-text-primary",
          className,
        )}
      >
        {stat.suffix}
      </div>
    );
  }

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
  if (stat.label === undefined || stat.label.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        className,
        "text-[12px] font-normal leading-[16px] text-text-primary",
      )}
    >
      {stat.label}
    </div>
  );
}

function mobileStatBorder(index: number) {
  return cn(
    index % 2 === 0 && "border-r border-border-stat",
    index < 2 && "border-b border-border-stat",
  );
}

function SectionHeroStatsMobile({
  stats,
  active,
  instant,
}: {
  stats: StatConfig[];
  active: boolean;
  instant: boolean;
}) {
  return (
    <div className={heroStatsStyles.mobileGrid} aria-label="Key statistics">
      {stats.map((stat, index) => (
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

function SectionHeroStatsDesktop({
  stats,
  active,
  instant,
}: {
  stats: StatConfig[];
  active: boolean;
  instant: boolean;
}) {
  return (
    <div className={heroStatsStyles.desktopWrap} aria-label="Key statistics">
      <div className={heroStatsStyles.desktopList}>
        {stats.map((stat) => (
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

type SectionHeroStatsProps = {
  stats: HeroStatDisplay[];
};

export function SectionHeroStats({ stats }: SectionHeroStatsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [instant, setInstant] = useState(false);

  const statConfigs = stats
    .map(toStatConfig)
    .filter((stat): stat is StatConfig => stat !== undefined);

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

  if (statConfigs.length === 0) {
    return null;
  }

  return (
    <div ref={ref} className={heroStatsStyles.root}>
      <SectionHeroStatsMobile
        stats={statConfigs}
        active={active}
        instant={instant}
      />
      <SectionHeroStatsDesktop
        stats={statConfigs}
        active={active}
        instant={instant}
      />
    </div>
  );
}
