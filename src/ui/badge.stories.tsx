import type { Meta, StoryObj } from "@storybook/nextjs";
import { Badge, BadgeIcon, BadgeText } from "@/ui/badge";
import { FaHeadset } from "react-icons/fa6";

function BadgeDemo() {
  return (
    <Badge>
      <BadgeIcon>
        <FaHeadset />
      </BadgeIcon>
      <BadgeText>24/7 Support</BadgeText>
    </Badge>
  );
}

const meta: Meta<typeof Badge> = {
  component: BadgeDemo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BadgeStory: Story = {
  args: {},
};
