import { motion } from "framer-motion";
import type { BannerData } from "./constants";

interface BannerImageProps {
  data: BannerData;
}

function BannerImage({ data }: BannerImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      className="flex items-center justify-center lg:w-1/2"
    >
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="h-auto w-full max-w-lg object-contain"
        loading="lazy"
      />
    </motion.div>
  );
}

export default BannerImage;
