"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

// Constants
import { services as mockServices } from "@/lib/constants";
import { useEffect, useState } from "react";
import { loadFromCache, saveToCache } from "@/utils/cache";

const Services = () => {
  const [services, setServices] = useState(null);

  const fetchServices = async () => {
    try {
      // const response = await sanity.fetch(`*[_type == "services"]`);
      const response = mockServices;
      const data = {
        ...loadFromCache("servicesPage"),
        services: response,
      };

      // Save fetched data to cache
      saveToCache("servicesPage", data);

      // Update state
      setServices(response);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  const loadPage = async () => {
    const servicesPageCache = loadFromCache("servicesPage");
    
    if (!servicesPageCache) {
      fetchServices();
      return;
    }

    setServices(servicesPageCache.services);
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    services && (
      <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
          >
            {services.map((service, i) => {
              return (
                <div
                  className="flex-1 flex flex-col justify-center gap-6 group"
                  key={i}
                >
                  {/* top */}
                  <div className="w-full flex justify-between items-center">
                    <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                      {service.num}
                    </div>
                    <Link
                      href={service.href}
                      className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                    >
                      <BsArrowDownRight className="text-primary text-3xl" />
                    </Link>
                  </div>
                  <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                    {service.title}
                  </h2>
                  <p className="text-white/60">{service.description}</p>
                  <div className="border-b border-white/20 w-full" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>
    )
  );
};

export default Services;
