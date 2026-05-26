import { useContext } from "react";
import { TourContext } from "../components/TourContext";
import type { TourContextValue } from "../types";

export function useTour(): TourContextValue {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error("useTour must be used within a TourProvider");
  }
  return context;
}
