import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import {
  extractRichText,
  plainText,
} from "@/storyblok/spaces/defaultStoryblok/utils";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Headline } from "../Headline";
import { StoryImage } from "../StoryImage";
import { tabbedContentStyles } from "./TabbedContentSection.styles";

export default function TabbedContentSection({
  blok,
}: BlokProps<DefaultStoryBlok>) {
  const entries = blok.entries ?? [];
  const activeEntry = entries[0];

  return (
    <section
      {...storyblokEditable(blok)}
      className={tabbedContentStyles.section}
    >
      <div className={tabbedContentStyles.container}>
        <h2 className={tabbedContentStyles.title}>
          <Headline headline={blok.headline} />
        </h2>
        {typeof blok.lead === "string" && blok.lead.trim().length > 0 ? (
          <p className={tabbedContentStyles.lead}>{blok.lead}</p>
        ) : null}
        <div className={tabbedContentStyles.tabRow}>
          {entries.map((entry, index) => (
            <div
              className={
                index === 0
                  ? tabbedContentStyles.tabActive
                  : tabbedContentStyles.tab
              }
              key={entry._uid}
            >
              {plainText(entry.headline)}
            </div>
          ))}
        </div>
        {activeEntry ? <TabbedEntry entry={activeEntry} /> : null}
      </div>
    </section>
  );
}

function TabbedEntry({ entry }: { entry: DefaultStoryBlok }) {
  const rich = extractRichText(entry.description);

  return (
    <div className={tabbedContentStyles.entry}>
      <div className={tabbedContentStyles.entryBody}>
        <h3 className={tabbedContentStyles.entryTitle}>
          {plainText(entry.headline)}
        </h3>
        {rich.paragraphs.map((paragraph, index) => (
          <p
            className={
              index === 0
                ? tabbedContentStyles.entryLead
                : tabbedContentStyles.entryText
            }
            key={paragraph}
          >
            {paragraph}
          </p>
        ))}
        <ul className={tabbedContentStyles.list}>
          {rich.items.map((item) => (
            <li className={tabbedContentStyles.listItem} key={item}>
              <span className={tabbedContentStyles.listIcon}>&rarr;</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <StoryImage
        asset={entry.image}
        className={tabbedContentStyles.entryImage}
        height={900}
        width={1000}
      />
    </div>
  );
}
