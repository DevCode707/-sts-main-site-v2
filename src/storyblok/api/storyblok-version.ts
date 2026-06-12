export type StoryblokVersion = "draft" | "published";

export function getStoryblokVersion(): StoryblokVersion {
  const version = process.env["STORYBLOK_VERSION"];
  if (version === "published") {
    return "published";
  }
  if (version === "draft") {
    return "draft";
  }

  return process.env.NODE_ENV === "production" ? "published" : "draft";
}
