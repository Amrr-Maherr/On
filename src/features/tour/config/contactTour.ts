import type { TourConfig } from "../types";

export const contactTour: TourConfig = {
  id: "contact",
  route: "/contact",
  steps: [
    {
      element: "[data-tour='contact-hero']",
      popover: {
        title: "Get in Touch",
        description:
          "We're here to help. Reach out to our support team with any questions, feedback, or concerns.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: "[data-tour='contact-form']",
      popover: {
        title: "Send a Message",
        description:
          "Fill in your details, select a topic, and write your message. We'll get back to you as soon as possible.",
        side: "top",
        align: "center",
      },
    },
    {
      element: "[data-tour='contact-info']",
      popover: {
        title: "Contact Information",
        description:
          "Prefer to call or email? Find our phone number, email address, business hours, and physical location here.",
        side: "left",
        align: "center",
      },
    },
  ],
};
