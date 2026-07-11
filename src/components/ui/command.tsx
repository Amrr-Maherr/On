import { forwardRef, type ReactNode } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Command = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "absolute top-full z-50 mt-2 w-full overflow-hidden border-2 border-border/40 bg-background shadow-2xl",
      className,
    )}
    {...props}
  />
));
Command.displayName = "Command";

const CommandInput = forwardRef<
  HTMLInputElement,
  Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> & {
    showClear?: boolean;
    onClear?: () => void;
  }
>(({ className, showClear, onClear, value, ...props }, ref) => (
  <div className="relative border-b-2 border-border/40">
    <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
    <input
      ref={ref}
      value={value}
      className={cn(
        "h-12 w-full bg-transparent pl-11 pr-10 text-sm font-bold text-foreground outline-none placeholder:text-muted-foreground/30",
        className,
      )}
      {...props}
    />
    {showClear && value && (
      <button
        type="button"
        onClick={onClear}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors hover:text-foreground"
      >
        <X className="h-4 w-4" />
      </button>
    )}
  </div>
));
CommandInput.displayName = "CommandInput";

const CommandList = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "max-h-[360px] overflow-y-auto overscroll-contain",
      className,
    )}
    {...props}
  />
));
CommandList.displayName = "CommandList";

type CommandItemProps = React.HTMLAttributes<HTMLDivElement> & {
  selected?: boolean;
};

const CommandItem = forwardRef<HTMLDivElement, CommandItemProps>(
  ({ className, selected, ...props }, ref) => (
    <div
      ref={ref}
      data-selected={selected || undefined}
      className={cn(
        "flex cursor-pointer items-center gap-3 border-b border-border/20 p-3 text-left transition-colors last:border-b-0 hover:bg-muted/30 data-[selected]:bg-muted/20",
        className,
      )}
      {...props}
    />
  ),
);
CommandItem.displayName = "CommandItem";

const CommandEmpty = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col items-center justify-center gap-2 py-8 text-center",
      className,
    )}
    {...props}
  />
));
CommandEmpty.displayName = "CommandEmpty";

function CommandLoading() {
  return (
    <div className="space-y-1 p-2">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex animate-pulse items-center gap-3 p-3">
          <div className="h-12 w-12 shrink-0 bg-muted/40" />
          <div className="flex-1 space-y-2">
            <div className="h-3 w-3/4 bg-muted/40" />
            <div className="h-2.5 w-1/4 bg-muted/20" />
          </div>
        </div>
      ))}
    </div>
  );
}

function CommandGroup({
  label,
  children,
}: {
  label?: string;
  children: ReactNode;
}) {
  return (
    <div>
      {label && (
        <p className="px-3 pt-3 pb-1.5 text-[10px] font-bold uppercase tracking-wider text-muted-foreground/40">
          {label}
        </p>
      )}
      {children}
    </div>
  );
}

export {
  Command,
  CommandInput,
  CommandList,
  CommandItem,
  CommandEmpty,
  CommandLoading,
  CommandGroup,
};
