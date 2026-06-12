import type { StoryblokAsset } from "@/storyblok/types/types";
import type { SbBlokData } from "@storyblok/react/rsc";

export type StoryblokPageContent = SbBlokData & {
  title?: string;
  description?: string;
  seo_title?: string;
  seo_description?: string;
  og_image?: StoryblokAsset;
  breadcrumbs?: SbBlokData[];
  header?: SbBlokData[];
  footer?: SbBlokData[];
  sections?: SbBlokData[];
  body?: SbBlokData[];
};

export function getStorySections(content?: StoryblokPageContent): SbBlokData[] {
  const sections = content?.sections ?? content?.body ?? [];

  return sections.filter(isRenderableBlok);
}

export function getStoryHeader(
  content?: StoryblokPageContent,
): SbBlokData | null {
  const header = content?.header?.[0];

  return header !== undefined && isRenderableBlok(header) ? header : null;
}

export function getStoryFooter(
  content?: StoryblokPageContent,
): SbBlokData | null {
  const footer = content?.footer?.[0];

  return footer !== undefined && isRenderableBlok(footer) ? footer : null;
}

export function getStoryBreadcrumbs(
  content?: StoryblokPageContent,
): SbBlokData[] {
  const items = content?.breadcrumbs ?? [];

  return items.filter(isRenderableBlok);
}

export function isRenderableBlok(
  blok: SbBlokData | undefined,
): blok is SbBlokData {
  return (
    typeof blok?.component === "string" &&
    blok.component.trim().length > 0 &&
    typeof blok._uid === "string" &&
    blok._uid.trim().length > 0
  );
}

export function hasPageIntro(content?: StoryblokPageContent): boolean {
  return (
    (content?.title?.trim().length ?? 0) > 0 ||
    (content?.description?.trim().length ?? 0) > 0
  );
}
