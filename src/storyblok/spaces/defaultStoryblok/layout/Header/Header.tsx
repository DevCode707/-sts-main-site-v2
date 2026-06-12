"use client";

import {
  ChevronDownIcon,
  PhoneIcon,
} from "@/features/test/assets/icons/components";
import { TestBookACallButton } from "@/features/test/components/TestBookACallButton";
import { TestBookCallModal } from "@/features/test/components/TestBookCallModal";
import { headerStyles } from "@/features/test/components/TestHeader/TestHeader.styles";
import { TestMenuToggle } from "@/features/test/components/TestMenuToggle";
import { TestMobileNav } from "@/features/test/components/TestMobileNav";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import { StoryblokImage } from "@/storyblok/shared/StoryblokImage/StoryblokImage";
import type { StoryblokAsset } from "@/storyblok/types/types";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const HEADER_HEIGHT_FALLBACK = 88;

type HeaderBlokType = SbBlokData & {
  Logo?: StoryblokAsset;
  items?: HeaderNavItemType[];
};

type HeaderNavItemType = SbBlokData & {
  label?: string;
  link?: {
    url?: string;
    [key: string]: string | undefined;
  };
};

type HeaderMobileActionsPropsType = {
  menuOpen: boolean;
  onBookCall: () => void;
  onToggleMenu: () => void;
};

function HeaderMobileActions({
  menuOpen,
  onBookCall,
  onToggleMenu,
}: HeaderMobileActionsPropsType) {
  return (
    <div className={headerStyles.mobileActions}>
      <button
        type="button"
        onClick={onBookCall}
        className={cn("rounded-[8px]!", headerStyles.phoneBtn)}
        aria-label="Book a call"
      >
        <PhoneIcon className={headerStyles.phoneIcon} />
      </button>
      <button
        type="button"
        onClick={onToggleMenu}
        className={cn("rounded-[8px]!", headerStyles.menuBtn)}
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        <TestMenuToggle open={menuOpen} />
      </button>
    </div>
  );
}

export function Header({ blok }: { blok: HeaderBlokType }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isBookCallOpen, setIsBookCallOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const navItems =
    blok.items?.filter((item) => {
      const label = item.label?.trim();

      return label !== undefined && label.length > 0;
    }) ?? [];

  useEffect(() => {
    const hasReducedMotionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (hasReducedMotionPreference) {
      setIsVisible(true);

      return;
    }

    lastScrollY.current = window.scrollY;

    const update = () => {
      if (isMenuOpen) {
        setIsVisible(true);
        ticking.current = false;

        return;
      }

      const headerEl =
        document.querySelector<HTMLElement>(".test-header-shell");
      const headerHeight = headerEl?.offsetHeight ?? HEADER_HEIGHT_FALLBACK;
      const current = window.scrollY;
      const delta = current - lastScrollY.current;

      if (current <= headerHeight) {
        setIsVisible(true);
      } else if (delta > 0) {
        setIsVisible(false);
      } else if (delta < 0) {
        setIsVisible(true);
      }

      lastScrollY.current = current;
      ticking.current = false;
    };

    const onScroll = () => {
      if (ticking.current) return;
      ticking.current = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) setIsVisible(true);
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setIsMenuOpen(false);
    };

    mq.addEventListener("change", closeOnDesktop);

    return () => mq.removeEventListener("change", closeOnDesktop);
  }, [isMenuOpen]);

  return (
    <div className="border-b-[#E5E6E6] border-b-[1px] px-[16px]">
      <div className="h-[68px] shrink-0 md:h-[88px]" aria-hidden="true" />

      <header
        {...storyblokEditable(blok)}
        className={cn(
          "test-header-shell fixed inset-x-0 top-0 px-[16px]! md:px-0 w-full bg-white max-w-[1280px] flex justify-between items-center h-[68px] md:h-[88px] mx-auto",
          isMenuOpen ? "z-[70]" : "z-50",
          isMenuOpen || isVisible
            ? "test-header-shell-visible"
            : "test-header-shell-hidden",
        )}
      >
        <Link href="/" className={headerStyles.logo}>
          {blok.Logo?.filename !== undefined &&
          blok.Logo.filename.length > 0 ? (
            <StoryblokImage
              image={blok.Logo}
              alt={blok.Logo.alt ?? "Stellar"}
              priority
              width={139}
              height={48}
              className={headerStyles.logoImage}
            />
          ) : null}
        </Link>
        <nav
          className={cn(figtree.className, headerStyles.nav)}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const label = item.label!.trim();
            const url = item.link?.url?.trim();
            const cachedUrl = item.link?.["cached_url"]?.trim();
            const href =
              url !== undefined && url.length > 0
                ? url
                : cachedUrl !== undefined && cachedUrl.length > 0
                  ? cachedUrl
                  : "#";

            return (
              <Link
                key={item._uid}
                href={href}
                className={headerStyles.navLink}
              >
                <span className={headerStyles.navLabel}>{label}</span>
                {label.toLowerCase() !== "contact us" ? (
                  <ChevronDownIcon className={headerStyles.dropdownIcon} />
                ) : null}
              </Link>
            );
          })}
        </nav>
        <TestBookACallButton />
        <HeaderMobileActions
          menuOpen={isMenuOpen}
          onBookCall={() => setIsBookCallOpen(true)}
          onToggleMenu={() => setIsMenuOpen((open) => !open)}
        />
      </header>

      <TestMobileNav
        open={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onBookCall={() => setIsBookCallOpen(true)}
        items={navItems}
      />

      <TestBookCallModal
        open={isBookCallOpen}
        onClose={() => setIsBookCallOpen(false)}
      />
    </div>
  );
}
