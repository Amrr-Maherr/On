import type { TourConfig } from "../types";

export const ordersTour: TourConfig = {
  id: "orders",
  route: "/orders",
  steps: [
    {
      element: "[data-tour='orders-list']",
      popover: {
        titleKey: "tour.steps.orders.list.title",
        descriptionKey: "tour.steps.orders.list.description",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='order-status']",
      popover: {
        titleKey: "tour.steps.orders.status.title",
        descriptionKey: "tour.steps.orders.status.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
