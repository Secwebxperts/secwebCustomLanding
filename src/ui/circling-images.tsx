import { cn } from "@/utils/cn";
import Image from "next/image";
import React, { ComponentProps } from "react";

function CirclingImages({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `relative aspect-2/1 w-full overflow-clip px-10 md:px-20 lg:px-30`,
        props.className
      )}
    >
      <div className={cn(`relative h-full w-full`)}>{props.children}</div>

      <div
        className={cn(
          `absolute bottom-0 left-0 h-20 w-full bg-[linear-gradient(to_top,_black_0%,transparent_50%)] md:h-40 lg:h-80`
        )}
      />
    </div>
  );
}

function CirclingRow({ ...props }: ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `absolute bottom-0 flex w-full animate-[spin_30000ms_linear_infinite] justify-between`,
        props.className
      )}
    >
      <div
        className={cn(
          `relative h-14 w-14 -rotate-90 overflow-clip rounded-md ring-1 ring-bnw-800 ring-offset-2 ring-offset-black md:h-18 md:w-18 md:rounded-lg lg:h-22 lg:w-22 lg:rounded-xl`
        )}
      >
        {props.children}
      </div>
      <div
        className={cn(
          `relative h-14 w-14 rotate-90 overflow-clip rounded-md ring-1 ring-bnw-800 ring-offset-2 ring-offset-black md:h-18 md:w-18 md:rounded-lg lg:h-22 lg:w-22 lg:rounded-xl`
        )}
      >
        {props.children}
      </div>
    </div>
  );
}

function CirclingRowImage({ ...props }: ComponentProps<typeof Image>) {
  return (
    <Image
      {...props}
      className={cn(`absolute h-full w-full object-cover`, props.className)}
      src={props.src}
      alt={props.alt}
      width={50}
      height={50}
    />
  );
}

export { CirclingImages, CirclingRow, CirclingRowImage };
