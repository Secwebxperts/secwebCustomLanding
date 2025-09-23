import { TestimonialCardProps } from "@/ui/testimonial-card";
import Image from "next/image";
import { ComponentProps } from "react";
import { IconType } from "react-icons";
import { FaHeadphonesAlt } from "react-icons/fa";

export const service_cardData: {
  cardIcon: IconType;
  cardHeading: string;
  cardSubheading: string;
  cardContent: string;
  cardImage: string;
}[] = [
  {
    cardContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, culpa.",
    cardHeading: "Lorem, ipsum.",
    cardSubheading: "Lorem ipsum dolor sit.",
    cardImage: "/portrait-1.jpg",
    cardIcon: FaHeadphonesAlt,
  },
  {
    cardContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, culpa.",
    cardHeading: "consectetur adipis",
    cardSubheading: "consectetur adipisicing elit.",
    cardImage: "/portrait-2.jpg",
    cardIcon: FaHeadphonesAlt,
  },
  {
    cardContent:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, culpa.",
    cardHeading: "Eveniet fugit",
    cardSubheading: "Eveniet fugit expedita numquam",
    cardImage: "/portrait-3.jpg",
    cardIcon: FaHeadphonesAlt,
  },
];

export const portfolio_cardRowData: {
  badgeText: string | number;
  heading: string;
  tags: string[];
  showcasingItem: string[];
  images: [string, string] | [string];
}[] = [
  {
    badgeText: "2025",
    heading: "Lorem ipsum dolor",
    tags: ["Lorem", "ipsum"],
    showcasingItem: ["Lorem", "ipsum", "dolor", "sit", "amet"],
    images: ["/portrait-1.jpg", "/logo.png"],
  },
  {
    badgeText: "2025",
    heading: "sit amet",
    tags: ["Lorem", "ipsum"],
    showcasingItem: ["Lorem", "ipsum", "dolor", "sit", "amet"],
    images: ["/portrait-1.jpg", "/logo.png"],
  },
  {
    badgeText: "2025",
    heading: "consectetur adipisicing",
    tags: ["Lorem", "ipsum"],
    showcasingItem: ["Lorem", "ipsum", "dolor", "sit", "amet"],
    images: ["/portrait-1.jpg", "/logo.png"],
  },
];

export const support247_tooltipCardData: ({ tooltipContent: string } & Pick<
  ComponentProps<typeof Image>,
  "src" | "alt"
>)[] = [
  { tooltipContent: "lorem ipsum", alt: "lorem ipsum", src: "/portrait-1.jpg" },
  { tooltipContent: "lorem ipsum", alt: "lorem ipsum", src: "/portrait-1.jpg" },
  { tooltipContent: "lorem ipsum", alt: "lorem ipsum", src: "/portrait-1.jpg" },
  { tooltipContent: "lorem ipsum", alt: "lorem ipsum", src: "/portrait-1.jpg" },
  { tooltipContent: "lorem ipsum", alt: "lorem ipsum", src: "/portrait-1.jpg" },
  { tooltipContent: "lorem ipsum", alt: "lorem ipsum", src: "/portrait-1.jpg" },
];

export const support247_informationData: {
  icons: IconType;
  infoTitle: string;
  infoDescription: string;
}[] = [
  {
    icons: FaHeadphonesAlt,
    infoTitle: "Fast Responses",
    infoDescription: "Get timely answers to your questions.",
  },
  {
    icons: FaHeadphonesAlt,
    infoTitle: "Expert Guidance",
    infoDescription: "Our team understands both design and tech.",
  },
  {
    icons: FaHeadphonesAlt,
    infoTitle: "Continuous Help",
    infoDescription: "Support doesn't stop after launch.",
  },
];

export const ourProcess_data: {
  icons: IconType;
  heading: string;
  description: string;
}[] = [
  {
    description:
      "We analyze your goals, challenges, and vision to craft a tailored AI strategy.",
    heading: "Discover Insights",
    icons: FaHeadphonesAlt,
  },
  {
    description:
      "Our experts design and build cutting-edge AI solutions that drive results.",
    heading: "Develop Solutions",
    icons: FaHeadphonesAlt,
  },
  {
    description:
      "We implement, optimize, and scale your AI-powered success for long-term impact.",
    heading: "Deploy Success",
    icons: FaHeadphonesAlt,
  },
];

export const testimonial_data: TestimonialCardProps[] = [
  {
    src: "/logo.png",
    alt: "profile picture of John Smith",
    icon: "linkedin",
    name: "John Smith",
    description:
      "They not only delivered a top-notch website but also provided strategic insights that helped us improve our overall digital presence.",
    designation: "CEO",
    organization: "Innovate Solutions",
  },
  {
    src: "/logo.png",
    alt: "profile picture of Emily Davis",
    icon: "linkedin",
    name: "Emily Davis",
    description:
      "The team understood our complex requirements and provided a user-friendly, high-performing website that stands out in the market.",
    designation: "Product Manager",
    organization: "Nexus Digital",
  },
  {
    src: "/logo.png",
    alt: "profile picture of David Lee",
    icon: "twitter",
    name: "David Lee",
    description:
      "Their innovative solutions helped streamline our operations, and the website design and development is both functional and visually stunning.",
    designation: "Founder",
    organization: "GreenLeaf Enterprises",
  },
  {
    src: "/logo.png",
    alt: "profile picture of Mark Thompson",
    icon: "linkedin",
    name: "Mark Thompson",
    description:
      "We were blown away by the creative approach and attention to detail. The team took our ideas and turned them into a stunning websites.",
    designation: "Creative Director",
    organization: "PixelWorks Studio",
  },
  {
    src: "/logo.png",
    alt: "profile picture of Brian Clark",
    icon: "twitter",
    name: "Brian Clark",
    description:
      "They delivered a customized solution that addressed all of our business needs. The website is sleek, functional, and improved our customer experience.",
    designation: "Team Lead",
    organization: "Mandro Designs",
  },
  {
    src: "/logo.png",
    alt: "profile picture of Daniel Carter",
    icon: "twitter",
    name: "Daniel Carter",
    description:
      "The team's dedication and attention to detail are unmatched. They delivered a beautifully designed website that perfectly reflects our brand.",

    designation: "Founder",
    organization: "Fusion Studios",
  },
];

export const faq_data: { question: string; answer: string[] }[] = [
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
      "Our money-back guarantee ensures peace of mind by offering a full refund if you’re not satisfied with the final product within a specified time frame.",
    ],
  },
];
