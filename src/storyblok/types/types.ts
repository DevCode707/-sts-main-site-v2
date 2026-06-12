import type { SbBlokData } from "@storyblok/react/rsc";

export type StoryblokAsset = {
  id?: number;
  filename?: string;
  alt?: string;
  name?: string;
  focus?: string;
  title?: string;
  source?: string;
  copyright?: string;
  fieldtype?: string;
};

export type BlokProps<T extends SbBlokData = SbBlokData> = {
  blok: T;
};

export type { StoryblokPageContent } from "@/storyblok/helpers/storyblok-content";
export type { TestSection } from "@/storyblok/spaces/defaultStoryblok/sections/section-types";
