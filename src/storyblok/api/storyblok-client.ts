import { storyblokComponents } from "@/storyblok/registry";
import { apiPlugin, storyblokInit } from "@storyblok/react/rsc";

const region = process.env["STORYBLOK_REGION"] ?? "eu";

export const getStoryblokApi = storyblokInit({
  accessToken: process.env["STORYBLOK_DELIVERY_API_TOKEN"],
  use: [apiPlugin],
  components: storyblokComponents,
  apiOptions: {
    region,
  },
});
