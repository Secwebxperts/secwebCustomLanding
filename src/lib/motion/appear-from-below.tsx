"use client";

import React, { ComponentProps } from "react";
import { MotionDiv, MotionH2, MotionP, MotionSpan } from "@/lib/motion";
import { cn } from "@/utils/cn";

export function AppearFromBelowDiv({
  ...props
}: ComponentProps<typeof MotionDiv>) {
  return (
    <MotionDiv
      {...props}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className={cn(``, props.className)}
    />
  );
}

export function AppearFromBelowSpan({
  ...props
}: ComponentProps<typeof MotionSpan>) {
  return (
    <MotionSpan
      {...props}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className={cn(``, props.className)}
    />
  );
}

export function AppearFromBelowH2({
  ...props
}: ComponentProps<typeof MotionH2>) {
  return (
    <MotionH2
      {...props}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className={cn(``, props.className)}
    />
  );
}

export function AppearFromBelowP({ ...props }: ComponentProps<typeof MotionP>) {
  return (
    <MotionP
      {...props}
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      viewport={{ once: true }}
      className={cn(``, props.className)}
    />
  );
}
