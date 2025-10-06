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
