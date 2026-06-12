"use client";

import { ArrowRightIcon } from "@/features/test/assets/icons/components";
import { cn } from "@/libs/cn";
import { figtree } from "@/libs/fonts";
import { useState } from "react";

import { Button } from "../Button";
import { TestBookCallModal } from "../TestBookCallModal";
import { bookACallButtonStyles } from "./TestBookACallButton.styles";

type TestBookACallButtonProps = {
  className?: string;
};

export function TestBookACallButton({ className }: TestBookACallButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        variant="primary"
        size="header"
        className={cn(
          figtree.className,
          "hidden shrink-0 md:inline-flex",
          className,
        )}
      >
        <span className={bookACallButtonStyles.label}>Book a Call</span>
        <ArrowRightIcon className={bookACallButtonStyles.icon} />
      </Button>

      <TestBookCallModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
