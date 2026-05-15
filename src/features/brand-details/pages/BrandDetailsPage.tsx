import { useParams } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useBrandDetails } from "@/features/brand-details/hooks/useGetBrandDetails";
import BrandDetailsCard from "@/features/brand-details/components/BrandDetailsCard";
import BrandDetailsLoader from "@/features/brand-details/components/BrandDetailsLoader";
import BrandDetailsError from "@/features/brand-details/components/BrandDetailsError";

export default function BrandDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useBrandDetails(id!);

  if (isLoading) return <BrandDetailsLoader />;

  if (error) {
    return (
      <BrandDetailsError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    );
  }

  const brand = data?.data;

  if (!brand) {
    return <BrandDetailsError message="Brand not found." />;
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Brand</p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">{brand.name}</h1>
        </div>
      </section>
      <PageHelmet title={brand.name} description={`Explore products from ${brand.name}`} />
      <div className="container-layout py-8">
        <Breadcrumb
          className="mb-6"
          items={[
            { label: "Home", href: "/" },
            { label: "Brands", href: "/brands" },
            { label: brand.name },
          ]}
        />
        <BrandDetailsCard brand={brand} />
      </div>
    </div>
  );
}
