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
      className="mb-12 border-l-8 border-foreground pl-6 text-left rtl:border-l-0 rtl:border-r-8 rtl:pl-0 rtl:pr-6 rtl:text-right"
    >
      <h1 className="font-heading text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground/80">{description}</p>
      )}
    </motion.div>
  );
});

export default AuthHeader;
