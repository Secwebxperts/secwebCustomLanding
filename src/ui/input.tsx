import * as React from "react";

import { cn } from "@/utils/cn/index";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "selection:bg-primary selection:text-primary-foreground",
        `h-9 w-full min-w-0 rounded-md border border-primary-500 bg-bnw-950 px-3 py-7 shadow-xs transition-[color,box-shadow] outline-none placeholder:text-bnw-600 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500`,
        `file:mr-4 file:-ml-2 file:inline-flex file:h-6.5 file:rounded-sm file:border-1 file:border-primary-300 file:bg-primary-500 file:px-2`,
        className
      )}
      {...props}
    />
  );
}

export { Input };
