import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
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

function PortfolioCardRowDemo({
  portfolioCardBadge,
  portfolioCardHeading,
  portfolioCardImage,
  portfolioCardItem,
  portfolioCardTag,
}: {
  portfolioCardBadge: number | string;
  portfolioCardHeading: string;
  portfolioCardItem: string[];
  portfolioCardTag: string[];
  portfolioCardImage: string[];
}) {
  return (
    <PortfolioCardRow>
      <PortfolioCardDescription>
        <PortfolioCardHeader>
          <PortfolioCardBadge>{portfolioCardBadge}</PortfolioCardBadge>
          <PortfolioCardHeading>{portfolioCardHeading}</PortfolioCardHeading>
        </PortfolioCardHeader>
        <PortfolioCardContent>
          {portfolioCardItem.map((cardItem) => {
            return (
              <PortfolioCardItem key={cardItem}>{cardItem}</PortfolioCardItem>
            );
          })}
        </PortfolioCardContent>
        <PortfolioCardFooter>
          {portfolioCardTag.map((tag) => {
            return <PortfolioCardTag key={tag}>{tag}</PortfolioCardTag>;
          })}
        </PortfolioCardFooter>
      </PortfolioCardDescription>

      {portfolioCardImage.map((image) => {
        return (
          <PortfolioCardImage key={image} alt={`alternate-text`} src={image} />
        );
      })}
    </PortfolioCardRow>
  );
}

const meta: Meta<typeof PortfolioCardRowDemo> & TypedMetaOptions = {
  component: PortfolioCardRowDemo,
  parameters: {
    layout: "centered",
  },
  args: {
    portfolioCardBadge: "2025",
    portfolioCardHeading: "lorem Ipsum",
    portfolioCardImage: ["/portrait-1.jpg", "/portrait-2.jpg"],
    portfolioCardItem: ["lorem", "ipsum", "dolor", "sit", "amet"],
    portfolioCardTag: ["lorem", "ipsum"],
  },
  tags: ["autodocs"],
  render: ({
    portfolioCardBadge,
    portfolioCardHeading,
    portfolioCardImage,
    portfolioCardItem,
    portfolioCardTag,
  }) => (
    <PortfolioCardRow>
      <PortfolioCardDescription>
        <PortfolioCardHeader>
          <PortfolioCardBadge>{portfolioCardBadge}</PortfolioCardBadge>
          <PortfolioCardHeading>{portfolioCardHeading}</PortfolioCardHeading>
        </PortfolioCardHeader>
        <PortfolioCardContent>
          {portfolioCardItem.map((cardItem) => {
            return (
              <PortfolioCardItem key={cardItem}>{cardItem}</PortfolioCardItem>
            );
          })}
        </PortfolioCardContent>
        <PortfolioCardFooter>
          {portfolioCardTag.map((tag) => {
            return <PortfolioCardTag key={tag}>{tag}</PortfolioCardTag>;
          })}
        </PortfolioCardFooter>
      </PortfolioCardDescription>

      {portfolioCardImage.map((image) => {
        return (
          <PortfolioCardImage key={image} alt={`alternate-text`} src={image} />
        );
      })}
    </PortfolioCardRow>
  ),
};

export default meta;

type Story = StoryObj<typeof PortfolioCardRowDemo>;

export const PortfolioCardRowDemoStory: Story = {
  args: {},
};
