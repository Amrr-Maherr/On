import type { TourConfig } from "../types";

export const homeTour: TourConfig = {
  id: "home",
  route: "/",
  steps: [
    {
      element: "nav",
      popover: {
        titleKey: "tour.steps.home.welcome.title",
        descriptionKey: "tour.steps.home.welcome.description",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='hero-cta']",
      popover: {
        titleKey: "tour.steps.home.explore.title",
        descriptionKey: "tour.steps.home.explore.description",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='featured-products']",
      popover: {
        titleKey: "tour.steps.home.featured.title",
        descriptionKey: "tour.steps.home.featured.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='brands-section']",
      popover: {
        titleKey: "tour.steps.home.brands.title",
        descriptionKey: "tour.steps.home.brands.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
