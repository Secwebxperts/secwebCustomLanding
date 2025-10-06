import * as React from "react";

import { cn } from "@/utils/cn/index";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      rows={6}
      className={cn(
        "w-full min-w-0 rounded-md border border-primary-500 bg-bnw-950 px-3 py-2.5 shadow-xs transition-[color,box-shadow] outline-none placeholder:text-bnw-600 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-red-500 aria-invalid:ring-red-500",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
