import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

export default function Card({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `group relative flex cursor-pointer flex-col gap-6 overflow-clip rounded-3xl border border-bnw-800/70 bg-bnw-950 p-6`,
        props.className
      )}
    >
      <div
        aria-hidden
        data-desc="border"
        className={cn(
          `absolute top-0 left-0 h-0.25 w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent`
        )}
      />
      {props.children}
    </div>
  );
}
