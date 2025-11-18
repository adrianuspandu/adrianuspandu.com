import Link from "next/link";
import Image from "next/image"
import NewTab from "/public/icons/new-tab.svg"

interface APLinkProps {
  children: React.ReactNode;
  href: string;
  className: string;
  opensInNewTab: boolean;
}

export default function APLink({ children, href, className, opensInNewTab }: APLinkProps) {
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
