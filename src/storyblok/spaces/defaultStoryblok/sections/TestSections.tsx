import {
  isTestSection,
  type TestSectionBlok,
} from "@/storyblok/spaces/defaultStoryblok/sections/section-types";
import {
  StoryblokServerComponent,
  type SbBlokData,
} from "@storyblok/react/rsc";

function isRenderableSectionBlok(blok: SbBlokData): blok is TestSectionBlok {
  if (!isTestSection(blok.component)) {
    return false;
  }

  return true;
}

export function TestSections({ sections }: { sections: SbBlokData[] }) {
  return sections.map((sectionBlok) => {
    if (!isRenderableSectionBlok(sectionBlok)) {
      return null;
    }

    if (sectionBlok.hidden === true || sectionBlok.disabled === true) {
      return null;
    }

    const nestedBlocks = sectionBlok.body?.filter(
      (nested) =>
        typeof nested.component === "string" &&
        nested.component.length > 0 &&
        typeof nested._uid === "string" &&
        nested._uid.length > 0,
    );

    return nestedBlocks?.map((nestedBlok) => (
      <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
    ));
  });
}
