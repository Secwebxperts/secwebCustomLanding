import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  SupportCardWithTooltip,
  CardImage,
  TooltipContent,
} from "@/ui/support-card-with-tooltip";
import { ComponentProps } from "react";

function SupportCardWithTooltipDemo({
  isActive,
  children,
}: ComponentProps<typeof TooltipContent> &
  ComponentProps<typeof SupportCardWithTooltip>) {
  return (
    <SupportCardWithTooltip isActive={isActive}>
      <CardImage src={"/portrait-1.jpg"} alt="" />
      <TooltipContent className="bg-pink-500">{children}</TooltipContent>
    </SupportCardWithTooltip>
  );
}

const meta: Meta<typeof SupportCardWithTooltipDemo> = {
  component: SupportCardWithTooltipDemo,
  parameters: {
    layout: "centered",
  },
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SupportCardWithTooltipDemo>;

export const SupportCardWithTooltipDemoStory: Story = {
  args: {
    isActive: true,
    children: "Lorem ipsome dolor sit amet",
  },
};
