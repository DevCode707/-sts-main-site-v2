import "server-only";

import { getStoryblokApi } from "@/storyblok/api/storyblok-client";
import { getStoryblokVersion } from "@/storyblok/api/storyblok-version";
import type { SbBlokData } from "@storyblok/react/rsc";

type StoryRelation = {
  uuid?: string;
  content?: {
    component?: string;
  };
};

type StoryWithContent = {
  id: number;
  name: string;
  content?: {
    body?: (SbBlokData & Record<string, unknown>)[];
  } & Record<string, unknown>;
};

type StoryblokStoryResponse = {
  data: {
    story: StoryWithContent;
    rels?: StoryRelation[];
  };
};

export function resolveStoryPath(slug?: string[]) {
  if (slug === undefined || slug.length === 0) {
    return "home";
  }

  return slug.join("/");
}

export const fetchStory = async (slug?: string[]) => {
  const storyblokApi = getStoryblokApi();
  const path = resolveStoryPath(slug);

  try {
    const response = (await storyblokApi.get(`cdn/stories/${path}`, {
      version: getStoryblokVersion(),
      resolve_relations:
        "featured-articles-section.articles,banner-reference.banners",
    })) as StoryblokStoryResponse;
    const data = response.data;

    return hydrateResolvedRelations(data.story, data.rels ?? []);
  } catch {
    return null;
  }
};

function hydrateResolvedRelations(
  story: StoryWithContent,
  relations: StoryRelation[],
) {
  const body = story.content?.body;

  if (!Array.isArray(body)) {
    return story;
  }

  const hydratedBody = body.map((blok) => {
    if (blok.component === "featured-articles-section") {
      return {
        ...blok,
        articles: resolveRelationList(
          blok["articles"],
          relations,
          "article-page",
        ),
      };
    }

    if (blok.component === "banner-reference") {
      return {
        ...blok,
        banners: resolveRelationList(blok["banners"], relations, "banner"),
      };
    }

    return blok;
  });

  return {
    ...story,
    content: {
      ...story.content,
      body: hydratedBody,
    },
  };
}

function resolveRelationList(
  value: unknown,
  relations: StoryRelation[],
  component: string,
): StoryRelation[] {
  const ids = Array.isArray(value) ? value : [];
  const matchingRelations = relations.filter(
    (relation) => relation.content?.component === component,
  );
  const resolved = ids
    .map((id) => {
      if (typeof id === "string") {
        return matchingRelations.find((relation) => relation.uuid === id);
      }

      return isStoryRelation(id) ? id : undefined;
    })
    .filter((relation): relation is StoryRelation => relation !== undefined);

  return resolved.length > 0 ? resolved : matchingRelations;
}

function isStoryRelation(value: unknown): value is StoryRelation {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const relation = value as StoryRelation;

  return relation.uuid === undefined || typeof relation.uuid === "string";
}
