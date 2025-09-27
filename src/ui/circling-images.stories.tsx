import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  CirclingImages,
  CirclingRow,
  CirclingRowImage,
} from "@/ui/circling-images";

function CirclingImagesDemo({ images }: { images: { image: string }[] }) {
  return (
    <CirclingImages>
      {images.map(({ image }, idx) => {
        const rotatingAmmount = 180 / images.length;
        return (
          <CirclingRow
            key={image}
            style={{ rotate: `${rotatingAmmount * idx}deg` }}
          >
            <CirclingRowImage src={image} alt="alt" />
          </CirclingRow>
        );
      })}
    </CirclingImages>
  );
}

const meta: Meta<typeof CirclingImagesDemo> & TypedMetaOptions = {
  component: CirclingImagesDemo,
  tags: ["autodocs"],
  args: {
    images: [
      { image: "/portrait-1.jpg" },
      { image: "/portrait-2.jpg" },
      { image: "/portrait-3.jpg" },
    ],
  },
  render: ({ images }) => (
    <CirclingImages>
      {images.map(({ image }, idx) => {
        const rotatingAmmount = 180 / images.length;
        return (
          <CirclingRow
            key={image}
            style={{ rotate: `${rotatingAmmount * idx}deg` }}
          >
            <CirclingRowImage src={image} alt="alt" />
          </CirclingRow>
        );
      })}
    </CirclingImages>
  ),
};

export default meta;

type Story = StoryObj<typeof CirclingImagesDemo>;

export const CirclingImagesDemoStory: Story = {
  args: {},
};
