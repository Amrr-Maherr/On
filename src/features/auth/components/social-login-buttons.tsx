import { memo } from "react";
import { motion } from "framer-motion";

const socialProviders = [
  { name: "Google", icon: "G" },
  { name: "Facebook", icon: "f" },
] as const;

const SocialLoginButtons = memo(function SocialLoginButtons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border/50" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-3 text-muted-foreground/50 tracking-[0.1em]">or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {socialProviders.map((provider) => (
          <button
            key={provider.name}
            type="button"
            className="flex h-14 cursor-pointer items-center justify-center gap-3 rounded-none border-2 border-border/40 bg-transparent text-xs font-black uppercase tracking-widest text-foreground/70 transition-all duration-300 hover:border-foreground hover:bg-muted/30 hover:text-foreground active:scale-[0.98]"
          >
            <span className="flex h-6 w-6 items-center justify-center bg-foreground text-[10px] font-black text-background">
              {provider.icon}
            </span>
            {provider.name}
          </button>
        ))}
      </div>
    </motion.div>
  );
});

export default SocialLoginButtons;
