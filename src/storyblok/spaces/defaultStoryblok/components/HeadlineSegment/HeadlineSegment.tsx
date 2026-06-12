import type { HeadlineSegmentBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { headlineSegmentStyles } from "./HeadlineSegment.styles";

export default function HeadlineSegment({
  blok,
}: BlokProps<HeadlineSegmentBlok>) {
  const isHighlighted =
    blok.highlight !== undefined &&
    blok.highlight !== "" &&
    blok.highlight !== "none";

  return (
    <span
      {...storyblokEditable(blok)}
      className={isHighlighted ? headlineSegmentStyles.highlight : undefined}
    >
      {blok.text}
    </span>
  );
}
