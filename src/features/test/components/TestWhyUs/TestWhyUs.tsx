import iconFigma from "@/features/test/assets/icons/why/figma-icon.svg";
import chartImage from "@/features/test/assets/icons/why/market-chart.svg";
import iconPieChart from "@/features/test/assets/icons/why/pie-chart-icon.png";
import iconRocket from "@/features/test/assets/icons/why/rocket-icon.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";

import { whyUsStyles } from "./TestWhyUs.styles";

const chartImageData = chartImage as StaticImageData;
const iconPieChartImage = iconPieChart;
const iconFigmaImage = iconFigma as StaticImageData;
const iconRocketImage = iconRocket as StaticImageData;

type WhyUsCard = {
  id: string;
  title?: string;
  titleLines?: readonly [string, string];
  descriptionLines: readonly string[];
  descriptionMobile?: string;
  icon: StaticImageData;
  wide?: boolean;
  chart?: boolean;
};

const cards: WhyUsCard[] = [
  {
    id: "market",
    title: "Faster time to market",
    descriptionMobile:
      "We launch ecommerce projects faster thanks to proven architectural approaches and ready-made integrations.",
    descriptionLines: [
      "We launch ecommerce projects",
      "faster thanks to proven architectural",
      "approaches and ready-made",
      "integrations.",
    ],
    icon: iconRocketImage,
    wide: true,
    chart: true,
  },
  {
    id: "ux",
    titleLines: ["Conversion", "focused UX"],
    descriptionMobile:
      "We design the catalog and checkout to increase conversion and average check.",
    descriptionLines: [
      "We design the catalog and",
      "checkout to increase conversion",
      "and average check.",
    ],
    icon: iconFigmaImage,
  },
  {
    id: "scale",
    title: "Built for scale",
    descriptionMobile:
      "A scalable architecture that works stably even during peak loads.",
    descriptionLines: [
      "A scalable architecture that",
      "works stably even during",
      "peak\u00A0loads.",
    ],
    icon: iconPieChartImage,
  },
];

function WhyUsCardTitle({ card }: { card: WhyUsCard }) {
  return (
    <h3 className={whyUsStyles.cardTitle}>
      {card.titleLines !== undefined ? (
        <>
          {card.titleLines[0]}
          <br />
          {card.titleLines[1]}
        </>
      ) : (
        card.title
      )}
    </h3>
  );
}

function WhyUsCardDescription({ lines }: { lines: readonly string[] }) {
  return (
    <p className={whyUsStyles.cardText}>
      {lines.map((line, index) => (
        <span key={line}>
          {index > 0 ? <br /> : null}
          {line}
        </span>
      ))}
    </p>
  );
}

function WhyUsFeatureMobileTitle({ card }: { card: WhyUsCard }) {
  if (card.titleLines !== undefined) {
    return (
      <h3 className={whyUsStyles.featureTitle}>
        {card.titleLines[0]}
        <br />
        {card.titleLines[1]}
      </h3>
    );
  }

  return <h3 className={whyUsStyles.featureTitle}>{card.title}</h3>;
}

