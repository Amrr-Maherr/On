import { memo } from "react";
import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface AuthSubmitButtonProps {
  isLoading?: boolean;
  label?: string;
  loadingLabel?: string;
}

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
        className="h-16 w-full cursor-pointer bg-foreground text-xs font-black uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] disabled:opacity-50"
      >
        {isLoading && <Loader2 className="mr-3 inline-block h-4 w-4 animate-spin" strokeWidth={3} />}
        {isLoading ? loadingLabel : label}
      </button>
    </motion.div>
  );
});

export default AuthSubmitButton;
