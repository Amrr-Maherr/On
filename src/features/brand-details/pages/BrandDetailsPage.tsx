import { useParams } from "react-router-dom";
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
    <div className="container-layout py-8">
      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Home", href: "/" },
          { label: "Brands", href: "/" },
          { label: brand.name },
        ]}
      />

      <BrandDetailsCard brand={brand} />
    </div>
  );
}
