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
    cardDetails: "Robust protection with SSL, encryption, and secure coding.",
    cardHeading: "Security First",
    icon: FaAccessibleIcon,
  },
  {
    cardDetails: "Websites that adapt perfectly across all devices.",
    cardHeading: "Responsive Design",
    icon: FaAccessibleIcon,
  },
  {
    cardDetails:
      "Tailored designs for intuitive navigation and engaging interfaces.",
    cardHeading: "Custom UI/UX",
    icon: FaAccessibleIcon,
  },
  {
    cardDetails: "Seamless connectivity with third-party tools and platforms",
    cardHeading: "API Integrations",
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
      "We design and develop websites built uniquely for your business goals. From UI/UX to performance, every element is crafted to deliver a seamless and impactful user journey.",
    cardHeading: "Custom Website Development",
    cardSubheading: "Lorem ipsum dolor sit.",
    cardImage: "/portrait-1.jpg",
    cardIcon: FaHeadphonesAlt,
  },
  {
    cardContent:
      "Scalable, secure, and conversion-focused online stores. We create e-commerce platforms that enhance customer experience and drive sales with smooth navigation and optimized checkout flows.",
    cardHeading: "E-commerce Website Development",
    cardSubheading: "consectetur adipisicing elit.",
    cardImage: "/portrait-2.jpg",
    cardIcon: FaHeadphonesAlt,
  },
  {
    cardContent:
      "Powerful, customizable, and easy-to-manage websites built on WordPress. From business sites to blogs, we deliver fast, SEO-ready platforms with hassle-free content management.",
    cardHeading: "WordPress Development",
    cardSubheading: "Eveniet fugit expedita numquam",
    cardImage: "/portrait-3.jpg",
    cardIcon: FaHeadphonesAlt,
  },
];

export const service_tagData: { tagIcon: IconType; tagText: string }[] = [
  { tagIcon: FaAccessibleIcon, tagText: "Motion UI & Micro-Animations" },
  { tagIcon: FaAccusoft, tagText: "API-First Design" },
  { tagIcon: FaAddressBook, tagText: "Accessibility Enhancement" },
  { tagIcon: FaAdjust, tagText: "24/7 Support & Maintenance" },
  { tagIcon: FaAddressCard, tagText: "AI-Content Generation" },
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
    infoDescription:
      "Real people and smart automation triage messages within minutes, not days.",
  },
  {
    icons: FaHeadphonesAlt,
    infoTitle: "Expert Guidance",
    infoDescription:
      "Designers, developers, and marketers collaborate to fix issues and improve outcomes",
  },
  {
    icons: FaHeadphonesAlt,
    infoTitle: "Clear SLAs",
    infoDescription:
      "Response and resolution times defined upfront for transparent expectations.",
  },
];

export const ourProcess_data: {
  icons: IconType;
  heading: string;
  description: string;
}[] = [
  {
    description:
      "Set clear goals, scope, and success metrics, then audit stack, access, and risks to establish a clean baseline for work and governance.",
    heading: "Align",
    icons: FaHeadphonesAlt,
  },
  {
    description:
      "Ship in short, testable sprints with staging previews, code reviews, and feature flags—design, development, and integrations moving in lockstep.",
    heading: "Build",
    icons: FaHeadphonesAlt,
  },
  {
    description:
      "Validate performance, accessibility, and security, launch with monitoring and rollback ready, then iterate on real metrics for continuous gains.",
    heading: "Prove",
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
    question: "What industries do you specialize in for web development?",
    answer: [
      "We build a wide range of websites including corporate websites, eCommerce platforms, portfolio sites, blogs, and custom web applications tailored to your business needs.",
    ],
  },
  {
    question: "Do you offer post-development support and scalability options?",
    answer: [
      "Yes, we offer ongoing support, security updates, performance optimization, and content management to ensure your website runs smoothly post-launch.",
    ],
  },
  {
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer: [
      "Absolutely. We ensure all websites are responsive across devices and optimized with SEO best practices to improve visibility and performance on search engines.",
    ],
  },
  {
    question:
      "Can you redesign my existing website instead of building a new one?",
    answer: [
      "Yes, we can revamp your current website with a modern design, better functionality, and improved performance without starting from scratch.",
    ],
  },
];
