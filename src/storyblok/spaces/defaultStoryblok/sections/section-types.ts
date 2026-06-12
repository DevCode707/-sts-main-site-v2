import type { SbBlokData } from "@storyblok/react/rsc";

export const TEST_SECTIONS = [
  "hero_section",
  "why_us_section",
  "expertise_section",
  "case_studies_section",
  "business_solutions_section",
  "services_section",
  "platforms_expertise_section",
  "launch_platform_section",
  "industries_section",
] as const;

export type TestSection = (typeof TEST_SECTIONS)[number];

export type TestSectionSpacing = "default" | "compact" | "loose";

export type TestSectionBlok = SbBlokData & {
  component: TestSection;
  anchorId?: string;
  spacingVariant?: TestSectionSpacing;
  hidden?: boolean;
  disabled?: boolean;
  body?: SbBlokData[];
};

export function isTestSection(
  component: string | undefined,
): component is TestSection {
  return TEST_SECTIONS.includes(component as TestSection);
}
