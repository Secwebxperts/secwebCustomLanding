import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { ComponentProps } from "react";
import { FaStar } from "react-icons/fa6";
import { TfiTwitter } from "react-icons/tfi";
import { CiLinkedin } from "react-icons/ci";
import Card from "@/ui/card";

export type TestimonialCardProps = {
  icon: "twitter" | "linkedin";
  name: string;
  description: string;
  designation: string;
  organization: string;
} & Pick<ComponentProps<typeof Image>, "src" | "alt">;

export default function TestimonialCard({
  description,
  designation,
  name,
  organization,
  icon,
  src,
  alt,
  ...props
}: TestimonialCardProps & ComponentProps<typeof Card>) {
  return (
    <Card
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

      <div className={cn(`flex justify-between`)}>
        <div className={cn(`relative size-16`)}>
          <Image
            className={cn(`absolute h-full w-full`)}
            src={src}
            alt={alt}
            width={50}
            height={50}
          />
        </div>
        <div
          className={cn(
            `text-2xl opacity-50 transition-all duration-1000 group-hover:opacity-100`
          )}
        >
          {icon === "linkedin" && <CiLinkedin />}
          {icon === "twitter" && <TfiTwitter />}
        </div>
      </div>

      <div className={cn(`flex gap-1`)}>
        <FaStar key={1} />
        <FaStar key={2} />
        <FaStar key={3} />
        <FaStar key={4} />
        <FaStar key={5} />
      </div>

      <div className={cn(`max-w-65 opacity-50`)}>&quot;{description}&quot;</div>

      <div
        aria-hidden
        data-desc="divider"
        className={cn(
          `h-0.25 bg-gradient-to-r from-transparent via-bnw-500 to-transparent opacity-50`
        )}
      />

      <div>
        <div className={cn(`flex items-center gap-2 font-semibold`)}>
          <span>{name}</span>
          <span className={cn(`size-1 rounded-full bg-white`)} />
          <span>{designation}</span>
        </div>
        <div className={cn(`opacity-50`)}>{organization}</div>
      </div>
    </Card>
  );
}
