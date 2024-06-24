"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Responsive and high-performance websites are built using the latest technologies. The goal is to create web applications that are both visually appealing and highly functional.",
    href: ""
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Intuitive and engaging user interfaces are designed to enhance user experience. Focus is on creating designs that are not only beautiful but also user-friendly.",
    href: ""
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Unique and memorable logos are created to represent your brand's identity. Designs are crafted to leave a lasting impression on your audience.",
    href: ""
  },
  {
    num: "04",
    title: "SEO",
    description: "Websites are optimized to improve their search engine rankings and drive more organic traffic. SEO strategies are designed to boost your online visibility and reach.",
    href: ""
  },
]

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                className="flex-1 flex flex-col justify-start gap-6 group"
                key={index}>
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  {/* <Link
                    href={service.href}
                    className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl"/>
                  </Link> */}
                </div>
                {/* title */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60">{service.description}</p>
                {/* border */}
                <div className="border-b border-white/20 w-full mt-auto"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
      )
}

export default Services