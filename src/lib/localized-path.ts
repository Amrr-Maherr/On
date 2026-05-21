import { useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const LANG_PATTERN = /^\/(en|ar)(\/|$)/;

export function getLangFromPath(pathname: string): string {
  return LANG_PATTERN.test(pathname) ? pathname.match(LANG_PATTERN)![1] : "en";
}

export function useCurrentLang(): string {
  const location = useLocation();
  return getLangFromPath(location.pathname);
}

export function buildLocalizedPath(path: string, lang: string): string {
  const cleanPath = path.replace(LANG_PATTERN, "/");
  const normalized = cleanPath.replace(/^\/+/, "/");
  const final = normalized === "/" ? "" : normalized;
  return `/${lang}${final}`;
}

export function useLocalizedNavigate() {
  const navigate = useNavigate();
  const lang = useCurrentLang();

  return useCallback(
    (to: string | number, options?: any) => {
      if (typeof to === "string" && to.startsWith("/")) {
        navigate(buildLocalizedPath(to, lang), options);
      } else {
        navigate(to, options as any);
      }
    },
    [navigate, lang],
  );
}
