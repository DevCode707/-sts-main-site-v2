import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";

import { teaserStyles } from "./Teaser.styles";

type TeaserBlok = SbBlokData & {
  headline?: string;
};

export default function Teaser({ blok }: BlokProps<TeaserBlok>) {
  return (
    <section {...storyblokEditable(blok)} className={teaserStyles.section}>
      <h2 className={teaserStyles.title}>{blok.headline ?? "Teaser"}</h2>
    </section>
  );
}
