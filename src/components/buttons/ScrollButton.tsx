"use client";

import Link from "next/link";
import { ArrowDownIcon } from "../Icon";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const locations = [
  "home",
  "about",
  "experience",
  "projects",
  "certifications",
  "skills",
];

export default function ScrollDownButton() {
  const [hash, setHash] = useState("");
  useEffect(() => {
    if (window) {
      setHash(window.location.hash.replace("#", "") ?? "#home");
      // handleScroll(0);
    }
  }, []);

  const handleScroll = (
    incerement = 1,
    event?: React.MouseEvent<HTMLAnchorElement>
  ) => {
    event?.preventDefault();
    const localhash = window.location.hash.replace("#", "") || "home";
    setHash(localhash);
    const index = locations.indexOf(localhash) + incerement;

    const targetId =
      index == locations.length
        ? locations[0]
        : locations[index % locations.length];
    const element = document.getElementById(targetId);

    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <div className="fixed bottom-2 xs:bottom-10 z-30 right-2 xs:right-10 motion-scale-in-[1.5] motion-duration-[0.34s]/scale motion-ease-bounce">
      <Link
        href="#projects"
        onClick={(e) => handleScroll(1, e)}
        className="  bg-primary rounded-full p-3 size-[45px] xs:size-[65px] grid place-items-center shadow-lg
            transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-120 hover:drop-shadow-lg "
      >
        <div
          className={cn(
            "delay-200 transition ease-in-out duration-400",
            hash == locations[locations.length - 2] ? "rotate-180 " : "rotate-0"
          )}
        >
          <div className="xs:hidden">
            <ArrowDownIcon size={15} />
          </div>
          <div className="hidden xs:block">
            <ArrowDownIcon size={25} />
          </div>
        </div>
      </Link>
    </div>
  );
}
