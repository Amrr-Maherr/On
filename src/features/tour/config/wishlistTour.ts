import type { TourConfig } from "../types";

export const wishlistTour: TourConfig = {
  id: "wishlist",
  route: "/wishlist",
  alternativeRoutes: ["/fave"],
  steps: [
    {
      element: "[data-tour='wishlist-items']",
      popover: {
        title: "Your Favorites",
        description:
          "All your saved items live here. The filled heart means it's in your wishlist — click it to remove. Add any item to your cart when you're ready to buy.",
        side: "top",
        align: "center",
      },
    },
  ],
};
