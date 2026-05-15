import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { BannerData } from "./constants";

interface BannerContentProps {
  data: BannerData;
}

const BannerContent = memo(function BannerContent({ data }: BannerContentProps) {
  const navigate = useNavigate();
  const handleClick = useCallback(() => navigate(data.ctaHref), [navigate, data.ctaHref]);
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col items-start gap-4 lg:w-1/2"
    >
      <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
        {data.headline}
      </h2>
      <p className="max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
        {data.description}
      </p>
      <Button
        size="lg"
        className="mt-2 cursor-pointer gap-2 rounded-full px-8 py-6 text-base shadow-md"
        onClick={handleClick}
      >
        {data.ctaLabel}
        <ArrowRight className="h-5 w-5" />
      </Button>
    </motion.div>
  );
});

export default BannerContent;
