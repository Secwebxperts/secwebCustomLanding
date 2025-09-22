import type { Meta, StoryObj } from "@storybook/nextjs";
import Footer from "@/components/footer";

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;

type Story = StoryObj<typeof Footer>;

export const FooterStory: Story = {
  args: {},
};
