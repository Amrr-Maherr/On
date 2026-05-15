import { memo } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { testimonialsData } from "../utils/testimonials";

const TestimonialsSection = memo(function TestimonialsSection() {
  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-14 border-l-4 border-foreground pl-6 md:mb-18">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
              Testimonials
            </span>
            <h2 className="mt-4 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              What our<br />customers say.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {testimonialsData.map((item, index) => (
              <motion.div
                key={item.name}
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
                    className="aspect-[4/5] w-full object-cover transition-all duration-500 group-hover:scale-[1.02]"
                    src={item.avatar}
                    alt={item.name}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col gap-3">
                  <p className="text-sm leading-relaxed text-muted-foreground/70">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className={
                          i < item.rating
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/20"
                        }
                      />
                    ))}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-foreground">
                      {item.name}
                    </h3>
                    <p className="text-xs text-muted-foreground/60">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default TestimonialsSection;
