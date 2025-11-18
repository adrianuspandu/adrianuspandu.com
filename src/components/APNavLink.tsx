import Link from "next/link";
import { usePathname } from "next/navigation";

interface APNavLinkProps {
  children: React.ReactNode;
  href: string;
}

export default function APNavLink({ children, href }: APNavLinkProps) {
  const pathname: string = usePathname();
  const isActive: boolean = pathname === href;

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
