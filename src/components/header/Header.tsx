import NameLink from "./CategoryLink";
import HeaderMenu from "./HeaderMenu";

export default function Header() {
  return (
    <header
      className={`font-hanalei w-[100%] h-[83px] bg-transparent drop-shadow-lg backdrop-blur-sm sticky top-0 z-50`}
    >
      <div className="flex justify-between items-center px-10 py-5  text-primary">
        <NameLink href="#home" text="M. Jaroscak" />
        <HeaderMenu />
      </div>
    </header>
  );
}
