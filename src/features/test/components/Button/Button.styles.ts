import { cva, type VariantProps } from "class-variance-authority";

export const buttonStyles = cva(
  "inline-flex items-center justify-center font-bold transition-colors",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0073F3] text-white hover:bg-[#0052CC] [&_svg]:stroke-white",
        outline:
          "border border-[#00163A] bg-white text-[#00163A] hover:bg-[#F9F9F9]",
        ghost: "text-[#00163A] hover:opacity-70",
      },
      size: {
        xs: "h-9 gap-1 rounded-lg px-4 text-[11px] leading-4",
        header:
          "box-border h-[48px] w-[138px] gap-[8px] rounded-[8px] py-[12px] px-[20px] text-[12px] font-bold leading-[16px] tracking-[0.02em] capitalize text-[#FFFFFF]",
        sm: "h-10 gap-1.5 rounded-xl px-6 text-[0.75rem] leading-[1.25rem]",
        md: "h-14 gap-3 rounded-lg text-[0.875rem] leading-[1.25rem]",
        lg: "h-14 gap-3 rounded-lg py-2 pl-2 pr-5 text-[0.875rem] leading-[1.25rem]",
        founders:
          "h-16 w-[255px] shrink-0 items-center justify-center gap-3 rounded-lg px-5 text-sm font-bold leading-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type ButtonVariantProps = VariantProps<typeof buttonStyles>;
