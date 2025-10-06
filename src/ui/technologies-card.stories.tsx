import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  TechnologiesCard,
  TechnologiesCardIcon,
  TechnologiesCardDescription,
  TechnologiesCardHeading,
  TechnologiesCardContent,
} from "@/ui/technologies-card";
import { FaAlgolia, Fa42Group, Fa500Px } from "react-icons/fa6";

function TechnologiesCardDemo({
  cardDescription,
  cardHeading,
  icon,
}: {
  icon: "FaAlgolia" | "Fa42Group" | "Fa500Px";
  cardHeading: string;
  cardDescription: string;
}) {
  return (
    <TechnologiesCard>
      <TechnologiesCardIcon>
        {icon === "Fa42Group" && <Fa42Group />}
        {icon === "Fa500Px" && <Fa500Px />}
        {icon === "FaAlgolia" && <FaAlgolia />}
      </TechnologiesCardIcon>
      <TechnologiesCardHeading>{cardHeading}</TechnologiesCardHeading>
      <TechnologiesCardDescription>
        {cardDescription}
      </TechnologiesCardDescription>
      <TechnologiesCardContent></TechnologiesCardContent>
    </TechnologiesCard>
  );
}

const meta: Meta<typeof TechnologiesCardDemo> & TypedMetaOptions = {
  component: TechnologiesCardDemo,
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
    <TechnologiesCard>
      <TechnologiesCardIcon>
        {icon === "Fa42Group" && <Fa42Group />}
        {icon === "Fa500Px" && <Fa500Px />}
        {icon === "FaAlgolia" && <FaAlgolia />}
      </TechnologiesCardIcon>
      <TechnologiesCardHeading>{cardHeading}</TechnologiesCardHeading>
      <TechnologiesCardDescription>
        {cardDescription}
      </TechnologiesCardDescription>
      <TechnologiesCardContent></TechnologiesCardContent>
    </TechnologiesCard>
  ),
};

export default meta;

type Story = StoryObj<typeof TechnologiesCardDemo>;

export const TechnologiesCardDemoStory: Story = {
  args: {},
};
