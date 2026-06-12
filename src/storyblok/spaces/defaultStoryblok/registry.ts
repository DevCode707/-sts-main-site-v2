import { BannerReference } from "@/storyblok/spaces/defaultStoryblok/components/BannerReference";
import { BreadcrumbItem } from "@/storyblok/spaces/defaultStoryblok/components/Breadcrumbs";
import { Button } from "@/storyblok/spaces/defaultStoryblok/components/Button";
import { EcommerceServicePage } from "@/storyblok/spaces/defaultStoryblok/components/EcommerceServicePage";
import { FeaturedArticlesSection } from "@/storyblok/spaces/defaultStoryblok/components/FeaturedArticlesSection";
import { GridSection } from "@/storyblok/spaces/defaultStoryblok/components/GridSection";
import { HeadlineSegment } from "@/storyblok/spaces/defaultStoryblok/components/HeadlineSegment";
import { HeroSection } from "@/storyblok/spaces/defaultStoryblok/components/HeroSection";
import { ImageTextSection } from "@/storyblok/spaces/defaultStoryblok/components/ImageTextSection";
import { NewsletterFormSection } from "@/storyblok/spaces/defaultStoryblok/components/NewsletterFormSection";
import { TabbedContentSection } from "@/storyblok/spaces/defaultStoryblok/components/TabbedContentSection";
import { Teaser } from "@/storyblok/spaces/defaultStoryblok/components/Teaser";
import { SiteFooter } from "@/storyblok/spaces/defaultStoryblok/layout/Footer/Footer";
import { Header } from "@/storyblok/spaces/defaultStoryblok/layout/Header/Header";
import DefaultStoryblokPage from "@/storyblok/spaces/defaultStoryblok/page/Page";
import type { SbReactComponentsMap } from "@storyblok/react/rsc";

export const defaultStoryblokComponents: SbReactComponentsMap = {
  page: DefaultStoryblokPage,
  "default-page": DefaultStoryblokPage,
  "hero-section": HeroSection,
  button: Button,
  "headline-segment": HeadlineSegment,
  "tabbed-content-section": TabbedContentSection,
  "grid-section": GridSection,
  "image-text-section": ImageTextSection,
  "newsletter-form-section": NewsletterFormSection,
  "featured-articles-section": FeaturedArticlesSection,
  "banner-reference": BannerReference,
  ecommerce_service_page: EcommerceServicePage,
  Header,
  teaser: Teaser,
  breadcrumb_item: BreadcrumbItem,
  site_footer: SiteFooter,
};
