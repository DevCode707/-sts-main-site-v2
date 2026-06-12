import { ArrowRightIcon } from "@/features/test/assets/icons/components";
import logoBigCommerce from "@/features/test/assets/icons/grow/bigcommerce-logo.svg";
import logoMagento from "@/features/test/assets/icons/grow/magento-logo.svg";
import logoShopify from "@/features/test/assets/icons/grow/shopify-logo.svg";
import logoWooCommerce from "@/features/test/assets/icons/grow/woocommerce-logo.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { platformsExpertiseStyles } from "./TestPlatformsExpertise.styles";

const logoBigCommerceImage = logoBigCommerce as StaticImageData;
const logoMagentoImage = logoMagento as StaticImageData;
const logoShopifyImage = logoShopify as StaticImageData;
const logoWooCommerceImage = logoWooCommerce as StaticImageData;

type Platform = {
  id: string;
  title: string;
  description: string;
  logo: StaticImageData;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
};

const platforms: Platform[] = [
  {
    id: "shopify",
    title: "Shopify та Shopify Plus",
    description:
      "Shopify is a convenient platform for quickly launching an ecommerce store, while Shopify Plus is designed for fast-growing brands that need scalability and enterprise-level features.",
    logo: logoShopifyImage,
    logoWidth: 187,
    logoHeight: 53,
    logoClassName: "h-[30px] w-auto max-w-[148px]",
  },
  {
    id: "magento",
    title: "Magento (Adobe Commerce)",
    description:
      "A powerful platform for large ecommerce projects with complex catalogs, integrations, and a need for deep customization.",
    logo: logoMagentoImage,
    logoWidth: 180,
    logoHeight: 61,
    logoClassName: "h-[36px] w-auto max-w-[148px]",
  },
  {
    id: "woocommerce",
    title: "WooCommerce",
    description:
      "A flexible solution for businesses on WordPress that allows for quick online store launches and scaling through a large ecosystem of plugins.",
    logo: logoWooCommerceImage,
    logoWidth: 213,
    logoHeight: 43,
    logoClassName: "h-[28px] w-auto max-w-[156px]",
  },
  {
    id: "bigcommerce",
    title: "BigCommerce",
    description:
      "A cloud-based ecommerce platform with many built-in features that is easily scalable and has strong SEO capabilities.",
    logo: logoBigCommerceImage,
    logoWidth: 229,
    logoHeight: 53,
    logoClassName: "h-[30px] w-auto max-w-[164px]",
  },
];

function PlatformRow({ item, isLast }: { item: Platform; isLast: boolean }) {
  return (
    <article
      className={cn(
        "grid items-center gap-x-6 gap-y-4 px-6 py-8 sm:px-8 lg:grid-cols-[200px_248px_minmax(0,1fr)_44px] lg:gap-x-8 lg:py-9 lg:pl-8 lg:pr-6",
        !isLast && "border-b border-[#00163A]/8",
      )}
    >
      <div className={platformsExpertiseStyles.logoWrap}>
        <Image
          src={item.logo}
          alt=""
          width={item.logoWidth}
          height={item.logoHeight}
          className={cn("object-contain", item.logoClassName)}
        />
      </div>

      <h3 className={platformsExpertiseStyles.rowTitle}>{item.title}</h3>

      <p className={platformsExpertiseStyles.rowText}>{item.description}</p>

      <button
        type="button"
        className={platformsExpertiseStyles.rowButton}
        aria-label={`Learn more about ${item.title}`}
      >
        <ArrowRightIcon className={platformsExpertiseStyles.buttonIcon} />
      </button>
    </article>
  );
}

export function TestPlatformsExpertise() {
  return (
    <section
      className={cn(figtree.className, "w-full bg-white pb-12 pt-4 lg:pb-24")}
    >
      <div className={platformsExpertiseStyles.shell}>
        <div
          className={cn(
            platformsExpertiseStyles.content,
            "flex flex-col gap-8 lg:gap-10",
          )}
        >
          <div>
            <p className={cn(platformsExpertiseStyles.pill, "mb-4")}>
              E-commerce platforms expertise
            </p>
            <h2 className={platformsExpertiseStyles.sectionTitle}>
              We{" "}
              <span className={platformsExpertiseStyles.highlight}>
                help you choose a platform
              </span>{" "}
              that will support your growth strategy, not limit it.
            </h2>
          </div>

          <div
            className={cn(
              platformsExpertiseStyles.panel,
              "overflow-hidden p-4 sm:p-5 lg:p-6",
            )}
          >
            <div className={platformsExpertiseStyles.list}>
              {platforms.map((item, index) => (
                <PlatformRow
                  key={item.id}
                  item={item}
                  isLast={index === platforms.length - 1}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
