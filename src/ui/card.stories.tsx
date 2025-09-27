import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import Card from "@/ui/card";
import { cn } from "@/utils/cn";

const meta: Meta<typeof Card> & TypedMetaOptions = {
  component: () => <Card className="h-40 w-80" />,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (props) => <Card {...props} className={cn(`h-40 w-80`)}></Card>,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const CardStory: Story = {
  args: {},
};
