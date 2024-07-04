"use client";
import {
  FaHtml5,
  FaCss3,
  FaNodeJs,
  FaReact,
  FaIdBadge,
  FaHatWizard,
  FaListOl,
} from "react-icons/fa";

import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

import { SiTailwindcss, SiExpress } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
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

// experience data
const experience = {
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

// education data
const education = {
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

// skills data
const skills = {
  icon: FaListOl,
  title: "My skills",
  description:
    "I have experience with a variety of technologies including React, Node.js, HTML, and CSS. I am always looking to learn new things and improve my skills.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "HTML5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS3",
    },
    {
      icon: <FaReact />,
      name: "React",
    },
    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },
    {
      icon: <SiExpress />,
      name: "Express",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] max-h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.companyName}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="bg-[#232329] max-h-[300px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.institution}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60">{item.duration}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 xl:gap-[30px]">
                  {skills.items.map((item, index) => (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {item.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize text-accent bg-primary px-4 py-1 rounded-md">
                              {item.name}
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full">
              <div className="w-full text-center xl:text-left">
                <h3 className="text-4xl font-bold mb-[30px]">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <br />
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-center justify-center xl:justify-start gap-4"
                    >
                      <p className="text-white/60">{item.fieldName}</p>
                      <p className="text-xl">{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
