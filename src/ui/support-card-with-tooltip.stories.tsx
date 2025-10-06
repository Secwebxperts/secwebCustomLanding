import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  SupportCardWithTooltip,
  CardImage,
  TooltipContent,
} from "@/ui/support-card-with-tooltip";

function SupportCardWithTooltipDemo({
  isActive,
  tooltipText,
}: {
  isActive: boolean;
  tooltipText: string;
}) {
  return (
    <SupportCardWithTooltip isActive={isActive}>
      <CardImage src={"/portrait-1.jpg"} alt="some alt text" />
      <TooltipContent className="bg-pink-500">{tooltipText}</TooltipContent>
    </SupportCardWithTooltip>
  );
}

const meta: Meta<typeof SupportCardWithTooltipDemo> & TypedMetaOptions = {
  component: SupportCardWithTooltipDemo,
  parameters: {
    layout: "centered",
  },
  args: { tooltipText: "Lorem Ipsum color sit amet" },
  tags: ["autodocs"],
  render: ({ isActive, tooltipText }) => (
    <SupportCardWithTooltip isActive={isActive}>
      <CardImage src={"/portrait-1.jpg"} alt="some alt text" />
      <TooltipContent className="bg-pink-500">{tooltipText}</TooltipContent>
    </SupportCardWithTooltip>
  ),
  decorators: (Story) => (
    <div className="pt-40">
      <Story />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof SupportCardWithTooltipDemo>;

export const SupportCardWithActiveTooltipDemoStory: Story = {
  args: {
    isActive: true,
  },
};

export const SupportCardWithInActiveTooltipDemoStory: Story = {
  args: {
    isActive: false,
  },
};
