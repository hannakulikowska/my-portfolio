"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
  FaGithub,
  FaBootstrap
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiGit,
  SiWebpack,
  SiTypescript,
  SiVite,
} from "react-icons/si";

// about data
const about = {
  title: "About me",
  description: "With a strong passion for web development, I bring creativity and technical expertise to every project I undertake. My goal is to create user-friendly and visually appealing web sites and single page applications that meet the needs of my clients. Let's work together to bring your vision to life!",
  info: [
    // {
    //   fieldName: "Name",
    //   fieldValue: "Hanna Kulikowska"
    // },
    // {
    //   fieldName: "Phone",
    //   fieldValue: "(+48) 506 395 584"
    // },
    // {
    //   fieldName: "Email",
    //   fieldValue: "hannakulikowska.new@gmail.com"
    // },
    {
      fieldName: "Freelance",
      fieldValue: "Available"
    },
    {
      fieldName: "Nationality",
      fieldValue: "Polish"
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Polish, Russian, Ukrainian"
    },
  ]
}

// experience data
const experience = {
  icon: "/assets/about/badge.svg",
  title: "My experience",
  description: "I have a diverse background in web development and analysis. As a Freelance Web Developer, I have worked with a wide range of clients, from startups to established entrepreneurs, to create dynamic and responsive websites that meet their business needs. My experience in the financial sector as an Analyst has equipped me with strong analytical and problem-solving skills, which I apply to my development projects. I am dedicated to continuous learning and improving my craft to deliver high-quality solutions.",
  items: [
    {
      company: "Freelance",
      position: "Web Developer",
      duration: "2023 - Present",
    },
    // {
    //   company: "Freelance",
    //   position: "WordPress Developer",
    //   duration: "2018 - 2022",
    // },
   {
      company: "RRB-Bank, BPS-Bank",
      position: "Analyst",
      duration: "2004 - 2014",
    },
  ]
}

// education data
const education = {
  icon: "/assets/about/cap.svg",
  title: "My education",
  description: "Throughout my career, I have consistently pursued education to enhance my skills and stay updated with the latest trends and technologies in the industry. My educational background reflects a strong foundation in front-end development, project management, and software testing, which has equipped me with the knowledge and expertise needed to excel in my field.",
  items: [
  {
      institution: "EPAM",
      degree: "NodeJS",
      duration: "2024",
    },
    {
      institution: "EPAM",
      degree: "Angular",
      duration: "2024",
    },
    {
      institution: "EPAM",
      degree: "Front-End Development",
      duration: "2023 - 2024",
    },
    {
      institution: "Codecademy",
      degree: "Front-end Development",
      duration: "2022 - 2023",
    },
    {
      institution: "ISTQB Certification",
      degree: "Certified Software Tester",
      duration: "2021",
    },
    {
      institution: "Gdansk University",
      degree: "Postgraduate Diploma in IT PM",
      duration: "2020 - 2021",
    },
    {
      institution: "Front-End School (offline)",
      degree: "Front-End Development",
      duration: "2019",
    },
    {
      institution: "Minsk Economic University",
      degree: "Bachelor's Degree in Finance & Banking",
      duration: "2003 - 2009",
    },
  ]
}

//  scills data
const skills = {
  title: "My skills", 
  description: "In my journey as a Web Developer, I have acquired a diverse set of skills that enable me to build dynamic and responsive web sites and web applications. My expertise spans across various technologies and tools essential for modern web development.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
      { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Vite", icon: <SiVite /> },
    { name: "Webpack", icon: <SiWebpack /> },
   { name: "Git", icon: <SiGit /> },
  { name: "GitHub", icon: <FaGithub /> },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaFigma />,
      name: "Figma",
    },
  ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-start justify-center py-12 xl:py-0 mb-10"
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
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="h-auto w-full">

            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {experience.title}
                </h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-auto">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-cent lg:text-left">{item.position}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">
                  {education.title}
                </h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-cent lg:text-left">{item.degree}</h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="h-full w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="w-full text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="uppercase">{skill.name}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="w-full text-white/60 mx-auto xl:mx-0">{about.description}</p>
                <ul className="grid grid-cols-1 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    )
                  })}
                </ul>
              </div>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;