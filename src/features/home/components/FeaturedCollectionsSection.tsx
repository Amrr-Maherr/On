import { memo, useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const collections = [
  {
    title: "Running",
    subtitle: "Performance Redefined",
    description: "Engineered for speed, built for endurance.",
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=running",
    gradient: "from-emerald-900/80 via-emerald-800/40 to-transparent",
  },
  {
    title: "Training",
    subtitle: "Forge Your Strength",
    description: "Push beyond your limits with our training line.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=training",
    gradient: "from-orange-900/80 via-orange-800/40 to-transparent",
  },
  {
    title: "Lifestyle",
    subtitle: "Where Comfort Meets Style",
    description: "Premium sportswear for everyday excellence.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=lifestyle",
    gradient: "from-blue-900/80 via-blue-800/40 to-transparent",
  },
];

const FeaturedCollectionsSection = memo(function FeaturedCollectionsSection() {
  const navigate = useNavigate();
  const handleViewAll = useCallback(() => navigate("/products"), [navigate]);
  const handleNavigate = useCallback(
    (slug: string) => navigate(slug),
    [navigate],
  );

  return (
    <section className="section-py bg-background">
      <div className="container-layout">
        <ScrollReveal>
          <div className="mb-14 flex items-end justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                Curated For You
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
                Featured Collections.
              </h2>
            </div>
            <Button
              onClick={handleViewAll}
              variant="ghost"
              className="hidden cursor-pointer items-center gap-2 text-sm font-semibold md:flex"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((collection, index) => (
            <ScrollReveal
              key={collection.title}
              direction="up"
              distance={40}
              delay={index * 0.15}
            >
              <button
                onClick={() => handleNavigate(collection.slug)}
                className="group relative flex h-[500px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl text-left transition-all duration-500 hover:scale-[1.02] active:scale-[0.98]"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${collection.gradient}`}
                />
                <div className="relative z-10 p-8">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                    {collection.subtitle}
                  </span>
                  <h3 className="mt-2 text-3xl font-black text-white">
                    {collection.title}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/70">
                    {collection.description}
                  </p>
                  <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-white">
                    Explore Collection
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.4}>
          <div className="mt-8 flex justify-center md:hidden">
            <Button
              onClick={handleViewAll}
              variant="outline"
              className="cursor-pointer"
            >
              View All Collections
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

export default FeaturedCollectionsSection;
