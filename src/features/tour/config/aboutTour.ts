import type { TourConfig } from "../types";

export const aboutTour: TourConfig = {
  id: "about",
  route: "/about",
  steps: [
    {
      element: "[data-tour='about-hero']",
      popover: {
        titleKey: "tour.steps.about.hero.title",
        descriptionKey: "tour.steps.about.hero.description",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='about-story']",
      popover: {
        titleKey: "tour.steps.about.story.title",
        descriptionKey: "tour.steps.about.story.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='about-values']",
      popover: {
        titleKey: "tour.steps.about.values.title",
        descriptionKey: "tour.steps.about.values.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
