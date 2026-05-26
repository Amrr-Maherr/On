import { createContext, useContext } from "react";

interface LenisScrollContextValue {
  scrollToTop: (options?: { immediate?: boolean; duration?: number }) => void;
  scrollTo: (
    target: string | number | HTMLElement,
    options?: {
      offset?: number;
      immediate?: boolean;
      duration?: number;
      lock?: boolean;
      force?: boolean;
    },
  ) => void;
}

export const LenisScrollContext = createContext<LenisScrollContextValue>({
  scrollToTop: () => {},
  scrollTo: () => {},
});

export function useLenisScroll() {
  return useContext(LenisScrollContext);
}
