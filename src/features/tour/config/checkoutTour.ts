import type { TourConfig } from "../types";

export const checkoutTour: TourConfig = {
  id: "checkout",
  route: "/checkout",
  steps: [
    {
      element: "[data-tour='shipping-form']",
      popover: {
        titleKey: "tour.steps.checkout.shipping.title",
        descriptionKey: "tour.steps.checkout.shipping.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='payment-method']",
      popover: {
        titleKey: "tour.steps.checkout.payment.title",
        descriptionKey: "tour.steps.checkout.payment.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='order-summary']",
      popover: {
        titleKey: "tour.steps.checkout.review.title",
        descriptionKey: "tour.steps.checkout.review.description",
        side: "left",
        align: "center",
      },
    },
  ],
};
