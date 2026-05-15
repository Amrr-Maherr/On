import { memo } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { blogData } from "../utils/blog";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

const BlogSection = memo(function BlogSection() {
  return (
    <ScrollReveal>
      <section className="container-layout md:py-22">
        <div className="flex flex-col gap-16">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              className="flex flex-col gap-4 justify-center items-start grow"
            >
              <Badge
                variant="outline"
                className="text-sm font-normal py-1 px-3 h-7"
              >
                Journal
              </Badge>
              <h2 className="text-foreground text-3xl sm:text-5xl font-semibold">
                Latest stories
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1, ease: "easeInOut" }}
              className="text-base font-normal text-muted-foreground max-w-xl"
            >
              Explore insights on style, culture, and the stories behind the
              products that define modern living.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {blogData.map((post, index) => (
              <motion.a
                key={post.title}
                href="#"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  delay: index === 0 ? 0.2 : index === 1 ? 0.4 : 0.6,
                  ease: "easeInOut",
                }}
                className={`group flex flex-col gap-5 ${
                  index === 0 ? "sm:col-span-2" : ""
                }`}
              >
                <Card className="p-0 ring-0 border-0 rounded-none shadow-none">
                  <CardContent className="p-0 group flex flex-col gap-5">
                    <div className="w-full aspect-video sm:aspect-auto sm:h-96 overflow-hidden">
                      <img
                        src={post.coverImage}
                        alt={post.title}
                        className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p className="text-base font-normal text-muted-foreground">
                        {formatDate(post.date)}
                      </p>
                      <p className="text-2xl font-semibold text-foreground">
                        {post.title}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
});

export default BlogSection;
