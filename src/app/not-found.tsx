import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 px-6 py-24 text-center">
      <h1 className="text-3xl font-semibold tracking-tight">Page not found</h1>
      <p className="max-w-md text-zinc-600">
        This story does not exist in Storyblok yet, or the delivery token is not
        configured.
      </p>
      <Link
        href="/"
        className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white"
      >
        Back home
      </Link>
    </div>
  );
}
