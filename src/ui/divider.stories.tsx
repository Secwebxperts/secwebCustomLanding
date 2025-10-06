import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import Divider from "@/ui/divider";

const meta: Meta<typeof Divider> & TypedMetaOptions = {
  component: Divider,
  parameters: { layout: "fullscreen" },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Divider>;

export const DividerStory: Story = {
  args: {},
  decorators: (Story) => (
    <div className="relative min-h-screen w-full">
      <div className="absolute top-1/2 w-full -translate-y-1/2 border border-red-500 py-10">
        <Story />
      </div>
    </div>
  ),
};
