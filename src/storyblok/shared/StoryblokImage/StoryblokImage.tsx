import {
  getStoryblokAssetAlt,
  getStoryblokImageUrl,
  type StoryblokImageTransformType,
} from "@/storyblok/helpers/storyblok-image";
import type { StoryblokAsset } from "@/storyblok/types/types";
import Image, { type ImageProps } from "next/image";
import type { ReactNode } from "react";

type SharedImagePropsType = Omit<
  ImageProps,
  "src" | "alt" | "width" | "height"
>;

export type StoryblokImagePropsType = SharedImagePropsType & {
  image?: StoryblokAsset | null;
  mobileImage?: StoryblokAsset | null;
  alt?: string;
  width?: number;
  height?: number;
  transform?: StoryblokImageTransformType;
  mobileTransform?: StoryblokImageTransformType;
  fallback?: ReactNode;
  decorative?: boolean;
};

export function StoryblokImage({
  image,
  mobileImage,
  alt,
  width,
  height,
  transform,
  mobileTransform,
  fallback = null,
  decorative = false,
  className,
  ...imageProps
}: StoryblokImagePropsType) {
  const desktopSrc = getStoryblokImageUrl(image, transform);
  const mobileSrc = getStoryblokImageUrl(
    mobileImage,
    mobileTransform ?? transform,
  );
  const src = desktopSrc ?? mobileSrc;

  if (src === null) return fallback;

  const imageAlt = decorative ? "" : (alt ?? getStoryblokAssetAlt(image));

  if (mobileSrc !== null && desktopSrc !== null && mobileSrc !== desktopSrc) {
    return (
      <picture>
        <source media="(max-width: 639px)" srcSet={mobileSrc} />
        <Image
          {...imageProps}
          src={desktopSrc}
          alt={imageAlt}
          width={width}
          height={height}
          className={className}
        />
      </picture>
    );
  }

  return (
    <Image
      {...imageProps}
      src={src}
      alt={imageAlt}
      width={width}
      height={height}
      className={className}
    />
  );
}
