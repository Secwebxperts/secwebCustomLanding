import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { Button } from "@/ui/button";

const meta: Meta<typeof Button> & TypedMetaOptions = {
  component: Button,
  parameters: {
    layout: "centered",
  },
  args: {
    children: "Sample text",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const DefaultButtonStory: Story = {
  args: {},
};

export const SecondaryButtonStory: Story = {
  args: { variant: "secondary" },
};

export const SuccessButtonStory: Story = {
  args: { variant: "success" },
};

export const WarningButtonStory: Story = {
  args: { variant: "warning" },
};

export const DestructiveButtonStory: Story = {
  args: { variant: "destructive" },
};

export const OutlineButtonStory: Story = {
  args: { variant: "outline" },
};

export const GhostButtonStory: Story = {
  args: { variant: "ghost" },
};

export const LinkButtonStory: Story = {
  args: { variant: "link" },
};
