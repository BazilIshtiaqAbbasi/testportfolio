"use client";
import React from "react";
import { cn } from "@/utils/cn";
import TitleText from "./TitleText";
import { motion } from "framer-motion";
import { textVarient } from "@/utils/motion";
import Link from "next/link";
import { FaFacebook, FaLinkedin, FaMedium } from "react-icons/fa";
import { SiFiverr } from "react-icons/si";
import { Boxes } from "./ui/background-boxes";

const socialIcons = [
    {
        id: 1,
        path: "",
        icon: <FaLinkedin/>
    },
    {
        id: 2,
        path: "",
        icon: <FaFacebook/>
    },
    {
        id: 3,
        path: "",
        icon: <FaMedium/>
    },
    {
        id: 4,
        path: "",
        icon: <SiFiverr/>
    },
]

const IconsBackground = () => {
  return (
    <div className="p-10">
      <TitleText title="Social accounts" />
      <motion.div variants={textVarient} initial="hidden" whileInView="show">
        <div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
          <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

          <Boxes />
          
          <div className="flex gap-4 relative z-20 mt-4"> {/* New Row Styling */}
            {socialIcons.map((val) => (
              <motion.div key={val.id}>
                <Link href={val.path} className="text-white text-5xl hover:cursor-pointer">
                  {val.icon}
                </Link>
              </motion.div>
            ))}
          </div>

          <h1 className={cn("md:text-4xl text-xl text-white relative z-20 mt-6")}>
            My Social network
          </h1>
          <p className="text-center mt-2 text-neutral-300 relative z-20">
          Social network is important to success
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default IconsBackground;
