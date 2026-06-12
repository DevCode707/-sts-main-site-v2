import { cn } from "@/libs/cn";
import type { ComponentProps } from "react";

import { buttonStyles, type ButtonVariantProps } from "./Button.styles";

type ButtonProps = ComponentProps<"button"> & ButtonVariantProps;

export function Button({
  className,
  variant,
  size,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonStyles({ variant, size }), className)}
      {...props}
    />
  );
}
