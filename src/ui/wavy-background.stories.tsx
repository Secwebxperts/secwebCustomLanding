import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { WavyBackground } from "@/ui/wavy-background";

const meta: Meta<typeof WavyBackground> & TypedMetaOptions = {
  component: WavyBackground,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  render: (props) => <WavyBackground {...props} />,
  decorators: (Story) => (
    <div className="-mx-4 h-60 w-[100vw] p-4">
      <Story />
    </div>
  ),
};

export default meta;

type Story = StoryObj<typeof WavyBackground>;

export const WavyBackgroundStory: Story = {
  args: {},
};
