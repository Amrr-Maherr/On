import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-none border-2 border-transparent bg-clip-padding text-xs font-black uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 outline-none select-none active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90",
        outline:
          "border-border/40 bg-transparent hover:border-foreground hover:bg-muted/30 hover:text-foreground",
        secondary:
          "bg-muted text-foreground hover:bg-muted/80",
        ghost:
          "hover:bg-muted/50 hover:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-12 gap-3 px-6",
        xs: "h-8 gap-1.5 px-3 text-[10px]",
        sm: "h-10 gap-2 px-4 text-xs",
        lg: "h-14 gap-4 px-8 text-sm tracking-[0.3em]",
        icon: "size-10",
        "icon-xs": "size-8",
        "icon-sm": "size-9",
        "icon-lg": "size-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export { Button, buttonVariants }
