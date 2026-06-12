import type {
  HeadlineSegmentBlok,
  RichTextDoc,
  RichTextNode,
  StoryblokLink,
} from "@/storyblok/spaces/defaultStoryblok/types/types";

export function getHref(link?: StoryblokLink) {
  if (link === undefined) return "#";
  if (typeof link.url === "string" && link.url.trim().length > 0)
    return link.url;
  if (typeof link.cached_url === "string" && link.cached_url.trim().length > 0)
    return `/${link.cached_url}`;

  return "#";
}

export function extractRichText(value?: string | RichTextDoc) {
  if (typeof value === "string") {
    return { paragraphs: [value], items: [] };
  }

  const paragraphs: string[] = [];
  const items: string[] = [];

  for (const node of value?.content ?? []) {
    if (node.type === "paragraph") {
      const text = renderRichTextInline(node.content);
      if (text.length > 0) paragraphs.push(text);
    }

    if (node.type === "bullet_list") {
      for (const listItem of node.content ?? []) {
        const text = renderRichTextInline(listItem.content);
        if (text.length > 0) items.push(text);
      }
    }
  }

  return { paragraphs, items };
}

export function plainText(
  value?: string | RichTextDoc | HeadlineSegmentBlok[],
) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    return value.map((segment) => segment.text ?? "").join("");
  }

  return extractRichText(value).paragraphs.join(" ");
}

function renderRichTextInline(nodes?: RichTextNode[]): string {
  return (nodes ?? [])
    .map((node) => {
      if (typeof node.text === "string" && node.text.length > 0)
        return node.text;

      return renderRichTextInline(node.content);
    })
    .join("")
    .trim();
}
