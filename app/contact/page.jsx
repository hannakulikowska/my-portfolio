"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+48) 506 395 584",
    link: "tel:+48506395584",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "hannakulikowska.new@gmail.com",
    link: "mailto:hannakulikowska.new@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Location",
    description: "Szczecin, Poland",
    link: "https://www.google.com/maps/search/?api=1&query=Szczecin, Poland",
  },
]

import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: "easeIn" } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:justify-between gap-12">
          {/* form */}
          <form className="flex flex-col gap-6 px-4 py-6 md:p-10 bg-[#27272c] rounded-xl order-2 xl:order-none">
            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
            <p className="text-white/60">
              Fill out the form below to get in touch, and let's start creating something amazing together.
            </p>
            {/* input */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input type="text" placeholder="Firstname" />
              <Input type="text" placeholder="Lastname" />
              <Input type="email" placeholder="Email address" />
              <Input type="tel" placeholder="Phone number" />
            </div>
            {/* select */}
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select option" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {/* <SelectLabel>Select option</SelectLabel> */}
                  <SelectItem value="call">Schedule a Call</SelectItem>
                  <SelectItem value="web-development">Web Development</SelectItem>
                  <SelectItem value="ui-ux-design">UI/UX Design</SelectItem>
                  <SelectItem value="logo-design">Logo Design</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            {/* textarea */}
            <Textarea
              className="max-h-[200px]"
              placeholder="Type your message here"
            />
            {/* btn */}
            <Button size="md" className="max-w-40">Send message</Button>
          </form>
          {/* info */}
          <div className="flex-1 flex xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">{info.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-col md:flex-row md:items-center gap-3 md:gap-6"
                >
                  <div className="w-[52px] h-[52px] md:w-[72px] md:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <a href={item.link} className="text-sm md:text-xl hover:text-accent transition-all duration-500">{item.description}</a>
                  </div>
                </li>
              )
            })}</ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact