import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Mohit from "../../public/images/profile/Mohit.jpeg";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import LeadershipExperience from "@/components/LeadershipExperience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springvalue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springvalue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springvalue, value]);

  return <span ref={ref}></span>;
};

export default function about() {
  return (
    <>
      <Head>
        <title>Mohit Phuldaliya | About</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-8 !pb-[5rem]">
          <Animated
            text="Passion Fuels Purpose !!"
            className="!text-4xl mb-10 !text-primary  lg:!text-2xl sm:!text-xl xs:!text-xl sm:mb-5"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold uppercase text-purple dark:text-primaryDark underline underline-offset-2">
                About me
              </h2>
              <p className="font-medium">
                I&apos;m{" "}
                <motion.span
                  className="text-red font-bold"
                  whileHover={{ color: "blue" }}
                >
                  <a
                    href="https://www.linkedin.com/in/mohit-phuldaliya-58aba7217/"
                    target={"_blank"}
                  >
                    Mohit Phuldaliya
                  </a>
                </motion.span>
                , a motivated software engineer specializing in frontend,
                backend, and full-stack development. Skilled in{" "}
                <span className="font-bold">
                  Data structures, Algorithms, and Problem-Solving
                </span>{" "}
                with proficiency in
                <span className="font-bold">
                  &nbsp;C, C++, JavaScript, HTML and CSS.
                </span>{" "}
                Experienced in
                <span className="font-bold">
                  &nbsp;Reactjs, Node.js, Express.js, Tailwindcss, MongoDB, and
                  Redux toolkit&nbsp;
                </span>
                for crafting intuitive user interfaces and ensuring seamless
                backend functionality. Proficient in Windows and Linux, using
                Git for version control
              </p>
              <p className="font-medium my-4">
                Strong leadership and communication skills as a Student
                Coordinator at M.B.M University&apos;s Training & Placement
                Office. Active in coding & sports clubs, like football and
                badminton, and coding communities like GDSC and Codechef.
              </p>
              <p className="font-medium">
                I&apos;m seeking internship or professional opportunities in
                software engineering to collaborate and grow together.
                Let&apos;s connect!
              </p>
            </div>
            <div className="col-span-3 relative h-max  flex justify-center items-center xl:col-span-4 md:order-1 md:col-span-8">
              <Image
                src={Mohit}
                alt="Mohit"
                className="w-[20rem] h-auto border-2 border-solid border-dark dark:border-light rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="capitalize font-bold text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Leetcode Problems Solved
                </h2>
              </div>
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="capitalize font-bold text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end xl:items-center justify-center">
                <span className="inline-block text-5xl font-bold md:text-4xl sm:text-3xl xs:text-2xl">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="capitalize font-bold text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of Experience in coding
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
          <LeadershipExperience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
