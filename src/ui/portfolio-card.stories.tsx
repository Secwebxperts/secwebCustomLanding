import type { Meta, StoryObj } from "@storybook/nextjs";
import {
  PortfolioCardRow,
  PortfolioCardDescription,
  PortfolioCardHeader,
  PortfolioCardBadge,
  PortfolioCardHeading,
  PortfolioCardContent,
  PortfolioCardItem,
  PortfolioCardFooter,
  PortfolioCardTag,
  PortfolioCardImage,
} from "@/ui/portfolio-card";

function PortfolioCardRowDemo() {
  return (
    <PortfolioCardRow>
      <PortfolioCardDescription>
        <PortfolioCardHeader>
          <PortfolioCardBadge>2025</PortfolioCardBadge>
          <PortfolioCardHeading>Lorem ipsum</PortfolioCardHeading>
        </PortfolioCardHeader>
        <PortfolioCardContent>
          <PortfolioCardItem>Lorem</PortfolioCardItem>
          <PortfolioCardItem>ipsum</PortfolioCardItem>
          <PortfolioCardItem>dolor</PortfolioCardItem>
          <PortfolioCardItem>sit</PortfolioCardItem>
          <PortfolioCardItem>amet</PortfolioCardItem>
        </PortfolioCardContent>
        <PortfolioCardFooter>
          <PortfolioCardTag>Business</PortfolioCardTag>
          <PortfolioCardTag>Something else</PortfolioCardTag>
        </PortfolioCardFooter>
      </PortfolioCardDescription>

      <PortfolioCardImage alt="some" src={`/portrait-1.jpg`} />
      <PortfolioCardImage alt="some" src={`/portrait-1.jpg`} />
    </PortfolioCardRow>
  );
}

const meta: Meta<typeof PortfolioCardRowDemo> = {
  component: PortfolioCardRowDemo,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof PortfolioCardRowDemo>;

export const PortfolioCardRowDemoStory: Story = {
  args: {},
};
