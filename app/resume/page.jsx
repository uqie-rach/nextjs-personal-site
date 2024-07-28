"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { loadFromCache, saveToCache } from "@/utils/cache";

// Mock data
import {
  about as mockAbout,
  experience as mockExperience,
  education as mockEducation,
  skills as mockSkills,
} from "@/lib/constants";

// Icons

const Resume = () => {
  const [about, setAbout] = useState(null);
  const [experience, setExperience] = useState(null);
  const [education, setEducation] = useState(null);
  const [skills, setSkills] = useState(null);
  const [ready, setReady] = useState(false);

  /**
   * @param {string} type
   */
  const fetchFromResume = (type) => {
    try {
      // const response = await sanity.fetch(`*[_type == `${type}`]`);
      let mock = null;

      switch (type) {
        case "experience":
          mock = mockExperience;
          break;
        case "education":
          mock = mockEducation;
          break;
        case "skills":
          mock = mockSkills;
          break;
        case "about":
          mock = mockAbout;
          break;
        default:
          break;
      }

      const data = {
        ...loadFromCache("resumePage"),
        [type]: mock,
      };

      // Save fetched data to cache
      saveToCache("resumePage", data);

      // Update state
      switch (type) {
        case "experience":
          setExperience(mock);
          break;
        case "education":
          setEducation(mock);
          break;
        case "skills":
          setSkills(mock);
          break;
        case "about":
          setAbout(mock);
          break;
        default:
          break;
      }
    } catch (error) {
      console.error(`Error fetching ${type}:`, error);
    }
  };

  const loadPage = async () => {
    try {
      // Load cache from local storage
      const resumePageCache = loadFromCache("resumePage");

      // If cache is empty, fetch data from API
      if (!resumePageCache) {
        ["experience", "education", "skills", "about"].forEach((type) =>
          fetchFromResume(type)
        );
        return;
      }

      if (resumePageCache) {
        ["experience", "education", "skills", "about"].forEach((type) => {
          // Fetch data if cache from spesific data is empty
          if (!resumePageCache[type]) {
            fetchFromResume(type);
          }

          // Update state if cache from spesific data is not empty
          switch (type) {
            case "experience":
              setExperience(resumePageCache.experience);
              break;
            case "education":
              setEducation(resumePageCache.education);
              break;
            case "skills":
              setSkills(resumePageCache.skills);
              break;
            case "about":
              setAbout(resumePageCache.about);
              break;
            default:
              break;
          }
        });

        setReady(true);
      }
    } catch (error) {
      console.log("Erorr loading resume page:", error);
    }
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    ready && (
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
                          <span className="text-accent">
                            {item.institution}
                          </span>
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
                    {skills?.items.map((item, index) => (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                <i className={`${item.icon}`}></i>
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
                  <h3 className="text-4xl font-bold mb-[30px]">
                    {about.title}
                  </h3>
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
    )
  );
};

export default Resume;
