
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-apple-blue text-white hover:bg-apple-darkblue shadow-sm",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline:
          "border border-apple-gray-200 bg-white hover:bg-apple-gray-50 text-apple-gray-800",
        secondary:
          "bg-apple-gray-100 text-apple-gray-800 hover:bg-apple-gray-200",
        ghost: "hover:bg-apple-gray-50 text-apple-gray-800 hover:text-apple-gray-900",
        link: "text-apple-blue underline-offset-4 hover:underline",
        indigo: "bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm",
        violet: "bg-violet-600 text-white hover:bg-violet-700 shadow-sm",
        teal: "bg-teal-600 text-white hover:bg-teal-700 shadow-sm",
        rose: "bg-rose-600 text-white hover:bg-rose-700 shadow-sm",
        amber: "bg-amber-600 text-white hover:bg-amber-700 shadow-sm",
        // Button variants
        primary: "bg-apple-blue text-white hover:bg-apple-darkblue shadow-sm",
        success: "bg-apple-green text-white hover:bg-apple-green/90 shadow-sm",
        warning: "bg-apple-orange text-white hover:bg-apple-orange/90 shadow-sm",
        danger: "bg-apple-red text-white hover:bg-apple-red/90 shadow-sm",
        light: "bg-white text-apple-gray-800 hover:bg-apple-gray-50 border border-apple-gray-200",
        dark: "bg-black text-white hover:bg-apple-gray-900 shadow-sm",
        // Add lawpurple variants
        lawpurple: "bg-lawpurple-600 text-white hover:bg-lawpurple-700 shadow-sm",
        lawpurpleOutline: "border border-lawpurple-600 text-lawpurple-600 hover:bg-lawpurple-50",
      },
      size: {
        default: "h-10 rounded-lg px-4 py-2",
        sm: "h-9 rounded-lg px-3",
        lg: "h-11 rounded-lg px-8",
        xl: "h-12 rounded-lg px-10 text-base",
        icon: "h-10 w-10 rounded-full",
        // Add more sizes
        xxs: "h-7 text-xs rounded px-2.5 py-1",
        xs: "h-8 text-xs rounded-md px-2.5",
        "2xl": "h-14 rounded-xl px-12 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
