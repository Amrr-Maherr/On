import type { TourConfig } from "../types";

export const profileTour: TourConfig = {
  id: "profile",
  route: "/profile",
  steps: [
    {
      element: "[data-tour='profile-header']",
      popover: {
        title: "Your Account",
        description:
          "Your personal dashboard. View your name, email, and account role all in one place.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: "[data-tour='profile-info']",
      popover: {
        title: "Account Details",
        description:
          "Keep your contact info up to date for faster checkouts and smooth order deliveries.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='profile-actions']",
      popover: {
        title: "Manage Your Account",
        description:
          "Edit your personal details anytime or sign out securely. You can also replay this tour from here.",
        side: "left",
        align: "center",
      },
    },
  ],
};
