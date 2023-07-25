import React from "react";
import Logo from "./Logo";
import { useRouter } from "next/router";
import {
  GithubIcon,
  LeetCodeIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
} from "./Icons";
import { motion } from "framer-motion";
import useThemeSwitcher from "./hooks/useThemeSwitcher";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <a href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          router.asPath === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </a>
  );
};

export default function NavBar() {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8  font-medium flex items-center justify-between dark:text-light">
      <nav>
        <CustomLink href="/" title="Home" className="mr-4" />
        <CustomLink href="/about" title="About" className="mx-4" />
        <CustomLink href="/projects" title="Projects" className="ml-4" />
      </nav>

      <nav className="flex items-center justify-center flex-wrap">
        <motion.a
          href="https://github.com/Mohit-Phuldaliya"
          target={"_blank"}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.6 }}
          className="w-8 mx-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/mohit-phuldaliya-58aba7217/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-7 mx-3"
          whileTap={{ scale: 0.6 }}
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          href="https://leetcode.com/include_mohit/"
          target={"_blank"}
          whileHover={{ y: -2 }}
          className="w-7 ml-3"
          whileTap={{ scale: 0.6 }}
        >
          <LeetCodeIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
        >
          {mode === "dark" ? (
            <SunIcon className={"fill-dark"} />
          ) : (
            <MoonIcon className={"fill-dark"} />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
}
