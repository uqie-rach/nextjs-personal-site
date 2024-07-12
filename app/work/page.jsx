"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import Link from "next/link";
import WorkSliderNavigation from "@/components/WorkSliderNavigation";
import sanity from "@/lib/sanity";

const projects = [
  {
    num: "01",
    title: "Project 1",
    description: "This is a project description",
    category: "Fullstack",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/projects/project-1.png",
    live: "https://www.google.com",
    github: "https://www.google.com",
  },

  {
    num: "02",
    title: "Project 2",
    description: "This is a project description",
    category: "Fullstack",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/projects/project-1.png",
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
  {
    num: "03",
    title: "Project 3",
    description: "This is a project description",
    category: "Fullstack",
    stack: [
      {
        name: "React",
      },
      {
        name: "Node.js",
      },
      {
        name: "MongoDB",
      },
    ],
    image: "/projects/project-1.png",
    live: "https://www.google.com",
    github: "https://www.google.com",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const [loader, setLoader] = useState(false);
  

  // Fetch Work from sanity client
  const fetchProjects = async () => {
    setLoader(true);

    try {
      const response = await sanity.fetch(`*[_type == "work"]`);
      console.log(response);

      setProject(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentSlideIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentSlideIndex]);
  };

  useEffect(() => {
    setTimeout(() => {
      fetchProjects();
    }, 2000);
  }, [])
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              {/* description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((stack, i) => {
                  return (
                    <li key={i} className=" text-accent">
                      {stack.name}
                      {i !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex gap-4">
                {/* live project button */}
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link
                  href={project.github}
                  className="flex items-center gap-2 text-white/60 hover:text-accent transition-all duration-500"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/* slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((item, i) => {
                return (
                  <SwiperSlide key={i} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10" />
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={item.image}
                          fill
                          objectFit="cover"
                          className="rounded-lg"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderNavigation
                containerStyle="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] p-2 flex justify-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
