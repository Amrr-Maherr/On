import type { TourConfig } from "../types";

export const wishlistTour: TourConfig = {
  id: "wishlist",
  route: "/wishlist",
  alternativeRoutes: ["/fave"],
  steps: [
    {
      element: "[data-tour='wishlist-items']",
      popover: {
        titleKey: "tour.steps.wishlist.items.title",
        descriptionKey: "tour.steps.wishlist.items.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
