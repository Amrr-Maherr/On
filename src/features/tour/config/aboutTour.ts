import type { TourConfig } from "../types";

export const aboutTour: TourConfig = {
  id: "about",
  route: "/about",
  steps: [
    {
      element: "[data-tour='about-hero']",
      popover: {
        title: "About Us",
        description:
          "Learn the story behind On — our mission to deliver premium sportswear with a focus on quality, trust, and innovation.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='about-story']",
      popover: {
        title: "Our Story & Mission",
        description:
          "Discover how we started and what drives us. From sourcing the finest products to providing a seamless shopping experience.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='about-values']",
      popover: {
        title: "Core Values",
        description:
          "Quality, Trust, Innovation, and Sustainability guide everything we do. Each value reflects our commitment to you.",
        side: "top",
        align: "center",
      },
    },
  ],
};
