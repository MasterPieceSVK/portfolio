"use client";
import Link from "next/link";

export default function MobileHeaderLink({
  text,
  href,
  setDrawerOpen,
}: {
  text: string;
  href: string;
  setDrawerOpen: (open: boolean) => void;
}) {
  // const handleScroll = (
  //   event: React.MouseEvent<HTMLAnchorElement>,
  //   href: string
  // ) => {
  //   event.preventDefault();
  //   setDrawerOpen(false);
  //   const targetId = href.replace("#", "");
  //   const element = document.getElementById(targetId);

  //   if (element) {
  //     const yOffset = -100;
  //     const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

  //     window.scrollTo({ top: y, behavior: "smooth" });
  //     history.pushState(null, "", `#${targetId}`);
  //   }
  // };

  return (
    <Link
      // onClick={(e) => handleScroll(e, href)}
      onClick={() => setDrawerOpen(false)}
      href={href}
      className="text-2xl font-hanalei underline underline-offset-4 decoration-accent decoration-dotted text-center"
    >
      {text}
    </Link>
  );
}
