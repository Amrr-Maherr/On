import type { TourConfig } from "../types";

export const helpTour: TourConfig = {
  id: "help",
  route: "/help",
  steps: [
    {
      element: "[data-tour='help-hero']",
      popover: {
        title: "Help Center",
        description:
          "Your one-stop resource for answers. Browse topics, find guides, and get the support you need.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='help-topics']",
      popover: {
        title: "Browse Topics",
        description:
          "Explore help categories — Orders, Shipping, Returns, Payments, Account, Privacy, Policies, and more.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='help-cta']",
      popover: {
        title: "Still Need Help?",
        description:
          "Can't find what you're looking for? Contact our support team and we'll get back to you promptly.",
        side: "top",
        align: "center",
      },
    },
  ],
};
