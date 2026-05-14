import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function AuthImageSection() {
  return (
    <div className="relative hidden overflow-hidden bg-muted md:block">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <div className="flex h-full w-full items-center justify-center p-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center"
        >
          <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-2xl bg-primary shadow-lg">
            <Shield className="h-12 w-12 text-primary-foreground" />
          </div>
          <h2 className="mb-3 text-2xl font-bold">Secure Shopping</h2>
          <p className="mx-auto max-w-sm text-sm leading-relaxed text-muted-foreground">
            Your privacy and security are our top priority. Shop with confidence
            knowing your information is protected.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 text-center">
            {["Fast", "Secure", "Reliable"].map((label) => (
              <div
                key={label}
                className="rounded-xl bg-card/50 px-4 py-3 ring-1 ring-foreground/5 backdrop-blur-sm"
              >
                <p className="text-xs font-medium">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
