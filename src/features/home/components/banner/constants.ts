export interface BannerData {
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export const bannerData: BannerData = {
  headline: "New season.",
  description:
    "Clean lines, lasting quality. Discover our latest arrivals.",
  ctaLabel: "Shop the collection",
  ctaHref: "/products",
  imageSrc:
    "https://www.apple.com/v/apple-fitness-plus/ac/images/overview/hero/hero__b6b2iw7uvl7m_large.jpg",
  imageAlt: "Apple Fitness Plus workout with trainers",
};
