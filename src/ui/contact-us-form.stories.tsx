import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { ContactUsForm } from "@/ui/contact-us-form";

const meta: Meta<typeof ContactUsForm> & TypedMetaOptions = {
  component: ContactUsForm,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof ContactUsForm>;

export const ContactUsFormStory: Story = {
  args: {},
};
