import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

export function WavyBackground({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      aria-hidden
      data-desc="wavy-background"
      className={cn(
        `relative h-full w-full mask-[linear-gradient(to_bottom,_black,_transparent)]`,
        props.className
      )}
    >
      <div className={cn(`absolute h-full w-full bg-indigo-700`)} />
    </div>
  );
}
