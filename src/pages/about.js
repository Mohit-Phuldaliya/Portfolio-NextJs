import Animated from "@/components/Animated";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Mohit from "../../public/images/profile/Mohit.jpeg";
import React, { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import LeadershipExperience from "@/components/LeadershipExperience";
import Education from "@/components/Education";

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
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-8 !pb-[5rem]">
          <Animated
            text="Passion Fuels Purpose !!"
            className="!text-4xl mb-10 !text-primary "
          />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-2xl font-bold uppercase text-purple dark:text-primaryDark underline underline-offset-2">
                About me
              </h2>
              <p className="font-medium">
                I'm <span className="text-red font-bold">Mohit Phuldaliya</span>
                , a motivated software engineer specializing in frontend,
                backend, and full-stack development. Skilled in data structures,
                algorithms, and problem-solving with proficiency in
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
                Coordinator at M.B.M University's Training & Placement Office.
                Active in coding & sports clubs, like football and badminton,
                and coding communities like GDSC and Codechef.
              </p>
              <p className="font-medium">
                I'm seeking internship or professional opportunities in software
                engineering to collaborate and grow together. Let's connect!
              </p>
            </div>
            <div className="col-span-3 relative h-max  flex justify-center items-center">
              <Image
                src={Mohit}
                alt="Mohit"
                className="w-[20rem] h-auto border-2 border-solid border-dark dark:border-light rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="capitalize font-bold text-dark/75 dark:text-light/75">
                  Leetcode Problems Solved
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={15} />+
                </span>
                <h2 className="capitalize font-bold text-dark/75 dark:text-light/75">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-5xl font-bold">
                  <AnimatedNumbers value={2} />+
                </span>
                <h2 className="capitalize font-bold text-dark/75 dark:text-light/75">
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
