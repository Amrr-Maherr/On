import type { TourConfig } from "../types";

export const ordersTour: TourConfig = {
  id: "orders",
  route: "/orders",
  steps: [
    {
      element: "[data-tour='orders-list']",
      popover: {
        title: "Order History",
        description:
          "Track every order you've placed. Each card shows the items, total, and current status at a glance.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='order-status']",
      popover: {
        title: "Order Status",
        description:
          "Monitor your order from confirmation to delivery. Paid and delivered badges keep you informed.",
        side: "top",
        align: "center",
      },
    },
  ],
};
