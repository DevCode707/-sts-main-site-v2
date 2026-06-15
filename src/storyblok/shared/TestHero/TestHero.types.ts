import type { SbBlokData } from "@storyblok/react/rsc";

export type HeroStatItemBlok = SbBlokData & {
  component: "hero_stat_item";
  value?: string;
  label?: string;
};

export type HeroSectionBlok = SbBlokData & {
  component: "hero_section";
  title?: string;
  headline?: string;
  description?: string;
  stats?: HeroStatItemBlok[];
  Stats?: HeroStatItemBlok[];
  hidden?: boolean;
  body?: SbBlokData[];
};

export type HeroStatDisplay = {
  id: string;
  value?: string;
  label?: string;
  end?: number;
  suffix?: string;
};

export function isHeroStatItemBlok(
  blok: SbBlokData | undefined,
): blok is HeroStatItemBlok {
  return (
    blok?.component === "hero_stat_item" &&
    typeof blok._uid === "string" &&
    blok._uid.length > 0
  );
}

export function getHeroSectionStats(
  blok?: HeroSectionBlok,
): HeroStatItemBlok[] | undefined {
  const stats = blok?.stats ?? blok?.Stats;

  return Array.isArray(stats) && stats.length > 0 ? stats : undefined;
}

export function mapHeroStats(
  stats?: HeroStatItemBlok[],
): HeroStatDisplay[] | undefined {
  if (stats === undefined || stats.length === 0) {
    return undefined;
  }

  const mapped = stats
    .filter(isHeroStatItemBlok)
    .map((stat) => {
      const value = stat.value?.trim();
      const label = stat.label?.trim();
      const parsed = value !== undefined ? parseStatValue(value) : undefined;

      return {
        id: stat._uid as string,
        value,
        label,
        end: parsed?.end,
        suffix: parsed?.suffix,
      } satisfies HeroStatDisplay;
    })
    .filter((stat) => {
      const hasValue = stat.value !== undefined && stat.value.length > 0;
      const hasLabel = stat.label !== undefined && stat.label.length > 0;

      return hasValue || hasLabel;
    });

  return mapped.length > 0 ? mapped : undefined;
}

function parseStatValue(value: string) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);

  if (match === null) {
    return undefined;
  }

  return {
    end: Number(match[1]),
    suffix: match[2] ?? "",
  };
}
