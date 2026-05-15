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
      className="mb-12 border-l-4 border-foreground pl-6 text-left"
    >
      <h1 className="text-4xl font-black uppercase tracking-tighter text-foreground md:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{description}</p>
      )}
    </motion.div>
  );
});

export default AuthHeader;
