"use client";

import {
  MotionDiv,
  Variants,
  createMotionComponent,
  stagger,
} from "@/lib/motion";
import { Carousel } from "@/ui/carousel";
import { TechnologiesCard } from "@/ui/technologies-card";
import { TechnologiesFooterCard } from "@/ui/technologies-footer-card";
import { ServiceCard } from "@/ui/service-card";
import { ServiceTags } from "@/ui/service-tags";
import TestimonialCard from "@/ui/testimonial-card";
import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import AutoScroll from "embla-carousel-auto-scroll";
import { motion } from "motion/react";

const cardWrapperVariants: Variants = {
  initial: {},
  whileInView: {
    transition: {
      delayChildren: stagger(0.3),
    },
  },
};

const cardItemVariants: Variants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  whileInView: {
    y: 0,
    opacity: 1,
  },
};

export function MotionCardWrapper({
  ...props
}: ComponentProps<typeof MotionDiv>) {
  return (
    <MotionDiv
      {...props}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, amount: 0.5 }}
      variants={cardWrapperVariants}
      className={cn(``, props.className)}
    />
  );
}

const CreatedMotionTechnologiesCard = createMotionComponent(TechnologiesCard);

export function MotionTechnologiesCard({
  ...props
}: ComponentProps<typeof CreatedMotionTechnologiesCard>) {
  return (
    <CreatedMotionTechnologiesCard
      {...props}
      variants={cardItemVariants}
      className={cn(``, props.className)}
    />
  );
}

const CreatedMotionTechnologiesFooterCard = createMotionComponent(
  TechnologiesFooterCard
);

export function MotionTechnologiesFooterCard({
  ...props
}: ComponentProps<typeof CreatedMotionTechnologiesFooterCard>) {
  return (
    <CreatedMotionTechnologiesFooterCard
      {...props}
      variants={cardItemVariants}
      className={cn(``, props.className)}
    />
  );
}

const CreatedMotionServiceCard = createMotionComponent(ServiceCard);

export function MotionServiceCard({
  ...props
}: ComponentProps<typeof CreatedMotionServiceCard>) {
  return (
    <CreatedMotionServiceCard
      {...props}
      variants={cardItemVariants}
      className={cn(``, props.className)}
    />
  );
}

const CreatedMotionServiceTags = createMotionComponent(ServiceTags);

export function MotionServiceTags({
  ...props
}: ComponentProps<typeof CreatedMotionServiceTags>) {
  return (
    <CreatedMotionServiceTags
      {...props}
      variants={cardItemVariants}
      className={cn(``, props.className)}
    />
  );
}

const CreatedMotionTestimonialCard = createMotionComponent(TestimonialCard);

export function MotionTestimonialCard({
  ...props
}: ComponentProps<typeof CreatedMotionTestimonialCard>) {
  return (
    <CreatedMotionTestimonialCard
      {...props}
      variants={cardItemVariants}
      className={cn(``, props.className)}
    />
  );
}

export function AutoScrollCarousel({
  ...props
}: ComponentProps<typeof Carousel>) {
  return (
    <Carousel
      {...props}
      plugins={[
        AutoScroll({
          speed: 0.6,
          startDelay: 0,
          stopOnInteraction: false,
          stopOnFocusIn: false,
          stopOnMouseEnter: false,
          playOnInit: true,
        }),
      ]}
      className={cn(``, props.className)}
    />
  );
}

//

const staggerH1Variants: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: stagger(0.1),
    },
  },
};

const staggerH1ContentVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export function StaggerH1({
  h1Content,
  ...props
}: { h1Content: string[] } & ComponentProps<typeof motion.h1>) {
  return (
    <motion.h1
      variants={staggerH1Variants}
      initial="initial"
      whileInView="animate"
      {...props}
      className={cn(``, props.className)}
    >
      {h1Content.map((c) => {
        return (
          <motion.span variants={staggerH1ContentVariants} key={c}>
            {c}
          </motion.span>
        );
      })}
    </motion.h1>
  );
}

const blurToAppearPVariants: Variants = {
  initial: {},
  animate: {
    transition: {
      delayChildren: stagger(0.01),
    },
  },
};

const blurToAppearPContentVariants: Variants = {
  initial: { opacity: 0, scale: 2, filter: "blur(6px)" },
  animate: {
    opacity: 1,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8 },
  },
};

export function BlurToAppearP({ ...props }: ComponentProps<typeof motion.p>) {
  if (typeof props.children === "string") {
    return (
      <motion.p
        {...props}
        variants={blurToAppearPVariants}
        initial="initial"
        whileInView="animate"
        className={cn(``, props.className)}
      >
        {props.children.split("").map((character, idx) => {
          return (
            <motion.span
              variants={blurToAppearPContentVariants}
              key={`${character}-${idx}`}
            >
              {character}
            </motion.span>
          );
        })}
      </motion.p>
    );
  }
}
