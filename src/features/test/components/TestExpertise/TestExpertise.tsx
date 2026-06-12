import amastyBadge from "@/features/test/assets/icons/development/amasty-badge.svg";
import hyvaBadge from "@/features/test/assets/icons/development/hyva-badge.svg";
import starIcon from "@/features/test/assets/icons/development/rating-icon.svg";
import clutchBadge from "@/features/test/assets/icons/development/top-rated-badge.svg";
import upworkBadge from "@/features/test/assets/icons/development/upwork-badge.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

import { expertiseStyles } from "./TestExpertise.styles";

const amastyBadgeImage = amastyBadge as StaticImageData;
const hyvaBadgeImage = hyvaBadge as StaticImageData;
const clutchBadgeImage = clutchBadge as StaticImageData;
const starIconImage = starIcon as StaticImageData;
const upworkBadgeImage = upworkBadge as StaticImageData;

type Partner = {
  id: string;
  title: string;
  description: string;
  badgeNode: ReactNode;
};

const partners: Partner[] = [
  {
    id: "clutch",
    title: "Top-Rated",
    description: "Europe's top eCommerce developers, 2025.",
    badgeNode: (
      <Image
        src={clutchBadgeImage}
        alt=""
        width={90}
        height={90}
        className={expertiseStyles.cardImage1}
        aria-hidden
      />
    ),
  },
  {
    id: "hyva",
    title: "Hyvä Partner",
    description: "Certified partner for fast Magento frontends.",
    badgeNode: (
      <Image
        src={hyvaBadgeImage}
        alt=""
        width={135}
        height={90}
        className={expertiseStyles.cardImage2}
        aria-hidden
      />
    ),
  },
  {
    id: "amasty",
    title: "Amasty Partner",
    description: "Verified Magento extensions partner.",
    badgeNode: (
      <Image
        src={amastyBadgeImage}
        alt=""
        width={135}
        height={27}
        className={expertiseStyles.cardImage3}
        aria-hidden
      />
    ),
  },
  {
    id: "upwork",
    title: "Top-Rated",
    description: "Top Rated Plus - Highest-t agency on Upwork",
    badgeNode: (
      <Image
        src={upworkBadgeImage}
        alt=""
        width={135}
        height={30}
        className={expertiseStyles.cardImage4}
        aria-hidden
      />
    ),
  },
];

export function TestExpertise() {
  return (
    <section
      className={cn(
        figtree.className,
        "w-full bg-white pb-12 pt-4 md:pb-16 xl:pb-24",
      )}
    >
      <div className={expertiseStyles.shell}>
        <div className={cn(expertiseStyles.content, expertiseStyles.panel)}>
          <div className={expertiseStyles.headerRow}>
            <h2 className={expertiseStyles.title}>
              <span className={expertiseStyles.titleMobile}>
                TOP development and
                <br />
                digital expertise
              </span>
              <span className={expertiseStyles.titleDesktop}>
                TOP development and digital expertise
              </span>
            </h2>

            <div className={expertiseStyles.ratingRow}>
              <Image
                src={starIconImage}
                alt=""
                width={32}
                height={32}
                className={expertiseStyles.ratingStar}
                aria-hidden
              />
              <span className={expertiseStyles.ratingScore}>4.9</span>
              <p className={expertiseStyles.reviews}>
                <span className={expertiseStyles.reviewsMobile}>
                  Based on 2,000+ verified
                  <br />
                  customer reviews
                </span>
                <span className={expertiseStyles.reviewsDesktop}>
                  Based on 2,000+
                  <br />
                  verified customer
                  <br />
                  reviews
                </span>
              </p>
            </div>
          </div>

          <div className={expertiseStyles.cardsGrid}>
            <div className={expertiseStyles.cardsTrack}>
              {partners.map((partner) => (
                <article key={partner.id} className={expertiseStyles.glassCard}>
                  <div className={expertiseStyles.partnerBadge}>
                    <span className={expertiseStyles.badgeMedia}>
                      {partner.badgeNode}
                    </span>
                  </div>
                  <div className={expertiseStyles.partnerCopy}>
                    <h3 className={expertiseStyles.partnerTitle}>
                      {partner.title}
                    </h3>
                    <p className={expertiseStyles.partnerText}>
                      {partner.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
