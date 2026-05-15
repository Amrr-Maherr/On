import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "group/badge inline-flex h-6 w-fit shrink-0 items-center justify-center gap-2 overflow-hidden rounded-none border-2 border-transparent px-3 py-1 text-[10px] font-black uppercase tracking-widest whitespace-nowrap transition-all outline-none",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:opacity-90",
        secondary:
          "bg-muted text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground",
        outline:
          "border-border/40 text-foreground hover:border-foreground",
        ghost:
          "hover:bg-muted/50",
        link: "text-foreground underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
