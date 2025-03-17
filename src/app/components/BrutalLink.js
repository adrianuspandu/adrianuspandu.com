import Link from "next/link";

export default function BrutalLink({ children, href, newTab, className }) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : ""}
      className={
        `brutal text-center px-8 py-2.5 rounded-lg border-2 border-black ` + className
      }
    >
      {children}
    </Link>
  );
}
