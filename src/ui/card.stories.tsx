import type { Meta, StoryObj } from "@storybook/nextjs";
import Card from "@/ui/card";

const meta: Meta<typeof Card> = {
  component: () => <Card className="h-40 w-80" />,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardStory: Story = {
  args: {},
};
