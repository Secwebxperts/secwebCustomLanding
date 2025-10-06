import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  ProcessCard,
  ProcessCardDescription,
  ProcessCardHeading,
  ProcessCardIcon,
} from "@/ui/process-card";
import {
  IoFlameOutline,
  IoAccessibility,
  IoAccessibilityOutline,
} from "react-icons/io5";

function ProcessCardDemo({
  icons,
  processCardDescription,
  processCardHeading,
}: {
  icons: "IoFlameOutline" | "IoAccessibility" | "IoAccessibilityOutline";
  processCardHeading: string;
  processCardDescription: string;
}) {
  return (
    <ProcessCard>
      <ProcessCardIcon>
        {icons === "IoFlameOutline" && <IoFlameOutline />}
        {icons === "IoAccessibility" && <IoAccessibility />}
        {icons === "IoAccessibilityOutline" && <IoAccessibilityOutline />}
      </ProcessCardIcon>
      <ProcessCardHeading>{processCardHeading}</ProcessCardHeading>
      <ProcessCardDescription>{processCardDescription}</ProcessCardDescription>
    </ProcessCard>
  );
}

const meta: Meta<typeof ProcessCardDemo> & TypedMetaOptions = {
  component: ProcessCardDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    icons: {
      control: "select",
      options: ["IoFlameOutline", "IoAccessibility", "IoAccessibilityOutline"],
    },
  },
  args: {
    icons: "IoAccessibility",
    processCardDescription:
      "We analyze your goals, challenges, and vision to craft a tailored AI strategy.",
    processCardHeading: "Discover Insights",
  },
  render: ({ icons, processCardDescription, processCardHeading }) => (
    <ProcessCard>
      <ProcessCardIcon>
        {icons === "IoFlameOutline" && <IoFlameOutline />}
        {icons === "IoAccessibility" && <IoAccessibility />}
        {icons === "IoAccessibilityOutline" && <IoAccessibilityOutline />}
      </ProcessCardIcon>
      <ProcessCardHeading>{processCardHeading}</ProcessCardHeading>
      <ProcessCardDescription>{processCardDescription}</ProcessCardDescription>
    </ProcessCard>
  ),
};

export default meta;

type Story = StoryObj<typeof ProcessCardDemo>;

export const ProcessCardStory: Story = {
  args: {},
};
