import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { ComponentProps, ReactNode } from "react";
import { FaAsterisk } from "react-icons/fa";

function PortfolioCardRow({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-row`}
      {...props}
      className={cn(
        `[--gap-inbetween:calc(var(--spacing)*3)]`,
        `gap-(--gap-inbetween) rounded-[calc(calc(var(--gap-inbetween)*2)+var(--gap-inbetween)))] p-(--gap-inbetween) *:rounded-[calc(var(--gap-inbetween)*2)]`,
        `grid grid-cols-1 border border-bnw-800 bg-bnw-900 text-lg *:max-w-90 lg:grid-cols-3`,
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

function PortfolioCardDescription({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-description`}
      {...props}
      className={cn(
        `relative isolate overflow-clip border border-primary-800 bg-primary-950/80 p-4`,
        props.className
      )}
    >
      <div className={cn(`flex flex-col gap-y-8`)}>{props.children}</div>

      <div
        data-desc="card-bg"
        className={cn(
          `absolute top-0 left-0 -z-1 h-3 w-full bg-gradient-to-b from-primary-700/50 to-transparent`
        )}
      />
    </div>
  );
}

function PortfolioCardHeader({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-header`}
      {...props}
      className={cn(`flex flex-wrap items-center gap-3`, props.className)}
    >
      {props.children}
    </div>
  );
}

function PortfolioCardHeading({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-heading`}
      {...props}
      className={cn(`text-lg font-semibold`, props.className)}
    />
  );
}

function PortfolioCardBadge({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-badge`}
      {...props}
      className={cn(
        `rounded-md border border-primary-800 px-2 py-0.75 font-semibold text-bnw-400`,
        props.className
      )}
    />
  );
}

function PortfolioCardContent({ ...props }: ComponentProps<"div">) {
  return (
    <>
      <div aria-hidden data-desc="content-divider" className={cn(`px-2`)}>
        <div
          className={cn(
            `bg h-0.25 w-full bg-[linear-gradient(to_right,_transparent,_var(--color-bnw-500),_transparent)] opacity-40`
          )}
        />
      </div>

      <div
        data-slot={`portfolio-card-content`}
        {...props}
        className={cn(`text-bnw-400`, props.className)}
      >
        <ul className={cn(``)}>{props.children}</ul>
      </div>
    </>
  );
}

type PortfolioCardItemProps = { listStyleIcon?: ReactNode };

function PortfolioCardItem({
  listStyleIcon,
  ...props
}: PortfolioCardItemProps & ComponentProps<"li">) {
  return (
    <li
      data-slot={`portfolio-card-item`}
      {...props}
      className={cn(`flex items-center gap-2`, props.className)}
    >
      <span className={cn(`text-xs`)}>{listStyleIcon ?? <FaAsterisk />}</span>
      <span>{props.children}</span>
    </li>
  );
}

function PortfolioCardFooter({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-footer`}
      {...props}
      className={cn(`flex flex-wrap gap-3 text-base`, props.className)}
    />
  );
}

function PortfolioCardTag({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `relative isolate overflow-clip rounded-full border border-primary-800 px-4 py-2`,
        props.className
      )}
    >
      {props.children}
      <div
        className={cn(
          `absolute inset-0 -z-1 bg-gradient-to-b from-primary-700/30 to-transparent`
        )}
      />
    </div>
  );
}

type PortfolioCardImageProps = Pick<
  ComponentProps<typeof Image>,
  "src" | "alt"
>;

function PortfolioCardImage({
  alt,
  src,
  ...props
}: PortfolioCardImageProps & ComponentProps<"div">) {
  return (
    <div
      data-slot={`portfolio-card-image`}
      {...props}
      className={cn(`aspect-square size-full overflow-clip`, props.className)}
    >
      <div className={cn(`relative size-full`)}>
        <Image
          className={cn(`absolute h-full w-full object-cover`)}
          alt={alt}
          src={src}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
}

export type { PortfolioCardImageProps, PortfolioCardItemProps };

export {
  PortfolioCardRow,
  PortfolioCardImage,
  PortfolioCardFooter,
  PortfolioCardDescription,
  PortfolioCardTag,
  PortfolioCardContent,
  PortfolioCardItem,
  PortfolioCardHeader,
  PortfolioCardBadge,
  PortfolioCardHeading,
};
