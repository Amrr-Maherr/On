import { memo } from "react";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const AuthImageSection = memo(function AuthImageSection() {
  return (
    <div className="relative hidden overflow-hidden bg-muted/30 md:block">
      <div className="absolute inset-0 bg-gradient-to-br from-foreground/[0.02] via-transparent to-foreground/[0.02]" />

      <div className="flex h-full w-full items-center justify-center p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-sm text-center"
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-foreground/5">
            <Shield className="h-9 w-9 text-foreground/40" />
          </div>
          <h2 className="text-2xl font-light tracking-tight text-foreground">
            Secure Shopping
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground/70">
            Your privacy and security are our top priority. Shop with confidence
            knowing your information is protected.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-3">
            {["Fast", "Secure", "Reliable"].map((label) => (
              <div
                key={label}
                className="rounded-2xl border border-border/40 px-4 py-3"
              >
                <p className="text-xs text-muted-foreground/60">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AuthImageSection;
