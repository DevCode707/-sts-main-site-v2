import {
  getPageBreadcrumbItems,
  splitStoryblokPageBody,
} from "@/storyblok/helpers/storyblok-page-body";
import { Breadcrumbs } from "@/storyblok/shared/Breadcrumbs";
import type { BlokProps } from "@/storyblok/types/types";
import {
  StoryblokServerComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";

type StellarPageBlok = SbBlokData & {
  body?: SbBlokData[];
  breadcrumbs?: SbBlokData[];
};

export default function StellarPage({ blok }: BlokProps<StellarPageBlok>) {
  const breadcrumbItems = getPageBreadcrumbItems(blok);
  const { headerBlocks, footerBlocks, contentBlocks } = splitStoryblokPageBody(
    blok.body,
  );

  return (
    <>
      {headerBlocks.map((headerBlok) => (
        <StoryblokServerComponent blok={headerBlok} key={headerBlok._uid} />
      ))}

      <main
        {...storyblokEditable(blok)}
        className="min-h-screen bg-white text-[#1f1f1f]"
      >
        {breadcrumbItems.length > 0 ? (
          <Breadcrumbs items={breadcrumbItems} />
        ) : null}

        {contentBlocks.map((sectionBlok) => (
          <StoryblokServerComponent blok={sectionBlok} key={sectionBlok._uid} />
        ))}
      </main>

      {footerBlocks.map((footerBlok) => (
        <StoryblokServerComponent blok={footerBlok} key={footerBlok._uid} />
      ))}
    </>
  );
}
