"use client";
import { Drawer, DrawerContent } from "@/components/ui/drawer";

import useMediaQuery from "@/hooks/MediaQuery";
import HeaderLink from "./HeaderLink";
import { MenuIcon } from "../Icon";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import MobileHeaderLink from "./MobileHeaderLink";
import { useState } from "react";
const categories = [
  { text: "About me", href: "#about" },
  { text: "Experience", href: "#experience" },
  { text: "Projects", href: "#projects" },
  { text: "Certifications", href: "#certifications" },
  { text: "Skills", href: "#skills" },
];

export default function HeaderMenu() {
  const isDesktop = useMediaQuery("(min-width: 1280px)");
  const [drawerOpen, setDrawerOpen] = useState(false);
  if (isDesktop) {
    return (
      <nav>
        <ul className="flex gap-11 text-2xl">
          {categories.map((category, i) => (
            <HeaderLink key={i} href={category.href} text={category.text} />
          ))}
        </ul>
      </nav>
    );
  }
  return (
    <Drawer open={drawerOpen} direction="bottom" onOpenChange={setDrawerOpen}>
      <button onClick={() => setDrawerOpen(true)} className="p-4">
        <MenuIcon />
      </button>
      <DrawerContent>
        <DialogTitle className="sr-only">Menu</DialogTitle>
        <DialogDescription className="sr-only">Menu</DialogDescription>
        <div className="flex flex-col justify-center items-center h-lvh z-50 gap-9">
          <button
            onClick={() => setDrawerOpen(false)}
            className="font-hanalei text-4xl"
          >
            X
          </button>
          <div className="grid gap-2">
            {categories.map((category, i) => (
              <MobileHeaderLink
                setDrawerOpen={setDrawerOpen}
                {...category}
                key={i}
              />
            ))}
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
