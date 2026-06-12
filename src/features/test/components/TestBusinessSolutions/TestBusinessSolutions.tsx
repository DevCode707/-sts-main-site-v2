import checkBanner from "@/features/test/assets/icons/business/check-icon.svg";
import iconEnterprise from "@/features/test/assets/icons/business/enterprise-icon.svg";
import iconD2c from "@/features/test/assets/icons/business/scale-icon.svg";
import iconStartup from "@/features/test/assets/icons/business/startup-icon.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { businessSolutionsStyles } from "./TestBusinessSolutions.styles";

const ICON_SIZE = "h-[108px] w-[128px]";
const checkBannerImage = checkBanner as StaticImageData;
const iconEnterpriseImage = iconEnterprise as StaticImageData;
const iconD2cImage = iconD2c as StaticImageData;
const iconStartupImage = iconStartup as StaticImageData;

type Solution = {
  id: string;
  title: string;
  description: string;
  icon: StaticImageData;
};

const solutions: Solution[] = [
  {
    id: "startup",
    title: "Launching a new startups & SMBs",
    description:
      "We help launch online stores quickly on Shopify or WooCommerce without unnecessary technical complexity.",
    icon: iconStartupImage,
  },
  {
    id: "d2c",
    title: "Scaling a D2C brand",
    description:
      "We create custom UX/UI based on customer behavior analytics and unify all sales channels into a single system.",
    icon: iconD2cImage,
  },
  {
    id: "enterprise",
    title: "Enterprise ecommerce",
    description:
      "We design microservice systems and headless architecture to ensure stable performance under high loads.",
    icon: iconEnterpriseImage,
  },
];

function BusinessCard({ item }: { item: Solution }) {
  return (
    <article
      className={cn(
        businessSolutionsStyles.solutionCard,
        "h-full gap-5 p-6 lg:gap-6 lg:p-8",
      )}
    >
      <div className={businessSolutionsStyles.iconWrap}>
        <Image
          src={item.icon}
          alt=""
          width={128}
          height={108}
          className={cn(
            "pointer-events-none absolute -left-10 -top-8 max-w-none",
            ICON_SIZE,
          )}
          aria-hidden
        />
      </div>

      <div className={businessSolutionsStyles.cardBody}>
        <h3 className={businessSolutionsStyles.cardTitle}>{item.title}</h3>
        <p className={businessSolutionsStyles.cardText}>{item.description}</p>
      </div>
    </article>
  );
}

export function TestBusinessSolutions() {
  return (
    <section
      className={cn(figtree.className, "w-full bg-white pb-12 pt-2 lg:pb-20")}
    >
      <div className={businessSolutionsStyles.shell}>
        <div
          className={cn(
            businessSolutionsStyles.content,
            "flex flex-col gap-8 lg:gap-10",
          )}
        >
          <p className={businessSolutionsStyles.pill}>We have solutions</p>

          <div className={businessSolutionsStyles.headerGrid}>
            <h2 className={businessSolutionsStyles.sectionTitle}>
              When a Business Needs Our Ecommerce Expertise
            </h2>
            <p className={businessSolutionsStyles.sectionText}>
              Often, ecommerce problems do not appear during a crisis. Their
              root cause is frequently hidden in the system architecture. We
              build platforms where technical risks are addressed at the design
              stage.
            </p>
          </div>

          <div className={businessSolutionsStyles.cardsGrid}>
            {solutions.map((item) => (
              <BusinessCard key={item.id} item={item} />
            ))}
          </div>

          <div className={businessSolutionsStyles.bannerRow}>
            <Image
              src={checkBannerImage}
              alt=""
              width={40}
              height={40}
              className={businessSolutionsStyles.bannerIcon}
              aria-hidden
            />
            <p className={businessSolutionsStyles.bannerText}>
              No matter where you are in your growth journey — the challenges
              are real, and so are our solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
