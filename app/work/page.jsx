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

// Constants
import { projects as mockProjects } from "@/lib/constants";
import { loadFromCache, saveToCache } from "@/utils/cache";

const Work = () => {
  const [singleProject, setSingleProject] = useState(null);
  const [projects, setProjects] = useState(null);

  const fetchProjects = async () => {
    try {
      // const response = await sanity.fetch(`*[_type == "work"]`);
      const response = mockProjects;

      const data = {
        ...loadFromCache("projectsPage"),
        projects: response,
      };

      console.log(response)

      // Save fetched data to cache
      saveToCache("projectsPage", data);

      // Update state

      setSingleProject(response[0]);
      setProjects(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSlideChange = (swiper) => {
    // Get current slide index
    const currentSlideIndex = swiper.activeIndex;
    // update project state based on current slide index
    setSingleProject(projects[currentSlideIndex]);
  };

  const loadPage = async () => {
    const projectPageCache = loadFromCache("projectsPage");

    if (!projectPageCache) {
      fetchProjects();
      return;
    }

    if (projectPageCache.projects.length === 0) {
      fetchProjects();
      return;
    }

    setSingleProject(projectPageCache.projects[0]);
    setProjects(projectPageCache.projects);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    singleProject && (
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
                  {singleProject.number}
                </div>
                {/* category */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                  {singleProject.title}
                </h2>
                {/* description */}
                <p className="text-white/60">{singleProject.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {singleProject &&
                    singleProject.stack.map((stack, i) => {
                      return (
                        <li key={i} className=" text-accent">
                          {stack.name}
                          {i !== singleProject.stack.length - 1 && ","}
                        </li>
                      );
                    })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* button */}
                <div className="flex gap-4">
                  {/* live project button */}
                  <Link href={singleProject.live} target="_blank">
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
                    href={singleProject.github}
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
                {projects &&
                  projects.map((item, i) => {
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
    )
  );
};

export default Work;
