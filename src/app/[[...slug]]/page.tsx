import { fetchStory } from "@/storyblok/api/fetch-story";
import { storyToMetadata } from "@/storyblok/helpers/storyblok-metadata";
import { StoryblokStory } from "@storyblok/react/rsc";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug?: string[] }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = await fetchStory(slug);

  if (!story) {
    return { title: "Not found" };
  }

  return storyToMetadata(story as Parameters<typeof storyToMetadata>[0]);
}

export default async function StoryblokPage({ params }: PageProps) {
  const { slug } = await params;
  const story = await fetchStory(slug);

  if (!story) {
    notFound();
  }

  return <StoryblokStory story={story} />;
}
