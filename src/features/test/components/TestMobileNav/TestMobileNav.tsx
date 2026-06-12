"use client";

import {
  ArrowRightIcon,
  ChevronRightIcon,
  MailIcon,
} from "@/features/test/assets/icons/components";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Link from "next/link";
import { useEffect, useState } from "react";

import { testMobileNavItems, testMobileSubmenus } from "./TestMobileNav.const";
import { mobileNavStyles } from "./TestMobileNav.styles";

type MobileSubmenuKeyType = keyof typeof testMobileSubmenus;

type MobileNavApiItemType = {
  label?: string;
  link?: {
    url?: string;
    [key: string]: string | undefined;
  };
  [key: string]: unknown;
};

type MobileNavItemType = {
  description: string | null;
  id: string;
  label: string;
  href: string;
  children: MobileNavItemType[];
};

function ChevronLeft() {
  return <ChevronRightIcon className={mobileNavStyles.backIcon} />;
}

type TestMobileNavPropsType = {
  open: boolean;
  onClose: () => void;
  onBookCall: () => void;
  items?: MobileNavApiItemType[];
};

function getItemHref(item: MobileNavApiItemType) {
  const url = item.link?.url?.trim();
  const cachedUrl = item.link?.["cached_url"]?.trim();

  if (url !== undefined && url.length > 0) return url;
  if (cachedUrl !== undefined && cachedUrl.length > 0) return cachedUrl;

  return "#";
}

function getItemTextField(item: MobileNavApiItemType, field: string) {
  const value = item[field];

  if (typeof value !== "string") return null;

  const trimmedValue = value.trim();

  return trimmedValue.length > 0 ? trimmedValue : null;
}

function getItemLabel(item: MobileNavApiItemType) {
  const label = item.label?.trim();

  if (label !== undefined && label.length > 0) return label;

  const title = getItemTextField(item, "title");

  if (title !== null) return title;

  return getItemTextField(item, "headline");
}

function normalizeItems(
  items: MobileNavApiItemType[] | undefined,
): MobileNavItemType[] {
  return (
    items
      ?.map((item, index) => {
        const label = getItemLabel(item);
        const uid = item["_uid"];
        const dropdownItems = item["dropdown_items"];

        if (label === undefined || label === null || label.length === 0)
          return null;

        return {
          description: getItemTextField(item, "description"),
          id:
            typeof uid === "string" && uid.length > 0
              ? uid
              : `${label}-${index}`,
          label,
          href: getItemHref(item),
          children: normalizeItems(
            Array.isArray(dropdownItems)
              ? (dropdownItems as MobileNavApiItemType[])
              : undefined,
          ),
        };
      })
      .filter((item): item is MobileNavItemType => item !== null) ?? []
  );
}

