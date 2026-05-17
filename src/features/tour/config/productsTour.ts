import type { TourConfig } from "../types";

export const productsTour: TourConfig = {
  id: "products",
  route: "/products",
  steps: [
    {
      element: "[data-tour='search-input']",
      popover: {
        titleKey: "tour.steps.products.search.title",
        descriptionKey: "tour.steps.products.search.description",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='filters-panel']",
      popover: {
        titleKey: "tour.steps.products.filters.title",
        descriptionKey: "tour.steps.products.filters.description",
        side: "right",
        align: "start",
      },
    },
    {
      element: "[data-tour='product-grid']",
      popover: {
        titleKey: "tour.steps.products.grid.title",
        descriptionKey: "tour.steps.products.grid.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='sort-dropdown']",
      popover: {
        titleKey: "tour.steps.products.sort.title",
        descriptionKey: "tour.steps.products.sort.description",
        side: "bottom",
        align: "end",
      },
    },
  ],
};
