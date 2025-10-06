import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";

function TechnologiesFooterCard({ ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn(``, props.className)}>
      {props.children}
    </div>
  );
}

function TechnologiesFooterCardHeading({ ...props }: ComponentProps<"h3">) {
  return (
    <h3 className={cn(`flex flex-wrap items-center gap-2 text-xl font-medium`)}>
      {props.children}
    </h3>
  );
}

function TechnologiesFooterCardDetails({ ...props }: ComponentProps<"p">) {
  return (
    <p
      {...props}
      className={cn(`max-w-80 pt-4 text-bnw-600`, props.className)}
    />
  );
}

export {
  TechnologiesFooterCard,
  TechnologiesFooterCardHeading,
  TechnologiesFooterCardDetails,
};
