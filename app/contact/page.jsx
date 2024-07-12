"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarker, FaSpinner } from "react-icons/fa";
import { delay, motion } from "framer-motion";
import { useEffect, useState } from "react";
import sanity from "@/lib/sanity";

const Contact = () => {
  const [loader, setLoader] = useState(false);
  const [contact, setContact] = useState([
    {
      icon: <FaPhoneAlt />,
      type: "Phone",
      value: "(+62) 857 5580 3320",
    },
    {
      icon: <FaEnvelope />,
      type: "email",
      value: "achmadfurqonrachmadie@gmail.com",
    },
    {
      icon: <FaMapMarker />,
      type: "Address",
      value: "Malang, East Java, Indonesia",
    },
  ]);

  useEffect(() => {
    setTimeout(() => {
      fetchContact();
    }, 2000);
  }, []);

  // Fetch contact from sanity client
  const fetchContact = async () => {
    setLoader(true);

    try {
      const response = await sanity.fetch(`*[_type == "contact"]`);
      console.log(response);

      setContact(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoader(false);
    }
  };

  const container = {
    hidden: { opacity: 0.5, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 2.5,
        staggerChildren: 0.3,
      },
    },
  };

  const list = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { duration: 0.4, delay: 2.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                I&apos;m always open to discussing product design work or partnership
                opportunities.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firstname" />
                <Input type="lastname" placeholder="Lastname" />
                <Input type="emailaddress" placeholder="Email address" />
                <Input type="phonenumber" placeholder="Phone number" />
              </div>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup label="Services">
                    <SelectItem value="wd">Web Design</SelectItem>
                    <SelectItem value="mb">Mobile Design</SelectItem>
                    <SelectItem value="wmd">
                      Website/Mobile Development
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea placeholder="Message" className="h-[200px]" />
              <Button size="md" className="max-w-40">
                Send Message
              </Button>
            </form>
          </div>
          {/* info */}

          <motion.div
            className="flex-1 flex flex-col gap-6 items-start xl:justify-end order-1 xl:order-none mb-8 xl:mb-0"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            {contact &&
              contact.map((item, i) => {
                return (
                  <motion.li
                    key={i}
                    className="flex items-center gap-6"
                    variants={list}
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{i}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{item.type}</p>
                      <h3 className="text-xl">{item.value}</h3>
                    </div>
                  </motion.li>
                );
              })}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
export default Contact;
