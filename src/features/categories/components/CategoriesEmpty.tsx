import { memo } from "react";
import { useTranslation } from "react-i18next";
import { PackageOpen } from "lucide-react";

const CategoriesEmpty = memo(function CategoriesEmpty() {
  const { t } = useTranslation();
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <PackageOpen className="h-12 w-12 text-muted-foreground" />
      <div>
        <h3 className="text-lg font-semibold">{t("categories.empty.title")}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {t("categories.empty.description")}
        </p>
      </div>
    </div>
  );
});

export default CategoriesEmpty;