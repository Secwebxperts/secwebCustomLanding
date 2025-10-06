import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

export function Badge({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`badge`}
      {...props}
      className={cn(
        `relative flex max-w-max items-center gap-4 overflow-clip rounded-full border border-primary-800 bg-bnw-950 bg-gradient-to-b from-bnw-900 to-blue-900/20 p-2 font-extralight`,
        props.className
      )}
    >
      {props.children}
      <div
        className={cn(
          `absolute top-0 left-0 h-0.25 w-full bg-gradient-to-r from-transparent via-primary-500 to-transparent`
        )}
      />
    </div>
  );
}

export function BadgeIcon({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`badge-icon`}
      {...props}
      className={cn(
        `rounded-full bg-gradient-to-b from-primary-500 to-primary-300 p-2 ring-2 ring-primary-400`,
        props.className
      )}
    />
  );
}

export function BadgeText({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`badge-text`}
      {...props}
      className={cn(`pr-4`, props.className)}
    />
  );
}
