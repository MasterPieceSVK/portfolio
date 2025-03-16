"use client";
import Link from "next/link";

export default function NameLink({
  href,
  text,
}: {
  href: string;
  text: string;
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
      href={href}
      onClick={(e) => handleScroll(e, href)}
      className="text-[32px] duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl "
    >
      {text}
    </Link>
  );
}
