import type { DriveStep } from "driver.js";

export interface TourStepPopover {
  titleKey?: string;
  descriptionKey?: string;
  side?: "top" | "bottom" | "left" | "right";
  align?: "start" | "center" | "end";
}

export interface TourStepConfig {
  element?: DriveStep["element"];
  popover?: TourStepPopover;
}

export interface TourConfig {
  id: string;
  route?: string;
  alternativeRoutes?: string[];
  steps: TourStepConfig[];
}

export interface TourContextValue {
  activeTour: string | null;
  startTour: (tourId: string) => void;
  isTourCompleted: (tourId: string) => boolean;
  resetTour: (tourId: string) => void;
  resetAllTours: () => void;
  getCompletedTours: () => string[];
}
