import type { Meta, StoryObj } from "@storybook/nextjs";
import HomePageComp, {
  HeroSection,
  AboutUs,
  FAQ,
  Technologies,
  OurProcess,
  Portfolio,
  Services,
  Support247,
  Testimonials,
  OurTeam,
  BecomePartOfUs,
} from "@/components/main/home";

const meta: Meta<typeof HomePageComp> = {
  component: HomePageComp,
};

export default meta;

type Story = StoryObj<typeof HomePageComp>;

export const HomePageCompStory: Story = {
  name: "Home Page",
  args: {},
};

export const HeroSection_Story: Story = {
  render: () => {
    return <HeroSection />;
  },
};

export const AboutUs_Story: Story = {
  render: () => {
    return <AboutUs />;
  },
};

export const Technologiess_Story: Story = {
  render: () => {
    return <Technologies />;
  },
};

export const Services_Story: Story = {
  render: () => {
    return <Services />;
  },
};

export const Portfolio_Story: Story = {
  render: () => {
    return <Portfolio />;
  },
};

export const Support247_Story: Story = {
  render: () => {
    return <Support247 />;
  },
};

export const OurProcess_Story: Story = {
  render: () => {
    return <OurProcess />;
  },
};

export const OurTeam_Story: Story = {
  render: () => {
    return <OurTeam />;
  },
};

export const Testimonial_Story: Story = {
  render: () => {
    return <Testimonials />;
  },
};

export const FAQ_Story: Story = {
  render: () => {
    return <FAQ />;
  },
};

export const BecomePartOfUs_Story: Story = {
  render: () => {
    return <BecomePartOfUs />;
  },
};

// become a part of us
