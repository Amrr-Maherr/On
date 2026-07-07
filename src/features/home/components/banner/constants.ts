export interface BannerData {
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

import bannerImg from "@/assets/imgi_1_hero__b6b2iw7uvl7m_large.jpeg";

export const bannerData: BannerData = {
  headline: "New season.",
  description:
    "Clean lines, lasting quality. Discover our latest arrivals.",
  ctaLabel: "Shop the collection",
  ctaHref: "/products",
  imageSrc: bannerImg,
  imageAlt: "Apple Fitness Plus workout with trainers",
};
