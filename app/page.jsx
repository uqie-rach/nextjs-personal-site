"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useEffect, useState } from "react";
import sanity from "@/lib/sanity";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);

  const fetchProfile = async () => {
    try {
      const response = await sanity.fetch(`*[_type == "homepage"][0]`);

      console.log(response);
      setProfile(response);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchStats = async () => {
    try {
      const response = await sanity.fetch(`*[_type == "stats"]`);

      console.log(response);
      setStats(response);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  useEffect(() => {
    fetchProfile();
    fetchStats();
  }, []);

  return (
    profile && (
      <section className="w-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between mb-12">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">{profile.subtitle || "Software Engineer"}</span>
              <h1 className="h1 mb-6">
                Hello I&apos;m <br />{" "}
                <span className="text-accent">Achmad Furqon</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                {profile.description}
              </p>
              {/* Btn and social media */}
              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-0">
                  <Socials
                    containerStyles="flex gap-6"
                    iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats stats={stats} />
      </section>
    )
  );
}
