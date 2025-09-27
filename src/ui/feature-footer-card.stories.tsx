import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  FeatureFooterCard,
  FeatureFooterCardHeading,
  FeatureFooterCardDetails,
} from "@/ui/feature-footer-card";
import { FaAffiliatetheme, FaAirbnb, FaAlignRight } from "react-icons/fa6";

function FeatureFooterCardDemo({
  icon,
  cardHeding,
  cardDetails,
}: {
  icon: "FaAffiliatetheme" | "FaAirbnb" | "FaAlignRight";
  cardHeding: string;
  cardDetails: string;
}) {
  return (
    <FeatureFooterCard>
      <FeatureFooterCardHeading>
        {icon === "FaAffiliatetheme" && <FaAffiliatetheme />}
        {icon === "FaAirbnb" && <FaAirbnb />}
        {icon === "FaAlignRight" && <FaAlignRight />}
        <span>{cardHeding}</span>
      </FeatureFooterCardHeading>
      <FeatureFooterCardDetails>{cardDetails}</FeatureFooterCardDetails>
    </FeatureFooterCard>
  );
}

const meta: Meta<typeof FeatureFooterCardDemo> & TypedMetaOptions = {
  component: FeatureFooterCardDemo,
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
    <FeatureFooterCard>
      <FeatureFooterCardHeading>
        {icon === "FaAffiliatetheme" && <FaAffiliatetheme />}
        {icon === "FaAirbnb" && <FaAirbnb />}
        {icon === "FaAlignRight" && <FaAlignRight />}
        <span>{cardHeding}</span>
      </FeatureFooterCardHeading>
      <FeatureFooterCardDetails>{cardDetails}</FeatureFooterCardDetails>
    </FeatureFooterCard>
  ),
};

export default meta;

type Story = StoryObj<typeof FeatureFooterCardDemo>;

export const FeatureFooterCardDemoStory: Story = {
  args: {},
};
