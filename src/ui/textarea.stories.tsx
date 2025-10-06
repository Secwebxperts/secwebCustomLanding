import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { Textarea } from "@/ui/textarea";

const meta: Meta<typeof Textarea> & TypedMetaOptions = {
  component: Textarea,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    rows: {
      control: {
        min: 1,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Textarea>;

export const TextareaWith2RowStory: Story = {
  args: { rows: 2 },
};

export const TextareaWith6RowStory: Story = {
  args: { rows: 6 },
};
