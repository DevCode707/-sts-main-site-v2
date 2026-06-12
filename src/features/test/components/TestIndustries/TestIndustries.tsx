import industryIcon from "@/features/test/assets/icons/solutions/industry-icon.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { TestReveal } from "../TestReveal";
import { industriesStyles } from "./TestIndustries.styles";

const industryIconImage = industryIcon as StaticImageData;

const industries = [
  { id: "b2b", title: "B2B & Wholesale" },
  { id: "fashion", title: "Fashion & Apparel" },
  { id: "automotive", title: "Automotive Parts" },
  { id: "health", title: "Health & Beauty / DTC Brands" },
  { id: "electronics", title: "Electronics & Consumer Tech" },
  { id: "food", title: "Food & Grocery" },
] as const;

function IndustryCard({ title }: { title: string }) {
  return (
    <article className={industriesStyles.card}>
      <Image
        src={industryIconImage}
        alt=""
        width={56}
        height={56}
        className={industriesStyles.cardIcon}
        aria-hidden
      />
      <h3 className={industriesStyles.cardTitle}>{title}</h3>
    </article>
  );
}

export function TestIndustries() {
  return (
    <section
      className={cn(figtree.className, "w-full bg-white pb-12 pt-2 lg:pb-20")}
    >
      <div className={industriesStyles.shell}>
        <div className={industriesStyles.content}>
          <div className={industriesStyles.layoutGrid}>
            <TestReveal
              animation="fade-up"
              duration={800}
              className={industriesStyles.headerCol}
            >
              <p className={industriesStyles.eyebrow}>Industries</p>

              <h2 className={industriesStyles.title}>
                Ecommerce Solutions
                <br />
                Tailored to Your Industry
              </h2>

              <p className={industriesStyles.text}>
                We design solutions that take into account the business logic of
                your industry, from subscription systems in D2C to deep
                integrations with ERP systems for wholesale operations.
              </p>
            </TestReveal>

            {industries.map((item, index) => (
              <TestReveal
                key={item.id}
                animation="fade-up"
                delay={80 + index * 70}
                duration={780}
                className={industriesStyles.cardWrap}
              >
                <IndustryCard title={item.title} />
              </TestReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
