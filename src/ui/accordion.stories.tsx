import type { Meta, StoryObj } from "@storybook/nextjs";
import { TypedMetaOptions } from "@/lib/storybook/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/ui/accordion";
import { cn } from "@/utils/cn";

const accordionData = [
  {
    question: "What do I need to get started?",
    answer: [
      "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life.",
    ],
  },
  {
    question: "What kind of customization is available?",
    answer: [
      "We offer full customization options, including layout changes, color schemes, typography, and content sections to align with your brand. ",
    ],
  },
  {
    question: "How easy is it to edit for beginners?",
    answer: [
      "Our platform is designed with beginners in mind, offering an intuitive drag-and-drop interface that makes editing simple and straightforward. No coding skills required—just customize and go!",
    ],
  },
  {
    question: "Let me know more about moneyback guarantee?",
    answer: [
      "Our money-back guarantee ensures peace of mind by offering a full refund if you're not satisfied with the final product within a specified time frame.",
    ],
  },
];

function AccordionDemo({
  collapsible,
  type,
}: {
  type: "single" | "multiple";
  collapsible: boolean;
}) {
  return (
    <Accordion type={type} collapsible={collapsible} className={cn(`w-[70vw]`)}>
      {accordionData.map(({ answer, question }) => {
        return (
          <AccordionItem value={question} key={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {answer.map((ans) => (
                <p key={ans}>{ans}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

const meta: Meta<typeof AccordionDemo> & TypedMetaOptions = {
  component: AccordionDemo,
  parameters: {
    layout: "centered",
  },
  args: {
    type: "single",
    collapsible: true,
  },
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
  },
  tags: ["autodocs"],
  render: ({ collapsible, type }) => (
    <Accordion type={type} collapsible={collapsible} className={cn(`w-[70vw]`)}>
      {accordionData.map(({ answer, question }) => {
        return (
          <AccordionItem value={question} key={question}>
            <AccordionTrigger>{question}</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              {answer.map((ans) => (
                <p key={ans}>{ans}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  ),
};

export default meta;

type Story = StoryObj<typeof AccordionDemo>;

export const SingleOpenAccordion: Story = {
  args: {},
};

export const MultipleOpenAccordion: Story = {
  args: {
    type: "multiple",
  },
};
