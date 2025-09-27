import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import TestimonialCard from "@/ui/testimonial-card";

const meta: Meta<typeof TestimonialCard> & TypedMetaOptions = {
  component: TestimonialCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    name: "Jhon Doe",
    designation: "Product Maneger",
    organization: "ABC Pvt. Ltd.",
    icon: "twitter",
    src: "/logo.png",
    alt: `Photo of Jhon Doe`,
    description:
      "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
  },
};

export default meta;

type Story = StoryObj<typeof TestimonialCard>;

export const TestimonialCardStory: Story = {};
