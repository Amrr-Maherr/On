import { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const highlights = [
  {
    name: "Running",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=running",
    count: "42 Products",
  },
  {
    name: "Training & Gym",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=training",
    count: "38 Products",
  },
  {
    name: "Yoga & Wellness",
    image:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=yoga-wellness",
    count: "27 Products",
  },
  {
    name: "Outdoor & Trail",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
    slug: "/products?category=outdoor-trail",
    count: "35 Products",
  },
];

const CategoryHighlightsSection = memo(function CategoryHighlightsSection() {
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (slug: string) => navigate(slug),
    [navigate],
  );

  return (
    <section className="section-py bg-muted/30">
      <div className="container-layout">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
              Find Your Sport
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Shop by Activity.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground/70">
              Performance gear designed for every discipline. From track to
              trail, we have you covered.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              distance={40}
              delay={index * 0.1}
            >
              <button
                onClick={() => handleNavigate(item.slug)}
                className="group relative flex h-[320px] w-full cursor-pointer flex-col justify-end overflow-hidden rounded-2xl text-left transition-all duration-500 hover:scale-[1.03] active:scale-[0.98]"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="relative z-10 p-6">
                  <h3 className="text-xl font-bold text-white">{item.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.count}</p>
                  <div className="mt-3 h-px w-0 bg-white/40 transition-all duration-300 group-hover:w-full" />
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
});

export default CategoryHighlightsSection;
