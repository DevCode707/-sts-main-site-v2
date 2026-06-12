import type { StoryblokAsset } from "@/storyblok/types/types";
import Image from "next/image";

type StoryImageProps = {
  asset?: StoryblokAsset;
  className?: string;
  height: number;
  priority?: boolean;
  width: number;
};

export default function StoryImage({
  asset,
  className,
  height,
  priority = false,
  width,
}: StoryImageProps) {
  if (typeof asset?.filename !== "string" || asset.filename.trim().length === 0)
    return null;

  return (
    <Image
      alt={asset.alt ?? ""}
      className={className}
      height={height}
      priority={priority}
      src={asset.filename}
      width={width}
    />
  );
}
