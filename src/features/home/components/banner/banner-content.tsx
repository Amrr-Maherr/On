import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BannerData } from "./constants";

interface BannerContentProps {
  data: BannerData;
}

const BannerContent = memo(function BannerContent({
  data,
}: BannerContentProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate(buildLocalizedPath(data.ctaHref, lang)),
    [navigate, lang, data.ctaHref],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex max-w-xl flex-col items-start gap-5"
    >
      <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
        {t("home.sections.banner.label")}
      </span>
      <h2 className="font-heading text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground sm:text-6xl lg:text-7xl">
        {t("home.sections.banner.headline")}
      </h2>
      <p className="max-w-md text-sm font-bold uppercase tracking-widest text-muted-foreground/70">
        {t("home.sections.banner.description")}
      </p>
      <Button
        className="mt-4 h-16 w-full cursor-pointer rounded-none bg-foreground px-10 text-[10px] font-black uppercase tracking-[0.3em] text-background transition-all duration-500 hover:bg-foreground/90 active:scale-[0.98] sm:w-auto"
        onClick={handleClick}
      >
        {t("home.sections.banner.cta")}
        <ArrowRight className="ml-3 h-5 w-5" />
      </Button>
    </motion.div>
  );
});

export default BannerContent;
