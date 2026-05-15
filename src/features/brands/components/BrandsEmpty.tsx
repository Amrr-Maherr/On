import { memo } from "react";
import { PackageOpen } from "lucide-react";

const BrandsEmpty = memo(function BrandsEmpty() {
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <PackageOpen className="h-12 w-12 text-muted-foreground" />
      <div>
        <h3 className="text-lg font-semibold">No brands found</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          There are no brands available at the moment.
        </p>
      </div>
    </div>
  );
});

export default BrandsEmpty;
