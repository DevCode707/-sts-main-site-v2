import type { StoryblokLink } from "@/storyblok/spaces/stellar/types/types";

export function getHref(link?: StoryblokLink) {
  if (link === undefined) return "#";
  if (typeof link.url === "string" && link.url.trim().length > 0) {
    return link.url;
  }
  if (
    typeof link.cached_url === "string" &&
    link.cached_url.trim().length > 0
  ) {
    return `/${link.cached_url}`;
  }

  return "#";
}
