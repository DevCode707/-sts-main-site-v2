"use client";

import {
  ArrowLineIcon,
  ArrowRightIcon,
  ArrowUpIcon,
} from "@/features/test/assets/icons/components";
import caseCultnaked from "@/features/test/assets/icons/results/case-cultnaked.svg";
import caseGirteka from "@/features/test/assets/icons/results/case-girteka.svg";
import caseLgfg from "@/features/test/assets/icons/results/case-lgfg.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useState } from "react";

import { buttonStyles } from "../Button";
import { caseStudiesStyles } from "./TestCaseStudies.styles";

const caseGirtekaImage = caseGirteka as StaticImageData;
const caseCultnakedImage = caseCultnaked as StaticImageData;
const caseLgfgImage = caseLgfg as StaticImageData;

const filters = [
  { id: "all", label: "Explore all", count: 21 },
  { id: "mobile", label: "Mobile app", count: 4 },
  { id: "web-apps", label: "Web apps", count: 6 },
  { id: "web-sites", label: "Web sites", count: 6 },
  { id: "branding", label: "Branding", count: 2 },
  { id: "crm", label: "CRM", count: 4 },
  { id: "saas", label: "SAAS", count: 6 },
  { id: "b2b", label: "B2B", count: 4 },
  { id: "b2c", label: "B2C", count: 3 },
] as const;

const caseStudies = [
  {
    id: "lgfg",
    image: caseLgfgImage,
    title: "LGFG Fashion House — Ecommerce Platform",
    description:
      "We helped LGFG Fashion House launch a high-performance ecommerce platform designed to scale globally, improve conversion rates, and deliver a premium shopping experience.",
    stats: [
      { value: "2.1s", label: "Conversion Rate" },
      { value: "2x", label: "Conversion Rate" },
      { value: "+32%", label: "Organic Traffic" },
    ],
  },
  {
    id: "girteka",
    image: caseGirtekaImage,
    title: "Girteka — Transportation Management System",
    description:
      "We helped LGFG Fashion House launch a high-performance ecommerce platform designed to scale globally, improve conversion rates, and deliver a premium shopping experience.",
    stats: [
      { value: "+52%", label: "Conversion Rate" },
      { value: "2.1s", label: "Load Time" },
      { value: "+32%", label: "Organic Traffic" },
    ],
  },
  {
    id: "cultnaked",
    image: caseCultnakedImage,
    title: "Cultnaked - Fashion store",
    description:
      "We helped LGFG Fashion House launch a high-performance ecommerce platform designed to scale globally, improve conversion rates, and deliver a premium shopping experience.",
    stats: [
      { value: "3x", label: "Faster Checkout" },
      { value: "-28%", label: "Faster Checkout" },
      { value: "2x", label: "Faster Checkout" },
    ],
  },
] as const;

export function TestCaseStudies() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]["id"]>("all");

  return (
    <section
      className={cn(figtree.className, "w-full bg-white py-12 lg:py-20")}
    >
      <div className={caseStudiesStyles.shell}>
        <div className={caseStudiesStyles.content}>
          <div className={caseStudiesStyles.layoutGrid}>
            <aside className={caseStudiesStyles.sidebar}>
              <p className={cn(caseStudiesStyles.pill, "mb-4")}>Case studies</p>
              <h2 className={caseStudiesStyles.title}>
                Real results from real stores
              </h2>
              <p className={caseStudiesStyles.intro}>
                Proven e-commerce outcomes that speak for themselves — from
                higher conversions to faster growth.
              </p>
              <Link
                href="#"
                className={cn(
                  buttonStyles({ variant: "outline", size: "sm" }),
                  "gap-2 rounded-lg px-5",
                )}
              >
                See all cases
                <ArrowLineIcon className={caseStudiesStyles.arrowIcon} />
              </Link>
            </aside>

            <div>
              <div className={caseStudiesStyles.filterRow}>
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    type="button"
                    onClick={() => setActiveFilter(filter.id)}
                    className={
                      activeFilter === filter.id
                        ? caseStudiesStyles.filterPillActive
                        : caseStudiesStyles.filterPill
                    }
                  >
                    {filter.label}
                    <sup className={caseStudiesStyles.filterSup}>
                      {filter.count}
                    </sup>
                  </button>
                ))}
              </div>

              <div className={caseStudiesStyles.cardsStack}>
                {caseStudies.map((item) => (
                  <article key={item.id} className={caseStudiesStyles.card}>
                    <div className={caseStudiesStyles.cardRow}>
                      <div className={caseStudiesStyles.cardMedia}>
                        <Image
                          src={item.image}
                          alt=""
                          width={890}
                          height={403}
                          className={caseStudiesStyles.cardImage}
                          sizes="(max-width: 1024px) 100vw, 48vw"
                        />
                      </div>

                      <div className={caseStudiesStyles.cardBody}>
                        <h3 className={caseStudiesStyles.cardTitle}>
                          {item.title}
                        </h3>
                        <p className={caseStudiesStyles.cardText}>
                          {item.description}
                        </p>

                        <div className={caseStudiesStyles.statsGrid}>
                          {item.stats.map((stat) => (
                            <div key={stat.label + stat.value}>
                              <p className={caseStudiesStyles.statValue}>
                                {stat.value}
                                <ArrowUpIcon
                                  className={caseStudiesStyles.statIcon}
                                />
                              </p>
                              <p className={caseStudiesStyles.statLabel}>
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>

                        <Link href="#" className={caseStudiesStyles.cardLink}>
                          Discover case
                          <ArrowRightIcon
                            className={caseStudiesStyles.linkIcon}
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
