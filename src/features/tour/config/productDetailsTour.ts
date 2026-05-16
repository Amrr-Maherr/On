import type { TourConfig } from "../types";

export const productDetailsTour: TourConfig = {
  id: "product-details",
  route: "/products/:slug/:id",
  steps: [
    {
      element: "[data-tour='product-gallery']",
      popover: {
        title: "Product Gallery",
        description:
          "Browse multiple product images. Click to zoom in and inspect every detail up close before you buy.",
        side: "right",
        align: "center",
      },
    },
    {
      element: "[data-tour='product-info']",
      popover: {
        title: "Product Details",
        description:
          "View the product name, brand, and price at a glance. Any discounts are clearly highlighted for you.",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='product-actions']",
      popover: {
        title: "Quick Actions",
        description:
          "Choose your quantity, add to cart, or save to your wishlist — all in one place.",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='product-reviews']",
      popover: {
        title: "Reviews & Ratings",
        description:
          "See what other customers are saying. Read real reviews to make an informed purchase.",
        side: "top",
        align: "center",
      },
    },
  ],
};
