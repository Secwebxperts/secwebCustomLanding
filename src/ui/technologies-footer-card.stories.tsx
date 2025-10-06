import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  TechnologiesFooterCard,
  TechnologiesFooterCardHeading,
  TechnologiesFooterCardDetails,
} from "@/ui/technologies-footer-card";
import { FaAffiliatetheme, FaAirbnb, FaAlignRight } from "react-icons/fa6";

function TechnologiesFooterCardDemo({
  icon,
  cardHeding,
  cardDetails,
}: {
  icon: "FaAffiliatetheme" | "FaAirbnb" | "FaAlignRight";
  cardHeding: string;
  cardDetails: string;
}) {
  return (
    <TechnologiesFooterCard>
      <TechnologiesFooterCardHeading>
        {icon === "FaAffiliatetheme" && <FaAffiliatetheme />}
        {icon === "FaAirbnb" && <FaAirbnb />}
        {icon === "FaAlignRight" && <FaAlignRight />}
        <span>{cardHeding}</span>
      </TechnologiesFooterCardHeading>
      <TechnologiesFooterCardDetails>
        {cardDetails}
      </TechnologiesFooterCardDetails>
    </TechnologiesFooterCard>
  );
}

const meta: Meta<typeof TechnologiesFooterCardDemo> & TypedMetaOptions = {
  component: TechnologiesFooterCardDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: "FaAffiliatetheme",
    cardHeding: "Lorem ipsum",
    cardDetails:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["FaAffiliatetheme", "FaAirbnb", "FaAlignRight"],
    },
  },
  render: ({ cardDetails, cardHeding, icon }) => (
    <TechnologiesFooterCard>
      <TechnologiesFooterCardHeading>
        {icon === "FaAffiliatetheme" && <FaAffiliatetheme />}
        {icon === "FaAirbnb" && <FaAirbnb />}
        {icon === "FaAlignRight" && <FaAlignRight />}
        <span>{cardHeding}</span>
      </TechnologiesFooterCardHeading>
      <TechnologiesFooterCardDetails>
        {cardDetails}
      </TechnologiesFooterCardDetails>
    </TechnologiesFooterCard>
  ),
};

export default meta;

type Story = StoryObj<typeof TechnologiesFooterCardDemo>;

export const TechnologiesFooterCardDemoStory: Story = {
  args: {},
};
