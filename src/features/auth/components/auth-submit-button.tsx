import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AuthSubmitButtonProps {
  isLoading?: boolean;
  label?: string;
  loadingLabel?: string;
}

export default function AuthSubmitButton({
  isLoading = false,
  label = "Submit",
  loadingLabel = "Submitting...",
}: AuthSubmitButtonProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
    >
      <Button
        type="submit"
        disabled={isLoading}
        className={cn("h-9 w-full cursor-pointer rounded-lg")}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isLoading ? loadingLabel : label}
      </Button>
    </motion.div>
  );
}
