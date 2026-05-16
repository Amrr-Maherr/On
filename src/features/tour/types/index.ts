import type { DriveStep } from "driver.js";

export interface TourConfig {
  id: string;
  route?: string;
  alternativeRoutes?: string[];
  steps: DriveStep[];
}

export interface TourContextValue {
  activeTour: string | null;
  startTour: (tourId: string) => void;
  isTourCompleted: (tourId: string) => boolean;
  resetTour: (tourId: string) => void;
  resetAllTours: () => void;
  getCompletedTours: () => string[];
}
