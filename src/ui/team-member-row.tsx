import { cn } from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import React, { ComponentProps } from "react";
import { BadgeIcon } from "@/ui/badge";

function TeamMemberRow({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`team-member-row`}
      {...props}
      className={cn(
        `[--space:calc(var(--spacing)*2)]`,
        `gap-[calc(var(--space)*1)] rounded-[calc(var(--space)*4)] p-[calc(var(--space)*1)]`,
        `flex border border-bnw-800 bg-bnw-950`,
        props.className
      )}
    />
  );
}

type TeamMemberImageProps = Pick<ComponentProps<typeof Image>, "src" | "alt">;

function TeamMemberImage({
  alt,
  src,
  ...props
}: TeamMemberImageProps & ComponentProps<"div">) {
  return (
    <div
      data-slot={`team-member-image`}
      {...props}
      className={cn(
        `rounded-[calc(calc(var(--space)*4)-calc(var(--space)*1))]`,
        `relative h-20 w-20 overflow-clip`,
        props.className
      )}
    >
      <Image
        className={cn(`absolute h-full w-full object-cover`)}
        alt={alt}
        src={src}
        width={10}
        height={10}
      />
    </div>
  );
}

function TeamMemberDetails({ ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot={`team-member-details`}
      {...props}
      className={cn(
        `rounded-[calc(calc(var(--space)*4)-calc(var(--space)*1))] border border-primary-800 px-[calc(var(--space)*3)]`,
        `relative isolate flex grow items-center justify-between gap-10 overflow-clip`,
        props.className
      )}
    >
      {props.children}

      <div
        className={cn(
          `absolute inset-0 -z-1 bg-gradient-to-b from-primary-800 to-primary-950 to-15%`
        )}
      />
    </div>
  );
}

type MemberNameDesignaionProps = { name: string; designation: string };

function MemberNameDesignaion({
  designation,
  name,
  ...props
}: MemberNameDesignaionProps & ComponentProps<"div">) {
  return (
    <div {...props} className={cn(``, props.className)}>
      <h4
        data-slot={`member-name-designaion`}
        className={cn(`font-semibold`, props.className)}
      >
        {name}
      </h4>

      <p className={cn(`text-bnw-400`, props.className)}>{designation}</p>
    </div>
  );
}

function MemberSocialPlatformIcon({ ...props }: ComponentProps<typeof Link>) {
  return (
    <Link {...props} target="_blank" className={cn(``, props.className)}>
      <BadgeIcon className={cn(`rounded-sm`)}>{props.children}</BadgeIcon>
    </Link>
  );
}

export type { TeamMemberImageProps, MemberNameDesignaionProps };

export {
  TeamMemberImage,
  TeamMemberRow,
  TeamMemberDetails,
  MemberNameDesignaion,
  MemberSocialPlatformIcon,
};
