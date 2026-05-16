import type { TourConfig } from "../types";

export const checkoutTour: TourConfig = {
  id: "checkout",
  route: "/checkout",
  steps: [
    {
      element: "[data-tour='shipping-form']",
      popover: {
        title: "Shipping Details",
        description:
          "Enter your delivery address and phone number so your order reaches you without a hitch.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='payment-method']",
      popover: {
        title: "Payment Method",
        description:
          "Choose how you'd like to pay — cash on delivery or securely online with your card.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='order-summary']",
      popover: {
        title: "Review & Place Order",
        description:
          "Double-check your items and totals before placing the order. Everything is clear and upfront.",
        side: "left",
        align: "center",
      },
    },
  ],
};
