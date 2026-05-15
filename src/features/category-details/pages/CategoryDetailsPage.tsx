import { useParams } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useCategoryDetails } from "@/features/category-details/hooks/useGetCategoryDetails";
import CategoryDetailsCard from "@/features/category-details/components/CategoryDetailsCard";
import CategoryDetailsLoader from "@/features/category-details/components/CategoryDetailsLoader";
import CategoryDetailsError from "@/features/category-details/components/CategoryDetailsError";
import CategoryProducts from "@/features/category-details/components/CategoryProducts";

export default function CategoryDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useCategoryDetails(id!);

  if (isLoading) return <CategoryDetailsLoader />;

  if (error) {
    return (
      <CategoryDetailsError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    );
  }

  const category = data?.data;

  if (!category) {
    return <CategoryDetailsError message="Category not found." />;
  }

  return (
    <div>
      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Category</p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">{category.name}</h1>
        </div>
      </section>
      <PageHelmet title={category.name} />
      <div className="container-layout py-8">
        <Breadcrumb
          className="mb-6"
          items={[
            { label: "Home", href: "/" },
            { label: "Categories", href: "/categories" },
            { label: category.name },
          ]}
        />
        <CategoryDetailsCard category={category} />

        <section className="section-py mt-8 border-t border-border/30">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
              Explore
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Category Products.
            </h2>
          </div>
          <CategoryProducts categoryId={category._id || category.id!} />
        </section>
      </div>
    </div>
  );
}
