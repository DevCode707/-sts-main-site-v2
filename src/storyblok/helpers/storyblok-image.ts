import type { StoryblokAsset } from "@/storyblok/types/types";

export type StoryblokImageTransformType = {
  width?: number;
  height?: number;
  quality?: number;
  format?: "webp" | "avif" | "jpg" | "png";
};

const STORYBLOK_ASSET_HOST_PATTERN = /\/\/a\.storyblok\.com\/f\//;

export function getStoryblokAssetUrl(asset?: StoryblokAsset | null) {
  const filename = asset?.filename?.trim();

  return filename !== undefined && filename.length > 0 ? filename : null;
}

export function getStoryblokAssetAlt(
  asset?: StoryblokAsset | null,
  fallback = "",
) {
  const assetAlt = asset?.alt?.trim();

  if (assetAlt !== undefined && assetAlt.length > 0) {
    return assetAlt;
  }

  const assetTitle = asset?.title?.trim();

  if (assetTitle !== undefined && assetTitle.length > 0) {
    return assetTitle;
  }

  const assetName = asset?.name?.trim();

  if (assetName !== undefined && assetName.length > 0) {
    return assetName;
  }

  return fallback;
}

export function isStoryblokAssetUrl(url: string) {
  return STORYBLOK_ASSET_HOST_PATTERN.test(url);
}

export function isTransformableStoryblokImage(url: string) {
  return (
    isStoryblokAssetUrl(url) && !url.includes("/m/") && !url.endsWith(".svg")
  );
}

export function getStoryblokImageUrl(
  asset?: StoryblokAsset | null,
  transform?: StoryblokImageTransformType,
) {
  const url = getStoryblokAssetUrl(asset);

  if (
    url === null ||
    transform === undefined ||
    !isTransformableStoryblokImage(url)
  ) {
    return url;
  }

  const transforms: string[] = [];

  if (transform.width !== undefined || transform.height !== undefined) {
    transforms.push(`${transform.width ?? 0}x${transform.height ?? 0}`);
  }

  const filters: string[] = [];

  if (transform.quality !== undefined) {
    filters.push(`quality(${transform.quality})`);
  }

  if (transform.format !== undefined) {
    filters.push(`format(${transform.format})`);
  }

  if (filters.length > 0) {
    transforms.push(`filters:${filters.join(":")}`);
  }

  return transforms.length > 0 ? `${url}/m/${transforms.join("/")}` : url;
}
