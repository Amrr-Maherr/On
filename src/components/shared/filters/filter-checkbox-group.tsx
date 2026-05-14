interface FilterCheckboxGroupProps {
  options: { label: string; count?: number }[];
}

export default function FilterCheckboxGroup({
  options,
}: FilterCheckboxGroupProps) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.label}
          className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <input
            type="checkbox"
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
