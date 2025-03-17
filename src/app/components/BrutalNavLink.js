"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BrutalNavLink({ children, href }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`brutal px-8 py-2.5 rounded-lg border-2 border-black ${
        isActive ? "bg-secondary" : ""
      }`}
    >
      {children}
    </Link>
  );
}
