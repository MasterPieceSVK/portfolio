"use client";
import NameLink from "./CategoryLink";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header
      className={`font-hanalei w-[100%] h-[83px] bg-white/30  backdrop-blur-sm sticky top-0 z-40`}
    >
      <div className="flex justify-between items-center pl-4 pr-1 sm:px-5 lg:px-10 py-5  text-primary">
        <NameLink href="#home" text="M. Jaroscak" />
        <HeaderMenu />
      </div>
    </header>
  );
}
