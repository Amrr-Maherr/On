import { memo } from "react";
import { useTranslation } from "react-i18next";
import { PackageOpen } from "lucide-react";

const BrandsEmpty = memo(function BrandsEmpty() {
  const { t } = useTranslation();
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <PackageOpen className="h-12 w-12 text-muted-foreground" />
      <div>
        <h3 className="text-lg font-semibold">{t("brands.empty.title")}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("brands.empty.description")}
        </p>
      </div>
    </div>
  );
});

export default BrandsEmpty;