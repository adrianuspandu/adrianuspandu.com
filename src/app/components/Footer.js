import Image from "next/image";
import Link from "next/link";
import Copyright from "/public/icons/copyright.svg";
import IconBox from "./IconBox";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col items-center gap-4 py-20 border-t-16 border-black mt-20">
      <Link
        href="#"
        className="brutal text-lg py-3 px-4 border-2 border-black rounded-md"
      >
        <Image
          className="inline mr-2"
          width={20}
          src={Copyright}
          alt="copyright"
        />
        {currentYear} Adrianus Pandu Wicaksono
      </Link>
      <IconBox />
    </footer>
  );
}
