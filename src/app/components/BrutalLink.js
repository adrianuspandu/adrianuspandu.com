import Link from "next/link";
import Image from "next/image"
import NewTab from "../../../public/icons/new-tab.svg"

export default function BrutalLink({ children, href, className, opensInNewTab = false }) {
  return (
    <Link
      href={href}
      target={opensInNewTab ? "_blank" : ""}
      className={
        `flex justify-center gap-2 brutal text-center px-8 py-2.5 rounded-lg border-2 border-black ` + className
      }
    >
      {children}
      {opensInNewTab && 
        <Image
          className=""
          src={NewTab}
          alt="Pandu smiling at the camera"
          />
      }
    </Link>
  );
}
