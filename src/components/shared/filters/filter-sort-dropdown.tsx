import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { SelectRoot, SelectTrigger, SelectValue, SelectPopup, SelectList, SelectItem } from "@/components/ui/select";

type FilterSortDropdownProps = {
  options?: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
};

function FilterSortDropdown({
  options,
  value: controlledValue,
  onChange,
}: FilterSortDropdownProps) {
  const { t } = useTranslation();
  const [internalValue, setInternalValue] = useState("");
  const value = controlledValue ?? internalValue;
  const setValue = onChange ?? setInternalValue;

  const defaultOptions = [
    { label: t("products.filters.sort.latest"), value: "" },
    { label: t("products.filters.sort.priceLowToHigh"), value: "price" },
    { label: t("products.filters.sort.priceHighToLow"), value: "-price" },
    { label: t("products.filters.sort.nameAZ"), value: "title" },
    { label: t("products.filters.sort.nameZA"), value: "-title" },
  ];

  const resolvedOptions = options ?? defaultOptions;
  const selectedLabel = resolvedOptions.find((o) => o.value === value)?.label ?? t("products.filters.sort.latest");

  return (
    <SelectRoot value={value} onValueChange={(v) => setValue(v ?? "")}>
      <SelectTrigger>
        <SelectValue placeholder={t("products.filters.sort.latest")}>{selectedLabel}</SelectValue>
      </SelectTrigger>
      <SelectPopup>
        <SelectList>
          {resolvedOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectList>
      </SelectPopup>
    </SelectRoot>
  );
}

export default memo(FilterSortDropdown);