function WhyUsFeatureMobileBlock({ card }: { card: WhyUsCard }) {
  return (
    <div className={whyUsStyles.mobileBlock}>
      <div className={whyUsStyles.featureRow}>
        <div className={whyUsStyles.featureIcon}>
          <Image
            src={card.icon}
            alt=""
            width={22}
            height={22}
            className={whyUsStyles.mobileIcon}
            aria-hidden
          />
        </div>

        <div className={whyUsStyles.featureCopy}>
          <WhyUsFeatureMobileTitle card={card} />
          {card.descriptionMobile !== undefined &&
          card.descriptionMobile.trim().length > 0 ? (
            <p className={whyUsStyles.featureBody}>{card.descriptionMobile}</p>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function WhyUsFeatureDesktopBlock({ card }: { card: WhyUsCard }) {
  return (
    <div className={whyUsStyles.desktopBlock}>
      <div className={whyUsStyles.iconCircle}>
        <Image
          src={card.icon}
          alt=""
          width={30}
          height={30}
          className={whyUsStyles.desktopIcon}
          aria-hidden
        />
      </div>

      <div
        className={cn(
          "relative z-10 w-full",
          card.chart === true && "min-[1251px]:max-w-[267px]",
        )}
      >
        <WhyUsCardTitle card={card} />
        <WhyUsCardDescription lines={card.descriptionLines} />
      </div>
    </div>
  );
}

function WhyUsMarketCard({ card }: { card: WhyUsCard }) {
  return (
    <article className={whyUsStyles.marketCard}>
      <WhyUsFeatureMobileBlock card={card} />

      <div className={whyUsStyles.chartWrap}>
        <Image
          src={chartImageData}
          alt=""
          width={272}
          height={272}
          className={whyUsStyles.chartImage}
          aria-hidden
        />
      </div>

      <div className={whyUsStyles.desktopWrap}>
        <div className={whyUsStyles.chartOverlay}>
          <Image
            src={chartImageData}
            alt=""
            width={272}
            height={272}
            className={whyUsStyles.chartDesktop}
            aria-hidden
          />
        </div>

        <WhyUsFeatureDesktopBlock card={card} />
      </div>
    </article>
  );
}

function WhyUsCard({ card }: { card: WhyUsCard }) {
  if (card.chart === true) {
    return <WhyUsMarketCard card={card} />;
  }

  return (
    <article className={cn(whyUsStyles.compactCard, "relative min-w-0")}>
      <WhyUsFeatureMobileBlock card={card} />
      <WhyUsFeatureDesktopBlock card={card} />
    </article>
  );
}

export function TestWhyUs() {
  return (
    <section
      className={cn(figtree.className, "mb-8 w-full bg-white md:mb-[100px]")}
    >
      <div className={whyUsStyles.shell}>
        <div
          className={cn(
            whyUsStyles.content,
            whyUsStyles.sectionPanel,
            whyUsStyles.panel,
          )}
        >
          <div className={whyUsStyles.headerGrid}>
            <div className={whyUsStyles.headerLead}>
              <p className={whyUsStyles.eyebrow}>Why us</p>
              <h2 className={whyUsStyles.title}>
                <span className={whyUsStyles.titleMobile}>
                  Engineering e-commerce
                  <br />
                  platforms that drive real
                  <br />
                  growth
                </span>
                <span className={whyUsStyles.titleDesktop}>
                  Engineering
                  <br />
                  e-commerce platforms
                  <br />
                  that drive real growth
                </span>
              </h2>
            </div>

            <div className={whyUsStyles.bodyStack}>
              <p className={whyUsStyles.body}>
                <span className={whyUsStyles.bodyMobile1}>
                  We help ecommerce brands build platforms that can withstand
                  traffic, catalog, and sales growth. We design the
                  architecture, integrations, and user experience to make your
                  store run fast, stable, and without technical limitations.
                </span>
                <span className={whyUsStyles.bodyDesktop1}>
                  We help ecommerce brands build platforms that can withstand
                  <br />
                  traffic, catalog, and sales growth. We design the
                  architecture,
                  <br />
                  integrations, and user experience to make your store run fast,
                  <br />
                  stable, and without technical limitations.
                </span>
              </p>

              <p className={whyUsStyles.body}>
                <span className={whyUsStyles.bodyMobile2}>
                  We work as a technology partner that helps you choose the
                  right platform, build a scalable ecommerce architecture, and
                  launch a solution ready for business growth.
                </span>
                <span className={whyUsStyles.bodyDesktop2}>
                  We work as a technology partner that helps you choose the
                  right
                  <br />
                  platform, build a scalable ecommerce architecture, and launch
                  a
                  <br />
                  solution ready for business growth.
                </span>
              </p>
            </div>
          </div>

          <div className={whyUsStyles.cardsGrid}>
            {cards.map((card) => (
              <WhyUsCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
