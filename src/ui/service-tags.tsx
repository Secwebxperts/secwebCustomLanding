import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import { BadgeIcon } from "@/ui/badge";

function ServiceTags({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`service-tags`}
      {...props}
      className={cn(
        `flex max-w-max items-center gap-3 rounded-2xl border border-bnw-800 px-4 py-3`,
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function TagIcon({ ...props }: ComponentProps<typeof BadgeIcon>) {
  return (
    <BadgeIcon
      data-slot={`tag-icon`}
      {...props}
      className={cn(`p-2`, props.className)}
    />
  );
}

function TagText({ ...props }: ComponentProps<"div">) {
  return <div {...props} className={cn(`text-lg`, props.className)} />;
}

export { ServiceTags, TagIcon, TagText };
