import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  ServiceCard,
  ServiceCardHeader,
  ServiceCardIcon,
  ServiceCardHeading,
  ServiceCardSubHeading,
  ServiceCardContent,
  ServiceCardImage,
} from "@/ui/service-card";
import {
  HiArchiveBoxArrowDown,
  HiAcademicCap,
  HiAdjustmentsHorizontal,
} from "react-icons/hi2";

function ServiceCardDemo({
  icon,
  serviceCardContent,
  serviceCardHeading,
  serviceCardSubHeading,
  serviceCardImageAlt,
  serviceCardImageSrc,
}: {
  icon: "HiArchiveBoxArrowDown" | "HiAcademicCap" | "HiAdjustmentsHorizontal";
  serviceCardHeading: string;
  serviceCardSubHeading: string;
  serviceCardContent: string;
  serviceCardImageSrc: string;
  serviceCardImageAlt: string;
}) {
  return (
    <ServiceCard>
      <ServiceCardIcon>
        {icon === "HiArchiveBoxArrowDown" && <HiArchiveBoxArrowDown />}
        {icon === "HiAcademicCap" && <HiAcademicCap />}
        {icon === "HiAdjustmentsHorizontal" && <HiAdjustmentsHorizontal />}
      </ServiceCardIcon>
      <ServiceCardHeader>
        <ServiceCardHeading>{serviceCardHeading}</ServiceCardHeading>
        <ServiceCardSubHeading>{serviceCardSubHeading}</ServiceCardSubHeading>
      </ServiceCardHeader>
      <ServiceCardContent>{serviceCardContent}</ServiceCardContent>
      <ServiceCardImage alt={serviceCardImageAlt} src={serviceCardImageSrc} />
    </ServiceCard>
  );
}

const meta: Meta<typeof ServiceCardDemo> & TypedMetaOptions = {
  component: ServiceCardDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: "HiAcademicCap",
    serviceCardContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, culpa.",
    serviceCardHeading: "Lorem, ipsum.",
    serviceCardSubHeading: "Lorem ipsum dolor sit.",
    serviceCardImageAlt: "some alt text",
    serviceCardImageSrc: "/portrait-1.jpg",
  },
  argTypes: {
    icon: {
      options: [
        "HiArchiveBoxArrowDown",
        "HiAcademicCap",
        "HiAdjustmentsHorizontal",
      ],
      control: "select",
    },
    serviceCardImageSrc: {
      control: "select",
      options: [
        "/portrait-1.jpg",
        "/portrait-2.jpg",
        "/portrait-3.jpg",
        "/portrait-4.jpg",
      ],
    },
  },
  render: ({
    icon,
    serviceCardContent,
    serviceCardHeading,
    serviceCardSubHeading,
    serviceCardImageAlt,
    serviceCardImageSrc,
  }) => (
    <ServiceCard>
      <ServiceCardIcon>
        {icon === "HiArchiveBoxArrowDown" && <HiArchiveBoxArrowDown />}
        {icon === "HiAcademicCap" && <HiAcademicCap />}
        {icon === "HiAdjustmentsHorizontal" && <HiAdjustmentsHorizontal />}
      </ServiceCardIcon>
      <ServiceCardHeader>
        <ServiceCardHeading>{serviceCardHeading}</ServiceCardHeading>
        <ServiceCardSubHeading>{serviceCardSubHeading}</ServiceCardSubHeading>
      </ServiceCardHeader>
      <ServiceCardContent>{serviceCardContent}</ServiceCardContent>
      <ServiceCardImage alt={serviceCardImageAlt} src={serviceCardImageSrc} />
    </ServiceCard>
  ),
};

export default meta;

type Story = StoryObj<typeof ServiceCardDemo>;

export const ServiceCardDemoStory: Story = {
  args: {},
};

/**
 *     <ServiceCard>
      <ServiceCardIcon>
        <HiArchiveBoxArrowDown />
      </ServiceCardIcon>
      <ServiceCardHeader>
        <ServiceCardHeading>Lorem, ipsum.</ServiceCardHeading>
        <ServiceCardSubHeading>Lorem ipsum dolor sit.</ServiceCardSubHeading>
      </ServiceCardHeader>
      <ServiceCardContent>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, culpa.
      </ServiceCardContent>
      <ServiceCardImage alt="some" src={`/portrait-1.jpg`} />
    </ServiceCard>
 */
