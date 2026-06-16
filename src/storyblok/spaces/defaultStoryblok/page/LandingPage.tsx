import type { StoryblokPageContent } from "@/storyblok/helpers/storyblok-content";
import type { BlokProps } from "@/storyblok/types/types";

import { StoryblokPageLayout } from "./StoryblokPageLayout";

type LandingPageBlok = StoryblokPageContent & {
  component: "landing_page";
};

export default function LandingPage({ blok }: BlokProps<LandingPageBlok>) {
  return <StoryblokPageLayout blok={blok} />;
}
