import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  FeatureCard,
  FeatureCardIcon,
  FeatureCardDescription,
  FeatureCardHeading,
  FeatureCardContent,
} from "@/ui/feature-card";
import { FaAlgolia, Fa42Group, Fa500Px } from "react-icons/fa6";

function FeatureCardDemo({
  cardDescription,
  cardHeading,
  icon,
}: {
  icon: "FaAlgolia" | "Fa42Group" | "Fa500Px";
  cardHeading: string;
  cardDescription: string;
}) {
  return (
    <FeatureCard>
      <FeatureCardIcon>
        {icon === "Fa42Group" && <Fa42Group />}
        {icon === "Fa500Px" && <Fa500Px />}
        {icon === "FaAlgolia" && <FaAlgolia />}
      </FeatureCardIcon>
      <FeatureCardHeading>{cardHeading}</FeatureCardHeading>
      <FeatureCardDescription>{cardDescription}</FeatureCardDescription>
      <FeatureCardContent></FeatureCardContent>
    </FeatureCard>
  );
}

const meta: Meta<typeof FeatureCardDemo> & TypedMetaOptions = {
  component: FeatureCardDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: "Fa42Group",
    cardDescription:
      "Corrupti, perferendis sapiente harum nesciunt incidunt reprehenderit a modi",
    cardHeading: "Lorem ipsum dolor",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["FaAlgolia", "Fa42Group", "Fa500Px"],
    },
  },
  render: ({ cardDescription, cardHeading, icon }) => (
    <FeatureCard>
      <FeatureCardIcon>
        {icon === "Fa42Group" && <Fa42Group />}
        {icon === "Fa500Px" && <Fa500Px />}
        {icon === "FaAlgolia" && <FaAlgolia />}
      </FeatureCardIcon>
      <FeatureCardHeading>{cardHeading}</FeatureCardHeading>
      <FeatureCardDescription>{cardDescription}</FeatureCardDescription>
      <FeatureCardContent></FeatureCardContent>
    </FeatureCard>
  ),
};

export default meta;

type Story = StoryObj<typeof FeatureCardDemo>;

export const FeatureCardDemoStory: Story = {
  args: {},
};
