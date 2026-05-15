import { memo } from "react";
import { ArrowRight, Shield, Truck, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const stats = [
  { label: "Years Active", value: "12+" },
  { label: "Athletes Sponsored", value: "500+" },
  { label: "Countries Reached", value: "80+" },
];

const features = [
  {
    icon: Shield,
    title: "Premium Quality",
    description: "Engineered to the highest performance standards",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Free shipping on orders over $100",
  },
  {
    icon: RefreshCw,
    title: "30-Day Returns",
    description: "No questions asked return policy",
  },
];

const BrandStorySection = memo(function BrandStorySection() {
  const navigate = useNavigate();

  return (
    <section className="section-py bg-muted/30">
      <div className="container-layout">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left" distance={60}>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80"
                  alt="Our brand story"
                  loading="lazy"
                  className="h-[500px] w-full object-cover transition-all duration-700 hover:scale-105 md:h-[600px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-2xl bg-background p-6 shadow-2xl lg:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-foreground">
                    50K+
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Happy <br />
                    Customers
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={60}>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                Our Story
              </span>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Engineered for
                <br />
                the Extraordinary.
              </h2>
              <p className="mt-6 leading-relaxed text-muted-foreground/70">
                Born from a passion for performance, we set out to create
                sportswear that doesn't just look good — it pushes boundaries.
                Every stitch, every fabric, every design decision is made with
                one goal: to help you perform at your best.
              </p>
              <p className="mt-4 leading-relaxed text-muted-foreground/70">
                From the track to the gym, from the studio to the street, our
                gear is built for those who refuse to settle. Join thousands of
                athletes worldwide who trust us to deliver excellence.
              </p>

              <div className="mt-8 grid grid-cols-3 gap-6 border-y border-border/50 py-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-black text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {features.map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3">
                    <feat.icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {feat.title}
                      </div>
                      <div className="text-xs text-muted-foreground/60">
                        {feat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => navigate("/about")}
                  className="h-12 cursor-pointer rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
                >
                  Learn Our Story
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

export default BrandStorySection;
