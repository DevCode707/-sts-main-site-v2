export const heroStyles = {
  copy: "flex w-full max-w-[540px] shrink-0 flex-col gap-0 max-md:max-w-full md:min-w-0 md:flex-1",
  copyBody: "flex flex-col flex-1 gap-4",
  badge:
    "flex items-center sm:gap-2 gap-[2px] self-center max-md:self-center md:self-start",
  ctaStack:
    "flex w-full flex-col items-stretch gap-3 max-md:max-w-none md:inline-flex md:w-auto md:items-center",
  foundersCta:
    " h-16 w-full max-md:justify-center max-md:rounded-xl md:w-[255px] md:shrink-0 md:rounded-[10px]",
  foundersLabel:
    "align-middle md:text-[16px] md:font-bold md:leading-[16px] max-md:tracking-[0] md:leading-5",
  grid: "flex w-full min-h-0 flex-col gap-8 max-md:gap-8 md:flex-row md:items-start md:justify-between md:gap-6 xl:gap-0",
  lead: "text-[16px] font-medium sm:leading-[28px] leading-[24px] align-middle text-text-secondary text-[#7A89A2] xl:text-[18px] xl:leading-[28px]",
  showcase:
    "test-hero-showcase-fade relative w-full max-w-full shrink-0 overflow-hidden max-md:mb-6 max-md:aspect-[698/664] max-md:rounded-lg md:aspect-[698/664] md:w-[48%] md:max-w-[580px] xl:w-[54.53125%] xl:max-w-[698px] xl:rounded-none mt-[42px]",
  statsOffset: "mt-6 w-full pt-0 max-md:mt-6 max-md:pt-0 md:mt-auto xl:pt-20",
  title:
    "font-medium tracking-[-0.015em] text-[#00163A] max-w-[320px] text-[56px] leading-[60px] md:text-[48px] md:leading-[52px] xl:text-[56px] xl:leading-[60px]",
  content: "box-border w-full mx-auto",
  shell:
    "box-border w-full mx-auto px-4 md:px-6 xl:max-w-[min(1280px,calc(100vw-max(0px,100vw-1280px)))] xl:px-0",
  laurel: "sm:h-[37px] sm:w-[18px] w-[12px] h-[14px] shrink-0",
  badgeText:
    "text-[12px] font-bold leading-[16px] tracking-[0.02em] uppercase align-middle text-text-primary",
  ctaWrap: "sm:mt-6 mt-3 max-xl:w-full",
  iconFrame: "relative flex size-[54px] shrink-0 items-center justify-center",
  avatarWrap: "relative size-10 shrink-0",
  avatar: "size-10 rounded-full object-cover",
  onlineHalo:
    "absolute -left-[1px] -top-[1px] size-[14px] rounded-full bg-[#97D01C]/20",
  onlineDot:
    "absolute left-[1.5px] top-[1.5px] size-[9px] rounded-full border border-white bg-[#97D01C]",
  ctaIcon: "size-4 shrink-0 text-white",
  ctaNote:
    "text-center text-[12px] font-medium leading-[12px] text-text-secondary text-[#7A89A2]",
  showcaseImage:
    "object-contain object-center max-md:object-top md:object-left-top",
  collageCanvas: "absolute inset-0",
  collageFrame0: "inset-0",
  collageFrame1: "top-[6%] right-0 h-[44%] w-[58%]",
  collageFrame2: "bottom-[4%] left-0 h-[40%] w-[52%]",
};

export const heroStatsStyles = {
  mobileGrid: "grid w-full grid-cols-2 md:hidden",
  mobileValue: "sm:text-[48px] text-[24px] sm:leading-[32px] leading-[28px]",
  mobileLabel: "m-1 max-w-[140px] text-center",
  desktopWrap: "relative hidden h-[112px] w-full shrink-0 md:block",
  desktopList: "flex h-full",
  desktopItem:
    "pr-[20px] mr-[20px] last:mr-0 py-[12px] last:pr-0 border-r border-[#D4D6E1] w-[120px] h-[112px] last:border-0",
  desktopValue: "text-[48px] leading-[48px]",
  root: "w-full md:w-auto",
};

export const collageFrameStyles = [
  heroStyles.collageFrame0,
  heroStyles.collageFrame1,
  heroStyles.collageFrame2,
] as const;
