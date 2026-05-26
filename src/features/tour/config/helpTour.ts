import type { TourConfig } from "../types";

export const helpTour: TourConfig = {
  id: "help",
  route: "/help",
  steps: [
    {
      element: "[data-tour='help-hero']",
      popover: {
        titleKey: "tour.steps.help.hero.title",
        descriptionKey: "tour.steps.help.hero.description",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='help-topics']",
      popover: {
        titleKey: "tour.steps.help.topics.title",
        descriptionKey: "tour.steps.help.topics.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='help-cta']",
      popover: {
        titleKey: "tour.steps.help.cta.title",
        descriptionKey: "tour.steps.help.cta.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
