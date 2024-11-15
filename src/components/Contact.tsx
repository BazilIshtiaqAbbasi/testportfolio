"use client";
import React from "react";
import { motion } from "framer-motion";
import TitleText from "./TitleText";
import { fadeIn, staggerContainer } from "@/utils/motion";

import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { ButtonsCard } from "./ui/tailwindcss-buttons";
import { IconPhone, IconMail, IconHomeLink } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div>
      <TitleText title="Contact Us" />
      <div className="grid grid-cols-1 md:grid-cols-2">
        <motion.div
          variants={staggerContainer(0.5,0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex mx-auto"
        >
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="max-w-2xl w-full rounded-2xl m-5 p-4 md:p-8 bg-purple-800/5 border-[1px] border-purple-800 hover:shadow-md hover:shadow-purple-500"
          >
            <h2 className="font-bold text-3xl lg:text-5xl text-purple-500">
              Contact with me & hire me
            </h2>
            <p className="text-neutral-300 text-sm max-w-sm mt-2">
              You can also share your thought or any problem in your work.
            </p>
            <form className="my-8">
              <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname" className="text-white">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" className="bg-neutral-800"/>
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname" className="text-white">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" className="bg-neutral-800"/>
                </LabelInputContainer>
              </div>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email" className="text-white">Email Address</Label>
                <Input
                  id="email"
                  placeholder="projectmayhem@fc.com"
                  type="email"
                  className="bg-neutral-800"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password" className="text-white">Password</Label>
                <Input id="password" placeholder="••••••••" type="password" className="bg-neutral-800"/>
              </LabelInputContainer>
              <LabelInputContainer className="mb-8">
                <Label htmlFor="twitterpassword" className="text-white">Your twitter password</Label>
                <Input
                  id="twitterpassword"
                  placeholder="••••••••"
                  type="twitterpassword"
                  className="bg-neutral-800"
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-800 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Submit &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-600 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />

              <div className="flex flex-col space-y-4">
                {/* <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    GitHub
                  </span>
                  <BottomGradient />
                </button>
                <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Google
                  </span>
                  <BottomGradient />
                </button> */}
                {/* <button
                  className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                  type="submit"
                >
                  <IconBrandOnlyfans className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                  <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    OnlyFans
                  </span>
                  <BottomGradient />
                </button> */}
              </div>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.5,0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className="flex mx-auto"
        >
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="flex justify-center flex-col gap-10 w-60"
          >
            <ButtonsCard>
              <IconPhone
                stroke={2}
                size={50}
                className="text-white bg-purple-500 rounded-full p-2"
              />
              <div className="flex flex-col gap-2">
                <label className="text-md">Phone</label>
                <label className="text-xl lg:text-2xl">+92 307 9921736</label>
              </div>
            </ButtonsCard>

            <ButtonsCard>
              <IconMail
                stroke={2}
                size={50}
                className="text-white bg-purple-500 rounded-full p-2"
              />
              <div className="flex flex-col gap-2">
                <label className="text-md">Email</label>
                <label className="text-xl lg:text-xl">
                  zohasajidabbasi@gmail.com
                </label>
              </div>
            </ButtonsCard>
            <ButtonsCard>
              <IconHomeLink
                stroke={2}
                size={50}
                className="text-white bg-purple-500 rounded-full p-2"
              />
              <div className="flex flex-col gap-2">
                <label className="text-md">Address</label>
                <label className="text-xl lg:text-2xl">
                        I 9, sector 1 , Islamabad
                </label>
              </div>
            </ButtonsCard>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
