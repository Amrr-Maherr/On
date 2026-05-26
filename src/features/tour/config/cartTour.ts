import type { TourConfig } from "../types";

export const cartTour: TourConfig = {
  id: "cart",
  route: "/cart",
  steps: [
    {
      element: "[data-tour='cart-items']",
      popover: {
        titleKey: "tour.steps.cart.items.title",
        descriptionKey: "tour.steps.cart.items.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='cart-summary']",
      popover: {
        titleKey: "tour.steps.cart.summary.title",
        descriptionKey: "tour.steps.cart.summary.description",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='checkout-button']",
      popover: {
        titleKey: "tour.steps.cart.checkout.title",
        descriptionKey: "tour.steps.cart.checkout.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
