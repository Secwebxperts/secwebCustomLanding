import React, { ComponentProps } from "react";
import Card from "@/ui/card";
import { cn } from "@/utils/cn";
import { BadgeIcon } from "@/ui/badge";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";

function ServiceCard({ ...props }: ComponentProps<typeof Card>) {
  return (
    <Card
      data-slot={`service-card`}
      {...props}
      className={cn(`group w-full max-w-90 p-8`, props.className)}
    >
      {props.children}
    </Card>
  );
}

function ServiceCardIcon({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`service-card-icon`}
      {...props}
      className={cn(`flex w-full justify-between text-xl`, props.className)}
    >
      <BadgeIcon {...props} className={cn(`p-3`, props.className)}>
        {props.children}
      </BadgeIcon>

      <div
        className={cn(
          `text-3xl text-bnw-800 transition-all duration-1000 group-hover:text-white`
        )}
      >
        <GoArrowUpRight />
      </div>
    </div>
  );
}

function ServiceCardHeader({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`service-card-header`}
      {...props}
      className={cn(``, props.className)}
    />
  );
}

function ServiceCardHeading({ ...props }: ComponentProps<"h3">) {
  return (
    <h3
      data-slot={`service-card-heading`}
      {...props}
      className={cn(`text-xl font-semibold`, props.className)}
    />
  );
}

function ServiceCardSubHeading({ ...props }: ComponentProps<"h4">) {
  return (
    <h4
      data-slot={`service-card-sub-heading`}
      {...props}
      className={cn(`text-bnw-400`, props.className)}
    />
  );
}

function ServiceCardContent({ ...props }: ComponentProps<"p">) {
  return (
    <>
      <div
        aria-hidden
        data-desc="content-divider"
        className={cn(`max-w-50 px-2`)}
      >
        <div
          className={cn(
            `bg h-0.25 w-full bg-[linear-gradient(to_right,_transparent,_var(--color-bnw-500),_transparent)] opacity-40`
          )}
        />
      </div>

      <p
        data-slot={`service-card-content`}
        {...props}
        className={cn(`text-bnw-400`, props.className)}
      >
        {props.children}
      </p>
    </>
  );
}

export type ServiceCardImageProps = Pick<
  ComponentProps<typeof Image>,
  "src" | "alt"
>;

function ServiceCardImage({
  alt,
  src,
  ...props
}: ServiceCardImageProps & ComponentProps<"div">) {
  return (
    <div
      data-slot={`service-card-image`}
      {...props}
      className={cn(`h-40 w-full overflow-clip rounded-xl`, props.className)}
    >
      <div className={cn(`relative h-full w-full`)}>
        <Image
          className={cn(`absolute h-full w-full object-cover`)}
          src={src}
          alt={alt}
          width={400}
          height={100}
        />
      </div>
    </div>
  );
}

export {
  ServiceCardSubHeading,
  ServiceCard,
  ServiceCardIcon,
  ServiceCardHeader,
  ServiceCardHeading,
  ServiceCardContent,
  ServiceCardImage,
};
