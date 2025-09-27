import { Badge, BadgeIcon, BadgeText } from "@/ui/badge";
import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import { GoCpu, GoPersonAdd, GoQuestion } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { FaHeadphonesAlt, FaFingerprint, FaLayerGroup } from "react-icons/fa";
import { IoFlameOutline, IoSettingsOutline } from "react-icons/io5";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { Button } from "@/ui/button";
import {
  faq_data,
  features_circleingImages,
  features_footerCard,
  heroSection_trustedBy,
  ourProcess_data,
  ourTeam_memberData,
  portfolio_cardRowData,
  service_cardData,
  service_tagData,
  support247_informationData,
  support247_tooltipCardData,
  testimonial_data,
} from "@/components/main/home/data";
import {
  CardImage,
  SupportCardWithTooltip,
  TooltipContent,
} from "@/ui/support-card-with-tooltip";
import Card from "@/ui/card";
import {
  ProcessCard,
  ProcessCardIcon,
  ProcessCardDescription,
  ProcessCardHeading,
} from "@/ui/process-card";
import {
  PortfolioCardRow,
  PortfolioCardDescription,
  PortfolioCardHeader,
  PortfolioCardBadge,
  PortfolioCardHeading,
  PortfolioCardContent,
  PortfolioCardItem,
  PortfolioCardFooter,
  PortfolioCardTag,
  PortfolioCardImage,
} from "@/ui/portfolio-card";
import {
  ServiceCardHeader,
  ServiceCardIcon,
  ServiceCardHeading,
  ServiceCardSubHeading,
  ServiceCardContent,
  ServiceCardImage,
} from "@/ui/service-card";
import {
  CirclingImages,
  CirclingRow,
  CirclingRowImage,
} from "@/ui/circling-images";
import { TagText, TagIcon } from "@/ui/service-tags";
import {
  MemberNameDesignaion,
  MemberSocialPlatformIcon,
  TeamMemberDetails,
  TeamMemberImage,
  TeamMemberRow,
} from "@/ui/team-member-row";
import {
  FeatureFooterCardDetails,
  FeatureFooterCardHeading,
} from "@/ui/feature-footer-card";
import Divider from "@/ui/divider";
import {
  FeatureCardContent,
  FeatureCardDescription,
  FeatureCardHeading,
  FeatureCardIcon,
} from "@/ui/feature-card";
import { ContactUsForm } from "@/ui/contact-us-form";
import { WavyBackground } from "@/ui/wavy-background";
import { FaArrowRight } from "react-icons/fa6";
import { CarouselContent, CarouselItem } from "@/ui/carousel";
import {
  AppearFromBelowDiv,
  AppearFromBelowH2,
  AppearFromBelowP,
} from "@/lib/motion/appear-from-below";
import {
  MotionFeatureCard,
  MotionCardWrapper,
  MotionFeatureFooterCard,
  MotionServiceCard,
  MotionServiceTags,
  MotionTestimonialCard,
  AutoScrollCarousel,
} from "@/components/main/home/client-component-wrapper";

export default function HomePageComp({ ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn(``, props.className)}>
      <HeroSection />

      <AboutUs />

      <Features />

      <Services />

      <Portfolio />

      <Support247 />

      <OurProcess />

      <OurTeam />

      <Testimonials />

      <FAQ />

      <BecomePartOfUs />
    </div>
  );
}

