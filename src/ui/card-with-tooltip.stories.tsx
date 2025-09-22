import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  CardWithTooltip,
  CardImage,
  TooltipContent,
} from "@/ui/card-with-tooltip";
import { ComponentProps } from "react";

function CardWithTooltipDemo({
  isActive,
  tooltipBackground,
  children,
}: ComponentProps<typeof TooltipContent> &
  ComponentProps<typeof CardWithTooltip>) {
  return (
    <CardWithTooltip isActive={isActive}>
      <CardImage src={"/portrait.jpg"} alt="" />
      <TooltipContent tooltipBackground={tooltipBackground}>
        {children}
      </TooltipContent>
    </CardWithTooltip>
  );
}

const meta: Meta<typeof CardWithTooltipDemo> = {
  component: CardWithTooltipDemo,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    tooltipBackground: {
      control: "select",
      options: ["blue", "indigo", "purple", "pink"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof CardWithTooltipDemo>;

export const CardWithTooltipDemoStory: Story = {
  args: {
    isActive: true,
    tooltipBackground: "pink",
    children: "Lorem ipsome dolor sit amet",
  },
};
