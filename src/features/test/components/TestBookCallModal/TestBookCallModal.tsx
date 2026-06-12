"use client";

import {
  ArrowRightIcon,
  CloseIcon,
} from "@/features/test/assets/icons/components";
import calendlyLogo from "@/features/test/assets/icons/development/calendly-logo.svg";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";

import { buttonStyles } from "../Button";
import { bookCallModalStyles } from "./TestBookCallModal.styles";

const ANIMATION_MS = 280;
const calendlyLogoImage = calendlyLogo as StaticImageData;

type TestBookCallModalProps = {
  open: boolean;
  onClose: () => void;
};

export function TestBookCallModal({ open, onClose }: TestBookCallModalProps) {
  const titleId = useId();
  const [mounted, setMounted] = useState(open);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open) {
      setMounted(true);
      const frame = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });

      return () => cancelAnimationFrame(frame);
    }

    setVisible(false);
    const timer = window.setTimeout(() => setMounted(false), ANIMATION_MS);

    return () => window.clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!mounted) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) onClose();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [mounted, open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <div
      className={bookCallModalStyles.overlay}
      role="presentation"
      onClick={onClose}
    >
      <div
        className={cn(
          "absolute inset-0 bg-[#00163A]/50 backdrop-blur-md transition-opacity duration-300 ease-out",
          visible ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          figtree.className,
          "relative w-full max-w-[640px] rounded-[24px] bg-white px-8 py-8 text-center shadow-[0_32px_64px_rgba(0,22,58,0.16)] transition-all duration-300 ease-out sm:px-16 sm:py-14",
          visible
            ? "translate-y-0 scale-100 opacity-100"
            : "translate-y-3 scale-[0.97] opacity-0",
        )}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className={bookCallModalStyles.closeButton}
          aria-label="Close modal"
        >
          <CloseIcon className={bookCallModalStyles.closeIcon} />
        </button>

        <h2 id={titleId} className={bookCallModalStyles.title}>
          Thank you!
          <br />
          We&apos;ve received your request
        </h2>

        <p className={bookCallModalStyles.description}>
          Our team will review the details and get back to you shortly. If
          you&apos;d like to{" "}
          <span className={bookCallModalStyles.descriptionStrong}>
            discuss the project faster
          </span>
          , you can book a quick call with us.
        </p>

        <div className={bookCallModalStyles.logoWrap}>
          <Image
            src={calendlyLogoImage}
            alt="Calendly"
            width={128}
            height={34}
            className={bookCallModalStyles.logo}
          />
        </div>

        <a
          href="#"
          className={cn(
            buttonStyles({ variant: "primary", size: "md" }),
            "mb-3 h-14 w-full rounded-md text-[15px] font-bold leading-6 sm:text-base",
          )}
        >
          Book a call via Calendly
          <ArrowRightIcon className={bookCallModalStyles.submitIcon} />
        </a>

        <button
          type="button"
          onClick={onClose}
          className={bookCallModalStyles.cancelButton}
        >
          Close
        </button>
      </div>
    </div>,
    document.body,
  );
}
