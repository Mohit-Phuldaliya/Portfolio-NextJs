import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <div
      className="flex
    items-center justify-center mt-2"
    >
      <Link href="/" className="w-16 h-16 bg-dark text-light flex">
        MP
      </Link>
    </div>
  );
}
