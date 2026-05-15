import { Breadcrumb } from "@/components/ui/breadcrumb";

function BrandsPage() {
  return (
    <div className="container-layout py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Brands" }]} className="mb-6" />
      <p>Brands Page</p>
    </div>
  );
}

export default BrandsPage;
