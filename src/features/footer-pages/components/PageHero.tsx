import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  description?: string;
}

export default function PageHero({ title, description }: PageHeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="mb-10 border-b border-border pb-8"
    >
      <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
