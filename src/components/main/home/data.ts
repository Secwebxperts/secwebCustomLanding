import { TestimonialCardProps } from "@/ui/testimonial-card";
import Image from "next/image";
import { ComponentProps } from "react";
import { IconType } from "react-icons";
import {
  FaHeadphonesAlt,
  FaAccessibleIcon,
  FaAccusoft,
  FaAddressBook,
  FaAdjust,
  FaAddressCard,
} from "react-icons/fa";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

export const heroSection_trustedBy: { icon: IconType; companyName: string }[] =
  [
    { icon: FaHeadphonesAlt, companyName: "Lorem ipsum" },
    { icon: FaAccessibleIcon, companyName: "dolor sit" },
    { icon: FaAccusoft, companyName: "amet consectetur" },
    { icon: FaAddressBook, companyName: "adipisicing" },
    { icon: FaAdjust, companyName: "Laborum quis" },
    { icon: FaAddressCard, companyName: "nesciunt" },
    { icon: FaHeadphonesAlt, companyName: "quod adipisci" },
    { icon: FaAccessibleIcon, companyName: "cumque voluptatem" },
    { icon: FaAccusoft, companyName: "perferendis" },
    { icon: FaAddressBook, companyName: "veritatis" },
    { icon: FaAdjust, companyName: "ducimus" },
    { icon: FaAddressCard, companyName: "Autem sapiente" },
  ];

export const features_circleingImages: {
  imageSrc: string;
  imageAltText: string;
}[] = [
  { imageAltText: "portrait-1", imageSrc: "/portrait-1.jpg" },
  { imageAltText: "portrait-2", imageSrc: "/portrait-2.jpg" },
  { imageAltText: "portrait-3", imageSrc: "/portrait-3.jpg" },
  { imageAltText: "portrait-4", imageSrc: "/portrait-4.jpg" },
  { imageAltText: "portrait-5", imageSrc: "/portrait-5.jpg" },
  { imageAltText: "portrait-6", imageSrc: "/portrait-6.jpg" },
  { imageAltText: "portrait-7", imageSrc: "/portrait-7.jpg" },
  { imageAltText: "portrait-8", imageSrc: "/portrait-8.jpg" },
];

export const features_footerCard: {
  icon: IconType;
  cardHeading: string;
  cardDetails: string;
}[] = [
  {
    cardDetails: "Instant insights for faster decision-making.",
    cardHeading: "Real-Time Data",
    icon: FaAccessibleIcon,
  },
  {
    cardDetails: "AI-powered image and video recognition.",
    cardHeading: "Vision Capabilities",
    icon: FaAccessibleIcon,
  },
  {
    cardDetails: "Smart design that enhances user experience.",
    cardHeading: "Optimized UX/UI",
    icon: FaAccessibleIcon,
  },
  {
    cardDetails: "Make data-driven decisions with AI insights.",
    cardHeading: "Predictive Analytics",
    icon: FaAccessibleIcon,
  },
];

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

export const service_tagData: { tagIcon: IconType; tagText: string }[] = [
  { tagIcon: FaAccessibleIcon, tagText: "Lorem ipsum" },
  { tagIcon: FaAccusoft, tagText: "Dolor sit amet" },
  { tagIcon: FaAddressBook, tagText: "consectetur adipisicing" },
  { tagIcon: FaAdjust, tagText: "Ad saepe deserunt" },
  { tagIcon: FaAddressCard, tagText: "earum aut delectus" },
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

export const ourTeam_memberData: {
  icon: IconType;
  imageSrc: string;
  imageAlt: string;
  designation: string;
  name: string;
  socialPlatformLink: string;
}[] = [
  {
    icon: FaGithub,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com/nirvikpurkait",
    designation: "Intern",
    name: "Nirvik Purkait",
  },
  {
    icon: FaLinkedinIn,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Priyansu Das",
    designation: "Graphic designer",
  },
  {
    icon: FaTwitter,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Sabhya Sachi Paira",
    designation: "Co-Founder, COO",
  },
  {
    icon: FaGithub,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Sathya Sachi Paira",
    designation: "Chief Executive Officer",
  },
  {
    icon: FaLinkedinIn,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Pinaki Sasmal",
    designation: "Chief Technology Officer",
  },
  {
    icon: FaTwitter,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Badhan Das",
    designation: "Chief Marketing Officer",
  },
  {
    icon: FaGithub,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Kaustav Chatterjee",
    designation: "Chief business Officer",
  },
  {
    icon: FaLinkedinIn,
    imageAlt: "Alt text",
    imageSrc: "/portrait-1.jpg",
    socialPlatformLink: "http://github.com",
    name: "Rohit Sarkel",
    designation: "Digital Marketing Manager",
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
