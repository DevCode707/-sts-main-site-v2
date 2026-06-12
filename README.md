# sts-main-site-v2

Next.js 16 (App Router, React Server Components) + Storyblok + Tailwind CSS v4.

## Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16, App Router, RSC |
| Language | TypeScript (`strict` + extra compiler flags) |
| CMS | Storyblok (`@storyblok/react/rsc`, `storyblok-js-client`) |
| Styling | Tailwind CSS v4 |
| Tooling | [Storyblok CLI](https://www.storyblok.com/docs/libraries/storyblok-cli) (`storyblok` npm package) |

## Getting started

```bash
cp .env.example .env.local
# Add STORYBLOK_DELIVERY_API_TOKEN and STORYBLOK_SPACE_ID

npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The catch-all route loads the `home` story at `/` and nested paths from Storyblok.

## Storyblok CLI & TypeScript typegen

1. Log in (once per machine):

   ```bash
   npm run storyblok:login
   ```

2. Pull component schemas from your space (uses `STORYBLOK_SPACE_ID` from `storyblok.config.ts` / env):

   ```bash
   npm run storyblok:pull
   ```

3. Generate strict TypeScript definitions into `src/types/storyblok/`:

   ```bash
   npm run storyblok:types
   ```

   Or both steps:

   ```bash
   npm run storyblok:sync
   ```

Configuration lives in [`storyblok.config.ts`](./storyblok.config.ts) (`types.generate.strict`, `separateFiles`, output path).

After typegen, import generated blok types in `src/components/storyblok/*` instead of `SbBlokData`.

## Project layout

```
src/
  app/[[...slug]]/page.tsx   # Storyblok catch-all route
  components/storyblok/      # page, Header (Logo), teaser — see registry.ts
  lib/                       # storyblok client, fetchStory, metadata
  types/storyblok/           # CLI-generated .d.ts (after storyblok:types)
.storyblok/                  # Pulled schemas (CLI)
```

## Environment variables

See [`.env.example`](./.env.example).

- `STORYBLOK_DELIVERY_API_TOKEN` — Delivery API token (server-only)
- `STORYBLOK_SPACE_ID` — Space ID for CLI commands
- `STORYBLOK_REGION` — `eu` | `us` | `ap` | `ca` | `cn`
- `STORYBLOK_VERSION` — `draft` (preview) or `published`

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Next.js dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run storyblok:pull` | Pull component schemas |
| `npm run storyblok:types` | Generate strict TS types |
| `npm run storyblok:sync` | Pull + typegen |
