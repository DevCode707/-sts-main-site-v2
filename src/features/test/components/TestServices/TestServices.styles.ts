export const servicesStyles = {
  content: "box-border w-full mx-auto",
  shell:
    "box-border w-full mx-auto px-4 md:px-6 xl:max-w-[min(1280px,calc(100vw-max(0px,100vw-1280px)))] xl:px-0",
  cardGlow:
    "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_8%_50%,rgba(0,102,255,0.32)_0%,transparent_58%)]",
  cardInner: "relative z-1 flex min-w-0 flex-1 items-center gap-5 sm:gap-8",
  cardIcon: "size-10 shrink-0 sm:size-12",
  cardBody: "min-w-0 flex-1",
  cardTitle:
    "mb-2 text-lg font-bold leading-7 text-white sm:text-xl sm:leading-8",
  cardText:
    "max-w-[720px] text-sm font-medium leading-[22px] text-white/75 sm:text-[15px] sm:leading-6",
  linkText: "text-white",
  linkIcon: "size-3 shrink-0 text-white",
  headerGrid: "grid gap-6 lg:grid-cols-2 lg:gap-12",
  sectionTitle:
    "max-w-[560px] text-[28px] font-medium leading-[34px] tracking-[-0.015em] text-[#00163A] lg:text-[32px] lg:leading-[38px]",
  sectionText:
    "text-sm font-medium leading-6 text-[#7A89A2] lg:text-[15px] lg:leading-[26px]",
  cardsStack: "flex flex-col gap-5 sm:gap-6",
  tagsRow: "flex flex-wrap gap-3",
  tag: "rounded-lg bg-[#00163A1A] px-4 py-2.5 text-sm font-medium leading-5 text-[#00163A]",
  pill: "uppercase tracking-wide text-[0.75rem] leading-[1.25rem] font-bold text-[#0066FF]",
  panel: "flex flex-col rounded-[20px] bg-[#F9F9F9]",
  serviceCard:
    "flex flex-col relative flex flex-col items-stretch overflow-hidden rounded-[20px] bg-linear-to-r from-[#00122E] via-[#00163A] to-[#001D4A] sm:flex-row sm:items-center sm:justify-between",
};
