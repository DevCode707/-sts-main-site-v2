import type { StoryblokPageContent } from "@/storyblok/helpers/storyblok-content";
import {
  getStoryBreadcrumbs,
  getStoryFooter,
  getStoryHeader,
  getStorySections,
  hasPageIntro,
} from "@/storyblok/helpers/storyblok-content";
import { SiteFooterFallback } from "@/storyblok/spaces/defaultStoryblok/layout/Footer/Footer";
import { SiteShell } from "@/storyblok/spaces/defaultStoryblok/layout/SiteShell/SiteShell";
import { TestSections } from "@/storyblok/spaces/defaultStoryblok/sections/TestSections";
import {
  storyblokEditable,
  StoryblokServerComponent,
} from "@storyblok/react/rsc";

import { Breadcrumbs } from "../Breadcrumbs";
import { FALLBACK_HEADER_BLOK } from "./EcommerceServicePage.const";
import { ecommerceServicePageStyles } from "./EcommerceServicePage.styles";

type EcommerceServicePageBlok = StoryblokPageContent & {
  component: "ecommerce_service_page";
};

export default function EcommerceServicePage({
  blok,
}: {
  blok: EcommerceServicePageBlok;
}) {
  const headerBlok = getStoryHeader(blok);
  const footerBlok = getStoryFooter(blok);
  const breadcrumbItems = getStoryBreadcrumbs(blok);
  const sections = getStorySections(blok);
  const showIntro = hasPageIntro(blok);
  const title = blok.title?.trim();
  const description = blok.description?.trim();

  return (
    <SiteShell>
      <StoryblokServerComponent blok={headerBlok ?? FALLBACK_HEADER_BLOK} />

      {breadcrumbItems.length > 0 ? (
        <Breadcrumbs items={breadcrumbItems} />
      ) : null}

      <main
        {...storyblokEditable(blok)}
        className={ecommerceServicePageStyles.main}
        id="main-content"
      >
        {showIntro ? (
          <div className={ecommerceServicePageStyles.intro}>
            {title !== undefined && title.length > 0 ? <h1>{title}</h1> : null}
            {description !== undefined && description.length > 0 ? (
              <p>{description}</p>
            ) : null}
          </div>
        ) : null}

        {sections.length > 0 ? (
          <TestSections sections={sections} />
        ) : (
          <div className={ecommerceServicePageStyles.empty}>
            <p>
              Sections for this page will appear here once configured in
              Storyblok.
            </p>
          </div>
        )}
      </main>

      {footerBlok ? (
        <StoryblokServerComponent blok={footerBlok} />
      ) : (
        <SiteFooterFallback />
      )}
    </SiteShell>
  );
}
