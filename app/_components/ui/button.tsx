import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "@/app/_lib/utils";

const buttonVariants = cva(
  "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 2xl:text-base [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary-500 text-black hover:bg-primary-600",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-gray-800 bg-transparent text-gray-900 hover:border-primary-500 hover:bg-primary-500",
        secondary:
          "bg-gray-800 text-gray-0 hover:bg-gray-500 dark:bg-gray-900 dark:hover:bg-gray-300 dark:hover:text-gray-0",
        third:
          "bg-gray-0 text-gray-900 hover:bg-gray-500 hover:text-gray-0 dark:bg-gray-0 dark:hover:bg-gray-300 dark:hover:text-gray-0",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        icon: "rounded-full border border-gray-50 hover:bg-gray-200/20",
      },
      size: {
        default: "h-10.5 px-4 py-4 2xl:h-14 2xl:px-6",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-[2.625rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, type = "button", variant, size, asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        type={type}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
