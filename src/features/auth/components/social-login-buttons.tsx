import { memo } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const socialProviders = [
  { name: "Google", icon: "G" },
  { name: "Facebook", icon: "f" },
] as const;

const SocialLoginButtons = memo(function SocialLoginButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
    >
      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">or</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {socialProviders.map((provider) => (
          <Button
            key={provider.name}
            variant="outline"
            type="button"
            className="h-9 cursor-pointer gap-2 rounded-lg"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/10 text-xs font-bold">
              {provider.icon}
            </span>
            {provider.name}
          </Button>
        ))}
      </div>
    </motion.div>
  );
});

export default SocialLoginButtons;
