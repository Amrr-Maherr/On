import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

const LANGUAGES = [
  { code: "en", label: "EN", ariaLabel: "Switch to English" },
  { code: "ar", label: "AR", ariaLabel: "Switch to Arabic" },
] as const;

const LanguageSwitcher = memo(function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const currentLang = i18n.resolvedLanguage ?? i18n.language;

  const changeLanguage = useCallback(
    (lang: string) => {
      if (lang !== currentLang) {
        i18n.changeLanguage(lang);
      }
    },
    [currentLang, i18n],
  );

  return (
    <div className="flex items-center gap-0.5" role="group" aria-label="Language switcher">
      {LANGUAGES.map(({ code, label, ariaLabel }) => {
        const isActive = currentLang.startsWith(code);
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
                : "border-2 border-transparent text-muted-foreground/60 hover:border-border/40 hover:bg-muted/30 hover:text-foreground"
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
