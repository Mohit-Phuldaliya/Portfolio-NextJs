import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info, cgpa }) => {
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
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {type}
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-light xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full  text-dark/75 dark:text-light/75 md:text-sm text-sm">
          {info}
        </p>
        <p className="font-bold w-full text-primary md:text-sm text-sm">
          {cgpa}
        </p>
      </motion.div>
    </li>
  );
};

export default function Education() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-[7rem]">
      <h2 className="text-purple dark:text-primaryDark font-bold text-5xl  mb-[5rem] w-full text-center  underline underline-offset-2 md:text-3xl xs:text-2xl md:mb-8">
        Education
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px]  h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            type="Bachelor of Engineering"
            time="2020 - 2024"
            place="M.B.M UNIVERSITY, JODHPUR"
            info="Final year student having major Electrical Engineering, Student Coordinator at Training & Placement Office. Active in sports clubs, like football and badminton, and coding communities like GDSC and Codechef"
            cgpa="Current CGPA: 8.75"
          />
          <Details
            type="Senior Secondary Education"
            time="2018 - 2020"
            place="CENTRAL ACADEMY CANTT Jodhpur"
            info="Completed my Senior Secondary Education with majors :- Physics, Maths, Chemistry, Englishand Hindi"
            cgpa="Percentage: 82.2%"
          />
          <Details
            type="Secondary Education"
            time="till 2018"
            place="KENDRIYA VIDYALAYA (BSF) Jodhpur"
            info="Completed my Secondary Education, Achievements:- Silver Medalist (Hockey Under-19) KVS Regional Sports Meet 2017-18, Bronze Medalist (Hockey Under-19) KVS Regional Sports Meet 2016-17."
          />
        </ul>
      </div>
    </div>
  );
}
