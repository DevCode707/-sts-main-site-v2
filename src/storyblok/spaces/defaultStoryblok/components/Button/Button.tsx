import { cn } from "@/libs/cn";
import { type ButtonBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import { getHref } from "@/storyblok/spaces/defaultStoryblok/utils";
import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable } from "@storyblok/react/rsc";

import { buttonStyles } from "./Button.styles";

type ButtonProps = BlokProps<ButtonBlok> & {
  className?: string;
};

export default function Button({ blok, className = "" }: ButtonProps) {
  return (
    <a
      {...storyblokEditable(blok)}
      className={cn(buttonStyles.base, getButtonVariant(blok), className)}
      href={getHref(blok.link)}
    >
      {blok.label}
    </a>
  );
}

function getButtonVariant(blok: ButtonBlok) {
  if (blok.style === "ghost") {
    return buttonStyles.ghost;
  }

  if (blok.background_color === "white") {
    return buttonStyles.white;
  }

  if (blok.background_color === "highlight-1") {
    return buttonStyles.highlight;
  }

  return buttonStyles.default;
}
