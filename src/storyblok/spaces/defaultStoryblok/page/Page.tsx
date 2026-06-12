import type { DefaultStoryBlok } from "@/storyblok/spaces/defaultStoryblok/types/types";
import type { BlokProps } from "@/storyblok/types/types";
import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function Page({ blok }: BlokProps<DefaultStoryBlok>) {
  return (
    <main
      {...storyblokEditable(blok)}
      className="min-h-screen bg-white text-[#1f1f1f]"
    >
      <Header />
      {(blok.body ?? []).map((nestedBlok) => (
        <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      <Footer />
    </main>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-[#d9d2ff]">
      <div className="mx-auto flex max-w-[1760px] items-center justify-between px-6 py-8 md:px-12">
        <a className="flex items-center gap-3 text-2xl font-black" href="/home">
          <span className="grid h-9 w-9 rotate-[-14deg] place-items-center rounded bg-[#1f1f1f] text-lg text-white">
            D
          </span>
          Brand New Day
        </a>
        <nav className="hidden items-center gap-8 text-lg font-extrabold md:flex">
          <a href="/home">Home</a>
          <a href="/services">Services</a>
          <a href="/pricing">Pricing</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a
            className="rounded-lg bg-[#1f1f1f] px-8 py-5 text-white"
            href="/about"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-[#1f1f1f] px-6 py-24 text-white md:px-12">
      <div className="mx-auto grid max-w-[1600px] gap-14 border-b border-white/30 pb-20 md:grid-cols-[1.4fr_0.6fr_0.6fr]">
        <div>
          <h2 className="max-w-[620px] text-4xl font-black leading-tight md:text-6xl">
            Let&apos;s build a brighter day together.
          </h2>
          <p className="mt-8 max-w-[620px] text-xl font-bold leading-relaxed">
            Big ideas, bold creativity, and joyful branding-let&apos;s make
            something amazing! Reach out and let&apos;s bring your vision to
            life.
          </p>
        </div>
        <FooterColumn title="Learn" links={["Home", "Services", "Pricing"]} />
        <FooterColumn title="Company" links={["About", "Blog"]} />
      </div>
      <p className="mt-8 text-center font-bold">
        Made with love Storyblok team!
      </p>
    </footer>
  );
}

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3 className="text-3xl font-black">{title}</h3>
      <div className="mt-8 flex flex-col gap-5 text-xl font-bold">
        {links.map((link) => (
          <a href={`/${link.toLowerCase()}`} key={link}>
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}
