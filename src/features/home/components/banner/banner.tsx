import { memo } from "react";
import { bannerData, type BannerData } from "./constants";
import BannerContent from "./banner-content";
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
          <div
            className="relative overflow-hidden rounded-3xl bg-muted/50"
            style={{
              backgroundImage: `url(${data.imageSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/40 to-transparent" />
            <div className="relative flex flex-col items-start gap-8 px-8 py-16 md:px-14 md:py-20 lg:px-16 lg:py-28">
              <BannerContent data={data} />
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default Banner;
