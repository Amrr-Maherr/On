import { memo, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";

const LANGUAGES = [
  { code: "en", label: "EN", ariaLabel: "Switch to English" },
  { code: "ar", label: "AR", ariaLabel: "Switch to Arabic" },
] as const;

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  const changeLanguage = useCallback(
    (newLang: string) => {
      if (newLang !== lang) {
        const path = buildLocalizedPath(location.pathname.replace(/^\/(en|ar)(\/|$)/, "/"), newLang);
        navigate(path + location.search);
      }
    },
    [lang, location.pathname, location.search, navigate],
  );

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language switcher">
      {LANGUAGES.map(({ code, label, ariaLabel }) => {
        const isActive = lang === code;
        return (
          <Button
            key={code}
            variant="ghost"
            size="icon-xs"
            onClick={() => changeLanguage(code)}
            aria-label={ariaLabel}
            aria-pressed={isActive}
            className={`rounded-none text-[10px] font-black tracking-widest transition-all ${
              isActive
                ? "border-2 border-foreground text-foreground"
                : "border-2 border-transparent text-muted-foreground/80 hover:border-border/40 hover:bg-muted/30 hover:text-foreground"
            }`}
          >
            {label}
          </Button>
        );
      })}
    </div>
  );
});

export default LanguageSwitcher;
