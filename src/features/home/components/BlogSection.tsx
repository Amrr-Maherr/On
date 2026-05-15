import { memo } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { blogData } from "../utils/blog";

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const BlogSection = memo(function BlogSection() {
  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-12 md:mb-16 border-l-4 border-foreground pl-6">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
              Journal
            </span>
            <div className="mt-3 flex flex-col lg:flex-row lg:items-end lg:justify-between lg:gap-12">
              <h2 className="text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
                Latest stories.
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {blogData.map((post, index) => (
              <motion.a
                key={post.title}
                href="#"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className={`group flex flex-col gap-5 ${
                  index === 0 ? "sm:col-span-2 lg:row-span-2" : ""
                }`}
              >
                <div
                  className={`overflow-hidden rounded-none bg-muted/30 ${
                    index === 0 ? "aspect-[4/3] sm:h-full" : "aspect-video"
                  }`}
                >
                  <img
                    src={post.coverImage}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                    {formatDate(post.date)}
                  </span>
                  <h3 className="text-xl font-black leading-tight tracking-tight text-foreground transition-colors duration-300 group-hover:text-foreground/70 md:text-2xl">
                    {post.title}
                  </h3>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default BlogSection;
