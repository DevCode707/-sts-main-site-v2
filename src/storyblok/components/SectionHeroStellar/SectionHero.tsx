import { ArrowRightIcon } from "@/features/test/assets/icons/components";
import laurelLeft from "@/features/test/assets/icons/hero/left-mark.svg";
import laurelRight from "@/features/test/assets/icons/hero/right-mark.svg";
import { buttonStyles } from "@/features/test/components/Button";
import { TestHeroEnter } from "@/features/test/components/TestReveal";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import { StoryblokImage } from "@/storyblok/shared/StoryblokImage/StoryblokImage";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import { heroStyles } from "./SectionHero.styles";
import { mapSectionHero, type SectionHeroBlok } from "./SectionHero.types";
import { SectionHeroCollage } from "./SectionHeroCollage";
import { SectionHeroStats } from "./SectionHeroStats";

const laurelRightImage = laurelRight as StaticImageData;
const laurelLeftImage = laurelLeft as StaticImageData;

export function SectionHero({ blok }: BlokProps<SectionHeroBlok>) {
  if (blok.hidden === true) {
    return null;
  }

  const {
    badgeText,
    title,
    description,
    primaryCtaLabel,
    helperText,
    ctaHref,
    primaryCtaAvatar,
    hasAvatar,
    showOnlineIndicator,
    stats,
    collageImages,
  } = mapSectionHero(blok);

  return (
    <section
      {...storyblokEditable(blok)}
      className={cn(figtree.className, "mb-[50px] w-full bg-white")}
    >
      <div className={heroStyles.shell}>
        <div className={cn(heroStyles.content, heroStyles.grid)}>
          <div className={heroStyles.copy}>
            <div className={heroStyles.copyBody}>
              {badgeText !== undefined && badgeText.length > 0 ? (
                <TestHeroEnter delay={160}>
                  <div className={heroStyles.badge}>
                    <Image
                      src={laurelLeftImage}
                      alt=""
                      width={18}
                      height={37}
                      aria-hidden
                      className={heroStyles.laurel}
                    />
                    <span className={heroStyles.badgeText}>{badgeText}</span>
                    <Image
                      src={laurelRightImage}
                      alt=""
                      width={18}
                      height={37}
                      aria-hidden
                      className={heroStyles.laurel}
                    />
                  </div>
                </TestHeroEnter>
              ) : null}

              {title !== undefined && title.length > 0 ? (
                <TestHeroEnter delay={240} duration={800}>
                  <h1 className={heroStyles.title}>{title}</h1>
                </TestHeroEnter>
              ) : null}

              {description !== undefined && description.length > 0 ? (
                <TestHeroEnter delay={320} duration={800}>
                  <p className={heroStyles.lead}>{description}</p>
                </TestHeroEnter>
              ) : null}

              {primaryCtaLabel !== undefined && primaryCtaLabel.length > 0 ? (
                <TestHeroEnter
                  delay={400}
                  duration={800}
                  className={heroStyles.ctaWrap}
                >
                  <div className={heroStyles.ctaStack}>
                    <Link
                      href={ctaHref}
                      className={cn(
                        buttonStyles({ size: "founders" }),
                        "rounded-[10px]!",
                        heroStyles.foundersCta,
                      )}
                    >
                      {hasAvatar ? (
                        <span className={heroStyles.iconFrame} aria-hidden>
                          <span className={heroStyles.avatarWrap}>
                            <StoryblokImage
                              image={primaryCtaAvatar}
                              alt=""
                              width={40}
                              height={40}
                              className={heroStyles.avatar}
                              sizes="40px"
                              decorative
                            />
                            {showOnlineIndicator ? (
                              <>
                                <span className={heroStyles.onlineHalo} />
                                <span className={heroStyles.onlineDot} />
                              </>
                            ) : null}
                          </span>
                        </span>
                      ) : null}
                      <span
                        className={cn(
                          "whitespace-nowrap",
                          heroStyles.foundersLabel,
                        )}
                      >
                        {primaryCtaLabel}
                      </span>
                      <ArrowRightIcon className={heroStyles.ctaIcon} />
                    </Link>
                    {helperText !== undefined && helperText.length > 0 ? (
                      <p className={heroStyles.ctaNote}>{helperText}</p>
                    ) : null}
                  </div>
                </TestHeroEnter>
              ) : null}

              {stats !== undefined ? (
                <TestHeroEnter
                  delay={500}
                  duration={900}
                  className={heroStyles.statsOffset}
                >
                  <SectionHeroStats stats={stats} />
                </TestHeroEnter>
              ) : null}
            </div>
          </div>

          {collageImages !== undefined ? (
            <TestHeroEnter
              animation="slide-left"
              delay={280}
              duration={1000}
              className={heroStyles.showcase}
            >
              <SectionHeroCollage images={collageImages} />
            </TestHeroEnter>
          ) : null}
        </div>
      </div>
    </section>
  );
}
