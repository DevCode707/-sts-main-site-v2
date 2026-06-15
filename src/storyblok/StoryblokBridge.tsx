"use client";

import { useStoryblokBridge } from "@storyblok/react";

type StoryblokBridgeProps = {
  storyId: number;
};

export function StoryblokBridge({ storyId }: StoryblokBridgeProps) {
  useStoryblokBridge(storyId, () => {
    window.location.reload();
  });

  return null;
}
