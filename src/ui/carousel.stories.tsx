import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ui/carousel";

function CarouselDemo() {
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div>1</div>
        </CarouselItem>
        <CarouselItem>
          <div>2</div>
        </CarouselItem>
        <CarouselItem>
          <div>3</div>
        </CarouselItem>
        <CarouselItem>
          <div>4</div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

const meta: Meta<typeof CarouselDemo> & TypedMetaOptions = {
  component: CarouselDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  render: () => (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <div>1</div>
        </CarouselItem>
        <CarouselItem>
          <div>2</div>
        </CarouselItem>
        <CarouselItem>
          <div>3</div>
        </CarouselItem>
        <CarouselItem>
          <div>4</div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  ),
};

export default meta;

type Story = StoryObj<typeof CarouselDemo>;

export const CarouselDemoStory: Story = {
  args: {},
};
