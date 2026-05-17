import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CategoryHighlightsSection = memo(function CategoryHighlightsSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleNavigate = useCallback(
    (slug: string) => navigate(slug),
    [navigate],
  );

  const highlights = [
    {
      name: t("home.sections.categoryHighlights.running"),
      image:
        "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80",
      slug: "/products?category=running",
    },
    {
      name: t("home.sections.categoryHighlights.trainingGym"),
      image:
        "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
      slug: "/products?category=training",
    },
    {
      name: t("home.sections.categoryHighlights.yogaWellness"),
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
      slug: "/products?category=yoga-wellness",
    },
    {
      name: t("home.sections.categoryHighlights.outdoorTrail"),
      image:
        "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=800&q=80",
      slug: "/products?category=outdoor-trail",
    },
  ];

  return (
    <section className="section-py bg-muted/50">
      <div className="container-layout">
        <ScrollReveal>
          <div className="mb-14">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/40">
              {t("home.sections.categoryHighlights.label")}
            </span>
            <h2 className="mt-4 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              {t("home.sections.categoryHighlights.titleLine1")}<br />{t("home.sections.categoryHighlights.titleLine2")}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <ScrollReveal
              key={item.name}
              direction="up"
              distance={40}
              delay={index * 0.1}
            >
              <button
                onClick={() => handleNavigate(item.slug)}
                className="group relative flex h-[400px] w-full cursor-pointer flex-col justify-end overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-neutral-950/10 transition-colors group-hover:bg-neutral-950/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />
                
                <div className="relative z-10 p-8 transition-transform duration-500 group-hover:-translate-y-2">
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-white">{item.name}</h3>
                  <div className="mt-4 flex h-10 w-10 items-center justify-center bg-white text-neutral-950 transition-transform duration-300 group-hover:translate-x-1">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14m-7-7l7 7-7 7" />
                    </svg>
                  </div>
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
