import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, compnayLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon refrence={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={compnayLink}
            className="text-primary capitalize"
            target="_blank"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-light xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-dark/75 dark:text-light/75 md:text-sm text-sm">
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
    <div className="my-[7rem]">
      <h2 className="text-purple dark:text-primaryDark font-bold text-5xl  mb-[5rem] w-full text-center  underline underline-offset-2 md:text-3xl xs:text-2xl md:mb-8">
        Leadership Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
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
