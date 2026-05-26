import type { TourConfig } from "../types";

export const profileTour: TourConfig = {
  id: "profile",
  route: "/profile",
  steps: [
    {
      element: "[data-tour='profile-header']",
      popover: {
        titleKey: "tour.steps.profile.header.title",
        descriptionKey: "tour.steps.profile.header.description",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='profile-info']",
      popover: {
        titleKey: "tour.steps.profile.info.title",
        descriptionKey: "tour.steps.profile.info.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='profile-actions']",
      popover: {
        titleKey: "tour.steps.profile.actions.title",
        descriptionKey: "tour.steps.profile.actions.description",
        side: "left",
        align: "center",
      },
    },
  ],
};
