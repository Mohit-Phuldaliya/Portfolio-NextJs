import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:text-dark dark:bg-light"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};

export default function Skills() {
  return (
    <>
      <div className="flex items-center justify-center flex-col">
        <h2 className="text-purple dark:text-primaryDark font-bold text-5xl mt-20 w-full text-center  underline underline-offset-2">
          Skills
        </h2>
        <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
          <Skill name="Web" x="0vw" y="0vw" />
          <Skill name="HTML" x="-25vw" y="2vw" />
          <Skill name="CSS" x="-5vw" y="-10vw" />
          <Skill name="JavaScript" x="20vw" y="6vw" />
          <Skill name="ReactJs" x="0vw" y="12vw" />
          <Skill name="NodeJs" x="-20vw" y="-15vw" />
          <Skill name="ExpressJS" x="15vw" y="-12vw" />
          <Skill name="NextJs" x="32vw" y="-5vw" />
          <Skill name="MongoDB" x="0vw" y="-20vw" />
          <Skill name="Firebase" x="-25vw" y="18vw" />
          <Skill name="TailwindCSS" x="18vw" y="18vw" />
        </div>
      </div>
    </>
  );
}
