import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  ProcessCard,
  ProcessCardDescription,
  ProcessCardHeading,
  ProcessCardIcon,
} from "@/ui/process-card";
import { IoFlameOutline } from "react-icons/io5";

function ProcessCardDemo() {
  return (
    <ProcessCard>
      <ProcessCardIcon>
        <IoFlameOutline />
      </ProcessCardIcon>
      <ProcessCardHeading>Discover Insights</ProcessCardHeading>
      <ProcessCardDescription>
        We analyze your goals, challenges, and vision to craft a tailored AI
        strategy.
      </ProcessCardDescription>
    </ProcessCard>
  );
}

const meta: Meta<typeof ProcessCardDemo> = {
  component: ProcessCardDemo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ProcessCardDemo>;

export const ProcessCardStory: Story = {
  args: {},
};
