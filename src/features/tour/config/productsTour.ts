import type { TourConfig } from "../types";

export const productsTour: TourConfig = {
  id: "products",
  route: "/products",
  steps: [
    {
      element: "[data-tour='search-input']",
      popover: {
        title: "Search Products",
        description:
          "Looking for something specific? Type any keyword and press Enter to find it instantly across our entire catalog.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='filters-panel']",
      popover: {
        title: "Refine Your Results",
        description:
          "Narrow down products by category, brand, price range, and more. Use the sort dropdown to reorder by latest or price.",
        side: "right",
        align: "start",
      },
    },
    {
      element: "[data-tour='product-grid']",
      popover: {
        title: "Product Cards",
        description:
          "Every product shows its image, price, rating, and quick actions. Hover for instant Add to Cart or save for later.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='sort-dropdown']",
      popover: {
        title: "Sort & Organize",
        description:
          "Arrange products by newest arrivals, price low-to-high, or alphabetically to find your perfect match faster.",
        side: "bottom",
        align: "end",
      },
    },
  ],
};
