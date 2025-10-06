import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import Card from "@/ui/card";
import { BadgeIcon } from "@/ui/badge";

export function ProcessCard({ ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      data-slot={`process-card`}
      {...props}
      className={cn(
        `flex max-w-max flex-col items-center justify-center gap-3 p-8 text-center`,
        props.className
      )}
    />
  );
}

export function ProcessCardIcon({
  ...props
}: ComponentProps<typeof BadgeIcon>) {
  return (
    <BadgeIcon
      data-slot={`process-card-icon`}
      {...props}
      className={cn(
        `p-2 shadow-[0px_4px_32px_2px_var(--color-primary-500)] md:p-3`,
        props.className
      )}
    >
      <span className={cn(`text-3xl md:text-4xl`)}>{props.children}</span>
    </BadgeIcon>
  );
}

export function ProcessCardHeading({ ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot={`process-card-heading`}
      {...props}
      className={cn(`mt-4 text-2xl md:text-3xl`, props.className)}
    />
  );
}

export function ProcessCardDescription({ ...props }: ComponentProps<"p">) {
  return (
    <p
      data-slot={`process-card-description`}
      {...props}
      className={cn(
        `max-w-70 text-base font-medium text-bnw-400 md:text-lg`,
        props.className
      )}
    />
  );
}
