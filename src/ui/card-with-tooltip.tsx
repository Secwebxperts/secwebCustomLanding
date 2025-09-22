"use client";

import { MotionDiv, Variants } from "@/lib/motion";
import { cn } from "@/utils/cn";
import { useAnimate } from "motion/react";
import Image from "next/image";
import React, {
  ComponentProps,
  useCallback,
  createContext,
  useContext,
  RefObject,
  ReactNode,
} from "react";

type UseAnimateScope = ReturnType<typeof useAnimate>[0];

const CardWithTooltipContext = createContext<{
  animationScope: UseAnimateScope;
  isActive?: boolean;
} | null>(null);

const tooltipStateVariants: Variants = {
  unhovered: {
    scale: 0,
    top: 0,
    translateY: "0",
  },
  hovered: {
    scale: 1,
    top: "-3rem",
    translateY: "-100%",
  },
};

type CardWithTooltipProps = {
  isActive?: boolean;
};

function CardWithTooltip({
  isActive,
  ...props
}: CardWithTooltipProps & ComponentProps<"div">) {
  const [animationScope, animation] = useAnimate();

  const animationForHover = useCallback(() => {
    animation(animationScope.current, tooltipStateVariants.hovered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationForUnHover = useCallback(() => {
    animation(animationScope.current, tooltipStateVariants.unhovered);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CardWithTooltipContext value={{ isActive, animationScope }}>
      <div {...props} className={cn(`isolate h-50 w-50`, props.className)}>
        <MotionDiv
          onMouseEnter={animationForHover}
          onMouseLeave={animationForUnHover}
          className={cn(`relative h-full w-full`)}
        >
          {props.children}
        </MotionDiv>
      </div>
    </CardWithTooltipContext>
  );
}

type CardImageProps = Pick<ComponentProps<typeof Image>, "src" | "alt">;

function CardImage({
  alt,
  src,
  ...props
}: CardImageProps & ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn(
        `relative h-full w-full overflow-clip rounded-2xl ring-1 ring-bnw-900 ring-offset-4 ring-offset-black`
      )}
    >
      <Image
        className={cn(`absolute h-full w-full cursor-pointer object-cover`)}
        src={src}
        alt={alt}
        width={100}
        height={100}
      />
    </div>
  );
}

type TooltipContentProps = {
  tooltipBackground?: "pink" | "purple" | "indigo" | "blue";
};

function TooltipContent({
  tooltipBackground,
  ...props
}: TooltipContentProps & ComponentProps<typeof MotionDiv>) {
  const cardWithTooltipContextValue = useContext(CardWithTooltipContext);

  if (!cardWithTooltipContextValue) {
    throw new Error(
      '"TooltipContent" need to be wraped with "CardWithTooltip"'
    );
  }

  const { animationScope, isActive } = cardWithTooltipContextValue;

  return (
    <MotionDiv
      {...props}
      ref={animationScope as unknown as RefObject<HTMLDivElement>}
      initial={"unhovered"}
      animate={isActive && "hovered"}
      variants={tooltipStateVariants}
      className={cn(
        `[--tooltip-bg:var(--color-primary-500)]`,
        `absolute left-1/2 -z-1 w-full max-w-max -translate-x-1/2 rounded-xl bg-(--tooltip-bg) px-4 py-2`,
        {
          "[--tooltip-bg:var(--color-pink-500)]": tooltipBackground === "pink",
          "[--tooltip-bg:var(--color-purple-500)]":
            tooltipBackground === "purple",
          "[--tooltip-bg:var(--color-indigo-500)]":
            tooltipBackground === "indigo",
          "[--tooltip-bg:var(--color-blue-500)]": tooltipBackground === "blue",
        },
        props.className
      )}
    >
      {props.children as ReactNode}
      <div
        className={cn(
          `absolute -bottom-1 left-5 size-4 rotate-45 bg-(--tooltip-bg)`
        )}
      />
    </MotionDiv>
  );
}

export type { CardWithTooltipProps, TooltipContentProps, CardImageProps };
export { TooltipContent, CardImage, CardWithTooltip };
