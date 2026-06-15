import { TestHero } from "@/storyblok/shared/TestHero";
import type { HeroSectionBlok } from "@/storyblok/shared/TestHero";
import type { BlokProps } from "@/storyblok/types/types";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export function HeroSection({ blok }: BlokProps<HeroSectionBlok>) {
  if (blok.hidden === true) {
    return null;
  }

  const nestedBlocks = blok.body?.filter(
    (nested) =>
      typeof nested.component === "string" &&
      nested.component.length > 0 &&
      typeof nested._uid === "string" &&
      nested._uid.length > 0,
  );

  return (
    <div {...storyblokEditable(blok)}>
      <TestHero blok={blok} />
      {nestedBlocks?.map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
