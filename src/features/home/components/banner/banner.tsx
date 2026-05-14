import { bannerData, type BannerData } from "./constants";
import BannerContent from "./banner-content";
import BannerImage from "./banner-image";
import BannerSkeleton from "./banner-skeleton";

interface BannerProps {
  data?: BannerData;
  loading?: boolean;
}

function Banner({ data = bannerData, loading = false }: BannerProps) {
  if (loading) {
    return (
      <section className="py-12" aria-label="Loading banner">
        <div className="bg-muted/50">
          <div className="container-layout py-10 sm:py-14 lg:py-16">
            <BannerSkeleton />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12" aria-labelledby="banner-heading">
      <div className="bg-muted/50">
        <div className="container-layout flex flex-col items-center gap-8 py-10 sm:py-14 lg:flex-row lg:py-16">
          <BannerContent data={data} />
          <BannerImage data={data} />
        </div>
      </div>
    </section>
  );
}

export default Banner;
