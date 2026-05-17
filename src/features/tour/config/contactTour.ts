import type { TourConfig } from "../types";

export const contactTour: TourConfig = {
  id: "contact",
  route: "/contact",
  steps: [
    {
      element: "[data-tour='contact-hero']",
      popover: {
        titleKey: "tour.steps.contact.hero.title",
        descriptionKey: "tour.steps.contact.hero.description",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='contact-form']",
      popover: {
        titleKey: "tour.steps.contact.form.title",
        descriptionKey: "tour.steps.contact.form.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='contact-info']",
      popover: {
        titleKey: "tour.steps.contact.info.title",
        descriptionKey: "tour.steps.contact.info.description",
        side: "left",
        align: "center",
      },
    },
  ],
};
