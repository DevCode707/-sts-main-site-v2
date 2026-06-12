import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { Button } from "../Button";
import { Headline } from "../Headline";
import { newsletterFormStyles } from "./NewsletterFormSection.styles";

export default function NewsletterFormSection({
  blok,
}: BlokProps<DefaultStoryBlok>) {
  return (
    <section
      {...storyblokEditable(blok)}
      className={newsletterFormStyles.section}
    >
      <div className={newsletterFormStyles.container}>
        <h2 className={newsletterFormStyles.title}>
          <Headline headline={blok.headline} />
        </h2>
        <form className={newsletterFormStyles.form}>
          <input
            className={newsletterFormStyles.input}
            placeholder="enjoy@storyblok.com"
            type="email"
          />
          {blok.button?.map((buttonBlok) => (
            <Button blok={buttonBlok} key={buttonBlok._uid} />
          ))}
        </form>
      </div>
    </section>
  );
}
