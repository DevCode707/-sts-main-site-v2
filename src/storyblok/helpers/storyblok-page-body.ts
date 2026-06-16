import type { SbBlokData } from "@storyblok/react/rsc";

import {
  getStoryBreadcrumbs,
  isRenderableBlok,
  type StoryblokPageContent,
} from "./storyblok-content";

const HEADER_COMPONENT = "Header";
const FOOTER_COMPONENT = "site_footer";
const BREADCRUMB_ITEM_COMPONENT = "breadcrumb_item";

export type PageBreadcrumbItemBlok = SbBlokData & {
  component: "breadcrumb_item";
  label?: string;
  href?: string;
  is_current?: boolean;
};

export function getPageBreadcrumbItems(
  blok: Pick<StoryblokPageContent, "body" | "breadcrumbs">,
): PageBreadcrumbItemBlok[] {
  const fromPageField = getStoryBreadcrumbs(blok).filter(
    (item): item is PageBreadcrumbItemBlok =>
      item.component === BREADCRUMB_ITEM_COMPONENT,
  );

  if (fromPageField.length > 0) {
    return fromPageField;
  }

  return (blok.body ?? [])
    .filter(isRenderableBlok)
    .filter(
      (item): item is PageBreadcrumbItemBlok =>
        item.component === BREADCRUMB_ITEM_COMPONENT,
    );
}

export function splitStoryblokPageBody(body?: SbBlokData[]) {
  const blocks = (body ?? []).filter(isRenderableBlok);

  const headerBlocks = blocks.filter(
    (blok) => blok.component === HEADER_COMPONENT,
  );
  const footerBlocks = blocks.filter(
    (blok) => blok.component === FOOTER_COMPONENT,
  );
  const contentBlocks = blocks.filter(
    (blok) =>
      blok.component !== HEADER_COMPONENT &&
      blok.component !== FOOTER_COMPONENT &&
      blok.component !== BREADCRUMB_ITEM_COMPONENT,
  );

  return { headerBlocks, footerBlocks, contentBlocks };
}
