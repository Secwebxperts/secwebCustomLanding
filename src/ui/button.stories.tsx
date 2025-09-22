import type { Meta, StoryObj } from "@storybook/nextjs";
import { Button } from "@/ui/button";

const meta: Meta<typeof Button> = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Sample text",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButtonStory: Story = {
  args: {},
};

export const DestructiveButtonStory: Story = {
  args: { variant: "destructive" },
};

export const SuccessButtonStory: Story = {
  args: { variant: "success" },
};

export const WarningButtonStory: Story = {
  args: { variant: "warning" },
};

export const OutlineButtonStory: Story = {
  args: { variant: "outline" },
};

export const SecondaryButtonStory: Story = {
  args: { variant: "secondary" },
};

export const GhostButtonStory: Story = {
  args: { variant: "ghost" },
};

export const LinkButtonStory: Story = {
  args: { variant: "link" },
};
