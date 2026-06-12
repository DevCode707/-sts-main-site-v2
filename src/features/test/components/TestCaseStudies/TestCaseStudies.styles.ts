export const caseStudiesStyles = {
  content: "box-border w-full mx-auto",
  shell:
    "box-border w-full mx-auto px-4 md:px-6 xl:max-w-[min(1280px,calc(100vw-max(0px,100vw-1280px)))] xl:px-0",
  layoutGrid: "grid gap-10 lg:grid-cols-[minmax(260px,340px)_1fr] lg:gap-16",
  sidebar: "lg:sticky lg:top-8 lg:self-start",
  title:
    "mb-4 text-[2.5rem] leading-[3rem] tracking-[-0.015em] font-medium text-[#00163A]",
  intro: "mb-8 text-[1.125rem] leading-[1.75rem] font-medium text-[#7A89A2]",
  arrowIcon: "size-[9px] shrink-0 text-[#00163A]",
  filterRow: "mb-8 flex flex-wrap items-center gap-1.5",
  filterSup: "text-[9px] font-semibold leading-none",
  cardsStack: "flex flex-col gap-6",
  card: "overflow-hidden rounded-2xl border border-[#EFF1F8] bg-white",
  cardRow: "flex flex-col lg:flex-row",
  cardMedia:
    "relative min-h-[220px] w-full shrink-0 overflow-hidden bg-[#F5F7FA] lg:min-h-[320px] lg:w-[48%]",
  cardImage:
    "absolute left-0 top-0 h-full w-auto min-w-full max-w-none object-cover object-left",
  cardBody: "flex flex-1 flex-col justify-center p-6 lg:p-10",
  cardTitle: "mb-3 text-xl font-bold leading-7 text-[#00163A] lg:text-2xl",
  cardText: "mb-8 text-[0.875rem] font-medium leading-6 text-[#7A89A2]",
  statsGrid: "mb-8 grid grid-cols-3 gap-4 border-t border-[#EFF1F8] pt-6",
  statValue:
    "mb-1 flex items-center gap-1 text-lg font-bold text-[#00163A] lg:text-xl",
  statIcon: "inline-block size-2.5 shrink-0",
  statLabel: "text-[0.75rem] leading-[1.25rem] font-medium text-[#7A89A2]",
  cardLink:
    "inline-flex items-center gap-2 text-[0.875rem] leading-[1.25rem] font-bold text-[#00163A] transition-opacity hover:opacity-70",
  linkIcon: "size-4",
  pill: "uppercase tracking-wide text-[0.75rem] leading-[1.25rem] font-bold text-[#0066FF]",
  filterPill:
    "inline-flex h-8 items-center gap-0.5 rounded-lg border px-2.5 py-1 text-xs font-medium leading-4 transition-colors border-[#00163A]/10 bg-white text-[#00163A] hover:border-[#0066FF]/40",
  filterPillActive:
    "inline-flex h-8 items-center gap-0.5 rounded-lg border px-2.5 py-1 text-xs font-medium leading-4 transition-colors border-[#0066FF] bg-[#0066FF] text-white",
};
