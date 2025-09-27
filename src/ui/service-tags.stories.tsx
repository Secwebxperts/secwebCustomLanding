import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import { ServiceTags, TagIcon, TagText } from "@/ui/service-tags";
import {
  Fa42Group,
  FaAccessibleIcon,
  FaAccusoft,
  FaYoast,
} from "react-icons/fa6";

function ServiceTagsDemo({
  icon,
  tagtext,
}: {
  icon: "Fa42Group" | "FaAccessibleIcon" | "FaAccusoft" | "FaYoast";
  tagtext: string;
}) {
  return (
    <ServiceTags>
      <TagIcon>
        {icon === "Fa42Group" && <Fa42Group />}
        {icon === "FaAccessibleIcon" && <FaAccessibleIcon />}
        {icon === "FaAccusoft" && <FaAccusoft />}
        {icon === "FaYoast" && <FaYoast />}
      </TagIcon>

      <TagText>{tagtext}</TagText>
    </ServiceTags>
  );
}

const meta: Meta<typeof ServiceTagsDemo> & TypedMetaOptions = {
  component: ServiceTagsDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    icon: "Fa42Group",
    tagtext: "Lorem ipsum",
  },
  argTypes: {
    icon: {
      control: "select",
      options: ["Fa42Group", "FaAccessibleIcon", "FaAccusoft", "FaYoast"],
    },
  },
  render: ({ icon, tagtext }) => {
    return (
      <ServiceTags>
        <TagIcon>
          {icon === "Fa42Group" && <Fa42Group />}
          {icon === "FaAccessibleIcon" && <FaAccessibleIcon />}
          {icon === "FaAccusoft" && <FaAccusoft />}
          {icon === "FaYoast" && <FaYoast />}
        </TagIcon>

        <TagText>{tagtext}</TagText>
      </ServiceTags>
    );
  },
};

export default meta;

type Story = StoryObj<typeof ServiceTagsDemo>;

export const ServiceTagsDemoStory: Story = {
  args: {},
};
