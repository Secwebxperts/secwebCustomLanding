"use client";

import { motion, Variants, stagger } from "motion/react";
import { ComponentProps } from "react";

export function MotionDiv({ ...props }: ComponentProps<typeof motion.div>) {
  return <motion.div {...props} />;
}

export function MotionP({ ...props }: ComponentProps<typeof motion.p>) {
  return <motion.p {...props} />;
}

export function MotionSpan({ ...props }: ComponentProps<typeof motion.span>) {
  return <motion.span {...props} />;
}

export function MotionH1({ ...props }: ComponentProps<typeof motion.h1>) {
  return <motion.span {...props} />;
}

export function MotionH2({ ...props }: ComponentProps<typeof motion.h2>) {
  return <motion.span {...props} />;
}

export function MotionH3({ ...props }: ComponentProps<typeof motion.h3>) {
  return <motion.span {...props} />;
}

const createMotionComponent = motion.create;

export type { Variants };

export { stagger, createMotionComponent };
