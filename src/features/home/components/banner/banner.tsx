import { memo } from "react";
import { bannerData, type BannerData } from "./constants";
import BannerContent from "./banner-content";
import BannerImage from "./banner-image";
import BannerSkeleton from "./banner-skeleton";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface BannerProps {
  data?: BannerData;
  loading?: boolean;
}

const Banner = memo(function Banner({ data = bannerData, loading = false }: BannerProps) {
  if (loading) {
    return (
      <section className="section-py" aria-label="Loading banner">
        <div className="container-layout">
          <BannerSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="section-py" aria-labelledby="banner-heading">
      <ScrollReveal>
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-3xl bg-muted/50">
            <div className="flex flex-col items-center gap-8 px-8 py-12 md:px-14 md:py-16 lg:flex-row lg:px-16 lg:py-20">
              <BannerContent data={data} />
              <BannerImage data={data} />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default Banner;
