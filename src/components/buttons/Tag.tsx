"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Tag({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };
  return (
    <Link
      onClick={(e) => handleScroll(e, "#skills")}
      href={"#skills"}
      className={cn(
        "text-xs font-medium bg-gray-custom w-fit grid place-items-center px-3.5 py-1 rounded-[50px] text-primary transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg",
        className
      )}
    >
      {text}
    </Link>
  );
}
