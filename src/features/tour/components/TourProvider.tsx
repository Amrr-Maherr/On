import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useLocation } from "react-router-dom";
import { driver } from "driver.js";
import type { Driver } from "driver.js";
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

const AUTO_TOUR_DELAY = 800;
const STEP_DETECTION_TIMEOUT = 6000;

interface TourProviderProps {
  children: ReactNode;
}

export default function TourProvider({ children }: TourProviderProps) {
  const location = useLocation();
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

      const resolvedSteps = [];

      for (const step of tour.steps) {
        if (step.element) {
          const el =
            typeof step.element === "string"
              ? await waitForElement(step.element, STEP_DETECTION_TIMEOUT)
              : typeof step.element === "function"
                ? await waitForElement(
                    (step.element as () => string)(),
                    STEP_DETECTION_TIMEOUT,
                  )
                : step.element;

          if (el) {
            resolvedSteps.push(step);
          } else {
            const { element: _el, ...rest } = step;
            resolvedSteps.push(rest);
          }
        } else {
          resolvedSteps.push(step);
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
        progressText: "Step {{current}} of {{total}}",
        nextBtnText: "Next",
        prevBtnText: "Back",
        doneBtnText: "Done",
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
    [destroyDriver],
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
