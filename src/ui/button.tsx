import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils/cn/index";

const buttonVariants = cva(
  "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md rounded-xl text-base font-medium whitespace-nowrap transition duration-250 outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500/20 dark:aria-invalid:ring-red-500/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-2 border-primary-500 bg-gradient-to-b from-primary-600 to-primary-400 text-white hover:from-primary-700 hover:to-primary-500 focus-visible:ring-primary-500 active:from-primary-500 active:to-primary-700",
        secondary:
          "border-2 border-indigo-500 bg-gradient-to-b from-indigo-600 to-indigo-400 text-white hover:from-indigo-700 hover:to-indigo-500 focus-visible:ring-indigo-500 active:from-indigo-500 active:to-indigo-700",
        success:
          "border-2 border-green-500 bg-gradient-to-b from-green-600 to-green-400 text-white hover:from-green-700 hover:to-green-500 focus-visible:ring-green-500 active:from-green-500 active:to-green-700",
        warning:
          "border-2 border-yellow-500 bg-gradient-to-b from-yellow-600 to-yellow-400 text-white hover:from-yellow-700 hover:to-yellow-500 focus-visible:ring-yellow-500 active:from-yellow-500 active:to-yellow-700",
        destructive:
          "border-2 border-red-500 bg-gradient-to-b from-red-600 to-red-400 text-white hover:from-red-700 hover:to-red-500 focus-visible:ring-red-500 active:from-red-500 active:to-red-700",
        outline:
          "border-2 bg-transparent text-white hover:border-primary-500 focus-visible:border-primary-500 focus-visible:ring-primary-500",

        ghost:
          "hover:bg-bnw-900 focus-visible:bg-bnw-900 focus-visible:ring-bnw-900 active:bg-bnw-800",
        link: "underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 pt-5 pb-5.5 has-[>svg]:px-3",
        sm: "h-8 gap-1.5 rounded-md px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
