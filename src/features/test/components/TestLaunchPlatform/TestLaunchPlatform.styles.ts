export const launchPlatformStyles = {
  content: "box-border w-full mx-auto",
  shell:
    "box-border w-full mx-auto px-4 md:px-6 xl:max-w-[min(1280px,calc(100vw-max(0px,100vw-1280px)))] xl:px-0",
  panel:
    "relative overflow-hidden rounded-[20px] bg-[linear-gradient(135deg,#2b7bff_0%,#1a5fd9_45%,#00163a_100%)] p-6 sm:p-8 xl:p-10",
  decorLayer: "pointer-events-none absolute inset-0 overflow-hidden",
  ringOuter:
    "absolute left-[58%] top-1/2 size-[min(640px,85vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10",
  ringMid:
    "absolute left-[62%] top-1/2 size-[min(480px,65vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/8",
  ringInner:
    "absolute left-[66%] top-1/2 size-[min(320px,45vw)] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/6",
  contentGrid:
    "relative grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:items-start lg:gap-12 xl:gap-16",
  copyCol: "flex max-w-[440px] flex-col gap-4",
  title: "text-[44px] font-medium leading-[48px] tracking-[-0.01em] text-white",
  text: "text-[16px] font-medium leading-6 text-white",
  emailLink:
    "inline-flex w-fit items-center gap-2 text-[16px] font-medium leading-6 text-white transition-opacity hover:opacity-80",
  emailIcon: "size-6 shrink-0 text-white",
  formCol: "flex flex-col gap-2",
  fieldGrid: "grid gap-2 sm:grid-cols-2",
  nameLabel: "sr-only",
  companyLabel: "sr-only",
  emailLabel: "sr-only",
  submitBtn:
    "flex h-14 w-full items-center gap-3 rounded-xl bg-[#0066FF] px-4 transition-colors hover:bg-[#0052CC]",
  submitLogo: "size-[54px] shrink-0",
  submitText: "flex-1 text-left text-[16px] font-bold leading-4 text-white",
  submitIcon: "size-4 shrink-0 text-white",
  disclaimer: "text-center text-[12px] font-medium leading-3 text-white",
  privacyLink: "underline",
  termsLink: "underline",
};