export function HeroSection({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <style>{`.pulse{background-image:radial-gradient(circle at 50% 130%,transparent 40%,var(--color-primary-500) 45%,var(--color-primary-500) 50%,transparent 55%);animation:2s linear infinite alternate grow}@keyframes grow{0%{scale:1.7}100%{scale:1.8}}.slide{animation:1s ease-in-out infinite alternate slide}@keyframes slide{0%{left:0;transform:translateX(-50%)}100%{left:100%;transform:translateX(-50%)}}`}</style>
      <div className={cn(`relative isolate px-10 md:px-20 lg:px-30`)}>
        <div
          className={cn(
            `flex w-full flex-col gap-20 py-25 *:m-auto lg:flex-row`
          )}
        >
          <AppearFromBelowDiv
            className={cn(
              `flex max-w-100 flex-col items-center justify-center gap-y-10 text-center max-md:pt-10`
            )}
          >
            <div
              className={cn(
                `flex max-w-max items-center gap-4 rounded-full bg-bnw-100/5 px-2 py-1`
              )}
            >
              <BadgeIcon className={cn(`py-0.5 text-xs`)}>2025</BadgeIcon>
              <span className={cn(`pr-3`)}>Next-Gen AI Studio</span>
            </div>
            <h1 className={cn(`text-5xl leading-20`)}>
              AI-Driven Success Redefining the Future.
            </h1>
            <p className={cn(`text-lg`)}>
              Creating latest solutions that redefine innovation. Stay ahead
              with AI-powered technology for the future.
            </p>
          </AppearFromBelowDiv>
          <AppearFromBelowDiv
            className={cn(
              `my-8 w-full max-w-140 rounded-lg bg-bnw-950 p-8 pt-16`
            )}
          >
            <ContactUsForm />
          </AppearFromBelowDiv>
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
          ></div>
        </div>
      </div>

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
            This allows us to identify investment opportunities that maximize
            returns for our clients.
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

      <AppearFromBelowDiv className={cn(`my-16 px-10 md:px-20 lg:px-30`)}>
        <p className={cn(`pb-6 text-center text-xl`)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        <AutoScrollCarousel opts={{ loop: true }}>
          <CarouselContent>
            {heroSection_trustedBy.map(({ companyName, icon }) => {
              return (
                <CarouselItem key={companyName} className={cn(`max-w-max`)}>
                  <span className={cn(`flex items-center gap-3 pr-10`)}>
                    <span className={cn(`text-4xl`)}>{icon({})}</span>
                    <span className={cn(`text-xl`)}>{companyName}</span>
                  </span>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </AutoScrollCarousel>
      </AppearFromBelowDiv>
    </section>
  );
}

export function AboutUs({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div
        className={cn(
          `flex flex-col items-center justify-center gap-y-8 px-10 text-center md:px-20 lg:px-30`
        )}
      >
        <div>
          <Badge>
            <BadgeIcon>
              <FaFingerprint />
            </BadgeIcon>
            <BadgeText>About us</BadgeText>
          </Badge>
        </div>

        <AppearFromBelowH2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>
            Built on creativity, collaboration, and top excellence, SYNC is a
            dynamic team of industry experts committed to achieving exceptional
            great results...
          </span>
        </AppearFromBelowH2>

        <Button>Book An Appointment</Button>
      </div>

      <div className={cn(`pb-20`)}></div>
    </section>
  );
}

export function Features({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div className={cn(`relative`)}>
        <div>
          <CirclingImages>
            {features_circleingImages.map(({ imageAltText, imageSrc }, idx) => {
              const rotatingAmmount =
                (180 / features_circleingImages.length) * idx;
              return (
                <CirclingRow
                  key={imageSrc}
                  style={{
                    rotate: `${rotatingAmmount}deg`,
                  }}
                >
                  <CirclingRowImage alt={imageAltText} src={imageSrc} />
                </CirclingRow>
              );
            })}
          </CirclingImages>
        </div>

        <div
          className={cn(
            `flex w-full flex-col items-center justify-center gap-y-8 px-10 text-center sm:absolute sm:bottom-0 md:px-20 lg:top-40 lg:px-30`
          )}
        >
          <div>
            <Badge>
              <BadgeIcon>
                <IoFlameOutline />
              </BadgeIcon>
              <BadgeText>Features</BadgeText>
            </Badge>
          </div>

          <AppearFromBelowH2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>Packed with Innovation.</span>
          </AppearFromBelowH2>

          <AppearFromBelowP
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            Nubien is packed with cutting-edge features designed to elevate your
            agency or portfolio.
          </AppearFromBelowP>

          <Button>Book an Appointment</Button>
        </div>

        <div
          className={cn(
            `absolute inset-0 bg-[linear-gradient(45deg,_transparent_0%,_var(--color-primary-500)_25%,_transparent_50%,_var(--color-primary-500)_75%,_transparent_100%)] opacity-10`
          )}
        />
      </div>

      <Divider className={cn(`px-10 py-10 md:px-20 lg:px-30`)} />

      <div className={cn(`px-10 py-10 md:px-20 lg:px-30`)}>
        <MotionCardWrapper
          className={cn(`flex flex-wrap items-center justify-center gap-6`)}
        >
          <MotionFeatureCard>
            <FeatureCardIcon>
              <FaLayerGroup />
            </FeatureCardIcon>
            <FeatureCardHeading>Lorem ipsum dolor</FeatureCardHeading>
            <FeatureCardDescription>
              Corrupti, perferendis sapiente harum nesciunt incidunt
              reprehenderit a modi
            </FeatureCardDescription>
            <FeatureCardContent></FeatureCardContent>
          </MotionFeatureCard>

          <MotionFeatureCard>
            <FeatureCardIcon>
              <FaFingerprint />
            </FeatureCardIcon>
            <FeatureCardHeading>Lorem ipsum dolor</FeatureCardHeading>
            <FeatureCardDescription>
              Corrupti, perferendis sapiente harum nesciunt incidunt
              reprehenderit a modi
            </FeatureCardDescription>
            <FeatureCardContent></FeatureCardContent>
          </MotionFeatureCard>

          <MotionFeatureCard>
            <FeatureCardIcon>
              <FaHeadphonesAlt />
            </FeatureCardIcon>
            <FeatureCardHeading>Lorem ipsum dolor</FeatureCardHeading>
            <FeatureCardDescription>
              Corrupti, perferendis sapiente harum nesciunt incidunt
              reprehenderit a modi
            </FeatureCardDescription>
            <FeatureCardContent></FeatureCardContent>
          </MotionFeatureCard>
        </MotionCardWrapper>
      </div>

      <Divider className={cn(`px-10 py-10 md:px-20 lg:px-30`)} />

      <MotionCardWrapper
        className={cn(
          `mb-10 grid grid-cols-1 gap-4 px-10 md:grid-cols-2 md:px-20 lg:px-30 xl:grid-cols-4`
        )}
      >
        {features_footerCard.map(({ cardDetails, cardHeading, icon }) => {
          return (
            <MotionFeatureFooterCard key={cardHeading}>
              <FeatureFooterCardHeading>
                {icon({})}
                <span>{cardHeading}</span>
              </FeatureFooterCardHeading>
              <FeatureFooterCardDetails>{cardDetails}</FeatureFooterCardDetails>
            </MotionFeatureFooterCard>
          );
        })}
      </MotionCardWrapper>
    </section>
  );
}

export function Services({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(`relative isolate`, props.className)}>
      <div
        className={cn(
          `flex flex-col items-center justify-center gap-y-8 px-10 pt-40 text-center md:px-20 lg:px-30`
        )}
      >
        <div>
          <Badge>
            <BadgeIcon>
              <IoSettingsOutline />
            </BadgeIcon>
            <BadgeText>Services</BadgeText>
          </Badge>
        </div>

        <AppearFromBelowH2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>AI-Powered Services for </span>
          <span className={cn(`text-bnw-500`)}>Future-Driven Businesses.</span>
        </AppearFromBelowH2>

        <AppearFromBelowP
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          Our cutting-edge AI solutions are designed to transform businesses,
          enhance efficiency, and drive innovation.
        </AppearFromBelowP>
      </div>

      <div className={cn(`px-10 py-20 md:px-20 lg:px-30`)}>
        <MotionCardWrapper
          className={cn(`m-auto flex max-w-max flex-wrap justify-center gap-4`)}
        >
          {service_cardData.map((card) => {
            const {
              cardContent,
              cardHeading,
              cardIcon,
              cardImage,
              cardSubheading,
            } = card;
            return (
              <MotionServiceCard key={cardHeading}>
                <ServiceCardIcon>{cardIcon({})}</ServiceCardIcon>
                <ServiceCardHeader>
                  <ServiceCardHeading>{cardHeading}</ServiceCardHeading>
                  <ServiceCardSubHeading>
                    {cardSubheading}
                  </ServiceCardSubHeading>
                </ServiceCardHeader>
                <ServiceCardContent>{cardContent}</ServiceCardContent>
                <ServiceCardImage alt={`Card image`} src={cardImage} />
              </MotionServiceCard>
            );
          })}
        </MotionCardWrapper>
      </div>

      <MotionCardWrapper
        className={cn(
          `flex flex-wrap items-center justify-center gap-4 px-10 pb-20 md:px-20 lg:px-30`
        )}
      >
        {service_tagData.map(({ tagIcon, tagText }) => {
          return (
            <MotionServiceTags key={tagText}>
              <TagIcon>{tagIcon({})}</TagIcon>
              <TagText>{tagText}</TagText>
            </MotionServiceTags>
          );
        })}
      </MotionCardWrapper>

      <div
        aria-hidden
        data-desc="section-bg"
        className={cn(`absolute inset-0 -z-1 p-8`)}
      >
        <div className={cn(`h-full w-full rounded-4xl bg-bnw-950`)} />
        <div className={cn(`absolute top-0 left-0 h-100 w-full p-8`)}>
          <WavyBackground className={cn(`rounded-tl-4xl rounded-tr-4xl`)} />
        </div>
      </div>

      <Divider className={cn(`mt-40 mb-20`)} />
    </section>
  );
}

export function Portfolio({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div
        className={cn(
          `flex flex-col items-center justify-center gap-y-8 px-10 text-center md:px-20 lg:px-30`
        )}
      >
        <div>
          <Badge>
            <BadgeIcon>
              <FaLayerGroup />
            </BadgeIcon>
            <BadgeText>Portfolio</BadgeText>
          </Badge>
        </div>

        <AppearFromBelowH2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>Showcasing Your Best </span>
          <span className={cn(`text-bnw-500`)}>Work with Pure Precision.</span>
        </AppearFromBelowH2>

        <AppearFromBelowP
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          A portfolio is more than just projects—it&apos;s your story, vision,
          and expertise. Reboot ensures your work stands out with a rank.
        </AppearFromBelowP>

        <Button>Book A 15 min Call</Button>
      </div>

      <div className={cn(`py-20`)}>
        <div className={cn(`m-auto max-w-max space-y-3`)}>
          {portfolio_cardRowData.map((row) => {
            const { badgeText, heading, images, showcasingItem, tags } = row;
            return (
              <PortfolioCardRow key={heading}>
                <PortfolioCardDescription>
                  <PortfolioCardHeader>
                    <PortfolioCardBadge>{badgeText}</PortfolioCardBadge>
                    <PortfolioCardHeading>{heading}</PortfolioCardHeading>
                  </PortfolioCardHeader>
                  <PortfolioCardContent>
                    {showcasingItem.map((item) => {
                      return (
                        <PortfolioCardItem key={item}>{item}</PortfolioCardItem>
                      );
                    })}
                  </PortfolioCardContent>
                  <PortfolioCardFooter>
                    {tags.map((tag) => {
                      return (
                        <PortfolioCardTag key={tag}>{tag}</PortfolioCardTag>
                      );
                    })}
                  </PortfolioCardFooter>
                </PortfolioCardDescription>

                {images.map((image) => {
                  return (
                    <PortfolioCardImage key={image} alt="image" src={image} />
                  );
                })}
              </PortfolioCardRow>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Support247({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div
        className={cn(
          `flex flex-col items-center justify-center gap-y-8 px-10 text-center md:px-20 lg:px-30`
        )}
      >
        <div>
          <Badge>
            <BadgeIcon>
              <FaHeadphonesAlt />
            </BadgeIcon>
            <BadgeText>24/7 Support</BadgeText>
          </Badge>
        </div>

        <AppearFromBelowH2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>Here When You </span>
          <span className={cn(`text-bnw-500`)}>Need Us Most Important.</span>
        </AppearFromBelowH2>

        <AppearFromBelowP
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          Nubien comes with dedicated support to help you launch and maintain
          your site without friction.
        </AppearFromBelowP>

        <Button>Book An Appointment</Button>
      </div>

      <div className={cn(`w-full`)}>
        <AppearFromBelowDiv
          className={cn(`m-auto flex max-w-max flex-wrap justify-center pt-40`)}
        >
          {support247_tooltipCardData.map((carddata, idx, arr) => {
            const middleIndex = Math.floor(arr.length / 2) + 1;
            // used to decide how much the element should move and which side
            let movingAmmountMultiplier: number;
            let middle: number, middlePlus: number;
            const isArrLengthEven = arr.length % 2 === 0;

            // element position in the array as idx is "0" for first element
            // it causes problem during calculation
            const elementPositon = idx + 1;

            /**
             * THIS PORTION OF LOGIC IS LITTLE COMPLEX !!!
             * to squize the cards together we need to get exact ammount
             * of moving unit
             * what the below logic does is, it produce -----
             * -2, -1, 0, 1, 2 === for arr.length = 5 (when arr.length is odd)
             * -2.5, -1.5, -0.5, 0.5, 1.5, 2.5 === for arr.length = 6 (when arr.length is even)
             */

            // for even
            if (arr.length % 2 === 0) {
              movingAmmountMultiplier =
                elementPositon < middleIndex
                  ? elementPositon - 0.5 - (middleIndex - 1)
                  : elementPositon + 0.5 - middleIndex;
              middle = middleIndex - 1;
              middlePlus = middle + 1;
            } else {
              // for odd
              movingAmmountMultiplier =
                elementPositon < middleIndex
                  ? elementPositon - middleIndex
                  : elementPositon - middleIndex;
              middle = middleIndex;
              middlePlus = 0;
            }

            const { alt, src, tooltipContent } = carddata;
            return (
              // ! remove idx with proper key value
              <SupportCardWithTooltip
                data-element-position={elementPositon}
                key={`${src.toString()}-${elementPositon}`}
                /**
                 * ammount to move (to left or -ve left) to squize
                 * cards together depending on index of the element
                 */
                style={{ left: `calc(-30px * ${movingAmmountMultiplier})` }}
                className={cn(
                  `relative hidden transition-all`,
                  {
                    // different ammount of rotation depending on position of the element
                    "-rotate-6": elementPositon % 4 === 1,
                    "rotate-8": elementPositon % 4 === 2,
                    "rotate-5": elementPositon % 4 === 3,
                    "-rotate-9": elementPositon % 4 === 0,
                  },
                  // media querry class names for when arr.length is odd
                  {
                    "inline-block":
                      !isArrLengthEven && elementPositon === middle,
                    "md:inline-block":
                      !isArrLengthEven &&
                      elementPositon >= middle - 1 &&
                      elementPositon <= middle + 1,
                    "lg:inline-block":
                      !isArrLengthEven &&
                      elementPositon >= middle - 2 &&
                      elementPositon <= middle + 2,
                  },
                  // media querry class names for when arr.length is even
                  {
                    "inline-block":
                      isArrLengthEven &&
                      (elementPositon === middle ||
                        elementPositon === middlePlus),
                    "lg:inline-block":
                      isArrLengthEven &&
                      elementPositon >= middle - 1 &&
                      elementPositon <= middlePlus + 1,
                    "xl:inline-block":
                      isArrLengthEven &&
                      elementPositon >= middle - 2 &&
                      elementPositon <= middlePlus + 2,
                  }
                )}
              >
                <CardImage alt={alt} src={src} />
                <TooltipContent
                  className={cn(``, {
                    "bg-green-600": elementPositon % 4 === 1,
                    "bg-primary-600": elementPositon % 4 === 2,
                    "bg-amber-600": elementPositon % 4 === 3,
                    "bg-rose-600": elementPositon % 4 === 0,
                  })}
                >
                  {tooltipContent}
                </TooltipContent>
              </SupportCardWithTooltip>
            );
          })}
        </AppearFromBelowDiv>
      </div>

      <div
        data-desc="content-divider"
        className={cn(`mx-10 mt-20 h-0.25 bg-bnw-800 md:mx-20 lg:mx-40`)}
      />

      <div
        className={cn(
          `mt-10 mb-40 flex flex-wrap justify-center gap-6 px-10 md:px-20 lg:px-30`
        )}
      >
        {support247_informationData.map((info) => {
          const { icons, infoDescription, infoTitle } = info;
          return (
            <Card
              data-slot={`information-card`}
              className={cn(`max-w-65`)}
              key={infoTitle}
            >
              <div className={cn(`flex items-center gap-3`)}>
                <BadgeIcon>{icons({})}</BadgeIcon>

                <h3 className={cn(`text-xl font-semibold`)}>{infoTitle}</h3>
              </div>
              <p className={cn(`text-lg font-medium text-bnw-500`)}>
                {infoDescription}
              </p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

export function OurProcess({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div className={cn(`px-10 md:px-20 lg:px-30`)}>
        <div
          className={cn(
            `flex flex-col items-center justify-center gap-y-8 text-center`
          )}
        >
          <div>
            <Badge>
              <BadgeIcon>
                <GoCpu />
              </BadgeIcon>
              <BadgeText>Our Process</BadgeText>
            </Badge>
          </div>

          <AppearFromBelowH2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>Our Proven Process </span>
            <span className={cn(`text-bnw-500`)}>for AI-Driven Success</span>
          </AppearFromBelowH2>

          <AppearFromBelowP
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            With a focus on innovation and efficiency, we help you stay ahead in
            an ever-evolving digital landscape.
          </AppearFromBelowP>
        </div>
      </div>

      <div className={cn(`px-10 pt-20 pb-10 md:px-20 lg:px-30`)}>
        <AppearFromBelowDiv
          className={cn(
            `m-auto grid max-w-max grid-cols-1 gap-3 rounded-[calc(var(--spacing)*8)] border border-bnw-800 bg-bnw-950 p-3 xl:grid-cols-3`
          )}
        >
          {ourProcess_data.map((process) => {
            const { description, heading, icons } = process;
            return (
              <ProcessCard key={heading}>
                <ProcessCardIcon>{icons({})}</ProcessCardIcon>
                <ProcessCardHeading>{heading}</ProcessCardHeading>
                <ProcessCardDescription>{description}</ProcessCardDescription>
              </ProcessCard>
            );
          })}
        </AppearFromBelowDiv>
      </div>
    </section>
  );
}

export function OurTeam({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div className={cn(`relative isolate`)}>
        <div
          className={cn(
            `flex flex-col items-center justify-center gap-y-8 pt-30 text-center`
          )}
        >
          <div>
            <Badge>
              <BadgeIcon>
                <GoPersonAdd />
              </BadgeIcon>
              <BadgeText>Our Team</BadgeText>
            </Badge>
          </div>

          <AppearFromBelowH2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>Meet the Team Making </span>
            <span className={cn(`text-bnw-500`)}>Things Happen Every Day</span>
          </AppearFromBelowH2>

          <AppearFromBelowP
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            Our team is made up of passionate professionals who bring their
            expertise and creativity to every project.
          </AppearFromBelowP>
        </div>

        <div
          className={cn(
            `m-auto max-w-280 space-y-4 px-10 pt-20 pb-30 md:px-20 lg:px-30`
          )}
        >
          {ourTeam_memberData.map(
            ({
              designation,
              icon,
              imageAlt,
              imageSrc,
              name,
              socialPlatformLink,
            }) => {
              return (
                <TeamMemberRow key={name}>
                  <TeamMemberImage alt={imageAlt} src={imageSrc} />
                  <TeamMemberDetails>
                    <MemberNameDesignaion
                      designation={designation}
                      name={name}
                    />
                    <MemberSocialPlatformIcon href={socialPlatformLink}>
                      {icon({})}
                    </MemberSocialPlatformIcon>
                  </TeamMemberDetails>
                </TeamMemberRow>
              );
            }
          )}
        </div>

        <div
          aria-hidden
          className={cn(
            `absolute inset-0 -z-1 bg-[linear-gradient(-45deg,_transparent_0%,_var(--color-primary-500)_12.5%,_transparent_25%,_var(--color-primary-500)_37.5%,_transparent_50%,_var(--color-primary-500)_62.5%,_transparent_75%,_var(--color-primary-500)_87.5%,_transparent_100%)] opacity-10`
          )}
        />
      </div>
    </section>
  );
}

export function Testimonials({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(` `, props.className)}>
      <div
        className={cn(
          `@container relative isolate flex flex-col gap-y-16 px-10 pt-24 pb-20 md:px-20 lg:px-40`
        )}
      >
        <div
          className={cn(
            `relative isolate flex flex-col items-center justify-center gap-y-8 text-center`
          )}
        >
          <div>
            <Badge>
              <BadgeIcon>
                <RxPerson />
              </BadgeIcon>
              <BadgeText>Testimonial</BadgeText>
            </Badge>
          </div>

          <AppearFromBelowH2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>What Our Clients Say </span>
            <span className={cn(`text-bnw-500`)}>
              About Reboot&apos;s Excellence
            </span>
          </AppearFromBelowH2>

          <AppearFromBelowP
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            Hear from our happy clients! See how we&apos;ve helped them achieve
            their goals and create lasting impact.
          </AppearFromBelowP>

          <Button>Book An Appointment</Button>
        </div>

        <MotionCardWrapper
          className={cn(
            `m-auto grid max-w-max min-w-60 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3`
          )}
        >
          {testimonial_data.map((testimonial) => {
            return (
              <MotionTestimonialCard key={testimonial.name} {...testimonial} />
            );
          })}
        </MotionCardWrapper>

        <WavyBackground
          className={cn(
            `absolute top-0 left-0 -z-1 h-64 rounded-tl-3xl rounded-tr-3xl`
          )}
        />
      </div>
    </section>
  );
}

export function FAQ({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div
        className={cn(
          `@container relative isolate px-10 py-6 md:px-20 lg:px-40`
        )}
      >
        <div className={cn(`grid grid-cols-1 gap-4 gap-y-16 @4xl:grid-cols-3`)}>
          <div className={cn(`flex flex-col gap-y-8`)}>
            <div>
              <Badge>
                <BadgeIcon>
                  <GoQuestion />
                </BadgeIcon>
                <BadgeText>FAQ</BadgeText>
              </Badge>
            </div>

            <AppearFromBelowH2
              className={cn(
                `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
              )}
            >
              <span>Frequently </span>
              <span className={cn(`text-bnw-500`)}>Asked Questions</span>
            </AppearFromBelowH2>

            <AppearFromBelowP
              className={cn(
                `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
              )}
            >
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </AppearFromBelowP>
          </div>

          <div className={cn(`@4xl:col-span-2`)}>
            <Accordion
              type="multiple"
              className={cn(`m-auto max-w-170 @4xl:m-0 @4xl:ml-auto`)}
            >
              {faq_data.map((faq) => {
                return (
                  <AccordionItem key={faq.question} value={faq.question}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      {faq.answer.map((paragraph) => {
                        return <p key={paragraph}>{paragraph}</p>;
                      })}
                    </AccordionContent>
                  </AccordionItem>
                );
              })}
            </Accordion>
          </div>
        </div>

        <div
          aria-hidden
          data-desc="faq-bg"
          className={cn(`absolute inset-0 -z-1 opacity-20`)}
        >
          <div
            className={cn(
              `absolute h-full w-full bg-[linear-gradient(45deg,_transparent_0%,var(--color-primary-500)_30%,transparent_55%,var(--color-primary-500)_75%,transparent_100%)]`
            )}
          />
          <div
            className={cn(
              `absolute bottom-0 h-80 w-full bg-gradient-to-b from-transparent to-black`
            )}
          />
        </div>
      </div>
    </section>
  );
}

export function BecomePartOfUs({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(`@container w-full`, props.className)}>
      <div
        className={cn(
          `flex flex-col items-center justify-between gap-x-4 gap-y-10 px-10 py-26 md:px-20 lg:px-30 @6xl:flex-row`
        )}
      >
        <div
          className={cn(
            `relative isolate flex flex-col items-center justify-center gap-y-8 overflow-clip rounded-3xl border border-bnw-800 px-8 py-10 text-center`
          )}
        >
          <div>
            <Badge>
              <BadgeIcon>
                <GoQuestion />
              </BadgeIcon>
              <BadgeText>Become part of us</BadgeText>
            </Badge>
          </div>

          <h2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>Ready to Elevate Your Brand </span>
            <span className={cn(`text-bnw-500`)}>
              with Next-Gen Innovation?
            </span>
          </h2>

          <p
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            Ready to take the next step? Join us now and start transforming your
            vision into reality with expert support.
          </p>

          <div
            aria-hidden
            data-desc="section-bg"
            className={cn(`absolute top-0 left-0 -z-1 h-60 w-full`)}
          >
            <WavyBackground />
          </div>
        </div>

        <ContactUsForm className={cn(`max-w-140`)} />
      </div>
    </section>
  );
}
