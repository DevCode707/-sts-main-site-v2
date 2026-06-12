import { figtree } from "@/libs/fonts";
import type { ReactNode } from "react";

const pageFrame =
  "w-full max-w-[1728px] mx-auto overflow-x-clip max-md:text-[16px] xl:text-[length:clamp(10px,calc(100vw*13/1728),13px)]";

export default function TestLayout({ children }: { children: ReactNode }) {
  return (
    <div
      className={`${pageFrame} ${figtree.variable} ${figtree.className} min-h-screen bg-white font-sans antialiased text-text-primary`}
    >
      {children}
    </div>
  );
}
