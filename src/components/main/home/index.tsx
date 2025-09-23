import { Badge, BadgeIcon, BadgeText } from "@/ui/badge";
import { cn } from "@/utils/cn";
import React, { ComponentProps } from "react";
import { GoCpu, GoPersonAdd, GoQuestion } from "react-icons/go";
import { RxPerson } from "react-icons/rx";
import { FaHeadphonesAlt } from "react-icons/fa";
import { FaFingerprint, FaLayerGroup } from "react-icons/fa6";
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
  ourProcess_data,
  portfolio_cardRowData,
  service_cardData,
  support247_informationData,
  support247_tooltipCardData,
  testimonial_data,
} from "@/components/main/home/data";
import TestimonialCard from "@/ui/testimonial-card";
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
  ServiceCard,
  ServiceCardHeader,
  ServiceCardIcon,
  ServiceCardHeading,
  ServiceCardSubHeading,
  ServiceCardContent,
  ServiceCardImage,
} from "@/ui/service-card";

export default function HomePageComp({ ...props }: ComponentProps<"div">) {
  return (
    <div {...props} className={cn(``, props.className)}>
      <AboutUs />

      <Features />

      <Services />

      <Portfolio />

      <Support247 />

      <OurProcess />

      <OurTeam />

      <Testimonials />

      <FAQ />

      {/* become a part of us */}
    </div>
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

        <h2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>
            Built on creativity, collaboration, and top excellence, SYNC is a
            dynamic team of industry experts committed to achieving exceptional
            great results...
          </span>
        </h2>

        <Button>Book An Appointment</Button>
      </div>

      <div className={cn(`pb-20`)}></div>
    </section>
  );
}

export function Features({ ...props }: ComponentProps<"section">) {
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
              <IoFlameOutline />
            </BadgeIcon>
            <BadgeText>Features</BadgeText>
          </Badge>
        </div>

        <h2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>Packed with Innovation.</span>
        </h2>

        <p
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          Nubien is packed with cutting-edge features designed to elevate your
          agency or portfolio.
        </p>
      </div>

      <div className={cn(`pb-20`)}></div>
    </section>
  );
}

export function Services({ ...props }: ComponentProps<"section">) {
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
              <IoSettingsOutline />
            </BadgeIcon>
            <BadgeText>Services</BadgeText>
          </Badge>
        </div>

        <h2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>AI-Powered Services for </span>
          <span className={cn(`text-bnw-500`)}>Future-Driven Businesses.</span>
        </h2>

        <p
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          Our cutting-edge AI solutions are designed to transform businesses,
          enhance efficiency, and drive innovation.
        </p>
      </div>

      <div className={cn(`px-10 py-20 md:px-20 lg:px-30`)}>
        <div
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
              <ServiceCard key={cardHeading}>
                <ServiceCardIcon>{cardIcon({})}</ServiceCardIcon>
                <ServiceCardHeader>
                  <ServiceCardHeading>{cardHeading}</ServiceCardHeading>
                  <ServiceCardSubHeading>
                    {cardSubheading}
                  </ServiceCardSubHeading>
                </ServiceCardHeader>
                <ServiceCardContent>{cardContent}</ServiceCardContent>
                <ServiceCardImage alt={`Card image`} src={cardImage} />
              </ServiceCard>
            );
          })}
        </div>
      </div>
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

        <h2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>Showcasing Your Best </span>
          <span className={cn(`text-bnw-500`)}>Work with Pure Precision.</span>
        </h2>

        <p
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          A portfolio is more than just projects—it&apos;s your story, vision,
          and expertise. Reboot ensures your work stands out with a rank.
        </p>

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

        <h2
          className={cn(
            `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
          )}
        >
          <span>Here When You </span>
          <span className={cn(`text-bnw-500`)}>Need Us Most Important.</span>
        </h2>

        <p
          className={cn(
            `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
          )}
        >
          Nubien comes with dedicated support to help you launch and maintain
          your site without friction.
        </p>

        <Button>Book An Appointment</Button>
      </div>

      <div className={cn(`w-full`)}>
        <div
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
             * -2, -1, 0, 1, 2 === for arr.length = 5 (odd)
             * -2.5, -1.5, -0.5, 0.5, 1.5, 2.5 === for arr.length = 6 (even)
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
                data-no={elementPositon}
                key={`${src.toString()}-${elementPositon}`}
                /**
                 * ammount to move (to left or -ve left) to squize
                 * cards together depending on index of the element
                 */
                style={{ left: `calc(-30px * ${movingAmmountMultiplier})` }}
                className={cn(
                  `relative hidden transition-all`,
                  {
                    // different ammount of rotation depending on index of the element
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
        </div>
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
            <Card className={cn(`max-w-65`)} key={infoTitle}>
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

          <h2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>Our Proven Process </span>
            <span className={cn(`text-bnw-500`)}>for AI-Driven Success</span>
          </h2>

          <p
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            With a focus on innovation and efficiency, we help you stay ahead in
            an ever-evolving digital landscape.
          </p>
        </div>
      </div>

      <div className={cn(`px-10 py-20 md:px-20 lg:px-30`)}>
        <div
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
        </div>
      </div>
    </section>
  );
}

export function OurTeam({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div>
        <div
          className={cn(
            `flex flex-col items-center justify-center gap-y-8 text-center`
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

          <h2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>Meet the Team Making </span>
            <span className={cn(`text-bnw-500`)}>Things Happen Every Day</span>
          </h2>

          <p
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            Our team is made up of passionate professionals who bring their
            expertise and creativity to every project.
          </p>
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ ...props }: ComponentProps<"section">) {
  return (
    <section {...props} className={cn(``, props.className)}>
      <div
        className={cn(
          `@container relative isolate flex flex-col gap-y-16 px-10 py-6 pb-20 md:px-20 lg:px-40`
        )}
      >
        <div
          className={cn(
            `flex flex-col items-center justify-center gap-y-8 text-center`
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

          <h2
            className={cn(
              `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
            )}
          >
            <span>What Our Clients Say </span>
            <span className={cn(`text-bnw-500`)}>
              About Reboot&apos;s Excellence
            </span>
          </h2>

          <p
            className={cn(
              `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
            )}
          >
            Hear from our happy clients! See how we&apos;ve helped them achieve
            their goals and create lasting impact.
          </p>

          <Button>Book An Appointment</Button>
        </div>

        <div
          className={cn(
            `m-auto grid max-w-max min-w-60 grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3`
          )}
        >
          {testimonial_data.map((testimonial) => {
            return <TestimonialCard key={testimonial.name} {...testimonial} />;
          })}
        </div>
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

            <h2
              className={cn(
                `text-3xl leading-10 *:block md:text-4xl md:leading-12 lg:text-5xl lg:leading-16`
              )}
            >
              <span>Frequently </span>
              <span className={cn(`text-bnw-500`)}>Asked Questions</span>
            </h2>

            <p
              className={cn(
                `max-w-100 font-medium text-bnw-500 lg:max-w-120 lg:text-lg`
              )}
            >
              Have questions? Our FAQ section has you covered with quick answers
              to the most common inquiries.
            </p>
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

// become a part of us

// become a part of us
