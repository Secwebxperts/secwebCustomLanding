import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { Badge, BadgeIcon, BadgeText } from "@/ui/badge";
import { FaHeadset, FaAnchor, FaBaby } from "react-icons/fa6";

function BadgeDemo({
  icon,
  badgeText,
}: {
  icon: "FaHeadset" | "FaAnchor" | "FaBaby";
  badgeText: string;
}) {
  return (
    <Badge>
      <BadgeIcon>
        {icon === "FaHeadset" && <FaHeadset />}
        {icon === "FaAnchor" && <FaAnchor />}
        {icon === "FaBaby" && <FaBaby />}
      </BadgeIcon>
      <BadgeText>{badgeText}</BadgeText>
    </Badge>
  );
}

const meta: Meta<typeof BadgeDemo> & TypedMetaOptions = {
  component: BadgeDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    icon: "FaAnchor",
    badgeText: "24/7 Support",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["FaHeadset", "FaAnchor", "FaBaby"],
    },
  },
  render: ({ badgeText, icon }) => (
    <Badge>
      <BadgeIcon>
        {icon === "FaHeadset" && <FaHeadset />}
        {icon === "FaAnchor" && <FaAnchor />}
        {icon === "FaBaby" && <FaBaby />}
      </BadgeIcon>
      <BadgeText>{badgeText}</BadgeText>
    </Badge>
  ),
};

export default meta;

type Story = StoryObj<typeof BadgeDemo>;

export const BadgeStory: Story = {
  args: {},
};
