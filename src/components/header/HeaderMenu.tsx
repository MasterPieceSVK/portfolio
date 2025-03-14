"use client";
import useMediaQuery from "@/hooks/MediaQuery";
import HeaderLink from "./HeaderLink";
const categories = [
  { text: "About me", href: "#about" },
  { text: "Experience", href: "#experience" },
  { text: "Projects", href: "#projects" },
  { text: "Certifications", href: "#certifications" },
  { text: "Skills", href: "#skills" },
];

export default function HeaderMenu() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");

  if (isDesktop) {
    return (
      <div>
        <ul className="flex gap-11 text-2xl">
          {categories.map((category, i) => (
            <HeaderLink key={i} href={category.href} text={category.text} />
          ))}
        </ul>
      </div>
    );
  }
}
