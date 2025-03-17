"use client";

import { useEffect, useState } from "react";
import BrutalNavLink from "./BrutalNavLink";
import clsx from "clsx";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  const navClassName = clsx(
    "z-1 hidden lg:flex flex-row fixed left-0 right-0 max-w-3xl justify-around pt-4 pb-6 bg-background border-2 border-black rounded-xl shadow-[10px_10px_black] px-16 mt-4 mb-8 mx-auto transition-top duration-300",
    
    // Hide when user scrolls down
    isVisible ? "top-0" : "top-[-200px]"
  );
  return (
    <nav className={navClassName}>
      <BrutalNavLink href="/">Home</BrutalNavLink>
      <BrutalNavLink href="/projects">Projects</BrutalNavLink>
      <BrutalNavLink href="/gallery">Gallery</BrutalNavLink>
      <BrutalNavLink href="/my-corner">My Corner</BrutalNavLink>
    </nav>
  );
}
