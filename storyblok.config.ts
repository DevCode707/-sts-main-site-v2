import { defineConfig } from "storyblok/config";

const spaceId = process.env["STORYBLOK_SPACE_ID"];
const hasSpaceId = spaceId !== undefined && spaceId.trim().length > 0;

export default defineConfig({
  region:
    (process.env["STORYBLOK_REGION"] as "eu" | "us" | "ap" | "ca" | "cn") ??
    "eu",
  path: ".storyblok",
  ...(hasSpaceId ? { space: spaceId } : {}),
  modules: {
    components: {
      pull: {},
    },
    types: {
      generate: {
        strict: true,
        path: "src/types/storyblok",
        separateFiles: true,
      },
    },
  },
});
