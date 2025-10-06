import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

export default function Divider({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      aria-hidden
      data-desc="divider"
      className={cn(`w-full`, props.className)}
    >
      <div
        className={cn(
          `h-0.25 bg-gradient-to-r from-transparent via-bnw-700 to-transparent`
        )}
      />
    </div>
  );
}
