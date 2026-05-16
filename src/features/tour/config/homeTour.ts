import type { TourConfig } from "../types";

export const homeTour: TourConfig = {
  id: "home",
  route: "/",
  steps: [
    {
      element: "nav",
      popover: {
        title: "Welcome to On",
        description:
          "Your destination for premium sportswear. Browse collections for Men, Women, and Kids, or check out the latest Sale and top Brands.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='hero-cta']",
      popover: {
        title: "Start Exploring",
        description:
          "Discover our latest performance gear. Hit this button to browse the full collection and find your edge.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='featured-products']",
      popover: {
        title: "Featured Products",
        description:
          "Curated picks from top brands. Hover any product to add it to your cart or save it to your wishlist.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='brands-section']",
      popover: {
        title: "Top Brands",
        description:
          "Shop from world-class sportswear brands. Each label brings its own legacy of performance and style.",
        side: "top",
        align: "center",
      },
    },
  ],
};
