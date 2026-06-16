import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import Link from "next/link";

import { breadcrumbsStyles } from "./Breadcrumbs.styles";

export type BreadcrumbItemBlok = SbBlokData & {
  label?: string;
  href?: string;
  is_current?: boolean;
};

type BreadcrumbsProps = {
  items: BreadcrumbItemBlok[];
};

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const visibleItems = items.filter(
    (item) => typeof item.label === "string" && item.label.trim().length > 0,
  );

  if (visibleItems.length === 0) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className={breadcrumbsStyles.nav}>
      <ol className={breadcrumbsStyles.list}>
        {visibleItems.map((item, index) => {
          const label = item.label!.trim();
          const isCurrent =
            item.is_current === true || index === visibleItems.length - 1;
          const href = item.href?.trim();

          return (
            <li key={item._uid} className={breadcrumbsStyles.item}>
              {index > 0 ? <span aria-hidden>/</span> : null}
              {isCurrent || href === undefined || href.length === 0 ? (
                <span
                  className={
                    isCurrent
                      ? breadcrumbsStyles.current
                      : breadcrumbsStyles.text
                  }
                  aria-current={isCurrent ? "page" : undefined}
                >
                  {label}
                </span>
              ) : (
                <Link href={href} className={breadcrumbsStyles.link}>
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function BreadcrumbItem({ blok }: BlokProps<BreadcrumbItemBlok>) {
  return (
    <span {...storyblokEditable(blok)} className={breadcrumbsStyles.hidden}>
      {blok.label}
    </span>
  );
}
