"use client";

import { useEffect, useState } from "react";
import BrutalNavLink from "./BrutalNavLink";
import clsx from "clsx";
import Link from "next/link";

export default function Navigation() {
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // State for hamburger menu
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }

  const navClassName = clsx(
    "z-1 hidden lg:flex flex-row fixed left-0 right-0 max-w-3xl justify-around pt-4 pb-6 bg-background border-2 border-black rounded-xl shadow-[10px_10px_black] px-16 mt-4 mx-auto transition-top duration-300",

    // Hide when user scrolls down
    isVisible ? "top-0" : "top-[-200px]"
  );

  const menuListClassName = clsx(
    "bg-black/80 flex flex-col gap-10 items-center py-8",
    isOpen ? "static" : "hidden"
  );
  return (
    <>
      <nav className={navClassName}>
        <BrutalNavLink href="/">Home</BrutalNavLink>
        <BrutalNavLink href="/projects">Projects</BrutalNavLink>
        <BrutalNavLink href="/gallery">Gallery</BrutalNavLink>
        <BrutalNavLink href="/my-corner">My Corner</BrutalNavLink>
      </nav>

      <nav className="z-1 fixed lg:hidden flex flex-col w-full backdrop-blur-lg">
        <div className="bg-black/30 w-full py-4 px-8">
          <button
            onClick={handleClick}
            className="font-display font-bold border border-white py-2 px-4 rounded-lg cursor-pointer hover:bg-black duration-200"
          >
            {isOpen ? "Close" : "Menu"}
          </button>
        </div>

        <div className={menuListClassName}>
          <button onClick={handleClick}>
            <Link href="/" className="text-2xl hover:underline">
              Home
            </Link>
          </button>
          <button onClick={handleClick}>
            <Link href="/projects" className="text-2xl hover:underline">
              Projects
            </Link>
          </button>
          <button onClick={handleClick}>
            <Link href="/gallery" className="text-2xl hover:underline">
              Gallery
            </Link>
          </button>
          <button onClick={handleClick}>
            <Link href="/my-corner" className="text-2xl hover:underline">
              My Corner
            </Link>
          </button>
        </div>
      </nav>
    </>
  );
}
