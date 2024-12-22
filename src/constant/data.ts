import images from "./images";
import slugify from "slugify";
import { SiSubstack, SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export const projectData: ProjectType[] = [
  {
    id: "1",
    image: images.croch1,
    title: "Croch",
    description:
      "Croch provides an online marketplace for crochet vendors to list, market, and sell their crafts to customers.",
    slug: slugify("Croch", { lower: true }),
    images: [
      images.croch1,
      images.croch2,
      images.croch3,
      images.croch4,
      images.croch5,
      images.croch6,
    ],
    stack:
      "TypeScript, Next JS, Express JS, Node JS, MongoDB, Tailwind CSS, Redux Toolkit",
    live: "https://croch.vercel.app",
    github: "https://github.com/kokombo/BowalMobileApp",
  },

  {
    id: "2",
    image: images.ternhub1,
    title: "TheTernHub",
    description:
      "A job platform for new tech talents to discover exciting and latest internship opportunities and junior roles. ",
    slug: slugify("TheTernHub", { lower: true }),
    images: [
      images.ternhub1,
      images.ternhub2,
      images.ternhub3,
      images.ternhub4,
      images.ternhub5,
      images.ternhub6,
      images.ternhub7,
      images.ternhub8,
      images.ternhub9,
      images.ternhub10,
      images.ternhub11,
      images.ternhub12,
      images.ternhub13,
    ],
    stack:
      "Next.JS, TypeScript, Tailwind CSS, Node.JS, MongoDB, React Query, Redux Toolkit, React Formik",
    live: "https://ternhub.vercel.app",
    github: "https://github.com/kokombo/ternhub",
  },

  {
    id: "3",
    image: images.bowal1,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce marketplace that leverages geo-location technology to online buying and selling.",
    slug: slugify("Bowal Mobile App", { lower: true }),
    images: [
      images.bowal1,
      images.bowal2,
      images.bowal4,
      images.bowal6,
      images.bowal7,
      images.bowal8,
      images.bowal9,
      images.bowal10,
      images.bowal21,
      images.bowal22,
      images.bowal23,
      images.bowal24,
      images.bowal11,
      images.bowal12,
      images.bowal13,
      images.bowal14,
      images.bowal15,
      images.bowal16,
      images.bowal17,
      images.bowal19,
      images.bowal20,
      images.bowal5,
    ],
    stack: "React Native, Redux, Firebase, JavaScript",
    live: "",
    github: "https://github.com/kokombo/BowalMobileApp",
  },

  {
    id: "4",
    image: images.textscrapper,
    title: "Text Scrapper",
    description:
      "Save time by seamlessly extracting texts from your screenshots with this web application. ",
    slug: slugify("Text Extractor", { lower: true }),
    images: [
      images.textscrapper,
      images.textscrapper,
      images.textscrapper,
      images.textscrapper,
    ],
    stack: "Tesseract.JS, React",
    live: "https://text-scrapper.netlify.app/",
    github: "https://github.com/kokombo/text-scrapper",
  },

  {
    id: "5",
    image: images.exco2,
    title: "Exco mobile application",
    description:
      "Exco is an NFT gaming platform where users can stake tokens to play games and earn real cash.",
    slug: slugify("Exco mobile application", { lower: true }),
    images: [
      images.exco1,
      images.exco2,
      images.exco3,
      images.exco4,
      images.exco5,
      images.exco6,
      images.exco7,
      images.exco8,
      images.exco9,
    ],
    stack: "TypeScript, React Native, Expo",
    live: "",
    github: "https://github.com/kokombo/exco",
  },

  {
    id: "6",
    image: images.ternmobile1,
    title: "TernHub Mobile App",
    description:
      "A job platform for newbies in the tech industry to discover latest internship opportunities and junior roles.",
    slug: slugify("ternhub mobile app", { lower: true }),
    images: [
      images.ternmobile2,
      images.ternmobile3,
      images.ternmobile4,
      images.ternmobile5,
      images.ternmobile6,
      images.ternmobile1,
      images.ternmobile7,
      images.ternmobile8,
      images.ternmobile9,
      images.ternmobile10,
      images.ternmobile11,
      images.ternmobile12,
      images.ternmobile13,
      images.ternmobile14,
    ],
    stack: "TypeScript, React Native, Expo, Firebase, Redux",
    live: "",
    github: "https://github.com/kokombo/ternhubmobile",
  },
];

export const socials: SocialsType[] = [
  {
    id: "1",
    url: "https://github.com/kokombo",
    label: "GitHub",
    icon: FaGithub,
  },
  {
    id: "2",
    url: "https://www.twitter.com/Oluwanbowa",
    label: "Twitter",
    icon: BsTwitterX,
  },
  {
    id: "3",
    url: "https://www.linkedin.com/in/samuel-ibrahim-84154818b/",
    label: "LinkedIn",
    icon: SiLinkedin,
  },
  {
    id: "4",
    url: "https://oluwanbowa.substack.com/",
    label: "Substack",
    icon: SiSubstack,
  },
];

export const INTRO = {
  heading: "Hi, I'm Samuel ✌️",
  subheading: "A Software Developer | Full Stack Website Developer",
  description:
    "I am currently exploring ideas to help small businesses work more efficiently with AI assistance. I am open to a remote full-time or freelance role.",
};

export const ABOUT = {
  paragraph1:
    "Samuel is a skilled full stack developer who excel in creating optimized, user-friendly web experiences. I am particularly interested in exploring the endless possibilities of AI and building eCommerce solutions. I am currently building Shopivol to help small businesses operate at almost the same level as large corporations with AI assistance.",

  paragraph2:
    "When I'm not coding, you'll find me watching mysterios vidoes on YouTube, learning new cool tech tricks, or reading indie hackers' tweets/banters on X. I am currently open to remote opportunities. I thrive in a fast-paced environment and am eager to contribute to an ambitious team. Let's connect to discuss how my passion and skills align with your goals.",
};

export const CTA = {
  text: "Want to discuss hiring me for your project or team? I am excited to chat with you. Reach me via email by clicking the 'let's talk' button below",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Tailwind",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Redux Toolkit",
  "Firebase",
  "Prisma",
  "Supabase",
  "Socket.io",
  "Docker",
  "Git",
  "Jest",
];

export const experiences: Experience[] = [
  {
    startDate: "Nov 2023",
    endDate: "April 2024",
    position: "Mobile Front-End Developer",
    company: "The Digital Hacker, New Jersey, United States",
    outlines: [
      "● Developed the client side of a card scanner application using React Native, Redux Toolkit, and TensorFlow",
      "● Implemented AI technology for scanning complementary cards, enabling efficient contact management.",
    ],
  },

  {
    startDate: "Dec 2022",
    endDate: "March 2023",
    position: "Technical Writer",
    company: "ZipScore, Berlin, Germany",
    outlines: [
      "● Increased customer base by developing valuable user guides for Zip Code targeted ads on popular social platforms. ",
      "● Enhanced customer experience by building detailed documentation for an AI tool.",
    ],
  },

  {
    startDate: "May 2021",
    endDate: "Dec 2022",
    position: "Web Developer",
    company: "Mango Capitals LLC, Minniesota, United States",
    outlines: [
      "● Developed the client side of a card scanner application using React.JS, React Native, Redux Toolkit, and TensorFlow",
      "● Implemented AI technology for scanning complementary cards, enabling efficient contact management.",
    ],
  },
];
