import React from "react";
import TitleText from "./TitleText";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const Education = () => {
  return (
    <div>
      <TitleText title="My Education" />
      <StickyScroll content={content} />
    </div>
  );
};

export default Education;

const content = [
  {
    title: "Metric (10th Grade)",
    description:
      "Completed from Read Foundation High School (RFHS), with a focus on foundational subjects including Mathematics, Science, and English. Developed a strong academic foundation that set the stage for further studies in technology and web development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Metric in 2019
      </div>
    ),
  },
  {
    title: "Intermediate (12th Grade)",
    description:
      "Completed both matriculation and 12th grade at Read Foundation High School (RFHS). Focused on core academic areas, building a solid grounding in Mathematics, Science, and English, which prepared me well for advanced studies in technology and web development.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Intermediate in 2021
      </div>
    ),
  },
  {
    title: "BS computer science",
    description:
      "Currently pursuing a Bachelor's in Computer Science from Virtual University, expected to continue through 2026. This program is enhancing my technical skills, with a focus on programming, software development, and web technologies, aligning with my career aspirations in web development and software engineering.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        BS computer science upto 2026
      </div>
    ),
  },
];
