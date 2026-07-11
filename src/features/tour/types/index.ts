import type { DriveStep } from "driver.js";

export type TourStepPopover = {
  titleKey?: string;
  descriptionKey?: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
};

export type TourStepConfig = {
  element?: DriveStep["element"];
  popover?: TourStepPopover;
};

export type TourConfig = {
  id: string;
  route?: string;
  alternativeRoutes?: string[];
  steps: TourStepConfig[];
};

export type TourContextValue = {
  activeTour: string | null;
  startTour: (tourId: string) => void;
  isTourCompleted: (tourId: string) => boolean;
  resetTour: (tourId: string) => void;
  resetAllTours: () => void;
  getCompletedTours: () => string[];
};
