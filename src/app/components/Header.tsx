import { hanalei_fill } from "../layout";
import HeaderLink from "./HeaderLink";
import NameLink from "./NameLink";

export default function Header() {
  const categories = [
    { text: "About me", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Certifications", href: "#certifications" },
    { text: "Skills", href: "#skills" },
  ];

  return (
    <nav
      className={`${hanalei_fill.className} w-[100%] h-[83px] bg-transparent drop-shadow-lg backdrop-blur-sm sticky top-0 `}
    >
      <div className="flex justify-between items-center px-10 py-5  text-primary">
        <NameLink href="#home" text="Maximilian Jaroscak" />
        <div>
          <ul className="flex gap-11 text-2xl">
            {categories.map((category, i) => (
              <HeaderLink key={i} href={category.href} text={category.text} />
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
