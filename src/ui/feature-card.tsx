import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import Card from "@/ui/card";
import { BadgeIcon } from "@/ui/badge";
import Divider from "@/ui/divider";

function FeatureCard({ ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      data-slot={`feature-card`}
      {...props}
      className={cn(
        `flex max-w-100 flex-col items-center gap-6`,
        props.className
      )}
    />
  );
}

function FeatureCardIcon({ ...props }: ComponentProps<typeof BadgeIcon>) {
  return (
    <BadgeIcon
      data-slot={`feature-card-icon`}
      {...props}
      className={cn(`p-3.5 text-xl`, props.className)}
    />
  );
}

function FeatureCardHeading({ ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot={`feature-card-heading`}
      {...props}
      className={cn(
        `text-center text-3xl font-semibold text-balance`,
        props.className
      )}
    />
  );
}

function FeatureCardDescription({ ...props }: ComponentProps<"p">) {
  return (
    <>
      <Divider />

      <p
        data-slot={`feature-card-description`}
        {...props}
        className={cn(`text-center text-bnw-500`, props.className)}
      />
    </>
  );
}

function FeatureCardContent({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`feature-card-content`}
      {...props}
      className={cn(
        `aspect-5/4 w-full rounded-2xl border border-bnw-800 bg-[linear-gradient(to_bottom,_var(--color-primary-800)_1%,_var(--color-primary-950)_6%,_var(--color-primary-950))]`,
        props.className
      )}
    />
  );
}

export {
  FeatureCard,
  FeatureCardIcon,
  FeatureCardContent,
  FeatureCardHeading,
  FeatureCardDescription,
};
