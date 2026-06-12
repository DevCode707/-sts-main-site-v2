import { ArrowLineIcon } from "@/features/test/assets/icons/components";
import iconCrm from "@/features/test/assets/icons/ecommerce/crm-icon.svg";
import iconCustom from "@/features/test/assets/icons/ecommerce/custom-icon.svg";
import iconHeadless from "@/features/test/assets/icons/ecommerce/headless-icon.svg";
import iconMigration from "@/features/test/assets/icons/ecommerce/migration-icon.svg";
import iconPerformance from "@/features/test/assets/icons/ecommerce/performance-icon.svg";
import iconUxUi from "@/features/test/assets/icons/ecommerce/ux-ui-icon.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import type { StaticImageData } from "next/image";
import Image from "next/image";

import { Button } from "../Button";
import { servicesStyles } from "./TestServices.styles";

const iconHeadlessImage = iconHeadless as StaticImageData;
const iconUxUiImage = iconUxUi as StaticImageData;
const iconCrmImage = iconCrm as StaticImageData;
const iconPerformanceImage = iconPerformance as StaticImageData;
const iconMigrationImage = iconMigration as StaticImageData;
const iconCustomImage = iconCustom as StaticImageData;

type Service = {
  id: string;
  title: string;
  description: string;
  icon: StaticImageData;
};

const services: Service[] = [
  {
    id: "custom",
    title: "Custom Ecommerce Development",
    description:
      "Development of custom ecommerce platforms and functionality from scratch for specific business process...",
    icon: iconCustomImage,
  },
  {
    id: "migration",
    title: "Ecommerce Platform Migration",
    description:
      "Development of custom ecommerce platforms and functionality from scratch for specific business process...",
    icon: iconMigrationImage,
  },
  {
    id: "headless",
    title: "Headless Commerce Development",
    description:
      "Development of custom ecommerce platforms and functionality from scratch for specific business process...",
    icon: iconHeadlessImage,
  },
  {
    id: "ux-ui",
    title: "UX/UI Design for Online Stores",
    description:
      "Development of custom ecommerce platforms and functionality from scratch for specific business process...",
    icon: iconUxUiImage,
  },
  {
    id: "crm-erp",
    title: "CRM, ERP Integration for Ecommerce",
    description:
      "Development of custom ecommerce platforms and functionality from scratch for specific business process...",
    icon: iconCrmImage,
  },
  {
    id: "performance",
    title: "Performance & AI Optimization",
    description:
      "Development of custom ecommerce platforms and functionality from scratch for specific business process...",
    icon: iconPerformanceImage,
  },
];

const tags = [
  "Ecommerce Website Development",
  "Ecommerce Web Development",
  "Ecommerce App Development",
  "Ecommerce Platform Development",
  "Ecommerce Integration Services",
  "Ecommerce Migration Services",
] as const;

function ServiceCard({ item }: { item: Service }) {
  return (
    <article
      className={cn(
        servicesStyles.serviceCard,
        "min-h-[132px] gap-6 px-6 py-8 sm:min-h-[148px] sm:gap-8 sm:px-8 sm:py-9 lg:px-10",
      )}
    >
      <div className={servicesStyles.cardGlow} aria-hidden />

      <div className={servicesStyles.cardInner}>
        <Image
          src={item.icon}
          alt=""
          width={32}
          height={32}
          className={servicesStyles.cardIcon}
          aria-hidden
        />

        <div className={servicesStyles.cardBody}>
          <h3 className={servicesStyles.cardTitle}>{item.title}</h3>
          <p className={servicesStyles.cardText}>{item.description}</p>
        </div>
      </div>

      <Button
        type="button"
        variant="primary"
        size="sm"
        className="relative z-1 h-12 shrink-0 gap-2 rounded-xl px-6 text-sm font-bold text-white hover:text-white max-sm:w-full"
      >
        <span className={servicesStyles.linkText}>Get started</span>
        <ArrowLineIcon className={servicesStyles.linkIcon} />
      </Button>
    </article>
  );
}

export function TestServices() {
  return (
    <section
      className={cn(figtree.className, "w-full bg-white pb-12 pt-4 lg:pb-24")}
    >
      <div className={servicesStyles.shell}>
        <div
          className={cn(
            servicesStyles.content,
            servicesStyles.panel,
            "flex flex-col gap-8 p-6 sm:gap-10 sm:p-10 xl:gap-12 xl:p-[60px]",
          )}
        >
          <div className={servicesStyles.headerGrid}>
            <div>
              <p className={cn(servicesStyles.pill, "mb-4")}>Services</p>
              <h2 className={servicesStyles.sectionTitle}>
                Professional Ecommerce Development Services
              </h2>
            </div>
            <p className={servicesStyles.sectionText}>
              We deliver a full cycle of ecommerce platform development, from
              designing flexible architecture to implementing AI tools for
              personalization and sales process automation.
            </p>
          </div>

          <div className={servicesStyles.cardsStack}>
            {services.map((item) => (
              <ServiceCard key={item.id} item={item} />
            ))}
          </div>

          <div className={servicesStyles.tagsRow}>
            {tags.map((tag) => (
              <span key={tag} className={servicesStyles.tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
