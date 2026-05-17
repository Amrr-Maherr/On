import { memo } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const AuthImageSection = memo(function AuthImageSection() {
  const { t } = useTranslation();
  return (
    <div className="relative hidden overflow-hidden bg-neutral-950 md:block">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center opacity-40 grayscale transition-transform duration-700 hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

      <div className="flex h-full w-full items-end justify-start p-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="max-w-md"
        >
          <div className="mb-6 flex h-1 w-20 bg-white" />
          <h2 className="font-heading text-6xl font-black uppercase leading-[0.85] tracking-tighter text-white md:text-8xl">
            {t("auth.image.title1")}
            <br />
            {t("auth.image.title2")}
            <br />
            {t("auth.image.title3")}
          </h2>
          <p className="mt-8 text-lg font-bold uppercase tracking-widest text-white/70">
            {t("auth.image.subtitle")}
          </p>
          <div className="mt-12 grid grid-cols-1 gap-4">
            {["speed", "endurance", "champions"].map((key) => (
              <div
                key={key}
                className="flex items-center gap-4 group"
              >
                <div className="h-px w-8 bg-white/30 transition-all duration-300 group-hover:w-12 group-hover:bg-white" />
                <p className="text-xs font-black uppercase tracking-[0.2em] text-white/50 group-hover:text-white transition-colors">
                  {t(`auth.image.features.${key}`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
});

export default AuthImageSection;