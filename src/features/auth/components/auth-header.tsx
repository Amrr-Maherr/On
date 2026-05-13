import { motion } from "framer-motion";

interface AuthHeaderProps {
  title: string;
  description?: string;
}

export default function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="mb-8 text-center md:text-left"
    >
      <h1 className="text-2xl font-bold leading-tight md:text-3xl">
        {title}
      </h1>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
    </motion.div>
  );
}