export function TestMobileNav({
  open,
  onClose,
  onBookCall,
  items,
}: TestMobileNavPropsType) {
  const [activeSubmenu, setActiveSubmenu] =
    useState<MobileSubmenuKeyType | null>(null);
  const [activeCmsSubmenu, setActiveCmsSubmenu] =
    useState<MobileNavItemType | null>(null);
  const [activeCmsDetail, setActiveCmsDetail] =
    useState<MobileNavItemType | null>(null);
  const cmsItems = normalizeItems(items);
  const hasCmsItems = cmsItems.length > 0;

  useEffect(() => {
    if (!open) {
      setActiveSubmenu(null);
      setActiveCmsSubmenu(null);
      setActiveCmsDetail(null);

      return;
    }

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-14 bottom-0 z-[60] flex flex-col bg-white transition-[visibility,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden",
        open
          ? "visible opacity-100"
          : "invisible pointer-events-none opacity-0",
      )}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
    >
      <nav
        className={cn(
          figtree.className,
          "mt-4 flex flex-1 flex-col overflow-y-auto px-4",
        )}
        aria-label="Mobile navigation"
      >
        {activeCmsDetail !== null ? (
          <>
            <button
              type="button"
              onClick={() => setActiveCmsDetail(null)}
              className={cn(
                figtree.className,
                "flex w-full items-center gap-3 py-5 text-[28px] font-medium leading-[36px] text-[#00163A]",
              )}
            >
              <ChevronLeft />
              <span>{activeCmsDetail.label}</span>
            </button>

            <div className={mobileNavStyles.separator} aria-hidden />

            <div className={mobileNavStyles.submenuTitle}>
              {activeCmsDetail.description}
            </div>
          </>
        ) : activeCmsSubmenu !== null ? (
          <>
            <button
              type="button"
              onClick={() => {
                setActiveCmsDetail(null);
                setActiveCmsSubmenu(null);
              }}
              className={cn(
                figtree.className,
                "flex w-full items-center gap-3 py-5 text-[28px] font-medium leading-[36px] text-[#00163A]",
              )}
              aria-expanded="true"
              aria-controls={`mobile-submenu-${activeCmsSubmenu.id}`}
            >
              <ChevronLeft />
              <span>{activeCmsSubmenu.label}</span>
            </button>

            <div className={mobileNavStyles.separator} aria-hidden />

            <div id={`mobile-submenu-${activeCmsSubmenu.id}`}>
              {activeCmsSubmenu.children.map((item) => (
                <div key={item.id}>
                  {item.description !== null ? (
                    <button
                      type="button"
                      onClick={() => setActiveCmsDetail(item)}
                      className={cn(
                        figtree.className,
                        "flex min-h-[50px] w-full items-center justify-between gap-4 py-4 text-[16px] font-medium leading-[24px] text-[#00163A]",
                      )}
                    >
                      <span className={mobileNavStyles.submenuLabel}>
                        {item.label}
                      </span>
                      <ChevronRightIcon
                        className={mobileNavStyles.submenuIcon}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        figtree.className,
                        "flex min-h-[50px] w-full items-center justify-between gap-4 py-4 text-[16px] font-medium leading-[24px] text-[#00163A]",
                      )}
                    >
                      <span className={mobileNavStyles.submenuLabel}>
                        {item.label}
                      </span>
                      <ChevronRightIcon
                        className={mobileNavStyles.submenuIcon}
                      />
                    </Link>
                  )}

                  <div className={mobileNavStyles.separator} aria-hidden />
                </div>
              ))}
            </div>
          </>
        ) : activeSubmenu !== null ? (
          <>
            <button
              type="button"
              onClick={() => setActiveSubmenu(null)}
              className={cn(
                figtree.className,
                "flex w-full items-center gap-3 py-5 text-[28px] font-medium leading-[36px] text-[#00163A]",
              )}
            >
              <ChevronLeft />
              <span>{activeSubmenu}</span>
            </button>

            <div className={mobileNavStyles.separator} aria-hidden />

            {testMobileSubmenus[activeSubmenu].map((item) => (
              <div key={item}>
                <Link
                  href="#"
                  onClick={onClose}
                  className={cn(
                    figtree.className,
                    "flex min-h-[50px] w-full items-center justify-between gap-4 py-4 text-[16px] font-medium leading-[24px] text-[#00163A]",
                  )}
                >
                  <span className={mobileNavStyles.submenuLabel}>{item}</span>
                  <ChevronRightIcon className={mobileNavStyles.submenuIcon} />
                </Link>

                <div className={mobileNavStyles.separator} aria-hidden />
              </div>
            ))}
          </>
        ) : (
          <>
            {hasCmsItems ? (
              <>
                {cmsItems.map((item, index) => {
                  const hasSubmenu = item.children.length > 0;

                  return (
                    <div key={item.id}>
                      {hasSubmenu ? (
                        <button
                          type="button"
                          onClick={() => setActiveCmsSubmenu(item)}
                          className={cn(
                            figtree.className,
                            mobileNavStyles.link,
                            "w-full",
                          )}
                          aria-expanded="false"
                          aria-controls={`mobile-submenu-${item.id}`}
                        >
                          <span>{item.label}</span>
                          <ChevronRightIcon
                            className={mobileNavStyles.itemIcon}
                          />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={onClose}
                          className={cn(
                            figtree.className,
                            mobileNavStyles.link,
                          )}
                        >
                          <span>{item.label}</span>
                        </Link>
                      )}

                      {index < cmsItems.length - 1 ? (
                        <div
                          className={mobileNavStyles.separator}
                          aria-hidden
                        />
                      ) : null}
                    </div>
                  );
                })}
              </>
            ) : (
              testMobileNavItems.map((item, index) => {
                const submenuKey = item.label as MobileSubmenuKeyType;
                const hasSubmenu = submenuKey in testMobileSubmenus;

                return (
                  <div key={item.label}>
                    {hasSubmenu ? (
                      <button
                        type="button"
                        onClick={() => setActiveSubmenu(submenuKey)}
                        className={cn(
                          figtree.className,
                          mobileNavStyles.link,
                          "w-full",
                        )}
                      >
                        <span>{item.label}</span>
                        <ChevronRightIcon
                          className={mobileNavStyles.itemIcon}
                        />
                      </button>
                    ) : (
                      <Link
                        href="#"
                        onClick={onClose}
                        className={cn(figtree.className, mobileNavStyles.link)}
                      >
                        <span>{item.label}</span>
                        {item.hasChevron ? (
                          <ChevronRightIcon
                            className={mobileNavStyles.itemIcon}
                          />
                        ) : null}
                      </Link>
                    )}

                    {index < testMobileNavItems.length - 1 ? (
                      <div className={mobileNavStyles.separator} aria-hidden />
                    ) : null}
                  </div>
                );
              })
            )}

            <div className={mobileNavStyles.separator} aria-hidden />
          </>
        )}
      </nav>

      <div
        className={cn(
          figtree.className,
          "flex shrink-0 flex-col items-center gap-6 px-4 pb-10 pt-6",
        )}
      >
        <button
          type="button"
          onClick={() => {
            onClose();
            onBookCall();
          }}
          className={cn(figtree.className, mobileNavStyles.cta)}
        >
          <span className={mobileNavStyles.buttonLabel}>Book a Call</span>
          <ArrowRightIcon className={mobileNavStyles.ctaIcon} />
        </button>

        <Link
          href="mailto:business@stellar-soft.com"
          className={cn(figtree.className, mobileNavStyles.email)}
        >
          <MailIcon className={mobileNavStyles.emailIcon} />
          <span className={mobileNavStyles.emailLabel}>
            business@stellar-soft.com
          </span>
        </Link>
      </div>
    </div>
  );
}
