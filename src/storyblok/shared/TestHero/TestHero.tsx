import { ArrowRightIcon } from "@/features/test/assets/icons/components";
import founderAvatar from "@/features/test/assets/icons/hero/founder-avatar.png";
import laurelLeft from "@/features/test/assets/icons/hero/left-mark.svg";
import laurelRight from "@/features/test/assets/icons/hero/right-mark.svg";
import showcaseImage from "@/features/test/assets/images/showcase.png";
import { buttonStyles } from "@/features/test/components/Button";
import { TestHeroStats } from "@/features/test/components/TestHeroStats";
import { TestHeroEnter } from "@/features/test/components/TestReveal";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";

import { heroStyles } from "./TestHero.styles";
import {
  getHeroSectionStats,
  mapHeroStats,
  type HeroSectionBlok,
} from "./TestHero.types";

const laurelRightImage = laurelRight as StaticImageData;
const laurelLeftImage = laurelLeft as StaticImageData;

type TestHeroProps = {
  blok?: HeroSectionBlok;
};

export function TestHero({ blok }: TestHeroProps) {
  const title = blok?.title?.trim();
  const headline = blok?.headline?.trim();
  const description = blok?.description?.trim();
  const stats = mapHeroStats(getHeroSectionStats(blok));

  return (
    <section className={cn(figtree.className, "w-full bg-white mb-[50px]")}>
      <div className={heroStyles.shell}>
        <div className={cn(heroStyles.content, heroStyles.grid)}>
          <div className={heroStyles.copy}>
            <div className={heroStyles.copyBody}>
              {title !== undefined && title.length > 0 ? (
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
                    <span className={heroStyles.badgeText}>{title}</span>
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

              {headline !== undefined && headline.length > 0 ? (
                <TestHeroEnter delay={240} duration={800}>
                  <h1 className={heroStyles.title}>{headline}</h1>
                </TestHeroEnter>
              ) : null}

              {description !== undefined && description.length > 0 ? (
                <TestHeroEnter delay={320} duration={800}>
                  <p className={heroStyles.lead}>{description}</p>
                </TestHeroEnter>
              ) : null}

              <TestHeroEnter
                delay={400}
                duration={800}
                className={heroStyles.ctaWrap}
              >
                <div className={heroStyles.ctaStack}>
                  <Link
                    href="#"
                    className={cn(
                      buttonStyles({ size: "founders" }),
                      "rounded-[10px]!",
                      heroStyles.foundersCta,
                    )}
                  >
                    <span className={heroStyles.iconFrame} aria-hidden>
                      <span className={heroStyles.avatarWrap}>
                        <Image
                          src={founderAvatar}
                          alt=""
                          width={40}
                          height={40}
                          className={heroStyles.avatar}
                          sizes="40px"
                        />
                        <span className={heroStyles.onlineHalo} />
                        <span className={heroStyles.onlineDot} />
                      </span>
                    </span>
                    <span
                      className={cn(
                        "whitespace-nowrap",
                        heroStyles.foundersLabel,
                      )}
                    >
                      Talk to founders
                    </span>
                    <ArrowRightIcon className={heroStyles.ctaIcon} />
                  </Link>
                  <p className={heroStyles.ctaNote}>
                    Get free estimation in 24h
                  </p>
                </div>
              </TestHeroEnter>

              {stats !== undefined ? (
                <TestHeroEnter
                  delay={500}
                  duration={900}
                  className={heroStyles.statsOffset}
                >
                  <TestHeroStats stats={stats} />
                </TestHeroEnter>
              ) : null}
            </div>
          </div>

          <TestHeroEnter
            animation="slide-left"
            delay={280}
            duration={1000}
            className={heroStyles.showcase}
          >
            <Image
              src={showcaseImage}
              alt="Portfolio showcase of ecommerce projects"
              fill
              className={heroStyles.showcaseImage}
              priority
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 698px"
            />
          </TestHeroEnter>
        </div>
      </div>
    </section>
  );
}
