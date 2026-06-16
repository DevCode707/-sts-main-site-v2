import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import type { BlokProps } from "@/storyblok/types/types";

import { StoryblokPageLayout } from "./StoryblokPageLayout";

export default function Page({ blok }: BlokProps<DefaultStoryBlok>) {
  return <StoryblokPageLayout blok={blok} />;
}
