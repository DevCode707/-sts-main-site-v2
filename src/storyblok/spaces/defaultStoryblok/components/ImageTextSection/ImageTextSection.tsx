import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import { extractRichText } from "@/storyblok/spaces/defaultStoryblok/utils";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Button } from "../Button";
import { Headline } from "../Headline";
import { StoryImage } from "../StoryImage";
import { imageTextSectionStyles } from "./ImageTextSection.styles";

export default function ImageTextSection({
  blok,
}: BlokProps<DefaultStoryBlok>) {
  const rich = extractRichText(blok.text);

  return (
    <section
      {...storyblokEditable(blok)}
      className={imageTextSectionStyles.section}
    >
      <div className={imageTextSectionStyles.container}>
        <div>
          {typeof blok.eyebrow === "string" &&
          blok.eyebrow.trim().length > 0 ? (
            <p className={imageTextSectionStyles.eyebrow}>{blok.eyebrow}</p>
          ) : null}
          <h2 className={imageTextSectionStyles.title}>
            <Headline headline={blok.headline} />
          </h2>
          {rich.paragraphs.map((paragraph) => (
            <p className={imageTextSectionStyles.text} key={paragraph}>
              {paragraph}
            </p>
          ))}
          <ul className={imageTextSectionStyles.list}>
            {rich.items.map((item) => (
              <li className={imageTextSectionStyles.listItem} key={item}>
                <span className={imageTextSectionStyles.listIcon}>&rarr;</span>
                {item}
              </li>
            ))}
          </ul>
          {(blok.buttons?.length ?? 0) > 0 ? (
            <div className={imageTextSectionStyles.actions}>
              {blok.buttons?.map((buttonBlok) => (
                <Button blok={buttonBlok} key={buttonBlok._uid} />
              ))}
            </div>
          ) : null}
        </div>
        <div className={imageTextSectionStyles.media}>
          <DecorLines />
          <StoryImage
            asset={blok.image}
            className={imageTextSectionStyles.image}
            height={900}
            width={900}
          />
        </div>
      </div>
    </section>
  );
}

function DecorLines() {
  return (
    <div className={imageTextSectionStyles.decor} aria-hidden="true">
      <span className={imageTextSectionStyles.decorLine1} />
      <span className={imageTextSectionStyles.decorLine2} />
      <span className={imageTextSectionStyles.decorLine3} />
      <span className={imageTextSectionStyles.decorLine4} />
    </div>
  );
}
