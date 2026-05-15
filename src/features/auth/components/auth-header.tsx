import { memo } from "react";
import { motion } from "framer-motion";

interface AuthHeaderProps {
  title: string;
  description?: string;
}

const AuthHeader = memo(function AuthHeader({ title, description }: AuthHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-10 text-center"
    >
      <h1 className="text-3xl font-black tracking-tight text-foreground md:text-4xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-sm text-muted-foreground/70">{description}</p>
      )}
    </motion.div>
  );
});

export default AuthHeader;
