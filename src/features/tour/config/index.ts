import type { TourConfig } from "../types";
import { homeTour } from "./homeTour";
import { productsTour } from "./productsTour";
import { productDetailsTour } from "./productDetailsTour";
import { cartTour } from "./cartTour";
import { wishlistTour } from "./wishlistTour";
import { profileTour } from "./profileTour";
import { ordersTour } from "./ordersTour";
import { checkoutTour } from "./checkoutTour";
import { aboutTour } from "./aboutTour";
import { contactTour } from "./contactTour";
import { helpTour } from "./helpTour";

export const tourConfigs: TourConfig[] = [
  homeTour,
  productsTour,
  productDetailsTour,
  cartTour,
  wishlistTour,
  profileTour,
  ordersTour,
  checkoutTour,
  aboutTour,
  contactTour,
  helpTour,
];

export function findTourForRoute(pathname: string): TourConfig | undefined {
  return tourConfigs.find((tour) => {
    if (!tour.route) return false;

    const routes = tour.alternativeRoutes
      ? [tour.route, ...tour.alternativeRoutes]
      : [tour.route];

    return routes.some((route) => {
      if (route === pathname) return true;

      const patternParts = route.split("/");
      const pathParts = pathname.split("/");
      if (patternParts.length !== pathParts.length) return false;
      return patternParts.every(
        (part, i) => part.startsWith(":") || part === pathParts[i],
      );
    });
  });
}

export function findTourById(tourId: string): TourConfig | undefined {
  return tourConfigs.find((tour) => tour.id === tourId);
}
