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
        <h3 className="capitalize font-bold text-xl">
          {position}&nbsp;
          <a
            href={compnayLink}
            className="text-primary capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-light/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-dark/75 dark:text-light/75">
          {work}
        </p>
      </motion.div>
    </li>
  );
};

export default function LeadershipExperience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-[10rem]">
      <h2 className="text-purple dark:text-primaryDark font-bold text-5xl  mb-[5rem] w-full text-center  underline underline-offset-2">
        Leadership Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top dark:bg-light"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Student Coordinator"
            company="TRAINING & PLACEMENT OFFICE"
            compnayLink="https://www.linkedin.com/in/tpocellmbm/"
            time="April 2022 - Present"
            address="M.B.M University Jodhpur, Rajasthan"
            work="Driving placements, managing student data, and forging industry connections. Skilled in coordinating interviews, facilitating communication, and ensuring a seamless recruitment process. Committed to matching student skills with suitable opportunities, while developing organizational and teamwork prowess."
          />
        </ul>
      </div>
    </div>
  );
}
