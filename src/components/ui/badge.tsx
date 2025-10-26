import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-bold uppercase tracking-wide transition-all duration-200",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm hover:shadow-md",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm hover:shadow-md",
        outline: "text-foreground border-border",
        free: "border-transparent bg-secondary/50 text-secondary-foreground",
        bronze: "border-transparent bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-md shadow-orange-500/30",
        silver: "border-transparent bg-gradient-to-r from-gray-300 to-gray-400 text-gray-900 shadow-md shadow-gray-400/30",
        gold: "border-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 text-white shadow-md shadow-yellow-500/40",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
