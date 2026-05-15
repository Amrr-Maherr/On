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
    <section className="section-py border-y border-border/40 bg-background">
      <div className="container-layout">
        <ScrollReveal>
          <div className="mb-14 flex items-end justify-between border-l-4 border-foreground pl-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                Collections
              </span>
              <h2 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
                CHOOSE YOUR<br />DISCIPLINE.
              </h2>
            </div>
            <button
              onClick={handleViewAll}
              className="hidden cursor-pointer items-center gap-3 text-xs font-black uppercase tracking-[0.2em] text-foreground transition-all hover:translate-x-1 md:flex"
            >
              View All
              <ArrowRight className="h-5 w-5" strokeWidth={3} />
            </button>
          </div>
        </ScrollReveal>

        <div className="grid gap-2 md:grid-cols-3">
          {collections.map((collection, index) => (
            <ScrollReveal
              key={collection.title}
              direction="up"
              distance={40}
              delay={index * 0.1}
            >
              <button
                onClick={() => handleNavigate(collection.slug)}
                className="group relative flex h-[600px] w-full cursor-pointer flex-col justify-end overflow-hidden text-left"
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-950/20 transition-colors group-hover:bg-neutral-950/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                
                <div className="relative z-10 p-10 transition-transform duration-500 group-hover:-translate-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
                    {collection.subtitle}
                  </span>
                  <h3 className="mt-4 text-4xl font-black uppercase tracking-tighter text-white">
                    {collection.title}
                  </h3>
                  <div className="mt-6 inline-flex h-12 items-center justify-center bg-white px-8 text-[10px] font-black uppercase tracking-[0.3em] text-neutral-950 opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Shop Now
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
