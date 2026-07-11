import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { driver } from "driver.js";
import type { Driver, DriveStep } from "driver.js";
import "../tour-styles.css";
import { TourContext } from "./TourContext";
import { findTourById, findTourForRoute } from "../config";
import {
  isTourCompleted,
  markTourCompleted,
  resetAllTours as resetAll,
  resetTour as resetSingle,
  getCompletedTours,
} from "../utils/tourStorage";
import { waitForElement } from "../utils/elementDetection";
import type { TourStepConfig } from "../types";

const AUTO_TOUR_DELAY = 800;
const STEP_DETECTION_TIMEOUT = 6000;

interface TourProviderProps {
  children: ReactNode;
}

function resolvePopoverSide(
  side: "top" | "bottom" | "left" | "right" | undefined,
  isRtl: boolean,
): "top" | "bottom" | "left" | "right" | undefined {
  if (!side || !isRtl) return side;
  if (side === "left") return "right";
  if (side === "right") return "left";
  return side;
}

function resolvePopoverAlign(
  align: "start" | "center" | "end" | undefined,
  isRtl: boolean,
): "start" | "center" | "end" | undefined {
  if (!align || !isRtl) return align;
  if (align === "start") return "end";
  if (align === "end") return "start";
  return align;
}

function buildDriveStep(
  step: TourStepConfig,
  t: (key: string) => string,
  isRtl: boolean,
): DriveStep {
  const popover = step.popover
    ? {
        title: step.popover.titleKey
          ? t(step.popover.titleKey)
          : undefined,
        description: step.popover.descriptionKey
          ? t(step.popover.descriptionKey)
          : undefined,
        side: resolvePopoverSide(step.popover.side, isRtl),
        align: resolvePopoverAlign(step.popover.align, isRtl),
      }
    : undefined;

  return {
    element: step.element,
    popover,
  } as DriveStep;
}

export default function TourProvider({ children }: TourProviderProps) {
  const location = useLocation();
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";
  const driverRef = useRef<Driver | null>(null);
  const [activeTour, setActiveTour] = useState<string | null>(null);
  const previousPathRef = useRef(location.pathname);

  const destroyDriver = useCallback(() => {
    if (driverRef.current) {
      try {
        driverRef.current.destroy();
      } catch {
        /* already destroyed */
      }
      driverRef.current = null;
    }
    setActiveTour(null);
  }, []);

  const startTour = useCallback(
    async (tourId: string) => {
      destroyDriver();

      const tour = findTourById(tourId);
      if (!tour || !tour.steps.length) return;

      setActiveTour(tour.id);

      const resolvedSteps: DriveStep[] = [];

      for (const step of tour.steps) {
        const driveStep = buildDriveStep(step, t, isRtl);

        if (driveStep.element) {
          const elementSelector =
            typeof driveStep.element === "string"
              ? driveStep.element
              : undefined;

          if (elementSelector) {
            const el = await waitForElement(
              elementSelector,
              STEP_DETECTION_TIMEOUT,
            );

            if (el) {
              resolvedSteps.push(driveStep);
            } else {
              const { element: _el, ...rest } = driveStep;
              resolvedSteps.push(rest);
            }
          } else {
            resolvedSteps.push(driveStep);
          }
        } else {
          resolvedSteps.push(driveStep);
        }
      }

      const driverInstance = driver({
        animate: true,
        smoothScroll: true,
        allowClose: true,
        stagePadding: 8,
        stageRadius: 0,
        allowKeyboardControl: true,
        showProgress: true,
        progressText: t("tour.popover.progress"),
        nextBtnText: t("tour.popover.next"),
        prevBtnText: t("tour.popover.back"),
        doneBtnText: t("tour.popover.done"),
        popoverClass: "on-tour-popover",
        steps: resolvedSteps,
        onNextClick: (_element, _step, { driver: d }) => {
          if (d.isLastStep()) {
            markTourCompleted(tour.id);
            d.destroy();
          } else {
            d.moveNext();
          }
        },
        onCloseClick: (_element, _step, { driver: d }) => {
          d.destroy();
        },
        onDestroyed: () => {
          setActiveTour(null);
          driverRef.current = null;
        },
      });

      driverRef.current = driverInstance;

      setTimeout(() => {
        try {
          driverInstance.drive();
        } catch {
          setActiveTour(null);
          driverRef.current = null;
        }
      }, 100);
    },
    [destroyDriver, t, isRtl],
  );

  const isCompleted = useCallback((tourId: string): boolean => {
    return isTourCompleted(tourId);
  }, []);

  const resetTourCallback = useCallback((tourId: string): void => {
    resetSingle(tourId);
  }, []);

  const resetAllCallback = useCallback((): void => {
    resetAll();
  }, []);

  const getCompleted = useCallback((): string[] => {
    return getCompletedTours();
  }, []);

  useEffect(() => {
    const prevPath = previousPathRef.current;
    previousPathRef.current = location.pathname;

    if (prevPath !== location.pathname) {
      destroyDriver();
    }

    const tour = findTourForRoute(location.pathname);
    if (!tour) return;

    if (isTourCompleted(tour.id)) return;

    const timer = setTimeout(() => {
      startTour(tour.id);
    }, AUTO_TOUR_DELAY);

    return () => clearTimeout(timer);
  }, [location.pathname, startTour, destroyDriver]);

  useEffect(() => {
    return () => {
      destroyDriver();
    };
  }, [destroyDriver]);

  return (
    <TourContext.Provider
      value={{
        activeTour,
        startTour,
        isTourCompleted: isCompleted,
        resetTour: resetTourCallback,
        resetAllTours: resetAllCallback,
        getCompletedTours: getCompleted,
      }}
    >
      {children}
    </TourContext.Provider>
  );
}
