"use client";

import logo from "@/features/test/assets/icons/common/logo.svg";
import {
  ChevronDownIcon,
  PhoneIcon,
} from "@/features/test/assets/icons/components";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { TestBookACallButton } from "../TestBookACallButton";
import { TestBookCallModal } from "../TestBookCallModal";
import { TestMenuToggle } from "../TestMenuToggle";
import { TestMobileNav } from "../TestMobileNav";
import { testHeaderNavItems } from "./TestHeader.const";
import { headerStyles } from "./TestHeader.styles";

const HEADER_HEIGHT_FALLBACK = 88;
const logoImage = logo as StaticImageData;

type TestHeaderMobileActionsProps = {
  menuOpen: boolean;
  onBookCall: () => void;
  onToggleMenu: () => void;
};

function TestHeaderMobileActions({
  menuOpen,
  onBookCall,
  onToggleMenu,
}: TestHeaderMobileActionsProps) {
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

export function TestHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [bookCallOpen, setBookCallOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) {
      setIsVisible(true);

      return;
    }

    lastScrollY.current = window.scrollY;

    const update = () => {
      if (menuOpen) {
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
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) setIsVisible(true);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const mq = window.matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (mq.matches) setMenuOpen(false);
    };

    mq.addEventListener("change", closeOnDesktop);

    return () => mq.removeEventListener("change", closeOnDesktop);
  }, [menuOpen]);

  return (
    <div className={headerStyles.wrap}>
      <div className={headerStyles.spacer} aria-hidden="true" />

      <header
        className={cn(
          "test-header-shell fixed inset-x-0 top-0 px-[16px]! md:px-0 w-full bg-white max-w-[1280px] flex justify-between items-center h-[68px] md:h-[88px] mx-auto",
          menuOpen ? "z-[70]" : "z-50",
          menuOpen || isVisible
            ? "test-header-shell-visible"
            : "test-header-shell-hidden",
        )}
      >
        <Link href="/test" className={headerStyles.logo}>
          <Image
            src={logoImage}
            alt="Stellar"
            priority
            width={139}
            height={48}
            className={headerStyles.logoImage}
          />
        </Link>
        <nav
          className={cn(figtree.className, headerStyles.nav)}
          aria-label="Main navigation"
        >
          {testHeaderNavItems.map((item) => (
            <Link key={item.label} href="#" className={headerStyles.navLink}>
              <span className={headerStyles.navLabel}>{item.label}</span>
              {item.hasDropdown ? (
                <ChevronDownIcon className={headerStyles.dropdownIcon} />
              ) : null}
            </Link>
          ))}
        </nav>
        <TestBookACallButton />
        <TestHeaderMobileActions
          menuOpen={menuOpen}
          onBookCall={() => setBookCallOpen(true)}
          onToggleMenu={() => setMenuOpen((open) => !open)}
        />
      </header>

      <TestMobileNav
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
        onBookCall={() => setBookCallOpen(true)}
      />

      <TestBookCallModal
        open={bookCallOpen}
        onClose={() => setBookCallOpen(false)}
      />
    </div>
  );
}
