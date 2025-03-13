"use client";
import Link from "next/link";

export default function HeaderLink({
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
    }
  };
  return (
    <Link
      href={href}
      onClick={(e) => handleScroll(e, href)}
      className="underline hover:decoration-solid duration-150 ease-in transition-all underline-offset-4 hover:underline-offset-8 decoration-accent decoration-dotted"
    >
      {text}
    </Link>
  );
}
