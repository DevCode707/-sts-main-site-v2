import StellarPage from "@/storyblok/spaces/stellar/page/Page";
import { SectionHero } from "@/storyblok/spaces/stellar/section/SectionHeroStellar";
import type { SbReactComponentsMap } from "@storyblok/react/rsc";

export const stellarStoryblokComponents: SbReactComponentsMap = {
  page: StellarPage,
  "default-page": StellarPage,
  landing_page: StellarPage,
  section_hero_stellar: SectionHero,
};
