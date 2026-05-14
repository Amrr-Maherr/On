export interface BannerData {
  headline: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  imageSrc: string;
  imageAlt: string;
}

export const bannerData: BannerData = {
  headline: "New Season Collection",
  description:
    "Discover our latest arrivals with premium quality and modern design. Elevate your style with our curated selection.",
  ctaLabel: "Shop Now",
  ctaHref: "/products",
  imageSrc:
    "https://images.pexels.com/photos/8386654/pexels-photo-8386654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  imageAlt: "Pink shirt hanging on clothing rack in boutique",
};
