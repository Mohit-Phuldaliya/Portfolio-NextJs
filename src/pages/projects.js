import Animated from "@/components/Animated";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoDashboard from "../../public/images/projects/cryptoDashboard.png";
import Head from "next/head";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative dark:bg-dark dark:border-light lg:p-4 xs:p-2">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary dark:text-primaryDark  font-medium text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl md:text-xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light sm:text-sm md:text-sm">
          {summary}
        </p>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-2xl border-dark dark:border-light md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function projects() {
  return (
    <>
      <Head>
        <title>Mohit Phuldaliya | Projects</title>
        <meta name="description" content="any description" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="!pt-8 !pb-[2rem]">
          <Animated
            text="Imagination Trumps Knowledge !!"
            className="!text-4xl mb-10 !text-orange lg:!text-2xl sm:!text-xl xs:!text-xl sm:mb-5"
          />
          <div className="grid grid-cols-12 gap-24 xl:gap-x-16 lg:gap-x-8 sm:gap-x-0">
            <div className="col-span-4 md:col-span-6 lg:col-span-6 sm:col-span-12">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-6 sm:col-span-12 xs:col-span-12">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4 md:col-span-6 lg:col-span-6 sm:col-span-12 xs:col-span-12 ">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
