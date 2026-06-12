import type { BlokProps } from "@/storyblok/types/types";
import { storyblokEditable, type SbBlokData } from "@storyblok/react/rsc";

type SiteFooterBlok = SbBlokData & {
  copyright?: string;
};

function SiteFooter({ blok }: BlokProps<SiteFooterBlok>) {
  const copyrightText = blok.copyright?.trim();
  const copyright =
    copyrightText !== undefined && copyrightText.length > 0
      ? copyrightText
      : `© ${new Date().getFullYear()} Stellar Tech Solutions. All rights reserved.`;

  return (
    <footer
      {...storyblokEditable(blok)}
      className="mt-auto border-t border-zinc-200 bg-white"
    >
      <div className="mx-auto flex max-w-6xl items-center px-6 py-8">
        <p className="text-sm text-zinc-500">{copyright}</p>
      </div>
    </footer>
  );
}

function SiteFooterFallback() {
  return (
    <SiteFooter
      blok={{
        _uid: "site-footer-fallback",
        component: "site_footer",
      }}
    />
  );
}

export { SiteFooter, SiteFooterFallback };
