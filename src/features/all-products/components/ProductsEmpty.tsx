import { PackageOpen } from "lucide-react";

export default function ProductsEmpty() {
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <PackageOpen className="h-12 w-12 text-muted-foreground" />
      <div>
        <h3 className="text-lg font-semibold">No products found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          There are no products available at the moment. Please check back later.
        </p>
      </div>
    </div>
  );
}
