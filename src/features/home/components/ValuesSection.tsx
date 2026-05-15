import { memo } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { valuesData } from "../utils/values";

const ValuesSection = memo(function ValuesSection() {
  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-14 text-center md:mb-18">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
              Our Ethos
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Designed with intention
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {valuesData.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group flex flex-col gap-6"
              >
                <div className="overflow-hidden rounded-none bg-muted/20">
                  <img
                    className="aspect-[4/3] w-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
                    src={value.image}
                    alt={value.title}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="text-lg font-medium text-foreground">
                    {value.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground/70">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default ValuesSection;
