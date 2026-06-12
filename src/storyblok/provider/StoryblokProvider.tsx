import { getStoryblokApi } from "@/storyblok/api/storyblok-client";
import type { ReactNode } from "react";

export default function StoryblokProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  getStoryblokApi();

  return children;
}
