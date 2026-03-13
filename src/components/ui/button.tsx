import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral/50 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-coral text-white shadow-sm hover:bg-coral-hover hover:shadow-coral hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm rounded-[--radius-full]",
        outline:
          "border border-border bg-background text-text-primary hover:bg-surface hover:border-coral/30 rounded-[--radius-full]",
        ghost:
          "text-text-primary hover:bg-surface rounded-[--radius-md]",
        navy:
          "bg-navy text-white hover:bg-navy-light hover:-translate-y-0.5 active:translate-y-0 rounded-[--radius-full]",
        link:
          "text-coral underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7 py-3 text-base",
        sm: "h-10 px-5 py-2 text-sm",
        lg: "h-14 px-9 py-4 text-base",
        icon: "h-10 w-10 rounded-[--radius-md]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
