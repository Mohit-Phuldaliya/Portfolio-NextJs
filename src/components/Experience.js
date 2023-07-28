import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  compnayLink,
  time,
  address,
  work,
  cert,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon refrence={ref} />
      <motion.div
        initial={{ y: 70 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
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
          {time} | {address} |{" "}
          <a className="text-primaryDark" href={cert} target="_blank">
            Certificate
          </a>
        </span>
        <p className="font-medium w-full text-dark/75 dark:text-light/75 md:text-sm text-sm">
          {work}
        </p>
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
    <div className="my-[7rem]">
      <h2 className="text-purple dark:text-primaryDark font-bold text-5xl  mb-[5rem] w-full text-center  underline underline-offset-2 md:text-3xl xs:text-2xl md:mb-8">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Backend-Teaching Assistant"
            company="Coding Ninjas"
            compnayLink="https://www.codingninjas.com/"
            time="Feb. 2023 - April 2023"
            address="Remote"
            work="Key Roles Debugging code, Taking doubt sessions, helping students in projects
            500+ students, resolved 750+ doubts with an average rating of 4.89/5.00.
            Technology Used: NodeJs, ExpressJs, MongoDb and ReactJs."
            cert="https://ninjasfiles.s3.amazonaws.com/certificate701123d867c8a1c5a13553dd0dde76e19a1e.pdf"
          />
          <Details
            position="Research Intern"
            company="DRDO JODHPUR"
            compnayLink="https://www.linkedin.com/company/drdo-ministry-of-defence-govt-of-india/"
            time="10 June 2022 - 25 July 2022"
            address="Jodhpur, Rajasthan"
            work="Worked with DRDO Scientist on Study of Radar & Designing of Patch Antenna Worked on Designing and Fabrication of Patch Antenna - used for detecting
            frequency 9-11GHz"
            cert="https://drive.google.com/file/d/1YnY57VfdfD4Oocc4HWk9KqdEfT1ezxBX/view?usp=sharing"
          />
        </ul>
      </div>
    </div>
  );
}
