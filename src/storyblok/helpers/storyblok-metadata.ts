import type { StoryblokAsset } from "@/storyblok/types/types";
import type { Metadata } from "next";

type StoryContentForMetadata = {
  title?: string;
  description?: string;
  seo_title?: string;
  seo_description?: string;
  og_image?: StoryblokAsset;
};

type StoryForMetadata = {
  name: string;
  content?: StoryContentForMetadata;
};

export function storyToMetadata(story: StoryForMetadata): Metadata {
  const content = story.content;
  const seoTitle = content?.seo_title;
  const contentTitle = content?.title;
  const title =
    seoTitle !== undefined && seoTitle.length > 0
      ? seoTitle
      : contentTitle !== undefined && contentTitle.length > 0
        ? contentTitle
        : story.name;
  const seoDescription = content?.seo_description;
  const contentDescription = content?.description;
  const description =
    seoDescription !== undefined && seoDescription.length > 0
      ? seoDescription
      : contentDescription !== undefined && contentDescription.length > 0
        ? contentDescription
        : undefined;
  const ogImage = content?.og_image?.filename;
  const hasOgImage = ogImage !== undefined && ogImage.length > 0;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      ...(hasOgImage
        ? { images: [{ url: ogImage, alt: content?.og_image?.alt ?? title }] }
        : {}),
    },
    twitter: {
      card: hasOgImage ? "summary_large_image" : "summary",
      title,
      description,
      ...(hasOgImage ? { images: [ogImage] } : {}),
    },
  };
}
