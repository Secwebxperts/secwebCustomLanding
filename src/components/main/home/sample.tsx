import { MotionDiv } from "@/lib/motion";
import { BadgeIcon } from "@/ui/badge";
import { cn } from "@/utils/cn";
import { ComponentProps } from "react";
import {
  AutoScrollCarousel,
  BlurToAppearP,
  StaggerH1,
} from "@/components/main/home/client-component-wrapper";
import { Button } from "@/ui/button";
import { AppearFromBelowDiv } from "@/lib/motion/appear-from-below";
import { CarouselContent, CarouselItem } from "@/ui/carousel";
import { heroSection_trustedBy } from "@/components/main/home/data";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Divider from "@/ui/divider";

export function HeroSection({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <style>{`.pulse{background-image:radial-gradient(circle at 50% 115%,transparent 45%,var(--color-primary-500) 50%,var(--color-primary-500) 50%,transparent 55%);animation:2s linear infinite alternate grow}@keyframes grow{0%{scale:1.5}100%{scale:1.7}}.slide{animation:1s ease-in-out infinite alternate slide}@keyframes slide{0%{left:0;transform:translateX(-50%)}100%{left:100%;transform:translateX(-50%)}}`}</style>
      <div className={cn(`relative isolate`)}>
        <div
          className={cn(
            `flex w-full flex-col gap-20 py-2 *:m-auto lg:flex-row`
          )}
        >
          <div
            className={cn(
              `flex max-w-100 flex-col items-center justify-center text-center max-md:pt-10 md:max-w-150 xl:max-w-200`
            )}
          >
            <MotionDiv
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className={cn(
                `mt-4 flex max-w-max items-center gap-4 rounded-full border border-white/10 bg-bnw-100/5 px-2 py-1.75`
              )}
            >
              <BadgeIcon className={cn(`py-0.5 text-sm`)}>2025</BadgeIcon>

              <span className={cn(`pr-3 font-light`)}>
                Next-Gen Design and Tech
              </span>
            </MotionDiv>

            <StaggerH1
              className={cn(
                `mt-15 max-w-120 font-dm-sans text-5xl leading-20 md:text-5xl md:leading-20`
              )}
              h1Content={["AI-Driven Success ", "Redefining the Future."]}
            />

            <BlurToAppearP
              className={cn(
                `mt-15 font-dm-sans text-xl text-balance text-white/50`
              )}
            >
              Creating latest solutions that redefine innovation. Stay ahead
              with AI-powered technology for the future.
            </BlurToAppearP>

            <Link href={`/#contact-form`} className={cn(`mt-15 font-dm-sans`)}>
              <Button
                className={cn(
                  `shadow-[0px_4px_20px_0px_var(--color-primary-700)]`
                )}
              >
                Book An Appointment
              </Button>
            </Link>

            <Divider className={cn(`m-auto mt-15 mb-4 h-0.5 max-w-100`)} />
          </div>
        </div>

        <div
          aria-hidden
          data-desc="section-bg"
          className={cn(
            `absolute top-0 left-0 -z-1 h-full w-full max-w-full overflow-clip`
          )}
        >
          <div
            className={cn(
              `pulse absolute top-0 left-1/2 h-full w-full -translate-x-1/2 scale-170`
            )}
          />
        </div>
      </div>

      <AppearFromBelowDiv className={cn(`my-16 px-10 md:px-20 lg:px-30`)}>
        <p className={cn(`pb-6 text-center text-xl`)}>
          Trusted By Top Innovative Teams
        </p>

        <AutoScrollCarousel opts={{ loop: true }}>
          <CarouselContent>
            {heroSection_trustedBy.map(({ companyName, icon }) => {
              return (
                <CarouselItem
                  key={companyName}
                  className={cn(`flex max-w-max items-center`)}
                >
                  <span className={cn(`flex items-center gap-3 pr-10`)}>
                    <span className={cn(`w-20`)}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={icon} alt={companyName} loading="lazy" />
                    </span>
                    <span className={cn(`text-xl`)}>{companyName}</span>
                  </span>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </AutoScrollCarousel>
      </AppearFromBelowDiv>

      <div
        className={cn(
          `grid grid-cols-1 gap-4 px-10 *:h-100 md:grid-cols-2 md:px-20 lg:px-30`
        )}
      >
        <div className={cn(`grid place-items-center`)}>
          <div className={cn(`relative isolate h-10 w-60`)}>
            <div
              className={cn(
                `absolute h-full w-full bg-gradient-to-r from-primary-700 via-primary-500 to-primary-700`
              )}
            />
            <div
              className={cn(
                `absolute left-0 aspect-square h-full -translate-x-1/2 rounded-full bg-gradient-to-b from-primary-300 to-primary-100`
              )}
            />

            <div
              className={cn(
                `slide absolute aspect-square h-full rounded-full bg-white`
              )}
            />
            <div
              className={cn(
                `absolute right-0 aspect-square h-full translate-x-1/2 rounded-full bg-gradient-to-b from-primary-300 to-primary-100`
              )}
            />
            <div
              className={cn(
                `absolute top-1/2 left-1/2 -z-1 h-40 w-80 -translate-1/2 scale-150 bg-[radial-gradient(ellipse_at_50%_50%,var(--color-primary-500)_0%,_transparent_70%)] opacity-80`
              )}
            />
          </div>
        </div>

        <div className={cn(`flex max-w-120 flex-col justify-center gap-4`)}>
          <h2 className={cn(`text-4xl font-semibold`)}>Easier & Smarter</h2>

          <p className={cn(`text-lg text-bnw-500`)}>
            Frustrated with a Website That Doesn&apos;t Work for You?
          </p>

          <div>
            <button
              className={cn(
                `flex max-w-max cursor-pointer items-center gap-3 rounded-full bg-white px-2 py-2`
              )}
            >
              <span className={cn(`pl-3 text-black`)}>Learn more</span>
              <span className={cn(`rounded-full bg-black p-2`)}>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
