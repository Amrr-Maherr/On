import { memo } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

type AuthSubmitButtonProps = {
  isLoading?: boolean;
  label?: string;
  loadingLabel?: string;
};

const AuthSubmitButton = memo(function AuthSubmitButton({
  isLoading = false,
  label = "Submit",
  loadingLabel = "Submitting...",
}: AuthSubmitButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <button
        type="submit"
        disabled={isLoading}
        className="group relative h-16 w-full cursor-pointer overflow-hidden bg-foreground text-sm font-black uppercase tracking-[0.4em] text-background transition-all duration-500 hover:bg-foreground/90 active:scale-[0.98] disabled:opacity-50"
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {isLoading && <Loader2 className="h-5 w-5 animate-spin" strokeWidth={4} />}
          {isLoading ? loadingLabel : label}
        </span>
        <div className="absolute inset-0 z-0 translate-y-full bg-white/10 transition-transform duration-300 group-hover:translate-y-0" />
      </button>
    </motion.div>
  );
});

export default AuthSubmitButton;
