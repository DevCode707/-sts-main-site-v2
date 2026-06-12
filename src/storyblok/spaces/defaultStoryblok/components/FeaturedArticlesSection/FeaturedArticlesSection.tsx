import type {
  DefaultStoryBlok,
  StoryRelation,
} from "@/storyblok/spaces/defaultStoryblok/types/types";
import { plainText } from "@/storyblok/spaces/defaultStoryblok/utils";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Headline } from "../Headline";
import { StoryImage } from "../StoryImage";
import { featuredArticlesStyles } from "./FeaturedArticlesSection.styles";

export default function FeaturedArticlesSection({
  blok,
}: BlokProps<DefaultStoryBlok>) {
  const articles = (blok.articles ?? []).filter(
    (article): article is StoryRelation => typeof article !== "string",
  );

  return (
    <section
      {...storyblokEditable(blok)}
      className={featuredArticlesStyles.section}
    >
      <div className={featuredArticlesStyles.container}>
        <h2 className={featuredArticlesStyles.title}>
          <Headline headline={blok.headline} />
        </h2>
        {typeof blok.lead === "string" && blok.lead.trim().length > 0 ? (
          <p className={featuredArticlesStyles.lead}>{blok.lead}</p>
        ) : null}
        <div className={featuredArticlesStyles.grid}>
          {articles.map((article) => (
            <article key={article.uuid}>
              <StoryImage
                asset={article.content?.image}
                className={featuredArticlesStyles.image}
                height={520}
                width={720}
              />
              <p className={featuredArticlesStyles.label}>Branding</p>
              <h3 className={featuredArticlesStyles.cardTitle}>
                {plainText(article.content?.headline ?? article.name)}
              </h3>
              <a
                className={featuredArticlesStyles.link}
                href={`/${article.full_slug ?? ""}`}
              >
                Read more{" "}
                <span className={featuredArticlesStyles.linkIcon}>&rarr;</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
