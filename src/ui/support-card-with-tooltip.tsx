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

const SupportCardWithTooltipContext = createContext<{
  animationScope: UseAnimateScope;
  isActive?: boolean;
} | null>(null);

function useTooltip() {
  const supportCardWithTooltipContextValue = useContext(
    SupportCardWithTooltipContext
  );

  if (!supportCardWithTooltipContextValue) {
    throw new Error(
      '"TooltipContent" need to be wraped with "SupportCardWithTooltip"'
    );
  }

  return supportCardWithTooltipContextValue;
}

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

type SupportCardWithTooltipProps = {
  isActive?: boolean;
};

function SupportCardWithTooltip({
  isActive,
  ...props
}: SupportCardWithTooltipProps & ComponentProps<"div">) {
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
    <SupportCardWithTooltipContext value={{ isActive, animationScope }}>
      <div
        data-slot={`support-card-with-tooltip`}
        {...props}
        className={cn(`isolate h-50 w-50`, props.className)}
      >
        <MotionDiv
          onMouseEnter={animationForHover}
          onMouseLeave={animationForUnHover}
          className={cn(`relative h-full w-full`)}
        >
          {props.children}
        </MotionDiv>
      </div>
    </SupportCardWithTooltipContext>
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
      data-slot={`card-image`}
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

function TooltipContent({ ...props }: ComponentProps<typeof MotionDiv>) {
  const supportCardWithTooltipContextValue = useTooltip();

  const { animationScope, isActive } = supportCardWithTooltipContextValue;

  return (
    <MotionDiv
      data-slot={`tooltip-content`}
      {...props}
      ref={animationScope as unknown as RefObject<HTMLDivElement>}
      initial={"unhovered"}
      animate={isActive && "hovered"}
      variants={tooltipStateVariants}
      className={cn(
        `absolute left-1/2 isolate -z-1 w-full max-w-max -translate-x-1/2 rounded-xl bg-primary-500 px-4 py-2`,
        props.className
      )}
    >
      <div className={cn(`line-clamp-3`)}>{props.children as ReactNode}</div>
      <div
        className={cn(
          `absolute -bottom-1 left-5 -z-1 size-4 rotate-45 bg-inherit`
        )}
      />
    </MotionDiv>
  );
}

export type { SupportCardWithTooltipProps, CardImageProps };
export { TooltipContent, CardImage, SupportCardWithTooltip };
