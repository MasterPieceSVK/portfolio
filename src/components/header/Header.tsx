"use client";
import { useScroll } from "motion/react";
import NameLink from "./CategoryLink";
import HeaderMenu from "./HeaderMenu";
import { motion } from "motion/react";

export default function Header() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <header
        className={`font-hanalei w-[100%] h-[83px] bg-white/30  backdrop-blur-sm sticky top-0 z-40`}
      >
        <div className="flex justify-between items-center pl-4 pr-1 sm:px-5 lg:px-10 py-5  text-primary">
          <NameLink href="#home" text="M. Jaroscak" />
          <HeaderMenu />
        </div>
      </header>
      <motion.div
        className="sticky -top-1 z-50 bg-primary h-2.5"
        style={{
          scaleX: scrollYProgress,
        }}
      />
    </>
  );
}
