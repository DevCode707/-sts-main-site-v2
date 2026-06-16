import {
  getPageBreadcrumbItems,
  splitStoryblokPageBody,
} from "@/storyblok/helpers/storyblok-page-body";
import {
  StoryblokServerComponent,
  storyblokEditable,
  type SbBlokData,
} from "@storyblok/react/rsc";

import { Breadcrumbs } from "../components/Breadcrumbs";

type StoryblokPageLayoutBlok = SbBlokData & {
  body?: SbBlokData[];
  breadcrumbs?: SbBlokData[];
};

type StoryblokPageLayoutProps = {
  blok: StoryblokPageLayoutBlok;
};

export function StoryblokPageLayout({ blok }: StoryblokPageLayoutProps) {
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
