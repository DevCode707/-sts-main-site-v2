const headerStyles = {
  root: "sticky top-0 z-50 border-b border-zinc-200 bg-white",
  inner: "mx-auto flex h-16 max-w-6xl items-center px-6",
  logoLink: "block h-[48px] w-[139px] shrink-0",
  logoImage: "block h-[48px] w-[139px] object-contain object-left",
  fallbackText: "text-sm font-semibold text-zinc-900",
  nav: "ml-auto hidden shrink-0 md:block",
  navList: "flex flex-row flex-nowrap items-center gap-8 xl:gap-10",
  navItem: "flex items-center",
  navLink:
    "inline-flex h-5 shrink-0 items-center gap-1 text-[16px] font-bold uppercase leading-5 text-[#00163A] transition-opacity hover:opacity-70",
  navLabel: "whitespace-nowrap",
  navIcon: "h-[5px] w-2",
};

export { headerStyles as styles };
