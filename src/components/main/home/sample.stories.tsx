import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { HeroSection } from "@/components/main/home/sample";

const meta: Meta<typeof HeroSection> & TypedMetaOptions = {
  component: HeroSection,
};

export default meta;

type Story = StoryObj<typeof HeroSection>;

export const HeroSectionStory: Story = {
  args: {},
};
