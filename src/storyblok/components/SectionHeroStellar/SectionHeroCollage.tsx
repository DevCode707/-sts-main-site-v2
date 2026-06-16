import { cn } from "@/libs/cn";
import { StoryblokImage } from "@/storyblok/shared/StoryblokImage/StoryblokImage";

import { collageFrameStyles, heroStyles } from "./SectionHero.styles";
import type { HeroCollageImageBlok } from "./SectionHero.types";

const SHOWCASE_SIZES =
  "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 698px";

type SectionHeroCollageProps = {
  images: (HeroCollageImageBlok & { _uid: string })[];
};

export function SectionHeroCollage({ images }: SectionHeroCollageProps) {
  if (images.length === 0) {
    return null;
  }

  if (images.length === 1) {
    const item = images[0];

    if (item === undefined) {
      return null;
    }

    return (
      <StoryblokImage
        image={item.image}
        mobileImage={item.mobile_image}
        alt={item.alt}
        fill
        className={heroStyles.showcaseImage}
        priority
        sizes={SHOWCASE_SIZES}
      />
    );
  }

  return (
    <div className={heroStyles.collageCanvas}>
      {images.map((item, index) => (
        <div
          key={item._uid}
          className={cn(
            "absolute overflow-hidden",
            collageFrameStyles[index] ?? collageFrameStyles[0],
          )}
        >
          <StoryblokImage
            image={item.image}
            mobileImage={item.mobile_image}
            alt={item.alt}
            fill
            className={heroStyles.showcaseImage}
            priority={index === 0}
            sizes={SHOWCASE_SIZES}
          />
        </div>
      ))}
    </div>
  );
}
