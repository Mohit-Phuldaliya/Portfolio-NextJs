import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilepic from "../../public/images/profile/homepagepic3.png";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import Animated from "@/components/Animated";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";

export default function Home() {
  return (
    <>
      <Head>
        <title>MohitPhuldaliya</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0 ">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 flex items-center justify-center">
              <Image
                src={profilepic}
                alt="Mohit Phuldaliya/"
                className="w-[30rem] h-auto rounded-full border-solid border-[5px] bg-dark/25 border-dark"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center justify-center self-center">
              <Animated
                text="Hello👋"
                className="!text-5xl !text-left text-purple"
              />
              <Animated
                text="Mohit Phuldaliya"
                className="!text-6xl !text-left "
              />
              <Animated
                text="This Side !!"
                className="!text-3xl !text-left text-red"
              />
              <p className="my-4 text-base font-medium">
                I am an exceptional Full-Stack developer, transforming visionary
                concepts into cutting-edge web applications. With a proven track
                record in Full-Stack development and Software Engineering, my
                latest projects reflect my unwavering commitment to innovation.
                Explore my portfolio to witness the power of turning ideas into
                reality.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  target={"_blank"}
                  href="https://drive.google.com/file/d/1C8aJ8NnPldBqBs96jMkK-Pkbsq0Z4Bib/view?usp=sharing"
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2  border-solid border-transparent hover:border-dark"
                >
                  Resume <LinkArrow className={"w-6 ml-1"} />
                </Link>
                <Link
                  target={"_blank"}
                  href="mailto:phuldaliyamohit@gmail.com"
                  className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-dark hover:text-light border-2  border-solid border-dark hover:border-transparent ml-4"
                >
                  Contact <LinkArrow className={"w-6 ml-1"} />
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={lightBulb} alt="Mohit" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
}
