import { HomeIcon } from "@/features/test/assets/icons/components";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Link from "next/link";

import { breadcrumbsStyles } from "./TestBreadcrumbs.styles";

export function TestBreadcrumbsRow() {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        figtree.className,
        breadcrumbsStyles.nav,
        "h-[40px] mb-[44px] sm:ml-0 ml-4",
      )}
    >
      <Link href="/test" className={breadcrumbsStyles.homeLink}>
        <HomeIcon className={breadcrumbsStyles.homeIcon} />
        <span className={breadcrumbsStyles.srLabel}>Home</span>
      </Link>

      <span className={breadcrumbsStyles.separator}>/</span>

      <Link href="#" className={breadcrumbsStyles.link}>
        Services
      </Link>

      <span className={breadcrumbsStyles.separator}>/</span>

      <span className={breadcrumbsStyles.current}>
        Ecommerce Development Services
      </span>
    </nav>
  );
}
