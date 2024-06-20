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
  heading: "Hi, I'm Samuel",
  subheading:
    "A Proficient Software developer & startup enthusiast focused on building user-friendly and optimized web experiences.",
  description:
    "Committed to Developing High-Quality Software Solutions, with a Passion for User-Centric Design and a Strong Enthusiasm for Startup Innovation.",
};

export const ABOUT = {
  paragraph1:
    "I'm Samuel, a proficient software developer and startup enthusiast with a passion for creating user-friendly and optimized web experiences. With a strong foundation in various programming languages and frameworks, I thrive on solving complex problems and bringing innovative ideas to life. My journey in the tech world has been driven by a relentless pursuit of excellence and a keen interest in the latest industry trends.",

  paragraph2:
    "Over the years, I have honed my skills in developing scalable and efficient web applications, always keeping the end-user experience at the forefront. I believe that a well-crafted website or application can make a significant impact, and I am dedicated to building solutions that are not only functional but also intuitive and enjoyable to use.",
};

export const CTA = {
  text: "Feel free to connect. Let's discuss software architecture, development process, code mentorship, developer communities, or any other tech topics.",
};

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express JS",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "MongoDB",
  "PostgreSQL",
  "Redis",
  "Redux",
  "Redux Toolkit",
  "Firebase",
  "Prisma",
  "Supabase",
  "Socket.io",
  "Docker",
  "Git",
  "Jest",
];
