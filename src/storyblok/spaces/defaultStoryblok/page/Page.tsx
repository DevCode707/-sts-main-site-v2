import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import type { BlokProps } from "@/storyblok/types/types";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function Page({ blok }: BlokProps<DefaultStoryBlok>) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="min-h-screen bg-white text-[#1f1f1f]"
    >
      {(blok.body ?? []).map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </main>
  );
}
