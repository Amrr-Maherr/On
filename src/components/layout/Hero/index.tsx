import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import bgImage from "@/assets/hero-bg.png";
function Hero() {
  return (
    <section className="relative flex min-h-150 items-center overflow-hidden">
      <img
        src={bgImage}
        alt=""
        className="h-full w-full object-cover absolute top-0 "
      />

      <div className="container-layout relative z-10">
        <div className="max-w-[632px]">
          <p className="text-[20px] dark:text-color-primary">
            Starting from: $49.99
          </p>
          <h1 className="mb-4 font-bold leading-tight dark:text-color-primary text-[64px]">
            Exclusive collection for everyone
          </h1>
          <Button
            size="lg"
            className="gap-2 cursor-pointer dark:bg-color-primary rounded-full px-[30px] py-[20px] shadow-2xl"
          >
            Explore now
            <Search className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
