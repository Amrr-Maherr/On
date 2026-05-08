import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section className="relative flex min-h-[80vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1920&q=80)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />

      <div className="container-layout relative z-10">
        <div className="max-w-xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Discover Your
            <span className="text-primary"> Style</span>
          </h1>
          <p className="mb-8 text-lg text-gray-200 sm:text-xl">
            Shop the latest trends with premium quality. Free shipping on all
            orders over $50.
          </p>
          <Button size="lg" className="gap-2">
            Shop Now
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
