import { memo } from "react";

interface FilterCheckboxGroupProps {
  options: { label: string; value: string; count?: number }[];
  selectedValues?: string[];
  onChange?: (values: string[]) => void;
}

function FilterCheckboxGroup({
  options,
  selectedValues = [],
  onChange,
}: FilterCheckboxGroupProps) {
  const handleToggle = (value: string) => {
    const isSelected = selectedValues.includes(value);
    if (isSelected) {
      onChange?.(selectedValues.filter((v) => v !== value));
    } else {
      onChange?.([...selectedValues, value]);
    }
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            className="h-4 w-4 rounded border-border text-foreground accent-foreground"
          />
          <span>{option.label}</span>
          {option.count !== undefined && (
            <span className="ml-auto text-xs text-muted-foreground/60">
              ({option.count})
            </span>
          )}
        </label>
      ))}
    </div>
  );
}

export default memo(FilterCheckboxGroup);
