import { getStoryblokAssetUrl } from "@/storyblok/helpers/storyblok-image";
import type { StoryblokLink } from "@/storyblok/spaces/stellar/types/types";
import { getHref } from "@/storyblok/spaces/stellar/utils/link";
import type { StoryblokAsset } from "@/storyblok/types/types";
import type { SbBlokData } from "@storyblok/react/rsc";

export type HeroStatItemBlok = SbBlokData & {
  component: "hero_stat_item";
  value?: string;
  label?: string;
};

export type HeroCollageImageBlok = SbBlokData & {
  component: "hero_collage_image";
  image?: StoryblokAsset;
  alt?: string;
  mobile_image?: StoryblokAsset;
};

export type SectionHeroBlok = SbBlokData & {
  component: "section_hero_stellar";
  badge_text?: string;
  title?: string;
  description?: string;
  primary_cta_label?: string;
  primary_cta_link?: StoryblokLink;
  primary_cta_avatar?: StoryblokAsset;
  primary_cta_online_indicator?: boolean;
  helper_text?: string;
  stats?: HeroStatItemBlok[];
  collage_images?: HeroCollageImageBlok[];
  hidden?: boolean;
};

export type HeroStatDisplay = {
  id: string;
  value?: string;
  label?: string;
  end?: number;
  suffix?: string;
};

export type SectionHeroViewModel = {
  badgeText?: string;
  title?: string;
  description?: string;
  primaryCtaLabel?: string;
  helperText?: string;
  ctaHref: string;
  primaryCtaAvatar?: StoryblokAsset;
  hasAvatar: boolean;
  showOnlineIndicator: boolean;
  stats?: HeroStatDisplay[];
  collageImages?: (HeroCollageImageBlok & { _uid: string })[];
};

export function mapSectionHero(blok: SectionHeroBlok): SectionHeroViewModel {
  return {
    badgeText: blok.badge_text?.trim(),
    title: blok.title?.trim(),
    description: blok.description?.trim(),
    primaryCtaLabel: blok.primary_cta_label?.trim(),
    helperText: blok.helper_text?.trim(),
    ctaHref: getHref(blok.primary_cta_link),
    primaryCtaAvatar: blok.primary_cta_avatar,
    hasAvatar: getStoryblokAssetUrl(blok.primary_cta_avatar) !== null,
    showOnlineIndicator: blok.primary_cta_online_indicator === true,
    stats: mapHeroStats(getSectionHeroStats(blok)),
    collageImages: getSectionHeroCollageImages(blok),
  };
}

function isHeroStatItem(stat: HeroStatItemBlok): stat is HeroStatItemBlok & {
  _uid: string;
} {
  return typeof stat._uid === "string" && stat._uid.length > 0;
}

function isHeroCollageImage(
  item: HeroCollageImageBlok,
): item is HeroCollageImageBlok & { _uid: string } {
  return (
    item.component === "hero_collage_image" &&
    typeof item._uid === "string" &&
    item._uid.length > 0
  );
}

export function getSectionHeroStats(
  blok?: SectionHeroBlok,
): (HeroStatItemBlok & { _uid: string })[] | undefined {
  const stats = blok?.stats;

  if (!Array.isArray(stats) || stats.length === 0) {
    return undefined;
  }

  const filtered = stats.filter(isHeroStatItem);

  return filtered.length > 0 ? filtered : undefined;
}

export function mapHeroStats(
  stats?: (HeroStatItemBlok & { _uid: string })[],
): HeroStatDisplay[] | undefined {
  if (stats === undefined || stats.length === 0) {
    return undefined;
  }

  const mapped = stats
    .map((stat) => {
      const value = stat.value?.trim();
      const label = stat.label?.trim();
      const parsed = value !== undefined ? parseStatValue(value) : undefined;

      return {
        id: stat._uid,
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

export function getSectionHeroCollageImages(
  blok?: SectionHeroBlok,
): (HeroCollageImageBlok & { _uid: string })[] | undefined {
  const collageImages = blok?.collage_images;

  if (!Array.isArray(collageImages) || collageImages.length === 0) {
    return undefined;
  }

  const filtered = collageImages.filter(isHeroCollageImage).filter((item) => {
    const desktopImage = getStoryblokAssetUrl(item.image);
    const mobileImage = getStoryblokAssetUrl(item.mobile_image);

    return desktopImage !== null || mobileImage !== null;
  });

  return filtered.length > 0 ? filtered : undefined;
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
