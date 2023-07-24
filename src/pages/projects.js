import Animated from "@/components/Animated";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import cryptoDashboard from "../../public/images/projects/cryptoDashboard.png";

const Project = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light shadow-2xl p-6 relative">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary  font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className=" w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className=" rounded-lg bg-dark text-light p-1 px-6 text-lg font-semibold hover:bg-light hover:text-dark border border-solid border-2xl border-dark"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8">
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
      {/* <Head>
        <title>Mohit Phuldaliya | Projects</title>
        <meta name="description" content="any description" />
      </Head> */}
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="!pt-8 !pb-[2rem]">
          <Animated
            text="Imagination Trumps Knowledge !!"
            className="!text-4xl mb-10 text-orange "
          />
          <div className="grid grid-cols-12 gap-24">
            <div className="col-span-4">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4">
              <Project
                title="Crypto-Dashboard"
                summary="Crypto Dashboard Is a prooject made wiht reactjs and Chakra UI"
                link="/"
                github="https://github.com/Mohit-Phuldaliya/Crypto-Dashboard-Project-6"
                img={cryptoDashboard}
                type="feature"
              />
            </div>
            <div className="col-span-4">
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
