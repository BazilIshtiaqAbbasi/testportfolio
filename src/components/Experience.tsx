"use client";
import React from "react";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import { BackgroundGradient } from "./ui/background-gradient";
import { experience } from "@/utils/data";

const Experience = () => {
  return (
    <div>
      <TitleText title="My Experience" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-16">
        {experience?.map((exp) => (
          <motion.div
            key={exp.id}
            variants={textVarient}
            initial="hidden"
            whileInView="show"
            whileHover={{
              y: -10,
              scale: 1.05,
              rotate: 2,
              transition: { duration: 0.3, ease: "easeInOut" },
            }}
          >
            <BackgroundGradient className="rounded-[22px] p-4 bg-zinc-900">
              <p className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
                {exp.startDate} - {exp.endDate}
              </p>
              <p className="text-sm text-neutral-600">{exp.title}</p>
              <p className="text-gray-400 mt-2">{exp.descripton}</p>
            </BackgroundGradient>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
