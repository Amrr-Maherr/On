import type { TourConfig } from "../types";

export const cartTour: TourConfig = {
  id: "cart",
  route: "/cart",
  steps: [
    {
      element: "[data-tour='cart-items']",
      popover: {
        title: "Your Shopping Bag",
        description:
          "Review all items in your bag. Adjust quantities or remove items you no longer want — changes update instantly.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='cart-summary']",
      popover: {
        title: "Order Summary",
        description:
          "See a clear breakdown of your subtotal, shipping costs, and taxes. Everything is transparent before you pay.",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='checkout-button']",
      popover: {
        title: "Ready to Checkout?",
        description:
          "When you're happy with your bag, hit checkout. You're only a few steps away from your new gear.",
        side: "top",
        align: "center",
      },
    },
  ],
};
