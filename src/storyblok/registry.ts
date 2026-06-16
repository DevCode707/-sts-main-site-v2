import { BreadcrumbItem } from "@/storyblok/shared/Breadcrumbs";
import { Header } from "@/storyblok/shared/Header";
import { SiteFooter } from "@/storyblok/spaces/defaultStoryblok/layout/Footer/Footer";
import { stellarStoryblokComponents } from "@/storyblok/spaces/stellar/registry";
import type { SbReactComponentsMap } from "@storyblok/react/rsc";

const sharedStoryblokComponents: SbReactComponentsMap = {
  Header,
  breadcrumb_item: BreadcrumbItem,
  site_footer: SiteFooter,
};

export const storyblokComponents: SbReactComponentsMap = {
  ...sharedStoryblokComponents,
  ...stellarStoryblokComponents,
};
