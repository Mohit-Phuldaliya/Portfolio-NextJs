import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, compnayLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon refrence={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={compnayLink}
            className="text-primary capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-dark/75">{work}</p>
      </motion.div>
    </li>
  );
};

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-[10rem]">
      <h2 className="text-purple font-bold text-5xl  mb-[5rem] w-full text-center  underline underline-offset-2">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Backend-Teaching Assistant"
            company="Coding Ninjas"
            compnayLink="https://www.codingninjas.com/"
            time="Feb. 2023 - April 2023"
            address="Remote"
            work="Key Roles Debugging code, Taking doubt sessions, helping students in projects
            500+ students, resolved 750+ doubts with an average rating of 4.89/5.00.
            Technology Used: NodeJs, ExpressJs, MongoDb and ReactJs."
          />
          <Details
            position="Research Intern"
            company="DRDO JODHPUR"
            compnayLink="DRDO JODHPUR"
            time="10 June 2022 - 25 July 2022"
            address="Jodhpur, Rajasthan"
            work="Worked with DRDO Scientist on Study of Radar & Designing of Patch Antenna Worked on Designing and Fabrication of Patch Antenna - used for detecting
            frequency 9-11GHz"
          />
        </ul>
      </div>
    </div>
  );
}
