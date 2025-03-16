import Link from "next/link";
import { ReactNode } from "react";

export default function Button({
  text,
  icon,
  href,
}: {
  text: string;
  icon?: ReactNode;
  href: string;
}) {
  return (
    <Link
      rel="noopener noreferrer"
      target="_blank"
      href={href}
      className="group relative px-6 py-1 rounded-[10px] text-[15px] font-semibold flex justify-center gap-2.5 items-center w-fit text-white overflow-hidden transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl"
    >
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary to-third"></div>
      <span className="relative z-10 flex items-center gap-2.5">
        {text}
        {icon}
      </span>
    </Link>
  );
}
