import type {
  DefaultStoryBlok,
  StoryRelation,
} from "@/storyblok/spaces/defaultStoryblok/types/types";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Button } from "../Button";
import { Headline } from "../Headline";
import { StoryImage } from "../StoryImage";
import { bannerReferenceStyles } from "./BannerReference.styles";

export default function BannerReference({ blok }: BlokProps<DefaultStoryBlok>) {
  const banners = (blok.banners ?? []).filter(
    (banner): banner is StoryRelation => typeof banner !== "string",
  );

  return (
    <>
      {banners.map((banner) => (
        <section
          {...storyblokEditable(blok)}
          className={bannerReferenceStyles.section}
          key={banner.content?._uid}
        >
          <div className={bannerReferenceStyles.container}>
            <h2 className={bannerReferenceStyles.title}>
              <Headline headline={banner.content?.headline} />
            </h2>
            {typeof banner.content?.lead === "string" &&
            banner.content.lead.trim().length > 0 ? (
              <p className={bannerReferenceStyles.lead}>
                {banner.content.lead}
              </p>
            ) : null}
            {(banner.content?.buttons?.length ?? 0) > 0 ? (
              <div className={bannerReferenceStyles.actions}>
                {banner.content?.buttons?.map((buttonBlok) => (
                  <Button blok={buttonBlok} key={buttonBlok._uid} />
                ))}
              </div>
            ) : null}
          </div>
          <StoryImage
            asset={banner.content?.background_image}
            className={bannerReferenceStyles.image}
            height={540}
            width={720}
          />
        </section>
      ))}
    </>
  );
}
