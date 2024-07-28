"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import { useEffect, useState } from "react";

// Constants
import { profile as mockProfile, stats as mockStats } from "@/lib/constants.js";
import { loadFromCache, saveToCache } from "@/utils/cache";

export default function Home() {
  const [profile, setProfile] = useState(null);
  const [stats, setStats] = useState(null);

  const fetchProfile = async () => {
    try {
      // const response = await sanity.fetch(`*[_type == "homepage"][0]`);
      const response = mockProfile;
      const data = {
        ...loadFromCache("profilePage"),
        profile: response,
      };

      // Save fetched data to cache
      saveToCache("homepage", data);

      console.log(response);

      // Update profile state
      setProfile(response);
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
  };

  const fetchStats = async () => {
    try {
      // const response = await sanity.fetch(`*[_type == "stats"]`);
      const response = mockStats;
      const data = {
        ...loadFromCache("homepage"),
        stats: response,
      };

      // Save fetched data to cache
      saveToCache("homepage", data);

      console.log(response);

      // Update profile state
      setStats(response);
    } catch (error) {
      console.error("Error fetching stats:", error);
    }
  };

  const loadPage = () => {
    const homepageCache = loadFromCache("homepage");

    console.log(homepageCache);

    if (!homepageCache) {
      fetchProfile();
      fetchStats();
      return;
    }

    if (!homepageCache?.profile) {
      fetchProfile();

      if (!homepageCache?.stats) {
        fetchStats();
        return;
      }

      setStats(homepageCache.stats);
      return;
    }

    if (!homepageCache?.stats) {
      fetchStats();

      if (!homepageCache?.profile) {
        fetchProfile();
        return;
      }

      setProfile(homepageCache.profile);
      return;
    }

    setProfile(homepageCache.profile);
    setStats(homepageCache.stats);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    profile && (
      <section className="w-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between mb-12">
            {/* text */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">{profile.subtitle}</span>
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
