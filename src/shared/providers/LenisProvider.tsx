import { type ReactNode, useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { ReactLenis, useLenis } from "lenis/react";
import type Lenis from "lenis";
import { LenisScrollContext } from "@/shared/hooks/useLenisScroll";

interface LenisProviderProps {
  children: ReactNode;
}

function LenisScrollManager({ children }: { children: ReactNode }) {
  const location = useLocation();
  const lenis = useLenis();
  const lenisRef = useRef<Lenis | undefined>(undefined);

  useEffect(() => {
    lenisRef.current = lenis ?? undefined;
  }, [lenis]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      lenisRef.current?.stop();
    }
    const handler = (e: MediaQueryListEvent) => {
      if (e.matches) {
        lenisRef.current?.stop();
      } else {
        lenisRef.current?.start();
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [lenis]);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  const scrollToTop = useCallback(
    (options?: { immediate?: boolean; duration?: number }) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, {
          immediate: options?.immediate,
          duration: options?.duration,
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: options?.immediate ? "auto" : "smooth",
        });
      }
    },
    [],
  );

  const scrollTo = useCallback(
    (
      target: Parameters<Lenis["scrollTo"]>[0],
      options?: Parameters<Lenis["scrollTo"]>[1],
    ) => {
      if (lenisRef.current) {
        lenisRef.current.scrollTo(target, options);
      } else {
        const el =
          typeof target === "string"
            ? document.querySelector(target)
            : null;
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        } else if (typeof target === "number") {
          window.scrollTo({ top: target, behavior: "smooth" });
        }
      }
    },
    [],
  );

  return (
    <LenisScrollContext.Provider value={{ scrollToTop, scrollTo }}>
      {children}
    </LenisScrollContext.Provider>
  );
}

export function LenisProvider({ children }: LenisProviderProps) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        lerp: 0.1,
        allowNestedScroll: true,
      }}
    >
      <LenisScrollManager>{children}</LenisScrollManager>
    </ReactLenis>
  );
}
