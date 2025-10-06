import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { Input } from "@/ui/input";

const meta: Meta<typeof Input> & TypedMetaOptions = {
  component: Input,
  parameters: { layout: "centered" },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  args: { type: "text" },
};

export const TextInputWithPlaceholder: Story = {
  args: { type: "text", placeholder: "Some text" },
};

export const FileInput: Story = {
  args: { type: "file" },
};
