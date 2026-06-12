import type { StoryblokAsset } from "@/storyblok/types/types";
import type { SbBlokData } from "@storyblok/react/rsc";

export type StoryblokLink = {
  cached_url?: string;
  url?: string;
  linktype?: string;
};

export type ButtonBlok = SbBlokData & {
  label?: string;
  link?: StoryblokLink;
  text_color?: string;
  background_color?: string;
  style?: string;
};

export type HeadlineSegmentBlok = SbBlokData & {
  text?: string;
  highlight?: string;
};

export type RichTextNode = {
  type?: string;
  text?: string;
  marks?: { type?: string }[];
  content?: RichTextNode[];
};

export type RichTextDoc = {
  type?: string;
  content?: RichTextNode[];
};

export type DefaultStoryBlok = SbBlokData & {
  eyebrow?: string;
  headline?: HeadlineSegmentBlok[] | string;
  lead?: string;
  text?: string | RichTextDoc;
  image?: StoryblokAsset;
  background_image?: StoryblokAsset;
  buttons?: ButtonBlok[];
  button?: ButtonBlok[];
  body?: SbBlokData[];
  entries?: DefaultStoryBlok[];
  cards?: DefaultStoryBlok[];
  articles?: (StoryRelation | string)[];
  banners?: (StoryRelation | string)[];
  label?: string;
  icon?: StoryblokAsset;
  description?: RichTextDoc;
};

export type StoryRelation = {
  uuid?: string;
  name?: string;
  slug?: string;
  full_slug?: string;
  content?: DefaultStoryBlok & {
    meta_description?: string;
  };
};
