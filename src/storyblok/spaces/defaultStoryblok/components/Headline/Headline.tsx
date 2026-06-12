import type { HeadlineSegmentBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import { StoryblokServerComponent } from "@storyblok/react/rsc";

type HeadlineProps = {
  headline?: HeadlineSegmentBlok[] | string;
};

export default function Headline({ headline }: HeadlineProps) {
  if (typeof headline === "string") return headline;
  if (headline === undefined || headline.length === 0) return null;

  return (
    <>
      {headline.map((headlineBlok) => (
        <StoryblokServerComponent blok={headlineBlok} key={headlineBlok._uid} />
      ))}
    </>
  );
}
