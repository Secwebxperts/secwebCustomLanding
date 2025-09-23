import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  ServiceCard,
  ServiceCardHeader,
  ServiceCardIcon,
  ServiceCardHeading,
  ServiceCardSubHeading,
  ServiceCardContent,
  ServiceCardImage,
} from "@/ui/service-card";
import { HiArchiveBoxArrowDown } from "react-icons/hi2";

function ServiceCardDemo() {
  return (
    <ServiceCard>
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
  );
}

const meta: Meta<typeof ServiceCardDemo> = {
  component: ServiceCardDemo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ServiceCardDemo>;

export const ServiceCardDemoStory: Story = {
  args: {},
};
