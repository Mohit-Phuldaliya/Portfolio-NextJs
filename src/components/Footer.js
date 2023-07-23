import React from "react";
import Layout from "./Layout";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
      <Layout className="py-2 bg-black text-light flex items-center justify-between">
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className="flex item-center">
          Build With
          <span className="text-2xl px-1 text-red text-semiBold">&#9825;</span>
          by&nbsp;
          <Link href="/" className="text-orange underline underline-offset-2">
            Mohit Phuldaliya
          </Link>
        </div>
        <Link
          href="mailto:phuldaliyamohit@gmail.com"
          target="_blank"
          className="text-purple underline underline-offset-2"
        >
          phuldaliyamohit@gmail.com
        </Link>
      </Layout>
    </footer>
  );
}
