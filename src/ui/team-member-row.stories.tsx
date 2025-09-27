import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  TeamMemberImage,
  TeamMemberRow,
  TeamMemberDetails,
  MemberNameDesignaion,
  MemberSocialPlatformIcon,
} from "@/ui/team-member-row";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa6";

function TeamMemberRowDemo({
  designation,
  icon,
  imageAlt,
  imageSrc,
  name,
  socialPlatformLink,
}: {
  icon: "FaLinkedinIn" | "FaGithub" | "FaTwitter";
  imageSrc: string;
  imageAlt: string;
  designation: string;
  name: string;
  socialPlatformLink: string;
}) {
  return (
    <TeamMemberRow>
      <TeamMemberImage alt={imageAlt} src={imageSrc} />
      <TeamMemberDetails>
        <MemberNameDesignaion designation={designation} name={name} />
        <MemberSocialPlatformIcon href={socialPlatformLink}>
          {icon === "FaLinkedinIn" && <FaLinkedinIn />}
          {icon === "FaGithub" && <FaGithub />}
          {icon === "FaTwitter" && <FaTwitter />}
        </MemberSocialPlatformIcon>
      </TeamMemberDetails>
    </TeamMemberRow>
  );
}

const meta: Meta<typeof TeamMemberRowDemo> & TypedMetaOptions = {
  component: TeamMemberRowDemo,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    designation: "Intern",
    icon: "FaGithub",
    imageAlt: "alt text",
    imageSrc: "/portrait-1.jpg",
    name: "Nirvik Purkait",
    socialPlatformLink: "https://github.com/nirvikpurkait",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["FaLinkedinIn", "FaGithub", "FaTwitter"],
    },
  },
  render: ({
    designation,
    icon,
    imageAlt,
    imageSrc,
    name,
    socialPlatformLink,
  }) => (
    <TeamMemberRow>
      <TeamMemberImage alt={imageAlt} src={imageSrc} />
      <TeamMemberDetails>
        <MemberNameDesignaion designation={designation} name={name} />
        <MemberSocialPlatformIcon href={socialPlatformLink}>
          {icon === "FaLinkedinIn" && <FaLinkedinIn />}
          {icon === "FaGithub" && <FaGithub />}
          {icon === "FaTwitter" && <FaTwitter />}
        </MemberSocialPlatformIcon>
      </TeamMemberDetails>
    </TeamMemberRow>
  ),
};

export default meta;

type Story = StoryObj<typeof TeamMemberRowDemo>;

export const TeamMemberRowDemoStory: Story = {
  args: {},
};
