import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const handleClick = useCallback(
    () => navigate(data.ctaHref),
    [navigate, data.ctaHref],
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex max-w-xl flex-col items-start gap-5"
    >
      <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        Featured
      </span>
      <h2 className="text-4xl font-black leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
        {data.headline}
      </h2>
      <p className="text-base leading-relaxed text-muted-foreground/70 sm:text-lg">
        {data.description}
      </p>
      <Button
        className="mt-2 h-12 cursor-pointer rounded-full bg-foreground px-8 text-base font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
        onClick={handleClick}
      >
        {data.ctaLabel}
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </motion.div>
  );
});

export default BannerContent;
