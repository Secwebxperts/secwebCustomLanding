import type { Meta, StoryObj } from "@storybook/nextjs";
import HomePageComp, {
  AboutUs,
  FAQ,
  Features,
  OurProcess,
  Portfolio,
  Services,
  Support247,
  Testimonials,
  OurTeam,
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

export const AboutUs_Story: Story = {
  render: () => {
    return <AboutUs />;
  },
};

export const Features_Story: Story = {
  render: () => {
    return <Features />;
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

// become a part of us
