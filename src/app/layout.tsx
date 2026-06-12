import StoryblokProvider from "@/storyblok/provider/StoryblokProvider";
import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "STS Main Site",
    template: "%s | STS Main Site",
  },
  description: "Next.js + Storyblok headless site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex min-h-full flex-col bg-white text-zinc-900">
        <StoryblokProvider>{children}</StoryblokProvider>
      </body>
    </html>
  );
}
