import type { TourConfig } from "../types";

export const productDetailsTour: TourConfig = {
  id: "product-details",
  route: "/products/:slug/:id",
  steps: [
    {
      element: "[data-tour='product-gallery']",
      popover: {
        titleKey: "tour.steps.productDetails.gallery.title",
        descriptionKey: "tour.steps.productDetails.gallery.description",
        side: "right",
        align: "center",
      },
    },
    {
      element: "[data-tour='product-info']",
      popover: {
        titleKey: "tour.steps.productDetails.info.title",
        descriptionKey: "tour.steps.productDetails.info.description",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='product-actions']",
      popover: {
        titleKey: "tour.steps.productDetails.actions.title",
        descriptionKey: "tour.steps.productDetails.actions.description",
        side: "left",
        align: "center",
      },
    },
    {
      element: "[data-tour='product-reviews']",
      popover: {
        titleKey: "tour.steps.productDetails.reviews.title",
        descriptionKey: "tour.steps.productDetails.reviews.description",
        side: "top",
        align: "center",
      },
    },
  ],
};
