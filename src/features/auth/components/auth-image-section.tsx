import { memo } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

const AuthImageSection = memo(function AuthImageSection() {
  return (
    <div className="relative hidden overflow-hidden bg-neutral-950 md:block">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-20"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-950/95 to-neutral-950/90" />

      <div className="flex h-full w-full items-center justify-center p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-sm text-center"
        >
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-white/10">
            <Zap className="h-9 w-9 text-white/60" />
          </div>
          <h2 className="text-3xl font-black tracking-tight text-white">
            Performance
            <br />
            Starts Here.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            Join thousands of athletes who trust us for premium sportswear.
            Train harder. Go further.
          </p>
          <div className="mt-12 grid grid-cols-2 gap-3">
            {["Free Shipping", "Easy Returns", "Premium Quality", "24/7 Support"].map(
              (label) => (
                <div
                  key={label}
                  className="flex items-center justify-center gap-1.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <ArrowRight className="h-3 w-3 text-white/40" />
                  <p className="text-xs text-white/50">{label}</p>
                </div>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AuthImageSection;
