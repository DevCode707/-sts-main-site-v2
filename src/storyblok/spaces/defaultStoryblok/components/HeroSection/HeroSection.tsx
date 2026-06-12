import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import { plainText } from "@/storyblok/spaces/defaultStoryblok/utils";
import type { BlokProps } from "@/storyblok/types/types";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

import { StoryImage } from "../StoryImage";
import { heroSectionStyles } from "./HeroSection.styles";

export default function HeroSection({ blok }: BlokProps<DefaultStoryBlok>) {
  return (
    <section {...storyblokEditable(blok)} className={heroSectionStyles.section}>
      <div className={heroSectionStyles.content}>
        <div className={heroSectionStyles.inner}>
          {typeof blok.eyebrow === "string" &&
          blok.eyebrow.trim().length > 0 ? (
            <p className={heroSectionStyles.eyebrow}>{blok.eyebrow}</p>
          ) : null}
          <h1 className={heroSectionStyles.title}>
            {Array.isArray(blok.headline)
              ? blok.headline.map((headlineBlok) => (
                  <StoryblokServerComponent
                    blok={headlineBlok}
                    key={headlineBlok._uid}
                  />
                ))
              : blok.headline}
          </h1>
          {blok.text !== undefined ? (
            <p className={heroSectionStyles.text}>{plainText(blok.text)}</p>
          ) : null}
          {(blok.buttons?.length ?? 0) > 0 ? (
            <div className={heroSectionStyles.actions}>
              {blok.buttons?.map((buttonBlok) => (
                <StoryblokServerComponent
                  blok={buttonBlok}
                  key={buttonBlok._uid}
                />
              ))}
            </div>
          ) : null}
        </div>
      </div>
      <div className={heroSectionStyles.media}>
        <DecorLines />
        <StoryImage
          asset={blok.image}
          className={heroSectionStyles.image}
          height={900}
          priority
          width={1200}
        />
        <div className={heroSectionStyles.accent} />
      </div>
    </section>
  );
}

function DecorLines() {
  return (
    <div className={heroSectionStyles.decor} aria-hidden="true">
      <span className={heroSectionStyles.decorLine1} />
      <span className={heroSectionStyles.decorLine2} />
      <span className={heroSectionStyles.decorLine3} />
      <span className={heroSectionStyles.decorLine4} />
    </div>
  );
}
