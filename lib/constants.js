import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaIdBadge,
  FaHatWizard,
  FaListOl,
} from "react-icons/fa";

import { cn } from "@/lib/utils";

import { SiTailwindcss, SiExpress } from "react-icons/si";

export const profile = {
  _createdAt: "2024-07-06T12:46:42Z",
  subtitle: "Software Engineer",
  hero: "Hello!",
  _id: "b0e8442f-269c-483e-9910-e1bdd775f7d4",
  _updatedAt: "2024-07-06T12:46:42Z",
  coloredhero: "I'm Achmad Furqon Rachmadie",
  _rev: "GHTX8pqpuiTl3STSCINv8g",
  _type: "homepage",
  description:
    "I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies",
};

export const stats = [
  {
    _type: "stats",
    name: "Code commits",
    _id: "2425f7e8-839f-4282-a7dc-2ce127f1d582",
    _updatedAt: "2024-07-06T12:48:25Z",
    number: "300",
    _createdAt: "2024-07-06T12:48:25Z",
    _rev: "GHTX8pqpuiTl3STSCIO4DP",
  },
  {
    _createdAt: "2024-07-06T12:48:10Z",
    _rev: "GHTX8pqpuiTl3STSCIO36a",
    _type: "stats",
    name: "Technologies mastered",
    _id: "c06e4141-32e9-48ba-82f8-5b73b2477b37",
    _updatedAt: "2024-07-06T12:48:10Z",
    number: "8 ",
  },
  {
    _updatedAt: "2024-07-06T12:47:31Z",
    number: "2",
    _createdAt: "2024-07-06T12:47:31Z",
    _rev: "f2t4k5Z7sOgvMyNjjtj8Fb",
    _type: "stats",
    name: "Years of Experiences",
    _id: "d6022763-039e-41d6-89da-b09c670149e9",
  },
  {
    _updatedAt: "2024-07-06T12:47:49Z",
    number: "12",
    _createdAt: "2024-07-06T12:47:49Z",
    _rev: "GHTX8pqpuiTl3STSCIO02J",
    _type: "stats",
    name: "Projects completed",
    _id: "f83f2c2b-f8ae-4ae8-9c36-e3f0430058e3",
  },
];

export const services = [
  {
    href: "https://linkedin.com/in/achmadfrachmadie",
    num: "01",
    title: "Web Development",
    description:
      "We build websites that serve as powerful marketing tools and bring memorable brand experiences.",
  },
  {
    href: "https://linkedin.com/in/achmadfrachmadie",
    num: "02",
    title: "Mobile Development",
    description:
      "Having a mobile-optimized site is more important than ever. Our mobile development team makes your business relevant to customers on-the-go.",
  },
  {
    href: "https://linkedin.com/in/achmadfrachmadie",
    num: "03",
    title: "UI/UX Design",
    description:
      "Our design team is well-versed in creating custom designs that focus on usability, responsive design, and innovative branding.",
  },
  {
    href: "https://linkedin.com/in/achmadfrachmadie",
    num: "04",
    title: "System Design",
    description:
      "We create custom solutions for your business needs. We design, build, and maintain systems to meet your specific needs.",
  },
];

export const about = {
  title: "About me",
  description:
    "I am a fullstack developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies including React, Node.js, HTML, and CSS. I am always looking to learn new things and improve my skills.",
  info: [
    {
      fieldName: "Name",
      value: "Uqie Rachmadie",
    },
    {
      fieldName: "Phone",
      value: "(+62) 857 558 03320)",
    },
    {
      fieldName: "Experience",
      value: "2+ Years",
    },
    {
      fieldName: "Email",
      value: "achmadfurqonrachmadie@gmail.com",
    },
    {
      fieldName: "Nationality",
      value: "Indonesia",
    },
    {
      fieldName: "Freelance",
      value: "Available",
    },
    {
      fieldName: "Languages",
      value: "Indonesia, English",
    },
  ],
};

export const experience = {
  icon: FaIdBadge,
  title: "My experience",
  description:
    "I have experience working with a variety of technologies including React, Node.js, HTML, and CSS. I have worked on a variety of projects including web applications, websites, and mobile apps.",
  items: [
    {
      companyName: "Core Initiative Studio",
      position: "Frontend Engineer",
      duration: "Aug 2023 - Sep 2023",
    },
    {
      companyName: "UIN Maulana Malik Ibrahim Malang",
      position: "Programming & Algorithm Practicum Teaching Assistant",
      duration: "Aug 2023 - Dec 2023",
    },
    {
      companyName: "PT. Ekata Technology Indonesia",
      position: "Backend Engineer",
      duration: "Dec 2023 - Feb 2023",
    },
    {
      companyName: "Zegasoft",
      position: "Mobile Developer",
      duration: "May 2023 - Jun 2023",
    },
    {
      companyName: "Zegasoft",
      position: "Software Engineer",
      duration: "May 2023 - Present",
    },
  ],
};

export const education = {
  icon: FaHatWizard,
  title: "My education",
  description:
    "I have a Bachelor's degree in Computer Science from UIN Maulana Malik Ibrahim Malang. I have also taken a variety of online courses to improve my skills and learn new technologies.",
  items: [
    {
      institution: "UIN Maulana Malik Ibrahim Malang",
      degree: "Bachelor's Degree in Computer Science",
      duration: "2022 - 2026",
    },
    {
      institution: "Udemy",
      degree: "NodeJS Bootcamp - The Complete Guide",
      duration: "2023",
    },
  ],
};

export const skills = {
  icon: FaListOl,
  title: "My skills",
  description:
    "I have experience with a variety of technologies including React, Node.js, HTML, and CSS. I am always looking to learn new things and improve my skills.",
  items: [
    {
      icon: "fa-brands fa-react",
      name: "React",
    },
    {
      icon: "fa-brands fa-css3",
      name: "CSS3",
    },
    {
      icon: "fa-brands fa-html5",
      name: "HTML5",
    },
    {
      icon: "fa-brands fa-node-js",
      name: "Node.js",
    },
    {
      icon: "fa-brands fa-java",
      name: "Java",
    },
    {
      icon: "fa-brands fa-square-js",
      name: "JavaScript",
    },
    {
      icon: "fa-brands fa-vuejs",
      name: "Vue",
    },
    {
      icon: "fa-brands fa-sass",
      name: "Sass",
    },
    {
      icon: "fa-brands fa-laravel",
      name: "Laravel",
    },
    {
      icon: "fa-brands fa-git-alt",
      name: "Git",
    },
    {
      icon: "fa-brands fa-flutter",
      name: "Flutter",
    },
    {
      icon: "fa-brands fa-bootstrap",
      name: "Bootstrap",
    },
    {
      icon: "fa-brands fa-angular",
      name: "Angular",
    },
    {
      icon: "fa-brands fa-yarn",
      name: "Yarn",
    },
  ],
};
