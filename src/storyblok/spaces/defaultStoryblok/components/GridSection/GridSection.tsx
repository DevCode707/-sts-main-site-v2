import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import { plainText } from "@/storyblok/spaces/defaultStoryblok/utils";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Button } from "../Button";
import { Headline } from "../Headline";
import { StoryImage } from "../StoryImage";
import { gridSectionStyles } from "./GridSection.styles";

export default function GridSection({ blok }: BlokProps<DefaultStoryBlok>) {
  return (
    <section {...storyblokEditable(blok)} className={gridSectionStyles.section}>
      <div className={gridSectionStyles.container}>
        <h2 className={gridSectionStyles.title}>
          <Headline headline={blok.headline} />
        </h2>
        {typeof blok.lead === "string" && blok.lead.trim().length > 0 ? (
          <p className={gridSectionStyles.lead}>{blok.lead}</p>
        ) : null}
        <div className={gridSectionStyles.grid}>
          {(blok.cards ?? []).map((card) => (
            <article className={gridSectionStyles.card} key={card._uid}>
              <StoryImage
                asset={card.icon}
                className={gridSectionStyles.cardIcon}
                height={120}
                width={120}
              />
              <h3 className={gridSectionStyles.cardTitle}>{card.label}</h3>
              {card.text !== undefined ? (
                <p className={gridSectionStyles.cardText}>
                  {plainText(card.text)}
                </p>
              ) : null}
            </article>
          ))}
        </div>
        {(blok.button?.length ?? 0) > 0 ? (
          <div className={gridSectionStyles.actions}>
            {blok.button?.map((buttonBlok) => (
              <Button blok={buttonBlok} key={buttonBlok._uid} />
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
